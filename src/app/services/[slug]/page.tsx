import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import Testimonials from "@/components/Testimonials";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/Projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className=" bg-grey-800">
        <div className="mx-auto flex min-h-60 max-w-6xl flex-col px-10 pt-16 md:px-20">
          <h1 className="text-5xl text-white font-semibold sm:text-4xl">
            {service.title}
          </h1>
          <div className="mt-3 text-sm text-white">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>

            <span className="mx-2">›</span>

            <Link href="/services" className="hover:text-orange-600">
              Services
            </Link>

            <span className="mx-2 text-orange-800">›</span>

            <span className="text-orange-800">{service.title}</span>
          </div>
          {/* Service navigation */}
          <nav className="mt-auto border-t border-grey-300/20">
            <div className="flex flex-wrap gap-x-8 gap-y-3 py-4">
              {services.map((item) => (
                <Link
                  key={item.slug}
                  href={`/service/${item.slug}`}
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    item.slug === service.slug
                      ? "text-orange-800"
                      : "text-white hover:text-orange-600"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* Descriptions */}
      <section className="mx-auto max-w-6xl py-16 px-10 md:px-20">
        <div className="w-3/4">
          <div className="mb-10">
            <div className="mb-5 h-px w-10 bg-orange-800" />

            <h2 className="text-md font-light text-black">
              Sustainable Construction – Building Confidence Based on a
              Foundation of Trust.
            </h2>
          </div>

          {service.description.interior && (
            <div>
              {service.description.exterior && (
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-grey-900">
                  Interior:
                </h3>
              )}

              <p className="whitespace-pre-line text-sm leading-7 text-grey-600">
                {service.description.interior}
              </p>
            </div>
          )}

          {service.description.exterior && (
            <div className={service.description.interior ? "mt-15" : ""}>
              {service.description.interior && (
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-grey-900">
                  Exterior:
                </h3>
              )}

              <p className="whitespace-pre-line text-sm leading-7 text-grey-600">
                {service.description.exterior}
              </p>
            </div>
          )}
          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-block rounded bg-orange-800 px-5 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-grey-800 hover:text-white"
            >
              Discuss Your Project with Our Team
            </Link>
          </div>
        </div>
      </section>

      <hr className="text-grey-400 mx-[10vw]" />

      <Testimonials />

      <hr className="text-grey-400 mx-[10vw]" />

      <Projects />
    </main>
  );
}
