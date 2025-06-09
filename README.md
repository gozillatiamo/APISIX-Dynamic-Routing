# Dynamic Routing POC

This project demonstrates a dynamic routing system using Next.js, APISIX, PostgreSQL, and Redis. It implements a multi-theme architecture where different domains can serve different themes of the same application.

## Prerequisites

- Docker and Docker Compose
- Git

## Project Structure

```
.
├── apisix/                 # APISIX configuration and custom plugins
├── src/                   # Next.js application source code
├── public/               # Static assets
├── docker-compose.yml    # Docker services configuration
├── Dockerfile           # Main application Dockerfile
└── Dockerfile.apisix    # APISIX Dockerfile
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dynamic-routing-poc
```

### 2. Configure Hosts File

Add the following entries to your hosts file (`/etc/hosts` on Linux/Mac or `C:\Windows\System32\drivers\etc\hosts` on Windows):

```
127.0.0.1 abcd.a.com
127.0.0.1 market.com
127.0.0.1 abcd.b.com
127.0.0.1 carroom.com
```

### 3. Start the Services

```bash
docker-compose up -d
```

This will start the following services:

- Theme A (Next.js) on port 4000
- Theme B (Next.js) on port 4001
- PostgreSQL on port 5432
- Redis on port 6379
- APISIX on port 80 (HTTP) and 9080 (Admin API)

### 4. Access the Application

You can access the different themes through their respective domains:

Theme A domains:

- http://abcd.a.com
- http://market.com

Theme B domains:

- http://abcd.b.com
- http://carroom.com

## Architecture

The project uses a microservices architecture with the following components:

- **Next.js Applications**: Two instances running different themes
- **APISIX**: API Gateway handling routing based on domains
- **PostgreSQL**: Database for storing application data
- **Redis**: Caching layer

## Environment Variables

The following environment variables are used:

- `NEXT_PUBLIC_SITE_THEME`: Theme identifier (A or B)
- Database credentials (configured in docker-compose.yml)

## Troubleshooting

1. If you can't access the domains, ensure your hosts file is properly configured
2. If services fail to start, check Docker logs:

```bash
docker-compose logs
```

3. To reset the database:

```bash
docker-compose down -v
docker-compose up -d
```
