import type { Metadata } from "next";
import Image from "next/image";
import { Camera01Icon } from "@hugeicons/core-free-icons";
import { PageHero } from "@/components/public-website/page-hero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the tranquil rooms, treatments, and details of Chai Spa.",
};

const images = [
  [
    "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg",
    "A warm and tranquil spa treatment room",
  ],
  [
    "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    "Relaxing full-body massage treatment",
  ],
  [
    "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
    "Gentle facial wellness treatment",
  ],
  [
    "https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg",
    "Aromatic oils prepared for therapy",
  ],
  [
    "https://images.pexels.com/photos/5480192/pexels-photo-5480192.jpeg",
    "Herbal body care and folded towels",
  ],
  [
    "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg",
    "Refreshing skincare ritual",
  ],
  [
    "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
    "Quiet massage room prepared for a guest",
  ],
  [
    "https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg",
    "Peaceful spa interior with warm details",
  ],
];

export default function GalleryPage() {
  return (
    <section className="px-4 pb-20 pt-32 lg:px-15 lg:pt-36">
      <PageHero
        eyebrow="Inside Chai Spa"
        title="Quiet spaces, thoughtful rituals"
        description="A glimpse into the warm rooms, restorative treatments, and considered details that shape every Chai Spa visit."
        icon={Camera01Icon}
      />
      <div className="mt-6 grid auto-rows-60 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map(([src, alt], index) => (
          <figure
            key={src}
            className={`group relative overflow-hidden rounded-2xl bg-secondary ${index === 0 || index === 5 ? "sm:col-span-2 lg:row-span-2" : ""}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium tracking-normal text-white opacity-0 transition group-hover:opacity-100">
              {alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
