# Calculadora de Soma - Backend API

Backend REST API for the Calculadora de Soma application.

## Description

Uma calculadora que faz apenas contas de soma.

## Features

- Inserção de números
- Realização de soma
- Exibição de resultado
- Limpar dados

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express 5.1.0
- **Language**: TypeScript 5.9.3
- **Validation**: Zod 4.1.11
- **Security**: Helmet 8.1.0, CORS 2.8.5

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 20.x LTS or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

### Development

```bash
# Run in development mode with hot reload
npm run dev
```

### Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## API Endpoints

The API is versioned and accessible at:

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

## Environment Variables

See `.env.example` for required environment variables.

## License

Private