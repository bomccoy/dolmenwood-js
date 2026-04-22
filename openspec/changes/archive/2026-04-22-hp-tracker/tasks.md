## 1. Extend Character type and defaults

- [x] 1.1 Add `currentHp: number` and `maxHp: number` to the `Character` interface in `src/types/character.ts`
- [x] 1.2 Add `currentHp: 0` and `maxHp: 0` to `DEFAULT_CHARACTER` in `src/app/page.tsx`
- [x] 1.3 Guard against missing fields on load in `page.tsx`: when restoring from localStorage, default `currentHp` and `maxHp` to `0` if absent (`saved.currentHp ?? 0`)

## 2. Add HP tracker to CharacterIdentity

- [x] 2.1 Import `CLASSES` in `src/components/CharacterIdentity.tsx` (already imported — verify it includes `advancement`)
- [x] 2.2 Add a `currentHp` / `maxHp` HP input row at the bottom of the Identity block, using `<input type="number">` with `min={0}` matching the ability score input style; clamp `currentHp` to `[0, maxHp]` on change
- [x] 2.3 Add the life bar `<div>` below the inputs: a grey track container with a coloured inner div whose `style={{ width: '…%' }}` reflects `currentHp / maxHp`; apply `bg-green-500`, `bg-orange-400`, or `bg-red-500` based on the three thresholds (>50%, >25%, ≤25%)
- [x] 2.4 Add the HP dice reminder: look up `CLASSES.find(c => c.name === character.class)?.advancement[character.level - 1]?.hp` and render it as small muted text (e.g. `text-xs text-gray-500`) next to or below the inputs; hide when no class is selected

## 3. Verify

- [x] 3.1 Confirm Current HP and Max HP inputs render with native up/down spinners and persist on reload
- [x] 3.2 Confirm the life bar transitions through green → orange → red as HP decreases
- [x] 3.3 Confirm the HP dice reminder shows the correct `hp` string for the selected class and level and is hidden when no class is selected
- [x] 3.4 Confirm a legacy save (no HP fields) loads without error and defaults both to 0
