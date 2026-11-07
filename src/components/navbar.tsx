import Link from "next/link";
import { Code2, FileText, FolderKanban, House, Wrench } from "@/components/icons";

const navigation = [
  { href: "/", label: "Home", icon: House },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/skills", label: "Skills", icon: Code2 },
  { href: "/tools", label: "Tools", icon: Wrench },
  { href: "/resume", label: "Resume", icon: FileText },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-2 sm:top-4 sm:px-4 md:top-5 md:px-6 lg:top-6">
      <nav aria-label="Primary navigation" className="flex w-max max-w-full items-center gap-0 rounded-[1.35rem] bg-white/[0.08] px-1.5 py-0.5 shadow-2xl shadow-black/40 backdrop-blur-md sm:gap-1 sm:px-2 md:gap-1.5 md:px-3 lg:gap-2 lg:px-4">
        {navigation.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} aria-label={label} className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12">
            <Icon size={18} strokeWidth={1.8} aria-hidden="true" className="h-[18px] w-[18px] sm:h-5 sm:w-5 md:h-[21px] md:w-[21px] lg:h-[22px] lg:w-[22px]" />
            <span className="nav-tooltip pointer-events-none absolute left-1/2 top-[calc(100%-14px)] z-10 whitespace-nowrap rounded-md bg-zinc-800 px-3 py-1 font-poppins text-xs font-bold leading-none tracking-wide text-white opacity-0 shadow-lg shadow-black/20">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
