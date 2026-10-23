import { createDataAttribute } from "next-sanity";

export const sanityAttr = (id: string, type: string) =>
  createDataAttribute({
    id,
    type,
    baseUrl: "/studio",
  });
