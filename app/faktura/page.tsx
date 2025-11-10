export const metadata = {
  title: "Én faktura",
  description: "Snart kan du samle alt på én faktura fra Eiker Energi.",
};

export default function FakturaPage() {
  return (
    <div className="rounded-3xl bg-white px-6 py-12 text-center shadow-soft sm:px-10">
      <h1 className="text-4xl font-semibold text-teal-900">Én faktura</h1>
      <p className="mt-4 text-base text-text-900/80">
        Vi jobber med en ny løsning som samler strøm, fiber og tjenester på én faktura. Kom tilbake snart!
      </p>
    </div>
  );
}
