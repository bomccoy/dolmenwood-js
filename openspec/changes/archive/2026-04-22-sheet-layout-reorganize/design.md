## Context

The sheet grid in `page.tsx` is a 2-column responsive grid (`grid-cols-1 md:grid-cols-2`). Currently the order is: Identity (left) → Ability Scores (right) → Saving Throws (full-width) → SpellSlots (conditional) → Inventory. `CharacterIdentity.tsx` renders kindred type, languages, and a trait list. `KINDREDS` data in `kindreds.ts` already has the full trait list; nothing new needs to be added to the data layer.

## Goals / Non-Goals

**Goals:**
- Ability Scores appears in the left column, Identity in the right column
- Traits removed from `CharacterIdentity` component output
- New `KindredTraits` component renders traits full-width after the Saving Throws block
- `KindredTraits` hidden when no kindred selected

**Non-Goals:**
- Changing any trait data or the `KINDREDS` data structure
- Reordering the Saving Throws, SpellSlots, or Inventory blocks
- Any changes to Ability Scores or Identity form fields

## Decisions

**Swap grid order by reordering JSX in `page.tsx`** — the 2-column CSS grid fills left-to-right in source order; putting `AbilityScores` before `CharacterIdentity` in the JSX is all that's needed. No CSS changes required.

**Extract traits into a dedicated `KindredTraits` component** receiving `kindred` (string) as a prop — consistent with the pattern used by `SavingThrows` and `SpellSlots`. The component looks up the kindred from `KINDREDS`, returns `null` when none selected, and renders the bulleted bold-name list (same styling already established in the previous change).

**Remove only the traits section from `CharacterIdentity`** — the Type and Languages divs stay. The traits `<ul>` block (lines 83–91 of the current component) is deleted; no other logic changes.

## Risks / Trade-offs

No meaningful risks. All changes are purely presentational and isolated to three files.
