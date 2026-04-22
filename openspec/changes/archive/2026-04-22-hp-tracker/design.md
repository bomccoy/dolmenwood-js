## Context

`Character` in `src/types/character.ts` has no HP fields. `CharacterIdentity.tsx` already receives the full `character` object and an `onChange` callback, so it has access to `class` and `level` needed for the HP dice reminder. `AbilityScores` uses `<input type="number">` which browsers render with native up/down spinners — the same approach applies for HP inputs. Storage (`loadCharacter`/`saveCharacter`) serialises the whole `Character` object as JSON, so new fields are automatically persisted once added to the type and defaults.

## Goals / Non-Goals

**Goals:**
- Add `currentHp` and `maxHp` to `Character` type with `0` defaults
- Render HP inputs with native number spinners (same style as ability score inputs) at the bottom of `CharacterIdentity`
- Life bar as a `<div>` with dynamic width (`currentHp / maxHp * 100%`) and dynamic Tailwind background colour class
- HP dice reminder text sourced from `CLASSES[n].advancement[level - 1].hp`, hidden when no class selected

**Non-Goals:**
- Automatic max HP calculation from dice rolls
- HP history or undo
- Temporary HP

## Decisions

**Life bar colour thresholds** — three zones derived from `pct = currentHp / maxHp`:
- `pct > 0.5` → green (`bg-green-500`)
- `pct > 0.25` → orange (`bg-orange-400`)
- `pct ≤ 0.25` → red (`bg-red-500`)
- Special case: `maxHp === 0` → grey bar at 0% (avoids division by zero)

**Inline in `CharacterIdentity` rather than a new component** — the HP tracker is tightly coupled to the Identity block's layout and needs the character's class/level. Keeping it inline avoids prop threading and matches the existing pattern where Type/Languages are rendered directly in that component.

**`currentHp` clamped to `[0, maxHp]` on input** — prevents nonsensical states (negative HP or HP above max). `maxHp` has no upper clamp; the player sets it freely.

**Width style as inline `style={{ width: '…%' }}` rather than a dynamic Tailwind class** — Tailwind purges dynamically constructed class names; inline style is the correct approach for data-driven widths.

## Risks / Trade-offs

[Existing saved characters have no HP fields] → On `loadCharacter`, the parsed object will have `undefined` for the new fields. `DEFAULT_CHARACTER` sets them to `0`, and the `update` merge in `page.tsx` spreads defaults — so a migration guard in `page.tsx`'s load effect (`saved.currentHp ?? 0`) is sufficient. No schema migration needed.
