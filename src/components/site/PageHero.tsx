import { Link } from "@tanstack/react-router";
import { ChevronRight, Home, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: LucideIcon;
  crumbs: { label: string; to?: string }[];
}

export function PageHero({ title, description, eyebrow, icon: Icon, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 pattern-grid opacity-60" />
      <div className="absolute -top-32 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 lg:pb-20 lg:pt-14">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="inline-flex items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-accent hover:text-primary">
                <Home className="h-3.5 w-3.5" />
                Главная
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                {c.to ? (
                  <Link to={c.to} className="rounded-md px-2 py-1 hover:bg-accent hover:text-primary">{c.label}</Link>
                ) : (
                  <span className="rounded-md px-2 py-1 font-medium text-foreground" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal className="mt-8 max-w-4xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
              {Icon && <Icon className="h-3.5 w-3.5" />}
              {eyebrow}
            </div>
          )}
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
