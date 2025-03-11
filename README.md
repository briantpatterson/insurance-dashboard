# Insurance Dashboard

A web dashboard for HR users to manage group benefits for their employees. This application provides a modern interface for managing enrollments, billing, benefits, claims, accommodations, policies, and documents.

## Features

- Modern UI built with Next.js and shadcn/ui components
- Responsive design for desktop and mobile
- Navigation for all HR benefit management needs
- Dashboard overview with key metrics

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development

When making changes to the application, you may need to restart the development server. To ensure the server always starts on port 3000, use the restart script:

```bash
# Using npm
npm run restart

# Using yarn
yarn restart
```

This script will:
1. Kill any existing Next.js development servers
2. Wait for ports to be released
3. Start a new development server on port 3000

If you're using VS Code, you can also use the built-in task by pressing `Ctrl+Shift+B` or running the "Restart Next.js Dev Server" task from the Command Palette.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
  - `ui`: shadcn/ui components
  - `sidebar-nav.tsx`: Navigation sidebar component
  - `dashboard-layout.tsx`: Main layout for the dashboard
- `src/lib`: Utility functions
- `src/styles`: Global styles

## Navigation

The dashboard includes the following navigation items:

- Home: Dashboard overview
- Enrollment: Manage employee enrollments
- Billing: Handle billing and payments
- Benefits: Configure and manage benefit plans
- Claims: Process and track claims
- Accommodations: Manage workplace accommodations
- Policies: View and update company policies
- Documents: Access and manage important documents 