import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Bed, Bath, Square, Calendar, MapPin, Eye, Heart } from "lucide-react";
import { type Property } from "@shared/schema";
import { formatPrice, formatSquareFeet, formatDecimal } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";

export default function HomeDetails() {
  const { id } = useParams();
  
  const { data: property, isLoading, error } = useQuery<Property>({
    queryKey: [`/api/properties/${id}`],
  });

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="container-max py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="container-max py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
            <Link href="/homes" className="btn-primary">
              Back to All Homes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const statusColors = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    sold: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container-max py-4">
        <Link href="/homes" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Homes</span>
        </Link>
      </div>

      {/* Property Images */}
      <section className="pb-8">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-96 lg:h-[500px]">
            <div className="lg:col-span-3">
              <img
                src={property.photos[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"}
                alt={`Home at ${property.address}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="hidden lg:block space-y-4">
              {property.photos.slice(1, 3).map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Home at ${property.address} - Image ${index + 2}`}
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="pb-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-display font-bold text-gray-900">
                    {property.address}
                  </h1>
                  <Badge className={statusColors[property.status as keyof typeof statusColors]}>
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-primary mb-4">
                  {formatPrice(property.price)}
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5" />
                    <span>{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5" />
                    <span>{formatDecimal(property.bathrooms)} bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="w-5 h-5" />
                    <span>{formatSquareFeet(property.squareFeet)} sq ft</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  About This Home
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">MLS Number:</span>
                    <span className="font-semibold">{property.mlsNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year Built:</span>
                    <span className="font-semibold">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lot Size:</span>
                    <span className="font-semibold">{formatDecimal(property.lotSize || "0")} acres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Sq Ft:</span>
                    <span className="font-semibold">${Math.round(property.price / property.squareFeet)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="btn-primary">
                  <Eye className="w-4 h-4 mr-2" />
                  Schedule Showing
                </Button>
                {property.virtualTourUrl && (
                  <Button variant="outline">
                    Virtual Tour
                  </Button>
                )}
                <Button variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Save Property
                </Button>
                <Button variant="outline">
                  Share
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                  Interested in This Property?
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
