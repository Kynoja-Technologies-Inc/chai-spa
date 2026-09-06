import { PageHero } from "@/components/public-website/page-hero";
import type { ComponentProps } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  icon,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        icon={icon}
      />
      <div className="px-8 mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside>
          <div className="sticky top-30 rounded-2xl bg-secondary p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              On this page
            </p>
            <nav className="mt-4 space-y-2">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#section-${index + 1}`}
                  className="block text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {section.title}
                </a>
              ))}
            </nav>
            <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              Last updated
              <br />
              <span className="font-semibold text-foreground">{updated}</span>
            </p>
          </div>
        </aside>
        <article className="rounded-2xl border border-border bg-card px-6 py-3 shadow-xs sm:px-9">
          {sections.map((section, index) => (
            <section
              id={`section-${index + 1}`}
              key={section.title}
              className="scroll-mt-30 border-b border-border py-8 last:border-0"
            >
              <p className="text-xs font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-sm leading-7 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
