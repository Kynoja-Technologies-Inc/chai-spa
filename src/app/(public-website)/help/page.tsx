import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Calendar03Icon,
  CreditCardIcon,
  GiftIcon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons";
import { PageHero } from "@/components/public-website/page-hero";

export const metadata: Metadata = {
  title: "Help center",
  description:
    "Find answers about Chai Spa bookings, payments, loyalty rewards, and visits.",
};

const topics = [
  {
    icon: Calendar03Icon,
    title: "Bookings",
    text: "Scheduling, rescheduling, and appointment preparation",
  },
  {
    icon: CreditCardIcon,
    title: "Payments",
    text: "Deposits, accepted methods, vouchers, and refunds",
  },
  {
    icon: GiftIcon,
    title: "Rewards",
    text: "Points, memberships, benefits, and redemptions",
  },
];
const faqs = [
  {
    q: "How early should I arrive?",
    a: "Please arrive about 10 minutes before your appointment so you have time to settle in and share any preferences with your therapist.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Yes. Appointments may be rescheduled through our support team. Changes made at least 24 hours ahead avoid late-change charges.",
  },
  {
    q: "Can I choose my therapist?",
    a: "You can request a preferred therapist during booking. We will honor the request whenever their schedule allows.",
  },
  {
    q: "What should I share before treatment?",
    a: "Please tell us about allergies, injuries, pregnancy, skin sensitivity, or any medical concern that may affect your treatment.",
  },
  {
    q: "How do vouchers and promo codes work?",
    a: "Enter an eligible code during booking. Gift vouchers and promotions remain subject to their stated validity, inclusions, and usage limits.",
  },
];

export default function HelpPage() {
  return (
    <section className="px-4 pb-20 pt-32 lg:px-15 lg:pt-36">
      <PageHero
        eyebrow="Help center"
        title="Answers for a smoother spa visit"
        description="Find quick guidance about booking, preparing for your appointment, payments, and rewards."
        icon={HelpCircleIcon}
      />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {topics.map((topic) => (
          <article
            key={topic.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid size-11 place-items-center rounded-full bg-accent text-primary">
              <HugeiconsIcon icon={topic.icon} className="size-5" />
            </div>
            <h2 className="mt-5 text-lg font-semibold">{topic.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {topic.text}
            </p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-220">
        <p className="text-xs font-semibold uppercase text-primary">
          Frequently asked
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Good to know before you arrive
        </h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card px-5 sm:px-7">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {faq.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-lg transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-170 pt-4 text-sm leading-6 text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-secondary p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-semibold">Still need a hand?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Send a request and our spa hosts will help.
            </p>
          </div>
          <Link
            href="/support"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Contact support{" "}
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
