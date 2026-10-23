import { sanityFetch } from "../sanity/lib/live";
import { groq } from "next-sanity";
import { SocialLink } from "../../types";

const socialLinkQuery = groq`
  *[_type == "socialLinks"][0] {
    "docId": _id,
    "docType": _type,
    links[] {
      _key,
      label,
      href
    }
  }
`;

type SocialLinksData = {
  docId: string | undefined;
  docType: string | undefined;
  links: SocialLink[];
};

export async function getSocialData() {
  const { data } = await sanityFetch({
    query: socialLinkQuery,
    stega: false,
  });

  const socialLinksData = (data as SocialLinksData) || null;
  return socialLinksData || null;
}
