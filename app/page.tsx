import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, Check, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";

const seekerBenefits = ["Yuzlab yangi vakansiyalar", "Rezyume bilan tez ariza", "Sizga mos ish tavsiyalari"];
const employerBenefits = ["Iqtidorli mutaxassislar bazasi", "Vakansiyani bepul joylash", "Nomzodlar bilan bevosita aloqa"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <SiteHeader accent="indigo" />
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pt-16">
        <div className="pointer-events-none absolute -right-36 top-4 h-[27rem] w-[27rem] rounded-full border border-slate-200/80 sm:right-0 sm:top-8" />
        <div className="pointer-events-none absolute -right-24 top-16 h-[22rem] w-[22rem] rounded-full border border-slate-200/60 sm:right-12 sm:top-20" />
        <div className="relative max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600">
            <Sparkles className="size-3.5" /> Oʻzbekistonda ish topishning oson yoʻli
          </div>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Oʻz kelajagingizni toping yoki eng yaxshi mutaxassislarni yollang
          </h1>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Ish qidirish va jamoangizni kengaytirish uchun bitta qulay manzil. Sizga mos imkoniyatlar shu yerdan boshlanadi.
            </p>
            <Link href="/jobs" className="inline-flex w-fit items-center gap-2 border-b border-indigo-600 pb-1 text-sm font-semibold text-indigo-600 transition-all duration-200 hover:text-indigo-700">
              Barcha vakansiyalar <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          <Card className="group relative border border-slate-200/80 bg-white p-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]">
            <CardContent className="flex h-full flex-col p-7 sm:p-9 lg:p-10">
              <div className="flex items-start justify-between">
                <div className="grid size-14 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><BriefcaseBusiness className="size-6" /></div>
                <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-sm font-medium text-indigo-600">01 / Nomzod</span>
              </div>
              <h2 className="mt-9 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ish izlayapman</h2>
              <p className="mt-3 max-w-md leading-7 text-slate-600">Tajribangiz va maqsadlaringizga mos ishni toping. Keyingi qadamingiz siz oʻylagandan yaqinroq.</p>
              <ul className="mt-7 grid gap-3 text-sm font-medium text-slate-700">
                {seekerBenefits.map((benefit) => <li key={benefit} className="flex items-center gap-2.5"><Check className="size-4 text-indigo-600" />{benefit}</li>)}
              </ul>
              <Button nativeButton={false} className="mt-9 h-12 w-full justify-between rounded-xl bg-indigo-600 px-5 text-white transition-all duration-200 hover:bg-indigo-700 sm:w-fit sm:min-w-56" render={<Link href="/jobs" />}>
                Vakansiyalarni koʻrish <ArrowRight className="size-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative border border-slate-200/80 bg-white p-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]">
            <CardContent className="flex h-full flex-col p-7 sm:p-9 lg:p-10">
              <div className="flex items-start justify-between">
                <div className="grid size-14 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><Building2 className="size-6" /></div>
                <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-sm font-medium text-indigo-600">02 / Ish beruvchi</span>
              </div>
              <h2 className="mt-9 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ishchi izlayapman</h2>
              <p className="mt-3 max-w-md leading-7 text-slate-600">Jamoangiz uchun toʻgʻri insonni toping. Vakansiya eʼlon qiling va faol nomzodlar bilan tanishing.</p>
              <ul className="mt-7 grid gap-3 text-sm font-medium text-slate-700">
                {employerBenefits.map((benefit) => <li key={benefit} className="flex items-center gap-2.5"><Check className="size-4 text-indigo-600" />{benefit}</li>)}
              </ul>
              <Button nativeButton={false} className="mt-9 h-12 w-full justify-between rounded-xl bg-indigo-600 px-5 text-white transition-all duration-200 hover:bg-indigo-700 sm:w-fit sm:min-w-56" render={<Link href="/jobs/create" />}>
                Vakansiya joylash <ArrowRight className="size-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-200 pt-7 text-sm text-slate-600 sm:justify-start">
          <span className="inline-flex items-center gap-2"><Compass className="size-4 text-slate-500" /> Butun Oʻzbekiston boʻylab</span>
          <span>Har kuni yangi imkoniyatlar</span>
        </div>
      </section>
    </main>
  );
}
