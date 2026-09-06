"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IconBell,
  IconCalendarEvent,
  IconChevronRight,
  IconCreditCard,
  IconCrown,
  IconGift,
  IconHeart,
  IconHome,
  IconLogout,
  IconPlus,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

const tabs = [
  { id: "profile", label: "Profile", icon: IconUser },
  { id: "appointments", label: "Appointments", icon: IconCalendarEvent },
  { id: "membership", label: "Membership", icon: IconCrown },
  { id: "rewards", label: "Rewards", icon: IconGift },
  { id: "payments", label: "Payment methods", icon: IconCreditCard },
  { id: "preferences", label: "Preferences", icon: IconSettings },
];

const appointments = [
  { date: "Sep 12", time: "2:30 PM", service: "Signature Calm Bundle", therapist: "Maya Thompson", status: "Confirmed", price: "₱3,800" },
  { date: "Aug 28", time: "11:00 AM", service: "Facial Glow Ritual", therapist: "Hana Kim", status: "Completed", price: "₱3,200" },
  { date: "Aug 09", time: "4:00 PM", service: "Deep Release Massage", therapist: "Clara Jensen", status: "Completed", price: "₱2,600" },
];

export function AccountPortal() {
  const [active, setActive] = useState("profile");
  const [saved, setSaved] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);

  function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved("Your changes were saved in this frontend demo.");
  }

  return (
    <main className="min-h-screen bg-[#f4f1e9] p-3 tracking-normal sm:p-5">
      <div className="mx-auto min-h-[calc(100vh-1.5rem)] max-w-380 overflow-hidden rounded-3xl border border-border bg-background shadow-xl sm:min-h-[calc(100vh-2.5rem)]">
        <header className="flex h-20 items-center border-b border-border px-5 sm:px-8">
          <Link href="/"><Image src="/main/logo.png" alt="Chai Spa" width={116} height={40} className="h-11 w-auto object-contain" priority /></Link>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative grid size-10 place-items-center rounded-full border border-border text-muted-foreground hover:bg-muted" aria-label="Notifications"><IconBell className="size-4.5" /><span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-primary" /></button>
            <Link href="/" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground hover:bg-muted" aria-label="Home"><IconHome className="size-4.5" /></Link>
          </div>
        </header>

        <div className="grid lg:grid-cols-[260px_1fr]">
          <aside className="border-b border-border bg-secondary/35 p-4 lg:min-h-[calc(100vh-7.5rem)] lg:border-b-0 lg:border-r lg:p-5">
            <div className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-xs">
              <div className="grid size-11 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">MS</div>
              <div className="min-w-0"><p className="truncate text-sm font-semibold">Mika Santos</p><p className="truncate text-xs text-muted-foreground">Serenity member</p></div>
            </div>
            <nav className="mt-4 flex gap-1 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
              {tabs.map((tab) => { const Icon = tab.icon; return <button key={tab.id} onClick={() => { setActive(tab.id); setSaved(""); }} className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition lg:w-full ${active === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}><Icon className="size-4.5" />{tab.label}</button>; })}
            </nav>
            <Link href="/sign-in" className="mt-5 hidden items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground lg:flex"><IconLogout className="size-4.5" />Sign out</Link>
          </aside>

          <section className="p-5 sm:p-8 lg:p-10">
            {saved && <div className="mb-5 rounded-xl border border-primary/15 bg-accent px-4 py-3 text-sm text-accent-foreground">{saved}</div>}

            {active === "profile" && (
              <div className="max-w-200">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Account services</p><h1 className="mt-2 text-3xl font-semibold">Personal details</h1><p className="mt-2 text-sm text-muted-foreground">Keep your contact and wellness information current.</p>
                <form onSubmit={save} className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[['First name','Mika'],['Last name','Santos'],['Email address','mika.santos@example.com'],['Mobile number','+63 917 555 0182'],['Birthday','1993-07-18'],['Emergency contact','Ana Santos · +63 918 555 0144']].map(([label,value]) => <label key={label} className="text-sm font-semibold">{label}<input defaultValue={value} className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" /></label>)}
                  <label className="text-sm font-semibold sm:col-span-2">Wellness notes<textarea defaultValue="Prefer medium pressure. Sensitive to strong floral fragrances." className="mt-2 min-h-28 w-full resize-none rounded-xl border border-input bg-card p-3 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" /></label>
                  <button className="h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground sm:w-fit">Save changes</button>
                </form>
              </div>
            )}

            {active === "appointments" && (
              <div><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Booking history</p><h1 className="mt-2 text-3xl font-semibold">Your appointments</h1></div><Link href="/booking" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"><IconPlus className="size-4" />Book a treatment</Link></div>
                <div className="mt-8 space-y-3">{appointments.map((item,index) => <article key={item.date} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center"><div className={`grid size-14 shrink-0 place-items-center rounded-xl text-center ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted"}`}><span className="text-[10px] font-semibold uppercase">{item.date.split(' ')[0]}</span><span className="-mt-2 text-lg font-semibold">{item.date.split(' ')[1]}</span></div><div className="min-w-0 flex-1"><h2 className="font-semibold">{item.service}</h2><p className="mt-1 text-sm text-muted-foreground">{item.time} · with {item.therapist}</p></div><div className="flex items-center justify-between gap-5 sm:block sm:text-right"><span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${index === 0 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{item.status}</span><p className="mt-1 text-sm font-semibold">{item.price}</p></div><IconChevronRight className="hidden size-4 text-muted-foreground sm:block" /></article>)}</div>
              </div>
            )}

            {active === "membership" && (
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Membership</p><h1 className="mt-2 text-3xl font-semibold">Your Serenity plan</h1><div className="mt-8 overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-xl sm:p-8"><div className="flex items-start justify-between"><div><IconCrown className="size-7" /><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Chai Spa Serenity</p><p className="mt-2 text-3xl font-semibold">Premium monthly care</p></div><span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">Active</span></div><div className="mt-8 grid gap-3 sm:grid-cols-3">{[['2 of 3','Treatments used'],['20%','Member savings'],['Sep 18','Next renewal']].map(([value,label]) => <div key={label} className="rounded-2xl bg-white/10 p-4"><p className="text-xl font-semibold">{value}</p><p className="mt-1 text-xs text-white/65">{label}</p></div>)}</div></div><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-5"><h2 className="font-semibold">Included this month</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground"><li>• Three 60-minute signature treatments</li><li>• Complimentary aromatherapy upgrade</li><li>• Priority weekend booking</li></ul></div><div className="rounded-2xl border border-border bg-card p-5"><h2 className="font-semibold">Billing</h2><p className="mt-4 text-2xl font-semibold">₱2,990 <span className="text-sm font-normal text-muted-foreground">/ month</span></p><p className="mt-2 text-sm text-muted-foreground">Visa ending in 4821</p><button onClick={() => setSaved("Membership management is ready for backend connection.")} className="mt-5 rounded-full border border-border px-4 py-2 text-xs font-semibold">Manage membership</button></div></div></div>
            )}

            {active === "rewards" && (
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Loyalty rewards</p><h1 className="mt-2 text-3xl font-semibold">4,820 calm points</h1><p className="mt-2 text-sm text-muted-foreground">You’re 180 points away from a complimentary aromatherapy upgrade.</p><div className="mt-7 h-3 overflow-hidden rounded-full bg-muted"><div className="h-full w-[82%] rounded-full bg-primary" /></div><div className="mt-8 grid gap-4 md:grid-cols-3">{[['Free aromatherapy','1,000 points'],['₱500 spa credit','3,500 points'],['60-min massage','6,000 points']].map(([title,points],index) => <article key={title} className="rounded-2xl border border-border bg-card p-5"><div className="grid size-10 place-items-center rounded-full bg-accent text-primary"><IconGift className="size-5" /></div><h2 className="mt-5 font-semibold">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{points}</p><button onClick={() => setSaved(index < 2 ? `${title} redeemed in this frontend demo.` : "You need more points for this reward.")} className="mt-5 w-full rounded-full border border-border py-2 text-xs font-semibold hover:bg-muted">Redeem</button></article>)}</div></div>
            )}

            {active === "payments" && (
              <div><div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Wallet</p><h1 className="mt-2 text-3xl font-semibold">Payment methods</h1></div><button onClick={() => setSaved("Add payment method is ready for backend connection.")} className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"><IconPlus className="size-5" /></button></div><div className="mt-8 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-[#243b35] p-6 text-white shadow-lg"><div className="flex items-center justify-between"><span className="text-sm font-semibold">VISA</span><span className="rounded-full bg-white/10 px-2 py-1 text-[10px]">Default</span></div><p className="mt-12 text-lg tracking-[0.2em]">•••• •••• •••• 4821</p><p className="mt-5 text-xs text-white/60">MIKA SANTOS · 09/29</p></div><button onClick={() => setSaved("Add payment method is ready for backend connection.")} className="grid min-h-48 place-items-center rounded-2xl border border-dashed border-border bg-card text-sm font-semibold text-muted-foreground hover:bg-muted"><span className="flex flex-col items-center gap-3"><IconPlus className="size-6" />Add payment method</span></button></div></div>
            )}

            {active === "preferences" && (
              <div className="max-w-200"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Personalization</p><h1 className="mt-2 text-3xl font-semibold">Preferences</h1><div className="mt-8 space-y-4"><Preference icon={IconHeart} title="Treatment preference" description="Medium pressure · Unscented or citrus oils" action="Edit" onClick={() => setSaved("Treatment preferences are ready to edit.")} /><Preference icon={IconBell} title="Email notifications" description="Booking updates, reminders, and occasional offers" checked={emailNotifications} onToggle={() => setEmailNotifications((value) => !value)} /><Preference icon={IconBell} title="SMS reminders" description="Appointment reminders sent 24 hours before" checked={smsNotifications} onToggle={() => setSmsNotifications((value) => !value)} /></div><Link href="/policies" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">View spa policies <IconChevronRight className="size-4" /></Link></div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function Preference({ icon: Icon, title, description, action, checked, onClick, onToggle }: { icon: typeof IconHeart; title: string; description: string; action?: string; checked?: boolean; onClick?: () => void; onToggle?: () => void }) {
  return <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"><div className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-primary"><Icon className="size-5" /></div><div className="min-w-0 flex-1"><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>{action ? <button onClick={onClick} className="rounded-full border border-border px-4 py-2 text-xs font-semibold">{action}</button> : <button onClick={onToggle} role="switch" aria-checked={checked} className={`relative h-6 w-11 rounded-full transition ${checked ? "bg-primary" : "bg-muted"}`}><span className={`absolute top-1 size-4 rounded-full bg-white shadow transition ${checked ? "left-6" : "left-1"}`} /></button>}</div>;
}
