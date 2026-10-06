"use client";

import { useState } from "react";
import { ArrowRight, Mail, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ApplicationDialogProps = {
  jobTitle: string;
  company: string;
  contact: string;
  onClose: () => void;
};

export function ApplicationDialog({ jobTitle, company, contact, onClose }: ApplicationDialogProps) {
  const [message, setMessage] = useState("");
  const mailto = `mailto:${contact}?subject=${encodeURIComponent(`${jobTitle} — ariza`)}&body=${encodeURIComponent(message || `Assalomu alaykum, ${company}! ${jobTitle} vakansiyasiga ariza bermoqchiman.`)}`;
  const telegram = `https://t.me/share/url?url=${encodeURIComponent("https://ishtop.uz/jobs")}&text=${encodeURIComponent(`${jobTitle} — ${company} vakansiyasiga ariza bermoqchiman. ${message}`)}`;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/45 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section aria-labelledby="application-title" aria-modal="true" role="dialog" className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">Ariza yuborish</p>
            <h2 id="application-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-900">{jobTitle}</h2>
            <p className="mt-1 text-sm text-slate-600">{company}</p>
          </div>
          <Button aria-label="Yopish" variant="ghost" size="icon" className="shrink-0" onClick={onClose}><X /></Button>
        </div>
        <label htmlFor="application-message" className="mt-7 block text-sm font-medium text-slate-700">Qisqa xabar <span className="font-normal text-slate-500">(ixtiyoriy)</span></label>
        <textarea id="application-message" value={message} onChange={(event) => setMessage(event.target.value)} rows={4} placeholder="Oʻzingiz haqingizda qisqacha yozing..." className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button className="h-11 rounded-xl bg-blue-700 text-white hover:bg-blue-800" onClick={() => { window.location.href = mailto; }}><Mail className="size-4" /> Email orqali</Button>
          <Button nativeButton={false} variant="outline" className="h-11 rounded-xl border-slate-200" render={<a href={telegram} target="_blank" rel="noreferrer" />}><Send className="size-4" /> Telegram orqali</Button>
        </div>
        <p className="mt-4 flex items-center gap-1 text-xs text-slate-500">Ish beruvchi bilan bevosita bogʻlanasiz <ArrowRight className="size-3" /></p>
      </section>
    </div>
  );
}