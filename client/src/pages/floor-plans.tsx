import { Download, Eye, Heart, Share2 } from "lucide-react";

export default function FloorPlans() {
  const floorPlans = [
    {
      id: 1,
      name: "The Pinnacle",
      sqft: "4,250 - 4,500",
      bedrooms: 5,
      bathrooms: "4.5",
      stories: 2,
      garage: "3-car",
      priceRange: "$2.2M - $2.6M",
      features: ["Grand foyer", "Chef's kitchen", "Master suite retreat", "Home office", "Wine cellar"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      id: 2,
      name: "The Summit",
      sqft: "3,650 - 3,900",
      bedrooms: 4,
      bathrooms: "3.5",
      stories: 1,
      garage: "2-car",
      priceRange: "$1.8M - $2.2M",
      features: ["Single story", "Open concept", "Covered patio", "Study", "Guest casita"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: false
    },
    {
      id: 3,
      name: "The Estate",
      sqft: "5,200 - 5,800",
      bedrooms: 6,
      bathrooms: "5.5",
      stories: 2,
      garage: "4-car",
      priceRange: "$3.2M - $3.8M",
      features: ["Grand staircase", "Butler's pantry", "Media room", "Exercise room", "Guest quarters"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: false
    },
    {
      id: 4,
      name: "The Vista",
      sqft: "3,200 - 3,450",
      bedrooms: 4,
      bathrooms: "3",
      stories: 1,
      garage: "2-car",
      priceRange: "$1.6M - $1.9M",
      features: ["Courtyard entry", "Great room", "Outdoor kitchen", "Den", "Art niche"],
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    }
  ];

  const customOptions = [
    {
      title: "Architectural Styles",
      options: ["Mediterranean", "Contemporary", "Transitional", "Spanish Colonial", "Modern Desert"]
    },
    {
      title: "Premium Upgrades",
      options: ["Smart home automation", "Wine cellars", "Home theaters", "Guest casitas", "Outdoor kitchens"]
    },
    {
      title: "Luxury Finishes",
      options: ["Natural stone", "Custom millwork", "Coffered ceilings", "Imported tile", "Designer fixtures"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Custom Floor Plans
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover thoughtfully designed luxury homes ranging from 3,200 to 8,000 square feet, 
            each customizable to reflect your unique lifestyle and preferences.
          </p>
        </div>
      </section>

      {/* Floor Plans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Available Floor Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each plan serves as a starting point for your custom home. Work with our architects 
              to modify layouts, add rooms, and create your perfect living space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {floorPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <span className="text-lg font-semibold text-primary">{plan.priceRange}</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{plan.sqft}</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{plan.bedrooms}</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{plan.bathrooms}</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{plan.garage}</div>
                      <div className="text-gray-600">Garage</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unlimited Customization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Arcadia Homes Las Vegas residence is custom-built to your specifications. 
              Choose from endless design options to create your dream home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customOptions.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                <ul className="space-y-2">
                  {category.options.map((option, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Design Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to move-in day, our team guides you through 
              every step of creating your custom luxury home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">Meet with our design team to discuss your vision, lifestyle, and preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Collaborate with architects to create custom floor plans and select finishes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Construction</h3>
              <p className="text-gray-600">Watch your dream home come to life with regular updates and quality inspections.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Move-In</h3>
              <p className="text-gray-600">Receive your keys and begin enjoying your custom luxury home in Arcadia Homes Las Vegas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}