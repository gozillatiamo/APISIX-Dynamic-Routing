local core = require("apisix.core")
local redis = require("resty.redis")
local pgmoon = require("pgmoon")

local plugin_name = "domain-theme-router"

local schema = {
    type = "object",
    properties = {
        redis_host = {type = "string", default = "127.0.0.1"},
        redis_port = {type = "integer", default = 6379},
        postgres_host = {type = "string", default = "127.0.0.1"},
        postgres_port = {type = "integer", default = 5432},
        postgres_database = {type = "string"},
        postgres_user = {type = "string"},
        postgres_password = {type = "string"},
        cache_ttl = {type = "integer", default = 600}
    },
    required = {"postgres_database", "postgres_user", "postgres_password"}
}

local _M = {
    version = 0.1,
    priority = 1000,
    type = 'access',
    name = plugin_name,
    schema = schema
}

function _M.check_schema(conf)
    return core.schema.check(schema, conf)
end

local function get_theme_from_redis(conf, domain)
    local red = redis:new()
    red:set_timeout(1000)
    
    local ok, err = red:connect(conf.redis_host, conf.redis_port)
    if not ok then
        core.log.error("failed to connect to Redis: ", err)
        return nil
    end

    local theme, err = red:get("theme:" .. domain)
    if not theme or theme == "null" or theme == ngx.null then
        return nil
    end
    core.log.warn("domain-theme-router: Theme from Redis: ", theme)
    return theme
end

local function get_theme_from_postgres(conf, domain)
    local pg = pgmoon.new({
        host = conf.postgres_host,
        port = conf.postgres_port,
        database = conf.postgres_database,
        user = conf.postgres_user,
        password = conf.postgres_password,
        ssl = false
    })
    
    local ok, err = pg:connect()
    if not ok then
        core.log.error("failed to connect to PostgreSQL: ", err)
        return nil
    end

    local query = "SELECT theme FROM domain_mappings WHERE domain = " .. pg:escape_literal(domain)
    local res, err = pg:query(query)
    if not res or #res == 0 then
        return nil
    end

    local theme = res[1].theme
    if theme == "null" or theme == ngx.null then
        return nil
    end
    
    if type(theme) ~= "string" then
        theme = tostring(theme)
    end
    core.log.warn("domain-theme-router: Theme from PostgreSQL: ", theme)
    return theme
end

local function cache_theme_in_redis(conf, domain, theme)
    if not theme or theme == "null" or theme == ngx.null then
        return
    end

    local red = redis:new()
    red:set_timeout(1000)
    
    local ok, err = red:connect(conf.redis_host, conf.redis_port)
    if not ok then
        core.log.error("failed to connect to Redis: ", err)
        return
    end

    red:setex("theme:" .. domain, conf.cache_ttl, theme)
    core.log.warn("domain-theme-router: Cached theme in Redis: ", theme)
end

function _M.access(conf, ctx)
    local domain = ngx.req.get_headers()["Host"]
    local upstream_id = "theme_b_upstream"  -- default upstream

    -- Try Redis first
    local theme = get_theme_from_redis(conf, domain)
    if not theme then
        -- Try PostgreSQL
        theme = get_theme_from_postgres(conf, domain)
        if theme then
            -- Cache in Redis
            cache_theme_in_redis(conf, domain, theme)
        end
    end

    if theme then
        upstream_id = "theme_" .. theme .. "_upstream"
    end

    ctx.upstream_id = upstream_id

    core.log.warn("domain-theme-router: Routing ", domain, " to upstream: ", upstream_id, " (", upstream_host, ")")
end

return _M 