import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { reviews } from "./reviews";
import { homeCTA } from "./homeCTA";
import { locations } from "./locations";
import { services } from "./services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, reviews, homeCTA, locations, services],
};
