const stats = [
  { value: "32 150", label: "Действующих стандартов", sub: "+412 в этом году" },
  { value: "128 940", label: "Выданных сертификатов", sub: "За всё время" },
  { value: "412", label: "Аккредитованных лабораторий", sub: "По всей республике" },
  { value: "98.7%", label: "Удовлетворённость услугами", sub: "Опрос 2025 года" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background dark:bg-card dark:text-foreground">
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Цифры доверия
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Прозрачность и масштаб государственной системы
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-foreground p-6 dark:bg-card sm:p-8">
              <div className="font-display text-4xl font-bold tracking-tight text-background dark:text-foreground sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-medium text-background/80 dark:text-foreground/80">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-background/50 dark:text-muted-foreground">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
