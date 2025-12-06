import { useEffect } from "react";
import { Camera, Video, MapPin, Eye, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";

export default function VirtualTours() {
  // SEO Meta Tags
  useMetaTags({
    title: "Virtual Tours - Arcadia Homes Las Vegas | 3D Matterport & Drone Footage",
    description: "Experience Arcadia Homes Las Vegas luxury properties through immersive virtual tours. 3D Matterport walkthroughs, drone footage, and live virtual showings with Dr. Jan Duffy.",
    keywords: "virtual tours Arcadia Homes Las Vegas, 3D Matterport tours, drone footage luxury homes, virtual home tours Summerlin West",
    ogTitle: "Virtual Tours - Arcadia Homes Las Vegas",
    ogDescription: "Immersive virtual tours including 3D Matterport walkthroughs, drone footage, and live virtual showings of luxury homes.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/virtual-tours",
    canonical: "https://www.arcadiahomeslasvegas.com/virtual-tours",
  });

  // Add Service Schema
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Virtual Tours - Arcadia Homes Las Vegas",
      "description": "Immersive virtual tours including 3D Matterport walkthroughs, drone footage, and live virtual showings",
      "url": "https://www.arcadiahomeslasvegas.com/virtual-tours",
      "provider": {
        "@type": "RealEstateAgent",
        "name": "Dr. Jan Duffy"
      }
    };

    const schemaId = addSchemaMarkup(serviceSchema, "virtual-tours-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  const tourTypes = [
    {
      icon: Camera,
      title: "3D Matterport Tours",
      description: "Immersive 3D walkthroughs of select properties with detailed floor plans and measurements",
      features: [
        "360° panoramic views of every room",
        "Interactive floor plans with measurements",
        "Virtual dollhouse view",
        "Measure tool for dimensions",
        "Available 24/7 from anywhere",
        "Works on desktop, tablet, and mobile"
      ],
      cta: "Explore 3D Tours"
    },
    {
      icon: Video,
      title: "Drone Footage",
      description: "Aerial videos showcasing properties, community layout, and stunning Red Rock Canyon views",
      features: [
        "Aerial property overview",
        "Red Rock Canyon view perspectives",
        "Community layout and location",
        "Neighborhood context",
        "Professional 4K video quality",
        "Available for select properties"
      ],
      cta: "Watch Videos"
    },
    {
      icon: Eye,
      title: "Live Virtual Showings",
      description: "Schedule a live virtual tour with Dr. Jan Duffy for personalized property viewings",
      features: [
        "One-on-one with Dr. Duffy",
        "Real-time Q&A during tour",
        "Personalized property walkthrough",
        "Immediate feedback and insights",
        "Flexible scheduling",
        "Perfect for out-of-state buyers"
      ],
      cta: "Schedule Tour"
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Virtual Tours", url: "/virtual-tours" }]} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Virtual Tours
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience Arcadia Homes Las Vegas luxury properties from anywhere in the world. 
              Immersive 3D tours, drone footage, and live virtual showings bring the exclusive 
              guard-gated community to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:702-500-0337"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. Duffy: (702) 500-0337</span>
              </a>
              <Link
                href="/contact"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Schedule Virtual Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Virtual Tour Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the virtual tour experience that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tourTypes.map((tour, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6">
                  <tour.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {tour.title}
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  {tour.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tour.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">
                  {tour.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Why Use Virtual Tours?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Virtual tours make it easy to explore Arcadia Homes Las Vegas properties, especially for out-of-state buyers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">View from Anywhere</h3>
              <p className="text-gray-600">
                Explore properties from anywhere in the world, 24/7, without leaving your home
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600">
                Narrow down your options before scheduling in-person visits, saving valuable time
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Measurements</h3>
              <p className="text-gray-600">
                Get accurate room dimensions and floor plan details without being on-site
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Better Decisions</h3>
              <p className="text-gray-600">
                Make more informed decisions with comprehensive virtual property exploration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Virtual Tours"
        description="Common questions about virtual tour options for Arcadia Homes Las Vegas luxury properties"
        faqs={[
          {
            question: "Are virtual tours available for all Arcadia Homes Las Vegas properties?",
            answer: "Virtual tours are available for select properties in Arcadia Homes Las Vegas. Dr. Duffy can arrange 3D Matterport tours, drone footage, or live virtual showings for any available property. Contact her to discuss virtual tour options for specific listings."
          },
          {
            question: "How do I access 3D Matterport tours?",
            answer: "3D Matterport tours are accessible through links provided by Dr. Duffy. These tours work on desktop computers, tablets, and mobile devices. Simply click the tour link to explore the property in immersive 3D, including floor plans and measurements."
          },
          {
            question: "Can I schedule a live virtual showing with Dr. Duffy?",
            answer: "Yes, Dr. Duffy offers live virtual showings where she personally walks you through properties via video call. This allows for real-time questions, personalized insights, and immediate feedback. Perfect for out-of-state buyers or those who prefer guided tours."
          },
          {
            question: "Do virtual tours show Red Rock Canyon views?",
            answer: "Yes, drone footage and aerial videos specifically showcase Red Rock Canyon views from Arcadia Homes Las Vegas properties. These views are a major selling point, and virtual tours help buyers understand the stunning natural beauty surrounding the community."
          },
          {
            question: "Are virtual tours as good as in-person visits?",
            answer: "Virtual tours provide excellent property exploration, especially for initial screening. However, Dr. Duffy recommends in-person visits for final decisions. Virtual tours help narrow down options, while in-person visits allow you to experience the property's feel, neighborhood atmosphere, and guard-gated security firsthand."
          },
          {
            question: "How much do virtual tours cost?",
            answer: "Virtual tours are provided at no additional cost to buyers working with Dr. Duffy. 3D Matterport tours, drone footage, and live virtual showings are all included as part of her comprehensive buyer services for Arcadia Homes Las Vegas properties."
          }
        ]}
        schemaId="virtual-tours-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Take a Virtual Tour?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Contact Dr. Jan Duffy to access virtual tours of available Arcadia Homes Las Vegas properties. 
            Explore luxury homes from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-500-0337"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (702) 500-0337</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Schedule Virtual Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

