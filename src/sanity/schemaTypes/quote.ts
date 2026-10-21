import { defineField, defineType } from "sanity";

export const quote = defineType({
  name: "quote",
  title: "Request a Quote Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      initialValue: "Request A Quote",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formHeading",
      title: "Form Heading",
      type: "string",
      initialValue: "Get Free Quote",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introText",
      title: "Introduction",
      type: "text",
      rows: 3,
      initialValue:
        "Please use this form to request a custom quote for your project. We try to respond to all inquiries within two business days.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
