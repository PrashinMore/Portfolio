import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

function SectionFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="h-40 animate-pulse rounded-3xl bg-white/[0.04] ring-1 ring-white/5" />
    </div>
  );
}

const About = dynamic(
  () => import("@/components/sections/About").then((m) => ({ default: m.About })),
  { loading: () => <SectionFallback /> },
);
const Skills = dynamic(
  () => import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
  { loading: () => <SectionFallback /> },
);
const Experience = dynamic(
  () =>
    import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
  { loading: () => <SectionFallback /> },
);
const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
  { loading: () => <SectionFallback /> },
);
const SystemDesign = dynamic(
  () =>
    import("@/components/sections/SystemDesign").then((m) => ({
      default: m.SystemDesign,
    })),
  { loading: () => <SectionFallback /> },
);
const BlogPlaceholder = dynamic(
  () =>
    import("@/components/sections/BlogPlaceholder").then((m) => ({
      default: m.BlogPlaceholder,
    })),
  { loading: () => <SectionFallback /> },
);
const TestimonialsPlaceholder = dynamic(
  () =>
    import("@/components/sections/TestimonialsPlaceholder").then((m) => ({
      default: m.TestimonialsPlaceholder,
    })),
  { loading: () => <SectionFallback /> },
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <SectionFallback /> },
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SystemDesign />
        <BlogPlaceholder />
        <TestimonialsPlaceholder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
