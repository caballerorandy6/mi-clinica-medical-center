import { getGoogleReviews, FALLBACK_REVIEWS } from "@/lib/google-reviews";
import { GoogleReviewsDisplay } from "@/components/reviews/google-reviews";
import { JsonLdAggregateRating } from "@/components/seo/json-ld-reviews";

export async function GoogleReviewsSection() {
  const reviews = await getGoogleReviews();
  const reviewsData = reviews || FALLBACK_REVIEWS;

  return (
    <>
      {/* Schema markup for SEO */}
      <JsonLdAggregateRating reviews={reviewsData} />

      {/* Reviews display */}
      <section className="py-16 bg-green-bg">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reseñas de Google de Nuestra{" "}
              <span className="text-primary">Clínica Hispana</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lo que dicen nuestros pacientes en Google sobre la atención en Mi
              Clínica Medical Center.
            </p>
          </div>

          {/* Reviews from Google */}
          <GoogleReviewsDisplay reviews={reviewsData} />
        </div>
      </section>
    </>
  );
}
