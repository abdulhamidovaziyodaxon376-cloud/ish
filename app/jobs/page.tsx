"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ApplicationDialog } from "@/components/application-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { jobs, type Job } from "@/lib/jobs";

const jobTypes = ["Barchasi", "Full-time", "Part-time", "Remote", "Freelance"];
const locations = ["Barchasi", "Toshkent", "Samarqand", "Remote"];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Barchasi");
  const [type, setType] = useState("Barchasi");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const filteredJobs = useMemo(() => jobs.filter((job) => {
    const searchable = `${job.title} ${job.company} ${job.location} ${job.type}`.toLocaleLowerCase();
    return searchable.includes(query.trim().toLocaleLowerCase())
      && (location === "Barchasi" || job.location === location)
      && (type === "Barchasi" || job.type === type);
  }), [location, query, type]);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Imkoniyatlar sizni kutmoqda</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Ishingizni toping<span className="text-blue-700">.</span></h1>
            <p className="mt-3 max-w-xl text-slate-600">Yangi maqsadlar sari birinchi qadamni qoʻying.</p>
          </div>
          <Button nativeButton={false} className="h-10 w-fit rounded-xl bg-blue-700 px-4 text-white hover:bg-blue-800" render={<Link href="/jobs/create" />}>
            Vakansiya joylash <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="sticky top-0 z-20 -mx-5 border-y border-slate-200 bg-slate-100/95 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-[minmax(15rem,1.5fr)_minmax(9rem,0.8fr)_minmax(9rem,0.8fr)_auto] md:items-end">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-slate-700">Lavozim yoki kalit soʻz</span>
              <span className="relative block"><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Masalan, dizayner" className="h-11 rounded-xl border-slate-200 bg-white pl-9" /></span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-slate-700">Joylashuv</span>
              <select value={location} onChange={(event) => setLocation(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                {locations.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-slate-700">Ish turi</span>
              <select value={type} onChange={(event) => setType(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                {jobTypes.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <Button variant="outline" className="h-11 rounded-xl border-slate-200 px-3 text-slate-600" onClick={() => { setQuery(""); setLocation("Barchasi"); setType("Barchasi"); }}><SlidersHorizontal className="size-4" /><span className="md:hidden">Tozalash</span></Button>
          </div>
        </div>

        <div className="flex items-center justify-between py-6">
          <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">{filteredJobs.length}</span> ta vakansiya topildi</p>
          <span className="hidden items-center gap-1.5 text-xs text-slate-500 sm:flex"><MapPin className="size-3.5" /> Oʻzbekiston boʻylab</span>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => <JobCard key={job.id} job={job} onApply={() => setSelectedJob(job)} />)}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Search className="mx-auto size-8 text-slate-500" />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">Mos vakansiya topilmadi</h2>
            <p className="mt-2 text-sm text-slate-600">Qidiruv soʻzini yoki filtrlarni oʻzgartirib koʻring.</p>
          </div>
        )}
      </section>
      {selectedJob && <ApplicationDialog jobTitle={selectedJob.title} company={selectedJob.company} contact={selectedJob.contact} onClose={() => setSelectedJob(null)} />}
    </main>
  );
}

function JobCard({ job, onApply }: { job: Job; onApply: () => void }) {
  return (
    <Card className="group border border-slate-200 bg-white p-0 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3.5">
          <div className="grid size-12 shrink-0 place-items-center rounded-xl text-lg font-bold text-white" style={{ backgroundColor: job.brandColor }}>{job.initials}</div>
          <div className="min-w-0 flex-1">
            <h2 className="line-clamp-2 text-lg font-semibold leading-snug tracking-[-0.025em] text-slate-900">{job.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{job.company}</p>
          </div>
          <Badge variant="secondary" className="shrink-0 bg-emerald-100 text-emerald-800">{job.type}</Badge>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-600"><MapPin className="size-3.5 text-slate-500" />{job.location}</span>
          <span className="text-xs text-slate-300">·</span><span className="text-xs text-slate-600">{job.posted}</span>
        </div>
        <p className="mt-5 text-base font-semibold text-emerald-700">{job.salary}</p>
        <div className="mt-5 flex gap-2 border-t border-slate-200 pt-4">
          <Button className="h-10 flex-1 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700" onClick={onApply}>Ariza topshirish</Button>
          <Button nativeButton={false} variant="outline" className="h-10 rounded-xl border-slate-200 px-3.5" render={<Link href={`/jobs/${job.id}`} />}>Batafsil <ArrowRight className="size-3.5" /></Button>
        </div>
      </CardContent>
    </Card>
  );
}