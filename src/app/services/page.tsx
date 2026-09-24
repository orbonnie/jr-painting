import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <main>
      <section className="relative h-64">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/paintbrush.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6 lg:justify-start">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-white font-semibold sm:text-5xl">
              Services
            </h1>

            <div className="mt-4 text-sm text-white">
              <Link href="/" className="hover:text-orange-700">
                Home
              </Link>

              <span className="mx-2">›</span>

              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

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
