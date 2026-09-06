import type { Metadata } from "next";
import { ShieldCheckIcon } from "@hugeicons/core-free-icons";
import { LegalPage, type LegalSection } from "@/components/public-website/legal-page";

export const metadata: Metadata = { title: "Privacy policy", description: "How Chai Spa collects, uses, and protects guest information." };

const sections: LegalSection[] = [
  { title: "Information we collect", paragraphs: ["We collect information you choose to provide when creating an account, booking a treatment, contacting support, joining a membership, or completing a payment."], items: ["Name, email address, mobile number, and birthday", "Booking details, treatment preferences, and information needed to provide safe service", "Payment references and transaction status; complete card details are handled by the selected payment provider", "Messages, feedback, voucher usage, loyalty activity, and notification preferences"] },
  { title: "How we use information", paragraphs: ["We use personal information to provide and improve Chai Spa services, communicate about visits, and meet operational and legal responsibilities."], items: ["Create and manage bookings, accounts, memberships, rewards, and payments", "Send confirmations, reminders, service updates, and promotions you have chosen to receive", "Respond to inquiries and tailor treatments to shared preferences", "Protect guests, staff, and the platform from misuse"] },
  { title: "Sharing and service providers", paragraphs: ["We may share only the information necessary with providers that support payment processing, email or SMS delivery, hosting, and business operations. We do not sell personal information."], items: ["Providers act under appropriate confidentiality and security obligations", "Information may be disclosed when required by law or necessary to protect rights and safety"] },
  { title: "Retention and security", paragraphs: ["We keep information only as long as reasonably needed for service, accounting, dispute, safety, and legal purposes. Chai Spa applies administrative and technical safeguards appropriate to the information handled."], items: ["No internet service can promise absolute security", "Guests should keep account credentials private and report suspected unauthorized access"] },
  { title: "Your choices and rights", paragraphs: ["You may request access to or correction of your profile information and may change promotional communication preferences through your account or by contacting us."], items: ["Request account or information deletion where applicable", "Withdraw optional marketing consent", "Ask questions or raise a privacy concern"] },
  { title: "Contact us", paragraphs: ["For privacy questions or requests, contact hello@chaispa.ph. We may need to verify your identity before completing a request involving personal information."] },
];

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Your privacy" title="Privacy policy" description="A clear overview of the information Chai Spa handles and the choices available to you." icon={ShieldCheckIcon} updated="September 6, 2026" sections={sections} />;
}
