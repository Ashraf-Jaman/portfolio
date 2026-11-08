import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";

interface Project {
  name: string;
  type: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    name: "KGC Math",
    type: "College Department Portal",
    image: "/project-kgc-math.svg",
    liveUrl: "https://kgc-math.vercel.app/",
    repoUrl: "https://github.com/Ashraf-Jaman/kgc-math",
  },
  {
    name: "StudioSpace",
    type: "Creative Studio Booking Platform",
    image: "/project-studio-space.svg",
    liveUrl: "https://studio-space-frontend-beta.vercel.app/",
    repoUrl: "https://github.com/Ashraf-Jaman/studio-space-frontend",
  },
  {
    name: "BazarDor",
    type: "Daily Market Price Tracking Platform",
    image: "/project-bazar-dor.svg",
    liveUrl: "https://bazar-dor-five-theta.vercel.app/",
    repoUrl: "https://github.com/Ashraf-Jaman/bazar-dor",
  },
];

export default function RecentProjects() {
  return (
    <section className="mobile-section-center pb-16 pt-0 text-center sm:pb-20 sm:pt-1 lg:text-left">
      <h2 className="mx-auto max-w-full text-[clamp(2.5rem,10vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:mx-0">
        Recent<br />
        <span className="text-zinc-700">Projects</span>
      </h2>
      <div className="mt-2 space-y-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group grid grid-cols-[72px_1fr] items-center gap-4 rounded-2xl bg-zinc-950 p-3 text-left transition-colors duration-300 hover:bg-zinc-800/70 sm:grid-cols-[96px_1fr_auto] sm:gap-5 sm:p-4"
          >
            <div className="relative h-[72px] overflow-hidden rounded-lg bg-zinc-800 sm:h-24 sm:w-24">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="96px"
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white transition group-hover:text-orange-400 sm:text-2xl">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:underline"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 transition group-hover:text-zinc-300">
                    {project.type}
                  </p>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="sm:hidden"
                >
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-orange-500 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-orange-500 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-orange-400"
                >
                  Live Link
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-white/[0.06] px-3.5 py-2 text-xs font-bold text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name}`}
              className="hidden sm:block"
            >
              <ArrowUpRight
                size={18}
                className="shrink-0 text-orange-500 transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
