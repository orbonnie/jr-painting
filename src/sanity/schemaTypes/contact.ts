import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      initialValue: "Contact Us",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formHeading",
      title: "Form Heading",
      type: "string",
      initialValue: "Send Us a Message",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactHeading",
      title: "Contact Information Heading",
      type: "string",
      initialValue: "Contact Info",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introText",
      title: "Introduction",
      type: "text",
      rows: 4,
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
      description: "Include the country code, for example +13104979326.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
