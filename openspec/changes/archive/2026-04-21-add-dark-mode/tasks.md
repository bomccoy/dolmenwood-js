## 1. Tailwind Configuration

- [x] 1.1 Set `darkMode: 'class'` in `tailwind.config.ts`

## 2. Theme Infrastructure

- [x] 2.1 Create `src/lib/theme-context.tsx` with `ThemeContext`, `ThemeProvider`, and `useTheme` hook
- [x] 2.2 Add inline blocking script to `src/app/layout.tsx` `<head>` to read `localStorage` and set `dark` class before paint
- [x] 2.3 Wrap app layout with `ThemeProvider` in `src/app/layout.tsx`

## 3. ThemeToggle Component

- [x] 3.1 Create `src/components/ThemeToggle.tsx` — button that calls `toggleTheme` from context and shows sun/moon indicator
- [x] 3.2 Add `ThemeToggle` to the page header

## 4. Dark Mode Styles

- [x] 4.1 Audit `src/app/page.tsx` and add `dark:` variants for backgrounds, text, and borders
- [x] 4.2 Audit all components in `src/components/` and add `dark:` variants where needed

## 5. Verify

- [x] 5.1 Test toggle switches theme visually in both directions
- [x] 5.2 Test theme preference persists across page reload
- [x] 5.3 Confirm no flash of wrong theme on reload with a stored dark preference
