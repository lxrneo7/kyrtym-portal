import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";

export type FontSize = "standard" | "large" | "xlarge" | "xxlarge";
export type ColorScheme = "default" | "black-on-white" | "white-on-black" | "yellow-on-black" | "blue-on-light";
export type LetterSpacing = "normal" | "wide" | "wider";
export type LineHeight = "normal" | "relaxed" | "loose";

export interface A11ySettings {
  enabled: boolean;
  fontSize: FontSize;
  colorScheme: ColorScheme;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
  noAnimations: boolean;
  noImages: boolean;
  underlineLinks: boolean;
  largeTargets: boolean;
}

export const DEFAULT_SETTINGS: A11ySettings = {
  enabled: false,
  fontSize: "standard",
  colorScheme: "default",
  letterSpacing: "normal",
  lineHeight: "normal",
  noAnimations: false,
  noImages: false,
  underlineLinks: false,
  largeTargets: false,
};

interface A11yContextValue {
  settings: A11ySettings;
  panelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  update: <K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => void;
  reset: () => void;
  disable: () => void;
}

const Ctx = createContext<A11yContextValue | null>(null);
const STORAGE_KEY = "ks-a11y-settings";

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_SETTINGS);
  const [panelOpen, setPanelOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(raw) });
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}

    const root = document.documentElement;
    const classes = [
      "a11y-enabled",
      "a11y-fs-large", "a11y-fs-xlarge", "a11y-fs-xxlarge",
      "a11y-cs-bw", "a11y-cs-wb", "a11y-cs-yb", "a11y-cs-bl",
      "a11y-ls-wide", "a11y-ls-wider",
      "a11y-lh-relaxed", "a11y-lh-loose",
      "a11y-no-animations", "a11y-no-images",
      "a11y-underline-links", "a11y-large-targets",
    ];
    classes.forEach((c) => root.classList.remove(c));

    if (!settings.enabled) return;

    root.classList.add("a11y-enabled");
    if (settings.fontSize === "large") root.classList.add("a11y-fs-large");
    if (settings.fontSize === "xlarge") root.classList.add("a11y-fs-xlarge");
    if (settings.fontSize === "xxlarge") root.classList.add("a11y-fs-xxlarge");
    if (settings.colorScheme === "black-on-white") root.classList.add("a11y-cs-bw");
    if (settings.colorScheme === "white-on-black") root.classList.add("a11y-cs-wb");
    if (settings.colorScheme === "yellow-on-black") root.classList.add("a11y-cs-yb");
    if (settings.colorScheme === "blue-on-light") root.classList.add("a11y-cs-bl");
    if (settings.letterSpacing === "wide") root.classList.add("a11y-ls-wide");
    if (settings.letterSpacing === "wider") root.classList.add("a11y-ls-wider");
    if (settings.lineHeight === "relaxed") root.classList.add("a11y-lh-relaxed");
    if (settings.lineHeight === "loose") root.classList.add("a11y-lh-loose");
    if (settings.noAnimations) root.classList.add("a11y-no-animations");
    if (settings.noImages) root.classList.add("a11y-no-images");
    if (settings.underlineLinks) root.classList.add("a11y-underline-links");
    if (settings.largeTargets) root.classList.add("a11y-large-targets");
  }, [settings, hydrated]);

  const update = useCallback(<K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => {
    setSettings((s) => ({ ...s, [key]: value, enabled: true }));
  }, []);

  const reset = useCallback(() => {
    setSettings({ ...DEFAULT_SETTINGS, enabled: true });
  }, []);

  const disable = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    setPanelOpen(false);
  }, []);

  return (
    <Ctx.Provider value={{ settings, panelOpen, setPanelOpen, update, reset, disable }}>
      {children}
    </Ctx.Provider>
  );
}

export function useA11y() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useA11y must be used within AccessibilityProvider");
  return ctx;
}
