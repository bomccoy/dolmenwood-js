## Context

The sheet already has a `KindredTraits` component that renders a bulleted list of bold-named traits from `KINDREDS` data. The `CLASSES` data now has a matching `abilities: ClassAbility[]` structure. The layout in `page.tsx` renders `KindredTraits` as a full-width `md:col-span-2` block; the goal is to split that row into two columns — KindredTraits on the left, ClassAbilities on the right.

## Goals / Non-Goals

**Goals:**
- New `ClassAbilities` component mirroring `KindredTraits` structure and styling
- Conditional render only when a class is selected
- Side-by-side layout with KindredTraits when both are present; KindredTraits falls back to full-width when no class is selected

**Non-Goals:**
- Editable or interactive abilities (read-only reference only)
- Level-gated filtering of abilities (show all abilities regardless of level)

## Decisions

**Reuse KindredTraits styling exactly** — Both blocks are read-only reference panels. Consistent styling reduces visual noise and makes the sheet easier to scan. No new design primitives needed.

**Conditional layout in page.tsx** — When a class is selected, the KindredTraits block drops from `md:col-span-2` to a single column, and ClassAbilities fills the adjacent column. When no class is selected, KindredTraits remains full-width. This is handled by a conditional `className` on the KindredTraits wrapper (same pattern already used for the InventoryList block).

**Props interface: `className: string`** — The component receives the class name string and looks up the matching `GameClass` internally, same pattern as `SavingThrows` and `SpellSlots`.

## Risks / Trade-offs

**Long ability descriptions** — Some abilities (Fighter Combat Talents, Thief Skills) have lengthy descriptions. At narrow column widths these may become tall. Acceptable given this is a personal-use sheet; no truncation needed.
