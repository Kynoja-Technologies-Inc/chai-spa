import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CalendarCheck01Icon,
  Leaf01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.22),transparent_28%)]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-black/20 to-transparent" />

        <div className="relative z-10 grid gap-8 px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-16 lg:py-18">
          <div className="max-w-190">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-normal text-white/85 backdrop-blur">
              <HugeiconsIcon
                icon={SparklesIcon}
                strokeWidth={1.8}
                className="size-4"
              />
              Your calm space is ready
            </div>

            <h2 className="max-w-180 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Reserve A Wellness Session Designed Around You
            </h2>

            <p className="mt-5 max-w-140 text-sm leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base sm:leading-7">
              Choose your treatment, preferred schedule, and let our trained
              therapists prepare a quiet restorative visit from the moment you
              arrive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm tracking-normal text-white/85 ring-1 ring-white/15 backdrop-blur">
                <HugeiconsIcon
                  icon={Leaf01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Personalized care
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm tracking-normal text-white/85 ring-1 ring-white/15 backdrop-blur">
                <HugeiconsIcon
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Easy reservation
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md lg:min-w-120">
            <div className="grid size-14 place-items-center rounded-full bg-white text-primary shadow-lg">
              <HugeiconsIcon
                icon={CalendarCheck01Icon}
                strokeWidth={1.8}
                className="size-7"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-normal text-white">
                Book your appointment
              </h3>
              <p className="mt-2 text-sm leading-6 tracking-normal text-white/70">
                Secure your slot and receive your session details.
              </p>
            </div>

            <Button
              asChild
              className="h-12 w-full justify-between rounded-full bg-white pl-5 pr-2 text-primary hover:bg-white/90"
            >
              <Link href="/booking">
                <span />
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

export default CTASection;
