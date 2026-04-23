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

export interface ClassAbility {
  name: string;
  description: string;
}

// spellSlots[level - 1][rank - 1] = number of slots; null = no spellcasting
export interface GameClass {
  name: string;
  spellSlots: number[][] | null;
  advancement: AdvancementRow[];
  abilities: ClassAbility[];
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
    abilities: [
      {
        name: "Bard Skills",
        description: "Listen (target 5) plus Decipher Document, Legerdemain, and Monster Lore. Targets improve by level. Decipher Document: decode unknown text/cipher/map (retry after levelling). Legerdemain: sleight of hand; −1 per 3 levels of observer; natural 1 = Save vs Doom or be noticed. Monster Lore: identify monster powers/vulnerabilities (retry after levelling).",
      },
      {
        name: "Counter Charm",
        description: "While playing music and singing, allies within 30′ are immune to music/song magic and gain +2 to saves vs fairy magic. Once per Turn. Half speed, no attacks. Ends immediately if the bard is harmed or fails a save.",
      },
      {
        name: "Enchantment",
        description: "Fascinate targets in 30′. Once/day/level; not in combat. Targets up to 2× bard's level total may be affected (mortals only at L1; animals/demi-fey from L4; fairies/monstrosities from L7). Each target saves vs Spell or is fascinated (follows bard at half speed). If uninterrupted for 1+ Turn, each fascinated target saves again (+2 bonus) or is charmed (treats bard as trusted friend, obeys commands if shared language). Duration: 1 Turn/level.",
      },
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
    abilities: [
      {
        name: "Holy Magic",
        description: "Pray daily for holy spells (no spell book required). Spells begin at Level 2.",
      },
      {
        name: "Detect Holy Magic Items",
        description: "Touch an object and concentrate for 1 Turn to detect holy magic enchantments.",
      },
      {
        name: "Holy Order",
        description: "Chosen at Level 2. St Faxis: +2 saves vs arcane magic; arcane casters suffer −2 saves vs cleric's spells. St Sedge: lay on hands once/day, healing up to 1 HP/level total. St Signis: +1 Attack vs undead; attacks harm undead normally immune to non-magical/non-silver weapons.",
      },
      {
        name: "Turn Undead",
        description: "Once per Round as an action, present holy symbol and roll 2d6. Higher results affect more powerful undead. Turned undead flee for 1d6 Turns. On 12+, lower-level undead may be destroyed.",
      },
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
    abilities: [
      {
        name: "Detect Magic",
        description: "Touch + 1 Turn concentration; Referee rolls secretly (failure indistinguishable from no magic). May retry each Turn. 1 hour of solitude = automatic detection. Skill target improves by level.",
      },
      {
        name: "Fairy Runes",
        description: "Starts with 1 random lesser rune. Roll for a chance to gain a new rune each level. See Fairy Magic rules.",
      },
      {
        name: "Glamours",
        description: "Knows a number of glamours per the advancement table, chosen randomly. Kindred glamours (from ancestry) are in addition to class glamours.",
      },
      {
        name: "Magic Items",
        description: "May use magic items restricted to arcane spell-casters (arcane scrolls, wands, etc.).",
      },
      {
        name: "Resistance to Divine Aid",
        description: "2-in-6 chance that beneficial holy spells targeting the enchanter have no effect.",
      },
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
    abilities: [
      {
        name: "Combat Talents",
        description: "Gains one talent at Levels 2, 6, 10, and 14 (roll or choose). Options: Battle Rage (+2 attack/damage, −4 AC, can't flee until combat ends); Cleave (extra melee attack at −2 on a killing blow); Defender (foe's attacks on others at −2 while in melee with fighter); Last Stand (act 5 Rounds at 0 HP, Save vs Doom each time damaged or die immediately); Leader (+1 Morale/Loyalty for hirelings in 60′, allies +2 saves vs fear in 60′); Main Gauche (choose +1 AC or +1 Attack per Round when using small off-hand weapon); Slayer (+1 attack/damage vs chosen foe type; stackable for different types); Weapon Specialist (+1 attack/damage with chosen weapon type; stackable for different types).",
      },
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
    abilities: [
      {
        name: "Armour of Faith",
        description: "Divine blessing grants an AC bonus per the advancement table (no armour worn).",
      },
      {
        name: "Culinary Implements",
        description: "A frying pan, cured sausage, or ham shank may be used as a melee weapon dealing 1d4 damage.",
      },
      {
        name: "Herbalism",
        description: "A single dose of medicinal herb is sufficient for 2 subjects when used by a friar.",
      },
      {
        name: "Holy Magic",
        description: "Pray daily for holy spells. Requires a holy symbol. May use magic items exclusive to holy spell-casters.",
      },
      {
        name: "Poverty",
        description: "Possessions limited to what can be carried on person or mount. Excess wealth must be donated. Must wear a simple habit and tonsure.",
      },
      {
        name: "Skills",
        description: "Survival skill (target 5) for foraging.",
      },
      {
        name: "Turning the Undead",
        description: "Once per Turn, present holy symbol and roll 2d6 against undead within 30′. 4−: no effect; 5–6: 2d4 stunned 1 Round; 7–12: 2d4 flee 1 Turn; 13+: 2d4 destroyed. Modify roll ±2 per level difference between friar and undead (max ±6). In mixed groups, lowest-level undead are affected first.",
      },
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
    abilities: [
      {
        name: "Animal Companion",
        description: "Approach an animal peacefully, spend 1 Turn, make a CHA check to bond with it. Companion may not exceed hunter's level. Fights loyally, never checks Morale. If it dies or is dismissed, a new bond may be attempted.",
      },
      {
        name: "Hunter Skills",
        description: "Survival (target 5) plus Alertness, Stalking, and Tracking. Targets improve by level. Alertness: on surprise, make a check to act normally in the surprise round. Stalking (wilds only): hide with only light brush cover, or personally avoid detection on a failed party surprise roll. Tracking (wilds only): spend 1 Turn to find tracks in 30′×30′ area; follow trail until conditions worsen (new check required). Modifiers: +1 soft ground; −1 hard; +1 for 10+ creatures; −2 covered; −1/day old; −1/hour rain or snow; −1 poor light.",
      },
      {
        name: "Missile Attacks",
        description: "+1 Attack bonus with all missile weapons.",
      },
      {
        name: "Trophies",
        description: "After tracking, ambushing, or chasing down and slaying a creature, take a sizeable trophy (50+ coins weight). While on person or mounted at home: +1 Attack and +1 saves vs special attacks from creatures of the same type.",
      },
      {
        name: "Wayfinding",
        description: "3-in-6 chance to reorient the party if they become lost.",
      },
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
    abilities: [
      {
        name: "Chivalric Code",
        description: "Uphold honour, service to liege, glory in battle, protection of the weak, and social hierarchy. Violating the code risks Disfavour from the knight's liege.",
      },
      {
        name: "Horsemanship",
        description: "Expert rider; can assess any steed's HP quality (low/average/high). Level 5+: once/day urge steed to +10 Speed for up to 6 Turns.",
      },
      {
        name: "Knighthood",
        description: "Levels 1–2 are squires. At Level 3, knighted by liege: earns a coat of arms and hospitality rights from nobles and knights of the same Alignment. Knighthood can be revoked for failure, dishonour, or Alignment change — character becomes an equivalent-level Fighter. May regain standing via a special quest.",
      },
      {
        name: "Monster Slayer",
        description: "Level 5+: +2 Attack and Damage against Large creatures.",
      },
      {
        name: "Mounted Combat",
        description: "+1 Attack bonus when mounted.",
      },
      {
        name: "Strength of Will",
        description: "+2 bonus to Saving Throws against fairy magic and fear effects.",
      },
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
    abilities: [
      {
        name: "Arcane Magic",
        description: "Memorise spells from spell book daily. Spell book must be consulted; spells are forgotten after casting. May use magic items exclusive to arcane spell-casters (wands, arcane scrolls, etc.).",
      },
      {
        name: "Detect Magic",
        description: "Touch + 1 Turn concentration; Referee rolls secretly (failure indistinguishable from no magic). May retry each Turn. 1 hour of solitude = automatic detection. Skill target improves by level.",
      },
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
    abilities: [
      {
        name: "Back-Stab",
        description: "Melee dagger attack against a target unaware of the thief (hidden or sneaking counts). Target must be mortal, fairy, or demi-fey of Small or Medium size. +4 Attack; on hit, deals 3d4 damage (STR-modified; magic dagger bonus applies).",
      },
      {
        name: "Thief Skills",
        description: "Listen and Search (target 5) plus six specialised skills with targets improving by level: Climb Wall (vertical/steep surfaces, no equipment; natural 1 = Save vs Doom or fall from halfway); Decipher Document (unknown language, cipher, or map markings; retry after levelling); Disarm Mechanism (traps in locks/lids/handles; needs tools, 1 Turn; natural 1 = Save vs Doom or trigger trap); Legerdemain (pilfer small item or sleight of hand; −1 per 3 levels of observer; natural 1 = Save vs Doom or noticed); Pick Lock (no key, needs tools, 1 Turn per attempt; may retry freely unless lock specifies otherwise); Stealth (hide in shadows only; or personally avoid detection on a failed party surprise roll).",
      },
      {
        name: "Thieves' Cant",
        description: "Secret language of gestures and code words that conceals messages within normal conversation.",
      },
    ],
  },
];
