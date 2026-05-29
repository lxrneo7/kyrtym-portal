import { useState, useEffect } from "react";
import { Globe, Moon, Sun, Search, Menu, ChevronDown } from "lucide-react";

const nav = [
  "О ведомстве",
  "Услуги",
  "Стандарты",
  "Сертификация",
  "Метрология",
  "Реестры",
];

export function Header() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      {/* Top bar */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Кыргыз Республикасынын Министрлер Кабинети</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Горячая линия: 1222</a>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="hover:text-foreground">Версия для слабовидящих</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="/" className="flex items-center gap-3">
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
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item}
              <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground/70 hover:bg-accent hover:text-foreground"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <button
            aria-label="Language"
            className="hidden h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-foreground/70 hover:bg-accent hover:text-foreground sm:flex"
          >
            <Globe className="h-4 w-4" />
            RU
          </button>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground/70 hover:bg-accent hover:text-foreground"
          >
            {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <button className="hidden h-10 items-center gap-2 rounded-lg gradient-primary px-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02] md:inline-flex">
            Личный кабинет
          </button>
          <button aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-lg lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
