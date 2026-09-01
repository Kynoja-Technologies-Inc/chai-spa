import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CalendarCheck01Icon,
  Flower01Icon,
  Leaf01Icon,
  SparklesIcon,
  TreatmentIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Years of wellness care" },
  { value: "5k+", label: "Guests guided into calm" },
  { value: "30+", label: "Curated healing treatments" },
  { value: "95%", label: "Guest satisfaction rate" },
];

const values = [
  {
    icon: Leaf01Icon,
    title: "Intentional Care",
    description:
      "Each session starts with how your body feels today, then follows a calm plan shaped around real tension points.",
  },
  {
    icon: TreatmentIcon,
    title: "Skilled Touch",
    description:
      "Our therapists blend focused technique, steady pressure, and quiet pacing so every treatment feels personal.",
  },
  {
    icon: Flower01Icon,
    title: "Natural Ease",
    description:
      "Soft aromatics, herbal textures, and warm details support rest without overwhelming your senses.",
  },
];

const process = [
  "Listen to your wellness goals before the session begins.",
  "Match treatment pressure, oils, and rhythm to your needs.",
  "Close with aftercare guidance that helps calm last longer.",
];

const hours = [
  { day: "Monday - Friday", time: "10:00 AM - 9:00 PM" },
  { day: "Saturday", time: "9:00 AM - 10:00 PM" },
  { day: "Sunday", time: "9:00 AM - 8:00 PM" },
];

const AboutPage = () => {
  return (
    <section className="pb-12 lg:pt-3">
      {/* <div className="overflow-hidden bg-secondary px-5 pb-8 pt-28 shadow-xl sm:px-8 lg:rounded-2xl lg:px-12 lg:pb-12 lg:pt-34">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div className="max-w-170 pb-2">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-sm font-medium tracking-normal text-primary shadow-sm">
              <HugeiconsIcon
                icon={SparklesIcon}
                strokeWidth={1.8}
                className="size-4"
              />
              About Chai Spa
            </div>

            <h1 className="max-w-150 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
              A Quiet Place Built For Deeper Renewal
            </h1>

            <p className="mt-7 max-w-130 text-base leading-7 tracking-normal text-muted-foreground">
              Chai Spa brings skilled therapy, soothing rituals, and warm
              hospitality together so every visit feels restorative from the
              first breath to the final moment of calm.
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
                <Link href="/#services">
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

          <div className="relative min-h-110 overflow-hidden rounded-2xl bg-primary shadow-2xl sm:min-h-125 lg:min-h-140">
            <Image
              src="https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg"
              alt="Peaceful spa treatment room with towels and candles"
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,50,0.02)_0%,rgba(18,59,50,0.18)_45%,rgba(18,59,50,0.72)_100%)]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/18 bg-white/14 p-5 text-white backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-92">
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-normal text-white/90">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Open today
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-normal">
                10:00 AM - 9:00 PM
              </p>
              <p className="mt-2 text-sm leading-6 tracking-normal text-white/72">
                Daily care, evening slots, and weekend appointments available.
              </p>
            </div>
        </div>
      </div>
      </div> */}

      {/* <div className="grid grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left"
          >
            <span className="text-5xl font-semibold tracking-normal text-foreground lg:text-4xl">
              {stat.value}
            </span>
            <span className="max-w-42 text-sm leading-tight tracking-normal text-muted-foreground lg:max-w-32.5">
              {stat.label}
            </span>
          </div>
        ))}
      </div> */}

      <div className="lg:px-10 px-4 pb-16 pt-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="max-w-170">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={Leaf01Icon}
                strokeWidth={2}
                className="size-4"
              />
              Our story
            </div>

            <h2 className="max-w-150 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Wellness Guided By Purpose, Presence, And Care
            </h2>

            <p className="mt-6 max-w-145 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              We began with one simple belief: relaxation should feel deeply
              personal. Our team creates space for guests to slow down, release
              tension, and reconnect with the body through treatments that feel
              careful, grounded, and unhurried.
            </p>

            <p className="mt-4 max-w-145 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              From the welcome ritual to the treatment room details, every part
              of Chai Spa is designed to soften noise, restore balance, and help
              you return to daily life with clearer energy.
            </p>
          </div>

          <div className="relative min-h-95 overflow-hidden rounded-xl bg-muted shadow-lg sm:min-h-110 lg:min-h-130">
            <Image
              src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
              alt="Therapist preparing a relaxing spa massage"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary lg:py-16 lg:px-10 px-4">
        <div className="mx-auto max-w-180 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            What we value
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Care Principles Behind Every Visit
          </h2>

          <p className="mx-auto mt-5 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
            Our treatments are calm by design, but never generic. These
            principles shape how our therapists prepare, listen, and care.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
          {values.map((value) => (
            <div key={value.title} className="group relative min-h-78">
              <div className="service-card-shape overflow-hidden bg-background shadow-sm" />

              <div className="absolute right-0 top-0 z-20 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="size-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </div>

              <div className="relative z-10 flex min-h-78 flex-col px-6 pb-6 pt-6">
                <div className="grid size-13 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-sm">
                  <HugeiconsIcon
                    icon={value.icon}
                    strokeWidth={1.8}
                    className="size-7"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-semibold tracking-normal text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 tracking-normal text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div className="relative min-h-95 overflow-hidden rounded-xl bg-muted shadow-lg sm:min-h-110 lg:min-h-130">
            <Image
              src="https://images.pexels.com/photos/6621338/pexels-photo-6621338.jpeg"
              alt="Aromatic spa oils and towels for treatment"
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
              How we care
            </div>

            <h2 className="max-w-150 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Thoughtful Sessions From Arrival To Aftercare
            </h2>

            <p className="mt-6 max-w-145 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              We create each visit around comfort, communication, and quiet
              confidence. Your therapist guides the pace, checks in with care,
              and keeps the experience focused on what helps you feel restored.
            </p>

            <div className="mt-8 space-y-4">
              {process.map((item, index) => (
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

      <div className="bg-secondary lg:px-10 px-4 py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="max-w-160">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={CalendarCheck01Icon}
                strokeWidth={2}
                className="size-4"
              />
              Working hours
            </div>

            <h2 className="max-w-140 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Open Daily For Calm, Flexible Wellness Visits
            </h2>

            <p className="mt-6 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              Plan your visit around your day. Early weekend appointments and
              evening weekday sessions are available for easier scheduling.
            </p>
          </div>

          <div className="rounded-2xl bg-background p-5 shadow-lg sm:p-6">
            <div className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
              <HugeiconsIcon
                icon={CalendarCheck01Icon}
                strokeWidth={1.8}
                className="size-7"
              />
            </div>

            <div className="mt-6 divide-y divide-border">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-base font-semibold tracking-normal text-foreground">
                    {item.day}
                  </span>
                  <span className="text-sm tracking-normal text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="mt-6 h-12 w-full justify-between rounded-full pl-5 pr-2"
            >
              <Link href="/booking">
                Reserve Your Time
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
          </div>
        </div>
      </div>

      <div className="lg:px-10 px-4 pb-8 pt-10">
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
          <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-black/20 to-transparent" />

          <div className="relative z-10 grid gap-8 px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-16 lg:py-18">
            <div className="max-w-190">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-normal text-white/85 backdrop-blur">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Ready when you are
              </div>

              <h2 className="max-w-175 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                Begin With A Session Made Around Your Pace
              </h2>

              <p className="mt-5 max-w-140 text-sm leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base sm:leading-7">
                Choose a treatment and time that fits your day. We will prepare
                a calm space and a therapist ready to help you reset.
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

export default AboutPage;
