import { motion } from "framer-motion";

import { CTAButtons } from "./CTAButtons";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function Hero({ title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-900/90 to-text-900 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(89,193,181,0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(250,243,224,0.25), transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-2xl">
        <motion.h1
          className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-white/85"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <CTAButtons primary={primaryCta} secondary={secondaryCta} />
        </motion.div>
      </div>
    </section>
  );
}
