"use client";

import TopBar from "./TopBar";
import MainBar from "./MainBar";
import { SocialData, LogoData } from "../../types";

export default function Navbar({
  socialData,
  logoData,
}: {
  socialData: SocialData;
  logoData: LogoData;
}) {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar socialData={socialData} />
      <div className="sticky top-0 z-50">
        <MainBar logoData={logoData} />
      </div>
    </>
  );
}
