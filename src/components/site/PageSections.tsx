import { ArrowUpRight, FileText, Download, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export interface InfoCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  meta?: string;
}

export function InfoCardGrid({ title, subtitle, cards }: { title: string; subtitle?: string; cards: InfoCard[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <Reveal className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Ключевая информация</div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title: t, desc, meta }, i) => (
          <Reveal key={t} delay={i * 80}>
            <article className="group relative h-full overflow-hidden rounded-2xl bg-card p-6 shadow-card ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-primary/30">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-150 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                {meta && (
                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    <span className="font-medium text-foreground/80">{meta}</span>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export interface ActionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: string;
}

export function ActionsBlock({ title, actions }: { title: string; actions: ActionItem[] }) {
  return (
    <section className="bg-surface/60 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Полезные действия</div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {actions.map(({ icon: Icon, title: t, desc, cta }, i) => (
            <Reveal key={t} delay={i * 80}>
              <a
                href="#"
                className="group flex h-full items-start gap-5 rounded-2xl bg-card p-6 shadow-card ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift hover:ring-primary/30"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-lift transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface DocLink {
  title: string;
  meta: string;
  href?: string;
}

export function DocumentsBlock({ title, docs }: { title: string; docs: DocLink[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <Reveal className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Документы и ссылки</div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      </Reveal>

      <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border">
        {docs.map((d, i) => (
          <Reveal key={d.title} delay={i * 50}>
            <a
              href={d.href ?? "#"}
              className="group flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-accent"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="truncate font-medium text-foreground">{d.title}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{d.meta}</div>
              </div>
              <Download className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
