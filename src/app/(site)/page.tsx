import { sanityFetch } from "../../sanity/lib/live";
import { groq } from "next-sanity";

import Hero from "@/components/Hero";
import HomeAdvisor from "@/components/HomeAdvisor";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import HomeCTA from "@/components/HomeCTA";
import { getReviews } from "@/data/reviews";

import type { HeroSlide, Feature } from "../../../types";

const heroQuery = groq`
  *[_type == "homePage"][0] {
    _id,
    _updatedAt,
    heroSlides[] {
      title,
      description,
      icon,
      link,
      linkText,
      alt,
      "imageUrl": image.asset->url
    }
  }
`;

const homeCTAQuery = groq`
  *[_type == "homeCTA"][0] {
    _id,
    _updatedAt,
    ctaHeading,
    ctaButtonText,
    ctaButtonLink,
    features[] {
      title,
      description,
      icon
    }
  }
`;

const locationsQuery = groq`
  *[_type == "locations"][0] {
    _id,
    _updatedAt,
    aboutHeading,
    aboutDescription,
    locationsHeading,
    serviceAreas
  }
`;

type HeroData = {
  heroSlides: HeroSlide[] | null;
};

type HomeCTAData = {
  ctaHeading: string;
  ctaIcon: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  features: Feature[];
};

type LocationsData = {
  aboutHeading: string;
  aboutDescription: string;
  locationsHeading: string;
  serviceAreas: string[];
};

export default async function Home() {
  const { data } = await sanityFetch({
    query: heroQuery,
  });

  const { heading, intro, reviews } = await getReviews();

  const { data: homeCTA } = await sanityFetch({
    query: homeCTAQuery,
  });

  const { data: locations } = await sanityFetch({
    query: locationsQuery,
  });

  const heroData = data as HeroData | null;
  const homeCTAData = homeCTA as HomeCTAData | null;
  const locationsData = locations as LocationsData | null;

  const slides = heroData?.heroSlides ?? [];

  const features = homeCTAData?.features ?? [];
  const ctaHeading = homeCTAData?.ctaHeading ?? "We can help!";
  const ctaButton = homeCTAData?.ctaButtonText ?? "Contact Us";
  const ctaLink = homeCTAData?.ctaButtonLink ?? "/contact";

  const aboutHeading =
    locationsData?.aboutHeading ??
    "One of Southern California's Leading Paint Services";
  const aboutDescription =
    locationsData?.aboutDescription ??
    "Being one of the top in our field means that we are committed to every project, we have the experience to make your vision a reality and we make every client happy.";
  const locationsHeading = locationsData?.locationsHeading ?? "Where We Work";
  const serviceAreas = locationsData?.serviceAreas ?? [
    "Southern California",
    "Houston Gulf Coast",
  ];

  return (
    <main>
      <Hero slides={slides} />
      <HomeAdvisor />
      <Locations
        aboutHeading={aboutHeading}
        aboutIntro={aboutDescription}
        locationsHeading={locationsHeading}
        serviceAreas={serviceAreas}
      />
      <Reviews reviews={reviews} heading={heading} intro={intro} />
      <HomeCTA
        features={features}
        heading={ctaHeading}
        button={ctaButton}
        link={ctaLink}
      />
    </main>
  );
}
