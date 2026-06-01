import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { InfoCardGrid, ActionsBlock, DocumentsBlock } from "@/components/site/PageSections";
import {
  Building2, Users, Target, Scale, FileSignature, Mail, Phone, BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О ведомстве — Кыргызстандарт" },
      { name: "description", content: "О Национальном органе по стандартизации, метрологии и оценке соответствия Кыргызской Республики: миссия, структура, руководство." },
      { property: "og:title", content: "О ведомстве — Кыргызстандарт" },
      { property: "og:description", content: "Миссия, структура и руководство Кыргызстандарта." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="О ведомстве"
          icon={Building2}
          title="Национальный орган стандартизации и метрологии"
          description="Кыргызстандарт — государственный орган, обеспечивающий единство измерений, качество продукции и доверие к национальной системе оценки соответствия."
          crumbs={[{ label: "О ведомстве" }]}
        />

        <InfoCardGrid
          title="Кто мы и чем занимаемся"
          subtitle="Шесть направлений деятельности, объединённых единой государственной миссией."
          cards={[
            { icon: Target, title: "Миссия", desc: "Формирование доверия к качеству товаров, работ и услуг в Кыргызской Республике.", meta: "С 1992 года" },
            { icon: Scale, title: "Полномочия", desc: "Государственное регулирование в области стандартизации, метрологии и аккредитации.", meta: "Закон КР №35" },
            { icon: Users, title: "Команда", desc: "Более 480 специалистов, инженеров и экспертов по всей республике.", meta: "7 областей" },
            { icon: Building2, title: "Структура", desc: "Центральный аппарат, территориальные подразделения и аккредитованные центры.", meta: "26 подразделений" },
            { icon: BookOpen, title: "История", desc: "Более 30 лет развития национальной инфраструктуры качества.", meta: "Основан в 1992" },
            { icon: FileSignature, title: "Международное сотрудничество", desc: "Член ISO, IEC, COOMET, представительство в ВТО ТБТ.", meta: "12 соглашений" },
          ]}
        />

        <ActionsBlock
          title="Полезные действия"
          actions={[
            { icon: Mail, title: "Написать обращение", desc: "Электронная форма официального запроса в ведомство.", cta: "Подать обращение" },
            { icon: Phone, title: "Контакты руководства", desc: "Приёмная председателя, заместители и пресс-служба.", cta: "Посмотреть контакты" },
            { icon: Users, title: "Вакансии", desc: "Открытые позиции в государственной службе качества.", cta: "Карьера" },
            { icon: FileSignature, title: "Антикоррупционная политика", desc: "Заявить о нарушении или ознакомиться с регламентом.", cta: "Подробнее" },
          ]}
        />

        <DocumentsBlock
          title="Учредительные документы"
          docs={[
            { title: "Положение о Кыргызстандарте", meta: "PDF · 412 КБ · ред. 2025" },
            { title: "Стратегия развития на 2025–2030 годы", meta: "PDF · 1.8 МБ" },
            { title: "Годовой отчёт за 2024 год", meta: "PDF · 3.2 МБ" },
            { title: "Структура центрального аппарата", meta: "PDF · 240 КБ" },
            { title: "Кодекс этики государственного служащего", meta: "PDF · 180 КБ" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
