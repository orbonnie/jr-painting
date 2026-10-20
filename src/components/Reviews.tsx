"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Review } from "../../types";

export default function Reviews({
  reviews,
  heading,
  intro,
}: {
  reviews: Review[];
  heading: string;
  intro: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const current = reviews[active];

  return (
    <section className="relative isolate bg-white py-16 px-4 sm:px-8 overflow-hidden lg:min-h-187.5 lg:flex lg:items-center">
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
          <div className="relative flex flex-col rounded-md bg-grey-800 p-8 sm:p-10 text-white shadow-xl min-h-150">
            <h2 className="text-3xl lg:text-4xl font-bold">{heading}</h2>
            <div className="mt-2 h-px w-10 bg-orange-800" />

            <p className="mt-6 text-slate-200">{intro}</p>

            <div className="mt-10">
              <div className="relative">
                <span className="absolute -top-4 -left-1 text-6xl font-serif text-slate-500 select-none">
                  &ldquo;
                </span>

                <p className="pl-6 text-lg leading-relaxed text-slate-100 h-70 overflow-y-auto">
                  {current.quote}
                </p>
              </div>

              <div className="pl-6 mt-4">
                <p className="text-lg">{current.name}</p>
                <p className="text-slate-400">{current.location}</p>
              </div>
            </div>

            {/* Carousel dots */}
            <div className="mt-auto mx-auto pt-8 flex gap-2">
              {reviews.map((_, i) => (
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
              className="mt-6 inline-block bg-slate-100 px-5 py-4 text-sm font-medium text-center text-slate-800 rounded-sm hover:bg-white transition-colors"
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
