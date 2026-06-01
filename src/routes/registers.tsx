import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { InfoCardGrid, ActionsBlock, DocumentsBlock } from "@/components/site/PageSections";
import {
  Database, BookOpen, Award, Ruler, BadgeCheck, FileCheck2, Building2, Search, Download, Code2, Bell,
} from "lucide-react";

export const Route = createFileRoute("/registers")({
  head: () => ({
    meta: [
      { title: "Реестры — Кыргызстандарт" },
      { name: "description", content: "Открытые государственные реестры Кыргызстандарта: стандарты, сертификаты, средства измерений, аккредитованные организации." },
      { property: "og:title", content: "Реестры — Кыргызстандарт" },
      { property: "og:description", content: "Прозрачные открытые данные ведомства." },
    ],
  }),
  component: RegistersPage,
});

function RegistersPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Реестры"
          icon={Database}
          title="Открытые государственные реестры"
          description="Прозрачные данные о стандартах, сертификатах, средствах измерений и аккредитованных организациях — в открытом доступе и через API."
          crumbs={[{ label: "Реестры" }]}
        />

        <InfoCardGrid
          title="Доступные реестры"
          subtitle="Шесть открытых баз данных с ежедневным обновлением."
          cards={[
            { icon: BookOpen, title: "Реестр стандартов", desc: "Все действующие национальные и принятые международные стандарты.", meta: "32 150 записей" },
            { icon: Award, title: "Реестр сертификатов", desc: "Выданные сертификаты соответствия и декларации.", meta: "128 940 записей" },
            { icon: Ruler, title: "Реестр средств измерений", desc: "Утверждённые типы СИ и свидетельства о поверке.", meta: "18 420 записей" },
            { icon: BadgeCheck, title: "Реестр аккредитации", desc: "Аккредитованные лаборатории и органы по сертификации.", meta: "412 организаций" },
            { icon: FileCheck2, title: "Реестр экспертов", desc: "Аттестованные эксперты по оценке соответствия.", meta: "640 экспертов" },
            { icon: Building2, title: "Реестр уполномоченных", desc: "Организации с делегированными полномочиями.", meta: "58 организаций" },
          ]}
        />

        <ActionsBlock
          title="Работа с реестрами"
          actions={[
            { icon: Search, title: "Поиск по реестрам", desc: "Единый поиск по всем государственным реестрам.", cta: "Открыть поиск" },
            { icon: Download, title: "Выгрузка данных", desc: "Скачать актуальные данные в форматах CSV и XLSX.", cta: "Скачать" },
            { icon: Code2, title: "Открытый API", desc: "Программный доступ к реестрам для интеграции систем.", cta: "Документация API" },
            { icon: Bell, title: "Подписка на изменения", desc: "Уведомления о новых записях и отзывах сертификатов.", cta: "Подписаться" },
          ]}
        />

        <DocumentsBlock
          title="Документы и наборы данных"
          docs={[
            { title: "Регламент ведения государственных реестров", meta: "PDF · 410 КБ" },
            { title: "Открытые данные: реестр сертификатов", meta: "CSV · 14 МБ" },
            { title: "Открытые данные: реестр стандартов", meta: "CSV · 8.2 МБ" },
            { title: "Документация Open API v2", meta: "PDF · 620 КБ" },
            { title: "Условия использования открытых данных", meta: "PDF · 140 КБ" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
