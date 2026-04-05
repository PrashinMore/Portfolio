import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGoogledocs, SiLeetcode } from "react-icons/si";

type IconProps = { className?: string };

/** Brand marks. Use with a visible label or `aria-label` on the parent. */
export function LinkedInIcon({ className }: IconProps) {
  return <FaLinkedinIn className={className} aria-hidden />;
}

export function GitHubIcon({ className }: IconProps) {
  return <SiGithub className={className} aria-hidden />;
}

export function LeetCodeIcon({ className }: IconProps) {
  return <SiLeetcode className={className} aria-hidden />;
}

export function GoogleDocsIcon({ className }: IconProps) {
  return <SiGoogledocs className={className} aria-hidden />;
}
