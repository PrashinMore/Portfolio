"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const placeholders = [
  {
    quote:
      "Placeholder for a hiring manager or tech lead quote on ownership, communication, and delivery.",
    name: "Name · Role · Company",
  },
  {
    quote:
      "Placeholder for a peer or stakeholder note on architecture reviews and production discipline.",
    name: "Name · Role · Company",
  },
];

export function TestimonialsPlaceholder() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Social proof <span className="gradient-text">(ready for quotes)</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Swap these cards with real LinkedIn recommendations or client blurbs when you
          have permission to publish them.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {placeholders.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8"
            >
              <Quote className="h-8 w-8 text-violet-500/50" />
              <p className="mt-4 text-sm italic leading-relaxed text-zinc-400">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-600">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
