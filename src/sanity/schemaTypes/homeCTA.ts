import { defineField, defineType } from "sanity";

export const homeCTA = defineType({
  name: "homeCTA",
  title: "Homepage CTA & Features",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Homepage CTA & Features",
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/contact",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Feature Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Feature Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Feature Icon",
              type: "string",
              options: {
                list: [
                  { title: "Professional Service (Users)", value: "Users" },
                  { title: "Quality (Gem)", value: "Gem" },
                  { title: "Always on Time (History)", value: "History" },
                  { title: "We Care (Heart)", value: "Heart" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
});
