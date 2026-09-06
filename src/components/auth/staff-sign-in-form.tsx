"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, FingerPrintScanIcon, ShieldCheckIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StaffSignInForm() {
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setComplete(true); }
  if (complete) return <div className="w-full text-center"><div className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-primary"><HugeiconsIcon icon={ShieldCheckIcon} className="size-8" /></div><p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Access verified</p><h1 className="mt-3 text-4xl font-semibold">Welcome to operations</h1><p className="mt-4 text-sm leading-6 text-muted-foreground">Role-based routing is represented in this frontend demo.</p><Button asChild className="mt-8 h-12 w-full rounded-full"><Link href="/admin">Open operations portal <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" /></Link></Button></div>;
  return <div className="w-full"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Staff access</p><h1 className="mt-3 text-4xl font-semibold tracking-normal">Operations sign in</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">Secure access for Chai Spa staff and management.</p><form onSubmit={submit} className="mt-8 space-y-5"><div className="space-y-2"><Label htmlFor="staff-email">Work email</Label><Input id="staff-email" type="email" required placeholder="name@chaispa.ph" className="h-12 rounded-xl bg-white px-4" /></div><div className="space-y-2"><div className="flex justify-between"><Label htmlFor="staff-password">Password</Label><Link href="/forgot-password" className="text-xs font-semibold text-primary">Forgot password?</Link></div><Input id="staff-password" type="password" required minLength={8} placeholder="Enter your password" className="h-12 rounded-xl bg-white px-4" /></div>{message && <p className="rounded-xl bg-accent px-4 py-3 text-sm text-accent-foreground">{message}</p>}<Button type="submit" className="h-12 w-full rounded-full">Sign in securely <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" /></Button><Button type="button" variant="outline" onClick={() => setMessage("Staff passkey authentication is ready for backend connection.")} className="h-12 w-full rounded-full bg-white"><HugeiconsIcon icon={FingerPrintScanIcon} className="size-5 text-primary" />Use staff passkey</Button></form><p className="mt-7 text-center text-sm text-muted-foreground">Customer? <Link href="/sign-in" className="font-semibold text-primary">Use customer sign in</Link></p></div>;
}
