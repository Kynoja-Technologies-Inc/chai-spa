import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Leaf01Icon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f3f0e8] p-0 sm:p-3 lg:p-5">
      <div className="mx-auto grid min-h-screen max-w-380 overflow-hidden bg-background shadow-2xl sm:min-h-[calc(100vh-1.5rem)] sm:rounded-[1.75rem] lg:min-h-[calc(100vh-2.5rem)] lg:grid-cols-[minmax(520px,0.88fr)_1.12fr]">
        <section className="relative flex min-h-screen flex-col px-5 py-5 sm:min-h-[calc(100vh-1.5rem)] sm:px-9 sm:py-7 lg:min-h-0 lg:px-14 lg:py-9 xl:px-20">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Back to Chai Spa home">
              <Image
                src="/main/logo.png"
                alt="Chai Spa"
                width={126}
                height={42}
                priority
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium tracking-normal text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
              Back home
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-112 flex-1 items-center py-12 lg:py-10">
            {children}
          </div>

          <p className="text-center text-xs leading-5 tracking-normal text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-foreground">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <aside className="relative m-2 hidden min-h-0 overflow-hidden rounded-[1.35rem] lg:block">
          <Image
            src="/auth/spa-auth.png"
            alt="A tranquil Chai Spa treatment room"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 55vw, 0px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,54,47,0.08)_15%,rgba(20,54,47,0.2)_55%,rgba(15,47,40,0.86)_100%)]" />
          <div className="absolute right-7 top-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-medium tracking-normal text-white backdrop-blur-md">
            <HugeiconsIcon icon={ShieldCheckIcon} className="size-4" />
            Your wellness, kept private
          </div>
          <div className="absolute inset-x-0 bottom-0 p-9 xl:p-12">
            <div className="mb-5 grid size-12 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md">
              <HugeiconsIcon icon={Leaf01Icon} className="size-6" strokeWidth={1.8} />
            </div>
            <p className="max-w-140 text-3xl font-medium leading-tight tracking-normal text-white xl:text-4xl">
              Your calm begins before you arrive.
            </p>
            <p className="mt-4 max-w-120 text-sm leading-6 tracking-normal text-white/72">
              Sign in to book treatments, manage appointments, and keep your wellness journey in one quiet place.
            </p>
            <div className="mt-7 flex items-center gap-2 text-xs font-medium tracking-normal text-white/75">
              <HugeiconsIcon icon={SparklesIcon} className="size-4" />
              Thoughtful care, personalized for you
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
