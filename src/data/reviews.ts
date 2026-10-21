import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { Review } from "../../types";

type ReviewsData = {
  heading: string;
  intro?: string;
  reviewList: Review[];
};

const reviewsQuery = groq`
  *[_type == "reviews"][0] {
    heading,
    intro,
    reviewList[] {
      name,
      location,
      "quote": text
    }
  }
`;

export async function getReviews() {
  const { data } = await sanityFetch({
    query: reviewsQuery,
  });

  const reviewsData = data as ReviewsData | null;

  return {
    heading: reviewsData?.heading ?? "Reviews",
    intro: reviewsData?.intro ?? "",
    reviews: reviewsData?.reviewList ?? [],
  };
}
