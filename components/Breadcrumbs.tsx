import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Brødsmulesti" className="text-sm text-text-900/70">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link href={item.href} className="font-semibold text-teal-900 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-text-900/70">{item.label}</span>
              )}
              {!isLast ? <span aria-hidden className="text-text-900/40">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
