"use client";

import { useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Can highly recommend Jacob Reitz Painting for your home project. Job was quoted, followed up on timeline and completed project before scheduled completion date. Jacob and crew are a delight to work with. I will choose his company for my interior painting as well.",
    name: "Cheryl S.",
    location: "Chino Hills, CA",
  },
  {
    quote:
      "I highly recommend Jacob Reitz Painting. I hired him to paint the exterior of my home; he was always very punctual, explained the process in detail, and ensured that I was not inconvenienced in any way.",
    name: "Leticia M.",
    location: "Montclair, CA",
  },
  {
    quote:
      "Jacob and his partner were very professional, always on time, and gave honest feedback on the work being done. It was a pleasure to work with painters who truly care about the work they perform.",
    name: "Jennifer N.",
    location: "Chino, CA",
  },
  {
    quote:
      "My house is older so my main concern was the prep work. Jacob and his partner did an outstanding job getting it ready for paint and did a phenomenal job taping off anything that could possibly need it.",
    name: "Judy P.",
    location: "Montclair, CA",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative isolate bg-white py-16 px-4 sm:px-8 overflow-hidden lg:min-h-[750px] lg:flex lg:items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/paintbrush.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover hidden sm:block"
        />
        {/* <div className="absolute inset-0 bg-white/20" /> */}
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: testimonial card, with paintbrush image bleeding out behind it */}
        <div className="relative">
          <div className="relative rounded-md bg-slate-800 p-8 sm:p-10 text-white shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Do Our Clients Say?
            </h2>
            <div className="mt-2 h-0.5 w-12 bg-orange-800" />

            <p className="mt-6 text-slate-200">
              Here are testimonials from clients about their experience and
              results.
            </p>

            <div className="mt-10 relative">
              <span className="absolute -top-4 -left-1 text-6xl font-serif text-slate-500 select-none">
                &ldquo;
              </span>
              <p className="pl-6 text-lg leading-relaxed text-slate-100 min-h-[140px]">
                {current.quote}
              </p>

              <p className="pl-6 mt-6 text-lg">{current.name}</p>
              <p className="pl-6 text-slate-400">{current.location}</p>
            </div>

            {/* Carousel dots */}
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === active ? "bg-orange-500" : "bg-slate-500"
                  }`}
                />
              ))}
            </div>
            <a
              href="https://www.homeadvisor.com/rated.JacobReitzPainting.48249658.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-slate-100 px-6 py-3 text-sm font-medium text-slate-800 hover:bg-white transition-colors"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right: HomeAdvisor embedded widget */}
        <div className="mt-1 flex items-start justify-center">
          <div className="w-full max-w-md border border-gray-400/30">
            <iframe
              src="https://www.homeadvisor.com/ratings/embed/iframe/48249658/?orientation=vertical&reviewSort=highest"
              title="HomeAdvisor Ratings & Reviews"
              className="w-full border-0"
              style={{ height: "clamp(500px, 70vh, 850px)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
