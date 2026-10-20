import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Hero",
    }),
    defineField({
      name: "heroSlides",
      title: "Hero Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Slide Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Image Alternative Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Slide Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Slide Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "icon",
              title: "Slide Icon",
              type: "string",
              options: {
                list: [
                  { title: "Gem", value: "Gem" },
                  { title: "Corners", value: "Expand" },
                  { title: "House", value: "HousePlus" },
                ],
                layout: "radio",
              },
            }),
            defineField({
              name: "link",
              title: "Button Link",
              type: "string",
              description: "For example, /services or /contact",
            }),
            defineField({
              name: "linkText",
              title: "Button Text",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
              subtitle: "description",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
