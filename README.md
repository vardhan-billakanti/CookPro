# CookPro

An intelligent recipe discovery and kitchen pantry management platform featuring automated ingredient matching, dynamic serving scaling, and interactive step-by-step cooking modes.

## Overview

**CookPro** is a modern culinary application built to eliminate food waste and simplify meal preparation. By cataloging items available in your kitchen pantry, CookPro's matching algorithm calculates recipe feasibility percentages, highlights missing items, and instantly generates categorized shopping lists. Integrated with MongoDB Atlas and curated recipe datasets, CookPro delivers responsive search, dietary filtering, and persistent user cookbook management.

## Features

- **Smart Pantry Matching**: Input your on-hand ingredients to discover what you can cook immediately, with match percentages (e.g., 90% match, 1 missing item).
- **Interactive Step-by-Step Cooking Mode**: Fullscreen, distraction-free cooking interface with built-in timers, progress checkpoints, and auto-scrolling instructions.
- **Dynamic Serving Scaler**: Adjust serving portions up or down; all ingredient quantities recalculate with precise mathematical ratios and unit formatting.
- **Smart Shopping List**: One-click transfer of missing recipe ingredients into an interactive, categorized shopping checklist with local persistence.
- **Dietary & Cuisine Filtering**: Filter recipes by cuisine (Italian, Asian, Mediterranean, Mexican, American) and dietary preferences (Vegetarian, Vegan, High-Protein, Quick Prep).
- **MongoDB Atlas Integration**: Serverless API endpoints and migration scripts for synchronizing recipes, custom user collections, and pantry state to cloud databases.
- **Offline Resilience**: Instant fallback to bundled recipe databases and browser localStorage when working offline.

## Tech Stack

- **Frontend**: React 18, Vite 5, TypeScript
- **Styling**: Tailwind CSS
- **Database / Backend**: MongoDB Atlas (Node driver v7), Serverless API routes
- **Icons & UI FX**: Lucide React, Canvas Confetti

## Architecture

```
User Interface (React / Vite)
           │
           ├── Pantry Manager & Matching Engine (Client-side)
           │
           ▼
    src/services/recipeService.ts
           │
           ├──► Local Fallback Catalog (src/data/recipes.ts)
           └──► MongoDB Atlas Server API (api/recipes.ts, api/match.ts)
```

## Project Structure

```
├── api/                  # Serverless API routes (recipes, matching, pantry, shopping)
├── src/
│   ├── components/
│   │   ├── auth/         # Authentication and preference modals
│   │   ├── common/       # Badges, empty states, and loading skeletons
│   │   ├── layout/       # Navigation header, footer, and mobile tabs
│   │   └── recipes/      # Recipe cards, cooking mode, and serving scaler
│   ├── context/          # AppContext and AuthContext state providers
│   ├── data/             # Default ingredients and rich recipe catalogs
│   ├── server/           # MongoDB Atlas connection manager and queries
│   ├── services/         # Recipe service aggregator (cloud + offline fallback)
│   ├── utils/            # Matching engine, serving scaler, and localStorage helpers
│   └── views/            # Home, Cookbook, Pantry, Find Recipes, Shopping views
├── scripts/              # Database migration and verification scripts
└── .env.example          # Environment variable template
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm
- (Optional) MongoDB Atlas account for cloud recipe synchronization

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vardhan-billakanti/CookPro.git
   cd CookPro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional for local offline mode):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev`: Start the local Vite development server.
- `npm run build`: Typecheck with `tsc` and compile for production.
- `npm run preview`: Locally preview the production build.
- `npm run db:migrate`: Populate your MongoDB Atlas collection with initial recipes.
- `npm run db:test`: Validate MongoDB Atlas connectivity.

## Security

Database connection strings are read exclusively from environment variables (`.env.local`). All client-facing interfaces use abstracted API proxies, ensuring no database credentials or connection secrets are exposed in browser bundles.

## Author

**Billakanti Jaya Vardhan**
- GitHub: [@vardhan-billakanti](https://github.com/vardhan-billakanti)
