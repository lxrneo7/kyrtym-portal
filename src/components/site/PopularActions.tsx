import { Link } from "@tanstack/react-router";
import { CheckCircle2, Search, FileEdit, BookMarked, ArrowRight, Inbox, ClipboardList } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nContext";

export function PopularActions() {
  const { t } = useI18n();

  const actions = [
    { icon: Inbox, title: t("action.submit_appeal"), desc: t("action.submit_appeal_desc"), to: "/appeals" as const, featured: true },
    { icon: ClipboardList, title: t("action.check_status"), desc: t("action.check_status_desc"), to: "/appeals-status" as const, featured: true },
    { icon: Search, title: t("action.find_standard"), desc: t("action.find_standard_desc"), to: "/standards" as const },
    { icon: CheckCircle2, title: t("action.check_cert"), desc: t("action.check_cert_desc"), to: "/certification" as const },
    { icon: FileEdit, title: t("action.apply"), desc: t("action.apply_desc"), to: "/services" as const },
    { icon: BookMarked, title: t("action.open_data"), desc: t("action.open_data_desc"), to: "/registers" as const },
  ];

  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t("popular.kicker")}</div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t("popular.title")}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map(({ icon: Icon, title, desc, to, featured }) => (
            <Link
              key={title}
              to={to}
              className={`group flex items-start gap-4 rounded-2xl p-5 ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift ${
                featured
                  ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ring-primary/20"
                  : "bg-card ring-border hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                  featured ? "bg-white/15 text-secondary" : "bg-primary/10 text-primary group-hover:bg-white/15 group-hover:text-secondary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-bold leading-snug">{title}</div>
                <div className={`mt-1 text-xs ${featured ? "text-primary-foreground/80" : "text-muted-foreground group-hover:text-primary-foreground/80"}`}>
                  {desc}
                </div>
                <ArrowRight className="mt-3 h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
