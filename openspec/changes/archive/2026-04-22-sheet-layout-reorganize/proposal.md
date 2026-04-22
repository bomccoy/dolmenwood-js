## Why

The current sheet grid places Identity on the left and Ability Scores on the right, which feels backwards — ability scores are the most-referenced mechanical data and benefit from left-side prominence. Kindred traits are currently buried inside the Identity block, making them hard to read alongside the rest of the sheet; giving them their own dedicated block improves scannability during play.

## What Changes

- **Ability Scores** moves to the left column (first in grid order); **Identity** moves to the right column
- The Identity block retains Type and Languages but **kindred traits are removed from it**
- A new **Kindred Traits** block is added to the sheet, positioned full-width below the Saving Throws block
- The Kindred Traits block is hidden when no kindred is selected

## Capabilities

### New Capabilities

- `kindred-traits`: Standalone full-width block displaying the selected kindred's trait list (name + description), hidden when no kindred is selected

### Modified Capabilities

- `character-identity`: Traits are no longer rendered inside the Identity block; Type and Languages remain
- `saving-throws`: No requirement changes — only layout order affected (Kindred Traits now appears after it)

## Impact

- `src/components/CharacterIdentity.tsx` — remove the traits `<ul>` section
- New file: `src/components/KindredTraits.tsx`
- `src/app/page.tsx` — swap grid order of Identity and Ability Scores; add `<KindredTraits>` block after Saving Throws
