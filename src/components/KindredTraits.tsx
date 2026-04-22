import { KINDREDS } from "@/data/kindreds";

interface Props {
  kindred: string;
}

export default function KindredTraits({ kindred }: Props) {
  const selected = KINDREDS.find((k) => k.name === kindred);

  if (!selected) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Kindred Traits</h2>
      <ul className="space-y-1 list-disc pl-4 text-sm dark:text-gray-200">
        {selected.traits.map((t) => (
          <li key={t.name}>
            <span className="font-bold">{t.name}:</span> {t.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
