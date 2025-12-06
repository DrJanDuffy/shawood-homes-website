import { useEffect } from "react";
import { MapPin, Plane, Home, Users, School, Heart, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";

export default function Relocation() {
  // SEO Meta Tags
  useMetaTags({
    title: "Relocation Guide - Moving to Arcadia Homes Las Vegas | Summerlin West",
    description: "Complete relocation guide for moving to Arcadia Homes Las Vegas, Summerlin West. Area orientation, schools, services, and expert relocation assistance from Dr. Jan Duffy.",
    keywords: "relocation to Las Vegas, moving to Summerlin West, Arcadia Homes Las Vegas relocation, Las Vegas relocation guide, Summerlin West moving guide",
    ogTitle: "Relocation Guide - Moving to Arcadia Homes Las Vegas",
    ogDescription: "Complete guide for relocating to Arcadia Homes Las Vegas. Area orientation, schools, services, and relocation assistance.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/relocation",
    canonical: "https://www.arcadiahomeslasvegas.com/relocation",
  });

  // Add Article Schema
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Relocation Guide - Moving to Arcadia Homes Las Vegas",
      "description": "Complete guide for relocating to Arcadia Homes Las Vegas, Summerlin West",
      "datePublished": new Date().toISOString().split('T')[0],
      "author": {
        "@type": "Person",
        "name": "Dr. Jan Duffy"
      }
    };

    const schemaId = addSchemaMarkup(articleSchema, "relocation-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  const relocationServices = [
    {
      icon: MapPin,
      title: "Area Orientation",
      description: "Comprehensive orientation to Summerlin West, Las Vegas, and Arcadia Homes Las Vegas community"
    },
    {
      icon: School,
      title: "School Information",
      description: "Detailed information about top-rated schools, enrollment processes, and educational options"
    },
    {
      icon: Users,
      title: "Service Provider Referrals",
      description: "Trusted referrals for movers, contractors, utilities, and other essential services"
    },
    {
      icon: Heart,
      title: "Community Integration",
      description: "Help connecting with neighbors, community events, and local organizations"
    }
  ];

  const relocationSteps = [
    {
      step: "1",
      title: "Pre-Move Planning",
      description: "Work with Dr. Duffy to understand the area, schools, and community before your move"
    },
    {
      step: "2",
      title: "Property Search",
      description: "Virtual tours and property search tailored to your needs, even from out of state"
    },
    {
      step: "3",
      title: "Area Orientation",
      description: "Comprehensive orientation to Summerlin West, amenities, and lifestyle upon arrival"
    },
    {
      step: "4",
      title: "Settlement Support",
      description: "Ongoing support with utilities, services, and community integration after your move"
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Relocation Guide", url: "/relocation" }]} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Relocation Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete guide to relocating to Arcadia Homes Las Vegas, Summerlin West. 
              Expert relocation assistance from Dr. Jan Duffy to make your move seamless.
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
                <span>Get Relocation Help</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Relocate Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Why Relocate to Arcadia Homes Las Vegas?
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Arcadia Homes Las Vegas offers an exceptional lifestyle for those relocating to Las Vegas:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Plane className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">No State Income Tax:</strong>
                    <p className="text-gray-600">Nevada offers significant tax advantages with no state income tax, making it attractive for relocating professionals and retirees.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Guard-Gated Security:</strong>
                    <p className="text-gray-600">24/7 guard-gated security provides peace of mind and privacy, ideal for those relocating from other states.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Prime Location:</strong>
                    <p className="text-gray-600">Summerlin West is Las Vegas's most desirable area with top-rated schools, world-class amenities, and Red Rock Canyon access.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Luxury Lifestyle:</strong>
                    <p className="text-gray-600">Custom-built luxury homes with premium features, Red Rock Canyon views, and access to championship golf and fine dining.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Relocation Services</h3>
              <div className="space-y-6">
                {relocationServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              The Relocation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Dr. Jan Duffy helps you relocate to Arcadia Homes Las Vegas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relocationSteps.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Information */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Essential Relocation Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key information for relocating to Arcadia Homes Las Vegas and Summerlin West
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Utilities & Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• NV Energy (Electric)</li>
                <li>• Southwest Gas (Natural Gas)</li>
                <li>• Las Vegas Valley Water District</li>
                <li>• Republic Services (Trash)</li>
                <li>• Cox Communications (Internet/Cable)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DMV & Licensing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Nevada DMV locations</li>
                <li>• Driver's license transfer</li>
                <li>• Vehicle registration</li>
                <li>• Professional license transfers</li>
                <li>• Voter registration</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Top-rated hospitals nearby</li>
                <li>• Medical centers in Summerlin</li>
                <li>• Specialist referrals</li>
                <li>• Health insurance options</li>
                <li>• Urgent care facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Relocating"
        description="Common questions about relocating to Arcadia Homes Las Vegas and Summerlin West"
        faqs={[
          {
            question: "How can Dr. Duffy help with out-of-state relocation?",
            answer: "Dr. Duffy provides comprehensive relocation assistance including virtual property tours, area orientation, school information, service provider referrals, and ongoing support. She helps out-of-state buyers navigate the entire process remotely and provides in-person orientation upon arrival."
          },
          {
            question: "What should I know about relocating to Nevada?",
            answer: "Nevada offers significant advantages including no state income tax, lower cost of living than many states, and a business-friendly environment. The climate is ideal with over 300 days of sunshine. Dr. Duffy provides detailed information about taxes, cost of living, and lifestyle benefits."
          },
          {
            question: "How do I transfer my driver's license and vehicle registration?",
            answer: "Nevada requires new residents to obtain a Nevada driver's license and register vehicles within 30 days. Dr. Duffy provides information about DMV locations, required documents, and the transfer process. She can also refer you to services that help streamline this process."
          },
          {
            question: "What schools are available for my children?",
            answer: "Arcadia Homes Las Vegas is served by top-rated schools in the Clark County School District. Dr. Duffy provides comprehensive school information including ratings, enrollment processes, and educational programs. See our Schools page for detailed information."
          },
          {
            question: "Can I buy a home in Arcadia Homes Las Vegas before relocating?",
            answer: "Yes, many buyers purchase Arcadia Homes Las Vegas homes before relocating. Dr. Duffy offers virtual tours, video consultations, and can coordinate the entire process remotely. She also provides property management referrals if you need temporary housing arrangements."
          },
          {
            question: "What relocation services does Dr. Duffy provide?",
            answer: "Dr. Duffy provides area orientation, school information, service provider referrals (movers, contractors, utilities), community integration assistance, and ongoing support. She helps make your relocation to Arcadia Homes Las Vegas as smooth as possible."
          }
        ]}
        schemaId="relocation-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Relocate to Arcadia Homes Las Vegas?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let Dr. Jan Duffy guide you through relocating to this exclusive guard-gated community. 
            Get expert assistance with property search, area orientation, and settlement support.
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
              Get Relocation Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

