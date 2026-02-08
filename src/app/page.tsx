import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { TestimonialsSkeleton } from "@/components/sections/testimonials-skeleton";
import { getGoogleReviews, FALLBACK_REVIEWS } from "@/lib/google-reviews";

// Dynamic imports para secciones below-the-fold (mejor performance)
const Promotions = dynamic(() =>
  import("@/components/sections/promotions").then((mod) => mod.Promotions)
);

const Services = dynamic(() =>
  import("@/components/sections/services").then((mod) => mod.Services)
);

const GreenCard = dynamic(() =>
  import("@/components/sections/green-card").then((mod) => mod.GreenCard)
);

const Location = dynamic(() =>
  import("@/components/sections/location").then((mod) => mod.Location)
);

const FAQ = dynamic(() =>
  import("@/components/sections/faq").then((mod) => mod.FAQ)
);

const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default async function Home() {
  // Fetch Google reviews para pasar el rating al Hero
  const reviews = await getGoogleReviews();
  const reviewsData = reviews || FALLBACK_REVIEWS;

  return (
    <>
      {/* Hero - Carga inmediata (above the fold) */}
      <Hero
        googleRating={reviewsData.rating}
        googleReviewsCount={reviewsData.user_ratings_total}
      />

      {/* Secciones below-the-fold - Carga diferida */}
      <Promotions />
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      <Services />
      <GreenCard />
      <Location />
      <FAQ />
      <Contact />
    </>
  );
}
