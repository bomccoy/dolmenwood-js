## 1. Rules Data

- [x] 1.1 Create `src/data/kindreds.ts` with a typed array of kindreds, each containing name, kindredType, nativeLanguages, and traits
- [x] 1.2 Create `src/data/classes.ts` with a typed array of classes, each containing a name and a 20-row spell slot table (levels 1–9 per character level)

## 2. Utility Functions

- [x] 2.1 Create `src/lib/stats.ts` — `abilityModifier(score: number): number`
- [x] 2.2 Create `src/lib/spellSlots.ts` — `getSpellSlots(className: string, level: number): number[]` returning slot counts for spell levels 1–9
- [x] 2.3 Create `src/lib/storage.ts` — `loadCharacter()`, `saveCharacter(character)`, `exportJson(character)`, and `importJson(file): Promise<Character>` functions

## 3. TypeScript Types

- [x] 3.1 Create `src/types/character.ts` defining the `Character` interface: name, level, kindred, class, baseStats (object keyed by ability name), and inventory array
- [x] 3.2 Define `InventoryItem` interface in the same file: id, name, quantity, notes

## 4. Character Identity Section

- [x] 4.1 Create `src/components/CharacterIdentity.tsx` with controlled inputs for name, level, kindred dropdown, and class dropdown
- [x] 4.2 On kindred selection, display kindred type, native languages, and traits below the dropdown
- [x] 4.3 Wire class dropdown to trigger spell slot recalculation in parent state

## 5. Ability Scores Section

- [x] 5.1 Create `src/components/AbilityScores.tsx` rendering six score fields (base input, final score, modifier) for Str/Dex/Con/Int/Wis/Cha
- [x] 5.2 Apply `abilityModifier()` to derive and display the modifier for each base score
- [x] 5.3 Add HTML5 `min=1 max=30` validation to base score inputs

## 6. Spell Slots Section

- [x] 6.1 Create `src/components/SpellSlots.tsx` calling `getSpellSlots()` and rendering a table of spell level → slot count rows
- [x] 6.2 Hide rows where slot count is 0; hide entire section if class has no spellcasting

## 7. Inventory Section

- [x] 7.1 Create `src/components/InventoryList.tsx` rendering the list of items with inline edit fields for name, quantity, and notes
- [x] 7.2 Add an add-item form (name required, quantity defaults to 1, notes optional) that appends to the list on submit
- [x] 7.3 Add a remove button per item that deletes it from the list
- [x] 7.4 Display a running item count above the list

## 8. Persistence and Import/Export

- [x] 8.1 In the root page component (`src/app/page.tsx`), hydrate React state from `loadCharacter()` on mount
- [x] 8.2 Add a `useEffect` that calls `saveCharacter()` whenever character state changes
- [x] 8.3 Add an Export button that calls `exportJson()` to trigger a `.json` file download
- [x] 8.4 Add a file input for import that calls `importJson()`, updates state on success, and shows an error message on failure

## 9. Page Assembly

- [x] 9.1 Compose all section components in `src/app/page.tsx` with the character state lifted to the page level
- [x] 9.2 Apply Tailwind layout: single-column on mobile, two-column grid on desktop
- [x] 9.3 Add a page title and basic header with export/import controls

## 10. Smoke Testing

- [x] 10.1 Manually verify: enter a character, reload the page, confirm data is restored from localStorage
- [x] 10.2 Manually verify: select a kindred and confirm type, languages, and traits display correctly
- [x] 10.3 Manually verify: change class and level and confirm spell slot table updates correctly
- [x] 10.4 Manually verify: add and remove inventory items and confirm counts are correct
- [x] 10.5 Manually verify: export JSON, clear localStorage, import the file, confirm character is restored
