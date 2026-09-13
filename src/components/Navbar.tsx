"use client"

// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
];

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-start gap-8 relative" >
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
        <nav className="hidden md:flex items-center gap-8 w-full pr-4">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-black hover:text-silver-400 transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  )
}