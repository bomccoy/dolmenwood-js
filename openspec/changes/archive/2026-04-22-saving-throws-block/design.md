## Context

The `CLASSES` array in `src/data/classes.ts` already contains a complete `advancement` table for each class, including a `saves` object with `doom`, `ray`, `hold`, `blast`, and `spell` values per level. The character sheet currently renders Identity, Ability Scores, Spell Slots (conditional), and Inventory as a 2-column grid. Saving throws need to be looked up by `(class, level)` and displayed in a new full-width block below the top two panels.

## Goals / Non-Goals

**Goals:**
- Display all five saving throw targets for the current class + level combination
- Update automatically when the user changes class or level
- Hide the block entirely when no class is selected
- Full-width layout, horizontal presentation of the five saves

**Non-Goals:**
- Editing save values (they are rule-derived, not user-editable)
- Displaying saves for classes with no advancement data
- Showing Wisdom modifier adjustments (display raw table values only)

## Decisions

**Look up saves directly from `CLASSES` data in the component** — `SavingThrows` receives `className` and `level` as props, finds the matching class entry, and reads `advancement[level - 1].saves`. No new utility function needed; the lookup is a single array find + index access. Alternative (passing the `saves` object down from `page.tsx`) would work equally well but adds prop drilling for no benefit at this scale.

**Full-width `md:col-span-2` row** — consistent with how the grid already handles the conditional `SpellSlots` block; placing the saves block between the top pair and the lower pair keeps related character data grouped.

**Hide when no class** — an unselected class has no advancement data to display; hiding avoids empty/broken states.

## Risks / Trade-offs

[Level out of advancement range] → The `advancement` array has exactly 15 entries; the level input is already clamped to 1–20. Levels 16–20 will not find a row — the component should gracefully render nothing (or the level-15 row) for those. Since the existing rules data only covers levels 1–15, returning `null` for out-of-range levels is the correct behaviour.
