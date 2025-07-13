# CancerDAO Platform

## Overview

CancerDAO Platform is a full-stack web application built for cancer prevention and treatment, featuring a modern React frontend with a Node.js/Express backend. The platform provides bilingual support (Chinese/English) and includes comprehensive information about AI-powered cancer prevention, blockchain-based medical data management, and community-driven healthcare solutions.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React 18 with TypeScript, using Vite for build tooling
- **Backend**: Node.js with Express.js REST API
- **Database**: In-memory storage for development (expandable to PostgreSQL)
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side routing
- **Internationalization**: Custom language context for Chinese/English support

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
- **Subscribers Table**: Email subscribers for newsletter updates
- **Contact Messages Table**: Messages from contact forms and partnership inquiries
- **Storage Interface**: Flexible storage system supporting both in-memory and PostgreSQL backends

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
- July 10, 2025. Developed CancerDAO platform with bilingual support, simplified homepage design, comprehensive solution page, and architecture diagram integration
- July 10, 2025. Implemented strict color palette restriction across entire website - only #e7d1ff, #c9a4ff, #fad000, #fc593d, and black are now used throughout all pages and components
- July 10, 2025. Created comprehensive About page with emotional mission statement, detailed team member profiles, and core values showcase
- July 10, 2025. Implemented comprehensive Resources center with three main modules: Blog/Articles, Educational Content (Insights), and FAQ with search functionality
- July 10, 2025. Updated Community page with comprehensive community support section featuring emotional support values, real patient stories, and clear community joining pathways according to PRD requirements
- July 10, 2025. Updated all social media links across the entire platform - replaced old Telegram link with new group URL (https://web.telegram.org/a/#-1002393239074_1), maintained Discord and Twitter links, and ensured consistent three-button social media layout across all pages
- July 10, 2025. Modified About page team member profiles - removed achievements for Aspire Cao, Jennifer Cheng Lo, Jonathan Hakim, and Daqi Lee, updated role descriptions, and implemented conditional rendering to hide achievements section when empty
- July 10, 2025. Updated About page team member social media icons - replaced Twitter icon with custom X icon to match footer design, ensuring consistent branding across the platform
- July 10, 2025. Restructured About page team member profiles - converted first three members (Michael Yang, YoSean Wang, Zhiwei Bao) from achievements format to detailed text format, reorganized their role and organization information for better presentation
- July 10, 2025. Simplified team member data structure - removed organization, details, and achievements fields from all member profiles for cleaner, more focused presentation
- July 10, 2025. Enhanced team member role display - added detailed multi-line role information for first three founders (Michael Yang, YoSean Wang, Zhiwei Bao) while removing role field entirely for other team members
- July 11, 2025. Fixed pillar content mapping by swapping blockchain and community pillar descriptions and points in both languages to ensure correct content correspondence
- July 11, 2025. Completely restructured AI-powered health section with comprehensive AI Agent product matrix featuring 9 different AI Agent products (Report Bot, Trial Bot, Clinical Bot, Content Bot, Longevity Bot, Health Bot, AMA Bot, Research Bot, Support Bot) with individual icons, descriptions, and status indicators, plus AI analysis process demonstration showing "上传病历 → AI智能解析 → 结构化数据" workflow
- July 13, 2025. Added comprehensive Chinese/English language switching to Community and Resources pages - implemented translation keys for all content including page titles, section headers, story content, value pillars, FAQ sections, and call-to-action buttons. Both pages now fully support bilingual operation with the existing language switcher component.
- July 13, 2025. Completed final translation implementation for Community and Resources pages - added all missing translation keys including community statistics, activity details, join buttons, and the "Read More" button for community stories. All hardcoded text has been replaced with translation keys ensuring complete bilingual support across both pages.