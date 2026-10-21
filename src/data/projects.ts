import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export type ProjectCategory =
  | "commercial"
  | "residential"
  | "interior"
  | "exterior";

export type Project = {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  images: {
    _key: string;
    asset: {
      _id: string;
      url: string;
    };
  }[];
  categories: ProjectCategory[];
};

const projectsQuery = groq`
  *[_type == "projects"] | order(orderRank asc) {
    _id,
    title,
    "slug": slug.current,
    "desc": description,
    categories,
    images[] {
      _key,
      asset-> {
        _id,
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const { data } = await sanityFetch({
    query: projectsQuery,
  });

  return (data as Project[] | null) ?? [];
}
