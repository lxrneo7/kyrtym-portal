import { ArrowUpRight, Calendar } from "lucide-react";
import n1 from "@/assets/news-1.jpg";
import n2 from "@/assets/news-2.jpg";
import n3 from "@/assets/news-3.jpg";

const news = [
  { img: n1, tag: "Метрология", date: "28 мая 2026", title: "Открыта новая лаборатория поверки в Оше" },
  { img: n2, tag: "Сотрудничество", date: "24 мая 2026", title: "Подписан меморандум с ISO о развитии стандартов" },
  { img: n3, tag: "Сертификация", date: "19 мая 2026", title: "Запущена цифровая платформа выдачи сертификатов" },
];

export function News() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Новости</div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Актуальные события ведомства
          </h2>
        </div>
        <a href="#" className="hidden items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex">
          Все новости <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {news.map((n) => (
          <article
            key={n.title}
            className="group overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={n.img}
                alt=""
                width={800}
                height={512}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4">
                <span className="rounded-full glass px-3 py-1 text-xs font-semibold text-foreground">
                  {n.tag}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {n.date}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                {n.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Читать <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
