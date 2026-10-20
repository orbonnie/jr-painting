import Link from "next/link";
import { services } from "@/data/services";
import PageHero from "@/components/PageHero";

export default function Services() {
  return (
    <main>
      <PageHero title="Services" />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="-mx-6 grid grid-cols-1 gap-0 md:mx-0 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col p-10 border-y border-gray-400/30 rounded-sm hover:bg-grey-300/50 md:border md:p-5"
              >
                <Icon
                  size={40}
                  strokeWidth={1.5}
                  className="mb-6 text-orange-800"
                />

                <Link
                  href={service.href}
                  className="mb-4 text-lg font-light uppercase text-grey-900 hover:font-semibold"
                >
                  {service.title}
                </Link>

                <p className="mb-6 text-sm leading-7 text-grey-800">
                  {service.shortDescription}
                </p>

                <Link
                  href={service.href}
                  className="mt-auto inline-block w-fit bg-orange-800 px-4 py-3 rounded text-xs uppercase font-bold text-grey-900 tracking-wider transition-colors hover:bg-grey-800 hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
