## Why

Managing a TTRPG character sheet on paper or in a generic spreadsheet is tedious — stat modifiers, spell slots, and inventory all require manual recalculation. A dedicated local webapp automates those derivations and keeps everything in one place without requiring an account or internet connection.

## What Changes

- New single-page app built on the existing Next.js/React/TypeScript/Tailwind stack
- Character creation form: name, level, kindred, class, and six base ability scores
- Display of kindred traits and native languages on kindred selection
- Automatic calculation of class-based spell slot tables from character level
- Inventory manager: add, remove, and annotate items
- Full persistence via `localStorage`; JSON file export and import for backup/restore

## Capabilities

### New Capabilities

- `character-identity`: Stores and displays character name, level, kindred, and class selections
- `ability-scores`: Captures six base stats and exposes derived ability modifiers
- `spell-slots`: Derives spell slot counts by spell level from class and character level
- `inventory`: Manages a list of named items with quantity and optional notes
- `data-persistence`: Saves the full character object to `localStorage` and supports JSON export/import

### Modified Capabilities

*(none — this is a greenfield feature)*

## Impact

- New pages and components under `src/app/` and `src/components/`
- New pure-utility modules under `src/lib/` for stat derivation and spell-slot calculation
- New static rules data files under `src/data/` (kindreds with type/languages/traits, class spell-slot tables)
- No new npm dependencies required beyond the existing stack
- No backend, API routes, or database touched
