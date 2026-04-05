"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import {
  GitHubIcon,
  GoogleDocsIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { RESUME_GOOGLE_DOC_URL, SITE, SOCIAL } from "@/lib/constants";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio: ${name || "Inquiry"}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  /** Colors on the anchor (not the SVG) so SSR/CSR markup stays identical; avoids motion + icon class merge quirks. */
  const socials = [
    {
      href: SOCIAL.linkedin,
      label: "LinkedIn",
      Icon: LinkedInIcon,
      linkClassName:
        "text-[#0A66C2] hover:border-[#0A66C2]/40 hover:text-[#0A66C2]",
    },
    {
      href: SOCIAL.github,
      label: "GitHub",
      Icon: GitHubIcon,
      linkClassName: "text-zinc-100 hover:border-white/25 hover:text-white",
    },
    {
      href: SOCIAL.leetcode,
      label: "LeetCode",
      Icon: LeetCodeIcon,
      linkClassName:
        "text-[#FFA116] hover:border-[#FFA116]/40 hover:text-[#FFA116]",
    },
  ] as const;

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Let&apos;s build something{" "}
          <span className="gradient-text">scalable together</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Prefer email? Reach me directly. The form opens your mail client with your message
          prefilled—no backend required.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong flex flex-col justify-between rounded-3xl p-8"
          >
            <div>
              <p className="text-sm font-medium text-zinc-500">Direct</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 flex items-center gap-3 text-lg text-white transition hover:text-violet-300"
              >
                <Mail className="h-5 w-5 text-violet-400" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                className="mt-4 flex items-center gap-3 text-zinc-400 transition hover:text-white"
              >
                <Phone className="h-5 w-5 text-violet-400/80" />
                {SITE.phone}
              </a>
              <a
                href={RESUME_GOOGLE_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-violet-300/90 underline-offset-4 transition hover:text-violet-200 hover:underline"
              >
                <GoogleDocsIcon className="h-4 w-4 shrink-0 text-blue-400" />
                Resume (Google Doc)
              </a>
            </div>
            <div className="mt-10">
              <p className="text-sm font-medium text-zinc-500">Profiles</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${s.linkClassName}`}
                  >
                    <s.Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-8"
            suppressHydrationWarning
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-500">Name</span>
                <input
                  name="name"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-violet-500/40 transition placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-500">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-violet-500/40 transition placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-5 flex flex-col gap-2 text-sm">
              <span className="text-zinc-500">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-violet-500/40 transition placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2"
                placeholder="Tell me about the problem space, timeline, and stack."
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 sm:w-auto sm:px-10"
            >
              Send message
            </motion.button>
            {status === "sent" && (
              <p className="mt-3 text-sm text-emerald-400/90">
                Mail client should open—if it doesn’t, email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
