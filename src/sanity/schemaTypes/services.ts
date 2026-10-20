import { defineField, defineType } from "sanity";

export const services = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Our Services",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Service Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "slug",
              title: "URL Slug",
              type: "slug",
              options: {
                source: "title",
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "shortDescription",
              title: "Short Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "interiorDescription",
              title: "Interior Description",
              type: "text",
              rows: 8,
            }),
            defineField({
              name: "exteriorDescription",
              title: "Exterior Description",
              type: "text",
              rows: 8,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "slug.current",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
