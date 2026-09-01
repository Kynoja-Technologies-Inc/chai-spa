import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Leaf01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import AboutSection from "@/components/public-website/sections/about-section";
import BlogSection from "@/components/public-website/sections/blog-section";
import ContactSection from "@/components/public-website/sections/contact-section";
import CTASection from "@/components/public-website/sections/cta-section";
import FaqSection from "@/components/public-website/sections/faq-section";
import ServicesSection from "@/components/public-website/sections/services-section";
import TestimonialsSection from "@/components/public-website/sections/testimonials-section";
import TherapistSection from "@/components/public-website/sections/therapist-section";

const stats = [
  { value: 10, suffix: "+", label: "Years of Wellness Expertise" },
  { value: 5, suffix: "k+", label: "Happy and Relaxed Clients" },
  { value: 30, suffix: "+", label: "Signature Healing Treatments" },
  { value: 95, suffix: "%", label: "Happy and Relaxed Clients" },
];

const highlights = [
  {
    icon: Leaf01Icon,
    label: "Personalized Relaxation Treatments",
  },
  {
    icon: UserGroupIcon,
    label: "Trusted and Trained Wellness Experts",
  },
];

const Page = () => {
  return (
    <section id="home" className="pb-12 lg:px-3 lg:pt-3">
      <div>
        <div className="relative min-h-180 overflow-hidden bg-[#dfe8e5] shadow-xl lg:min-h-200 lg:rounded-2xl">
          <Image
            src="https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg"
            alt="Spa facial wellness treatment"
            fill
            priority
            unoptimized
            className="object-cover object-[42%_center] sm:object-[58%_center]"
            sizes="(min-width: 1120px) 1120px, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,50,0.92)_0%,rgba(36,76,67,0.72)_52%,rgba(0,0,0,0.36)_100%)] lg:bg-[linear-gradient(90deg,rgba(38,81,72,0.88)_0%,rgba(50,91,82,0.62)_42%,rgba(255,255,255,0.08)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_92%,rgba(255,255,255,0.46),transparent_30%)] lg:bg-[radial-gradient(circle_at_55%_95%,rgba(255,255,255,0.76),transparent_30%)]" />

          <div className="relative z-10 flex min-h-180 flex-col justify-between px-8 pb-12 pt-30 lg:min-h-200 lg:px-15 lg:pb-10 lg:pt-40">
            <div className="max-w-200">
              <h1 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl lg:leading-tight">
                Relax Deeply, Renew Fully, Reconnect With Yourself
              </h1>
              <p className="mt-7 max-w-full text-base leading-7 tracking-normal text-white/86 lg:max-w-117.5">
                Discover a place of pure serenity where each treatment melts
                away tension, revitalizes your energy, and brings you closer to
                inner peace.
              </p>

              <div
                id="booking"
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full justify-between rounded-full bg-white pl-5 pr-2 text-base text-primary hover:bg-white/92 sm:w-auto lg:h-12 lg:text-sm"
                >
                  <Link href="/booking">
                    Book Appointment
                    <span
                      data-icon="inline-end"
                      className="grid size-8 place-items-center rounded-full bg-primary text-white"
                    >
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        strokeWidth={2}
                        className="size-4"
                      />
                    </span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-full justify-between rounded-full border-white/70 bg-white/10 pl-5 pr-2 text-base text-white backdrop-blur-sm hover:bg-white hover:text-primary sm:w-auto lg:h-12 lg:text-sm"
                >
                  Our Services
                  <span
                    data-icon="inline-end"
                    className="grid size-8 place-items-center rounded-full bg-white text-primary"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  </span>
                </Button>
              </div>
            </div>

            <div className="grid w-full gap-6 text-white sm:grid-cols-2 lg:ml-auto lg:max-w-117.5 lg:gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border-l border-white/70 pl-5 lg:gap-3 lg:pl-4"
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    strokeWidth={1.8}
                    className="size-9 shrink-0 lg:size-7"
                  />
                  <p className="text-base font-medium leading-tight tracking-normal lg:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-6 py-10 grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center lg:flex-row flex-col gap-5 lg:gap-3">
              <span className="text-5xl font-semibold tracking-normal text-foreground lg:text-4xl">
                <NumberTicker
                  value={stat.value}
                  className="tracking-normal text-foreground"
                />
                {stat.suffix}
              </span>
              <span className="max-w-42 leading-tight tracking-normal text-muted-foreground lg:max-w-32.5 text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <TherapistSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </div>
    </section>
  );
};

export default Page;
