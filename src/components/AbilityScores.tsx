"use client";

import { abilityModifier } from "@/lib/stats";
import type { Character } from "@/types/character";

const ABILITIES: { key: keyof Character["baseStats"]; label: string }[] = [
  { key: "strength", label: "STR" },
  { key: "dexterity", label: "DEX" },
  { key: "constitution", label: "CON" },
  { key: "intelligence", label: "INT" },
  { key: "wisdom", label: "WIS" },
  { key: "charisma", label: "CHA" },
];

interface Props {
  baseStats: Character["baseStats"];
  onChange: (stats: Character["baseStats"]) => void;
}

export default function AbilityScores({ baseStats, onChange }: Props) {
  function handleChange(key: keyof Character["baseStats"], raw: string) {
    const val = parseInt(raw, 10);
    if (isNaN(val) || val < 1 || val > 30) return;
    onChange({ ...baseStats, [key]: val });
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Ability Scores</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left border-b dark:border-gray-600">
            <th className="pb-1 pr-3 dark:text-gray-300">Ability</th>
            <th className="pb-1 pr-3 dark:text-gray-300">Score</th>
            <th className="pb-1 dark:text-gray-300">Modifier</th>
          </tr>
        </thead>
        <tbody>
          {ABILITIES.map(({ key, label }) => {
            const score = baseStats[key];
            const mod = abilityModifier(score);
            return (
              <tr key={key} className="border-b dark:border-gray-600 last:border-0">
                <td className="py-1 pr-3 font-medium dark:text-gray-200">{label}</td>
                <td className="py-1 pr-3">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={score}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-16 border dark:border-gray-600 rounded px-1 py-0.5 dark:bg-gray-700 dark:text-white"
                  />
                </td>
                <td className="py-1 font-mono dark:text-gray-200">
                  {mod >= 0 ? `+${mod}` : `${mod}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
