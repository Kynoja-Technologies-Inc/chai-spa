"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconBell,
  IconChevronLeft,
  IconLogout,
  IconMenu2,
  IconSearch,
  IconX,
} from "@tabler/icons-react";

import { adminModules } from "@/lib/admin-modules";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f1e9] tracking-normal">
      {mobileOpen && (
        <button
          className="fixed inset-0 z-40 bg-[#152d27]/35 backdrop-blur-sm lg:hidden"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-70 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-21 items-center justify-between border-b border-sidebar-border px-6">
          <Link href="/admin" onClick={() => setMobileOpen(false)}>
            <Image src="/main/logo.png" alt="Chai Spa" width={112} height={38} className="h-11 w-auto object-contain" priority />
          </Link>
          <button className="grid size-9 place-items-center rounded-full hover:bg-sidebar-accent lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation">
            <IconX className="size-5" />
          </button>
        </div>

        <div className="px-4 py-5">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operations portal</p>
          <nav className="mt-3 space-y-1">
            {adminModules.map((module) => {
              const href = module.slug === "dashboard" ? "/admin" : `/admin/${module.slug}`;
              const active = pathname === href;
              const Icon = module.icon;
              return (
                <Link key={module.slug} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}>
                  <Icon className="size-4.5 shrink-0" stroke={1.8} />
                  {module.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/70 p-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">AM</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Alex Morgan</p>
              <p className="truncate text-xs text-muted-foreground">Spa administrator</p>
            </div>
            <Link href="/sign-in" aria-label="Sign out" className="text-muted-foreground hover:text-foreground"><IconLogout className="size-4" /></Link>
          </div>
        </div>
      </aside>

      <div className="lg:pl-70">
        <header className="sticky top-0 z-30 flex h-18 items-center gap-3 border-b border-border/70 bg-background/88 px-4 backdrop-blur-xl sm:px-7 lg:px-9">
          <button className="grid size-10 place-items-center rounded-full border border-border bg-card lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><IconMenu2 className="size-5" /></button>
          <div className="relative hidden max-w-100 flex-1 sm:block">
            <IconSearch className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input className="h-10 w-full rounded-full border border-border bg-muted/55 pl-10 pr-4 text-sm outline-none transition focus:border-ring focus:bg-background focus:ring-3 focus:ring-ring/15" placeholder="Search guests, bookings, payments…" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/kiosk" className="hidden rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-muted sm:inline-flex">Open kiosk</Link>
            <button className="relative grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Notifications">
              <IconBell className="size-4.5" />
              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-destructive" />
            </button>
            <Link href="/" className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Public website"><IconChevronLeft className="size-4.5" /></Link>
          </div>
        </header>
        <main className="p-4 sm:p-7 lg:p-9">{children}</main>
      </div>
    </div>
  );
}
