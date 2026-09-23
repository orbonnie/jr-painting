import SocialLinks from "@/components/SocialLinks";

export default function TopBar() {
  return (
    <div className="w-full bg-grey-900 px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-end py-2">
        <SocialLinks />
      </div>
    </div>
  );
}
