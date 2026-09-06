import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CheckmarkCircle02Icon, ShieldCheckIcon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = { title: "Spa policies", description: "Chai Spa booking, cancellation, refund, and guest policies." };

const policies = [
  { title: "Appointments & arrival", text: "Please arrive 10 minutes before your scheduled treatment. Late arrivals may shorten the session so the next guest can begin on time." },
  { title: "Cancellation & rescheduling", text: "Appointments may be moved or cancelled without charge up to 24 hours before the scheduled start. Changes inside 24 hours may use the reservation deposit." },
  { title: "Payments & refunds", text: "Deposits are applied to your final bill. Eligible refunds return to the original payment method after review and may take several business days to appear." },
  { title: "Health & wellness", text: "Share allergies, injuries, pregnancy, skin sensitivity, or medical concerns before treatment. Your therapist may adapt or decline a treatment when needed for your safety." },
  { title: "Home service", text: "A safe, private treatment area and access to clean water must be available. Travel charges and location coverage are confirmed before payment." },
  { title: "Guest conduct & privacy", text: "Chai Spa provides a respectful environment for guests and staff. Personal and wellness information is handled privately and used only to provide requested services." },
];

export default function PoliciesPage() {
  return <section className="px-4 pb-20 pt-32 tracking-normal sm:px-6 lg:px-10 lg:pt-38"><div className="mx-auto max-w-300"><div className="rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-14 lg:py-16"><div className="grid size-12 place-items-center rounded-full bg-white/12"><HugeiconsIcon icon={ShieldCheckIcon} className="size-6" /></div><p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Clear, caring, and transparent</p><h1 className="mt-3 max-w-180 text-4xl font-semibold leading-tight sm:text-5xl">Spa policies designed around a calm experience</h1><p className="mt-5 max-w-150 text-sm leading-7 text-white/72">Please review these guidelines before your visit. Our team is always happy to clarify anything that helps you feel comfortable.</p></div><div className="mt-6 grid gap-4 md:grid-cols-2">{policies.map((policy) => <article key={policy.title} className="rounded-2xl border border-border bg-card p-6 shadow-xs"><HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5 text-primary" /><h2 className="mt-5 text-lg font-semibold">{policy.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{policy.text}</p></article>)}</div><div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-secondary p-6 sm:flex-row sm:items-center"><div><h2 className="font-semibold">Need help with a policy?</h2><p className="mt-1 text-sm text-muted-foreground">Our spa hosts can help before you book.</p></div><Link href="/#contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground">Contact us <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" /></Link></div></div></section>;
}
