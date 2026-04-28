# Equity Groups - Driving Business Evolution

A premium, high-density corporate website for **Equity Group**, a digital technology partner in Zimbabwe. Built with modern web technologies to deliver a seamless, high-performance user experience.

**Live Site**: [https://mambinge.github.io/equity_group_website/](https://mambinge.github.io/equity_group_website/)

## Key Features

- **Multi-Page Architecture**: Home, About, Services, Products, Portfolio, and Contact pages.
- **Brand-Aligned Design**: Custom Teal & Gold color palette with official SVG logo and favicon.
- **WhatsApp Chatbot**: Premium floating widget for direct client communication.
- **High-Density Layout**: Optimized for professional corporate aesthetics at 100% browser zoom.
- **Responsive Design**: Fully compatible with Mobile, Tablet, and Desktop displays.
- **Modern Animations**: Smooth transitions and hover effects using Framer Motion.

## Tech Stack

- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Routing**: React Router (HashRouter for GH Pages compatibility)
- **Deployment**: GitHub Actions (CI/CD)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mambinge/equity_group_website.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production build:
```bash
npm run build
```

The output will be in the `dist/` folder.

## Deployment

This project is configured for automated deployment to **GitHub Pages** via GitHub Actions.

- **Workflow**: `.github/workflows/deploy.yml`
- **Configuration**: `vite.config.js` (base path configured for subpath hosting)

---

&copy; 2003 - 2026 Equity Group. Crafted for Business Evolution.
