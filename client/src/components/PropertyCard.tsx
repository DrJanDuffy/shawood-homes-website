import { Link } from "wouter";
import { type Property } from "@shared/schema";
import { formatPrice, formatSquareFeet, formatDecimal } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    sold: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.imageUrl || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
          alt={`Home at ${property.address}`}
          className="w-full h-64 object-cover"
        />
        <Badge className={`absolute top-4 right-4 ${statusColors[property.status as keyof typeof statusColors]}`}>
          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </Badge>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {property.address}
          </h3>
        </div>
        
        <div className="text-2xl font-bold text-primary mb-4">
          {formatPrice(property.price)}
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 mb-4">
          <div>
            <div className="font-semibold text-gray-900">{property.bedrooms}</div>
            <div>Bedrooms</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              {formatDecimal(property.bathrooms)}
            </div>
            <div>Bathrooms</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              {formatSquareFeet(property.squareFeet)}
            </div>
            <div>Sq Ft</div>
          </div>
        </div>
        
        <Link
          href={`/homes/${property.id}`}
          className="w-full btn-primary text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
