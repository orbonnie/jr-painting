import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const navbarQuery = groq`
  *[_type == "navbar"][0] {
    "docId": _id,
    "docType": _type,
    "logoUrl": logo.asset->url
  }
`;

type NavbarData = {
  docId: string | undefined;
  docType: string | undefined;
  logoUrl: string;
};

export async function getNavbarLogo() {
  const { data } = await sanityFetch({
    query: navbarQuery,
    stega: false,
  });

  const navbar = data as NavbarData | null;
  return navbar;
}
