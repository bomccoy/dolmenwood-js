export interface Trait {
  name: string;
  description: string;
}

export interface Kindred {
  name: string;
  kindredType: "Mortal" | "Fairy" | "Demi-fey";
  nativeLanguages: string[];
  traits: Trait[];
}

export const KINDREDS: Kindred[] = [
  {
    name: "Breggle",
    kindredType: "Mortal",
    nativeLanguages: ["Woldish", "Gaffe", "Caprice"],
    traits: [
      {
        name: "Fur",
        description: "+1 AC when unarmoured or wearing Light armour.",
      },
      {
        name: "Horns",
        description:
          "May make a melee attack with horns instead of a weapon. Damage and horn length increase with Level (1d4 at Levels 1–3, up to 1d6+2 at Level 10+). Upon reaching Level 4, horns reach longhorn size and the character is recognised as a longhorn.",
      },
      {
        name: "Gaze (Level 4+)",
        description:
          "Gaze intently at one human or shorthorn. Target must Save Versus Spell or be charmed — views the longhorn with awe and respect and cannot directly or indirectly harm them. Duration: until next sunrise. Usage: 1/day at Level 4, scaling to 4/day at Level 10+. Each subject may be targeted at most once per day. Countered by the holy spell Mantle of Protection.",
      },
    ],
  },
  {
    name: "Elf",
    kindredType: "Fairy",
    nativeLanguages: ["Woldish", "Sylvan", "High Elfish"],
    traits: [
      {
        name: "Glamours",
        description: "Possesses a single randomly determined glamour.",
      },
      {
        name: "Immortality",
        description:
          "Cannot die naturally; immune to non-magical diseases. Cannot die from thirst or starvation, but lack of sustenance drives the elf desperate and sadistic.",
      },
      {
        name: "Magic Resistance",
        description: "+2 Magic Resistance.",
      },
      {
        name: "Skills",
        description: "Skill Target of 5 for Listen and Search.",
      },
      {
        name: "Unearthly Beauty",
        description:
          "+2 bonus to Charisma (maximum 18) when interacting with mortals.",
      },
      {
        name: "Vulnerable to Cold Iron",
        description: "Cold iron weapons inflict +1 damage.",
      },
    ],
  },
  {
    name: "Grimalkin",
    kindredType: "Fairy",
    nativeLanguages: ["Woldish", "Mewl"],
    traits: [
      {
        name: "Armour and Weapons",
        description:
          "Armour must be tailored to small size. Cannot wield Large weapons.",
      },
      {
        name: "Defensive Bonus",
        description: "+2 AC in melee with Large creatures, due to small size.",
      },
      {
        name: "Eating Giant Rodents",
        description:
          "After spending 1 Turn devouring a freshly killed giant rodent, heals 1 HP.",
      },
      {
        name: "Glamours",
        description: "Possesses a single randomly determined glamour.",
      },
      {
        name: "Immortality",
        description:
          "Cannot die naturally; immune to non-magical diseases. Cannot die from thirst or starvation, but lack of sustenance drives them desperate and sadistic.",
      },
      {
        name: "Magic Resistance",
        description: "+2 Magic Resistance.",
      },
      {
        name: "Shape-Shifting",
        description:
          "Can transform (1 Round) into Chester (fat domestic cat, unlimited) or Wilder (primal fey form, once/day). Cannot use weapons, magic, or class abilities while transformed. Chester: AC 12, Speed 30, bite + two claws (1 damage each); can understand speech but only responds in yowls; returns to humanoid only when unobserved. Wilder: only when in melee and below half HP; heals 2d6 HP on entering; near-invisible (opponents −2 to Attack Rolls); AC 13, Speed 30, bite + two claws +2 to hit (1d4 each); attacks nearest creature indiscriminately; reverts after 2d4 Rounds.",
      },
      {
        name: "Skills",
        description: "Skill Target of 5 for Listen.",
      },
      {
        name: "Vulnerable to Cold Iron",
        description: "Cold iron weapons inflict +1 damage.",
      },
    ],
  },
  {
    name: "Human",
    kindredType: "Mortal",
    nativeLanguages: ["Woldish"],
    traits: [
      {
        name: "Class Freedom",
        description: "Humans may choose any of the 9 classes.",
      },
      {
        name: "Decisiveness",
        description: "When an Initiative Roll is tied, humans act first.",
      },
      {
        name: "Leadership",
        description:
          "The Loyalty rating of retainers in the employ of a human character is increased by 1.",
      },
      {
        name: "Spirited",
        description: "+10% bonus to all Experience Points earned.",
      },
    ],
  },
  {
    name: "Mossling",
    kindredType: "Mortal",
    nativeLanguages: ["Woldish", "Mulch"],
    traits: [
      {
        name: "Armour and Weapons",
        description:
          "Armour must be tailored to small size. Cannot wield Large weapons. Uses bark armour in place of chainmail and pinecone armour in place of plate mail.",
      },
      {
        name: "Knacks",
        description:
          "Each mossling knows one knack, rolled or chosen at character creation.",
      },
      {
        name: "Resilience",
        description:
          "+4 bonus to Saving Throws against fungal spores and poisons; +2 bonus to all other Saving Throws.",
      },
      {
        name: "Skills",
        description: "Skill Target of 5 for Survival when foraging.",
      },
      {
        name: "Symbiotic Flesh",
        description:
          "At each Level (including Level 1), acquires a random trait from the Symbiotic Flesh table (d20). Duplicates may be re-rolled or treated as an amplification.",
      },
    ],
  },
  {
    name: "Woodgrue",
    kindredType: "Demi-fey",
    nativeLanguages: ["Woldish", "Sylvan"],
    traits: [
      {
        name: "Armour and Weapons",
        description:
          "Armour must be tailored to small size. Cannot wield Large weapons.",
      },
      {
        name: "Compulsive Jubilation",
        description:
          "When witnessing a party, feast, celebration, or festival, utterly compelled to partake. May Save Versus Spell to resist; on failure, feels drained and downtrodden for the length of the engagement.",
      },
      {
        name: "Defensive Bonus",
        description: "+2 AC in melee with Large creatures, due to small size.",
      },
      {
        name: "Mad Revelry",
        description:
          "Once per day, play an enchanted melody on a wind instrument while hooting and dancing. All living creatures within 30′ (including allies) must Save Versus Spell or be afflicted; fairies and demi-fey gain +2 to this save. Effects last while playing; woodgrue may move but not attack. Stops if woodgrue is harmed or fails a save. Melodies: Confide (confess hidden emotion), Dance (+1 AC, can't move), Imbibe (act drunk, −2 to Attack Rolls), Jape (mock preceding event), Jubilate (burst into laughter, 1-in-6 fall over), Mount (attempt to mount nearby creatures, Save vs Hold to resist), Revel (bark scats of sound, Speed halved if not headed toward woodgrue).",
      },
      {
        name: "Moon Sight",
        description:
          "Can see in darkness up to 60′ as if in faint moonlight. No low-light penalties; fine detail (e.g. writing) cannot be perceived.",
      },
      {
        name: "Musical Instruments",
        description:
          "Can employ a musical instrument as a melee weapon, dealing 1d4 damage.",
      },
      {
        name: "Starting Equipment",
        description: "Begins play with a wind instrument.",
      },
      {
        name: "Vulnerable to Cold Iron",
        description: "Cold iron weapons inflict +1 damage.",
      },
    ],
  },
];
