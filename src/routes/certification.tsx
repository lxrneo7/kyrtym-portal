import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { InfoCardGrid, ActionsBlock, DocumentsBlock } from "@/components/site/PageSections";
import {
  Award, ShieldCheck, FileCheck2, PackageCheck, Stethoscope, Factory, Wheat, Send, Search, RefreshCw, AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/certification")({
  head: () => ({
    meta: [
      { title: "Сертификация — Кыргызстандарт" },
      { name: "description", content: "Обязательная и добровольная сертификация продукции, услуг и систем менеджмента в Кыргызской Республике." },
      { property: "og:title", content: "Сертификация — Кыргызстандарт" },
      { property: "og:description", content: "Подтверждение соответствия продукции и услуг." },
    ],
  }),
  component: CertificationPage,
});

function CertificationPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Сертификация"
          icon={Award}
          title="Подтверждение соответствия и качества"
          description="Государственная система сертификации Кыргызстандарта обеспечивает доверие потребителей и доступ продукции на внутренний и внешний рынки."
          crumbs={[{ label: "Сертификация" }]}
        />

        <InfoCardGrid
          title="Направления сертификации"
          subtitle="Полный спектр обязательной и добровольной оценки соответствия."
          cards={[
            { icon: PackageCheck, title: "Продукция", desc: "Сертификация товаров народного потребления и промышленной продукции.", meta: "128 940 сертификатов" },
            { icon: Stethoscope, title: "Медицинские изделия", desc: "Оценка соответствия медицинских товаров и фармацевтики.", meta: "Спец. схема" },
            { icon: Wheat, title: "Пищевая продукция", desc: "Сертификация продуктов питания и сельхозсырья.", meta: "ХАССП" },
            { icon: Factory, title: "Системы менеджмента", desc: "ISO 9001, 14001, 45001, 22000 и другие.", meta: "ISO 17021" },
            { icon: ShieldCheck, title: "Услуги", desc: "Добровольная сертификация услуг и сервисных организаций.", meta: "Добровольно" },
            { icon: FileCheck2, title: "Декларирование", desc: "Регистрация деклараций о соответствии.", meta: "Онлайн" },
          ]}
        />

        <ActionsBlock
          title="Полезные действия"
          actions={[
            { icon: Send, title: "Подать заявку", desc: "Электронная подача с приложением технических документов.", cta: "Начать" },
            { icon: Search, title: "Проверить сертификат", desc: "Реестр выданных сертификатов и деклараций.", cta: "Проверить" },
            { icon: RefreshCw, title: "Продление сертификата", desc: "Подача документов на продление действующего сертификата.", cta: "Продлить" },
            { icon: AlertTriangle, title: "Сообщить о подделке", desc: "Конфиденциальная форма обращения о фальсификате.", cta: "Сообщить" },
          ]}
        />

        <DocumentsBlock
          title="Документы и формы"
          docs={[
            { title: "Перечень продукции, подлежащей обязательной сертификации", meta: "PDF · 740 КБ" },
            { title: "Схемы сертификации", meta: "PDF · 420 КБ" },
            { title: "Форма заявки на сертификацию продукции", meta: "DOCX · 110 КБ" },
            { title: "Тарифы на услуги сертификации 2026", meta: "PDF · 240 КБ" },
            { title: "Перечень аккредитованных органов", meta: "PDF · 380 КБ" },
            { title: "Образец сертификата соответствия", meta: "PDF · 180 КБ" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
