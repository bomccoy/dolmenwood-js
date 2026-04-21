"use client";

import { getSpellSlots } from "@/lib/spellSlots";
import { CLASSES } from "@/data/classes";

interface Props {
  className: string;
  level: number;
}

const RANK_LABELS = ["R1", "R2", "R3", "R4", "R5", "R6"];

export default function SpellSlots({ className, level }: Props) {
  const cls = CLASSES.find((c) => c.name === className);
  if (!cls || !cls.spellSlots) return null;

  const slots = getSpellSlots(className, level);
  const rows = slots
    .map((count, i) => ({ rank: RANK_LABELS[i], count }))
    .filter((r) => r.count > 0);

  if (rows.length === 0) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Spell Slots</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left border-b dark:border-gray-600">
            <th className="pb-1 pr-3 dark:text-gray-300">Rank</th>
            <th className="pb-1 dark:text-gray-300">Slots</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ rank, count }) => (
            <tr key={rank} className="border-b dark:border-gray-600 last:border-0">
              <td className="py-1 pr-3 dark:text-gray-200">{rank}</td>
              <td className="py-1 dark:text-gray-200">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
