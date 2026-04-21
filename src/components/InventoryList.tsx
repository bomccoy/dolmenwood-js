"use client";

import { useState } from "react";
import type { InventoryItem } from "@/types/character";

interface Props {
  items: InventoryItem[];
  onChange: (items: InventoryItem[]) => void;
}

export default function InventoryList({ items, onChange }: Props) {
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState(1);
  const [newNotes, setNewNotes] = useState("");

  function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    const item: InventoryItem = {
      id: crypto.randomUUID(),
      name: newName.trim(),
      quantity: newQty,
      notes: newNotes.trim(),
    };
    onChange([...items, item]);
    setNewName("");
    setNewQty(1);
    setNewNotes("");
  }

  function updateItem(id: string, updates: Partial<InventoryItem>) {
    onChange(items.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  }

  function removeItem(id: string) {
    onChange(items.filter((item) => item.id !== id));
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-1 dark:text-white">Inventory</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{items.length} item{items.length !== 1 ? "s" : ""}</p>

      {items.length > 0 && (
        <div className="space-y-2 mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-2 items-start border dark:border-gray-600 rounded p-2 text-sm">
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(item.id, { name: e.target.value })}
                className="flex-1 border dark:border-gray-600 rounded px-1 py-0.5 dark:bg-gray-700 dark:text-white"
                placeholder="Name"
              />
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => updateItem(item.id, { quantity: parseInt(e.target.value, 10) || 1 })}
                className="w-14 border dark:border-gray-600 rounded px-1 py-0.5 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                value={item.notes}
                onChange={(e) => updateItem(item.id, { notes: e.target.value })}
                className="flex-1 border dark:border-gray-600 rounded px-1 py-0.5 dark:bg-gray-700 dark:text-white"
                placeholder="Notes"
              />
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 px-1"
                aria-label="Remove item"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={addItem} className="flex gap-2 items-end text-sm">
        <div className="flex-1">
          <label className="block text-xs font-medium mb-1 dark:text-gray-300">Name *</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
            className="w-full border dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
            placeholder="Item name"
          />
        </div>
        <div className="w-16">
          <label className="block text-xs font-medium mb-1 dark:text-gray-300">Qty</label>
          <input
            type="number"
            min={1}
            value={newQty}
            onChange={(e) => setNewQty(parseInt(e.target.value, 10) || 1)}
            className="w-full border dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium mb-1 dark:text-gray-300">Notes</label>
          <input
            type="text"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            className="w-full border dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
            placeholder="Optional"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </section>
  );
}
