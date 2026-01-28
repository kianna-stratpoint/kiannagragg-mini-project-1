"use client";

import { cn } from "@components/lib/utils";
import { Card, CardContent } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { socialLinks } from "@components/lib/data/contact";
import React, { useState } from "react";

const SocialCard: React.FC<{ link: (typeof socialLinks)[0] }> = ({ link }) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      link.bgColor,
      "group relative flex flex-col justify-end p-5 h-36 rounded-xl text-white",
      "transition-transform duration-200 hover:scale-[1.03] shadow-lg overflow-hidden",
      link.bgColor === "bg-gray-900" || link.bgColor === "bg-white/10"
        ? "border border-gray-700"
        : "",
    )}
  >
    <div className="absolute top-5 left-5 text-4xl">
      <link.icon
        className={
          link.bgColor === "bg-white/10" ? "text-gray-900" : "text-white"
        }
      />
    </div>

    <div className="text-left mt-10">
      <h3 className="text-lg font-semibold">{link.title}</h3>
      <p className="text-sm opacity-80">{link.handle}</p>
    </div>
  </a>
);

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const formCardClassName =
    "bg-white/10 backdrop-blur-sm border border-white/50 p-6 sm:p-8 rounded-xl shadow-2xl";

  const inputClassName =
    "bg-black/20 border-gray-700/70 placeholder:text-gray-500 text-white focus:border-sky-300 transition-colors";

  return (
    <Card className={formCardClassName}>
      <CardContent className="p-0 space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">
          Let us Talk
        </h3>
        <p className="text-gray-400 text-sm text-center">
          You got some Qs and I got tons of As. Ask me about anything I can help
          with!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-white">Name</span>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={inputClassName}
              placeholder="Your Name"
              required
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium text-white">
              Email Address
            </span>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClassName}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium text-white">Message</span>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={cn(inputClassName, "min-h-32")}
              placeholder="Your Message"
              required
            />
          </label>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="w-30 bg-sky-600 hover:bg-sky-900 text-lg py-6 mt-6 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>

          {status === "success" && (
            <p className="text-sky-300 text-center text-sm">
              Message sent successfully! I’ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export function ContactSection() {
  const blueText = "text-sky-300";

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(118, 209, 251, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)",
          width: "1032px",
          height: "1029px",
          borderRadius: "1032px",
          opacity: 0.3,
          left: "50%",
          top: "70%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* SECTION TITLE */}
      <h2 className="text-center text-4xl lg:text-5xl font-semibold font-outfit mb-20">
        <span className={blueText}>contact</span>.me
      </h2>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex flex-col gap-20">
        {/* --- CONTACT FORM  --- */}
        <div className="flex justify-center w-full">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <ContactForm />
          </div>
        </div>
        {/* --- SOCIAL CARDS --- */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white text-center">
            Let&apos;s Connect
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((link) => (
              <SocialCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
