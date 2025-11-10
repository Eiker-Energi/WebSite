export const metadata = {
  title: "Aktuelt",
  description: "Siste nytt, tips og historier fra Eiker Energi.",
};

const articles = [
  {
    title: "Norgespris forklares",
    description: "Alt du trenger å vite om Norgespris – hvordan vi kjøper strøm, og hvorfor du sparer.",
  },
  {
    title: "Slik sparer du med smarthus",
    description: "Smarthustips for å redusere forbruket gjennom hele året.",
  },
  {
    title: "Fiberutbygging i Eiker",
    description: "Vi bygger ut fiber i nabolaget ditt – se hvor vi er i gang nå.",
  },
];

import Link from "next/link";

export default function AktueltPage() {
  return (
    <div className="space-y-12">
      {/* ... */}
      <section className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-teal-900">{article.title}</h2>
            <p className="mt-3 text-sm text-text-900/80">{article.description}</p>
            <Link href="/aktuelt" className="mt-4 inline-flex text-sm font-semibold text-teal-900 hover:underline">
              Les mer
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
