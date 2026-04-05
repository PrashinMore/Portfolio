"use client";

import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { ABOUT } from "@/lib/constants";

function CounterBlock({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useAnimatedCounter(value, 1800);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <p className="font-mono text-4xl font-semibold tabular-nums text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-zinc-500">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Engineering at the intersection of{" "}
          <span className="gradient-text">systems</span> and product
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass-strong space-y-5 rounded-3xl p-8"
          >
            {ABOUT.summary.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-zinc-400">
                {p}
              </p>
            ))}
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {ABOUT.counters.map((c) => (
              <CounterBlock
                key={c.label}
                value={c.value}
                suffix={c.suffix}
                label={c.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
