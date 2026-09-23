"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function MainBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        ((menuRef.current && !menuRef.current.contains(event.target as Node)) ||
          (menuButtonRef.current &&
            menuButtonRef.current.contains(event.target as Node)))
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + navigation */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/jr-painting.png"
              alt="Jacob Reitz Painting"
              width={200}
              height={200}
              className="h-16 w-auto"
            />
          </Link>

          {/* Hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-4 text-gray-800 transition-colors hover:text-orange-900 md:hidden"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 ml-10 md:flex">
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

        {/* <div className="flex items-center gap-8"> */}
        {/* <Link
              href="/contact"
              className="text-sm tracking-widest uppercase text-black hover:text-grey-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          */}
        {/* Quote */}
        <Link
          href="/quote"
          className="bg-orange-800 text-gray-900 font-semibold rounded px-4 py-2 text-xs uppercase  transition-colors hover:bg-grey-900 hover:text-white"
        >
          Get a Quote
        </Link>
      </div>
      {/* Mobile Dropdown */}
      <nav className="absolute left-0 top-full z-10 w-[80%] border-t border-gray-200 bg-white shadow-md rounded-br-md md:hidden">
        <div ref={menuRef} className="flex flex-col">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className="overflow-hidden transition-[max-height] duration-800 ease-out"
              style={{
                maxHeight: menuOpen ? "72px" : "0px",
                transitionDelay: menuOpen
                  ? `${index * 120}ms`
                  : `${(navLinks.length - index - 1) * 60}ms`,
              }}
            >
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 px-6 py-5 text-sm uppercase tracking-widest text-black transition-colors hover:bg-grey-300"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
