import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNavbarLogo } from "@/data/navbar";
import { getSocialData } from "@/data/socialLinks";
import { SocialData } from "../../../types";

export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [socialData, logoData] = await Promise.all([
    getSocialData(),
    getNavbarLogo(),
  ]);

  if (!logoData) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar socialData={socialData as SocialData} logoData={logoData} />
      <main className="flex-1">{children}</main>
      <Footer socialData={socialData as SocialData} />
    </div>
  );
}
