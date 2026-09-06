"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  FingerPrintScanIcon,
  Mail01Icon,
  ViewIcon,
  ViewOffSlashIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppleIcon, GoogleIcon } from "./social-icons";

type AuthMode = "sign-in" | "sign-up" | "forgot-password" | "reset-password";

const copy = {
  "sign-in": {
    eyebrow: "Welcome back",
    title: "Return to your calm",
    description: "Sign in to manage your appointments and wellness journey.",
  },
  "sign-up": {
    eyebrow: "Join Chai Spa",
    title: "Create your account",
    description: "Save your preferences and make every visit feel effortless.",
  },
  "forgot-password": {
    eyebrow: "Account recovery",
    title: "Forgot your password?",
    description: "Enter your email and we’ll send you a secure reset link.",
  },
  "reset-password": {
    eyebrow: "Almost there",
    title: "Choose a new password",
    description: "Create a strong password you haven’t used before.",
  },
};

export function AuthForm({ mode }: { mode: AuthMode }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const isSignIn = mode === "sign-in";
  const isSignUp = mode === "sign-up";
  const isForgot = mode === "forgot-password";
  const isReset = mode === "reset-password";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if ((isSignUp || isReset) && form.get("password") !== form.get("confirmPassword")) {
      setMessage("Your passwords don’t match. Please try again.");
      return;
    }
    setMessage("");
    setComplete(true);
  }

  function demoAction(label: string) {
    setMessage(`${label} is ready for backend connection.`);
  }

  if (complete) {
    return (
      <div className="w-full text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-primary">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-8" strokeWidth={1.8} />
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">All set</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
          {isForgot ? "Check your inbox" : isReset ? "Password updated" : isSignUp ? "Welcome to Chai Spa" : "Welcome back"}
        </h1>
        <p className="mx-auto mt-4 max-w-90 text-sm leading-6 tracking-normal text-muted-foreground">
          {isForgot
            ? "If an account exists for that email, a reset link is on its way."
            : "This frontend demo is complete and ready to connect to your authentication service."}
        </p>
        <Button asChild className="mt-8 h-12 w-full rounded-full text-sm">
          <Link href={isSignIn || isSignUp ? "/" : "/sign-in"}>
            {isSignIn || isSignUp ? "Continue to Chai Spa" : "Back to sign in"}
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{copy[mode].eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-[2.5rem]">{copy[mode].title}</h1>
      <p className="mt-3 text-sm leading-6 tracking-normal text-muted-foreground">{copy[mode].description}</p>

      {(isSignIn || isSignUp) && (
        <>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button type="button" variant="outline" className="h-12 rounded-full bg-white" onClick={() => demoAction("Google sign-in")}>
              <GoogleIcon className="size-5" /> Google
            </Button>
            <Button type="button" variant="outline" className="h-12 rounded-full bg-white" onClick={() => demoAction("Apple sign-in")}>
              <AppleIcon className="size-5" /> Apple
            </Button>
          </div>
          <Button type="button" variant="outline" className="mt-3 h-12 w-full rounded-full bg-white" onClick={() => demoAction("Passkey sign-in")}>
            <HugeiconsIcon icon={FingerPrintScanIcon} className="size-5 text-primary" strokeWidth={1.8} />
            Continue with a passkey
          </Button>
          <div className="my-7 flex items-center gap-4 text-xs tracking-normal text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            or continue with email
          </div>
        </>
      )}

      <form onSubmit={submit} className={isForgot || isReset ? "mt-8" : ""}>
        <div className="space-y-5">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" autoComplete="name" placeholder="Your full name" required className="h-12 rounded-xl bg-white px-4 tracking-normal" />
            </div>
          )}
          {!isReset && (
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="h-12 rounded-xl bg-white px-4 pr-11 tracking-normal" />
                <HugeiconsIcon icon={Mail01Icon} className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          )}
          {!isForgot && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{isReset ? "New password" : "Password"}</Label>
                {isSignIn && <Link href="/forgot-password" className="text-xs font-medium tracking-normal text-primary hover:underline">Forgot password?</Link>}
              </div>
              <div className="relative">
                <Input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete={isSignIn ? "current-password" : "new-password"} placeholder="At least 8 characters" minLength={8} required className="h-12 rounded-xl bg-white px-4 pr-11 tracking-normal" />
                <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground">
                  <HugeiconsIcon icon={showPassword ? ViewOffSlashIcon : ViewIcon} className="size-4" />
                </button>
              </div>
            </div>
          )}
          {(isSignUp || isReset) && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <div className="relative">
                <Input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} autoComplete="new-password" placeholder="Repeat your password" minLength={8} required className="h-12 rounded-xl bg-white px-4 pr-11 tracking-normal" />
                <button type="button" onClick={() => setShowConfirmPassword((value) => !value)} aria-label={showConfirmPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground">
                  <HugeiconsIcon icon={showConfirmPassword ? ViewOffSlashIcon : ViewIcon} className="size-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {message && <p role="status" className="mt-4 rounded-xl bg-accent px-4 py-3 text-sm tracking-normal text-accent-foreground">{message}</p>}

        <Button type="submit" className="mt-6 h-12 w-full rounded-full text-sm">
          {isSignIn ? "Sign in" : isSignUp ? "Create account" : isForgot ? "Send reset link" : "Update password"}
          <HugeiconsIcon icon={ArrowRight01Icon} className="ml-1 size-4" />
        </Button>
      </form>

      <p className="mt-7 text-center text-sm tracking-normal text-muted-foreground">
        {isSignIn ? "New to Chai Spa?" : isSignUp ? "Already have an account?" : "Remembered your password?"}{" "}
        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="font-semibold text-primary hover:underline">
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
}
