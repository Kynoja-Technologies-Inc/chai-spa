import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CalendarCheck01Icon,
  Leaf01Icon,
  SparklesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";

const perks = [
  {
    icon: SparklesIcon,
    title: "Earn Every Visit",
    description:
      "Collect marks when you book eligible treatments and keep progress toward your next reward.",
  },
  {
    icon: Leaf01Icon,
    title: "Wellness Reward",
    description:
      "Complete your card and enjoy a relaxing benefit prepared for your next spa session.",
  },
  {
    icon: UserGroupIcon,
    title: "Easy To Use",
    description:
      "Show your card at check-in and our team will update it after your appointment.",
  },
];

const steps = [
  "Book or walk in for an eligible spa treatment.",
  "Present your loyalty card before checkout.",
  "Collect a mark and return when ready for your next reward.",
];

const terms = [
  "Valid for Chai Spa treatments only.",
  "One mark per eligible completed visit.",
  "Rewards cannot be exchanged for cash.",
  "Lost cards follow branch verification policy.",
];

const LoyaltyCardPage = () => {
  return (
    <section className="pb-12 lg:pt-3">
      <div className="overflow-hidden bg-secondary px-5 pb-8 pt-28 shadow-xl sm:px-8 lg:rounded-2xl lg:px-12 lg:pb-12 lg:pt-34">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="max-w-170">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-sm font-medium tracking-normal text-primary shadow-sm">
              <HugeiconsIcon
                icon={SparklesIcon}
                strokeWidth={1.8}
                className="size-4"
              />
              Chai Spa Loyalty Card
            </div>

            <h1 className="max-w-160 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
              Reward Your Routine Of Rest And Renewal
            </h1>

            <p className="mt-7 max-w-135 text-base leading-7 tracking-normal text-muted-foreground">
              Keep every spa visit moving toward your next wellness reward. The
              Chai Spa loyalty card gives returning guests a simple way to earn
              benefits while staying consistent with self-care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full justify-between rounded-full pl-5 pr-2 text-base sm:w-auto lg:h-12 lg:text-sm"
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
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full justify-between rounded-full border-primary/20 bg-background pl-5 pr-2 text-base text-primary hover:bg-accent sm:w-auto lg:h-12 lg:text-sm"
              >
                <Link href="/services">
                  Explore Services
                  <span
                    data-icon="inline-end"
                    className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-118 sm:min-h-132 lg:min-h-142">
            <div className="absolute inset-x-0 top-2 mx-auto max-w-165 rotate-2 rounded-[28px] bg-primary/12 p-3 shadow-2xl sm:top-8">
              <div className="relative aspect-[600/280] overflow-hidden rounded-[22px] bg-background shadow-xl">
                <Image
                  src="/loyalty-card/front.png"
                  alt="Chai Spa loyalty card front"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-3 right-3 mx-auto max-w-150 -rotate-3 rounded-[28px] bg-background p-3 shadow-2xl sm:left-0 sm:right-auto sm:max-w-132">
              <div className="relative aspect-[600/277] overflow-hidden rounded-[22px] bg-muted shadow-lg">
                <Image
                  src="/loyalty-card/back.png"
                  alt="Chai Spa loyalty card back"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>

            <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl lg:block lg:max-w-52">
              <HugeiconsIcon
                icon={CalendarCheck01Icon}
                strokeWidth={1.8}
                className="size-8"
              />
              <p className="mt-8 text-3xl font-semibold tracking-normal">
                10
              </p>
              <p className="mt-2 text-sm leading-6 tracking-normal text-primary-foreground/72">
                Visits build progress toward your next spa reward.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-180 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Loyalty benefits
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Simple Rewards For Returning Guests
          </h2>

          <p className="mx-auto mt-5 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
            Designed for guests who make wellness part of their rhythm. No
            complicated points, apps, or extra steps.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
          {perks.map((perk) => (
            <div key={perk.title} className="group relative min-h-78">
              <div className="service-card-shape overflow-hidden bg-secondary shadow-sm" />
              <div className="absolute right-0 top-0 z-20 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="size-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </div>

              <div className="relative z-10 flex min-h-78 flex-col px-6 pb-6 pt-6">
                <div className="grid size-13 shrink-0 place-items-center rounded-full bg-background/95 text-primary shadow-sm">
                  <HugeiconsIcon
                    icon={perk.icon}
                    strokeWidth={1.8}
                    className="size-7"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-semibold tracking-normal text-foreground">
                    {perk.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 tracking-normal text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="max-w-155">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={Leaf01Icon}
                strokeWidth={2}
                className="size-4"
              />
              How it works
            </div>

            <h2 className="max-w-145 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Bring Your Card, Collect Your Mark, Return For Calm
            </h2>

            <p className="mt-6 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              Our team keeps it easy at check-in and checkout so your loyalty
              progress fits naturally into each spa visit.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl bg-background p-4 shadow-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold tracking-normal text-primary-foreground">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-primary p-4 shadow-2xl">
            <div className="relative aspect-[600/280] overflow-hidden rounded-xl bg-background">
              <Image
                src="/loyalty-card/front.png"
                alt="Chai Spa loyalty card front preview"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  className="grid aspect-square place-items-center rounded-full border border-white/25 bg-white/12 text-sm font-semibold tracking-normal text-primary-foreground"
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-150 lg:pl-4">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={CalendarCheck01Icon}
                strokeWidth={2}
                className="size-4"
              />
              Card details
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Keep Your Reward Progress Visible
            </h2>

            <p className="mt-6 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              The printed loyalty card makes progress easy to track at every
              appointment. Bring it with you and let our front desk team mark
              eligible visits after completed service.
            </p>

            <div className="mt-8 rounded-2xl bg-secondary p-5 shadow-sm sm:p-6">
              <h3 className="text-xl font-semibold tracking-normal text-foreground">
                Loyalty reminders
              </h3>
              <div className="mt-5 divide-y divide-border">
                {terms.map((term) => (
                  <p
                    key={term}
                    className="py-3 text-sm leading-6 tracking-normal text-muted-foreground first:pt-0 last:pb-0"
                  >
                    {term}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-2xl">
          <Image
            src="https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg"
            alt="Relaxing spa treatment room"
            fill
            unoptimized
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,78,67,0.96)_0%,rgba(47,103,91,0.9)_48%,rgba(47,103,91,0.55)_100%)]" />

          <div className="relative z-10 grid gap-8 px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-16 lg:py-18">
            <div className="max-w-190">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-normal text-white/85 backdrop-blur">
                <HugeiconsIcon
                  icon={SparklesIcon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Start earning
              </div>

              <h2 className="max-w-175 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                Book Your Next Visit And Bring Your Card
              </h2>

              <p className="mt-5 max-w-140 text-sm leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base sm:leading-7">
                Reserve a treatment and ask our team for loyalty card details
                when you arrive.
              </p>
            </div>

            <Button
              asChild
              className="h-12 w-full justify-between rounded-full bg-white pl-5 pr-2 text-primary hover:bg-white/90 sm:w-auto lg:min-w-64"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyCardPage;
