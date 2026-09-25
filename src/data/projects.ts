type ProjectCategory = "commercial" | "residential" | "interior" | "exterior";

export type Project = {
  slug: string;
  title: string;
  images: string[];
  categories: ProjectCategory[];
};

export const projects = [
  {
    slug: "pti-products-techniques",
    title: "PTI – Products Techniques Inc.",
    cloudinaryFolder: "pti",
    images: ["pti-1", "pti-2", "pti-3"],
    categories: ["commercial", "exterior"],
  },
  {
    slug: "palmyra-mini-storage",
    title: "Palmyra Mini Storage",
    cloudinaryFolder: "palmyra",
    images: ["palmyra-1", "palmyra-2", "palmyra-3"],
    categories: ["commercial", "exterior"],
  },
  {
    slug: "abell-home-newport-beach",
    title: "Abell Home – Newport Beach",
    cloudinaryFolder: "abell",
    images: ["abell-1", "abell-2", "abell-3"],
    categories: ["residential", "interior", "exterior"],
  },
  {
    slug: "helou-home-newport-beach",
    title: "Helou Home – Newport Beach",
    cloudinaryFolder: "helou",
    images: ["helou-1", "helou-2", "helou-3"],
    categories: ["residential", "interior", "exterior"],
  },
  {
    slug: "johnstone-station-san-dimas",
    title: "Johnstone Station – San Dimas",
    cloudinaryFolder: "johnstone",
    images: ["johnstone-1", "johnstone-2", "johnstone-3"],
    categories: ["commercial", "residential", "interior", "exterior"],
  },
  {
    slug: "before-and-after-projects",
    title: "Before and After Projects",
    cloudinaryFolder: "baa",
    images: ["baa-1", "baa-2", "baa-3"],
    categories: ["residential", "exterior"],
  },
  {
    slug: "chino-home",
    title: "Chino Home",
    cloudinaryFolder: "chino",
    images: ["chino-1", "chino-2", "chino-3"],
    categories: ["residential", "exterior"],
  },
  {
    slug: "mcdonalds",
    title: "McDonald's",
    cloudinaryFolder: "mcd",
    images: ["mcd-1", "mcd-2", "mcd-3"],
    categories: ["commercial", "exterior"],
  },
  {
    slug: "oakhurst-home-beverly-hills",
    title: "Oakhurst Home – Beverly Hills",
    cloudinaryFolder: "oakhurst",
    images: ["oakhurst-1", "oakhurst-2", "oakhurst-3"],
    categories: ["residential", "interior", "exterior"],
  },
  {
    slug: "boyle-heights-craftsman",
    title: "Boyle Heights Craftsman",
    cloudinaryFolder: "boyle",
    images: ["boyle-1", "boyle-2", "boyle-3"],
    categories: ["residential", "exterior"],
  },
];
