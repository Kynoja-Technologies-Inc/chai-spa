import type { Metadata } from "next";
import { KioskFlow } from "@/components/kiosk/kiosk-flow";

export const metadata: Metadata = { title: "Guest kiosk", robots: { index: false, follow: false } };

export default function KioskPage() {
  return <KioskFlow />;
}
