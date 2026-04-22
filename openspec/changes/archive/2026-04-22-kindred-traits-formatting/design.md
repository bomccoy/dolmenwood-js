## Context

`CharacterIdentity.tsx` renders kindred traits in a `<ul>` with `<li>` items. Each item has a `<span className="font-medium">` for the trait name followed by the description as text. The list currently has no bullet markers and the name weight is medium rather than bold, making trait boundaries hard to see.

## Goals / Non-Goals

**Goals:**
- Trait names visually stand out (bold weight)
- Each trait has a bullet marker for easy scanning

**Non-Goals:**
- Changing trait data structure or types
- Altering any other section of CharacterIdentity
- Adding collapsible/expandable trait rows

## Decisions

**Use Tailwind `list-disc pl-4` on `<ul>` and `font-bold` on the name `<span>`** — the simplest possible change: two class swaps in one file, no new components, no logic changes.

## Risks / Trade-offs

No meaningful risks. The change is purely cosmetic and isolated to a single component.
