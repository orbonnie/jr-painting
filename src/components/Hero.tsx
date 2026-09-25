"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/feature-1.jpg",
    icon: (
      <svg
        width="55"
        height="45"
        viewBox="0 0 120 100"
        fill="none"
        stroke="#fc8b00"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <polygon points="35,10 85,10 105,32 15,32" />
        <line x1="35" y1="10" x2="15" y2="32" />
        <line x1="85" y1="10" x2="105" y2="32" />
        <line x1="60" y1="10" x2="60" y2="32" />
        <line x1="60" y1="32" x2="60" y2="90" />
        <line x1="15" y1="32" x2="105" y2="32" />
        <line x1="15" y1="32" x2="60" y2="90" />
        <line x1="105" y1="32" x2="60" y2="90" />
      </svg>
    ),
    title: "Premiere Professional Painting",
    description: "Serving Southern California Since 2009",
    link: "/services",
    linkText: "Our Services",
  },
  {
    image: "/feature-2.jpg",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        stroke="##fc8b00"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <polyline points="10,35 10,10 35,10" />
        <line x1="10" y1="10" x2="30" y2="30" />
        <polyline points="65,10 90,10 90,35" />
        <line x1="90" y1="10" x2="70" y2="30" />
        <polyline points="10,65 10,90 35,90" />
        <line x1="10" y1="90" x2="30" y2="70" />
        <polyline points="65,90 90,90 90,65" />
        <line x1="90" y1="90" x2="70" y2="70" />
      </svg>
    ),
    title: "Commercial & Residential",
    description:
      "Our seasoned painters specialize in high end and custom painting for a variety of buildings.",
    link: "/contact",
    linkText: "Contact Us",
  },
  {
    image: "/feature-3.jpg",
    icon: (
      <svg
        width="45"
        height="60"
        viewBox="0 0 100 130"
        fill="none"
        stroke="#fc8b00"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M50,10 C75,25 85,55 50,100 C15,55 25,25 50,10 Z" />
        <line x1="50" y1="30" x2="50" y2="120" />
        <line x1="50" y1="70" x2="35" y2="58" />
        <line x1="50" y1="85" x2="63" y2="75" />
      </svg>
    ),
    title: "Full Service Painting",
    description:
      "We deliver complete quality workmanship on all projects, big and small. ",
    link: "/projects",
    linkText: "View Projects",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const changeSlide = (newIndex: number) => {
    setShowContent(false);
    setIndex(newIndex);
  };

  useEffect(() => {
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
  }, [index]);

  return (
    <section>
      <div className="relative h-150 overflow-hidden">
        {slides.map((src, i) => (
          <Image
            key={src.image}
            src={src.image}
            alt=""
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
              {slides[index].icon}
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
