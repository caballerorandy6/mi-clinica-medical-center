"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import type { GooglePlaceDetails } from "@/lib/google-reviews";

interface GoogleReviewsProps {
  reviews: GooglePlaceDetails;
}

export function GoogleReviewsDisplay({ reviews }: GoogleReviewsProps) {
  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`size-6 ${
                  i < Math.round(reviews.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                weight="fill"
              />
            ))}
          </div>
          <span className="text-2xl font-bold text-foreground">
            {reviews.rating.toFixed(1)}
          </span>
          <span className="text-muted-foreground">
            ({reviews.user_ratings_total} reseñas en Google)
          </span>
        </div>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.reviews.slice(0, 4).map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      weight="fill"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {review.author_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {review.author_name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Google Attribution */}
      <p className="text-center text-xs text-muted-foreground">
        Reseñas obtenidas de Google Maps • Actualizadas diariamente
      </p>
    </div>
  );
}
