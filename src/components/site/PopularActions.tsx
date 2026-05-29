import { CheckCircle2, Search, Download, FileEdit, BookMarked, ArrowRight } from "lucide-react";

const actions = [
  { icon: CheckCircle2, title: "Проверить сертификат", desc: "По номеру или QR-коду" },
  { icon: Search, title: "Найти стандарт", desc: "База ГОСТ и СТ КР" },
  { icon: Download, title: "Скачать документы", desc: "Формы и шаблоны" },
  { icon: FileEdit, title: "Подать заявку", desc: "Онлайн форма" },
  { icon: BookMarked, title: "Просмотр реестра", desc: "Открытые данные" },
];

export function PopularActions() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Часто используется</div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Популярные действия
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {actions.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#"
              className="group flex items-start gap-4 rounded-2xl bg-card p-5 ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lift"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-bold leading-snug">{title}</div>
                <div className="mt-1 text-xs text-muted-foreground group-hover:text-primary-foreground/80">{desc}</div>
                <ArrowRight className="mt-3 h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
