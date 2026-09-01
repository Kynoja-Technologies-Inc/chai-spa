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
import { serviceCategories, services } from "@/lib/public-services";

const steps = [
  "Choose the treatment that matches how your body feels today.",
  "Share preferred pressure, focus areas, and sensitivities before we begin.",
  "Arrive, settle in, and let your therapist guide the full session.",
];

const ServicesPage = () => {
  return (
    <section className="pb-12 lg:pt-3">
      <div className="overflow-hidden px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-12 lg:pt-34">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div className="max-w-170 pb-2">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-sm font-medium tracking-normal text-primary shadow-sm">
              <HugeiconsIcon
                icon={SparklesIcon}
                strokeWidth={1.8}
                className="size-4"
              />
              Spa services
            </div>

            <h1 className="max-w-155 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
              Treatments Made To Release, Restore, And Renew
            </h1>

            <p className="mt-7 max-w-135 text-base leading-7 tracking-normal text-muted-foreground">
              Choose from body therapy, facial care, aromatic treatments, and
              herbal rituals prepared with calm pacing and thoughtful therapist
              guidance.
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
                <Link href="#treatments">
                  View Treatments
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

          <div className="grid gap-4 sm:grid-cols-[0.85fr_1fr]">
            <div className="relative min-h-72 overflow-hidden rounded-2xl bg-primary shadow-lg sm:min-h-118">
              <Image
                src="https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg"
                alt="Aromatic oils prepared for spa service"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(min-width: 1024px) 24vw, 100vw"
              />
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-9"
                />
                <p className="mt-8 text-3xl font-semibold tracking-normal">
                  30+
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-primary-foreground/72">
                  Curated treatments for body, skin, and quiet recovery.
                </p>
              </div>

              <div className="relative min-h-62 overflow-hidden rounded-2xl bg-muted shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg"
                  alt="Gentle spa facial treatment"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(min-width: 1024px) 24vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="treatments" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-180 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Signature treatments
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Choose Your Restorative Session
          </h2>

          <p className="mx-auto mt-5 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
            Each service is prepared with clear timing, calm technique, and
            therapist attention to your comfort.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group relative h-92 sm:h-88">
              <div className="service-card-shape overflow-hidden bg-secondary">
                <div className="relative h-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    unoptimized
                    className="object-cover opacity-72"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-secondary" />
                </div>
              </div>

              <Link
                href={`/service/${service.id}`}
                aria-label={`View ${service.title}`}
                className="absolute right-0 top-0 z-20 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="size-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>

              <div className="relative z-10 flex h-full flex-col px-6 pb-5 pt-6">
                <div className="grid size-13 shrink-0 place-items-center rounded-full bg-background/95 text-primary shadow-sm">
                  <HugeiconsIcon
                    icon={service.icon}
                    strokeWidth={1.8}
                    className="size-7"
                  />
                </div>

                <div className="mt-auto">
                  <span className="inline-flex rounded-full bg-background/80 px-3 py-1 text-xs font-medium tracking-normal text-primary">
                    {service.time}
                  </span>
                  <h3 className="mt-3 text-base font-bold tracking-normal text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 tracking-normal text-foreground/86">
                    {service.description}
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
              Service menu
            </div>

            <h2 className="max-w-140 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Wellness Options For Every Kind Of Reset
            </h2>

            <p className="mt-6 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              Start with a focused service or combine treatments for a longer
              visit. Our therapists help match the right care to your energy,
              skin, and tension patterns.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="grid gap-4 rounded-2xl bg-background p-5 shadow-sm sm:grid-cols-[auto_1fr]"
              >
                <div className="grid size-12 place-items-center rounded-full bg-accent text-primary">
                  <HugeiconsIcon
                    icon={category.icon}
                    strokeWidth={1.8}
                    className="size-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-normal text-foreground">
                    {category.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-sm tracking-normal text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
          <div className="relative min-h-95 overflow-hidden rounded-xl bg-muted shadow-lg sm:min-h-110 lg:min-h-130">
            <Image
              src="https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg"
              alt="Relaxing spa massage treatment room"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>

          <div className="max-w-165 lg:pl-4">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={UserGroupIcon}
                strokeWidth={2}
                className="size-4"
              />
              How booking works
            </div>

            <h2 className="max-w-150 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Simple Steps Before Your Treatment Begins
            </h2>

            <p className="mt-6 max-w-145 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              Your visit stays easy from booking to aftercare. Pick a service,
              tell us what your body needs, and arrive ready for quiet support.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-border bg-background p-4 shadow-sm"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold tracking-normal text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-2xl">
          <Image
            src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
            alt="Spa therapist preparing massage service"
            fill
            unoptimized
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,78,67,0.96)_0%,rgba(47,103,91,0.9)_48%,rgba(47,103,91,0.55)_100%)]" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-black/20 to-transparent" />

          <div className="relative z-10 grid gap-8 px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-16 lg:py-18">
            <div className="max-w-190">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-normal text-white/85 backdrop-blur">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Daily appointments
              </div>

              <h2 className="max-w-175 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                Reserve The Service Your Body Needs
              </h2>

              <p className="mt-5 max-w-140 text-sm leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base sm:leading-7">
                Book a focused session or plan a longer restorative visit with
                our care team.
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

export default ServicesPage;
