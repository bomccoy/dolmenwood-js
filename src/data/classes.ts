// spellSlots[level - 1][rank - 1] = number of slots; null = no spellcasting
export interface GameClass {
  name: string;
  spellSlots: number[][] | null;
}

// Spell rank counts per level (ranks 1–6; non-spellcasters = null)
export const CLASSES: GameClass[] = [
  {
    name: "Bard",
    spellSlots: null,
  },
  {
    name: "Cleric",
    // Spells begin at Level 2 (Level 1 has no slots)
    spellSlots: [
      [0, 0, 0, 0, 0, 0], // 1
      [1, 0, 0, 0, 0, 0], // 2
      [2, 0, 0, 0, 0, 0], // 3
      [2, 1, 0, 0, 0, 0], // 4
      [2, 2, 0, 0, 0, 0], // 5
      [2, 2, 1, 0, 0, 0], // 6
      [3, 2, 2, 0, 0, 0], // 7
      [3, 2, 2, 0, 0, 0], // 8
      [3, 3, 2, 1, 0, 0], // 9
      [3, 3, 2, 2, 0, 0], // 10
      [4, 3, 3, 2, 0, 0], // 11
      [4, 3, 3, 2, 1, 0], // 12
      [4, 4, 3, 2, 2, 0], // 13
      [4, 4, 3, 3, 2, 0], // 14
      [5, 4, 4, 3, 2, 0], // 15
    ],
  },
  {
    name: "Enchanter",
    spellSlots: null,
  },
  {
    name: "Fighter",
    spellSlots: null,
  },
  {
    name: "Friar",
    spellSlots: [
      [1, 0, 0, 0, 0, 0], // 1
      [2, 0, 0, 0, 0, 0], // 2
      [2, 1, 0, 0, 0, 0], // 3
      [2, 2, 0, 0, 0, 0], // 4
      [3, 2, 1, 0, 0, 0], // 5
      [3, 2, 2, 0, 0, 0], // 6
      [3, 3, 2, 1, 0, 0], // 7
      [4, 3, 2, 2, 0, 0], // 8
      [4, 3, 3, 2, 1, 0], // 9
      [4, 4, 3, 2, 2, 0], // 10
      [5, 4, 3, 3, 2, 0], // 11
      [5, 4, 4, 3, 2, 0], // 12
      [5, 5, 4, 3, 3, 0], // 13
      [6, 5, 4, 4, 3, 0], // 14
      [6, 5, 5, 4, 3, 0], // 15
    ],
  },
  {
    name: "Hunter",
    spellSlots: null,
  },
  {
    name: "Knight",
    spellSlots: null,
  },
  {
    name: "Magician",
    spellSlots: [
      [1, 0, 0, 0, 0, 0], // 1
      [2, 0, 0, 0, 0, 0], // 2
      [2, 1, 0, 0, 0, 0], // 3
      [2, 2, 0, 0, 0, 0], // 4
      [2, 2, 1, 0, 0, 0], // 5
      [3, 2, 2, 0, 0, 0], // 6
      [3, 2, 2, 1, 0, 0], // 7
      [3, 3, 2, 2, 0, 0], // 8
      [3, 3, 2, 2, 1, 0], // 9
      [4, 3, 3, 2, 2, 0], // 10
      [4, 3, 3, 2, 2, 1], // 11
      [4, 4, 3, 3, 2, 2], // 12
      [4, 4, 3, 3, 3, 2], // 13
      [5, 4, 4, 3, 3, 2], // 14
      [5, 4, 4, 3, 3, 3], // 15
    ],
  },
  {
    name: "Thief",
    spellSlots: null,
  },
];
