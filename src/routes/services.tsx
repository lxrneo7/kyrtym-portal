import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { InfoCardGrid, ActionsBlock, DocumentsBlock } from "@/components/site/PageSections";
import {
  LayoutGrid, FileSignature, Search, Send, CreditCard, Bell, Award, Ruler, BookOpen, BadgeCheck, Database, FileCheck2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги — Кыргызстандарт" },
      { name: "description", content: "Государственные услуги Кыргызстандарта: сертификация, поверка, аккредитация, регистрация и онлайн-сервисы." },
      { property: "og:title", content: "Услуги — Кыргызстандарт" },
      { property: "og:description", content: "Все услуги ведомства в одном окне." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Услуги"
          icon={LayoutGrid}
          title="Государственные услуги в одном окне"
          description="Подача заявлений, оплата пошлин и получение результатов — полностью онлайн, через единый портал Кыргызстандарта."
          crumbs={[{ label: "Услуги" }]}
        />

        <InfoCardGrid
          title="Каталог услуг"
          subtitle="Шесть ключевых направлений, доступных гражданам и бизнесу."
          cards={[
            { icon: Award, title: "Сертификация продукции", desc: "Обязательная и добровольная сертификация товаров и услуг.", meta: "Срок: от 5 дней" },
            { icon: Ruler, title: "Поверка средств измерений", desc: "Государственная метрологическая поверка приборов и эталонов.", meta: "Срок: от 3 дней" },
            { icon: BookOpen, title: "Продажа стандартов", desc: "Официальные копии национальных и международных стандартов.", meta: "32 150 документов" },
            { icon: BadgeCheck, title: "Аккредитация", desc: "Признание компетентности испытательных лабораторий.", meta: "Срок: до 90 дней" },
            { icon: Database, title: "Государственная регистрация", desc: "Внесение продукции в национальные реестры.", meta: "Электронно" },
            { icon: FileCheck2, title: "Экспертиза документов", desc: "Анализ технических условий и сертификационных досье.", meta: "По запросу" },
          ]}
        />

        <ActionsBlock
          title="Быстрые действия"
          actions={[
            { icon: Send, title: "Подать заявку онлайн", desc: "Единый кабинет для всех услуг с электронной подписью.", cta: "В кабинет" },
            { icon: Search, title: "Проверить статус заявки", desc: "Отследите движение документов по номеру заявления.", cta: "Проверить" },
            { icon: CreditCard, title: "Оплатить государственную пошлину", desc: "Электронная оплата через банковские карты и QR.", cta: "Оплатить" },
            { icon: Bell, title: "Подписаться на уведомления", desc: "SMS и e-mail уведомления о статусе заявки.", cta: "Подписаться" },
          ]}
        />

        <DocumentsBlock
          title="Регламенты и формы"
          docs={[
            { title: "Перечень государственных услуг", meta: "PDF · 320 КБ" },
            { title: "Тарифы и государственные пошлины 2026", meta: "PDF · 280 КБ" },
            { title: "Форма заявления на сертификацию", meta: "DOCX · 90 КБ" },
            { title: "Регламент оказания услуг", meta: "PDF · 540 КБ" },
            { title: "Реестр МФЦ и точек приёма", meta: "PDF · 210 КБ" },
            { title: "Образец доверенности", meta: "DOCX · 65 КБ" },
            { title: "Памятка заявителю", meta: "PDF · 180 КБ" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
