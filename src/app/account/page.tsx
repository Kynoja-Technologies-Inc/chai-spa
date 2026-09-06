import type { Metadata } from "next";
import { AccountPortal } from "@/components/account/account-portal";

export const metadata: Metadata = { title: "My account", robots: { index: false, follow: false } };

export default function AccountPage() {
  return <AccountPortal />;
}
