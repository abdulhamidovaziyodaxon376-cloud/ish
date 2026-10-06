"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, LoaderCircle, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type JobForm = { title: string; company: string; location: string; type: string; salary: string; contact: string; description: string };
type FieldName = keyof JobForm;
const initialForm: JobForm = { title: "", company: "", location: "", type: "Full-time", salary: "", contact: "", description: "" };
const fields: { name: FieldName; label: string; placeholder: string }[] = [
  { name: "title", label: "Vakansiya nomi", placeholder: "Masalan, Frontend dasturchi" },
  { name: "company", label: "Kompaniya nomi", placeholder: "Kompaniyangiz nomi" },
  { name: "location", label: "Joylashuv", placeholder: "Toshkent yoki Remote" },
  { name: "salary", label: "Maosh miqdori", placeholder: "Masalan, $1,000 - $1,500" },
  { name: "contact", label: "Aloqa uchun Telegram yoki Email", placeholder: "@username yoki hr@company.uz" },
];

export default function CreateJobPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function updateField(name: FieldName, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSuccess(false);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<FieldName, string>> = {};
    for (const name of ["title", "company", "location", "salary", "contact", "description"] as FieldName[]) {
      if (!form[name].trim()) nextErrors[name] = "Bu maydonni toʻldirish shart";
    }
    if (form.contact && !form.contact.startsWith("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact)) nextErrors.contact = "Telegram username (@...) yoki email kiriting";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setLoading(true);
    window.setTimeout(() => { setLoading(false); setSuccess(true); }, 900);
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-slate-900"><ArrowLeft className="size-4 text-slate-500" /> Bosh sahifaga qaytish</Link>
        <Card className="overflow-visible border border-slate-200 bg-white p-0 shadow-sm">
          <CardHeader className="border-b border-slate-200 px-6 py-6 sm:px-9 sm:py-8">
            <Badge variant="secondary" className="mb-2 w-fit bg-emerald-100 text-emerald-800"><Plus className="size-3" /> Ish beruvchilar uchun</Badge>
            <CardTitle className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Yangi vakansiya e&apos;lon qilish</CardTitle>
            <p className="mt-2 text-sm leading-6 text-slate-600">Lavozim haqida maʼlumot bering. Eʼloningizni nomzodlar tez orada koʻrishadi.</p>
          </CardHeader>
          <CardContent className="px-6 py-6 sm:px-9 sm:py-8">
            <form onSubmit={submitForm} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.slice(0, 2).map((field) => <FormField key={field.name} {...field} value={form[field.name]} error={errors[field.name]} onChange={(value) => updateField(field.name, value)} />)}
              </div>
              <FormField {...fields[2]} value={form.location} error={errors.location} onChange={(value) => updateField("location", value)} />
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Ish turi</span>
                <select value={form.type} onChange={(event) => updateField("type", event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                  {["Full-time", "Part-time", "Contract", "Remote"].map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.slice(3).map((field) => <FormField key={field.name} {...field} value={form[field.name]} error={errors[field.name]} onChange={(value) => updateField(field.name, value)} />)}
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Batafsil tavsif</span>
                <textarea value={form.description} onChange={(event) => updateField("description", event.target.value)} rows={6} placeholder="Vazifalar, talablar va jamoangiz haqida yozing..." aria-invalid={Boolean(errors.description)} className={`w-full resize-y rounded-xl border bg-white px-3.5 py-3 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-2 ${errors.description ? "border-red-500 focus:ring-red-500/15" : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"}`} />
                {errors.description && <span className="mt-1.5 block text-xs text-red-600">{errors.description}</span>}
              </label>
              {success && <div role="status" className="flex items-center gap-2 rounded-xl bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800"><Check className="size-4" /> Vakansiyangiz muvaffaqiyatli eʼlon qilindi!</div>}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-slate-500">Eʼlon berish orqali maʼlumotlaringiz toʻgʻriligini tasdiqlaysiz.</p>
                <Button type="submit" disabled={loading} className="h-11 rounded-xl bg-blue-700 px-5 text-white hover:bg-blue-800">
                  {loading ? <><LoaderCircle className="size-4 animate-spin" /> Yuborilmoqda</> : <>{success ? "Yana eʼlon berish" : "Vakansiyani eʼlon qilish"}<ArrowRight className="size-4" /></>}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function FormField({ name, label, placeholder, value, error, onChange }: { name: FieldName; label: string; placeholder: string; value: string; error?: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <Input id={`job-${name}`} name={name} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-invalid={Boolean(error)} className={`h-11 rounded-xl bg-white px-3.5 ${error ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/15" : "border-slate-200 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"}`} />
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}