import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-grey-800">
        <div className="mx-auto flex min-h-60 max-w-6xl flex-col px-10 py-16 md:px-20 lg:px-16">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Contact Us
          </h1>

          <div className="mt-3 text-sm text-white">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <span className="mx-2 text-orange-800">›</span>
            <span className="text-orange-800">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="mx-auto max-w-6xl px-10 py-16 md:px-20 lg:px-16">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Form */}
          <div>
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-grey-900">
                Send Us a Message
              </h2>
              <div className="mb-5 h-px w-10 bg-orange-800" />
            </div>

            <ContactForm />
          </div>

          {/* Contact info */}
          <div>
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-grey-900">
                Contact Info
              </h2>
              <div className="mb-5 h-px w-10 bg-orange-800" />
            </div>

            <p className="text-sm leading-7 text-grey-600">
              If you are interested in a quote for your project or if you have
              any questions, please use this form to get in touch with our team.
              We try to respond to all inquiries within two business days.
            </p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-900">
                Phone
              </h3>

              <a
                href="tel:+13104979326"
                className="mt-2 block text-sm text-grey-600 hover:text-orange-800"
              >
                (310) 497-9326
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-900">
                Email
              </h3>

              <a
                href="mailto:info.jacobreitzpainting@gmail.com"
                className="mt-2 block text-sm text-grey-600 hover:text-orange-800"
              >
                info.jacobreitzpainting@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
