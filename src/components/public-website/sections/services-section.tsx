import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

import { services } from "@/lib/public-services";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-180 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Featured Services
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Healing Treatments We Recommend
          </h2>

          <p className="mx-auto mt-5 max-w-130 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
            Step into comfort with our selected treatments made to calm the body
            and refresh the soul.
          </p>
        </div>

        {/* Services */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group relative h-80 sm:h-71.25">
              {/* Actual card */}
              <div className="service-card-shape overflow-hidden bg-secondary">
                <div className="relative h-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    unoptimized
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-secondary" />
                </div>
              </div>

              {/* Arrow */}
              <a
                href={`/service/${service.id}`}
                aria-label={`View ${service.title}`}
                className="
                  absolute
                  right-0
                  top-0
                  z-20
                  grid
                  size-11
                  place-items-center
                  rounded-full
                  bg-primary
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-primary/90
                "
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="
                    size-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                  px-6
                  pb-5
                  pt-6
                "
              >
                {/* Icon */}
                <div
                  className="
                    grid
                    size-13
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-background/95
                    text-primary
                    shadow-sm
                  "
                >
                  <HugeiconsIcon
                    icon={service.icon}
                    strokeWidth={1.8}
                    className="size-7"
                  />
                </div>

                {/* Service info */}
                <div className="mt-auto">
                  <h3
                    className="
                      text-base
                      font-bold
                      tracking-normal
                      text-foreground
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[13px]
                      tracking-normal
                      text-foreground/90
                    "
                  >
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
