import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Painting", href: "/services/painting" },
  { label: "Cabinetry", href: "/services/cabinetry" },
  { label: "Cleaning", href: "/services/cleaning" },
  { label: "Repairs", href: "/services/repairs" },
];

export default function Footer() {
  return (
    <footer className="bg-grey-800 text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-[1.6fr_1fr_1.6fr]">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              About Us
            </h3>
            <Image
              src="/jr-logo-transp.png"
              alt="Jacob Reitz Painting"
              width={200}
              height={200}
              className="mt-6 h-24 w-auto"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-300">
              Being Southern California&apos;s leading painting service means
              that we are committed to every project, making every client&apos;s
              vision a reality.
            </p>

            {/* Social links will go here */}
          </div>

          {/* Services */}
          <div className="px-1">
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              Services
            </h3>

            <nav className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-gray-300 transition-colors hover:text-orange-900"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              Contact Us
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-gray-300">
              <span>(310) 497-9326</span>
              <span>info.jacobreitzpainting@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-grey-10">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="text-center text-sm text-gray-400">
            © 2017 Jacob Reitz Painting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
