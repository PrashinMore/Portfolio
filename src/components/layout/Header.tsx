"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { RESUME_URL, SITE, SOCIAL } from "@/lib/constants";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#systems", label: "Systems" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(3, 0, 20, 0.5)", "rgba(3, 0, 20, 0.85)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-transparent"
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        style={{ opacity: borderOpacity }}
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/#hero" className="group flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-indigo-500/20 ring-1 ring-white/10 transition group-hover:ring-violet-400/40">
            <span className="text-sm font-bold text-violet-200">PM</span>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">{SITE.name}</span>
            <span className="text-[11px] text-zinc-500">SDE-3</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <motion.a
            href={RESUME_URL}
            download={
              RESUME_URL.startsWith("/") ? "Prashin_More_2026.pdf" : undefined
            }
            target={RESUME_URL.startsWith("/") ? undefined : "_blank"}
            rel={RESUME_URL.startsWith("/") ? undefined : "noopener noreferrer"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-500/10"
          >
            Resume
          </motion.a>
          <motion.a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20"
          >
            <GitHubIcon className="h-4 w-4 text-white" />
            GitHub
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-200 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#050118]/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={RESUME_URL}
              download={
                RESUME_URL.startsWith("/") ? "Prashin_More_2026.pdf" : undefined
              }
              target={RESUME_URL.startsWith("/") ? undefined : "_blank"}
              rel={RESUME_URL.startsWith("/") ? undefined : "noopener noreferrer"}
              className="mt-2 rounded-lg border border-white/15 px-3 py-2 text-center text-sm"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
