import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Search, Menu, Eye, Inbox } from "lucide-react";
import { useA11y } from "@/components/a11y/AccessibilityContext";
import { useI18n } from "@/components/i18n/I18nContext";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";

export function Header() {
  const { setPanelOpen } = useA11y();
  const { t } = useI18n();
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { label: t("nav.about"), to: "/about" as const },
    { label: t("nav.services"), to: "/services" as const },
    { label: t("nav.standards"), to: "/standards" as const },
    { label: t("nav.certification"), to: "/certification" as const },
    { label: t("nav.metrology"), to: "/metrology" as const },
    { label: t("nav.registers"), to: "/registers" as const },
    { label: t("nav.appeals"), to: "/appeals" as const },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass shadow-card" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="border-b border-border/60">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>{t("header.cabinet")}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1222" className="hover:text-foreground">{t("header.hotline")}</a>
            <span className="h-3 w-px bg-border" />
            <button
              onClick={() => setPanelOpen(true)}
              className="inline-flex items-center gap-1.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <Eye className="h-3.5 w-3.5" />
              {t("header.a11y")}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-lift">
              <span className="font-display text-lg font-bold">КС</span>
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-secondary ring-2 ring-background" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-base font-bold leading-tight tracking-tight text-foreground">
              Кыргызстандарт
            </div>
            <div className="text-[11px] leading-tight text-muted-foreground">
              National Standardization Authority
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-accent text-primary" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:bg-accent hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/appeals"
            className="hidden h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-primary hover:bg-accent md:inline-flex xl:hidden"
          >
            <Inbox className="h-4 w-4" /> {t("nav.appeals")}
          </Link>
          <button
            aria-label={t("header.search")}
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground/70 hover:bg-accent hover:text-foreground"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <LanguageSwitcher />
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground/70 hover:bg-accent hover:text-foreground"
          >
            {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <button className="hidden h-10 items-center gap-2 rounded-lg gradient-primary px-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02] lg:inline-flex">
            {t("header.account")}
          </button>
          <button aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-lg xl:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
