"use client";

import { useMemo, useState } from "react";
import {
  IconCalendar,
  IconChevronDown,
  IconDownload,
  IconDots,
  IconFilter,
  IconPlus,
  IconSearch,
  IconX,
} from "@tabler/icons-react";

import type { AdminModule } from "@/lib/admin-modules";

const week = [
  { day: "Sun", date: "06", count: 24 },
  { day: "Mon", date: "07", count: 19 },
  { day: "Tue", date: "08", count: 22 },
  { day: "Wed", date: "09", count: 17 },
  { day: "Thu", date: "10", count: 26 },
  { day: "Fri", date: "11", count: 31 },
  { day: "Sat", date: "12", count: 35 },
];

const trend = [42, 55, 48, 67, 62, 79, 73, 86, 82, 95, 91, 100];

function tone(value: string) {
  const normalized = value.toLowerCase();
  if (/paid|active|published|available|confirmed|checked in|resolved|featured/.test(normalized)) return "bg-emerald-50 text-emerald-700 ring-emerald-600/15";
  if (/pending|awaiting|later|renewing|progress|scheduled|cleaning|follow/.test(normalized)) return "bg-amber-50 text-amber-700 ring-amber-600/15";
  if (/expired|refund|risk|due/.test(normalized)) return "bg-rose-50 text-rose-700 ring-rose-600/15";
  return "bg-muted text-muted-foreground ring-border";
}

export function AdminModulePage({ module }: { module: Omit<AdminModule, "icon"> }) {
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(module.rows);
  const [showCreate, setShowCreate] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredRows = useMemo(
    () => rows.filter((row) => row.join(" ").toLowerCase().includes(query.toLowerCase())),
    [query, rows],
  );

  function addDemoRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = String(data.get("title") || "New record");
    const newRow = module.columns.map((_, index) => index === 0 ? title : index === module.columns.length - 1 ? "Draft" : "—");
    setRows((current) => [newRow, ...current]);
    setShowCreate(false);
    setNotice(`${title} was added to this frontend demo.`);
  }

  return (
    <div className="mx-auto max-w-400">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" /> Chai Spa operations
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">{module.label}</h1>
          <p className="mt-2 max-w-150 text-sm leading-6 text-muted-foreground">{module.description}</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90">
          <IconPlus className="size-4" /> {module.action}
        </button>
      </div>

      {notice && (
        <div className="mt-5 flex items-center justify-between rounded-xl border border-primary/15 bg-accent px-4 py-3 text-sm text-accent-foreground">
          {notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><IconX className="size-4" /></button>
        </div>
      )}

      <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {module.stats.map((stat, index) => (
          <section key={stat.label} className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <span className={`size-2 rounded-full ${index === 0 ? "bg-primary" : index === 1 ? "bg-[#80a99d]" : index === 2 ? "bg-[#d7c8a8]" : "bg-[#9bada6]"}`} />
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-normal">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
          </section>
        ))}
      </div>

      {module.slug === "appointments" && (
        <section className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <div><h2 className="font-semibold">Weekly capacity</h2><p className="mt-1 text-xs text-muted-foreground">September 6–12, 2026</p></div>
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium"><IconCalendar className="size-4" /> Today</button>
          </div>
          <div className="mt-5 grid grid-cols-7 gap-2">
            {week.map((item, index) => (
              <button key={item.date} className={`rounded-xl px-2 py-3 text-center transition ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted/65 hover:bg-accent"}`}>
                <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-65">{item.day}</span>
                <span className="mt-1 block text-lg font-semibold">{item.date}</span>
                <span className="mt-1 block text-[10px] opacity-65">{item.count} bookings</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {module.slug === "reports" && (
        <section className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-xs sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="font-semibold">Revenue trend</h2><p className="mt-1 text-xs text-muted-foreground">Monthly revenue performance · 2026</p></div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">₱1.86M <span className="text-xs font-medium">+14.2%</span></div>
          </div>
          <div className="mt-8 flex h-48 items-end gap-2 sm:gap-3">
            {trend.map((value, index) => (
              <div key={index} className="group relative flex h-full flex-1 items-end">
                <div className="w-full rounded-t-md bg-primary/15 transition group-hover:bg-primary/30" style={{ height: `${value}%` }}><div className="h-1 rounded-full bg-primary" /></div>
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-12 text-center text-[9px] uppercase tracking-wider text-muted-foreground">{"JFMAMJJASOND".split("").map((month, index) => <span key={index}>{month}</span>)}</div>
        </section>
      )}

      <section className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 sm:max-w-90">
            <IconSearch className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="h-10 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" placeholder={`Search ${module.label.toLowerCase()}…`} />
          </div>
          <div className="flex gap-2">
            <button className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-semibold hover:bg-muted"><IconFilter className="size-4" /> Filter <IconChevronDown className="size-3" /></button>
            <button onClick={() => setNotice("A CSV export has been prepared for this frontend demo.")} className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-semibold hover:bg-muted"><IconDownload className="size-4" /> Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-220 text-left text-sm">
            <thead className="bg-muted/45 text-xs text-muted-foreground">
              <tr>{module.columns.map((column) => <th key={column} className="px-5 py-3.5 font-medium">{column}</th>)}<th className="w-12" /></tr>
            </thead>
            <tbody>
              {filteredRows.map((row, rowIndex) => (
                <tr key={`${row[0]}-${rowIndex}`} className="border-t border-border/70 transition hover:bg-muted/30">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={`px-5 py-4 ${cellIndex === 0 ? "font-semibold text-foreground" : "text-foreground/75"}`}>
                      {cellIndex === row.length - 1 ? <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${tone(cell)}`}>{cell}</span> : cell}
                    </td>
                  ))}
                  <td className="pr-4"><button className="grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted" aria-label={`Actions for ${row[0]}`}><IconDots className="size-4" /></button></td>
                </tr>
              ))}
              {!filteredRows.length && <tr><td colSpan={module.columns.length + 1} className="px-5 py-14 text-center text-muted-foreground">No matching records found.</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground"><span>Showing {filteredRows.length} of {rows.length} records</span><span>Demo data · Frontend only</span></div>
      </section>

      {showCreate && (
        <div className="fixed inset-0 z-70 grid place-items-center bg-[#112a24]/45 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="create-title">
          <form onSubmit={addDemoRecord} className="w-full max-w-120 rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{module.label}</p><h2 id="create-title" className="mt-2 text-2xl font-semibold">{module.action}</h2></div>
              <button type="button" onClick={() => setShowCreate(false)} className="grid size-9 place-items-center rounded-full bg-muted" aria-label="Close"><IconX className="size-4" /></button>
            </div>
            <label className="mt-6 block text-sm font-semibold">Name or reference<input name="title" required autoFocus className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" placeholder={`Enter ${module.label.toLowerCase()} details`} /></label>
            <label className="mt-4 block text-sm font-semibold">Notes<textarea className="mt-2 min-h-24 w-full resize-none rounded-xl border border-input bg-background p-3 font-normal outline-none focus:border-ring focus:ring-3 focus:ring-ring/15" placeholder="Add optional notes…" /></label>
            <div className="mt-6 flex justify-end gap-2"><button type="button" onClick={() => setShowCreate(false)} className="h-10 rounded-full border border-border px-4 text-sm font-semibold">Cancel</button><button type="submit" className="h-10 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground">Save record</button></div>
          </form>
        </div>
      )}
    </div>
  );
}
