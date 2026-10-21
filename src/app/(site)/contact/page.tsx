import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

const contactQuery = groq`
  *[_type == "contact"][0] {
    pageTitle,
    formHeading,
    contactHeading,
    introText,
    phone,
    phoneLink,
    email
  }
`;

type ContactData = {
  pageTitle: string;
  formHeading: string;
  contactHeading: string;
  introText: string;
  phone: string;
  phoneLink: string;
  email: string;
};

export default async function ContactPage() {
  const { data } = await sanityFetch({
    query: contactQuery,
  });

  const contact = (data as ContactData) || null;

  if (!contact) {
    return null;
  }
  return (
    <main>
      {/* Hero */}
      <PageHero title={contact.pageTitle} />
      <section className="mx-auto max-w-6xl px-10 py-16 md:px-20 lg:px-16">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Form */}
          <div>
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-grey-900">
                {contact.formHeading}
              </h2>
              <div className="mb-5 h-px w-10 bg-orange-800" />
            </div>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="order-first md:order-last">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-grey-900">
                {contact.contactHeading}
              </h2>
              <div className="mb-5 h-px w-10 bg-orange-800" />
            </div>

            <p className="text-sm leading-7 text-grey-600">
              {contact.introText}
            </p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-900">
                Phone
              </h3>

              <a
                href={`tel:${contact.phoneLink}`}
                className="mt-2 block text-sm text-grey-600 hover:text-orange-800"
              >
                {contact.phone}
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-900">
                Email
              </h3>

              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-sm text-grey-600 hover:text-orange-800"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
