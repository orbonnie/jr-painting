import { defineField, defineType } from "sanity";

export const locations = defineType({
  name: "locations",
  title: "Locations & About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Locations & About",
    }),
    defineField({
      name: "logoUrl",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "locationsHeading",
      title: "Locations Heading",
      type: "string",
      initialValue: "Where We Work",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "serviceAreas",
      title: "Service Areas",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
