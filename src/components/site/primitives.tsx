import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const cta = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        ember: "bg-ember text-ember-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        outline: "border border-border bg-card text-foreground hover:border-sky hover:text-sky",
        ghost: "text-foreground hover:text-sky px-0",
      },
      size: { sm: "px-4 py-2 text-xs", md: "" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
export type CtaVariant = VariantProps<typeof cta>;

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function Heading({ eyebrow, title, sub, center }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <div className={cn("mb-12 max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Flow({ steps, className }: { steps: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2 md:gap-3", className)}>
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2 md:gap-3">
          <span className="rounded-full border border-border bg-card px-4 py-2 font-display text-xs font-semibold tracking-widest text-foreground shadow-soft md:text-sm">
            {s}
          </span>
          {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-ember" />}
        </div>
      ))}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub, img, children }: { eyebrow: string; title: ReactNode; sub: ReactNode; img: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero pt-32 pb-20 md:pt-40">
      <div className="absolute inset-0 circuit-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{sub}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-accent opacity-15 blur-2xl" />
          <img src={img} alt="" width={1024} height={1024} className="relative aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-lift" />
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, sub, primary, primaryTo = "/contact" }: { title: string; sub: string; primary: string; primaryTo?: "/contact" }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-16">
        <div className="absolute inset-0 circuit-grid opacity-40" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember opacity-30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 opacity-80">{sub}</p>
          </div>
          <Link to={primaryTo} className={cta({ variant: "ember" })}>
            {primary} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function ImgCard({ img, title, children, tag }: { img: string; title: string; children?: ReactNode; tag?: string }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={img} alt={title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        {tag && <p className="eyebrow mb-2">{tag}</p>}
        <h3 className="text-xl font-semibold">{title}</h3>
        {children}
      </div>
    </article>
  );
}
