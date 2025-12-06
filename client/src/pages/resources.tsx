import { useEffect } from "react";
import { Download, FileText, Calculator, Home, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Resources() {
  // SEO Meta Tags
  useMetaTags({
    title: "Real Estate Resources - Arcadia Homes Las Vegas | Guides, Tools & Checklists",
    description: "Comprehensive real estate resources for Arcadia Homes Las Vegas buyers and sellers. Download guides, use calculators, access checklists, and get expert tools from Dr. Jan Duffy.",
    keywords: "real estate resources, home buying guides, home selling checklists, mortgage calculators, Arcadia Homes Las Vegas resources",
    ogTitle: "Real Estate Resources - Arcadia Homes Las Vegas",
    ogDescription: "Comprehensive resources, guides, tools, and checklists for luxury real estate in Arcadia Homes Las Vegas.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/resources",
    canonical: "https://www.arcadiahomeslasvegas.com/resources",
  });

  // Add WebPage Schema
  useEffect(() => {
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Real Estate Resources - Arcadia Homes Las Vegas",
      "description": "Comprehensive resources, guides, and tools for luxury real estate",
      "url": "https://www.arcadiahomeslasvegas.com/resources"
    };

    const schemaId = addSchemaMarkup(webPageSchema, "resources-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  const resources = [
    {
      category: "Buying Resources",
      icon: Home,
      items: [
        {
          title: "Luxury Home Buying Guide",
          description: "Complete step-by-step guide to buying luxury homes in Arcadia Homes Las Vegas",
          link: "/buying-guide",
          type: "Guide"
        },
        {
          title: "Home Buying Checklist",
          description: "Essential checklist for luxury home buyers in Summerlin West",
          link: "#",
          type: "Checklist",
          download: true
        },
        {
          title: "Mortgage Calculator",
          description: "Calculate monthly payments for luxury homes ($2M-$4M)",
          link: "/mortgage-calculator",
          type: "Tool"
        },
        {
          title: "Property Alerts",
          description: "Get notified when new luxury homes match your criteria",
          link: "/property-alerts",
          type: "Service"
        }
      ]
    },
    {
      category: "Selling Resources",
      icon: TrendingUp,
      items: [
        {
          title: "Luxury Home Selling Guide",
          description: "Complete guide to selling your home for maximum value",
          link: "/selling-guide",
          type: "Guide"
        },
        {
          title: "Home Value Estimator",
          description: "Get a free instant valuation of your Arcadia Homes Las Vegas property",
          link: "/home-value",
          type: "Tool"
        },
        {
          title: "Home Selling Checklist",
          description: "Pre-sale preparation checklist for luxury homeowners",
          link: "#",
          type: "Checklist",
          download: true
        },
        {
          title: "Market Report",
          description: "Current market trends and statistics for Arcadia Homes Las Vegas",
          link: "/market-report",
          type: "Report"
        }
      ]
    },
    {
      category: "Community Resources",
      icon: MapPin,
      items: [
        {
          title: "Community Guide",
          description: "Complete guide to living in Arcadia Homes Las Vegas",
          link: "/community",
          type: "Guide"
        },
        {
          title: "Neighborhood Information",
          description: "Demographics, lifestyle, and area insights for Summerlin West",
          link: "/neighborhood",
          type: "Information"
        },
        {
          title: "Amenities Directory",
          description: "Shopping, dining, recreation, and entertainment near Arcadia Homes Las Vegas",
          link: "/amenities",
          type: "Directory"
        },
        {
          title: "School Information",
          description: "Top-rated schools serving Arcadia Homes Las Vegas students",
          link: "/schools",
          type: "Information"
        }
      ]
    },
    {
      category: "Market Resources",
      icon: FileText,
      items: [
        {
          title: "Market Report",
          description: "Current market trends, prices, and statistics",
          link: "/market-report",
          type: "Report"
        },
        {
          title: "Market Predictions",
          description: "2025-2027 market forecasts for Summerlin West",
          link: "/market-predictions",
          type: "Forecast"
        },
        {
          title: "Investment Analysis",
          description: "ROI and investment potential for Arcadia Homes Las Vegas",
          link: "#",
          type: "Analysis",
          comingSoon: true
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Resources", url: "/resources" }]} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Real Estate Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive guides, tools, checklists, and resources to help you navigate luxury real estate 
              in Arcadia Homes Las Vegas, Summerlin West. Everything you need from Dr. Jan Duffy, 
              your trusted partner since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      {item.comingSoon ? (
                        <div className="opacity-60">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded">
                              {item.type}
                            </span>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                              Coming Soon
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                              {item.type}
                            </span>
                            {item.download && (
                              <Download className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {item.description}
                          </p>
                          {item.link !== "#" ? (
                            <Link
                              href={item.link}
                              className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center space-x-1"
                            >
                              <span>View {item.type}</span>
                              <span>→</span>
                            </Link>
                          ) : (
                            <button className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center space-x-1">
                              <span>Download {item.type}</span>
                              <Download className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Quick Tools & Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools to help you make informed decisions about luxury real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/mortgage-calculator">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                <Calculator className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mortgage Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Calculate monthly payments for luxury homes in Arcadia Homes Las Vegas. 
                  Includes jumbo loan options for $2M-$4M properties.
                </p>
                <span className="text-primary font-medium">Use Calculator →</span>
              </div>
            </Link>

            <Link href="/home-value">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Value Estimator</h3>
                <p className="text-gray-600 mb-4">
                  Get a free, instant valuation of your Arcadia Homes Las Vegas property. 
                  Expert market analysis from Dr. Jan Duffy.
                </p>
                <span className="text-primary font-medium">Get Valuation →</span>
              </div>
            </Link>

            <Link href="/property-alerts">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Alerts</h3>
                <p className="text-gray-600 mb-4">
                  Never miss your dream home. Get instant alerts when luxury properties 
                  matching your criteria become available.
                </p>
                <span className="text-primary font-medium">Set Up Alerts →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Need Personalized Assistance?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            While these resources provide valuable information, nothing replaces personalized 
            guidance from an expert. Contact Dr. Jan Duffy for customized advice about your 
            specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-500-0337"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (702) 500-0337</span>
            </a>
            <a
              href="/contact"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

