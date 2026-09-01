import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CalendarCheck01Icon,
  Leaf01Icon,
  SparklesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/public-services";

type ServiceDetailPageProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

const sessionFlow = [
  {
    title: "Arrival",
    description: "Settle in, share body concerns, and choose preferred pressure.",
  },
  {
    title: "Treatment",
    description: "Your therapist follows a calm sequence with focused adjustments.",
  },
  {
    title: "Aftercare",
    description: "Leave with simple care notes to help the relaxed state last.",
  },
];

export const generateStaticParams = () =>
  services.map((service) => ({
    serviceId: service.id,
  }));

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { serviceId } = await params;
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <section className="pb-12 lg:pt-3">
      <div className="overflow-hidden bg-secondary px-5 pb-8 pt-28 shadow-xl sm:px-8 lg:rounded-2xl lg:px-12 lg:pb-12 lg:pt-34">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div className="max-w-170 pb-2">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-sm font-medium tracking-normal text-primary shadow-sm transition hover:bg-accent"
              >
                <HugeiconsIcon
                  icon={SparklesIcon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Services
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-sm font-medium tracking-normal text-muted-foreground shadow-sm">
                {service.time}
              </span>
            </div>

            <h1 className="mt-5 max-w-155 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
              {service.title}
            </h1>

            <p className="mt-7 max-w-135 text-base leading-7 tracking-normal text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {service.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/15 bg-background px-3 py-1 text-sm tracking-normal text-primary"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full justify-between rounded-full pl-5 pr-2 text-base sm:w-auto lg:h-12 lg:text-sm"
              >
                <Link href="/booking">
                  Book This Service
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
                  All Services
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

          <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
            <div className="relative min-h-118 overflow-hidden rounded-2xl bg-primary shadow-2xl lg:min-h-145">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,50,0)_0%,rgba(18,59,50,0.18)_48%,rgba(18,59,50,0.82)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/18 bg-white/14 p-5 text-white backdrop-blur-md">
                <div className="inline-flex items-center gap-2 text-sm font-medium tracking-normal text-white/90">
                  <HugeiconsIcon
                    icon={service.icon}
                    strokeWidth={1.8}
                    className="size-4"
                  />
                  Signature service
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-normal">
                  Personalized therapist guidance
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-white/72">
                  Pressure, focus areas, and treatment pace are adjusted before
                  session begins.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-9"
                />
                <p className="mt-8 text-3xl font-semibold tracking-normal">
                  {service.time}
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-primary-foreground/72">
                  Session length varies by selected option and therapist
                  recommendation.
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6 shadow-lg">
                <HugeiconsIcon
                  icon={Leaf01Icon}
                  strokeWidth={1.8}
                  className="size-9 text-primary"
                />
                <p className="mt-8 text-3xl font-semibold tracking-normal text-foreground">
                  Calm first
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                  Gentle room pacing, warm details, and clear therapist
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.42fr)] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={Leaf01Icon}
                strokeWidth={2}
                className="size-4"
              />
              Treatment overview
            </div>

            <h2 className="max-w-165 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              What This Session Is Designed To Do
            </h2>

            <p className="mt-6 max-w-170 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              {service.overview}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {sessionFlow.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-background p-5 shadow-sm"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold tracking-normal text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-normal text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl bg-secondary p-5 shadow-lg sm:p-6 lg:sticky lg:top-28">
            <div className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
              <HugeiconsIcon
                icon={CalendarCheck01Icon}
                strokeWidth={1.8}
                className="size-7"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-normal text-foreground">
              Session Summary
            </h3>

            <div className="mt-5 divide-y divide-border">
              <div className="flex items-center justify-between gap-4 py-3 first:pt-0">
                <span className="text-sm tracking-normal text-muted-foreground">
                  Duration
                </span>
                <span className="text-sm font-semibold tracking-normal text-foreground">
                  {service.time}
                </span>
              </div>
              <div className="py-3">
                <span className="text-sm tracking-normal text-muted-foreground">
                  Best for
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.bestFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-background px-3 py-1 text-xs tracking-normal text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-sm tracking-normal text-muted-foreground">
                  Booking
                </span>
                <span className="text-sm font-semibold tracking-normal text-foreground">
                  Daily
                </span>
              </div>
            </div>

            <Button
              asChild
              className="mt-6 h-12 w-full justify-between rounded-full pl-5 pr-2"
            >
              <Link href="/booking">
                Reserve Time
                <span
                  data-icon="inline-end"
                  className="grid size-8 place-items-center rounded-full bg-primary-foreground text-primary"
                >
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </span>
              </Link>
            </Button>
          </aside>
        </div>
      </div>

      <div className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
          <div className="max-w-155">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={UserGroupIcon}
                strokeWidth={2}
                className="size-4"
              />
              Included care
            </div>

            <h2 className="max-w-140 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Prepared With Comfort From Start To Finish
            </h2>

            <p className="mt-6 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              Your therapist keeps session paced, focused, and responsive to
              what your body needs during visit.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {service.includes.map((item, index) => (
              <div key={item} className="group relative min-h-56">
                <div className="service-card-shape overflow-hidden bg-background shadow-sm" />
                <div className="absolute right-0 top-0 z-20 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-semibold tracking-normal">
                    {index + 1}
                  </span>
                </div>
                <div className="relative z-10 flex min-h-56 flex-col p-6">
                  <div className="grid size-12 place-items-center rounded-full bg-accent text-primary shadow-sm">
                    <HugeiconsIcon
                      icon={service.icon}
                      strokeWidth={1.8}
                      className="size-6"
                    />
                  </div>
                  <p className="mt-auto text-base font-semibold leading-6 tracking-normal text-foreground">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative min-h-95 overflow-hidden rounded-2xl bg-muted shadow-lg sm:min-h-110 lg:min-h-125">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>

          <div className="max-w-150 lg:pl-4">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={SparklesIcon}
                strokeWidth={2}
                className="size-4"
              />
              Before you arrive
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Come As You Are. We Shape Session Around You.
            </h2>

            <p className="mt-6 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              No complicated preparation needed. Wear comfortable clothes,
              arrive a few minutes early, and tell your therapist what feels
              tight, tired, sensitive, or ready for deeper work.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-sm font-semibold tracking-normal text-foreground">
                  Arrive early
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                  Five to ten minutes gives space for calm check-in.
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-sm font-semibold tracking-normal text-foreground">
                  Share preferences
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                  Pressure, scents, and focus areas can be adjusted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-180 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            More services
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Explore Other Restorative Treatments
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {relatedServices.map((item) => (
            <Link
              key={item.id}
              href={`/service/${item.id}`}
              className="group relative min-h-84 overflow-hidden rounded-2xl bg-background shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                unoptimized
                className="object-cover opacity-62 transition duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-secondary" />
              <div className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="size-5"
                />
              </div>
              <div className="relative z-10 flex min-h-84 flex-col p-6">
                <div className="grid size-12 place-items-center rounded-full bg-background/95 text-primary shadow-sm">
                  <HugeiconsIcon
                    icon={item.icon}
                    strokeWidth={1.8}
                    className="size-6"
                  />
                </div>
                <div className="mt-auto">
                  <span className="text-xs font-medium tracking-normal text-primary">
                    {item.time}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold tracking-normal text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                    {item.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-2xl">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            unoptimized
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,78,67,0.96)_0%,rgba(47,103,91,0.9)_48%,rgba(47,103,91,0.55)_100%)]" />

          <div className="relative z-10 grid gap-8 px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-16 lg:py-18">
            <div className="max-w-190">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-normal text-white/85 backdrop-blur">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Ready to book
              </div>

              <h2 className="max-w-175 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                Reserve {service.title}
              </h2>

              <p className="mt-5 max-w-140 text-sm leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base sm:leading-7">
                Choose your preferred schedule and let our team prepare a calm,
                focused session for you.
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

export default ServiceDetailPage;
