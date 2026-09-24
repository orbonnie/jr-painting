"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-10 md:px-20">
        {/* Heading */}
        <div className="pt-16">
          <h2 className="mb-2 text-2xl font-semibold text-grey-900">
            Recent Testimonials
          </h2>
          <div className="mb-5 h-px w-10 bg-orange-800" />
        </div>

        {/* Desktop */}
        <div className="hidden grid-cols-2 gap-x-16 gap-y-16 pb-16 md:grid">
          {reviews.map((review) => (
            <div key={review.name} className="flex gap-4">
              <span className="shrink-0 font-serif text-7xl leading-none text-grey-500">
                &ldquo;
              </span>

              <div>
                <p className="text-sm leading-7 text-grey-900">{review.text}</p>

                <p className="mt-4 text-lg text-grey-900">— {review.name}</p>

                <p className="mt-1 text-sm text-grey-700">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="pb-10 md:hidden">
          <div className="min-h-75 overflow-hidden">
            <div key={index} className="flex gap-4 animate-slide-in-right">
              <span className="shrink-0 font-serif text-7xl leading-none text-grey-500">
                &ldquo;
              </span>

              <div>
                <p className="text-sm leading-7 text-grey-900">
                  {reviews[index].text}
                </p>

                <p className="mt-4 text-lg text-grey-900">
                  — {reviews[index].name}
                </p>

                <p className="mt-1 text-sm text-grey-700">
                  {reviews[index].location}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="mt-5 flex justify-center gap-2">
            {reviews.map((review, reviewIndex) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setIndex(reviewIndex)}
                aria-label={`Show testimonial ${reviewIndex + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  reviewIndex === index
                    ? "bg-orange-800"
                    : "bg-grey-400 hover:bg-grey-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
