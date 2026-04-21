## Context

The app is a Next.js App Router project using Tailwind CSS. Currently there is no theme system — the UI uses a fixed light palette. Dark mode will be implemented client-side using Tailwind's `class` strategy, a React context for state, and `localStorage` for persistence.

## Goals / Non-Goals

**Goals:**
- Toggle between light and dark themes at runtime
- Persist preference across page reloads via `localStorage`
- Apply dark styles consistently using Tailwind `dark:` utilities
- Avoid flash of wrong theme on initial load

**Non-Goals:**
- System-preference auto-detection (`prefers-color-scheme`) — user toggle only
- Per-section or component-level theming
- Server-side theme rendering

## Decisions

**1. Tailwind `darkMode: 'class'` strategy**
The `dark` class on `<html>` controls all `dark:` variants. Chosen over `media` strategy because it allows user override independent of OS preference.

**2. Inline script in `<head>` to prevent flash**
A small inline `<script>` in the root layout reads `localStorage` and sets `document.documentElement.classList` before first paint. This avoids FOUC without SSR complexity.

**3. React context for theme state**
A `ThemeContext` provider wraps the app and exposes `theme` + `toggleTheme`. Components only need the context — no prop drilling. Stored in `src/lib/theme-context.tsx`.

**4. `ThemeToggle` component**
A simple button component placed in the page header. Renders a sun/moon icon (text emoji acceptable for MVP). Lives at `src/components/ThemeToggle.tsx`.

**5. `localStorage` key: `theme`**
Stores `"light"` or `"dark"`. Consistent with the `data-persistence` spec's namespace.

## Risks / Trade-offs

- **Incomplete `dark:` coverage** → Mitigation: audit all components in tasks; test both modes visually before done
- **Flash of wrong theme** → Mitigation: inline blocking script in `<head>` reads localStorage before hydration
- **Context adds a re-render boundary** → Acceptable for a single-user MVP; not a performance concern at this scale
