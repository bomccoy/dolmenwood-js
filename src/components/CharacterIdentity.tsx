"use client";

import { KINDREDS } from "@/data/kindreds";
import { CLASSES } from "@/data/classes";
import type { Character } from "@/types/character";

interface Props {
  character: Character;
  onChange: (updates: Partial<Character>) => void;
}

export default function CharacterIdentity({ character, onChange }: Props) {
  const selectedKindred = KINDREDS.find((k) => k.name === character.kindred);

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
          <div>
            <span className="font-medium">Traits:</span>
            <ul className="mt-1 space-y-1">
              {selectedKindred.traits.map((t) => (
                <li key={t.name}>
                  <span className="font-medium">{t.name}:</span> {t.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
