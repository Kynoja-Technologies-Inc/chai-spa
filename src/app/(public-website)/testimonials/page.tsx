import type { Metadata } from "next";
import { QuoteIcon } from "@hugeicons/core-free-icons";
import { PageHero } from "@/components/public-website/page-hero";
import TestimonialsSection from "@/components/public-website/sections/testimonials-section";

export const metadata: Metadata = { title: "Testimonials", description: "Read stories and experiences shared by Chai Spa guests." };

export default function TestimonialsPage() {
  return <div className="px-3 pb-4 pt-32 lg:pt-36"><div className="px-1 sm:px-3 lg:px-5"><PageHero eyebrow="Guest stories" title="Restorative care, felt and remembered" description="Real reflections from guests who made time to slow down, reconnect, and feel renewed." icon={QuoteIcon} /></div><div className="mt-7 [&_section]:px-0"><TestimonialsSection /></div></div>;
}
