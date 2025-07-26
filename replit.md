# Knot in Thread - Crochet Business Website

## Overview

This is a full-stack web application for "Knot in Thread," a crochet business website. The application showcases handmade crochet creations, allows customers to browse a gallery, learn about the creator, and contact the business through multiple channels including WhatsApp integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and shared components:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tools**: Vite for frontend bundling, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom crochet-themed design system
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API**: RESTful endpoints for contact form submission
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: In-memory storage (MemStorage) for development
- **Validation**: Zod schemas for API request validation

### Design System
- **Theme**: Crochet-inspired with warm, handmade aesthetic
- **Colors**: Soft pastels (lavender, peach, mint, cream) with warm clay accents
- **Typography**: Dancing Script for headings, Poppins for body text
- **Components**: Fully accessible UI components from shadcn/ui

## Data Flow

1. **Gallery Display**: Static gallery data is defined in constants and rendered through filtered views
2. **Contact Form**: Form submissions flow from React Hook Form → API validation → database storage
3. **WhatsApp Integration**: Direct links to WhatsApp with pre-filled messages
4. **Responsive Design**: Mobile-first approach with progressive enhancement

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **UI Components**: Radix UI primitives
- **Form Handling**: React Hook Form + Hookform Resolvers
- **Validation**: Zod for schema validation
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Styling**: Tailwind CSS + class-variance-authority

### Development Tools
- **Build**: Vite + esbuild
- **Database**: Drizzle Kit for migrations
- **TypeScript**: Full type safety across the stack

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` starts both frontend (Vite) and backend (tsx) in development mode
- **Build**: `npm run build` creates production builds for both frontend and backend
- **Production**: `npm start` runs the production server
- **Database**: Configured for PostgreSQL with connection via DATABASE_URL environment variable

### Key Features
- Server-side rendering setup for production
- Hot module replacement in development
- Database migrations with Drizzle
- Environment-specific configurations
- Mobile-responsive design with touch-friendly interactions

### Pages Structure
- **Home**: Hero section with business introduction and call-to-actions
- **Gallery**: Filtered display of crochet works by category
- **About**: Personal story and business credentials
- **Contact**: Multi-channel contact form with WhatsApp integration

The application emphasizes user experience with smooth animations, intuitive navigation, and multiple contact methods to facilitate customer engagement.