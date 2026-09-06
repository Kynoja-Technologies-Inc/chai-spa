"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCalendarEvent,
  IconCheck,
  IconCreditCard,
  IconDoorEnter,
  IconLanguage,
  IconMinus,
  IconPlus,
  IconReceipt,
  IconSparkles,
  IconUser,
} from "@tabler/icons-react";

const services = [
  { id: "calm", name: "Signature Calm", duration: "90 min", price: 3800, description: "Massage, aromatherapy, warm compress, and tea" },
  { id: "glow", name: "Facial Glow Ritual", duration: "75 min", price: 3200, description: "Cleanse, hydration, scalp massage, and mist" },
  { id: "release", name: "Deep Release Massage", duration: "60 min", price: 2600, description: "Focused tension release with medium or firm pressure" },
];

const steps = ["Welcome", "Service", "Schedule", "Guest", "Payment", "Done"];

export function KioskFlow() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<"book" | "check-in" | "pay">("book");
  const [service, setService] = useState(services[0]);
  const [quantity, setQuantity] = useState(1);
  const [time, setTime] = useState("2:30 PM");
  const [payment, setPayment] = useState("Card");

  const next = () => setStep((value) => Math.min(value + 1, steps.length - 1));
  const back = () => setStep((value) => Math.max(value - 1, 0));

  function chooseMode(selected: typeof mode) {
    setMode(selected);
    setStep(selected === "book" ? 1 : selected === "check-in" ? 3 : 4);
  }

  return (
    <main className="min-h-screen bg-[#e8eee9] p-3 tracking-normal sm:p-5 lg:p-7">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-380 flex-col overflow-hidden rounded-3xl bg-background shadow-2xl sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-3.5rem)]">
        <header className="flex h-20 items-center border-b border-border px-5 sm:px-8">
          <Image src="/main/logo.png" alt="Chai Spa" width={116} height={40} className="h-11 w-auto object-contain" priority />
          <div className="ml-auto flex items-center gap-2"><button className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-semibold"><IconLanguage className="size-4" />English</button><Link href="/admin" className="hidden rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground sm:inline-flex">Staff portal</Link></div>
        </header>

        {step > 0 && step < 5 && <div className="border-b border-border px-5 py-4 sm:px-8"><div className="mx-auto flex max-w-220 items-center gap-2">{steps.slice(1,5).map((label,index) => <div key={label} className="flex flex-1 items-center gap-2"><span className={`grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${step > index + 1 ? "bg-primary text-primary-foreground" : step === index + 1 ? "bg-primary text-primary-foreground ring-4 ring-primary/10" : "bg-muted text-muted-foreground"}`}>{step > index + 1 ? <IconCheck className="size-3.5" /> : index + 1}</span><span className="hidden text-xs font-medium text-muted-foreground sm:inline">{label}</span>{index < 3 && <span className="h-px flex-1 bg-border" />}</div>)}</div></div>}

        <div className="flex flex-1 items-center justify-center p-5 sm:p-8 lg:p-12">
          {step === 0 && <div className="w-full max-w-280 text-center"><div className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-primary"><IconSparkles className="size-8" /></div><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Welcome to Chai Spa</p><h1 className="mt-3 text-4xl font-semibold sm:text-5xl">How can we care for you today?</h1><p className="mx-auto mt-4 max-w-150 text-base leading-7 text-muted-foreground">Book a walk-in treatment, check in for your appointment, or settle an outstanding balance.</p><div className="mt-10 grid gap-4 sm:grid-cols-3"><ModeButton icon={IconCalendarEvent} title="Book a treatment" detail="Browse today’s services and openings" onClick={() => chooseMode("book")} /><ModeButton icon={IconDoorEnter} title="Check in" detail="Let your therapist know you’ve arrived" onClick={() => chooseMode("check-in")} /><ModeButton icon={IconCreditCard} title="Make a payment" detail="Pay a balance or complete checkout" onClick={() => chooseMode("pay")} /></div></div>}

          {step === 1 && <div className="w-full max-w-250"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Walk-in booking</p><h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Choose your treatment</h1><p className="mt-3 text-sm text-muted-foreground">Available services for today</p></div><div className="mt-8 grid gap-4 lg:grid-cols-3">{services.map((item) => <button key={item.id} onClick={() => setService(item)} className={`rounded-2xl border p-5 text-left transition ${service.id === item.id ? "border-primary bg-accent ring-3 ring-primary/10" : "border-border bg-card hover:border-primary/40"}`}><div className="flex items-start justify-between"><div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary"><IconSparkles className="size-5" /></div>{service.id === item.id && <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground"><IconCheck className="size-3.5" /></span>}</div><h2 className="mt-5 text-lg font-semibold">{item.name}</h2><p className="mt-2 min-h-10 text-sm leading-5 text-muted-foreground">{item.description}</p><div className="mt-5 flex items-center justify-between text-sm"><span className="text-muted-foreground">{item.duration}</span><span className="font-semibold">₱{item.price.toLocaleString()}</span></div></button>)}</div><Navigation onBack={() => setStep(0)} onNext={next} /></div>}

          {step === 2 && <div className="w-full max-w-200 text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Schedule</p><h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Choose an available time</h1><div className="mx-auto mt-8 max-w-150 rounded-2xl border border-border bg-card p-5"><div className="flex items-center justify-between"><button className="grid size-9 place-items-center rounded-full border border-border"><IconArrowLeft className="size-4" /></button><div><p className="font-semibold">Sunday, September 6</p><p className="mt-1 text-xs text-muted-foreground">Today</p></div><button className="grid size-9 place-items-center rounded-full border border-border"><IconArrowRight className="size-4" /></button></div><div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">{["10:30 AM","11:30 AM","1:00 PM","2:30 PM","4:00 PM","5:30 PM"].map((slot) => <button key={slot} onClick={() => setTime(slot)} className={`rounded-full border px-3 py-3 text-sm font-semibold ${time === slot ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted"}`}>{slot}</button>)}</div></div><Navigation onBack={back} onNext={next} /></div>}

          {step === 3 && <div className="w-full max-w-160"><div className="text-center"><div className="mx-auto grid size-13 place-items-center rounded-full bg-accent text-primary"><IconUser className="size-6" /></div><h1 className="mt-5 text-3xl font-semibold">{mode === "check-in" ? "Find your appointment" : "Tell us about you"}</h1><p className="mt-3 text-sm text-muted-foreground">{mode === "check-in" ? "Enter the mobile number used for your booking." : "We’ll use these details for your reservation."}</p></div><div className="mt-8 space-y-4">{mode !== "check-in" && <label className="block text-sm font-semibold">Full name<input className="mt-2 h-12 w-full rounded-xl border border-input bg-card px-4 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" placeholder="Your full name" /></label>}<label className="block text-sm font-semibold">Mobile number<input className="mt-2 h-12 w-full rounded-xl border border-input bg-card px-4 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" placeholder="+63 9XX XXX XXXX" /></label>{mode !== "check-in" && <label className="block text-sm font-semibold">Email address <span className="font-normal text-muted-foreground">(optional)</span><input className="mt-2 h-12 w-full rounded-xl border border-input bg-card px-4 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" placeholder="you@example.com" /></label>}</div><Navigation onBack={mode === "book" ? back : () => setStep(0)} onNext={mode === "check-in" ? () => setStep(5) : next} nextLabel={mode === "check-in" ? "Check in" : "Continue"} /></div>}

          {step === 4 && <div className="grid w-full max-w-230 gap-6 lg:grid-cols-[1fr_0.8fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Secure payment</p><h1 className="mt-2 text-3xl font-semibold">Choose how to pay</h1><div className="mt-7 space-y-3">{["Card","GCash","Pay at counter"].map((item) => <button key={item} onClick={() => setPayment(item)} className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left ${payment === item ? "border-primary bg-accent" : "border-border bg-card"}`}><span className={`grid size-5 place-items-center rounded-full border ${payment === item ? "border-primary bg-primary text-primary-foreground" : "border-input"}`}>{payment === item && <IconCheck className="size-3" />}</span><IconCreditCard className="size-5 text-primary" /><span className="font-semibold">{item}</span></button>)}</div><Navigation onBack={mode === "book" ? back : () => setStep(0)} onNext={() => setStep(5)} nextLabel={payment === "Pay at counter" ? "Create payment slip" : "Pay now"} /></div><aside className="rounded-2xl bg-secondary/70 p-5"><div className="flex items-center gap-2"><IconReceipt className="size-5 text-primary" /><h2 className="font-semibold">Visit summary</h2></div><div className="mt-6 space-y-4 text-sm"><div className="flex justify-between gap-4"><span className="text-muted-foreground">{service.name}</span><span>₱{service.price.toLocaleString()}</span></div><div className="flex justify-between"><span className="text-muted-foreground">Schedule</span><span>Today · {time}</span></div><div className="flex items-center justify-between"><span className="text-muted-foreground">Guests</span><span className="flex items-center gap-2"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid size-7 place-items-center rounded-full border border-border"><IconMinus className="size-3" /></button>{quantity}<button onClick={() => setQuantity(quantity + 1)} className="grid size-7 place-items-center rounded-full border border-border"><IconPlus className="size-3" /></button></span></div><div className="border-t border-border pt-4"><div className="flex justify-between text-base font-semibold"><span>Total</span><span>₱{(service.price * quantity).toLocaleString()}</span></div></div></div></aside></div>}

          {step === 5 && <div className="w-full max-w-150 text-center"><div className="mx-auto grid size-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"><IconCheck className="size-9" /></div><p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">You’re all set</p><h1 className="mt-3 text-4xl font-semibold">{mode === "check-in" ? "Welcome, we know you’re here" : mode === "pay" ? "Payment complete" : "Your visit is reserved"}</h1><p className="mx-auto mt-4 max-w-120 text-sm leading-6 text-muted-foreground">{mode === "check-in" ? "Please relax in the lounge. A spa host will be with you shortly." : mode === "pay" ? "Your digital receipt is ready. Thank you for visiting Chai Spa." : `${service.name} is scheduled today at ${time}. Please arrive 10 minutes early.`}</p><div className="mt-7 rounded-2xl border border-border bg-card p-5 text-left"><div className="flex justify-between text-sm"><span className="text-muted-foreground">Reference</span><span className="font-semibold">CHAI-0906-184</span></div><div className="mt-3 flex justify-between text-sm"><span className="text-muted-foreground">Status</span><span className="font-semibold text-primary">Confirmed</span></div></div><button onClick={() => { setStep(0); setMode("book"); }} className="mt-7 h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground">Finish</button></div>}
        </div>

        <footer className="flex items-center justify-center border-t border-border px-5 py-4 text-xs text-muted-foreground">Need assistance? Please ask one of our spa hosts.</footer>
      </div>
    </main>
  );
}

function ModeButton({ icon: Icon, title, detail, onClick }: { icon: typeof IconCalendarEvent; title: string; detail: string; onClick: () => void }) {
  return <button onClick={onClick} className="group rounded-2xl border border-border bg-card p-6 text-left shadow-xs transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"><span className="grid size-12 place-items-center rounded-full bg-accent text-primary"><Icon className="size-6" /></span><h2 className="mt-6 text-lg font-semibold">{title}</h2><p className="mt-2 min-h-10 text-sm leading-5 text-muted-foreground">{detail}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary">Get started <IconArrowRight className="size-4 transition group-hover:translate-x-1" /></span></button>;
}

function Navigation({ onBack, onNext, nextLabel = "Continue" }: { onBack: () => void; onNext: () => void; nextLabel?: string }) {
  return <div className="mt-8 flex items-center justify-between gap-3"><button onClick={onBack} className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold"><IconArrowLeft className="size-4" />Back</button><button onClick={onNext} className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground">{nextLabel}<IconArrowRight className="size-4" /></button></div>;
}
