import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuickServices } from "@/components/site/QuickServices";
import { Stats } from "@/components/site/Stats";
import { News } from "@/components/site/News";
import { PopularActions } from "@/components/site/PopularActions";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Кыргызстандарт — Национальный орган по стандартизации и метрологии" },
      {
        name: "description",
        content:
          "Официальный портал Кыргызстандарта: сертификация, стандарты, метрология, аккредитация и государственные реестры Кыргызской Республики.",
      },
      { property: "og:title", content: "Кыргызстандарт — Национальный орган КР" },
      {
        property: "og:description",
        content:
          "Государственные услуги по стандартизации, метрологии и оценке соответствия.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <Hero />
        <QuickServices />
        <Stats />
        <News />
        <PopularActions />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
