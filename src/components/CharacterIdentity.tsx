"use client";

import { KINDREDS } from "@/data/kindreds";
import { CLASSES } from "@/data/classes";
import type { Character } from "@/types/character";

interface Props {
  character: Character;
  onChange: (updates: Partial<Character>) => void;
}

function hpBarColor(pct: number): string {
  if (pct > 0.5) return "bg-green-500";
  if (pct > 0.25) return "bg-orange-400";
  return "bg-red-500";
}

export default function CharacterIdentity({ character, onChange }: Props) {
  const selectedKindred = KINDREDS.find((k) => k.name === character.kindred);
  const hpDie = CLASSES.find((c) => c.name === character.class)?.advancement[character.level - 1]?.hp;
  const hpPct = (character.maxHp ?? 0) > 0 ? Math.min((character.currentHp ?? 0) / character.maxHp, 1) : 0;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Identity</h2>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
          <input
            type="text"
            value={character.name}
            onChange={(e) => onChange({ name: e.target.value })}
            className="w-full border dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Level</label>
          <input
            type="number"
            min={1}
            max={20}
            value={character.level}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (val >= 1 && val <= 20) onChange({ level: val });
            }}
            className="w-full border dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Kindred</label>
          <select
            value={character.kindred}
            onChange={(e) => onChange({ kindred: e.target.value })}
            className="w-full border dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
          >
            <option value="">— select —</option>
            {KINDREDS.map((k) => (
              <option key={k.name} value={k.name}>
                {k.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Class</label>
          <select
            value={character.class}
            onChange={(e) => onChange({ class: e.target.value })}
            className="w-full border dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
          >
            <option value="">— select —</option>
            {CLASSES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedKindred && (
        <div className="border dark:border-gray-600 rounded p-3 text-sm space-y-2 dark:text-gray-200">
          <div>
            <span className="font-medium">Type:</span> {selectedKindred.kindredType}
          </div>
          <div>
            <span className="font-medium">Languages:</span>{" "}
            {selectedKindred.nativeLanguages.join(", ")}
          </div>
        </div>
      )}

      <div className="mt-3 pt-3 border-t dark:border-gray-600">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium dark:text-gray-300">HP</span>
          {hpDie && (
            <span className="text-xs text-gray-400 dark:text-gray-500">({hpDie} this level)</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Current</label>
            <input
              type="number"
              min={0}
              max={character.maxHp}
              value={character.currentHp ?? 0}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (isNaN(val)) return;
                onChange({ currentHp: Math.min(Math.max(val, 0), character.maxHp ?? 0) });
              }}
              className="w-full border dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max</label>
            <input
              type="number"
              min={0}
              value={character.maxHp ?? 0}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (isNaN(val) || val < 0) return;
                onChange({ maxHp: val, currentHp: Math.min(character.currentHp, val) });
              }}
              className="w-full border dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
        <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${character.maxHp > 0 ? hpBarColor(hpPct) : "bg-gray-300"}`}
            style={{ width: `${hpPct * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
