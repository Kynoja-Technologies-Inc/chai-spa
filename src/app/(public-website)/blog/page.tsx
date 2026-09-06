import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Calendar03Icon, Note01Icon } from "@hugeicons/core-free-icons";
import { PageHero } from "@/components/public-website/page-hero";

export const metadata: Metadata = { title: "Wellness journal", description: "Practical wellness guides and thoughtful care notes from Chai Spa." };

const posts = [
  { slug: "massage-and-deep-rest", title: "How Massage Supports Deep Rest", category: "Massage", date: "May 12, 2026", excerpt: "How intentional pressure, calm pacing, and quiet recovery help your body release stress.", image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg" },
  { slug: "choosing-the-right-facial", title: "Choosing The Right Facial For Your Skin", category: "Skin care", date: "May 24, 2026", excerpt: "A simple guide to hydration, glow treatments, and gentle care for sensitive skin.", image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg" },
  { slug: "wellness-rituals-between-visits", title: "Small Wellness Rituals Between Visits", category: "Everyday wellness", date: "June 2, 2026", excerpt: "Build a calmer week with breathing, warm baths, stretching, and mindful rest at home.", image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg" },
  { slug: "benefits-of-aromatherapy", title: "A Gentle Introduction To Aromatherapy", category: "Relaxation", date: "June 18, 2026", excerpt: "Learn how thoughtfully selected aromas can support relaxation without overwhelming the senses.", image: "https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg" },
  { slug: "prepare-for-your-first-massage", title: "Preparing For Your First Massage", category: "Spa guide", date: "July 5, 2026", excerpt: "What to wear, when to arrive, and how to communicate your pressure preferences with ease.", image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg" },
  { slug: "why-consistent-rest-matters", title: "Why Consistent Rest Matters", category: "Mindful living", date: "July 22, 2026", excerpt: "Small, repeatable pauses can help the body recover more deeply than occasional extremes.", image: "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg" },
];

export default function BlogPage() {
  return <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36"><PageHero eyebrow="Chai Spa journal" title="Wellness notes for everyday calm" description="Simple guides, therapist insights, and gentle practices that help restorative care continue beyond your appointment." icon={Note01Icon} /><div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <article key={post.slug} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-xs"><div className="relative h-58 overflow-hidden bg-secondary"><Image src={post.image} alt="" fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" /></div><div className="p-5"><div className="flex items-center justify-between gap-3 text-xs text-muted-foreground"><span className="font-semibold text-primary">{post.category}</span><span className="inline-flex items-center gap-1.5"><HugeiconsIcon icon={Calendar03Icon} className="size-3.5" />{post.date}</span></div><h2 className="mt-4 text-xl font-semibold leading-tight">{post.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read article <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 transition group-hover:translate-x-1" /></Link></div></article>)}</div></section>;
}
