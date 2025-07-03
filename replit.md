# RetailPro Sales Dashboard

## Overview

RetailPro Sales Dashboard is a full-stack web application built for managing sales pipelines, tracking deals, and analyzing revenue performance. The application features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and providing comprehensive sales analytics and reporting capabilities.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React 18 with TypeScript, using Vite for build tooling
- **Backend**: Node.js with Express.js REST API
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

### Development Environment
- **Build Tool**: Vite with React plugin
- **Database Toolkit**: Drizzle Kit for migrations and schema management
- **Code Quality**: TypeScript with strict configuration
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Charts**: Recharts for data visualization
- **Form Management**: React Hook Form with Zod validation
- **Drag & Drop**: Native HTML5 drag and drop for pipeline management
- **Date Handling**: date-fns for date manipulation
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Architecture
- **API Structure**: RESTful endpoints organized by resource
- **Database Layer**: Drizzle ORM with connection pooling via Neon serverless
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging with performance metrics
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Database Schema
- **Deals Table**: Core entity storing deal information (company, contact, amount, stage, probability)
- **Activities Table**: Audit trail for deal changes and system events
- **Backups Table**: Metadata for backup operations and restore points
- **Relationships**: Foreign key relationships between deals and activities

## Data Flow

### Client-Server Communication
1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests, validate data, and interact with database
3. **Database Operations**: Drizzle ORM executes SQL queries against PostgreSQL
4. **Response Handling**: JSON responses with proper error handling and status codes
5. **State Updates**: TanStack Query manages cache invalidation and UI updates

### Pipeline Management
1. **Deal Creation**: Form submission creates new deals with validation
2. **Stage Movement**: Drag and drop triggers PUT requests to update deal stages
3. **Activity Logging**: All deal changes are automatically logged to activities table
4. **Real-time Updates**: Query invalidation ensures UI reflects latest data

### Analytics Pipeline
1. **Metrics Calculation**: Server-side aggregation of deal data for dashboard metrics
2. **Forecast Generation**: Time-series analysis for revenue projections
3. **Chart Data**: Processed data formatted for Recharts visualization
4. **Export Functionality**: CSV generation for reporting and data analysis

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility and functionality
- **recharts**: Chart library for data visualization
- **zod**: Runtime type validation for forms and API data

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Production Build
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit pushes schema changes to production database
4. **Asset Serving**: Express serves static frontend assets in production

### Environment Configuration
- **Development**: Hot module replacement with Vite middleware
- **Production**: Optimized builds with static file serving
- **Database**: Environment-based connection strings via `DATABASE_URL`

### Scaling Considerations
- **Database**: Connection pooling handles concurrent requests
- **Storage**: In-memory fallback for development, PostgreSQL for production
- **Caching**: TanStack Query provides client-side caching layer
- **Session Management**: PostgreSQL-backed sessions for scalability

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup