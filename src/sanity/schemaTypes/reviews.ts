import { defineField, defineType } from "sanity";

export const reviews = defineType({
  name: "reviews",
  title: "Customer Reviews",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Customer Reviews",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      initialValue: "What Our Customers Say",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "reviewList",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Customer Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "location",
              title: "Customer Location",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Review Text",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "location",
            },
          },
        },
      ],
    }),
  ],
});
