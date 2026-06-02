import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { Inbox, UploadCloud, X, CheckCircle2, Copy, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/components/i18n/I18nContext";

export const Route = createFileRoute("/appeals")({
  head: () => ({
    meta: [
      { title: "Электронная приемная — Кыргызстандарт" },
      { name: "description", content: "Подача обращений, жалоб и предложений в Кыргызстандарт." },
    ],
  }),
  component: AppealsPage,
});

interface StoredAppeal {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  type: string;
  subject: string;
  message: string;
  files: string[];
  createdAt: string;
  history: { status: string; at: string }[];
}

function generateId() {
  const y = new Date().getFullYear();
  const n = Math.floor(100000 + Math.random() * 900000);
  return `KS-${y}-${n}`;
}

function saveAppeal(a: StoredAppeal) {
  try {
    const raw = localStorage.getItem("ks-appeals");
    const list: StoredAppeal[] = raw ? JSON.parse(raw) : [];
    list.unshift(a);
    localStorage.setItem("ks-appeals", JSON.stringify(list.slice(0, 50)));
  } catch {}
}

function AppealsPage() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    type: "complaint",
    subject: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [captcha] = useState(() => ({ a: Math.floor(Math.random() * 9) + 1, b: Math.floor(Math.random() * 9) + 1 }));
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const types = [
    { value: "complaint", label: t("appeals.type.complaint") },
    { value: "suggestion", label: t("appeals.type.suggestion") },
    { value: "violation", label: t("appeals.type.violation") },
    { value: "question", label: t("appeals.type.question") },
    { value: "management", label: t("appeals.type.management") },
  ];

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onFiles(list: FileList | null) {
    if (!list) return;
    const arr = Array.from(list).slice(0, 5);
    setFiles((prev) => [...prev, ...arr].slice(0, 5));
  }

  function onDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragOver(false);
    onFiles(e.dataTransfer.files);
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.fullname.trim()) e.fullname = t("appeals.required");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = t("appeals.required");
    if (!form.phone.trim()) e.phone = t("appeals.required");
    if (!form.subject.trim()) e.subject = t("appeals.required");
    if (form.message.trim().length < 10) e.message = t("appeals.required");
    if (Number(captchaAnswer) !== captcha.a + captcha.b) e.captcha = t("appeals.captcha_error");
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    const id = generateId();
    const now = new Date().toISOString();
    const appeal: StoredAppeal = {
      id,
      ...form,
      files: files.map((f) => f.name),
      createdAt: now,
      history: [
        { status: "s1", at: now },
        { status: "s2", at: new Date(Date.now() + 60_000).toISOString() },
      ],
    };
    saveAppeal(appeal);
    setSubmittedId(id);
    setSubmitting(false);
  }

  if (submittedId) {
    return (
      <div className="min-h-dvh bg-background">
        <Header />
        <PageHero
          eyebrow={t("appeals.crumb")}
          icon={Inbox}
          title={t("appeals.success")}
          description={t("appeals.success_desc")}
          crumbs={[{ label: t("appeals.crumb") }]}
        />
        <main className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <div className="rounded-2xl bg-card p-8 shadow-card ring-1 ring-border">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary/15 text-secondary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <p className="mt-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {t("appeals.number")}
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="font-display text-3xl font-bold tracking-tight text-foreground">{submittedId}</span>
                <button
                  onClick={() => navigator.clipboard?.writeText(submittedId)}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Copy"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/appeals-status"
                  search={{ id: submittedId }}
                  className="inline-flex items-center gap-2 rounded-lg gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift"
                >
                  {t("appeals.go_status")}
                </Link>
                <button
                  onClick={() => {
                    setSubmittedId(null);
                    setForm({ fullname: "", email: "", phone: "", type: "complaint", subject: "", message: "" });
                    setFiles([]);
                    setCaptchaAnswer("");
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
                >
                  {t("appeals.new")}
                </button>
              </div>
            </div>
          </Reveal>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHero
        eyebrow={t("appeals.crumb")}
        icon={Inbox}
        title={t("appeals.title")}
        description={t("appeals.desc")}
        crumbs={[{ label: t("appeals.crumb") }]}
      />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <form onSubmit={onSubmit} className="space-y-6 rounded-2xl bg-card p-6 shadow-card ring-1 ring-border sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">{t("appeals.form_title")}</h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label={t("appeals.fullname")} error={errors.fullname}>
                <input
                  type="text"
                  value={form.fullname}
                  onChange={(e) => update("fullname", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label={t("appeals.email")} error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label={t("appeals.phone")} error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label={t("appeals.type")}>
                <select
                  value={form.type}
                  onChange={(e) => update("type", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {types.map((tp) => (
                    <option key={tp.value} value={tp.value}>{tp.label}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={t("appeals.subject")} error={errors.subject}>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <Field label={t("appeals.message")} error={errors.message}>
              <textarea
                rows={6}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">{t("appeals.files")}</label>
              <label
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                  dragOver ? "border-primary bg-primary/5" : "border-border bg-surface hover:border-primary/50"
                }`}
              >
                <UploadCloud className="h-8 w-8 text-primary" />
                <p className="mt-3 text-sm text-muted-foreground">{t("appeals.files_hint")}</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onFiles(e.target.files)}
                />
              </label>
              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 text-sm">
                      <span className="flex items-center gap-2 truncate"><FileText className="h-4 w-4 text-primary" />{f.name}</span>
                      <button
                        type="button"
                        onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                        className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        aria-label="Remove"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Field label={`${t("appeals.captcha")}: ${captcha.a} + ${captcha.b} = ?`} error={errors.captcha}>
              <input
                type="number"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="w-full max-w-[200px] rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
            >
              {submitting ? t("appeals.submitting") : t("appeals.submit")}
            </button>
          </form>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
