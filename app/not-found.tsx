import Link from "next/link";

import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center rounded-3xl bg-white px-6 py-16 text-center shadow-soft">
      <h1 className="text-5xl font-semibold text-teal-900">404</h1>
      <p className="mt-4 text-base text-text-900/80">
        Vi fant ikke siden du lette etter. Kanskje du ville se strømavtalene eller gå tilbake til forsiden?
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={routes.home}
          className="btn-primary text-center"
        >
          Gå til forsiden
        </Link>
        <Link href={routes.strom} className="btn-secondary text-center">
          Utforsk strømavtaler
        </Link>
      </div>
    </div>
  );
}
