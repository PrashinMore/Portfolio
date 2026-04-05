"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { GitHubIcon } from "@/components/icons/SocialIcons";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: readonly string[];
  liveUrl: string;
  repoUrl: string;
  accent: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 280, damping: 22 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), spring);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`glass group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-px shadow-xl shadow-black/40`}
    >
      <div className="relative h-full rounded-[1.4rem] bg-[#07051a]/90 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />
        <p className="text-xs font-medium uppercase tracking-wider text-violet-300/80">
          {project.subtitle}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Live Demo
            <ExternalLink className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-zinc-200"
          >
            GitHub
            <GitHubIcon className="h-4 w-4 text-zinc-300" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
