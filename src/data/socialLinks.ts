import { sanityFetch } from "../sanity/lib/live";
import { groq } from "next-sanity";
import { SocialLink } from "../../types";

const socialLinkQuery = groq`
  *[_type == "socialLinks"][0] {
    links[] {
      label,
      href
    }
  }
`;

type SocialLinksData = {
  links: SocialLink[];
};

export async function getSocialLinks(): Promise<SocialLink[]> {
  const { data } = await sanityFetch({
    query: socialLinkQuery,
    stega: false,
  });

  const socialLinksData = (data as SocialLinksData) || null;
  return socialLinksData?.links ?? [];
}
