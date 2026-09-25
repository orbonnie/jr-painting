import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import PageHero from "@/components/PageHero";

export default function RequestAQuotePage() {
  return (
    <main>
      {/* Hero */}
      <PageHero title="Request A Quote" />

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

      <Testimonials />
    </main>
  );
}
