FROM apache/apisix:3.12.0-debian

USER root

# Install build dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        build-essential \
        libpq-dev \
        luarocks \
    && rm -rf /var/lib/apt/lists/*


# Install lua-resty-redis
RUN luarocks install lua-resty-redis

# Install pgmoon
RUN luarocks install pgmoon

# Clean up
RUN apt-get purge -y --auto-remove build-essential git luarocks \
    && rm -rf /var/lib/apt/lists/*

USER apisix 