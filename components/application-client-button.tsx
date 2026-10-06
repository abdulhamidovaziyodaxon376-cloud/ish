"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { ApplicationDialog } from "@/components/application-dialog";
import { Button } from "@/components/ui/button";

export function ApplicationClientButton({ jobTitle, company, contact }: { jobTitle: string; company: string; contact: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <Button className="mt-5 h-12 w-full rounded-xl bg-emerald-600 text-white transition-all duration-200 hover:bg-emerald-700" onClick={() => setOpen(true)}><Send className="size-4" /> Ariza topshirish</Button>
    {open && <ApplicationDialog jobTitle={jobTitle} company={company} contact={contact} onClose={() => setOpen(false)} />}
  </>;
}