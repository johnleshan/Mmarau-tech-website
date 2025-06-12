# Project Setup Guide

This guide will help you set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js) or Bun

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/gdgoc-mmarau1/Mmarau-tech-website.git
    cd Mmarau-tech-website
    ```

2.  **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Or using Bun:
    ```bash
    bun install
    ```

## Running the Development Server

To start the development server, run the following command:

Using npm:
```bash
npm run dev
```

Or using Bun:
```bash
bun run dev
```

This will start the development server, usually at `http://localhost:4321`. You can open this URL in your browser to see the application. The server will automatically reload when you make changes to the code.

## Building for Production

To build the static site for production, run the following command:

Using npm:
```bash
npm run build
```

Or using Bun:
```bash
bun run build
```

This will create a `dist/` directory with the optimized static files. You can then deploy this directory to your hosting provider.

## Other Available Scripts

-   `npm run preview` or `bun run preview`: Starts a local server to preview the production build.
-   `npm run astro` or `bun run astro`: Provides access to the Astro CLI for various commands.
