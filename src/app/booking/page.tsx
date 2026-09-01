"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Calendar03Icon,
  CreditCardIcon,
  Home03Icon,
  Location05Icon,
  StarIcon,
  Wallet03Icon,
} from "@hugeicons/core-free-icons";

import {
  CreditCard,
  CreditCardBack,
  CreditCardFlipper,
  CreditCardFront,
} from "@/components/kibo-ui/credit-card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

const therapists = [
  {
    id: "clara",
    name: "Clara Jensen",
    specialty: "Wellness coordination and deep relaxation",
    rating: "4.96",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg",
    available: true,
  },
  {
    id: "maya",
    name: "Maya Thompson",
    specialty: "Massage therapy and tension release",
    rating: "4.98",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    available: true,
  },
  {
    id: "hana",
    name: "Hana Kim",
    specialty: "Facial care and calming skin treatments",
    rating: "4.95",
    image: "https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg",
    available: false,
  },
];

const servicePackages = [
  {
    id: "signature",
    title: "Signature Calm Bundle",
    duration: "90 min",
    price: 3800,
    description: "Full-body massage, aromatherapy, warm compress, and tea.",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
  },
  {
    id: "glow",
    title: "Facial Glow Ritual",
    duration: "75 min",
    price: 3200,
    description: "Gentle cleanse, facial hydration, scalp massage, and mist.",
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
  },
  {
    id: "renew",
    title: "Body Renew Escape",
    duration: "120 min",
    price: 5200,
    description:
      "Body scrub, herbal wrap, relaxation massage, and recovery tea.",
    image: "https://images.pexels.com/photos/5480192/pexels-photo-5480192.jpeg",
  },
];

