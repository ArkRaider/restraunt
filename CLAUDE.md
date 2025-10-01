# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 restaurant application built with React 19, TypeScript, and Tailwind CSS v4. The project uses the App Router architecture with Turbopack for faster builds.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack enabled at http://localhost:3000

### Building for Production
```bash
npm run build
```
Creates an optimized production build using Turbopack

### Starting Production Server
```bash
npm start
```
Runs the production build locally

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues

## Architecture

### Project Structure
- **`app/`** - Next.js App Router directory containing all routes and pages
  - `layout.tsx` - Root layout with Geist font configuration and global styles
  - `page.tsx` - Homepage component
  - `globals.css` - Global Tailwind CSS styles
- **`public/`** - Static assets (images, icons)
- **Path Aliases** - `@/*` maps to the root directory for cleaner imports

### Tech Stack
- **Framework**: Next.js 15.5.4 with App Router
- **Build Tool**: Turbopack (enabled by default in dev and build scripts)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Type Checking**: TypeScript 5 with strict mode enabled
- **Linting**: ESLint 9 with Next.js configuration

### Key Configuration
- **TypeScript**: Strict mode enabled, ES2017 target, path aliases configured
- **Next.js**: Default configuration with no custom settings
- **Tailwind**: v4 with PostCSS integration
- **ESLint**: Extends `next/core-web-vitals` and `next/typescript`

## Development Notes

- The project uses the App Router (not Pages Router), so components should be created in the `app/` directory
- Server Components are the default; use `'use client'` directive only when client-side interactivity is needed
- Turbopack is enabled for both dev and build commands for faster compilation
- Geist Sans and Geist Mono fonts are pre-configured and available via CSS variables
- Do no use npm run dev, always aask me to run the development server