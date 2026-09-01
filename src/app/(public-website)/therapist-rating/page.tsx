"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CalendarCheck01Icon,
  CheckmarkCircle02Icon,
  Leaf01Icon,
  Message01Icon,
  SparklesIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { therapists } from "@/lib/public-therapists";

const feedbackTags = [
  "Calm presence",
  "Great pressure",
  "Clear guidance",
  "Very professional",
  "Relaxing pace",
  "Helpful aftercare",
];

const ratingLabels = ["Poor", "Fair", "Good", "Great", "Excellent"];

const TherapistRatingPage = () => {
  const [selectedTherapistId, setSelectedTherapistId] = useState(
    therapists[0]?.id ?? "",
  );
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Calm presence",
    "Great pressure",
  ]);

  const selectedTherapist = useMemo(
    () =>
      therapists.find((therapist) => therapist.id === selectedTherapistId) ??
      therapists[0],
    [selectedTherapistId],
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag],
    );
  };

  return (
    <section className="pb-12 lg:pt-3">
      <div className="overflow-hidden bg-secondary px-5 pb-8 pt-28 shadow-xl sm:px-8 lg:rounded-2xl lg:px-12 lg:pb-12 lg:pt-34">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="max-w-170">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-sm font-medium tracking-normal text-primary shadow-sm">
              <HugeiconsIcon
                icon={StarIcon}
                strokeWidth={1.8}
                className="size-4"
              />
              Therapist rating
            </div>

            <h1 className="max-w-160 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
              Share How Your Therapist Cared For You
            </h1>

            <p className="mt-7 max-w-135 text-base leading-7 tracking-normal text-muted-foreground">
              Rate your spa experience, highlight what felt helpful, and help
              our wellness team keep every treatment personal, calm, and
              consistent.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full justify-between rounded-full pl-5 pr-2 text-base sm:w-auto lg:h-12 lg:text-sm"
              >
                <Link href="#rating-form">
                  Start Rating
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
                <Link href="/booking">
                  Book Again
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

          <div className="grid gap-4 sm:grid-cols-[0.78fr_1fr]">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg">
                <HugeiconsIcon
                  icon={SparklesIcon}
                  strokeWidth={1.8}
                  className="size-9"
                />
                <p className="mt-8 text-3xl font-semibold tracking-normal">
                  4.9
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-primary-foreground/72">
                  Average therapist care rating from returning spa guests.
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6 shadow-lg">
                <HugeiconsIcon
                  icon={Message01Icon}
                  strokeWidth={1.8}
                  className="size-9 text-primary"
                />
                <p className="mt-8 text-3xl font-semibold tracking-normal text-foreground">
                  899+
                </p>
                <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                  Helpful guest notes reviewed by our wellness team.
                </p>
              </div>
            </div>

            <div className="relative min-h-118 overflow-hidden rounded-2xl bg-primary shadow-2xl sm:min-h-132">
              <Image
                src={selectedTherapist.image}
                alt={selectedTherapist.imageAlt}
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,50,0)_0%,rgba(18,59,50,0.2)_48%,rgba(18,59,50,0.86)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/18 bg-white/14 p-5 text-white backdrop-blur-md">
                <p className="text-2xl font-semibold tracking-normal">
                  {selectedTherapist.name}
                </p>
                <p className="mt-2 text-sm tracking-normal text-white/72">
                  {selectedTherapist.role}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <HugeiconsIcon
                    icon={StarIcon}
                    strokeWidth={1.8}
                    className="size-4 fill-white"
                  />
                  <span className="text-sm font-medium tracking-normal">
                    {selectedTherapist.rating.toFixed(1)} from{" "}
                    {selectedTherapist.reviews} reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="rating-form" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
          <div className="max-w-150">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={Leaf01Icon}
                strokeWidth={2}
                className="size-4"
              />
              Choose therapist
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Select The Therapist You Want To Rate
            </h2>

            <p className="mt-6 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
              Your feedback helps us recognize great care and improve small
              details across every wellness session.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {therapists.map((therapist) => {
              const isSelected = therapist.id === selectedTherapistId;

              return (
                <button
                  key={therapist.id}
                  type="button"
                  onClick={() => setSelectedTherapistId(therapist.id)}
                  className={
                    isSelected
                      ? "grid gap-4 rounded-2xl border border-primary bg-secondary p-3 text-left shadow-lg"
                      : "grid gap-4 rounded-2xl border border-border bg-background p-3 text-left shadow-sm transition hover:bg-secondary"
                  }
                >
                  <div className="relative aspect-[1.5/1] overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={therapist.image}
                      alt={therapist.imageAlt}
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    {isSelected ? (
                      <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          strokeWidth={2}
                          className="size-5"
                        />
                      </span>
                    ) : null}
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="text-base font-semibold tracking-normal text-foreground">
                      {therapist.name}
                    </h3>
                    <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                      {therapist.role}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium tracking-normal text-primary">
                        {therapist.specialty}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs tracking-normal text-muted-foreground">
                        <HugeiconsIcon
                          icon={StarIcon}
                          strokeWidth={1.8}
                          className="size-3.5 fill-primary text-primary"
                        />
                        {therapist.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.42fr)] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
              <HugeiconsIcon
                icon={StarIcon}
                strokeWidth={2}
                className="size-4"
              />
              Your rating
            </div>

            <h2 className="max-w-165 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              How Did The Session Feel?
            </h2>

            <div className="mt-8 rounded-2xl bg-background p-5 shadow-lg sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                {Array.from({ length: 5 }).map((_, index) => {
                  const value = index + 1;
                  const isActive = value <= rating;

                  return (
                    <button
                      key={value}
                      type="button"
                      aria-label={`${value} star rating`}
                      onClick={() => setRating(value)}
                      className={
                        isActive
                          ? "grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm"
                          : "grid size-12 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:text-primary"
                      }
                    >
                      <HugeiconsIcon
                        icon={StarIcon}
                        strokeWidth={1.8}
                        className={isActive ? "size-6 fill-white" : "size-6"}
                      />
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 text-xl font-semibold tracking-normal text-foreground">
                {ratingLabels[rating - 1]}
              </p>
              <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                Selected rating for {selectedTherapist.name}. You can adjust
                stars before sending feedback.
              </p>

              <div className="mt-8">
                <label
                  htmlFor="feedback"
                  className="text-sm font-semibold tracking-normal text-foreground"
                >
                  Guest note
                </label>
                <textarea
                  id="feedback"
                  rows={6}
                  placeholder="Share what felt helpful, comfortable, or worth improving."
                  className="mt-3 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-6 tracking-normal text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>
          </div>

          <aside className="rounded-2xl bg-background p-5 shadow-lg sm:p-6 lg:sticky lg:top-28">
            <div className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
              <HugeiconsIcon
                icon={Message01Icon}
                strokeWidth={1.8}
                className="size-7"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-normal text-foreground">
              Feedback Summary
            </h3>

            <div className="mt-5 divide-y divide-border">
              <div className="flex items-center justify-between gap-4 py-3 first:pt-0">
                <span className="text-sm tracking-normal text-muted-foreground">
                  Therapist
                </span>
                <span className="text-sm font-semibold tracking-normal text-foreground">
                  {selectedTherapist.name}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <span className="text-sm tracking-normal text-muted-foreground">
                  Rating
                </span>
                <span className="text-sm font-semibold tracking-normal text-foreground">
                  {rating}/5
                </span>
              </div>
              <div className="py-3">
                <span className="text-sm tracking-normal text-muted-foreground">
                  Highlights
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedTags.length ? (
                    selectedTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs tracking-normal text-primary"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm tracking-normal text-muted-foreground">
                      No highlights selected
                    </span>
                  )}
                </div>
              </div>
            </div>

            <Button className="mt-6 h-12 w-full justify-between rounded-full pl-5 pr-2">
              Submit Rating
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
            </Button>
          </aside>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-180 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Quick highlights
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            What Stood Out During Your Visit?
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-210 flex-wrap justify-center gap-3">
          {feedbackTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={
                  isSelected
                    ? "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium tracking-normal text-primary-foreground shadow-sm"
                    : "inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium tracking-normal text-muted-foreground transition hover:border-primary/30 hover:text-primary"
                }
              >
                {isSelected ? (
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                ) : null}
                {tag}
              </button>
            );
          })}
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
                  icon={CalendarCheck01Icon}
                  strokeWidth={1.8}
                  className="size-4"
                />
                Return for care
              </div>

              <h2 className="max-w-175 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                Book Another Session With Your Preferred Therapist
              </h2>

              <p className="mt-5 max-w-140 text-sm leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base sm:leading-7">
                Reserve your next visit and continue care with the wellness
                team that fits your comfort.
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

export default TherapistRatingPage;
