## 1. New Component

- [x] 1.1 Create `src/components/ClassAbilities.tsx` that accepts a `className: string` prop, looks up the matching class in `CLASSES`, and renders a section with a heading and bulleted list of abilities (bold name + description), mirroring KindredTraits formatting

## 2. Layout Update

- [x] 2.1 In `src/app/page.tsx`, import `ClassAbilities` and add a conditional render for it when `character.class` is set
- [x] 2.2 Update the KindredTraits wrapper `className` so it uses `md:col-span-2` only when no class is selected, and a single column otherwise
- [x] 2.3 Place ClassAbilities in the adjacent column in the same grid row as KindredTraits
