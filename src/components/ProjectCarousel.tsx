"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import { cloudinaryImage } from "@/lib/cloudinaryImage";

type ProjectCarouselProps = {
  title: string;
  images: string[];
};

export default function ProjectCarousel({
  title,
  images,
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  function previous() {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function next() {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div>
      {/* Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={cloudinaryImage(images[index])}
          alt={`${title} project image ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />

        {/* Alt img format*/}
        {/* <img
          src={cloudinaryImage(images[index])}
          alt={`${title} project image ${index + 1}`}
          className="h-full w-full object-cover"
        /> */}

        {/* Previous */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {images.map((image, imageIndex) => (
          <button
            key={image}
            type="button"
            onClick={() => setIndex(imageIndex)}
            aria-label={`Show image ${imageIndex + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              imageIndex === index
                ? "bg-orange-800"
                : "bg-grey-400 hover:bg-grey-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
