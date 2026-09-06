import { AdminModulePage } from "@/components/admin/admin-module-page";
import { adminModuleMap } from "@/lib/admin-modules";

export default function AdminDashboardPage() {
  const source = adminModuleMap.get("dashboard")!;
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
