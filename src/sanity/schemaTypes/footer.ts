import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
      initialValue: "About Us",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Footer Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesHeading",
      title: "Services Heading",
      type: "string",
      initialValue: "Services",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Footer Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description: "For example, /services/painting",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "contactHeading",
      title: "Contact Heading",
      type: "string",
      initialValue: "Contact Us",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
      description: "Include country code, for example +13104979326",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "copyright",
      title: "Copyright Text",
      type: "string",
      initialValue: "2017 Jacob Reitz Painting. All rights reserved.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
