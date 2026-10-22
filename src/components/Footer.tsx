import { sanityFetch } from "../sanity/lib/live";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { SocialLink } from "../../types";

const footerQuery = groq`
  *[_type == "footer"][0] {
    aboutHeading,
    "logo": logo.asset->url,
    aboutText,
    servicesHeading,
    contactHeading,
    phone,
    phoneLink,
    email,
    copyright,
    services[] {
      label,
      href,
    }
  }
`;

type Service = {
  label: string;
  href: string;
};

type FooterData = {
  aboutHeading: string;
  logo: string;
  aboutText: string;
  servicesHeading: string;
  contactHeading: string;
  phone: string;
  phoneLink: string;
  email: string;
  copyright: string;
  services: Service[];
};

const services = [
  { label: "Painting", href: "/services/painting" },
  { label: "Cabinetry", href: "/services/cabinetry" },
  { label: "Cleaning", href: "/services/cleaning" },
  { label: "Repairs", href: "/services/repairs" },
];

export default async function Footer({
  socialLinks,
}: {
  socialLinks: SocialLink[];
}) {
  const { data } = await sanityFetch({
    query: footerQuery,
  });

  const footer = (data as FooterData) || null;

  return (
    <footer className="bg-grey-800 text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-[1.6fr_1fr_1.6fr]">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              {footer.aboutHeading}
            </h3>
            <Image
              src={footer.logo}
              alt="Jacob Reitz Painting"
              width={200}
              height={200}
              className="mt-6 h-24 w-auto"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-300">
              {footer.aboutText}
            </p>
          </div>

          {/* Services */}
          <div className="px-1">
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              {footer.servicesHeading}
            </h3>

            <nav className="mt-6 flex flex-col gap-3">
              {footer.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-gray-300 transition-colors hover:text-orange-700"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              {footer.contactHeading}
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-gray-300">
              <a
                href={`tel:${footer.phoneLink}`}
                className="hover:text-orange-700"
              >
                {footer.phone}
              </a>
              <a
                href={`mailto:${footer.email}`}
                className="hover:text-orange-700"
              >
                {footer.email}
              </a>
            </div>
          </div>
        </div>
        {/* Social links */}
        <div className="mt-5 pt-6">
          <SocialLinks
            links={socialLinks}
            textColor="text-orange-800"
            hoverColor="text-grey-400"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-grey-900">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="text-center text-sm text-gray-400">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
