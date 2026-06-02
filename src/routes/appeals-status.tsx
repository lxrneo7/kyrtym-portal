import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { ClipboardList, Search, CheckCircle2, Clock, Circle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/components/i18n/I18nContext";
import type { TranslationKey } from "@/components/i18n/translations";

const search = z.object({ id: z.string().optional() });

export const Route = createFileRoute("/appeals-status")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Проверка статуса обращения — Кыргызстандарт" },
      { name: "description", content: "Проверьте текущий статус и историю обработки обращения по его номеру." },
    ],
  }),
  component: StatusPage,
});

interface StoredAppeal {
  id: string;
  subject: string;
  createdAt: string;
  history: { status: string; at: string }[];
}

function loadAppeal(id: string): StoredAppeal | null {
  try {
    const raw = localStorage.getItem("ks-appeals");
    const list: StoredAppeal[] = raw ? JSON.parse(raw) : [];
    return list.find((a) => a.id.toUpperCase() === id.toUpperCase()) || null;
  } catch {
    return null;
  }
}

const STEPS = ["s1", "s2", "s3", "s4", "s5"] as const;

function StatusPage() {
  const { t } = useI18n();
  const { id: initialId } = Route.useSearch();
  const [query, setQuery] = useState(initialId || "");
  const [appeal, setAppeal] = useState<StoredAppeal | null | undefined>(undefined);

  useEffect(() => {
    if (initialId) {
      setAppeal(loadAppeal(initialId));
    }
  }, [initialId]);

  function onCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setAppeal(loadAppeal(query.trim()));
  }

  const currentStepIdx = appeal ? Math.max(0, ...appeal.history.map((h) => STEPS.indexOf(h.status as typeof STEPS[number]))) : -1;

  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHero
        eyebrow={t("status.crumb")}
        icon={ClipboardList}
        title={t("status.title")}
        description={t("status.desc")}
        crumbs={[{ label: t("status.crumb") }]}
      />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <form onSubmit={onCheck} className="flex flex-col gap-3 rounded-2xl bg-card p-4 shadow-card ring-1 ring-border sm:flex-row sm:p-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("status.input") + " (KS-YYYY-XXXXXX)"}
                className="w-full rounded-lg border border-border bg-background pl-11 pr-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              {t("status.check")}
            </button>
          </form>
        </Reveal>

        {appeal === null && (
          <Reveal className="mt-6">
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 text-sm text-destructive">
              {t("status.notfound")}
            </div>
          </Reveal>
        )}

        {appeal && (
          <Reveal className="mt-8">
            <div className="rounded-2xl bg-card p-6 shadow-card ring-1 ring-border sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("appeals.number")}</p>
                  <p className="mt-1 font-display text-2xl font-bold text-foreground">{appeal.id}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{appeal.subject}</p>
                </div>
                <div className="rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold text-secondary">
                  {t("status.current")}: {t(`status.${STEPS[Math.max(0, currentStepIdx)]}` as TranslationKey)}
                </div>
              </div>

              <h3 className="mt-8 font-display text-base font-bold text-foreground">{t("status.history")}</h3>
              <ol className="mt-4 space-y-4">
                {STEPS.map((s, i) => {
                  const hist = appeal.history.find((h) => h.status === s);
                  const done = !!hist;
                  const isCurrent = i === currentStepIdx;
                  return (
                    <li key={s} className="flex items-start gap-4">
                      <div className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        done ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"
                      }`}>
                        {done ? <CheckCircle2 className="h-4.5 w-4.5" /> : isCurrent ? <Clock className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                      </div>
                      <div className="flex-1 border-b border-border/60 pb-4">
                        <p className={`text-sm font-medium ${done ? "text-foreground" : "text-muted-foreground"}`}>
                          {t(`status.${s}` as TranslationKey)}
                        </p>
                        {hist && (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {new Date(hist.at).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        )}
      </main>
      <Footer />
    </div>
  );
}
