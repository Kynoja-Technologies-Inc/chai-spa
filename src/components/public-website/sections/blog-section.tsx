import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Calendar03Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

const posts = [
  {
    title: "How Massage Supports Deep Rest",
    excerpt:
      "Learn how intentional pressure, calm pacing, and quiet recovery help your body release stress.",
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
    imageAlt: "Relaxing spa massage room",
  },
  {
    title: "Choosing The Right Facial For Your Skin",
    excerpt:
      "A simple guide to hydration, glow treatments, and gentle care for sensitive skin.",
    date: "May 24, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg",
    imageAlt: "Facial treatment with spa skincare",
  },
  {
    title: "Small Wellness Rituals Between Visits",
    excerpt:
      "Build a calmer week with breathing, warm baths, stretching, and mindful rest at home.",
    date: "June 2, 2026",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    imageAlt: "Wellness ritual with towel and spa items",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
        <div className="max-w-120 text-center sm:text-left">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Blog
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Wellness Notes For Everyday Calm
          </h2>

          <p className="mx-auto mt-5 max-w-95 text-sm leading-6 tracking-normal text-muted-foreground sm:mx-0">
            Explore simple guides, therapist insights, and spa care tips that
            help you carry a sense of ease beyond your appointment.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group relative h-88 sm:h-86">
              <div className="service-card-shape overflow-hidden bg-secondary">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  unoptimized
                  className="object-cover opacity-75 transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/5 via-secondary/35 to-secondary" />
              </div>

              <a
                href="#blog"
                aria-label={`Read ${post.title}`}
                className="absolute right-0 top-0 z-20 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="size-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>

              <div className="relative z-10 flex h-full flex-col px-6 pb-5 pt-6">
                <div className="grid size-13 shrink-0 place-items-center rounded-full bg-background/95 text-primary shadow-sm">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    strokeWidth={1.8}
                    className="size-7"
                  />
                </div>

                <div className="mt-auto">
                  <div className="mb-3 flex flex-wrap gap-3 text-xs font-medium tracking-normal text-foreground/75">
                    <span className="inline-flex items-center gap-1.5">
                      <HugeiconsIcon icon={Calendar03Icon} className="size-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <HugeiconsIcon icon={Clock01Icon} className="size-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-normal text-foreground">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[13px] tracking-normal line-clamp-2 text-foreground/90">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
