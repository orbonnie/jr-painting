import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/data/projects";
import SubpageHero from "@/components/SubpageHero";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import { getServices } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const services = await getServices();
  const projects = await getProjects();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <SubpageHero
        title={service.title}
        parent="Services"
        parentHref="/services"
        showServiceNav={true}
      />
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

          {service.interiorDescription && (
            <div>
              {service.exteriorDescription && (
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-grey-900">
                  Interior:
                </h3>
              )}

              <p className="whitespace-pre-line text-sm leading-7 text-grey-600">
                {service.interiorDescription}
              </p>
            </div>
          )}

          {service.exteriorDescription && (
            <div className={service.interiorDescription ? "mt-15" : ""}>
              {service.interiorDescription && (
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-grey-900">
                  Exterior:
                </h3>
              )}

              <p className="whitespace-pre-line text-sm leading-7 text-grey-600">
                {service.exteriorDescription}
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

      <Projects projects={projects.slice(0, 3)} />
    </main>
  );
}
