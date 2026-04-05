"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, GitBranch, Network } from "lucide-react";
import { SYSTEM_TOPICS } from "@/lib/constants";

const topicIcon = (i: number) =>
  [Network, Cpu, GitBranch][i] ?? Network;

export function SystemDesign() {
  return (
    <section id="systems" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          System design
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          How I think in <span className="gradient-text">diagrams</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Stylized architecture snapshots—conversation starters for technical deep dives
          with clients and hiring managers.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {SYSTEM_TOPICS.map((topic, ti) => {
            const Icon = topicIcon(ti);
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: ti * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass flex flex-col rounded-3xl p-6 transition-shadow hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                </div>

                <div className="relative mb-5 min-h-[120px] rounded-2xl border border-white/10 bg-[#05011a]/80 p-4">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {topic.nodes.map((node, ni) => (
                      <div key={node} className="flex shrink-0 items-center gap-2">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * ni + ti * 0.05 }}
                          className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-2.5 py-1.5 text-[11px] font-medium text-violet-100"
                        >
                          {node}
                        </motion.span>
                        {ni < topic.nodes.length - 1 && (
                          <ArrowRight className="h-3 w-3 shrink-0 text-zinc-600" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 50% 120%, rgba(139,92,246,0.25), transparent 55%)",
                    }}
                  />
                </div>

                <p className="text-sm leading-relaxed text-zinc-500">{topic.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