const formatPeso = (value: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(value);

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);
  const [selectedTherapist, setSelectedTherapist] = useState(therapists[0].id);
  const [noPreferredTherapist, setNoPreferredTherapist] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(servicePackages[0].id);
  const [visitType, setVisitType] = useState("onsite");
  const [paymentType, setPaymentType] = useState("deposit");
  const [couponCode, setCouponCode] = useState("");

  const activePackage =
    servicePackages.find((service) => service.id === selectedPackage) ??
    servicePackages[0];

  const homeServiceFee = visitType === "home" ? 650 : 0;
  const couponDiscount = couponCode.trim().toUpperCase() === "CHAI10" ? 380 : 0;
  const total = activePackage.price + homeServiceFee - couponDiscount;
  const dueNow = paymentType === "full" ? total : 1000;

  const formattedDate = useMemo(() => {
    if (!selectedDate) return "Select a date";

    return selectedDate.toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-background px-4 pb-16 lg:px-10 pt-10">
      <div>
        <div className="mb-8 flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            size="icon-lg"
            className="rounded-full"
          >
            <Link href="/" aria-label="Back to home">
              <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
            </Link>
          </Button>
          <div>
            <div className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Chai Spa Booking
            </div>
            <h1 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl lg:text-5xl">
              Confirm Your Wellness Visit
            </h1>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:items-start">
          <div className="space-y-6">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-accent text-primary">
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-normal">
                    Choose date and time
                  </h2>
                  <p className="text-sm tracking-normal text-muted-foreground">
                    Pick a schedule that gives you room to arrive calmly.
                  </p>
                </div>
              </div>

              <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(200px,320px)_minmax(0,1fr)]">
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="mx-auto [--cell-size:--spacing(10)]"
                    disabled={{ before: new Date() }}
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-3 text-sm font-semibold tracking-normal">
                    Available time
                  </div>
                  <Carousel
                    opts={{ align: "start", dragFree: true }}
                    className="min-w-0 max-w-full overflow-hidden px-4"
                  >
                    <CarouselContent className="-ml-2">
                      {timeSlots.map((time) => (
                        <CarouselItem
                          key={time}
                          className="basis-1/2 pl-2 sm:basis-1/3 2xl:basis-1/4"
                        >
                          <Button
                            type="button"
                            variant={
                              selectedTime === time ? "default" : "outline"
                            }
                            className="h-11 w-full rounded-full"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 bg-background shadow-sm" />
                    <CarouselNext className="right-0 bg-background shadow-sm" />
                  </Carousel>

                  <div className="mt-6 text-sm font-semibold tracking-normal">
                    Preferred therapist
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/60 px-4 py-3">
                    <div>
                      <div className="text-sm font-medium tracking-normal">
                        Assign any available therapist
                      </div>
                      <p className="mt-1 text-xs leading-5 tracking-normal text-muted-foreground">
                        Turn this on if the client has no preferred therapist.
                      </p>
                    </div>
                    <Switch
                      checked={noPreferredTherapist}
                      onCheckedChange={(checked) => {
                        setNoPreferredTherapist(checked);
                      }}
                      aria-label="Assign any available therapist"
                    />
                  </div>
                  <RadioGroup
                    value={noPreferredTherapist ? "" : selectedTherapist}
                    onValueChange={setSelectedTherapist}
                    className={
                      noPreferredTherapist ? "mt-3 opacity-45" : "mt-3"
                    }
                    aria-disabled={noPreferredTherapist}
                  >
                    <Carousel
                      opts={{ align: "start", dragFree: true }}
                      className="min-w-0 max-w-full overflow-hidden px-4"
                    >
                      <CarouselContent className="-ml-3">
                        {therapists.map((therapist) => (
                          <CarouselItem
                            key={therapist.id}
                            className="basis-full pl-3 lg:basis-1/2"
                          >
                            <label
                              className={
                                noPreferredTherapist
                                  ? "flex h-full min-w-0 cursor-not-allowed flex-col gap-3 rounded-xl border border-border bg-background p-3 pt-0! transition has-data-[state=checked]:border-primary has-data-[state=checked]:bg-accent"
                                  : "flex h-full min-w-0 cursor-pointer flex-col gap-3 rounded-xl border border-border bg-background p-3 pt-0! transition hover:border-primary/50 has-data-[state=checked]:border-primary has-data-[state=checked]:bg-accent"
                              }
                            >
                              <RadioGroupItem
                                value={therapist.id}
                                className="sr-only"
                                disabled={noPreferredTherapist}
                              />
                              <Avatar>
                                <AvatarImage
                                  src={therapist.image}
                                  alt={therapist.name}
                                />
                                <AvatarFallback>
                                  {therapist.name}
                                </AvatarFallback>
                              </Avatar>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-semibold tracking-normal">
                                  {therapist.name}
                                </span>
                                <span
                                  className={
                                    therapist.available
                                      ? "mt-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium tracking-normal text-primary"
                                      : "mt-1 inline-flex rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium tracking-normal text-muted-foreground"
                                  }
                                >
                                  {therapist.available
                                    ? "Available"
                                    : "Booked today"}
                                </span>
                                <span className="mt-1 line-clamp-1 text-xs tracking-normal text-muted-foreground">
                                  {therapist.specialty}
                                </span>
                                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium tracking-normal text-yellow-600">
                                  <HugeiconsIcon
                                    icon={StarIcon}
                                    className="size-3.5 fill-yellow-600 text-yellow-600"
                                  />
                                  {therapist.rating}
                                </span>
                              </span>
                            </label>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 bg-background shadow-sm" />
                      <CarouselNext className="right-0 bg-background shadow-sm" />
                    </Carousel>
                  </RadioGroup>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold tracking-normal">
                Visit preference
              </h2>
              <RadioGroup
                value={visitType}
                onValueChange={setVisitType}
                className="mt-5 grid gap-3 sm:grid-cols-2"
              >
                <label className="flex cursor-pointer gap-4 rounded-xl border border-border bg-background p-4 transition has-data-[state=checked]:border-primary has-data-[state=checked]:bg-accent">
                  <RadioGroupItem value="onsite" className="mt-1" />
                  <span>
                    <span className="flex items-center gap-2 font-semibold tracking-normal">
                      <HugeiconsIcon icon={Location05Icon} className="size-4" />
                      On-site spa visit
                    </span>
                    <span className="mt-2 block text-sm leading-6 tracking-normal text-muted-foreground">
                      Arrive at Chai Spa and enjoy full access to private rooms.
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer gap-4 rounded-xl border border-border bg-background p-4 transition has-data-[state=checked]:border-primary has-data-[state=checked]:bg-accent">
                  <RadioGroupItem value="home" className="mt-1" />
                  <span>
                    <span className="flex items-center gap-2 font-semibold tracking-normal">
                      <HugeiconsIcon icon={Home03Icon} className="size-4" />
                      Home service
                    </span>
                    <span className="mt-2 block text-sm leading-6 tracking-normal text-muted-foreground">
                      Therapist comes to you. Includes travel setup fee.
                    </span>
                  </span>
                </label>
              </RadioGroup>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold tracking-normal">
                Choose how to pay
              </h2>
              <RadioGroup
                value={paymentType}
                onValueChange={setPaymentType}
                className="mt-5 grid gap-3"
              >
                <label className="flex cursor-pointer gap-4 rounded-xl border border-border bg-background p-4 transition has-data-[state=checked]:border-primary has-data-[state=checked]:bg-accent">
                  <RadioGroupItem value="full" className="mt-1" />
                  <span className="flex-1">
                    <span className="flex items-center gap-2 font-semibold tracking-normal">
                      <HugeiconsIcon icon={CreditCardIcon} className="size-4" />
                      Pay in full
                    </span>
                    <span className="mt-2 block text-sm leading-6 tracking-normal text-muted-foreground">
                      Pay {formatPeso(total)} now and finish checkout today.
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer gap-4 rounded-xl border border-border bg-background p-4 transition has-data-[state=checked]:border-primary has-data-[state=checked]:bg-accent">
                  <RadioGroupItem value="deposit" className="mt-1" />
                  <span className="flex-1">
                    <span className="flex items-center gap-2 font-semibold tracking-normal">
                      <HugeiconsIcon icon={Wallet03Icon} className="size-4" />
                      Pay deposit
                    </span>
                    <span className="mt-2 block text-sm leading-6 tracking-normal text-muted-foreground">
                      Pay {formatPeso(1000)} reservation fee today. Settle the
                      remaining balance during your visit.
                    </span>
                  </span>
                </label>
              </RadioGroup>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold tracking-normal">
                Notes or remarks
              </h2>
              <Textarea
                placeholder="Add pressure preference, skin concerns, allergies, room setup, or special requests..."
                className="mt-4 min-h-32 resize-none rounded-xl bg-background"
              />
            </section>

            <Button className="h-13 w-full rounded-full text-base">
              Confirm and pay {formatPeso(dueNow)}
            </Button>
          </div>

          <aside
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-no-scroll-reveal
            className="space-y-5 overflow-x-hidden lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pr-2"
          >
            <section className="rounded-2xl shadow-sm border border-border bg-card p-5">
              <div className="flex gap-4">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={activePackage.image}
                    alt={activePackage.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm tracking-normal text-muted-foreground">
                    Selected package
                  </p>
                  <h2 className="mt-1 text-xl font-semibold leading-tight tracking-normal">
                    {activePackage.title}
                  </h2>
                  <div className="mt-3 flex items-center gap-2 text-sm tracking-normal">
                    <HugeiconsIcon
                      icon={StarIcon}
                      className="size-4 fill-primary text-primary"
                    />
                    4.95 / Guest favorite
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {servicePackages.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedPackage(service.id)}
                    className={
                      selectedPackage === service.id
                        ? "rounded-xl border border-primary bg-accent p-4 text-left"
                        : "rounded-xl border border-border bg-background p-4 text-left transition hover:border-primary/50"
                    }
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold tracking-normal">
                          {service.title}
                        </div>
                        <div className="mt-1 text-sm tracking-normal text-muted-foreground">
                          {service.duration}
                        </div>
                      </div>
                      <div className="font-semibold tracking-normal">
                        {formatPeso(service.price)}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-6 tracking-normal text-muted-foreground">
                      {service.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="my-5 h-px bg-border" />

              <div>
                <label className="text-sm font-semibold tracking-normal">
                  Voucher or coupon
                </label>
                <div className="mt-3 flex gap-2">
                  <Input
                    value={couponCode}
                    onChange={(event) => setCouponCode(event.target.value)}
                    placeholder="Try CHAI10"
                    className="h-11 rounded-full bg-background"
                  />
                  <Button type="button" className="h-11 rounded-full px-5">
                    Apply
                  </Button>
                </div>
              </div>

              <div className="my-5 h-px bg-border" />

              <div className="space-y-3 text-sm tracking-normal">
                <div className="flex justify-between">
                  <span>{activePackage.title}</span>
                  <span>{formatPeso(activePackage.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Home service fee</span>
                  <span>
                    {homeServiceFee ? formatPeso(homeServiceFee) : "Free"}
                  </span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>Voucher discount</span>
                  <span>-{formatPeso(couponDiscount)}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPeso(total)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Due now</span>
                  <span>{formatPeso(dueNow)}</span>
                </div>
              </div>
            </section>

            <section className="overflow-hidden shadow-sm rounded-2xl border border-border bg-card p-5">
              <div className="mb-4">
                <div className="text-sm font-semibold tracking-normal text-primary">
                  Chai Loyalty
                </div>
                <p className="mt-1 text-sm leading-6 tracking-normal text-muted-foreground">
                  Hover or tap the card to view both sides.
                </p>
              </div>

              <CreditCard className="mx-auto -mt-10 -mb-5 max-w-full">
                <CreditCardFlipper className="shadow-none!">
                  <CreditCardFront
                    safeArea={0}
                    className="bg-transparent! shadow-none!"
                  >
                    <Image
                      src="/loyalty-card/front.png"
                      alt="Chai Spa loyalty card front"
                      fill
                      className="object-contain"
                    />
                  </CreditCardFront>
                  <CreditCardBack
                    safeArea={0}
                    className="bg-transparent! shadow-none!"
                  >
                    <Image
                      src="/loyalty-card/back.png"
                      alt="Chai Spa loyalty card back"
                      fill
                      className="object-contain"
                    />
                  </CreditCardBack>
                </CreditCardFlipper>
              </CreditCard>

              <div>
                <h3 className="text-xl font-semibold tracking-normal">
                  You are 2 visits away from a free aromatherapy upgrade.
                </h3>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <span
                      key={step}
                      className={
                        step < 3
                          ? "h-2 rounded-full bg-primary"
                          : "h-2 rounded-full bg-secondary"
                      }
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 tracking-normal text-muted-foreground">
                  Book today to earn points for treatments, add-ons, and member
                  rewards.
                </p>
              </div>
            </section>

            <section className="rounded-2xl shadow-sm bg-secondary p-5">
              <div className="text-sm font-semibold tracking-normal">
                Reservation summary
              </div>
              <p className="mt-2 text-sm tracking-normal text-muted-foreground">
                {formattedDate} at {selectedTime}. Free cancellation up to 24
                hours before your session.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
