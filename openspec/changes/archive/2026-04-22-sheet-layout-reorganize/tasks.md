## 1. Update CharacterIdentity component

- [x] 1.1 Remove the traits `<ul>` section from `src/components/CharacterIdentity.tsx` (keep Type and Languages)

## 2. Create KindredTraits component

- [x] 2.1 Create `src/components/KindredTraits.tsx` accepting a `kindred` (string) prop
- [x] 2.2 Look up the kindred in `KINDREDS`; return `null` when not found or no kindred selected
- [x] 2.3 Render the traits as a bulleted list (`list-disc pl-4`) with bold trait names, matching the style established in the kindred-traits-formatting change

## 3. Reorganize page layout

- [x] 3.1 In `src/app/page.tsx`, swap the grid order so `AbilityScores` appears before `CharacterIdentity`
- [x] 3.2 Import `KindredTraits` and add it as a full-width `md:col-span-2` block after the Saving Throws block

## 4. Verify

- [x] 4.1 Confirm Ability Scores is on the left and Identity is on the right
- [x] 4.2 Confirm Identity still shows Type and Languages but no longer shows traits
- [x] 4.3 Confirm the Kindred Traits block appears full-width below Saving Throws when a kindred is selected, and is hidden when none is selected
