## Why

The character sheet displays kindred traits but has no equivalent section for class abilities. Players need a quick reference for their class's mechanical abilities without leaving the sheet.

## What Changes

- Add a new **Class Abilities** block component that reads abilities from the selected class in `CLASSES` data
- Display the block to the right of the Kindred Traits block using the same bold-name + description formatting
- Block is conditionally rendered when a class is selected (same pattern as KindredTraits and SavingThrows)

## Capabilities

### New Capabilities
- `class-abilities-block`: A new read-only UI block that lists the selected class's abilities with bold names and description text, rendered beside the Kindred Traits block

### Modified Capabilities
- `sheet-layout`: The two-column layout row containing KindredTraits gains a second column for ClassAbilities

## Impact

- New component: `src/components/ClassAbilities.tsx`
- Modified: `src/app/page.tsx` — layout change to place ClassAbilities beside KindredTraits
- Data source: `src/data/classes.ts` `ClassAbility[]` (already populated)
