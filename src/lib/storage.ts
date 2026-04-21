import type { Character } from "@/types/character";

const STORAGE_KEY = "dolmenwood_character";

export function loadCharacter(): Character | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Character) : null;
  } catch {
    return null;
  }
}

export function saveCharacter(character: Character): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
}

export function exportJson(character: Character): void {
  const blob = new Blob([JSON.stringify(character, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${character.name || "character"}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function importJson(file: File): Promise<Character> {
  const text = await file.text();
  return JSON.parse(text) as Character;
}
