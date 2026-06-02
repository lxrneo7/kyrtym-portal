import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const Ctx = createContext<I18nCtx | null>(null);
const STORAGE_KEY = "ks-lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "ru";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && ["ru", "ky", "en"].includes(saved)) return saved;
    const nav = (navigator.language || "ru").toLowerCase();
    if (nav.startsWith("ky") || nav.startsWith("kg")) return "ky";
    if (nav.startsWith("en")) return "en";
    return "ru";
  } catch {
    return "ru";
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const dict = translations[lang] || translations.ru;
      return dict[key] || translations.ru[key] || key;
    },
    [lang]
  );

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}
