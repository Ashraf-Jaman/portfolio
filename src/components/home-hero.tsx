import Link from "next/link";
import { ArrowUpRight, Sparkles } from "@/components/icons";

export default function HomeHero() {
  return (
    <section className="mobile-section-center flex min-h-0 min-w-0 flex-col justify-start px-1 pb-24 pt-2 text-center sm:pb-28 sm:pt-4 lg:text-left">
      <p className="mb-4 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-orange-400 lg:justify-start sm:text-sm">
        <Sparkles size={16} strokeWidth={2.2} /> AI Powered
      </p>
      <h1 className="max-w-full space-y-2 text-[clamp(1.6rem,5.5vw,3.8rem)] font-black uppercase leading-[0.95] tracking-[-0.07em] text-white sm:text-[clamp(2.8rem,5.5vw,3.8rem)]">
        <span className="block whitespace-nowrap">Full Stack</span>
        <span className="block whitespace-nowrap text-zinc-500">
          Web Developer
        </span>
      </h1>
      <p className="mt-7 max-w-md text-sm leading-5 text-zinc-400 sm:text-base">
        Passionate about building AI-powered applications and seamless digital
        experiences. I transform complex ideas into innovative, scalable, and
        beautifully crafted solutions.
      </p>
      <div className="mobile-actions-center mt-8 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
        >
          View my work <ArrowUpRight size={16} />
        </Link>
        <Link
          href="/resume"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:border-white/40 hover:text-white"
        >
          My resume
        </Link>
      </div>
    </section>
  );
}
