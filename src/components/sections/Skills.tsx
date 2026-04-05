"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  Database,
  Layers,
  Layout,
  Server,
} from "lucide-react";
import { SKILL_GROUPS } from "@/lib/constants";

const groupIcon = (title: string) => {
  switch (title) {
    case "Backend":
      return Server;
    case "Frontend":
      return Layout;
    case "DevOps":
      return Cloud;
    case "Databases":
      return Database;
    case "Architecture":
      return Boxes;
    default:
      return Layers;
  }
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Depth across the <span className="gradient-text">full stack</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Categorized by domain. Bars reflect relative proficiency—every item here is
          production-proven, not tutorial-tier.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = groupIcon(group.title);
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: gi * 0.06, duration: 0.45 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass group rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/20 transition group-hover:bg-violet-500/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-zinc-300">{item.name}</span>
                        <span className="font-mono text-xs text-zinc-500">{item.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
