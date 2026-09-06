import type { Metadata } from "next";
import { LegalDocument01Icon } from "@hugeicons/core-free-icons";
import { LegalPage, type LegalSection } from "@/components/public-website/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms governing the use of Chai Spa services and website." };

const sections: LegalSection[] = [
  { title: "Using Chai Spa services", paragraphs: ["These terms apply when you access the Chai Spa website, create an account, book an appointment, purchase a package or membership, or use a voucher or loyalty reward."], items: ["Provide accurate booking and contact information", "Use the platform only for lawful personal or authorized business purposes", "Keep your account credentials secure"] },
  { title: "Bookings and availability", paragraphs: ["Appointment requests remain subject to therapist, room, service, and operating-hour availability. A booking is confirmed when you receive confirmation through the platform, email, or SMS."], items: ["Arrive at least 10 minutes before your appointment", "Late arrival may reduce treatment time", "We may recommend changing a treatment when needed for guest or therapist safety"] },
  { title: "Pricing and payment", paragraphs: ["Displayed prices are in Philippine pesos unless stated otherwise. Applicable deposits, service fees, discounts, and the amount due are shown before checkout."], items: ["A deposit may be required to secure an appointment", "Outstanding balances are due according to the selected payment arrangement", "Payment processing remains subject to provider authorization"] },
  { title: "Cancellations and refunds", paragraphs: ["Bookings may be rescheduled or cancelled under the spa policy presented during checkout. Late changes, missed appointments, and started services may be non-refundable."], items: ["Eligible refunds return to the original method when possible", "Promotional, package, membership, and voucher conditions may apply", "Processing time depends on the payment provider"] },
  { title: "Memberships, rewards, and vouchers", paragraphs: ["Benefits, loyalty points, discounts, and vouchers have the validity, eligibility, and usage rules displayed when issued or purchased."], items: ["Points and promotional benefits have no cash value unless expressly stated", "Offers cannot be combined unless permitted", "Misused or fraudulently obtained benefits may be withdrawn"] },
  { title: "Health, conduct, and responsibility", paragraphs: ["Guests are responsible for sharing relevant allergies, injuries, pregnancy, skin concerns, and medical conditions before treatment. Chai Spa may adapt or decline a service when reasonably necessary for safety."], items: ["Respectful conduct toward staff and other guests is required", "Personal belongings remain the guest’s responsibility", "These terms do not limit rights that cannot legally be excluded"] },
  { title: "Changes and contact", paragraphs: ["We may update these terms when services, policies, or legal requirements change. The current version and effective date will remain available on this page. Questions may be sent to hello@chaispa.ph."] },
];

export default function TermsPage() {
  return <LegalPage eyebrow="Service agreement" title="Terms & Conditions" description="The practical terms that help keep bookings, payments, memberships, and visits clear for everyone." icon={LegalDocument01Icon} updated="September 6, 2026" sections={sections} />;
}
