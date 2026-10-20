import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { PaintRoller, ShelvingUnit, Sparkles, Wrench } from "lucide-react";

export const serviceIcons = {
  painting: PaintRoller,
  cabinetry: ShelvingUnit,
  cleaning: Sparkles,
  repairs: Wrench,
};

export type Service = {
  title: string;
  slug: string;
  shortDescription?: string;
  interiorDescription?: string;
  exteriorDescription?: string;
};

const servicesQuery = groq`
  *[_type == "services"][0] {
    "services": services[] {
      title,
      "slug": slug.current,
      shortDescription,
      interiorDescription,
      exteriorDescription
    }
  }
`;

type ServicesData = {
  services: Service[];
};

export async function getServices(): Promise<Service[]> {
  const { data } = await sanityFetch({
    query: servicesQuery,
  });

  const servicesData = (data as ServicesData) || null;

  return servicesData?.services ?? [];
}
