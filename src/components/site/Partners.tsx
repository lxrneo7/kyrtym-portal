const partners = [
  "ISO", "IEC", "WTO", "EAEU", "UNIDO", "CODEX", "OIML", "ILAC", "IAF", "CEN", "ASTM", "BIPM",
];

export function Partners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Партнёры</div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Международное сотрудничество
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Кыргызстандарт сотрудничает с ведущими международными организациями.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max marquee gap-4">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="grid h-24 w-48 shrink-0 place-items-center rounded-2xl bg-card ring-1 ring-border"
            >
              <div className="font-display text-2xl font-bold tracking-tight text-foreground/70">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
