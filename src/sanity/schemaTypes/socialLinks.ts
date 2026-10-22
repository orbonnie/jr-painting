import { defineField, defineType } from "sanity";

export const socialLinks = defineType({
  name: "socialLinks",
  title: "Social Links",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Social Links",
    }),
    defineField({
      name: "links",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "Facebook" },
                  { title: "Google", value: "Google" },
                  { title: "Instagram", value: "Instagram" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Profile URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "enabled",
              title: "Show Link",
              type: "boolean",
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
  ],
});
