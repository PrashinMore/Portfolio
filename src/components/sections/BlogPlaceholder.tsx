"use client";

import { motion } from "framer-motion";
import { BookOpen, PenLine } from "lucide-react";
import Link from "next/link";

export function BlogPlaceholder() {
  return (
    <section id="blog" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/25">
                <BookOpen className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-violet-400/90">
                  Blog (coming soon)
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Deep dives on backend, platform, and delivery
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
                  Long-form notes on microservices trade-offs, incident postmortems, and
                  practical system design—planned as a credibility layer alongside this
                  portfolio.
                </p>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/35 md:self-center"
            >
              <PenLine className="h-4 w-4" />
              Notify me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
