/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/#home" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Loyalty", link: "/loyalty-card" },
  { name: "Therapists", link: "/therapist-rating" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact Us", link: "/#contact" },
];

const HeaderLogo = ({ onClick }: { onClick?: () => void }) => (
  <a
    href="/#home"
    onClick={onClick}
    className="relative z-20 flex items-center"
    aria-label="Chai Spa home"
  >
    <Image
      src="/main/logo.png"
      alt="Chai Spa"
      width={116}
      height={36}
      priority
      className="h-13 w-auto object-contain transition-all group-data-[visible=true]/navbody:h-9"
    />
  </a>
);

const AppointmentLabel = () => (
  <span className="inline-flex items-center gap-2 whitespace-nowrap">
    <span className="transition-all group-data-[visible=true]/navbody:hidden">
      Book Appointment
    </span>
    <span className="grid size-7 place-items-center rounded-full bg-primary-foreground text-primary">
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        strokeWidth={2}
        className="size-4"
      />
    </span>
  </span>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody className="min-w-0 border border-white/35 bg-background px-4 py-2 shadow-none backdrop-blur-md group-data-[visible=true]/navbody:px-3">
        <HeaderLogo />
        <NavItems
          items={navItems}
          className="left-1/2 w-fit -translate-x-1/2 rounded-full bg-background px-2 py-1 text-sm text-foreground whitespace-nowrap group-data-[visible=true]/navbody:max-w-97.5 group-data-[visible=true]/navbody:gap-0 group-data-[visible=true]/navbody:px-1 [&_a]:whitespace-nowrap group-data-[visible=true]/navbody:[&_a]:px-2 group-data-[visible=true]/navbody:[&_a]:py-1.5"
        />
        <div className="relative z-20 flex items-center gap-1.5">
          <NavbarButton
            href="/sign-in"
            variant="secondary"
            aria-label="Sign in"
            className="h-10 rounded-full border border-border bg-background px-4 py-0 text-xs font-semibold text-foreground whitespace-nowrap hover:bg-muted group-data-[visible=true]/navbody:size-9 group-data-[visible=true]/navbody:p-0"
          >
            <span className="inline-flex h-full items-center justify-center gap-2 whitespace-nowrap">
              <HugeiconsIcon icon={UserCircleIcon} className="size-4 shrink-0" />
              <span className="group-data-[visible=true]/navbody:hidden">
                Sign in
              </span>
            </span>
          </NavbarButton>
          <NavbarButton
            href="/booking"
            variant="primary"
            aria-label="Book Appointment"
            className="rounded-full bg-primary py-1.5 pl-4 pr-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary group-data-[visible=true]/navbody:px-1.5"
          >
            <AppointmentLabel />
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav className="rounded-full border border-white/40 bg-white pr-5! pl-3! backdrop-blur-md">
        <MobileNavHeader>
          <HeaderLogo onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="rounded-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="/sign-in"
            onClick={() => setIsMobileMenuOpen(false)}
            variant="secondary"
            className="w-full rounded-full border border-border bg-background py-2 text-foreground"
          >
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
              <HugeiconsIcon icon={UserCircleIcon} className="size-4 shrink-0" />
              Sign in
            </span>
          </NavbarButton>
          <NavbarButton
            href="/booking"
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full rounded-full bg-primary py-2 text-primary-foreground"
          >
            <AppointmentLabel />
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
