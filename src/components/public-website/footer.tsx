import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01Icon,
  InstagramIcon,
  NewTwitterIcon,
  SendHorizontalIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Healing Therapy", href: "/service/aromatic-relaxation-therapy" },
      { label: "Rejuvenating Facial Therapy", href: "/service/revitalizing-facial-glow-treatment" },
      { label: "Signature Full-Body", href: "/service/full-body-relaxation-massage" },
      { label: "Herbal Body Scrub & Wrap", href: "/service/herbal-exfoliation-body-wrap" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help", href: "/help" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Support", href: "/support" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", icon: Facebook01Icon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "X", icon: NewTwitterIcon },
  { label: "YouTube", icon: YoutubeIcon },
];

const Footer = () => {
  return (
    <footer className="px-3 pb-3">
      <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.35fr]">
          <div>
            <div className="flex items-center">
              <Image
                src="/main/logo-icon.png"
                alt="Chai Spa"
                width={138}
                height={44}
                className="h-17 w-auto rounded-full -ml-3 object-contain"
              />
              <p className="font-bold">Chai Spa <sup className="text-[8px]">TM</sup></p>
            </div>

            <p className="mt-6 max-w-72 text-sm tracking-normal text-primary-foreground/70">
              We provide calming, holistic treatments designed to restore
              balance, energy, and inner peace for every guest.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <span
                  key={social.label}
                  aria-label={`${social.label} profile coming soon`}
                  title={`${social.label} profile coming soon`}
                  className="grid size-8 place-items-center rounded-full border border-white/15 text-primary-foreground/45"
                >
                  <HugeiconsIcon
                    icon={social.icon}
                    strokeWidth={1.8}
                    className="size-4"
                  />
                </span>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold tracking-normal text-primary-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm tracking-normal text-primary-foreground/65 transition hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold tracking-normal text-primary-foreground">
              Stay Connected
            </h3>
            <p className="mt-5 max-w-78 text-sm leading-6 tracking-normal text-primary-foreground/70">
              Follow us and receive news, tips, and wellness inspiration.
            </p>

            <form className="mt-6">
              <InputGroup className="h-12 border-white/10 bg-white text-foreground">
                <InputGroupInput
                  type="email"
                  placeholder="Enter email address"
                  className="text-sm tracking-normal placeholder:text-muted-foreground"
                />
                <InputGroupButton
                  type="submit"
                  size="icon-sm"
                  className="mr-1 rounded-full text-primary hover:bg-primary/10"
                  aria-label="Subscribe"
                >
                  <HugeiconsIcon icon={SendHorizontalIcon} strokeWidth={2} />
                </InputGroupButton>
              </InputGroup>
            </form>
          </div>
        </div>

        <p className="mt-10 text-center text-xs tracking-normal text-background">
          &copy; 2026 Chai Spa - <b>PIP Spore Technology Inc</b>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
