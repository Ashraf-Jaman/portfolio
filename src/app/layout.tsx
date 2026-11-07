import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import PortfolioShell from "@/components/portfolio-shell";

export const metadata: Metadata = {
  title: "Md Ashraf Jaman Hridoy",
  description: "Portfolio of Md Ashraf Jaman Hridoy, a full stack web developer.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <Navbar />
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
