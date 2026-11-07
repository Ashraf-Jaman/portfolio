import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Whatsapp } from "@/components/icons";

function ProfileCard() {
  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[275px] lg:self-start">
      <div className="flex min-h-[500px] flex-col overflow-hidden rounded-[1.1rem] bg-white p-4 text-zinc-950 shadow-2xl shadow-black/20 sm:p-4">
        <div className="relative mx-auto aspect-square w-full max-w-[218px] overflow-hidden rounded-xl bg-orange-600">
          <Image src="/hero-image.jpg" alt="Md Ashraf Jaman Hridoy" fill sizes="(max-width: 1024px) 70vw, 250px" className="object-cover" priority />
        </div>
        <h2 className="mt-4 text-center text-2xl font-black tracking-tight">Md Ashraf Jaman Hridoy</h2>
        <div className="relative mx-auto mt-4 flex h-9 items-center justify-center"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm"><Sparkles size={16} /></div></div>
        <p className="mx-auto mt-1 max-w-[230px] text-center text-sm font-bold leading-5 text-zinc-700">A Full Stack Developer focused on AI-driven innovation, modern web technologies, and intelligent solutions.</p>
        <div className="mt-auto flex items-center justify-center gap-6 pb-4 pt-6 text-orange-500">
          <a href="https://wa.me/8801841390122" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="Chat on WhatsApp" className="transition-all duration-200 hover:scale-110 hover:text-orange-700"><Whatsapp size={21} strokeWidth={2} /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashrafjaman680@gmail.com&su=Project%20Inquiry" target="_blank" rel="noreferrer" aria-label="Email Md Ashraf Jaman Hridoy" title="Email Md Ashraf Jaman Hridoy" className="transition-all duration-200 hover:scale-110 hover:text-orange-700"><Mail size={21} strokeWidth={2} /></a>
          <a href="https://www.linkedin.com/in/ashraf-jaman/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-all duration-200 hover:scale-110 hover:text-orange-700"><Linkedin size={21} strokeWidth={2} /></a>
          <a href="https://github.com/Ashraf-Jaman" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-all duration-200 hover:scale-110 hover:text-orange-700"><Github size={21} strokeWidth={2} /></a>
        </div>
      </div>
    </aside>
  );
}

function ContactForm() {
  return (
    <section className="mt-16 border-t border-white/10 pt-14 sm:mt-24 sm:pt-20">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
        <h2 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">Let&apos;s work <span className="text-zinc-600">together.</span></h2>
      </div>
      <form className="grid gap-5 md:grid-cols-2" action="#" method="post">
        <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">Name<input name="name" placeholder="Your name" className="rounded-xl border-0 bg-white/[0.08] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none ring-0 placeholder:text-zinc-600 focus:bg-white/[0.12]" /></label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">Email<input type="email" name="email" placeholder="you@email.com" className="rounded-xl border-0 bg-white/[0.08] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none ring-0 placeholder:text-zinc-600 focus:bg-white/[0.12]" /></label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 md:col-span-2">Budget<select name="budget" defaultValue="" className="appearance-none rounded-xl border-0 bg-white/[0.08] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none focus:bg-white/[0.12]"><option value="" disabled className="bg-zinc-900">Select your budget</option><option value="under-1k" className="bg-zinc-900">Under $1,000</option><option value="1k-3k" className="bg-zinc-900">$1,000 – $3,000</option><option value="3k-5k" className="bg-zinc-900">$3,000 – $5,000</option><option value="5k-plus" className="bg-zinc-900">$5,000+</option></select></label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 md:col-span-2">Message<textarea name="message" rows={4} placeholder="Tell me about your project" className="resize-none rounded-xl border-0 bg-white/[0.08] px-4 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-zinc-600 focus:bg-white/[0.12]" /></label>
        <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400">Send message <ArrowUpRight size={16} /></button>
      </form>
    </section>
  );
}

export default function PortfolioShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex min-h-screen w-full max-w-[936px] flex-col gap-8 px-4 pb-24 pt-24 sm:px-6 lg:flex-row lg:gap-20 lg:px-0 lg:pt-32"><ProfileCard /><div className="min-w-0 flex-1">{children}<ContactForm /></div></div>;
}
