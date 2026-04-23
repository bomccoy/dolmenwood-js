"use client";

import { useEffect, useRef, useState } from "react";
import CharacterIdentity from "@/components/CharacterIdentity";
import AbilityScores from "@/components/AbilityScores";
import SpellSlots from "@/components/SpellSlots";
import InventoryList from "@/components/InventoryList";
import ThemeToggle from "@/components/ThemeToggle";
import SavingThrows from "@/components/SavingThrows";
import KindredTraits from "@/components/KindredTraits";
import ClassAbilities from "@/components/ClassAbilities";
import { loadCharacter, saveCharacter, exportJson, importJson } from "@/lib/storage";
import type { Character } from "@/types/character";

const DEFAULT_CHARACTER: Character = {
  name: "",
  level: 1,
  kindred: "",
  class: "",
  baseStats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  inventory: [],
  currentHp: 0,
  maxHp: 0,
};

export default function Home() {
  const [character, setCharacter] = useState<Character>(DEFAULT_CHARACTER);
  const [importError, setImportError] = useState<string | null>(null);
  const hydrated = useRef(false);

  useEffect(() => {
    const saved = loadCharacter();
    if (saved) setCharacter({ ...saved, currentHp: saved.currentHp ?? 0, maxHp: saved.maxHp ?? 0 });
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    saveCharacter(character);
  }, [character]);

  function update(updates: Partial<Character>) {
    setCharacter((prev) => ({ ...prev, ...updates }));
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const imported = await importJson(file);
      setCharacter(imported);
      setImportError(null);
    } catch {
      setImportError("Failed to import: invalid JSON file.");
    }
    e.target.value = "";
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold dark:text-white">Dolmenwood Character Sheet</h1>
        <div className="flex gap-2 items-center text-sm">
          <ThemeToggle />
          <button
            onClick={() => exportJson(character)}
            className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Export JSON
          </button>
          <label className="px-3 py-1.5 border dark:border-gray-600 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200">
            Import JSON
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>
          {importError && <span className="text-red-600 dark:text-red-400">{importError}</span>}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4">
          <AbilityScores
            baseStats={character.baseStats}
            onChange={(baseStats) => update({ baseStats })}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4">
          <CharacterIdentity character={character} onChange={update} />
        </div>

        {character.class && (
          <div className="md:col-span-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4">
            <SavingThrows className={character.class} level={character.level} />
          </div>
        )}

        {character.kindred && (
          <div className={`bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4 ${character.class ? "" : "md:col-span-2"}`}>
            <KindredTraits kindred={character.kindred} />
          </div>
        )}

        {character.class && (
          <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4">
            <ClassAbilities className={character.class} />
          </div>
        )}

        {character.class && (
          <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4">
            <SpellSlots className={character.class} level={character.level} />
          </div>
        )}

        <div className={`bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4 ${character.class ? "" : "md:col-span-2"}`}>
          <InventoryList
            items={character.inventory}
            onChange={(inventory) => update({ inventory })}
          />
        </div>
      </main>
    </div>
  );
}
