## Context

Greenfield personal webapp built on an existing Next.js/TypeScript/Tailwind project. No backend, no auth, no shared state across users. All game data (kindred definitions, class spell-slot tables) is static and ships with the app; all character data lives in the browser.

## Goals / Non-Goals

**Goals:**
- Single-page character sheet with real-time derived stat display
- Kindred traits and native languages displayed on kindred selection
- Class spell-slot table rendered from class + level, recalculated on change
- Inventory list with add/remove/edit
- Persist full character to `localStorage` on every change; export/import as JSON

**Non-Goals:**
- Authentication or user accounts
- Multiple characters or character list view (single character per session)
- Server-side storage or network requests
- Multiplayer or shared sheets
- Supporting more than one ruleset (D&D 5e conventions used as the single ruleset)
- PDF export

## Decisions

### 1. Single character per `localStorage` key, serialized as JSON
**Decision:** Store the entire character as one JSON object under a fixed key (`dolmenwood_character`).  
**Rationale:** There is only one character and one user. A flat schema is simpler to read, write, and export than a normalized structure. Adding multi-character support later would require a list key anyway, so a single-key design defers that complexity cleanly.  
**Alternative considered:** IndexedDB — overkill for a single JSON blob; no offline-first library needed.

### 2. Rules data as static TypeScript modules, not fetched JSON
**Decision:** Kindred definitions and class spell-slot tables live in `src/data/kindreds.ts` and `src/data/classes.ts` as typed constants. Each kindred entry carries `name`, `kindredType`, `nativeLanguages`, and `traits`.  
**Rationale:** Data never changes at runtime; no fetch latency or error handling needed. TypeScript types catch shape errors at build time.  
**Alternative considered:** JSON files under `public/` fetched client-side — adds async complexity for no benefit.

### 3. Pure utility functions for all derived values
**Decision:** All calculations (ability modifier, proficiency bonus, spell slots) live in `src/lib/` as pure functions with no React or DOM dependencies.  
**Rationale:** Testable in isolation; components just call and display. Keeps presentation and logic cleanly separated per project conventions.

### 4. React state as the single source of truth; `localStorage` as a write-through cache
**Decision:** The character object lives in React state (`useState`). A `useEffect` writes it to `localStorage` on every state change. On first load, state is hydrated from `localStorage` (falling back to a blank character).  
**Rationale:** Avoids stale-read bugs from reading `localStorage` mid-render. The component tree always works against React state; persistence is a side-effect.

### 5. No additional npm dependencies
**Decision:** Use only Next.js, React, TypeScript, and Tailwind CSS already in the project.  
**Rationale:** Minimal footprint; no form library, state manager, or validation library needed for a single-form single-user app.

## Risks / Trade-offs

- **localStorage size limit (~5 MB)** → Mitigation: character JSON is tiny; no risk in practice. Large inventory would have to be extreme to approach the limit.
- **No undo/redo** → Acceptable for personal use; JSON export serves as a manual backup.
- **Ruleset hardcoded to one system** → Intentional MVP constraint; extracting data files later would generalize this.
- **No input validation library** → HTML5 `required`/`min`/`max` attributes cover basic form validation; edge cases are personal-use acceptable.

## Migration Plan

Greenfield — no migration needed. On first visit the app renders an empty character form; filling it out populates `localStorage`. Subsequent visits restore the last character automatically.

## Open Questions

*(none — scope is fully defined)*
