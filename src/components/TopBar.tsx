import { socialLinks, type SocialLink } from "@/data/socialLinks";
import { useHoverReset } from "@/hooks/useHoverReset";
function SocialCard({ social }: { social: SocialLink }) {
  const hover = useHoverReset();
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      className={`transition-colors ${
        hover.hovered ? social.hover : "text-grey-400"
      }`}
    >
      {social.icon}
    </a>
  );
}

export default function TopBar() {
  return (
    <div className="w-full bg-grey-900 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-end py-2">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <SocialCard social={social} key={social.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
