import { routes } from "@/lib/routes";

export const metadata = {
  title: "Om konsernet",
  description: "Les mer om Eiker Energi konsernet, vårt samfunnsansvar og satsing på fornybar energi.",
};

const highlights = [
  {
    title: "Lokal forankring",
    description: "Eierstruktur med sterke røtter i lokalsamfunnet og fokus på bærekraft.",
  },
  {
    title: "Fornybar satsing",
    description: "Investeringer i vannkraft, solkraft og nye energitjenester for næringslivet.",
  },
  {
    title: "Arbeidsglede",
    description: "Vi prioriterer utvikling av ansatte og attraktive arbeidsplasser i regionen.",
  },
];

export default function OmKonsernetPage() {
  return (
    <div className="space-y-12">
      <header className="rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10">
        <h1 className="text-4xl font-semibold text-teal-900">Om konsernet</h1>
        <p className="mt-4 max-w-3xl text-base text-text-900/80">
          Eiker Energi er mer enn strøm. Vi er en lokal samfunnsaktør med fokus på fremtidsrettede energiløsninger, fiberutbygging og samarbeid med næringslivet.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-teal-900">{item.title}</h2>
            <p className="mt-3 text-sm text-text-900/80">{item.description}</p>
          </article>
        ))}
      </section>
      <section className="rounded-3xl bg-sand-100 px-6 py-10 shadow-soft sm:px-10">
        <h2 className="text-2xl font-semibold text-teal-900">Bli bedre kjent</h2>
        <p className="mt-3 text-sm text-text-900/80">
          Vi deler historier fra lokalsamfunnet og innsikt om energi i Aktuelt-seksjonen vår.
        </p>
        <a href={routes.aktuelt} className="mt-4 inline-flex text-sm font-semibold text-teal-900 hover:underline">
          Les aktuelt
        </a>
      </section>
    </div>
  );
}
