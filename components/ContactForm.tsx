"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const applications = ["Sinks", "Urinals", "Refrigerated cabinets", "Not sure yet"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: applications[0],
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend in this static build — hand off to the user's mail client so
    // the enquiry is never lost.
    const subject = encodeURIComponent(`Puracator enquiry — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nApplication: ${form.application}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Thank you</h3>
        <p className="mt-2 max-w-sm text-ink/65">
          Your email client should have opened with your enquiry ready to send.
          We&apos;ll be in touch to arrange your demonstration.
        </p>
        <button onClick={() => setSent(false)} className="btn-ghost mt-8">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Jane Smith" />
        </Field>
        <Field label="Company">
          <input value={form.company} onChange={update("company")} className={inputCls} placeholder="Acme Facilities" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" required>
          <input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="jane@acme.co.uk" />
        </Field>
        <Field label="Phone">
          <input type="tel" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="01908 000 000" />
        </Field>
      </div>
      <Field label="What do you need to clean?">
        <select value={form.application} onChange={update("application")} className={inputCls}>
          {applications.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </Field>
      <Field label="Message">
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          className={inputCls}
          placeholder="Tell us about your sites, number of drains and how often you clean them…"
        />
      </Field>
      <button type="submit" className="btn-primary mt-1 w-full">
        Request a demonstration
        <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-ink/45">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink/12 bg-sand px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand focus:bg-white focus:ring-2 focus:ring-aqua/40";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink/80">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {children}
    </label>
  );
}
