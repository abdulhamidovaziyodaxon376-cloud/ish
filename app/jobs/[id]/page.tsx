import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Check, Clock3, MapPin } from "lucide-react";
import { ApplicationClientButton } from "@/components/application-client-button";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { jobs } from "@/lib/jobs";

export default async function JobDetailsPage({ params }: PageProps<"/jobs/[id]">) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id);
  if (!job) notFound();

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-slate-900"><ArrowLeft className="size-4 text-slate-500" /> Vakansiyalarga qaytish</Link>
        <header className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="grid size-16 shrink-0 place-items-center rounded-2xl text-2xl font-bold text-white shadow-sm" style={{ backgroundColor: job.brandColor }}>{job.initials}</div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={job.status === "Faol" ? "secondary" : "destructive"} className={job.status === "Faol" ? "bg-emerald-100 text-emerald-800" : ""}>{job.status}</Badge>
                <span className="text-xs text-slate-600">Eʼlon qilindi: {job.posted}</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">{job.title}</h1>
              <p className="mt-2 text-base font-medium text-slate-600">{job.company}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" />{job.location}</span>
                <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness className="size-4" />{job.type}</span>
                <span className="inline-flex items-center gap-1.5"><Clock3 className="size-4" />{job.schedule}</span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-slate-500">Maosh</p>
              <p className="mt-1 text-xl font-semibold text-emerald-700">{job.salary}</p>
            </div>
          </div>
        </header>

        <div className="mt-7 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="space-y-5">
            <Card className="border border-slate-200 bg-white p-0 shadow-sm">
              <CardHeader className="px-6 pt-6 sm:px-8"><CardTitle className="text-xl font-semibold tracking-[-0.03em] text-slate-900">Vakansiya haqida</CardTitle></CardHeader>
              <CardContent className="px-6 pb-7 sm:px-8"><p className="text-sm leading-7 text-slate-600">{job.description}</p></CardContent>
            </Card>
            <InfoList title="Talablar" items={job.requirements} />
            <InfoList title="Vazifalar" items={job.responsibilities} />
          </div>

          <aside className="lg:sticky lg:top-6">
            <Card className="border border-slate-200 bg-white p-0 shadow-sm">
              <CardHeader className="px-6 pt-6"><CardTitle className="text-lg font-semibold text-slate-900">Qisqacha maʼlumot</CardTitle></CardHeader>
              <CardContent className="px-6 pb-6">
                <dl className="divide-y divide-slate-200">
                  <Overview label="Maosh" value={job.salary} highlighted />
                  <Overview label="Joylashuv" value={job.location} />
                  <Overview label="Ish tartibi" value={job.schedule} />
                  <Overview label="Ish turi" value={job.type} />
                  <Overview label="Aloqa" value={job.contact} />
                </dl>
                <ApplicationClientButton jobTitle={job.title} company={job.company} contact={job.contact} />
                <p className="mt-3 flex items-start gap-1.5 text-xs leading-5 text-slate-500"><Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> Arizangiz bevosita ish beruvchiga yuboriladi.</p>
              </CardContent>
            </Card>
            <Link href="/jobs" className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-blue-300 hover:text-blue-700">Boshqa vakansiyalar <ArrowUpRight className="size-4 text-slate-500" /></Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="border border-slate-200 bg-white p-0 shadow-sm">
      <CardHeader className="px-6 pt-6 sm:px-8"><CardTitle className="text-xl font-semibold tracking-[-0.03em] text-slate-900">{title}</CardTitle></CardHeader>
      <CardContent className="px-6 pb-7 sm:px-8"><ul className="grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-600" />{item}</li>)}</ul></CardContent>
    </Card>
  );
}

function Overview({ label, value, highlighted = false }: { label: string; value: string; highlighted?: boolean }) {
  return <div className="flex flex-col gap-1 py-3 first:pt-1"><dt className="text-xs text-slate-500">{label}</dt><dd className={`break-words text-sm font-medium ${highlighted ? "text-emerald-700" : "text-slate-700"}`}>{value}</dd></div>;
}
