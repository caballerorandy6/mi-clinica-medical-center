import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSkeleton() {
  return (
    <section className="py-16 bg-green-bg">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[500px] mx-auto max-w-full" />
        </div>

        {/* Rating Summary Skeleton */}
        <div className="flex justify-center mb-8">
          <Skeleton className="h-14 w-80 rounded-full" />
        </div>

        {/* Reviews Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="h-full border-none shadow-lg bg-white/60">
              <CardContent className="pt-6">
                {/* Quote icon */}
                <Skeleton className="size-8 rounded mb-3" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="size-4 rounded" />
                  ))}
                </div>

                {/* Review Text */}
                <div className="space-y-2 mb-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots Skeleton */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="size-2 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
