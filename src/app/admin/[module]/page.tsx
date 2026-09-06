import { notFound } from "next/navigation";
import { AdminModulePage } from "@/components/admin/admin-module-page";
import { adminModuleMap, adminModules } from "@/lib/admin-modules";

export function generateStaticParams() {
  return adminModules.filter((module) => module.slug !== "dashboard").map((module) => ({ module: module.slug }));
}

export default async function AdminModuleRoute({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params;
  const source = adminModuleMap.get(slug);
  if (!source || slug === "dashboard") notFound();
  const content = {
    slug: source.slug,
    label: source.label,
    description: source.description,
    action: source.action,
    stats: source.stats,
    columns: source.columns,
    rows: source.rows,
  };
  return <AdminModulePage module={content} />;
}
