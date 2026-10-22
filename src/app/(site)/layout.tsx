import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNavbarLogo } from "@/data/navbar";
import { getSocialLinks } from "@/data/socialLinks";

export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [socialLinks, logoUrl] = await Promise.all([
    getSocialLinks(),
    getNavbarLogo(),
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar socialLinks={socialLinks} logoUrl={logoUrl} />
      <main className="flex-1">{children}</main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
