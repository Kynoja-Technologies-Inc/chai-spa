/* eslint-disable react-hooks/purity */
"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Location05Icon,
  Mail01Icon,
  SendHorizontalIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const initialMessages: ChatMessage[] = [];

const predefinedQuestions = [
  "Which treatment is best for stress relief?",
  "Do I need to book in advance?",
  "What should I expect on my first visit?",
  "Which facial is best for sensitive skin?",
  "How long does a massage session take?",
  "Can I choose my therapist?",
  "What should I wear during treatment?",
  "Do you offer couples spa sessions?",
  "Can I reschedule my appointment?",
  "Which service should I choose first?",
];

const getAiReply = (message: string) => {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("book")) {
    return "I can help you book. Choose your preferred service, date, and time, then our team can confirm your appointment details.";
  }

  if (normalizedMessage.includes("reschedule")) {
    return "Yes, you can request a reschedule. Share your current appointment details and your preferred new schedule so our team can check availability.";
  }

  if (
    normalizedMessage.includes("first visit") ||
    normalizedMessage.includes("expect")
  ) {
    return "On your first visit, we start with a short consultation, guide you to a private treatment room, and explain each step before the session begins.";
  }

  if (normalizedMessage.includes("wear")) {
    return "Wear comfortable clothing. For treatments that need it, we provide towels, robes, and private changing time.";
  }

  if (normalizedMessage.includes("couples")) {
    return "Couples spa sessions can be arranged depending on room and therapist availability. Booking ahead is best.";
  }

  if (normalizedMessage.includes("choose my therapist")) {
    return "You can request a preferred therapist when booking. Availability depends on schedule, but our team will do their best to match your request.";
  }

  if (normalizedMessage.includes("how long")) {
    return "Most sessions run from 60 to 90 minutes, depending on the treatment. We recommend arriving a little early so you can settle in.";
  }

  if (
    normalizedMessage.includes("facial") ||
    normalizedMessage.includes("skin")
  ) {
    return "For facial care, I recommend our Revitalizing Facial Glow Treatment. It is gentle, hydrating, and suitable for tired or sensitive skin.";
  }

  if (
    normalizedMessage.includes("massage") ||
    normalizedMessage.includes("pain") ||
    normalizedMessage.includes("stress")
  ) {
    return "For stress or body tension, the Full-Body Relaxation Massage is a good fit. Your therapist can adjust pressure during the session.";
  }

  return "Thanks for sharing. Tell me your goal, preferred schedule, or any concern, and I will suggest the best next step for your visit.";
};

const ContactSection = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (message: string) => {
    const trimmedInput = message.trim();
    if (!trimmedInput) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedInput,
    };

    const assistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: "assistant",
      content: getAiReply(trimmedInput),
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      assistantMessage,
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="contact" className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch">
        <div className="flex flex-col justify-between rounded-xl bg-secondary p-5 sm:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Contact Us
            </div>

            <h2 className="max-w-130 text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
              Visit Us Or Ask Chai Assistant
            </h2>

            <p className="mt-5 max-w-110 text-sm leading-6 tracking-normal text-muted-foreground">
              Find our wellness space, ask a quick question, or start a guided
              chat before booking your next appointment.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                <HugeiconsIcon icon={Location05Icon} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-normal text-foreground">
                  Spa Location
                </h3>
                <p className="mt-1 text-sm leading-6 tracking-normal text-muted-foreground">
                  Bonifacio Global City, Taguig, Metro Manila
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-normal text-foreground">
                  Email
                </h3>
                <p className="mt-1 text-sm leading-6 tracking-normal text-muted-foreground">
                  hello@chaispa.ph
                </p>
              </div>
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="mt-10 h-12 w-full justify-between rounded-full pl-5 pr-2 sm:w-fit">
                Chat With Chai Assistant
                <span
                  data-icon="inline-end"
                  className="grid size-8 place-items-center rounded-full bg-primary-foreground text-primary"
                >
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </span>
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full max-w-full! overflow-x-hidden data-[side=right]:w-full lg:max-w-xl! lg:data-[side=right]:w-3/4">
              <SheetHeader className="border-b">
                <div className="mb-3 flex items-center gap-3">
                  <Image
                    src="/main/chai-ai-face.png"
                    alt="Chai Assistant"
                    width={56}
                    height={56}
                    priority
                    className="size-14 object-contain"
                  />
                  <div className="min-w-0 pr-8">
                    <SheetTitle>Chai Assistant</SheetTitle>
                    <SheetDescription>
                      Ask about services, booking, preparation, or treatment
                      fit.
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden px-3 sm:px-4">
                <div className="flex-1 space-y-3 overflow-y-auto overflow-x-hidden py-4">
                  {messages.length === 0 && (
                    <div className="flex h-full min-h-70 w-full max-w-full flex-col items-center justify-center overflow-x-hidden text-center">
                      <Image
                        src="/main/chai-ai.png"
                        alt="Chai Assistant"
                        width={96}
                        height={96}
                        className="size-20 object-contain sm:size-24"
                      />
                      <h3 className="mt-5 text-lg font-semibold tracking-normal text-foreground sm:text-xl">
                        How can Chai Assistant help?
                      </h3>
                      <p className="mt-2 max-w-80 text-sm leading-6 tracking-normal text-muted-foreground">
                        Pick a question below or ask about services, booking, or
                        your first spa visit.
                      </p>
                      <Carousel
                        opts={{
                          align: "start",
                          dragFree: true,
                        }}
                        className="mt-5 w-full max-w-full overflow-hidden"
                      >
                        <CarouselContent className="-ml-2">
                          {predefinedQuestions.map((question) => (
                            <CarouselItem
                              key={question}
                              className="basis-[56%] pl-2 sm:basis-1/3"
                            >
                              <Button
                                type="button"
                                variant="secondary"
                                className="h-full min-h-10 w-full rounded-2xl px-2 py-1 text-center text-[10px] leading-4"
                                onClick={() => sendMessage(question)}
                              >
                                {question}
                              </Button>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </div>
                  )}

                  {messages.map((message) => (
                    <div key={message.id} className="flex gap-2">
                      {message.role === "assistant" && (
                        <Image
                          src="/main/chai-ai-face.png"
                          alt="Chai Assistant"
                          width={32}
                          height={32}
                          className="mt-1 size-8 shrink-0 object-contain"
                        />
                      )}
                      <div
                        className={
                          message.role === "user"
                            ? "ml-auto max-w-[82%] rounded-2xl bg-primary px-4 py-3 text-sm leading-6 tracking-normal text-primary-foreground"
                            : "max-w-[78%] rounded-2xl bg-secondary px-4 py-3 text-sm leading-6 tracking-normal text-foreground"
                        }
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="border-t py-4">
                  <InputGroup className="h-13">
                    <InputGroupInput
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder="Ask about treatments or booking..."
                    />
                    <InputGroupAddon align="inline-end" className="mr-2">
                      <HugeiconsIcon icon={SendHorizontalIcon} strokeWidth={2} />
                    </InputGroupAddon>
                  </InputGroup>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="min-h-80 overflow-hidden rounded-xl bg-muted shadow-xl sm:min-h-100 lg:min-h-115">
          <iframe
            title="Chai Spa location map"
            src="https://www.google.com/maps?q=Bonifacio%20Global%20City%20Taguig%20Metro%20Manila&output=embed"
            className="h-full min-h-80 w-full border-0 sm:min-h-100 lg:min-h-115"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
