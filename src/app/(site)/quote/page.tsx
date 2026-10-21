import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import PageHero from "@/components/PageHero";

const quoteQuery = groq`
  *[_type == "quote"][0] {
    pageTitle,
    formHeading,
    introText
  }
`;

type QuoteData = {
  pageTitle: string;
  formHeading: string;
  introText: string;
};

export default async function RequestAQuotePage() {
  const { data } = await sanityFetch({
    query: quoteQuery,
  });

  const quote = (data as QuoteData) || null;

  return (
    <main>
      {/* Hero */}
      <PageHero title={quote.pageTitle} />

      {/* Quote form */}
      <section className="mx-auto max-w-6xl px-10 py-16 md:px-20 lg:px-16">
        <div className="max-w-3xl">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-grey-900">
              {quote.formHeading}
            </h2>
            <div className="mb-5 h-px w-10 bg-orange-800" />
          </div>

          <p className="mb-10 text-sm leading-7 text-grey-600">
            {quote.introText}
          </p>

          <ContactForm />
        </div>
      </section>

      <hr className="mx-[10vw] text-grey-400" />

      <Testimonials />
    </main>
  );
}
