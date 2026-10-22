import { type SchemaTypeDefinition } from "sanity";

import { navbar } from "./navbar";
import { homePage } from "./homePage";
import { reviews } from "./reviews";
import { homeCTA } from "./homeCTA";
import { locations } from "./locations";
import { services } from "./services";
import { projects } from "./projects";
import { contact } from "./contact";
import { quote } from "./quote";
import { footer } from "./footer";
import { socialLinks } from "./socialLinks";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navbar,
    homePage,
    reviews,
    homeCTA,
    locations,
    services,
    projects,
    contact,
    quote,
    footer,
    socialLinks,
  ],
};
