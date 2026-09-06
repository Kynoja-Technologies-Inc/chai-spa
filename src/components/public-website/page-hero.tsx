import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";
import { Leaf01Icon, SparklesIcon } from "@hugeicons/core-free-icons";

export function PageHero({ eyebrow, title, description, icon }: { eyebrow: string; title: string; description: string; icon: ComponentProps<typeof HugeiconsIcon>["icon"] }) {
  return (
    <div className="relative mx-auto max-w-350 overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground shadow-xl sm:px-10 sm:py-14 lg:min-h-120 lg:px-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(115deg,rgba(14,48,40,0.18),transparent_48%)]" />
      <div className="absolute -left-24 -top-28 size-72 rounded-full border border-white/8" />
      <div className="absolute -left-12 -top-16 size-52 rounded-full border border-white/8" />
      <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <svg
        aria-hidden="true"
        viewBox="0 0 420 360"
        className="absolute -bottom-16 -right-10 hidden h-[115%] w-auto text-white/12 lg:block"
        fill="none"
      >
        <path d="M415 352C310 320 247 252 214 173C188 111 132 60 34 17" stroke="currentColor" strokeWidth="1.4" />
        <path d="M265 249C296 220 332 210 377 219C353 249 316 263 265 249Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M215 173C237 137 269 116 311 109C298 148 266 173 215 173Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M171 113C137 107 108 89 85 59C123 53 153 71 171 113Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M315 300C335 275 361 262 395 263C385 294 358 307 315 300Z" fill="currentColor" />
        <circle cx="214" cy="173" r="106" stroke="currentColor" strokeDasharray="3 8" />
      </svg>

      <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <div className="grid size-12 place-items-center rounded-full border border-white/18 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-sm">
            <HugeiconsIcon icon={icon} className="size-6" strokeWidth={1.8} />
          </div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">{eyebrow}</p>
          <h1 className="mt-3 max-w-200 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-160 text-sm leading-7 tracking-normal text-white/72 sm:text-base">{description}</p>
        </div>

        <div aria-hidden="true" className="relative hidden aspect-square items-center justify-center lg:flex">
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <div className="absolute inset-10 rounded-full border border-dashed border-white/18" />
          <span className="absolute left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-white/45 shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
          <span className="absolute right-11 top-10 grid size-8 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
            <HugeiconsIcon icon={SparklesIcon} className="size-3.5" />
          </span>
          <div className="relative grid size-36 place-items-center rounded-full border border-white/20 bg-white/10 shadow-[0_20px_50px_rgba(11,39,33,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md">
            <div className="grid size-24 place-items-center rounded-full bg-white text-primary shadow-xl">
              <HugeiconsIcon icon={Leaf01Icon} className="size-11" strokeWidth={1.35} />
            </div>
          </div>
          <span className="absolute bottom-6 right-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">Chai Spa · Wellness</span>
        </div>
      </div>
    </div>
  );
}
