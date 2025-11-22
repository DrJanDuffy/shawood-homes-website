import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { type Property } from "@shared/schema";
import { PropertyCard } from "./PropertyCard";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedHomes() {
  const { data: properties, isLoading, error, refetch } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Available Homes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg animate-pulse">
                <div className="h-64 bg-gray-200 rounded-t-xl"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-2xl mx-auto">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Unable to Load Properties
              </h3>
              <p className="text-gray-600 mb-6">
                We're having trouble loading available homes. Please try again or contact Dr. Duffy directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => refetch()} variant="outline" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </Button>
                <a href="tel:702-500-0337" className="btn-primary">
                  Call Dr. Duffy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Available Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover luxury homes currently available in Arcadia Homes Las Vegas community
            </p>
          </div>
          <div className="bg-white rounded-xl p-12 text-center border-2 border-dashed border-gray-300">
            <p className="text-lg text-gray-600 mb-4">No homes currently available</p>
            <p className="text-gray-500 mb-6">Check back soon or contact Dr. Duffy for off-market opportunities.</p>
            <a href="tel:702-500-0337" className="btn-primary">
              Contact Dr. Duffy
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Available Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover luxury homes currently available in Arcadia Homes Las Vegas community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/homes" className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            View All Homes
          </Link>
        </div>
      </div>
    </section>
  );
}
