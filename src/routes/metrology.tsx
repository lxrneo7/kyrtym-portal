import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { InfoCardGrid, ActionsBlock, DocumentsBlock } from "@/components/site/PageSections";
import {
  Ruler, Gauge, Thermometer, Atom, Weight, Clock, Zap, Send, Search, Calendar, FileSignature,
} from "lucide-react";

export const Route = createFileRoute("/metrology")({
  head: () => ({
    meta: [
      { title: "Метрология — Кыргызстандарт" },
      { name: "description", content: "Государственная служба метрологии: эталоны, поверка и калибровка средств измерений в Кыргызской Республике." },
      { property: "og:title", content: "Метрология — Кыргызстандарт" },
      { property: "og:description", content: "Единство измерений и национальные эталоны." },
    ],
  }),
  component: MetrologyPage,
});

function MetrologyPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Метрология"
          icon={Ruler}
          title="Единство измерений на национальном уровне"
          description="Хранение и воспроизведение государственных эталонов, поверка и калибровка средств измерений, метрологический надзор."
          crumbs={[{ label: "Метрология" }]}
        />

        <InfoCardGrid
          title="Области измерений"
          subtitle="Семь ключевых видов измерений, обеспечиваемых национальной системой."
          cards={[
            { icon: Weight, title: "Масса и сила", desc: "Эталоны массы класса E1, весоизмерительная техника.", meta: "Эталон I разряда" },
            { icon: Thermometer, title: "Температура", desc: "Поверка термометров, термопар и теплосчётчиков.", meta: "−196…+1100 °C" },
            { icon: Gauge, title: "Давление и расход", desc: "Манометры, расходомеры, счётчики жидкости и газа.", meta: "ГОСТ Р 8.586" },
            { icon: Zap, title: "Электрические измерения", desc: "Поверка счётчиков электроэнергии и приборов учёта.", meta: "Класс 0.2" },
            { icon: Clock, title: "Время и частота", desc: "Эталон времени и синхронизация с UTC.", meta: "1×10⁻¹³" },
            { icon: Atom, title: "Физико-химия", desc: "pH-метры, газоанализаторы, влагомеры.", meta: "8 920 операций" },
          ]}
        />

        <ActionsBlock
          title="Сервисы для бизнеса и граждан"
          actions={[
            { icon: Send, title: "Заявка на поверку", desc: "Подать заявление на поверку средств измерений.", cta: "Подать" },
            { icon: Search, title: "Проверить свидетельство", desc: "Реестр действующих свидетельств о поверке.", cta: "Проверить" },
            { icon: Calendar, title: "График поверки", desc: "Запланировать выезд метролога на предприятие.", cta: "Расписание" },
            { icon: FileSignature, title: "Утверждение типа СИ", desc: "Внесение нового средства измерений в реестр.", cta: "Подробнее" },
          ]}
        />

        <DocumentsBlock
          title="Нормативная база"
          docs={[
            { title: "Закон КР «Об обеспечении единства измерений»", meta: "PDF · 320 КБ" },
            { title: "Перечень СИ, подлежащих поверке", meta: "PDF · 540 КБ" },
            { title: "Межповерочные интервалы", meta: "PDF · 280 КБ" },
            { title: "Тарифы на метрологические услуги 2026", meta: "PDF · 220 КБ" },
            { title: "Государственный реестр эталонов", meta: "PDF · 1.1 МБ" },
            { title: "Форма заявки на калибровку", meta: "DOCX · 90 КБ" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
