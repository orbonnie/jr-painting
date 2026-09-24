import { PaintRoller, ShelvingUnit, Sparkles, Wrench } from "lucide-react";

export const services = [
  {
    slug: "painting",
    title: "Painting",
    shortDescription:
      "We understand that a clean and even finish is key and we have provided \
      it in homes and businesses of all sizes for many years.",
    description: {
      interior:
        "Painting a room is so much more than walls! When doing our initial walk-through, \
        we keep in mind each of the following: walls, ceilings, doors, shelving, windows, \
        baseboards, crown molding, door jams, wainscoting and custom woodwork. We will paint \
        whatever you need and protect whatever you don’t.",
      exterior:
        "Painting a house is so much more than walls! When doing our initial walk-through, \
        we keep in mind each of the following: fascia, siding, stucco, helping with color schemes \
        and whether this is a new construction or a repaint.  We will paint whatever you need and \
        protect whatever you don’t. As so much of our work over the years has been exterior painting, \
        we know that the right products used properly makes all the difference in a paint job that will last. \
        \n\nIn addition, we have years of experience painting within beach communities where moisture is a \
        constant concern. We can guide you in the right direction when choosing how you want to proceed with \
        your exterior paint work as well as continued maintenance to keep total costs of ownership down.  Let us help you get it right!",
    },
    href: "/services/painting",
    icon: PaintRoller,
  },
  {
    slug: "cabinetry",
    title: "Cabinetry",
    shortDescription:
      "With years of experience specializing in high end projects, including cabinetry, \
      we know how to give cabinets an amazing lasting appearance.",
    description: {
      interior:
        "We specialize in cabinetry painting! With many years of experience painting high-end cabinets \
        we know the proper way to prepare and prime them as well as the correct painting and lacquer \
        products to use. Our expertise will not only leave your cabinets looking amazing, but you will know \
        the quality of work will last.",
    },
    href: "/services/cabinetry",
    icon: ShelvingUnit,
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    shortDescription:
      "We make surfaces as clean as possible in order to offer a pristine \
      painting service.",
    description: {
      interior:
        "When we arrive on site we always assess the state of the location \
        we will be painting. We do all we can to mask and cover furniture, \
        decorative pieces etc. Other than having an amazing coat of paint, \
        it will be as though we were never there. You can expect excellent standards from our painters.",
      exterior:
        "When we arrive on site we always assess the state of the location \
        we will be painting. We take every precaution to protect your property \
        throughout the entire process. Other than having an amazing coat of paint, \
        it will be as though we were never there. You can expect excellent standards from our painters.  \
        We also pressure wash every home prior to exterior paint work.",
    },
    href: "/services/cleaning",
    icon: Sparkles,
  },
  {
    slug: "repairs",
    title: "Repairs",
    shortDescription:
      "Many of our projects require repairs before painting can begin. \
      Rest assured that we are prepared to fix what's necessary beforehand \
      to make sure that the project is a success.",
    description: {
      interior:
        "Many of our jobs require repairs. Whether it be patching, caulking, \
        puttying, minor drywall replacement, interior repairs need to be done \
        just right. Not all repair products are the same or work the same. \
        Repairing properly and using the right products can be just as important \
        as the paint job itself. We have the knowledge and expertise, so we get \
        it right to help our work last.",
      exterior:
        "Many of our jobs require repairs. Whether it be patching, caulking, \
        puttying, minor wood replacement or stucco repair, exterior repairs need \
        to be done just right. Not all repair products are the same or work the same. \
        Repairing properly and using the right products can be just as important as \
        the paint job itself. We have the knowledge and expertise, so we get it right to help our work last.",
    },
    href: "/services/repairs",
    icon: Wrench,
  },
];
