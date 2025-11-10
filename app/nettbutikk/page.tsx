import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Nettbutikk",
  description: "Utforsk smarte produkter til hjemmet i nettbutikken til Eiker Energi.",
};

const products = [
  {
    name: "Ladeboks hjemme",
    description: "Smart lading med støtte for timespris og full kontroll i appen.",
  },
  {
    name: "Smarthuspakke",
    description: "Styr varme, lys og forbruk fra én app – alltid oppdatert.",
  },
  {
    name: "Solcellepakke",
    description: "Produser din egen strøm og få støtte fra Enova.",
  },
];

export default function NettbutikkPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: "Hjem", href: routes.home }, { label: "Nettbutikk" }]} />
      <header className="rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10">
        <h1 className="text-4xl font-semibold text-teal-900">Nettbutikk</h1>
        <p className="mt-4 max-w-2xl text-base text-text-900/80">
          Oppgrader hjemmet med smarte produkter fra Eiker Energi. Finn løsninger for lading, energistyring og sikkerhet – alt samlet på én faktura.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-teal-900">{product.name}</h2>
            <p className="mt-3 text-sm text-text-900/80">{product.description}</p>
            <a
              className="mt-4 inline-flex items-center text-sm font-semibold text-teal-900 hover:underline"
              href="https://www.eikerenergi.no"
              rel="noreferrer"
            >
              Se produkt
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
