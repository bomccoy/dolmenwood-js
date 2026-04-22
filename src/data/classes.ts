export interface AdvancementRow {
  level: number;
  xp: number;
  hp: string;
  attack: number;
  saves: { doom: number; ray: number; hold: number; blast: number; spell: number };
  glamours?: number;  // Enchanter only
  talents?: number;   // Fighter only
  acBonus?: number;   // Friar only
}

// spellSlots[level - 1][rank - 1] = number of slots; null = no spellcasting
export interface GameClass {
  name: string;
  spellSlots: number[][] | null;
  advancement: AdvancementRow[];
}

export const CLASSES: GameClass[] = [
  {
    name: "Bard",
    spellSlots: null,
    advancement: [
      { level:  1, xp:       0, hp: "1d6",  attack: 0, saves: { doom: 13, ray: 14, hold: 13, blast: 15, spell: 15 } },
      { level:  2, xp:    1750, hp: "+1d6", attack: 0, saves: { doom: 13, ray: 14, hold: 13, blast: 15, spell: 15 } },
      { level:  3, xp:    3500, hp: "+1d6", attack: 1, saves: { doom: 12, ray: 13, hold: 12, blast: 14, spell: 14 } },
      { level:  4, xp:    7000, hp: "+1d6", attack: 1, saves: { doom: 12, ray: 13, hold: 12, blast: 14, spell: 14 } },
      { level:  5, xp:   14000, hp: "+1d6", attack: 2, saves: { doom: 11, ray: 12, hold: 11, blast: 13, spell: 13 } },
      { level:  6, xp:   28000, hp: "+1d6", attack: 2, saves: { doom: 11, ray: 12, hold: 11, blast: 13, spell: 13 } },
      { level:  7, xp:   56000, hp: "+1d6", attack: 3, saves: { doom: 10, ray: 11, hold: 10, blast: 12, spell: 12 } },
      { level:  8, xp:  112000, hp: "+1d6", attack: 3, saves: { doom: 10, ray: 11, hold: 10, blast: 12, spell: 12 } },
      { level:  9, xp:  220000, hp: "+1d6", attack: 4, saves: { doom:  9, ray: 10, hold:  9, blast: 11, spell: 11 } },
      { level: 10, xp:  340000, hp: "+1d6", attack: 4, saves: { doom:  9, ray: 10, hold:  9, blast: 11, spell: 11 } },
      { level: 11, xp:  460000, hp: "+1",   attack: 5, saves: { doom:  8, ray:  9, hold:  8, blast: 10, spell: 10 } },
      { level: 12, xp:  580000, hp: "+1",   attack: 5, saves: { doom:  8, ray:  9, hold:  8, blast: 10, spell: 10 } },
      { level: 13, xp:  700000, hp: "+1",   attack: 6, saves: { doom:  7, ray:  8, hold:  7, blast:  9, spell:  9 } },
      { level: 14, xp:  820000, hp: "+1",   attack: 6, saves: { doom:  7, ray:  8, hold:  7, blast:  9, spell:  9 } },
      { level: 15, xp:  940000, hp: "+1",   attack: 7, saves: { doom:  6, ray:  7, hold:  6, blast:  8, spell:  8 } },
    ],
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
    advancement: [
      { level:  1, xp:       0, hp: "1d6",  attack: 0, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  2, xp:    1500, hp: "+1d6", attack: 0, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  3, xp:    3000, hp: "+1d6", attack: 1, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  4, xp:    6000, hp: "+1d6", attack: 1, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  5, xp:   12000, hp: "+1d6", attack: 2, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level:  6, xp:   24000, hp: "+1d6", attack: 2, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level:  7, xp:   48000, hp: "+1d6", attack: 3, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level:  8, xp:   96000, hp: "+1d6", attack: 3, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level:  9, xp:  190000, hp: "+1d6", attack: 4, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
      { level: 10, xp:  290000, hp: "+1d6", attack: 4, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
      { level: 11, xp:  390000, hp: "+1",   attack: 5, saves: { doom:  6, ray:  7, hold:  8, blast: 11, spell:  9 } },
      { level: 12, xp:  490000, hp: "+1",   attack: 5, saves: { doom:  6, ray:  7, hold:  8, blast: 11, spell:  9 } },
      { level: 13, xp:  590000, hp: "+1",   attack: 6, saves: { doom:  5, ray:  6, hold:  7, blast: 10, spell:  8 } },
      { level: 14, xp:  690000, hp: "+1",   attack: 6, saves: { doom:  5, ray:  6, hold:  7, blast: 10, spell:  8 } },
      { level: 15, xp:  700000, hp: "+1",   attack: 7, saves: { doom:  4, ray:  5, hold:  6, blast:  9, spell:  7 } },
    ],
  },
  {
    name: "Enchanter",
    spellSlots: null,
    advancement: [
      { level:  1, xp:       0, hp: "1d6",  attack: 0, glamours:  1, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  2, xp:    1750, hp: "+1d6", attack: 0, glamours:  2, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  3, xp:    3500, hp: "+1d6", attack: 1, glamours:  3, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  4, xp:    7000, hp: "+1d6", attack: 1, glamours:  3, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  5, xp:   14000, hp: "+1d6", attack: 2, glamours:  4, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level:  6, xp:   28000, hp: "+1d6", attack: 2, glamours:  5, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level:  7, xp:   56000, hp: "+1d6", attack: 3, glamours:  6, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level:  8, xp:  112000, hp: "+1d6", attack: 3, glamours:  6, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level:  9, xp:  220000, hp: "+1d6", attack: 4, glamours:  7, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
      { level: 10, xp:  340000, hp: "+1d6", attack: 4, glamours:  7, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
      { level: 11, xp:  460000, hp: "+1",   attack: 5, glamours:  8, saves: { doom:  6, ray:  7, hold:  8, blast: 11, spell:  9 } },
      { level: 12, xp:  580000, hp: "+1",   attack: 5, glamours:  8, saves: { doom:  6, ray:  7, hold:  8, blast: 11, spell:  9 } },
      { level: 13, xp:  700000, hp: "+1",   attack: 6, glamours:  9, saves: { doom:  5, ray:  6, hold:  7, blast: 10, spell:  8 } },
      { level: 14, xp:  820000, hp: "+1",   attack: 6, glamours:  9, saves: { doom:  5, ray:  6, hold:  7, blast: 10, spell:  8 } },
      { level: 15, xp:  940000, hp: "+1",   attack: 7, glamours: 10, saves: { doom:  4, ray:  5, hold:  6, blast:  9, spell:  7 } },
    ],
  },
  {
    name: "Fighter",
    spellSlots: null,
    advancement: [
      { level:  1, xp:       0, hp: "1d8",  attack:  1, talents: 0, saves: { doom: 12, ray: 13, hold: 14, blast: 15, spell: 16 } },
      { level:  2, xp:    2000, hp: "+1d8", attack:  1, talents: 1, saves: { doom: 12, ray: 13, hold: 14, blast: 15, spell: 16 } },
      { level:  3, xp:    4000, hp: "+1d8", attack:  2, talents: 1, saves: { doom: 11, ray: 12, hold: 13, blast: 14, spell: 15 } },
      { level:  4, xp:    8000, hp: "+1d8", attack:  3, talents: 1, saves: { doom: 10, ray: 11, hold: 12, blast: 13, spell: 14 } },
      { level:  5, xp:   16000, hp: "+1d8", attack:  3, talents: 1, saves: { doom: 10, ray: 11, hold: 12, blast: 13, spell: 14 } },
      { level:  6, xp:   32000, hp: "+1d8", attack:  4, talents: 2, saves: { doom:  9, ray: 10, hold: 11, blast: 12, spell: 13 } },
      { level:  7, xp:   64000, hp: "+1d8", attack:  5, talents: 2, saves: { doom:  8, ray:  9, hold: 10, blast: 11, spell: 12 } },
      { level:  8, xp:  128000, hp: "+1d8", attack:  5, talents: 2, saves: { doom:  8, ray:  9, hold: 10, blast: 11, spell: 12 } },
      { level:  9, xp:  260000, hp: "+1d8", attack:  6, talents: 2, saves: { doom:  7, ray:  8, hold:  9, blast: 10, spell: 11 } },
      { level: 10, xp:  380000, hp: "+1d8", attack:  7, talents: 3, saves: { doom:  6, ray:  7, hold:  8, blast:  9, spell: 10 } },
      { level: 11, xp:  500000, hp: "+2",   attack:  7, talents: 3, saves: { doom:  6, ray:  7, hold:  8, blast:  9, spell: 10 } },
      { level: 12, xp:  620000, hp: "+2",   attack:  8, talents: 3, saves: { doom:  5, ray:  6, hold:  7, blast:  8, spell:  9 } },
      { level: 13, xp:  740000, hp: "+2",   attack:  9, talents: 3, saves: { doom:  4, ray:  5, hold:  6, blast:  7, spell:  8 } },
      { level: 14, xp:  860000, hp: "+2",   attack:  9, talents: 4, saves: { doom:  4, ray:  5, hold:  6, blast:  7, spell:  8 } },
      { level: 15, xp:  980000, hp: "+2",   attack: 10, talents: 4, saves: { doom:  3, ray:  4, hold:  5, blast:  6, spell:  7 } },
    ],
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
    advancement: [
      { level:  1, xp:       0, hp: "1d4",  attack: 0, acBonus: 2, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  2, xp:    1750, hp: "+1d4", attack: 0, acBonus: 2, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  3, xp:    3500, hp: "+1d4", attack: 0, acBonus: 2, saves: { doom: 11, ray: 12, hold: 13, blast: 16, spell: 14 } },
      { level:  4, xp:    7000, hp: "+1d4", attack: 1, acBonus: 3, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  5, xp:   14000, hp: "+1d4", attack: 1, acBonus: 3, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  6, xp:   28000, hp: "+1d4", attack: 1, acBonus: 3, saves: { doom: 10, ray: 11, hold: 12, blast: 15, spell: 13 } },
      { level:  7, xp:   56000, hp: "+1d4", attack: 2, acBonus: 4, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level:  8, xp:  112000, hp: "+1d4", attack: 2, acBonus: 4, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level:  9, xp:  220000, hp: "+1d4", attack: 2, acBonus: 4, saves: { doom:  9, ray: 10, hold: 11, blast: 14, spell: 12 } },
      { level: 10, xp:  340000, hp: "+1d4", attack: 3, acBonus: 4, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level: 11, xp:  460000, hp: "+1",   attack: 3, acBonus: 5, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level: 12, xp:  580000, hp: "+1",   attack: 3, acBonus: 5, saves: { doom:  8, ray:  9, hold: 10, blast: 13, spell: 11 } },
      { level: 13, xp:  700000, hp: "+1",   attack: 4, acBonus: 5, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
      { level: 14, xp:  820000, hp: "+1",   attack: 4, acBonus: 5, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
      { level: 15, xp:  940000, hp: "+1",   attack: 4, acBonus: 5, saves: { doom:  7, ray:  8, hold:  9, blast: 12, spell: 10 } },
    ],
  },
  {
    name: "Hunter",
    spellSlots: null,
    advancement: [
      { level:  1, xp:        0, hp: "1d8",  attack:  1, saves: { doom: 12, ray: 13, hold: 14, blast: 15, spell: 16 } },
      { level:  2, xp:     2250, hp: "+1d8", attack:  1, saves: { doom: 12, ray: 13, hold: 14, blast: 15, spell: 16 } },
      { level:  3, xp:     4500, hp: "+1d8", attack:  2, saves: { doom: 11, ray: 12, hold: 13, blast: 14, spell: 15 } },
      { level:  4, xp:     9000, hp: "+1d8", attack:  3, saves: { doom: 10, ray: 11, hold: 12, blast: 13, spell: 14 } },
      { level:  5, xp:    18000, hp: "+1d8", attack:  3, saves: { doom: 10, ray: 11, hold: 12, blast: 13, spell: 14 } },
      { level:  6, xp:    36000, hp: "+1d8", attack:  4, saves: { doom:  9, ray: 10, hold: 11, blast: 12, spell: 13 } },
      { level:  7, xp:    72000, hp: "+1d8", attack:  5, saves: { doom:  8, ray:  9, hold: 10, blast: 11, spell: 12 } },
      { level:  8, xp:   144000, hp: "+1d8", attack:  5, saves: { doom:  8, ray:  9, hold: 10, blast: 11, spell: 12 } },
      { level:  9, xp:   290000, hp: "+1d8", attack:  6, saves: { doom:  7, ray:  8, hold:  9, blast: 10, spell: 11 } },
      { level: 10, xp:   420000, hp: "+1d8", attack:  7, saves: { doom:  6, ray:  7, hold:  8, blast:  9, spell: 10 } },
      { level: 11, xp:   550000, hp: "+2",   attack:  7, saves: { doom:  6, ray:  7, hold:  8, blast:  9, spell: 10 } },
      { level: 12, xp:   680000, hp: "+2",   attack:  8, saves: { doom:  5, ray:  6, hold:  7, blast:  8, spell:  9 } },
      { level: 13, xp:   810000, hp: "+2",   attack:  9, saves: { doom:  4, ray:  5, hold:  6, blast:  7, spell:  8 } },
      { level: 14, xp:   940000, hp: "+2",   attack:  9, saves: { doom:  4, ray:  5, hold:  6, blast:  7, spell:  8 } },
      { level: 15, xp:  1070000, hp: "+2",   attack: 10, saves: { doom:  3, ray:  4, hold:  5, blast:  6, spell:  7 } },
    ],
  },
  {
    name: "Knight",
    spellSlots: null,
    advancement: [
      { level:  1, xp:        0, hp: "1d8",  attack:  1, saves: { doom: 12, ray: 13, hold: 12, blast: 15, spell: 15 } },
      { level:  2, xp:     2250, hp: "+1d8", attack:  1, saves: { doom: 12, ray: 13, hold: 12, blast: 15, spell: 15 } },
      { level:  3, xp:     4500, hp: "+1d8", attack:  2, saves: { doom: 11, ray: 12, hold: 11, blast: 14, spell: 14 } },
      { level:  4, xp:     9000, hp: "+1d8", attack:  3, saves: { doom: 10, ray: 11, hold: 10, blast: 13, spell: 13 } },
      { level:  5, xp:    18000, hp: "+1d8", attack:  3, saves: { doom: 10, ray: 11, hold: 10, blast: 13, spell: 13 } },
      { level:  6, xp:    36000, hp: "+1d8", attack:  4, saves: { doom:  9, ray: 10, hold:  9, blast: 12, spell: 12 } },
      { level:  7, xp:    72000, hp: "+1d8", attack:  5, saves: { doom:  8, ray:  9, hold:  8, blast: 11, spell: 11 } },
      { level:  8, xp:   144000, hp: "+1d8", attack:  5, saves: { doom:  8, ray:  9, hold:  8, blast: 11, spell: 11 } },
      { level:  9, xp:   290000, hp: "+1d8", attack:  6, saves: { doom:  7, ray:  8, hold:  7, blast: 10, spell: 10 } },
      { level: 10, xp:   420000, hp: "+1d8", attack:  7, saves: { doom:  6, ray:  7, hold:  6, blast:  9, spell:  9 } },
      { level: 11, xp:   550000, hp: "+2",   attack:  7, saves: { doom:  6, ray:  7, hold:  6, blast:  9, spell:  9 } },
      { level: 12, xp:   680000, hp: "+2",   attack:  8, saves: { doom:  5, ray:  6, hold:  5, blast:  8, spell:  8 } },
      { level: 13, xp:   810000, hp: "+2",   attack:  9, saves: { doom:  4, ray:  5, hold:  4, blast:  7, spell:  7 } },
      { level: 14, xp:   940000, hp: "+2",   attack:  9, saves: { doom:  4, ray:  5, hold:  4, blast:  7, spell:  7 } },
      { level: 15, xp:  1070000, hp: "+2",   attack: 10, saves: { doom:  3, ray:  4, hold:  3, blast:  6, spell:  6 } },
    ],
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
    advancement: [
      { level:  1, xp:        0, hp: "1d4",  attack: 0, saves: { doom: 14, ray: 14, hold: 13, blast: 16, spell: 14 } },
      { level:  2, xp:     2500, hp: "+1d4", attack: 0, saves: { doom: 14, ray: 14, hold: 13, blast: 16, spell: 14 } },
      { level:  3, xp:     5000, hp: "+1d4", attack: 0, saves: { doom: 14, ray: 14, hold: 13, blast: 16, spell: 14 } },
      { level:  4, xp:    10000, hp: "+1d4", attack: 1, saves: { doom: 13, ray: 13, hold: 12, blast: 15, spell: 13 } },
      { level:  5, xp:    20000, hp: "+1d4", attack: 1, saves: { doom: 13, ray: 13, hold: 12, blast: 15, spell: 13 } },
      { level:  6, xp:    40000, hp: "+1d4", attack: 1, saves: { doom: 13, ray: 13, hold: 12, blast: 15, spell: 13 } },
      { level:  7, xp:    80000, hp: "+1d4", attack: 2, saves: { doom: 12, ray: 12, hold: 11, blast: 14, spell: 12 } },
      { level:  8, xp:   160000, hp: "+1d4", attack: 2, saves: { doom: 12, ray: 12, hold: 11, blast: 14, spell: 12 } },
      { level:  9, xp:   320000, hp: "+1d4", attack: 2, saves: { doom: 12, ray: 12, hold: 11, blast: 14, spell: 12 } },
      { level: 10, xp:   470000, hp: "+1d4", attack: 3, saves: { doom: 11, ray: 11, hold: 10, blast: 13, spell: 11 } },
      { level: 11, xp:   620000, hp: "+1",   attack: 3, saves: { doom: 11, ray: 11, hold: 10, blast: 13, spell: 11 } },
      { level: 12, xp:   770000, hp: "+1",   attack: 3, saves: { doom: 11, ray: 11, hold: 10, blast: 13, spell: 11 } },
      { level: 13, xp:   920000, hp: "+1",   attack: 4, saves: { doom: 10, ray: 10, hold:  9, blast: 12, spell: 10 } },
      { level: 14, xp:  1070000, hp: "+1",   attack: 4, saves: { doom: 10, ray: 10, hold:  9, blast: 12, spell: 10 } },
      { level: 15, xp:  1220000, hp: "+1",   attack: 4, saves: { doom: 10, ray: 10, hold:  9, blast: 12, spell: 10 } },
    ],
  },
  {
    name: "Thief",
    spellSlots: null,
    advancement: [
      { level:  1, xp:       0, hp: "1d4",  attack: 0, saves: { doom: 13, ray: 14, hold: 13, blast: 15, spell: 15 } },
      { level:  2, xp:    1200, hp: "+1d4", attack: 0, saves: { doom: 13, ray: 14, hold: 13, blast: 15, spell: 15 } },
      { level:  3, xp:    2400, hp: "+1d4", attack: 1, saves: { doom: 12, ray: 13, hold: 12, blast: 14, spell: 14 } },
      { level:  4, xp:    4800, hp: "+1d4", attack: 1, saves: { doom: 12, ray: 13, hold: 12, blast: 14, spell: 14 } },
      { level:  5, xp:    9600, hp: "+1d4", attack: 2, saves: { doom: 11, ray: 12, hold: 11, blast: 13, spell: 13 } },
      { level:  6, xp:   19200, hp: "+1d4", attack: 2, saves: { doom: 11, ray: 12, hold: 11, blast: 13, spell: 13 } },
      { level:  7, xp:   38400, hp: "+1d4", attack: 3, saves: { doom: 10, ray: 11, hold: 10, blast: 12, spell: 12 } },
      { level:  8, xp:   76800, hp: "+1d4", attack: 3, saves: { doom: 10, ray: 11, hold: 10, blast: 12, spell: 12 } },
      { level:  9, xp:  150000, hp: "+1d4", attack: 4, saves: { doom:  9, ray: 10, hold:  9, blast: 11, spell: 11 } },
      { level: 10, xp:  270000, hp: "+1d4", attack: 4, saves: { doom:  9, ray: 10, hold:  9, blast: 11, spell: 11 } },
      { level: 11, xp:  390000, hp: "+1",   attack: 5, saves: { doom:  8, ray:  9, hold:  8, blast: 10, spell: 10 } },
      { level: 12, xp:  510000, hp: "+1",   attack: 5, saves: { doom:  8, ray:  9, hold:  8, blast: 10, spell: 10 } },
      { level: 13, xp:  630000, hp: "+1",   attack: 6, saves: { doom:  7, ray:  8, hold:  7, blast:  9, spell:  9 } },
      { level: 14, xp:  750000, hp: "+1",   attack: 6, saves: { doom:  7, ray:  8, hold:  7, blast:  9, spell:  9 } },
      { level: 15, xp:  870000, hp: "+1",   attack: 7, saves: { doom:  6, ray:  7, hold:  6, blast:  8, spell:  8 } },
    ],
  },
];
