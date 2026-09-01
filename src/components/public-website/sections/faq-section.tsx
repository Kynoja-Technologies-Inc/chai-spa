"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What can I expect on my first visit?",
    answer:
      "We start with a brief consultation, then guide you to a private room where your therapist begins the treatment.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
      "Advance booking is recommended so we can reserve your preferred time, therapist, and treatment room.",
  },
  {
    question: "Are the products safe for sensitive skin?",
    answer:
      "Yes. We use gentle spa products, and our team can adjust selections based on your skin concerns.",
  },
  {
    question: "What should I wear during the treatment?",
    answer:
      "Wear comfortable clothing. For most treatments, we provide towels, robes, and private changing time.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="max-w-120 text-center sm:text-left">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            FAQ
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-95 text-sm leading-6 tracking-normal text-muted-foreground sm:mx-0">
            Explore our Frequently Asked Questions for quick answers on
            booking, treatments, and preparation, helping you feel ready before
            your visit.
          </p>
        </div>

        <Accordion
          type="single"
          defaultValue="item-0"
          collapsible
          className="gap-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="rounded-lg border-0 bg-secondary px-4 shadow-sm sm:px-6"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-semibold tracking-normal text-foreground hover:no-underline sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 tracking-normal text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
