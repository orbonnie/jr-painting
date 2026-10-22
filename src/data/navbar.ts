import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const navbarQuery = groq`
  *[_type == "navbar"][0] {
    "logoUrl": logo.asset->url
  }
`;

type NavbarData = {
  logoUrl?: string;
};

export async function getNavbarLogo(): Promise<string> {
  const { data } = await sanityFetch({
    query: navbarQuery,
  });

  const navbar = data as NavbarData | null;

  return navbar?.logoUrl ?? "/jr-painting.png";
}
