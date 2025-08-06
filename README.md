# CancerDAO Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue.svg)](https://www.typescriptlang.org/)

## 🌟 Overview

CancerDAO Platform is a revolutionary full-stack web application dedicated to cancer prevention and treatment through cutting-edge technology. Built with modern React frontend and Node.js backend, the platform combines AI-powered cancer prevention, blockchain-based medical data management, and community-driven healthcare solutions.

### 🎯 Key Features

- **🤖 AI-Powered Health Solutions**: 9 specialized AI agents for comprehensive cancer care
- **🔗 Blockchain Data Management**: Secure, decentralized medical data storage
- **🌍 Bilingual Support**: Full Chinese/English internationalization
- **👥 Community-Driven**: Patient support and research collaboration
- **📱 Responsive Design**: Mobile-first approach with modern UI

## 🏗️ System Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: React Router for client-side navigation
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation

### Backend Stack
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Session**: PostgreSQL-backed sessions
- **Email**: Nodemailer for notifications
- **Security**: Helmet, CORS, Rate limiting

### Development Tools
- **Language**: TypeScript with strict configuration
- **Database**: Drizzle Kit for migrations
- **Styling**: PostCSS with Tailwind CSS
- **Package Manager**: pnpm (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- PostgreSQL database (optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chord233/CancerDAO.git
   cd CancerDAO
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup** (optional)
   ```bash
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5000`

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm check    # Type checking
pnpm db:push  # Push database schema
```

## 📁 Project Structure

```
CancerDAO/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
├── server/                # Backend Express application
│   ├── handlers/          # Route handlers
│   ├── utils/             # Server utilities
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
└── Figma/                 # Design assets
```

## 🎨 Design System

### Color Palette
The platform uses a strict color palette:
- **Primary Purple**: `#e7d1ff`, `#c9a4ff`
- **Accent Yellow**: `#fad000`
- **Accent Red**: `#fc593d`
- **Base**: Black and white

### Components
- Built on Radix UI primitives for accessibility
- Consistent design tokens across all components
- Mobile-first responsive design

## 🤖 AI Agent Matrix

The platform features 9 specialized AI agents:

1. **Report Bot** - Medical report analysis
2. **Trial Bot** - Clinical trial matching
3. **Clinical Bot** - Clinical decision support
4. **Content Bot** - Educational content generation
5. **Longevity Bot** - Longevity and prevention
6. **Health Bot** - General health guidance
7. **AMA Bot** - Ask Me Anything support
8. **Research Bot** - Research assistance
9. **Support Bot** - Patient support

## 🌐 Internationalization

The platform supports full bilingual operation:
- **Languages**: Chinese (Simplified) and English
- **Coverage**: All UI text, content, and documentation
- **Implementation**: Custom language context with React

## 🔧 Configuration

### Environment Variables

```env
NODE_ENV=development
DATABASE_URL=your_postgresql_url
SESSION_SECRET=your_session_secret
EMAIL_HOST=your_email_host
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
```

### Database Schema

The application uses Drizzle ORM with PostgreSQL:
- **Subscribers**: Newsletter email management
- **Contact Messages**: User inquiries and partnerships
- **Sessions**: User session management

## 🚀 Deployment

### Production Build

```bash
pnpm build
pnpm start
```

### Docker Deployment

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Michael Yang** - Founder & CEO
- **YoSean Wang** - Co-founder & CTO
- **Zhiwei Bao** - Co-founder & Head of Research

## 📞 Contact

- **Website**: [https://cancerdao.org](https://cancerdao.org)
- **Email**: chord244@gmail.com
- **Twitter**: [@chord244](https://twitter.com/chord244)
- **GitHub**: [https://github.com/chord233](https://github.com/chord233)
- **LinkedIn**: [https://linkedin.com/in/chord233](https://linkedin.com/in/chord233)

## 🔗 Links

- [Telegram Community](https://web.telegram.org/a/#-1002393239074_1)
- [Discord Server](https://discord.gg/cancerdao)
- [Documentation](https://docs.cancerdao.org)

---

**Built with ❤️ for the global cancer prevention community**