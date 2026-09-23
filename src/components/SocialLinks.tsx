"use client";

import { socialLinks, type SocialLink } from "@/data/socialLinks";
import { useHoverReset } from "@/hooks/useHoverReset";

function SocialCard({
  social,
  textColor,
  hoverColor,
}: {
  social: SocialLink;
  textColor: string;
  hoverColor: string;
}) {
  const hover = useHoverReset();

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      className={`transition-colors ${hover.hovered ? hoverColor : textColor}`}
    >
      {social.icon}
    </a>
  );
}

export default function SocialLinks({
  textColor = "text-grey-400",
  hoverColor = "text-orange-600",
}: {
  textColor?: string;
  hoverColor?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => (
        <div key={social.label} className="flex items-center gap-2">
          <SocialCard
            social={social}
            key={social.label}
            textColor={textColor}
            hoverColor={hoverColor}
          />
          <span className="text-grey-400">{social.separator}</span>
        </div>
      ))}
    </div>
  );
}
