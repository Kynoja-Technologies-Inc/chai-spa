import type { Metadata } from "next";
import { CustomerSupportIcon } from "@hugeicons/core-free-icons";
import { PageHero } from "@/components/public-website/page-hero";
import { SupportForm } from "@/components/public-website/support-form";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact Chai Spa support for help with bookings, payments, vouchers, and visits.",
};

export default function SupportPage() {
  return (
    <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <PageHero
        eyebrow="Guest support"
        title="How can we help?"
        description="Share what you need and a Chai Spa host will guide you toward the right next step."
        icon={CustomerSupportIcon}
      />
      <div className="px-8 mt-6">
        <SupportForm />
      </div>
    </section>
  );
}
