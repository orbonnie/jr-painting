"use client";

import { useState, useEffect } from "react";
import {
  Gem,
  Expand,
  HousePlus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import type { HeroSlide } from "../../types";

function renderIcon(icon?: string) {
  const iconProps = {
    size: 48,
    color: "#fc8b00",
    strokeWidth: 1.3,
  };

  switch (icon) {
    case "Gem":
      return <Gem {...iconProps} />;
    case "Expand":
      return <Expand {...iconProps} />;
    case "HousePlus":
      return <HousePlus {...iconProps} />;
    default:
      return null;
  }
}

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const changeSlide = (newIndex: number) => {
    setShowContent(false);
    setIndex(newIndex);
  };

  useEffect(() => {
    if (slides.length === 0) return;

    const showContentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    const hideContentTimeout = setTimeout(() => {
      setShowContent(false);
    }, 8000);

    const slideTimeout = setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 10000);

    return () => {
      clearTimeout(showContentTimeout);
      clearTimeout(hideContentTimeout);
      clearTimeout(slideTimeout);
    };
  }, [index, slides.length]);

  return (
    <section>
      <div className="relative h-150 overflow-hidden">
        {slides.map((slide, i) => (
          <Image
            key={`${slide.imageUrl}-${i}`}
            src={slide.imageUrl}
            alt={slide.alt || slide.title}
            fill
            loading="eager"
            className={`object-cover transition-opacity duration-2000 ease-linear ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content */}
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="px-6">
            {/* Icon + Title animation*/}

            {/* Icon */}
            <div
              className={`mb-4 flex justify-center transition-all duration-700 ease-out ${
                showContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {renderIcon(slides[index]?.icon)}
            </div>

            {/* Title */}
            <h1
              className={`text-5xl text-white font-bold transition-opacity duration-700 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              {slides[index].title}
            </h1>

            {/* Description + button animation */}
            <div
              className={`mt-4 transition-all duration-700 delay-200 ease-in-out ${
                showContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Description */}
              <p className="text-white text-xl">{slides[index].description}</p>

              {/* Link */}
              <a
                href={slides[index].link}
                className="mt-6 inline-block font-light tracking-widest uppercase rounded-xs bg-orange-800 px-6 py-3 text-white text-sm transition hover:bg-orange-700"
              >
                {slides[index].linkText}
              </a>
            </div>
          </div>
        </div>
        {/* Previous button */}
        <button
          type="button"
          onClick={() =>
            changeSlide((index - 1 + slides.length) % slides.length)
          }
          className="absolute bottom-0 right-11.5 flex h-10 w-10 items-center justify-center bg-black/40 text-xl text-white transition hover:bg-black/60"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} strokeWidth={1.2} />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={() => changeSlide((index + 1) % slides.length)}
          className="absolute bottom-0 right-1 flex h-10 w-10 items-center justify-center bg-black/40 text-xl text-white transition hover:bg-black/60"
          aria-label="Next slide"
        >
          <ChevronRight size={24} strokeWidth={1.2} />
        </button>
      </div>
    </section>
  );
}
