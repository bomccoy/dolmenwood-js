import { CLASSES } from "@/data/classes";

export function getSpellSlots(className: string, level: number): number[] {
  const cls = CLASSES.find((c) => c.name === className);
  if (!cls || !cls.spellSlots) return [0, 0, 0, 0, 0, 0];
  const clampedLevel = Math.max(1, Math.min(level, cls.spellSlots.length));
  return cls.spellSlots[clampedLevel - 1];
}
