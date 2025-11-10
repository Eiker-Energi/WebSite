import Link from "next/link";

const footerColumns = [
  {
    title: "Kontakt",
    links: [
      { label: "32 25 14 00", href: "tel:+4732251400" },
      { label: "kundeservice@eikerenergi.no", href: "mailto:kundeservice@eikerenergi.no" },
      { label: "Stasjonsgata 1, 3300 Hokksund", href: "https://maps.google.com/?q=Stasjonsgata+1+Hokksund" },
      { label: "Org.nr. 912 349 035", href: "https://w2.brreg.no/" },
    ],
  },
  {
    title: "Strømavtaler",
    links: [
      { label: "Bestill strømavtale", href: "/strøm/bestill/" },
      { label: "Prisliste", href: "/strøm/" },
      { label: "Dagens strømpris", href: "/strøm/" },
      { label: "Angrerett og vilkår", href: "/kundeservice/" },
    ],
  },
  {
    title: "Strøm og faktura",
    links: [
      { label: "Min Side", href: "/min-side/" },
      { label: "Appen", href: "/min-side/" },
      { label: "Flyttemelding", href: "/kundeservice/" },
      { label: "Nettbutikk", href: "/nettbutikk/" },
    ],
  },
  {
    title: "Aktuelt",
    links: [
      { label: "Siste nytt", href: "/aktuelt/" },
      { label: "Om oss", href: "/om-konsernet/" },
      { label: "Ledig stilling", href: "/aktuelt/" },
      { label: "Vannstand", href: "/aktuelt/" },
    ],
  },
];

const bottomLinks = [
  { label: "Personvern", href: "/personvern" },
  { label: "Åpenhetsloven", href: "/aapenhetsloven" },
  { label: "Utviklet av NYG", href: "https://nyg.no" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-teal-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-lg font-semibold text-white/90">{column.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition hover:text-white"
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-sm text-white/70 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Eiker Energi</p>
          <nav aria-label="Bunnlenker" className="flex flex-wrap items-center gap-4">
            {bottomLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
