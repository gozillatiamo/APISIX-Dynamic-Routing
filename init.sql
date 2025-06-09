CREATE TABLE
    domain_mappings (
        id SERIAL PRIMARY KEY,
        domain VARCHAR(255) NOT NULL UNIQUE,
        theme VARCHAR(1) NOT NULL,
        created_at TIMESTAMP
        WITH
            TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
        WITH
            TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

-- Insert sample data
INSERT INTO
    domain_mappings (domain, theme)
VALUES
    ('abcd.a.com', 'a'),
    ('market.com', 'a'),
    ('abcd.b.com', 'b'),
    ('carroom.com', 'b');