import { FileText, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { RESUME_URL, SITE, SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{SITE.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{SITE.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
            LinkedIn
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <GitHubIcon className="h-3.5 w-3.5 text-zinc-200" />
            GitHub
          </a>
          <a
            href={SOCIAL.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <LeetCodeIcon className="h-3.5 w-3.5 text-[#FFA116]" />
            LeetCode
          </a>
          <a
            href={SOCIAL.saasDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <LayoutDashboard className="h-3.5 w-3.5 text-violet-400" />
            SaaS demo
          </a>
          <a
            href={RESUME_URL}
            download={
              RESUME_URL.startsWith("/") ? "Prashin_More_2026.pdf" : undefined
            }
            target={RESUME_URL.startsWith("/") ? undefined : "_blank"}
            rel={RESUME_URL.startsWith("/") ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <FileText className="h-3.5 w-3.5 text-zinc-400" />
            Resume
          </a>
          <Link href="#hero" className="hover:text-zinc-300">
            Back to top
          </Link>
        </div>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
