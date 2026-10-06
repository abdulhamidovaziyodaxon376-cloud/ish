import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader({ accent = "blue" }: { accent?: "blue" | "indigo" }) {
  const accentClasses = accent === "indigo"
    ? { icon: "bg-indigo-50 text-indigo-600", button: "bg-indigo-600 hover:bg-indigo-700" }
    : { icon: "bg-blue-100 text-blue-700", button: "bg-blue-700 hover:bg-blue-800" };

  return (
    <header className={`relative z-10 border-b border-slate-200 backdrop-blur ${accent === "indigo" ? "bg-slate-50/95" : "bg-slate-100/95"}`}>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-[-0.04em] text-slate-900">
          <span className={`grid size-8 place-items-center rounded-xl ${accentClasses.icon}`}><BriefcaseBusiness className="size-4" /></span>
          IshTop<span className={accent === "indigo" ? "text-indigo-600" : "text-blue-700"}>.</span>
        </Link>
        <nav aria-label="Asosiy navigatsiya" className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          <Link className="transition-all duration-200 hover:text-slate-900" href="/jobs">Vakansiyalar</Link>
          <Link className="transition-all duration-200 hover:text-slate-900" href="/jobs/create">Ish beruvchilar</Link>
        </nav>
        <Button nativeButton={false} className={`h-9 rounded-xl px-3.5 text-white transition-all duration-200 ${accentClasses.button}`} render={<Link href="/jobs/create" />}>
          <span className="hidden sm:inline">Eʼlon berish</span><span className="sm:hidden">Vakansiya</span><ArrowUpRight className="size-4" />
        </Button>
      </div>
    </header>
  );
}