"use client";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Leaf01Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter();
  return (
    <section id="about" className="px-4 pb-14 pt-3 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center">
        <div className="relative min-h-72 overflow-hidden rounded-xl bg-muted sm:min-h-78 lg:min-h-92">
          <Image
            src="https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg"
            alt="Relaxing spa massage treatment"
            fill
            unoptimized
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>

        <div className="max-w-150 text-center sm:text-left lg:pl-4">
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-normal text-primary">
            <HugeiconsIcon icon={Leaf01Icon} strokeWidth={2} className="size-4" />
            About us
          </div>

          <h2 className="max-w-130 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Where Expertise Flows With Intention And Care
          </h2>

          <p className="mt-6 max-w-142 text-sm leading-6 tracking-normal text-muted-foreground sm:text-base">
            Every session is crafted with skilled hands, guided by purpose, and
            fueled by a passion for helping you achieve complete relaxation and
            clarity.
          </p>

          <Button onClick={() => router.push("/about")} className="mt-8 h-11 rounded-full pl-5 pr-2 sm:mt-10">
            About More
            <span
              data-icon="inline-end"
              className="grid size-7 place-items-center rounded-full bg-primary-foreground text-primary"
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
    </section>
  );
};

export default AboutSection;
