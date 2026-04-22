## Why

The kindred traits panel in CharacterIdentity displays trait names and descriptions as a flat run of text, making it hard to visually scan individual traits at a glance. Bolding trait names and adding bullet markers improves readability without changing any data or behaviour.

## What Changes

- Trait names in the kindred traits list are displayed in bold (`font-bold`) instead of medium weight
- The traits list gains visible bullet markers (`list-disc pl-4`) so each trait is visually separated

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `character-identity`: Visual presentation of kindred traits changes — trait names become bold and the list gains bullet markers

## Impact

- `src/components/CharacterIdentity.tsx`: two Tailwind class changes to the traits `<ul>` and trait name `<span>`
- No data model, API, or persistence changes
