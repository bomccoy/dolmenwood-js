## 1. Create SavingThrows component

- [x] 1.1 Create `src/components/SavingThrows.tsx` accepting `className` (string) and `level` (number) props
- [x] 1.2 Look up the matching class in `CLASSES` and read `advancement[level - 1].saves`
- [x] 1.3 Return `null` when no class is selected or level is out of advancement range
- [x] 1.4 Render the five saves (Doom, Ray, Hold, Blast, Spell) horizontally in a styled block matching the sheet's card style

## 2. Wire into page layout

- [x] 2.1 Import `SavingThrows` in `src/app/page.tsx`
- [x] 2.2 Add `<SavingThrows>` as a full-width `md:col-span-2` block in the grid, between the top row (Identity + Ability Scores) and the lower row (SpellSlots + Inventory)

## 3. Verify

- [x] 3.1 Confirm the block is hidden when no class is selected
- [x] 3.2 Confirm correct saves appear for at least two different classes and levels
- [x] 3.3 Confirm the block updates immediately when class or level changes
