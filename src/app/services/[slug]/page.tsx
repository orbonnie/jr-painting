import Link from "next/link";
import { notFound } from "next/navigation";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

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

      {/* Reviews */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl mb-10 px-10 md:px-20">
          <div className="grid gap-x-16 gap-y-16 pt-16 md:grid-cols-2">
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

      <hr className="text-grey-400 mx-[10vw]" />

      <section className="w-full">
        <div className="mx-auto max-w-6xl py-16 px-10 md:px-20">
          {/* <div>
          <h2 className="mb-10 text-2xl font-light uppercase text-grey-900">
            Projects
          </h2>
          <div className="mb-5 h-0.25 w-10 bg-orange-800" />
        </div> */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
