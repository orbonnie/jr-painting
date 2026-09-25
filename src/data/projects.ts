export type ProjectCategory =
  | "commercial"
  | "residential"
  | "interior"
  | "exterior";

export type Project = {
  slug: string;
  title: string;
  desc: string;
  images: string[];
  categories: ProjectCategory[];
};

export const projects: Project[] = [
  {
    slug: "pti-products-techniques",
    title: "PTI – Products Techniques Inc.",
    desc: "PTI manufactures military and federal specification coatings. It was a pleasure to \
    bring this building back to life. Be sure to check out the before photos to see what a \
    difference a professional paint job can make.",
    images: ["pti-1", "pti-2", "pti-3"],
    categories: ["commercial", "exterior"],
  },
  {
    slug: "palmyra-mini-storage",
    title: "Palmyra Mini Storage",
    desc: "Palmyra Mini Storage is located in the quaint old town part of the city of Orange.  \
    They needed a full repaint and it turned out great!",
    images: ["palmyra-1", "palmyra-2", "palmyra-3"],
    categories: ["commercial", "exterior"],
  },
  {
    slug: "abell-home-newport-beach",
    title: "Abell Home – Newport Beach",
    desc: "This home was part of a two house project. The owners bought a large property on the \
    Balboa Peninsula, tore down the old home and built two new homes in its place. \
    Being right on the water, we had to use different techniques and products to ensure the \
    paint on this home would last.",
    images: ["abell-1", "abell-2", "abell-3"],
    categories: ["residential", "interior", "exterior"],
  },
  {
    slug: "helou-home-newport-beach",
    title: "Helou Home – Newport Beach",
    desc: "This home was part of a two house project. The owners bought a large property on the \
    Balboa Peninsula in Newport Beach, tore down the old home and built two new homes in its place. \
    Being right on the water, we had to use different techniques and products to ensure the \
    paint on this home would last.",
    images: ["helou-1", "helou-2", "helou-3"],
    categories: ["residential", "interior", "exterior"],
  },
  {
    slug: "johnstone-station-san-dimas",
    title: "Johnstone Station – San Dimas",
    desc: "Johnstone is a community project that began with Townhomes, then 5 regular houses and \
    finally a set of Live-Work Units (Office space on bottom level, Living space on top). \
    This was a several year project that we were proud to be a part of.",
    images: ["johnstone-1", "johnstone-2", "johnstone-3"],
    categories: ["commercial", "residential", "interior", "exterior"],
  },
  {
    slug: "before-and-after-projects",
    title: "Before and After Projects",
    desc: "Scroll through to see Before and After pictures of several homes we have worked on \
    over the years. Many are a simple repaint, but some of the older homes needed prep-work \
    completed in order to restore its former glory.",
    images: ["baa-1", "baa-2", "baa-3"],
    categories: ["residential", "exterior"],
  },
  {
    slug: "chino-home",
    title: "Chino Home",
    desc: "",
    images: ["chino-1", "chino-2", "chino-3"],
    categories: ["residential", "exterior"],
  },
  {
    slug: "mcdonalds",
    title: "McDonald's",
    desc: "",
    images: ["mcd-1", "mcd-2", "mcd-3"],
    categories: ["commercial", "exterior"],
  },
  {
    slug: "oakhurst-home-beverly-hills",
    title: "Oakhurst Home – Beverly Hills",
    desc: "",
    images: ["oakhurst-1", "oakhurst-2", "oakhurst-3"],
    categories: ["residential", "interior", "exterior"],
  },
  {
    slug: "boyle-heights-craftsman",
    title: "Boyle Heights Craftsman",
    desc: "",
    images: ["boyle-1", "boyle-2", "boyle-3"],
    categories: ["residential", "exterior"],
  },
];
