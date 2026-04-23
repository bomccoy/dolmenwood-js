import { CLASSES } from "@/data/classes";

interface Props {
  className: string;
}

export default function ClassAbilities({ className }: Props) {
  const selected = CLASSES.find((c) => c.name === className);

  if (!selected) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Class Abilities</h2>
      <ul className="space-y-1 list-disc pl-4 text-sm dark:text-gray-200">
        {selected.abilities.map((a) => (
          <li key={a.name}>
            <span className="font-bold">{a.name}:</span> {a.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
