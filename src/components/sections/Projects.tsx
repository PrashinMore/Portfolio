"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-violet-400/90"
        >
          Featured work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Products, platforms, and{" "}
          <span className="gradient-text">polished surfaces</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Each card blends product thinking with engineering rigor. Hover for a subtle
          tilt—details matter.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-1 xl:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
