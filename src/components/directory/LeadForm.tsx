"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

// Inquiry / lead-capture form. Posts to /api/leads (persists to Postgres).
export default function LeadForm({
  facilityName,
  source = "lead-form",
  title = "Request information",
}: {
  facilityName?: string;
  source?: string;
  title?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: facilityName ? `I'd like more information about ${facilityName}.` : "",
  });
  const [loading, setLoading] = useState(false);

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, facility: facilityName, source }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || "Something went wrong. Please try again.");
      } else {
        toast.success("Thanks! We'll be in touch shortly.");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
    setLoading(false);
  };

  const inputCls =
    "w-full rounded-lg border border-gray-3 bg-gray-1 py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20";

  return (
    <form onSubmit={submit} className="rounded-xl bg-white p-6 shadow-1">
      <h3 className="mb-4 font-semibold text-dark">{title}</h3>
      <div className="space-y-4">
        <input className={inputCls} placeholder="Your name" value={form.name} onChange={set("name")} required />
        <input className={inputCls} type="email" placeholder="Email" value={form.email} onChange={set("email")} required />
        <input className={inputCls} placeholder="Phone (optional)" value={form.phone} onChange={set("phone")} />
        <textarea className={inputCls} rows={3} placeholder="Message" value={form.message} onChange={set("message")} />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-dark py-3 px-6 font-medium text-white duration-200 hover:bg-blue disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Request info"}
        </button>
      </div>
    </form>
  );
}
