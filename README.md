# Priti Jadhav | Portfolio Website

A modern, premium-style portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

**Live Demo:** [https://Pritii-9.github.io/priti-portfolio](https://Pritii-9.github.io/priti-portfolio)

---

## Features

- **Premium Dark Theme** — Deep navy background with emerald/teal accents
- **Accessible Design** — WCAG AAA compliant text contrast ratios
- **Responsive Layout** — Optimized for desktop, tablet, and mobile
- **Smooth Animations** — Scroll-reveal effects, hover transitions, staggered mobile menu
- **Modern Typography** — Space Grotesk for headings, IBM Plex Mono for labels
- **Interactive Components** — Animated navbar, mobile hamburger menu, focus areas card

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Email | EmailJS |
| Deployment | GitHub Pages |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Pritii-9/priti-portfolio.git
cd priti-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Home.tsx          # Hero section with profile and focus areas
│   │   ├── About.tsx         # Education and summary
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Project.tsx       # Projects showcase
│   │   ├── Skills.tsx        # Skills grid
│   │   └── Contact.tsx       # Contact form
│   ├── Navbar.tsx            # Sticky navigation bar
│   ├── MobileMenu.tsx        # Full-screen mobile menu
│   ├── RevealOnScroll.tsx    # Scroll animation wrapper
│   └── LoadingScreen.tsx     # Loading indicator
├── data/
│   └── portfolioData.ts      # Portfolio content data
├── types/
│   └── portfolio.ts          # TypeScript interfaces
├── routes/
│   └── routes.ts             # Navigation and API routes
├── App.tsx                   # Main app component
├── index.css                 # Global styles and theme variables
└── main.tsx                  # Entry point
```

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#060a14` | Primary background |
| `--color-text-main` | `#f8fafc` | Primary text (~15:1 contrast) |
| `--color-text-muted` | `#b8c5d6` | Secondary text |
| `--color-brand` | `#4fd1c5` | Teal accent / links |
| `--color-brand-strong` | `#2dd4bf` | Bright teal for CTAs |

### Typography

- **Headings:** Space Grotesk (400–700 weight)
- **Labels/Code:** IBM Plex Mono (400–600 weight)

---

## License

MIT