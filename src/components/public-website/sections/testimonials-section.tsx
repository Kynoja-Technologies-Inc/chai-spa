/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteIcon } from "@hugeicons/core-free-icons";

const testimonials = [
  {
    quote:
      "The treatments helped me release years of tension. I felt lighter, calmer, and more grounded in my daily routine.",
    name: "Michael Turner",
    role: "Business Engineer",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    quote:
      "This place became my safe space to breathe, slow the rush, and feel cared for by truly quiet professionals.",
    name: "Hannah Wilson",
    role: "Photographer",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    quote:
      "This spa has become my sanctuary. Each treatment felt intentional with support that first made me feel seen.",
    name: "Natalie Cooper",
    role: "Creative Director",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    quote:
      "My shoulder pain eased after one session, but what surprised me most was how peaceful I felt afterward.",
    name: "Daniel Harris",
    role: "Product Manager",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    quote:
      "The facial treatment was gentle, refreshing, and exactly what my skin needed before a busy week.",
    name: "Sofia Bennett",
    role: "Marketing Lead",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  },
  {
    quote:
      "Every detail felt thoughtful, from the room setup to the therapist checking pressure without interrupting rest.",
    name: "Ryan Castillo",
    role: "Architect",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    quote:
      "I booked after a stressful month and left feeling rested, clear, and ready to take care of myself again.",
    name: "Amelia Brooks",
    role: "Studio Owner",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    quote:
      "The aromatherapy session helped me slow down. It felt calm, professional, and deeply restorative.",
    name: "Marcus Lee",
    role: "Finance Consultant",
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  },
  {
    quote:
      "I appreciate how personal each visit feels. The team remembers my preferences and adjusts every session.",
    name: "Isabella Reyes",
    role: "Operations Director",
    avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    updateSelectedIndex(api);
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api, updateSelectedIndex]);

  return (
    <section id="testimonials" className="px-3 pb-16 pt-2 lg:pb-20">
      <div className="relative overflow-hidden rounded-xl bg-primary px-4 py-12 text-primary-foreground shadow-2xl sm:px-6 md:px-12 lg:px-20 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,transparent_32%,rgba(14,44,37,0.3)_100%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_65%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-[linear-gradient(0deg,rgba(14,48,40,0.42),transparent)]" />

        <div className="relative z-10 mx-auto max-w-180 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
            <span className="size-1.5 rounded-full bg-primary-foreground/80" />
            Testimonials
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            Stories That Celebrate Inner Strength
          </h2>

          <p className="mx-auto mt-5 max-w-130 text-sm leading-6 tracking-normal text-primary-foreground/70 sm:text-base">
            Warm testimonials highlighting courage, resilience, and the inner
            victories that lead to greater well-being.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="relative z-10 mt-10 lg:mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5.5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm transition hover:bg-white/8 sm:p-6">
                  <HugeiconsIcon
                    icon={QuoteIcon}
                    className="pointer-events-none absolute right-6 bottom-6 size-10 font-semibold leading-none fill-white"
                  />
                  <div className="mb-5 h-px w-16 bg-linear-to-r from-white/70 to-transparent" />

                  <blockquote className="relative text-sm leading-6 tracking-normal text-primary-foreground/85">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <figcaption className="mt-8 flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      unoptimized
                      className="size-11 rounded-full border border-white/30 object-cover shadow-lg"
                    />
                    <div>
                      <div className="text-sm font-semibold tracking-normal">
                        {testimonial.name}
                      </div>
                      <div className="mt-1 text-xs tracking-normal text-primary-foreground/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div
          className="relative z-10 mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-selected={selectedIndex === index}
              onClick={() => api?.scrollTo(index)}
              className={
                selectedIndex === index
                  ? "size-2 rounded-full bg-primary-foreground"
                  : "size-2 rounded-full bg-primary-foreground/35 transition hover:bg-primary-foreground/70"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
