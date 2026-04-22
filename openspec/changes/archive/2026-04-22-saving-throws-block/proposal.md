## Why

The character sheet currently shows identity and ability scores but has no way to view saving throw targets, which are essential information during play. The advancement data is already present in `classes.ts`; it just needs to be surfaced on the sheet.

## What Changes

- A new **Saving Throws** block is added to the character sheet, displayed full-width horizontally beneath the Identity and Ability Scores blocks
- The block shows the five save targets (Doom, Ray, Hold, Blast, Spell) for the character's currently selected class and level
- When no class is selected, the block is hidden
- A new `SavingThrows` component is created to render the block

## Capabilities

### New Capabilities

- `saving-throws`: Displays the five saving throw targets derived from the selected class and level

### Modified Capabilities

(none — the `character-identity` spec already covers class and level selection; no requirement changes needed there)

## Impact

- New file: `src/components/SavingThrows.tsx`
- Modified: `src/app/page.tsx` — add `SavingThrows` to the layout grid
- Data source: `CLASSES[n].advancement[level - 1].saves` from existing `src/data/classes.ts`
- No changes to types, persistence, or other components
