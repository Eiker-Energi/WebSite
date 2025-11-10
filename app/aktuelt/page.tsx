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

export default function AktueltPage() {
  return (
    <div className="space-y-12">
      <header className="rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10">
        <h1 className="text-4xl font-semibold text-teal-900">Aktuelt</h1>
        <p className="mt-4 max-w-3xl text-base text-text-900/80">
          Hold deg oppdatert på nyheter, prosjekter og strømpriser. Vi deler tips for smartere energibruk og historier fra lokalsamfunnet.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-teal-900">{article.title}</h2>
            <p className="mt-3 text-sm text-text-900/80">{article.description}</p>
            <a href="#" className="mt-4 inline-flex text-sm font-semibold text-teal-900 hover:underline">
              Les mer
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
