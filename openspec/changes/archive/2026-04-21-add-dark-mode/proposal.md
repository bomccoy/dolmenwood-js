## Why

The app currently only supports a light theme, which can cause eye strain during evening gaming sessions. Adding dark mode with localStorage persistence gives users control over their preferred display, with no backend required.

## What Changes

- Add a dark mode toggle to the app UI (header or settings area)
- Persist the user's light/dark preference in `localStorage`
- Apply Tailwind CSS `dark:` utility classes across all components
- Configure Tailwind to use `class`-based dark mode (driven by a `dark` class on `<html>`)

## Capabilities

### New Capabilities
- `theme-toggle`: UI control to switch between light and dark mode, with preference persisted to localStorage and applied via a `dark` class on the root `<html>` element

### Modified Capabilities
- `data-persistence`: localStorage key namespace expands to include `theme` preference alongside character data

## Impact

- All UI components will need `dark:` variant classes added
- `tailwind.config` needs `darkMode: 'class'` set
- A new `ThemeToggle` component and theme initialization script needed
- `data-persistence` spec updated to document the `theme` localStorage key
