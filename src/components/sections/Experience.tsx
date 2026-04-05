"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Where I shipped <span className="gradient-text">real systems</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Vertical timeline of roles focused on backend ownership, architecture, and
          delivery discipline—not slide decks.
        </p>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500/80 via-indigo-500/40 to-transparent md:left-1/2 md:-translate-x-px"
          />

          <ul className="space-y-14 md:space-y-20">
            {EXPERIENCE.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.li
                  key={job.company}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-10 ${
                    isLeft ? "" : "md:text-right"
                  }`}
                >
                  <div
                    className={`pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12 md:text-left"}`}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-violet-200/90">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-violet-300"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-violet-300/80">{job.role}</p>
                  </div>

                  <div
                    className={`pl-10 md:pl-0 ${isLeft ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:row-start-1 md:pr-12 md:text-right"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="glass-strong rounded-2xl p-6"
                    >
                      <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-2 md:items-start">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400 md:mt-2.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <motion.span
                    className="absolute left-0 top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-violet-400 bg-[#030014] shadow-[0_0_20px_rgba(139,92,246,0.5)] md:left-1/2 md:-translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  </motion.span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
