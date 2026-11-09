import { ArrowUpRight } from "@/components/icons";

export default function ResumeSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
          Resume
        </p>
        <a
          href="/resume.pdf"
          download="Md-Ashraf-Jaman-Hridoy-Resume.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-orange-400"
        >
          Download PDF <ArrowUpRight size={14} />
        </a>
      </div>

      <article className="overflow-hidden rounded-xl bg-white text-zinc-900 shadow-2xl shadow-black/20">
        {/* Header */}
        <header className="border-b border-zinc-200 bg-zinc-50/80 px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
            Md Ashraf Jaman Hridoy
          </h1>
          <p className="mt-2 text-base font-bold text-zinc-800 sm:text-lg">
            Full Stack Web Developer
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
            <span>Location: <strong className="font-semibold text-zinc-800">Bangladesh</strong></span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span>Phone: <a href="tel:01841390122" className="font-semibold text-zinc-800 hover:text-orange-600">01841390122</a></span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span>Email: <a href="mailto:ashrafjaman680@gmail.com" className="font-semibold text-zinc-800 hover:text-orange-600">ashrafjaman680@gmail.com</a></span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span>GitHub: <a href="https://github.com/Ashraf-Jaman" target="_blank" rel="noreferrer" className="font-semibold text-zinc-900 underline hover:text-orange-600">github.com/Ashraf-Jaman</a></span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span>Portfolio: <a href="https://ashraf-jaman.vercel.app" target="_blank" rel="noreferrer" className="font-semibold text-zinc-900 underline hover:text-orange-600">ashraf-jaman.vercel.app</a></span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span>LinkedIn: <a href="https://www.linkedin.com/in/ashraf-jaman" target="_blank" rel="noreferrer" className="font-semibold text-zinc-900 underline hover:text-orange-600">linkedin.com/in/ashraf-jaman</a></span>
          </div>
        </header>

        <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
          {/* Professional Summary */}
          <ResumeSectionBlock title="Professional Summary">
            <p className="text-sm leading-relaxed text-zinc-700">
              Motivated and detail-oriented Full Stack Web Developer proficient in building responsive front-end interfaces and robust back-end systems using Node.js, Express.js, and MongoDB. Experienced in API integration, authentication, modern state management, and deploying scalable web applications with clean architecture. Dedicated to writing maintainable code and solving complex computational problems while pursuing a B.Sc in Mathematics.
            </p>
          </ResumeSectionBlock>

          {/* Technical Skills */}
          <ResumeSectionBlock title="Technical Skills">
            <div className="grid gap-2.5 text-sm">
              <SkillRow
                category="Frontend & UI"
                items="HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, shadcn/ui, Flexbox, Grid"
              />
              <SkillRow
                category="Backend & Database"
                items="Node.js, Express.js, MongoDB, REST APIs, JWT, CORS, Better Auth, Zod Validation"
              />
              <SkillRow
                category="Tools & DevOps"
                items="Git, GitHub, Postman, Docker, Figma-to-Code Conversion"
              />
              <SkillRow
                category="AI & Developer Tools"
                items="Claude, Codex, Copilot, OpenCode, ChatGPT, Antigravity, Gemini"
              />
              <SkillRow
                category="Best Practices"
                items="SSR, State Management, Cross-Browser Compatibility, Optimization, Accessibility"
              />
            </div>
          </ResumeSectionBlock>

          {/* Featured Projects */}
          <ResumeSectionBlock title="Featured Projects">
            <div className="space-y-6">
              <ProjectEntry
                name="KGC Math"
                category="Educational Platform"
                liveUrl="https://kgc-math.vercel.app/"
                githubUrl="https://github.com/Ashraf-Jaman/kgc-math"
                stack="Next.js, HTML5, CSS Modules / Tailwind CSS, Node.js"
                bullets={[
                  "Developed an intuitive educational frontend platform dedicated to mathematics study resources.",
                  "Structured modular, reusable React components to ensure optimal page load performance and accessibility.",
                ]}
              />

              <ProjectEntry
                name="Studio Space"
                category="Digital Agency Frontend"
                liveUrl="https://studio-space-frontend-beta.vercel.app/"
                githubUrl="https://github.com/Ashraf-Jaman/studio-space-frontend"
                stack="Next.js, React, Modern CSS Layouts, Express.js"
                bullets={[
                  "Converted complex UI layout designs into pixel-perfect, fully responsive client-side pages.",
                  "Applied Next.js routing and UI interactive elements for smooth client navigation across screen sizes.",
                ]}
              />

              <ProjectEntry
                name="Bazar Dor"
                category="Daily Market Price Tracker"
                liveUrl="https://bazar-dor-five-theta.vercel.app/"
                githubUrl="https://github.com/Ashraf-Jaman/bazar-dor"
                stack="Next.js, React, JavaScript, Tailwind CSS, MongoDB"
                bullets={[
                  "Built a responsive web application to track daily commodity market prices with dynamic UI rendering.",
                  "Implemented clean state management and search filtering logic for seamlessly viewing product rates.",
                ]}
              />
            </div>
          </ResumeSectionBlock>

          {/* Education */}
          <ResumeSectionBlock title="Education">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-zinc-950">
                  Bachelor of Science (B.Sc) in Mathematics
                </h3>
                <span className="text-xs font-semibold text-zinc-500">
                  2nd Year (Ongoing)
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-zinc-800">
                National University, Bangladesh
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700">
                <li>
                  Currently pursuing undergraduate studies in Mathematics with a focus on analytical thinking and problem-solving skills.
                </li>
              </ul>
            </div>
          </ResumeSectionBlock>

          {/* Languages */}
          <ResumeSectionBlock title="Languages">
            <p className="text-sm text-zinc-700">
              <span className="font-bold text-zinc-900">Bengali:</span> Native{" "}
              <span className="mx-2 text-zinc-400">|</span>{" "}
              <span className="font-bold text-zinc-900">English:</span> Professional Working Proficiency
            </p>
          </ResumeSectionBlock>
        </div>
      </article>
    </section>
  );
}

function ResumeSectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="border-b-2 border-zinc-900 pb-1.5 text-xs font-black uppercase tracking-[0.2em] text-zinc-950">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SkillRow({
  category,
  items,
}: {
  category: string;
  items: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] sm:gap-4">
      <span className="font-bold text-zinc-900">{category}:</span>
      <span className="text-zinc-700">{items}</span>
    </div>
  );
}

function ProjectEntry({
  name,
  category,
  liveUrl,
  githubUrl,
  stack,
  bullets,
}: {
  name: string;
  category: string;
  liveUrl: string;
  githubUrl: string;
  stack: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 transition hover:border-zinc-200">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-zinc-950">
          {name}{" "}
          <span className="text-xs font-normal text-zinc-500">— {category}</span>
        </h3>
        <div className="flex items-center gap-3 text-xs font-semibold text-zinc-900">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 underline hover:text-orange-600"
          >
            Live Demo <ArrowUpRight size={12} />
          </a>
          <span className="text-zinc-300">|</span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 underline hover:text-orange-600"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <p className="mt-1 text-xs font-medium text-zinc-500">
        <strong className="text-zinc-700">Tech Stack:</strong> {stack}
      </p>
      <ul className="mt-2.5 list-disc space-y-1 pl-5 text-sm text-zinc-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
