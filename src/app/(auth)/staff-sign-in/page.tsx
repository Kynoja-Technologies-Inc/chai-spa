import type { Metadata } from "next";
import { StaffSignInForm } from "@/components/auth/staff-sign-in-form";

export const metadata: Metadata = { title: "Staff sign in", robots: { index: false, follow: false } };

export default function StaffSignInPage() {
  return <StaffSignInForm />;
}
