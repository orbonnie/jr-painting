import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function MainBar() {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + navigation */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/jr-painting.png"
              alt="Jacob Reitz Painting"
              width={450}
              height={444}
              loading="eager"
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 ml-10">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-black hover:text-orange-900 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Quote */}
        <div className="hidden md:flex items-center gap-8">
          {/* <Link
            href="/contact"
            className="text-sm tracking-widest uppercase text-black hover:text-grey-400 transition-colors"
          >
            Contact Us
          </Link> */}

          <Link
            href="/quote"
            className="bg-orange-800 text-grey-10 font-bold rounded px-5 py-3 text-sm tracking-widest uppercase hover:bg-grey-900 hover:text-white transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
