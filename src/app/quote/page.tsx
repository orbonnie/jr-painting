import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { reviews } from "@/data/reviews";

export default function RequestAQuotePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-grey-800">
        <div className="mx-auto flex min-h-60 max-w-6xl flex-col px-10 py-16 md:px-20">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Request A Quote
          </h1>

          <div className="mt-3 text-sm text-white">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>

            <span className="mx-2 text-orange-800">›</span>

            <span className="text-orange-800">Request A Quote</span>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="mx-auto max-w-6xl px-10 py-16 md:px-20 lg:px-16">
        <div className="max-w-3xl">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-grey-900">
              Get Free Quote
            </h2>
            <div className="mb-5 h-px w-10 bg-orange-800" />
          </div>

          <p className="mb-10 text-sm leading-7 text-grey-600">
            Please use this form to request a custom quote for your project. We
            try to respond to all inquiries within two business days.
          </p>

          <ContactForm />
        </div>
      </section>

      <hr className="mx-[10vw] text-grey-400" />

      {/* Testimonials */}
      <section className="w-full">
        <div className="mx-auto mb-10 max-w-6xl px-10 md:px-20">
          <div className="pt-16">
            <h2 className="mb-2 text-2xl font-semibold text-grey-900">
              Recent Testimonials
            </h2>
            <div className="mb-5 h-px w-10 bg-orange-800" />
          </div>

          <div className="grid gap-x-16 gap-y-16 pb-16 md:grid-cols-2">
            {reviews.map((review) => (
              <div key={review.name} className="flex gap-4">
                <span className="shrink-0 font-serif text-7xl leading-none text-grey-500">
                  &ldquo;
                </span>

                <div>
                  <p className="text-sm leading-7 text-grey-900">
                    {review.text}
                  </p>

                  <p className="mt-4 text-lg text-grey-900">— {review.name}</p>

                  <p className="mt-1 text-sm text-grey-700">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
