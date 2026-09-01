import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { therapists } from "@/lib/public-therapists";

const TherapistSection = () => {
  return (
    <section id="therapists" className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-300">
        <div className="mx-auto mb-10 max-w-150 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Our Therapists
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Meet The Experts Behind Your Care
          </h2>

          <p className="mx-auto mt-5 max-w-115 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
            Our wellness team blends skill, calm presence, and thoughtful care
            to make every treatment feel personal.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto w-full"
        >
          <CarouselContent className="-ml-4 lg:-ml-5">
          {therapists.map((therapist) => (
            <CarouselItem
              key={therapist.name}
              className="basis-[82%] pl-4 sm:basis-1/2 lg:basis-1/5 lg:pl-5"
            >
            <article
              className="rounded-xl bg-secondary p-3 text-center shadow-sm"
            >
              <div className="relative aspect-[1.04/1] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={therapist.image}
                  alt={therapist.imageAlt}
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <div className="px-4 pb-3 pt-5">
                <h3 className="text-base font-semibold leading-tight tracking-normal text-foreground">
                  {therapist.name}
                </h3>
                <p className="mt-2 text-sm leading-tight tracking-normal text-muted-foreground">
                  {therapist.role}
                </p>
              </div>
            </article>
            </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-background sm:-left-4 sm:grid" />
          <CarouselNext className="right-2 bg-background sm:-right-4 sm:grid" />
        </Carousel>
      </div>
    </section>
  );
};

export default TherapistSection;
