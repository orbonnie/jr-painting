"use client";

import type { ReactNode } from "react";
import { stegaClean } from "next-sanity";
import { useHoverReset } from "@/hooks/useHoverReset";
import { SocialData, SocialLink } from "../../types";
import { sanityAttr } from "@/lib/sanityAttr";

type SocialIcon = {
  label: string;
  icon: ReactNode;
  separator: string;
};

export const socialIcons: SocialIcon[] = [
  {
    label: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M14 13.5h2.5l1-3H14V8.5c0-.8.2-1.1 1-1.1h1.5v-3h-2.5C11.5 4.4 10 5.8 10 8.5v2H8v3h2V21h4v-7.5z" />
      </svg>
    ),
    separator: "/",
  },
  {
    label: "Google",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M9 11.5v2h3.9c-.2 1.2-1.4 2.5-3.9 2.5-2.2 0-4-1.8-4-4s1.8-4 4-4c1.2 0 2.1.5 2.6 1l1.6-1.6C12.2 6.4 10.7 5.5 9 5.5c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c3.8 0 6.3-2.7 6.3-6.4 0-.4 0-.7-.1-1H9z" />
        <path d="M21 11h-2V9h-1.5v2h-2v1.5h2v2H19v-2h2V11z" />
      </svg>
    ),
    separator: "/",
  },
  {
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    separator: "",
  },
];

function SocialCard({
  social,
  textColor,
  hoverColor,
  dataSanity,
}: {
  social: SocialLink & { icon: ReactNode };
  textColor: string;
  hoverColor: string;
  dataSanity?: string;
}) {
  const hover = useHoverReset();

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      data-sanity={dataSanity}
      onMouseEnter={hover.onMouseEnter}
      onMouseLeave={hover.onMouseLeave}
      className={`transition-colors ${hover.hovered ? hoverColor : textColor}`}
    >
      {social.icon}
    </a>
  );
}

export default function SocialLinks({
  data,
  textColor = "text-grey-400",
  hoverColor = "text-orange-600",
}: {
  data: SocialData;
  textColor?: string;
  hoverColor?: string;
}) {
  const attr =
    data.docId && data.docType ? sanityAttr(data.docId, data.docType) : null;

  const displayedLinks = data.links
    .map((link) => {
      const icon = socialIcons.find(
        (social) => social.label === stegaClean(link.label),
      );

      if (!icon) return null;

      return {
        ...link,
        icon: icon.icon,
        separator: icon.separator,
      };
    })
    .filter((link) => link !== null);

  return (
    <div className="flex items-center gap-3">
      {displayedLinks.map((social) => (
        <div key={social.label} className="flex items-center gap-2">
          <SocialCard
            social={social}
            textColor={textColor}
            hoverColor={hoverColor}
            aria-label={stegaClean(social.label)}
            dataSanity={
              attr
                ? attr.scope(`links[_key=="${social._key}"]`).toString()
                : undefined
            }
          />
          <span className="text-grey-400">{social.separator}</span>
        </div>
      ))}
    </div>
  );
}
