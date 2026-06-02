import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "./I18nContext";
import type { Lang } from "./translations";

const options: { code: Lang; label: string; short: string }[] = [
  { code: "ky", label: "Кыргызча", short: "KG" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = options.find((o) => o.code === lang) || options[1];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        aria-expanded={open}
        className="hidden h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground sm:flex"
      >
        <Globe className="h-4 w-4" />
        {current.short}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-popover shadow-lift animate-in fade-in slide-in-from-top-2">
          {options.map((o) => (
            <button
              key={o.code}
              onClick={() => {
                setLang(o.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-accent ${
                lang === o.code ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              <span>{o.label}</span>
              {lang === o.code && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
