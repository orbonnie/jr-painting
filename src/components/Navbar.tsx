"use client";

import TopBar from "./TopBar";
import MainBar from "./MainBar";
import { SocialLink } from "../../types";

export default function Navbar({
  socialLinks,
  logoUrl,
}: {
  socialLinks: SocialLink[];
  logoUrl: string;
}) {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar socialLinks={socialLinks} />
      <div className="sticky top-0 z-50">
        <MainBar logoUrl={logoUrl} />
      </div>
    </>
  );
}
