import {
  Award,
  BookOpen,
  Ruler,
  BadgeCheck,
  Database,
  FileSignature,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Award, title: "Сертификация", desc: "Подтверждение соответствия продукции и услуг", count: "12 480 заявок" },
  { icon: BookOpen, title: "Стандарты", desc: "Национальная база технических норм", count: "32 150 документов" },
  { icon: Ruler, title: "Метрология", desc: "Поверка средств измерений", count: "8 920 операций" },
  { icon: BadgeCheck, title: "Аккредитация", desc: "Признание компетентности лабораторий", count: "412 организаций" },
  { icon: Database, title: "Гос. реестры", desc: "Открытые государственные реестры", count: "6 активных" },
  { icon: FileSignature, title: "Онлайн заявки", desc: "Подача через единый кабинет", count: "Электронно" },
];

export function QuickServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Быстрый доступ</div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Государственные услуги в одном окне
          </h2>
          <p className="mt-3 text-muted-foreground">
            Шесть ключевых направлений — без очередей и бумажной волокиты.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          Все услуги <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc, count }) => (
          <a
            key={title}
            href="#"
            className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lift hover:ring-primary/30"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:scale-150 group-hover:bg-primary/10" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="font-medium text-foreground/80">{count}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
