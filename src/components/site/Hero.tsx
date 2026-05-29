import { Search, FileCheck2, ShieldCheck, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const quickFilters = [
  "Сертификаты",
  "ГОСТ Р",
  "Метрология",
  "Аккредитация",
  "Реестры",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 pattern-grid opacity-60" />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.18] mix-blend-multiply dark:opacity-[0.12]"
      />
      <div className="absolute -top-32 -right-32 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Официальный портал государственных услуг
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Кыргыз<span className="text-primary">стандарт</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Национальный орган по стандартизации, метрологии и оценке соответствия Кыргызской Республики
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="group relative rounded-2xl bg-card p-2 shadow-glow ring-1 ring-border transition-all focus-within:ring-2 focus-within:ring-primary">
              <div className="flex items-center gap-2">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="search"
                  placeholder="Поиск стандартов, сертификатов и услуг…"
                  className="flex-1 bg-transparent px-2 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                  aria-label="Поиск"
                />
                <button className="hidden h-12 items-center gap-2 rounded-xl gradient-primary px-6 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02] sm:inline-flex">
                  Найти
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-muted-foreground">Популярное:</span>
              {quickFilters.map((f) => (
                <button
                  key={f}
                  className="rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground/70 ring-1 ring-border transition-colors hover:bg-accent hover:text-primary"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Trust strip */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "ISO 9001", s: "Сертифицировано" },
              { icon: FileCheck2, t: "Госуслуги", s: "Электронно" },
              { icon: Sparkles, t: "24/7", s: "Доступность" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-left">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t}</div>
                  <div className="text-[11px] text-muted-foreground">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
