import Link from "next/link";

interface CTAButtonsProps {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTAButtons({ primary, secondary }: CTAButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link href={primary.href} className="btn-primary text-center">
        {primary.label}
      </Link>
      {secondary ? (
        <Link href={secondary.href} className="btn-secondary text-center">
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
