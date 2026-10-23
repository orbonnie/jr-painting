import SocialLinks from "@/components/SocialLinks";
import { SocialData } from "../../types";

export default function TopBar({ socialData }: { socialData: SocialData }) {
  return (
    <div className="w-full bg-grey-900 px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-end py-2">
        <SocialLinks data={socialData} />
      </div>
    </div>
  );
}
