import { CLASSES } from "@/data/classes";

interface Props {
  className: string;
  level: number;
}

const SAVES = [
  { key: "doom",  label: "Doom" },
  { key: "ray",   label: "Ray" },
  { key: "hold",  label: "Hold" },
  { key: "blast", label: "Blast" },
  { key: "spell", label: "Spell" },
] as const;

export default function SavingThrows({ className, level }: Props) {
  const cls = CLASSES.find((c) => c.name === className);
  const row = cls?.advancement[level - 1];

  if (!cls || !row) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Saving Throws</h2>
      <div className="flex gap-4 justify-around">
        {SAVES.map(({ key, label }) => (
          <div key={key} className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {label}
            </span>
            <span className="text-2xl font-bold dark:text-white">{row.saves[key]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
