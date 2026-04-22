## Why

Players need to track hit points during play, but the character sheet currently has no HP field. Adding an HP tracker to the Identity block keeps all core character vitals in one place and provides an at-a-glance health indicator through a colour-coded life bar.

## What Changes

- `currentHp` and `maxHp` are added to the `Character` type and persisted in localStorage
- An HP tracker section is added to the bottom of the Identity block containing:
  - **Current HP** and **Max HP** number inputs with up/down spinners (matching the ability score input style)
  - A **life bar** that changes colour based on the percentage of current/max HP: green (>50%), orange (>25%–50%), red (≤25%)
  - A small **HP dice reminder** showing the class's HP die for the current level (e.g. `+1d6`) sourced from `CLASSES[n].advancement[level-1].hp`, visible only when a class is selected

## Capabilities

### New Capabilities

- `hp-tracker`: HP tracking section within the Identity block — current/max inputs, colour-coded life bar, and HP die reminder

### Modified Capabilities

- `character-identity`: Identity block gains an HP tracker section at the bottom; requires `currentHp` and `maxHp` on the `Character` type
- `data-persistence`: `currentHp` and `maxHp` must be included in the saved/loaded character JSON

## Impact

- `src/types/character.ts` — add `currentHp: number` and `maxHp: number` to `Character`
- `src/app/page.tsx` — add defaults for the new fields in `DEFAULT_CHARACTER`
- `src/components/CharacterIdentity.tsx` — add HP tracker section using class/level props already available via character
- `src/lib/storage.ts` — verify import/export handles new fields (likely automatic)
