import { useEffect, useRef } from "react";
import { X, Eye, Type, Palette, AlignJustify, MoveHorizontal, ZapOff, ImageOff, Link2, Target, RotateCcw, LogOut } from "lucide-react";
import { useA11y, type FontSize, type ColorScheme, type LetterSpacing, type LineHeight } from "./AccessibilityContext";

const fontSizes: { value: FontSize; label: string }[] = [
  { value: "standard", label: "Стандартный" },
  { value: "large", label: "Увеличенный" },
  { value: "xlarge", label: "Крупный" },
  { value: "xxlarge", label: "Очень крупный" },
];

const colorSchemes: { value: ColorScheme; label: string; preview: string }[] = [
  { value: "default", label: "Обычная", preview: "linear-gradient(135deg,#f8fafc,#005bbb)" },
  { value: "black-on-white", label: "Чёрный на белом", preview: "#ffffff" },
  { value: "white-on-black", label: "Белый на чёрном", preview: "#000000" },
  { value: "yellow-on-black", label: "Жёлтый на чёрном", preview: "#000000" },
  { value: "blue-on-light", label: "Синий на светлом", preview: "#9ed4f5" },
];

const letterSpacings: { value: LetterSpacing; label: string }[] = [
  { value: "normal", label: "Обычный" },
  { value: "wide", label: "Средний" },
  { value: "wider", label: "Большой" },
];

const lineHeights: { value: LineHeight; label: string }[] = [
  { value: "normal", label: "Обычный" },
  { value: "relaxed", label: "Средний" },
  { value: "loose", label: "Большой" },
];

export function AccessibilityPanel() {
  const { settings, panelOpen, setPanelOpen, update, reset, disable } = useA11y();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [panelOpen, setPanelOpen]);

  if (!panelOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="a11y-panel-title"
      className="fixed inset-0 z-[100] flex justify-end"
    >
      <button
        aria-label="Закрыть панель"
        onClick={() => setPanelOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />
      <aside className="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-card text-card-foreground shadow-2xl animate-in slide-in-from-right duration-300">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <h2 id="a11y-panel-title" className="font-display text-lg font-bold leading-tight">
                Версия для слабовидящих
              </h2>
              <p className="text-xs text-muted-foreground">WCAG 2.1 AA</p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={() => setPanelOpen(false)}
            aria-label="Закрыть"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground/70 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 space-y-7 px-6 py-6">
          <Section icon={<Type className="h-4 w-4" />} title="Размер шрифта">
            <ChoiceGrid
              options={fontSizes}
              value={settings.fontSize}
              onChange={(v) => update("fontSize", v)}
              cols={2}
            />
          </Section>

          <Section icon={<Palette className="h-4 w-4" />} title="Цветовая схема">
            <div className="grid grid-cols-1 gap-2">
              {colorSchemes.map((cs) => {
                const active = settings.colorScheme === cs.value;
                return (
                  <button
                    key={cs.value}
                    onClick={() => update("colorScheme", cs.value)}
                    aria-pressed={active}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      active ? "border-primary bg-accent text-foreground shadow-card" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 rounded-md border border-border"
                      style={{ background: cs.preview }}
                    />
                    <span>{cs.label}</span>
                  </button>
                );
              })}
            </div>
          </Section>

          <Section icon={<MoveHorizontal className="h-4 w-4" />} title="Межбуквенный интервал">
            <ChoiceGrid
              options={letterSpacings}
              value={settings.letterSpacing}
              onChange={(v) => update("letterSpacing", v)}
              cols={3}
            />
          </Section>

          <Section icon={<AlignJustify className="h-4 w-4" />} title="Межстрочный интервал">
            <ChoiceGrid
              options={lineHeights}
              value={settings.lineHeight}
              onChange={(v) => update("lineHeight", v)}
              cols={3}
            />
          </Section>

          <Section icon={<ZapOff className="h-4 w-4" />} title="Дополнительно">
            <div className="space-y-2">
              <Toggle
                icon={<ZapOff className="h-4 w-4" />}
                label="Отключить анимации"
                checked={settings.noAnimations}
                onChange={(v) => update("noAnimations", v)}
              />
              <Toggle
                icon={<ImageOff className="h-4 w-4" />}
                label="Отключить изображения"
                checked={settings.noImages}
                onChange={(v) => update("noImages", v)}
              />
              <Toggle
                icon={<Link2 className="h-4 w-4" />}
                label="Подчёркивать ссылки"
                checked={settings.underlineLinks}
                onChange={(v) => update("underlineLinks", v)}
              />
              <Toggle
                icon={<Target className="h-4 w-4" />}
                label="Увеличить области нажатия"
                checked={settings.largeTargets}
                onChange={(v) => update("largeTargets", v)}
              />
            </div>
          </Section>
        </div>

        <footer className="sticky bottom-0 flex flex-col gap-2 border-t border-border bg-card px-6 py-4">
          <button
            onClick={reset}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCcw className="h-4 w-4" />
            Сбросить настройки
          </button>
          <button
            onClick={disable}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg gradient-primary text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <LogOut className="h-4 w-4" />
            Вернуться к стандартной версии
          </button>
        </footer>
      </aside>
    </div>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-primary">{icon}</span>
        {title}
      </h3>
      {children}
    </section>
  );
}

function ChoiceGrid<T extends string>({
  options,
  value,
  onChange,
  cols,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  cols: 2 | 3;
}) {
  return (
    <div className={`grid gap-2 ${cols === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            aria-pressed={active}
            className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              active ? "border-primary bg-accent text-primary shadow-card" : "border-border hover:border-primary/50"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-border px-3 py-2.5 text-left text-sm font-medium transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex items-center gap-2.5">
        <span className="text-muted-foreground">{icon}</span>
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-muted"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}
