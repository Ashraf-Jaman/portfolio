import { ArrowUpRight } from "@/components/icons";

export default function ResumeSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Resume</p>
        <a href="/resume.pdf" download="Md-Ashraf-Jaman-Hridoy-Resume.pdf" className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-orange-400">Download PDF <ArrowUpRight size={14} /></a>
      </div>
      <article className="overflow-hidden rounded-lg bg-white text-zinc-900 shadow-2xl shadow-black/20">
        <header className="bg-zinc-100 px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">Full Stack Web Developer</p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Md Ashraf Jaman Hridoy</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">Building reliable, scalable, and user-focused web products from idea to launch.</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-zinc-500"><span>ashrafjaman680@gmail.com</span><span>Dhaka, Bangladesh</span><span>linkedin.com/in/ashraf-jaman</span><span>github.com/Ashraf-Jaman</span></div>
        </header>
        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <ResumeBlock title="Experience"><ResumeJob title="Senior Full Stack Developer" meta="Independent · Remote · 2022 — Present">Designing and shipping production-ready applications with Next.js, Express, MongoDB, and TypeScript.</ResumeJob><ResumeJob title="Web Developer" meta="Digital Studio · 2019 — 2022">Built responsive websites, REST APIs, dashboards, and reusable component systems for growing teams.</ResumeJob></ResumeBlock>
            <ResumeBlock title="Selected projects"><p className="text-sm leading-6 text-zinc-600">KGC Math · StudioSpace · BazarDor</p></ResumeBlock>
          </div>
          <aside><ResumeBlock title="Skills"><p className="text-sm leading-7 text-zinc-600">Next.js · Express.js · MongoDB · React · TypeScript · REST APIs · Node.js</p></ResumeBlock><ResumeBlock title="Tools"><p className="text-sm leading-7 text-zinc-600">VS Code · ChatGPT · Docker · GitHub · Postman · Vercel · Figma</p></ResumeBlock><ResumeBlock title="Education"><p className="text-sm font-bold">Computer Science & Engineering</p><p className="mt-1 text-sm text-zinc-500">2015 — 2019</p></ResumeBlock></aside>
        </div>
      </article>
    </section>
  );
}

function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mb-10"><h2 className="border-b-2 border-zinc-900 pb-2 text-sm font-black uppercase tracking-[0.2em]">{title}</h2><div className="mt-5">{children}</div></section>;
}

function ResumeJob({ title, meta, children }: { title: string; meta: string; children: string }) {
  return <div className="mb-7"><div className="flex flex-wrap justify-between gap-2"><h3 className="font-bold">{title}</h3><span className="text-xs text-zinc-500">{meta}</span></div><p className="mt-1 text-sm font-semibold text-orange-600">Full Stack Development</p><p className="mt-2 text-sm leading-6 text-zinc-600">{children}</p></div>;
}
