import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { InfoCardGrid, ActionsBlock, DocumentsBlock } from "@/components/site/PageSections";
import {
  BookOpen, Globe, Layers, Hammer, ShieldCheck, Leaf, Cpu, Search, ShoppingCart, FileSignature, Bell,
} from "lucide-react";

export const Route = createFileRoute("/standards")({
  head: () => ({
    meta: [
      { title: "Стандарты — Кыргызстандарт" },
      { name: "description", content: "Национальная база технических стандартов Кыргызской Республики: ГОСТ, ISO, IEC, технические регламенты." },
      { property: "og:title", content: "Стандарты — Кыргызстандарт" },
      { property: "og:description", content: "Более 32 000 действующих стандартов в едином каталоге." },
    ],
  }),
  component: StandardsPage,
});

function StandardsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Стандарты"
          icon={BookOpen}
          title="Национальный фонд стандартов"
          description="Открытый доступ к национальным, межгосударственным и международным стандартам. Поиск по обозначению, ключевому слову и отрасли."
          crumbs={[{ label: "Стандарты" }]}
        />

        <InfoCardGrid
          title="Категории стандартов"
          subtitle="Шесть крупных направлений, охватывающих все секторы экономики."
          cards={[
            { icon: Globe, title: "Международные ISO/IEC", desc: "Принятые международные стандарты в качестве национальных.", meta: "8 420 документов" },
            { icon: Layers, title: "Межгосударственные ГОСТ", desc: "Стандарты стран СНГ, действующие на территории КР.", meta: "14 200 документов" },
            { icon: Hammer, title: "Технические регламенты", desc: "Обязательные требования к продукции и процессам.", meta: "62 регламента" },
            { icon: ShieldCheck, title: "Безопасность", desc: "Стандарты безопасности труда, продукции и услуг.", meta: "1 940 документов" },
            { icon: Leaf, title: "Экология и АПК", desc: "Стандарты окружающей среды и сельского хозяйства.", meta: "2 380 документов" },
            { icon: Cpu, title: "ИТ и цифровизация", desc: "Информационные технологии, кибербезопасность, ИИ.", meta: "1 120 документов" },
          ]}
        />

        <ActionsBlock
          title="Работа со стандартами"
          actions={[
            { icon: Search, title: "Поиск по каталогу", desc: "Найти стандарт по номеру, ключевому слову или отрасли.", cta: "Открыть каталог" },
            { icon: ShoppingCart, title: "Купить стандарт", desc: "Официальная копия в PDF с электронной подписью.", cta: "В магазин" },
            { icon: FileSignature, title: "Предложить разработку", desc: "Заявка на разработку нового национального стандарта.", cta: "Подать заявку" },
            { icon: Bell, title: "Подписаться на обновления", desc: "Уведомления о новых редакциях интересующих стандартов.", cta: "Подписаться" },
          ]}
        />

        <DocumentsBlock
          title="Перечни и каталоги"
          docs={[
            { title: "Каталог национальных стандартов 2026", meta: "PDF · 6.4 МБ" },
            { title: "Перечень принятых ISO/IEC", meta: "PDF · 1.2 МБ" },
            { title: "План разработки стандартов на 2026", meta: "PDF · 480 КБ" },
            { title: "Отменённые и заменённые стандарты", meta: "PDF · 320 КБ" },
            { title: "Реестр технических регламентов", meta: "XLSX · 220 КБ" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
