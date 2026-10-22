import SocialLinks from "@/components/SocialLinks";
import { SocialLink } from "../../types";

export default function TopBar({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <div className="w-full bg-grey-900 px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-end py-2">
        <SocialLinks links={socialLinks} />
      </div>
    </div>
  );
}
