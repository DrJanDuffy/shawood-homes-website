import { useEffect } from "react";
import { TrendingUp, DollarSign, Home, Shield, MapPin, BarChart, Phone, Mail } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";

export default function Investment() {
  // SEO Meta Tags
  useMetaTags({
    title: "Luxury Real Estate Investment - Arcadia Homes Las Vegas | ROI & Investment Opportunities",
    description: "Investment opportunities in Arcadia Homes Las Vegas luxury real estate. ROI analysis, market trends, appreciation potential, and expert investment guidance from Dr. Jan Duffy.",
    keywords: "luxury real estate investment, Arcadia Homes Las Vegas ROI, Summerlin West investment properties, real estate investment Las Vegas, luxury home investment",
    ogTitle: "Luxury Real Estate Investment - Arcadia Homes Las Vegas",
    ogDescription: "Investment opportunities in Arcadia Homes Las Vegas. ROI analysis, market trends, and appreciation potential in Summerlin West luxury real estate.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/investment",
    canonical: "https://www.arcadiahomeslasvegas.com/investment",
  });

  // Add Article Schema
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Luxury Real Estate Investment - Arcadia Homes Las Vegas",
      "description": "Investment opportunities and ROI analysis for luxury real estate in Arcadia Homes Las Vegas",
      "datePublished": new Date().toISOString().split('T')[0],
      "author": {
        "@type": "Person",
        "name": "Dr. Jan Duffy"
      }
    };

    const schemaId = addSchemaMarkup(articleSchema, "investment-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Strong Appreciation",
      description: "Arcadia Homes Las Vegas has shown consistent appreciation due to limited inventory, prime location, and exclusive guard-gated security. Historical data shows steady growth in property values."
    },
    {
      icon: Shield,
      title: "Limited Supply",
      description: "With only 95 homes in the entire community, Arcadia Homes Las Vegas offers scarcity value. Limited inventory creates high demand and supports property values over time."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Summerlin West's 89135 ZIP code is Las Vegas's most desirable area with median household income of $128,500 and 91% homeownership rate. Prime location supports long-term value."
    },
    {
      icon: Home,
      title: "Luxury Features",
      description: "Custom-built homes with premium features like wine cellars, home theaters, and Red Rock Canyon views appeal to high-net-worth buyers, supporting strong resale value."
    }
  ];

  const investmentMetrics = [
    { label: "Average Annual Appreciation", value: "5-7%", description: "Historical appreciation rate for luxury homes in Summerlin West" },
    { label: "Days on Market", value: "18-25", description: "Average time to sell well-priced luxury homes" },
    { label: "Price Range", value: "$2M-$4M", description: "Current market range for Arcadia Homes Las Vegas" },
    { label: "Inventory", value: "95 Homes", description: "Total number of homes in the exclusive community" }
  ];

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Investment", url: "/investment" }]} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Luxury Real Estate Investment
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover why Arcadia Homes Las Vegas represents an exceptional investment opportunity in Summerlin West. 
              Limited inventory, prime location, and strong appreciation potential make this exclusive guard-gated 
              community an attractive investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:702-500-0337"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. Duffy: (702) 500-0337</span>
              </a>
              <a
                href="/contact"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Schedule Investment Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Why Invest in Arcadia Homes Las Vegas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key factors that make this exclusive community an attractive luxury real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Investment Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics for luxury real estate investment in Arcadia Homes Las Vegas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-900 font-semibold mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Market Trends & Appreciation
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Arcadia Homes Las Vegas has demonstrated strong investment performance due to several key factors:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <BarChart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Consistent Appreciation:</strong>
                    <p className="text-gray-600">Historical data shows steady appreciation in luxury home values in Summerlin West, with Arcadia Homes Las Vegas properties performing above market averages.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Limited Inventory:</strong>
                    <p className="text-gray-600">With only 95 homes, scarcity value supports property values. New construction is limited, maintaining exclusivity and demand.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">High-Quality Buyers:</strong>
                    <p className="text-gray-600">The community attracts high-net-worth buyers seeking guard-gated security, luxury amenities, and Red Rock Canyon views, supporting strong resale values.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Investment Considerations</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Long-Term Hold</h4>
                  <p className="text-gray-600">Luxury homes in Arcadia Homes Las Vegas are ideal for long-term investment, with appreciation potential and lifestyle benefits.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Primary Residence</h4>
                  <p className="text-gray-600">Many investors purchase as primary residences, combining lifestyle benefits with investment potential.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tax Benefits</h4>
                  <p className="text-gray-600">Nevada offers favorable tax environment with no state income tax, making it attractive for high-net-worth investors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Real Estate Investment"
        description="Common questions about investing in luxury real estate in Arcadia Homes Las Vegas"
        faqs={[
          {
            question: "What is the ROI potential for luxury homes in Arcadia Homes Las Vegas?",
            answer: "Luxury homes in Arcadia Homes Las Vegas have shown consistent appreciation of 5-7% annually historically. The limited inventory (95 homes), prime Summerlin West location, and exclusive guard-gated security support long-term value appreciation. Dr. Duffy provides detailed ROI analysis for specific properties."
          },
          {
            question: "Is Arcadia Homes Las Vegas a good investment for rental income?",
            answer: "While Arcadia Homes Las Vegas homes can generate rental income, the community is primarily owner-occupied. The high purchase price ($2M-$4M) and HOA fees make it more suitable for primary residence or long-term appreciation investment rather than traditional rental income strategies."
          },
          {
            question: "What are the tax benefits of investing in luxury real estate in Nevada?",
            answer: "Nevada offers several tax advantages including no state income tax, property tax deductions, and potential 1031 exchange opportunities. Luxury homes in Arcadia Homes Las Vegas may qualify for various tax benefits. Consult with a tax professional for specific advice."
          },
          {
            question: "How does the limited inventory affect investment value?",
            answer: "The limited inventory of only 95 homes in Arcadia Homes Las Vegas creates scarcity value, which supports property values. With minimal new construction and high demand, the limited supply helps maintain and increase property values over time."
          },
          {
            question: "What is the typical holding period for luxury real estate investments?",
            answer: "Luxury real estate investments in Arcadia Homes Las Vegas are typically long-term holds (5+ years) to realize full appreciation potential. However, well-priced properties can sell quickly (18-25 days) if needed, providing liquidity when required."
          },
          {
            question: "Should I invest in Arcadia Homes Las Vegas as a primary residence or investment property?",
            answer: "Many investors choose Arcadia Homes Las Vegas as a primary residence, combining lifestyle benefits with investment potential. The guard-gated security, luxury amenities, and Red Rock Canyon views provide both personal enjoyment and long-term value appreciation."
          }
        ]}
        schemaId="investment-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Explore Investment Opportunities?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Contact Dr. Jan Duffy for a personalized investment analysis of Arcadia Homes Las Vegas properties. 
            Get expert insights on ROI, market trends, and investment strategies.
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
              Schedule Investment Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

