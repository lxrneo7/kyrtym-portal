import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from "lucide-react";

const cols = [
  {
    title: "Услуги",
    links: ["Сертификация", "Стандарты", "Метрология", "Аккредитация", "Реестры"],
  },
  {
    title: "Информация",
    links: ["О ведомстве", "Руководство", "Структура", "Документы", "Закупки"],
  },
  {
    title: "Открытые данные",
    links: ["Бюджет", "Отчёты", "Статистика", "Вакансии", "API"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background dark:bg-card dark:text-foreground">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + contacts */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary font-display text-lg font-bold text-primary-foreground">
                КС
              </div>
              <div>
                <div className="font-display text-base font-bold">Кыргызстандарт</div>
                <div className="text-xs text-background/60 dark:text-muted-foreground">National Authority</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/70 dark:text-muted-foreground">
              Национальный орган по стандартизации, метрологии и оценке соответствия Кыргызской Республики.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              {[
                { icon: MapPin, t: "г. Бишкек, ул. Панфилова 197" },
                { icon: Phone, t: "+996 (312) 62-68-72" },
                { icon: Mail, t: "info@nism.gov.kg" },
                { icon: Clock, t: "Пн–Пт, 09:00–18:00" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-3 text-background/80 dark:text-foreground/80">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                    <Icon className="h-4 w-4 text-secondary" />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-display text-sm font-bold text-background dark:text-foreground">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-background/70 transition-colors hover:text-secondary dark:text-muted-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="font-display text-sm font-bold">Мы на карте</div>
            <div className="relative mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <iframe
                title="Карта"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.58%2C42.85%2C74.62%2C42.88&layer=mapnik&marker=42.8746%2C74.6122"
                className="h-44 w-full grayscale-[40%]"
                loading="lazy"
              />
            </div>
            <div className="mt-5">
              <div className="text-xs text-background/60 dark:text-muted-foreground">Подписка на новости</div>
              <form className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="min-w-0 flex-1 rounded-lg bg-white/10 px-3 py-2.5 text-sm text-background placeholder:text-background/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="grid h-10 w-10 place-items-center rounded-lg gradient-gold text-secondary-foreground" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="text-xs text-background/60 dark:text-muted-foreground">
            © 2026 Кыргызстандарт. Все права защищены.
          </div>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-background transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
