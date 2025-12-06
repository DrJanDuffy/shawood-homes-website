import { useEffect } from "react";
import { CheckCircle, Home, DollarSign, Camera, Megaphone, Handshake, Key, Phone, Mail } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";

export default function SellingGuide() {
  // SEO Meta Tags
  useMetaTags({
    title: "Luxury Home Selling Guide - Arcadia Homes Las Vegas | Maximize Your Sale Price",
    description: "Complete guide to selling luxury homes in Arcadia Homes Las Vegas. Pricing strategies, staging tips, marketing tactics, and expert advice from Dr. Jan Duffy to maximize your sale price.",
    keywords: "selling luxury homes guide, Arcadia Homes Las Vegas selling process, Summerlin West home selling, luxury real estate seller guide, home selling checklist",
    ogTitle: "Luxury Home Selling Guide - Arcadia Homes Las Vegas",
    ogDescription: "Complete guide to selling luxury homes in Arcadia Homes Las Vegas. Expert strategies from Dr. Jan Duffy to maximize your sale price.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/selling-guide",
    canonical: "https://www.arcadiahomeslasvegas.com/selling-guide",
  });

  // Add Article Schema
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Luxury Home Selling Guide - Arcadia Homes Las Vegas",
      "description": "Complete guide to selling luxury homes in Arcadia Homes Las Vegas, Summerlin West",
      "datePublished": new Date().toISOString().split('T')[0],
      "author": {
        "@type": "Person",
        "name": "Dr. Jan Duffy"
      }
    };

    const schemaId = addSchemaMarkup(articleSchema, "selling-guide-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  const steps = [
    {
      icon: DollarSign,
      title: "1. Market Analysis & Pricing",
      description: "Dr. Duffy provides comprehensive market analysis to determine the optimal listing price for your Arcadia Homes Las Vegas luxury home.",
      details: [
        "Comparative Market Analysis (CMA)",
        "Current market trends in Arcadia Homes Las Vegas",
        "Competitive property analysis",
        "Pricing strategy for maximum return",
        "Days on market projections",
        "Investment return calculations"
      ]
    },
    {
      icon: Home,
      title: "2. Home Preparation & Staging",
      description: "Professional staging and preparation to showcase your luxury home's best features and attract qualified buyers.",
      details: [
        "Professional staging consultation",
        "Decluttering and depersonalization",
        "Minor repairs and updates",
        "Curb appeal enhancement",
        "Luxury feature highlighting",
        "Red Rock Canyon view optimization"
      ]
    },
    {
      icon: Camera,
      title: "3. Professional Photography & Marketing",
      description: "High-quality photography, virtual tours, and comprehensive marketing campaign to reach luxury home buyers.",
      details: [
        "Professional photography and videography",
        "3D virtual tours and Matterport",
        "Drone footage of Red Rock Canyon views",
        "Luxury marketing materials",
        "MLS listing optimization",
        "Targeted buyer outreach"
      ]
    },
    {
      icon: Megaphone,
      title: "4. Marketing & Exposure",
      description: "Multi-channel marketing strategy to maximize exposure to qualified luxury home buyers.",
      details: [
        "MLS and luxury real estate portals",
        "Social media marketing",
        "Luxury home websites and publications",
        "Network of high-net-worth buyers",
        "Open houses and private showings",
        "International buyer outreach"
      ]
    },
    {
      icon: Handshake,
      title: "5. Offer Negotiation",
      description: "Expert negotiation to secure the best possible price and terms for your Arcadia Homes Las Vegas home.",
      details: [
        "Offer evaluation and comparison",
        "Price negotiation strategies",
        "Terms and contingency management",
        "Timeline coordination",
        "Counter-offer strategies",
        "Contract terms optimization"
      ]
    },
    {
      icon: Key,
      title: "6. Closing & Transition",
      description: "Smooth closing process and seamless transition to ensure a successful sale of your luxury home.",
      details: [
        "Buyer inspection coordination",
        "Repair negotiation if needed",
        "Closing document preparation",
        "Final walkthrough coordination",
        "Title transfer and recording",
        "Post-closing support and resources"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Selling Guide", url: "/selling-guide" }]} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Luxury Home Selling Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete guide to selling your luxury home in Arcadia Homes Las Vegas for maximum value. 
              Expert strategies from Dr. Jan Duffy, with $180M+ in sales volume and 15+ years specializing 
              in this exclusive guard-gated community.
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
                href="/home-value"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>Get Free Home Valuation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              The Selling Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these six steps to successfully sell your luxury home in Arcadia Homes Las Vegas
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="bg-primary/10 rounded-xl p-6 w-fit">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mt-6 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">What to Expect:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work with Dr. Duffy */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Why Choose Dr. Jan Duffy to Sell Your Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results and exclusive expertise in Arcadia Homes Las Vegas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maximum Sale Price</h3>
              <p className="text-gray-600">
                Dr. Duffy's pricing strategies and negotiation expertise help sellers achieve top dollar. 
                Her $180M+ in sales volume demonstrates proven results in Arcadia Homes Las Vegas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster Sales</h3>
              <p className="text-gray-600">
                Well-priced homes in Arcadia Homes Las Vegas typically sell within 18-25 days. 
                Dr. Duffy's market knowledge and buyer network ensure quick, successful sales.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Marketing</h3>
              <p className="text-gray-600">
                Dr. Duffy's exclusive focus on Arcadia Homes Las Vegas means she knows exactly 
                where to find qualified luxury buyers for your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Selling in Arcadia Homes Las Vegas"
        description="Common questions about the luxury home selling process in this exclusive guard-gated community"
        faqs={[
          {
            question: "How long does it take to sell a luxury home in Arcadia Homes Las Vegas?",
            answer: "Well-priced luxury homes in Arcadia Homes Las Vegas typically sell within 18-25 days. The exact timeframe depends on pricing, condition, market conditions, and marketing strategy. Dr. Duffy's expertise helps optimize all factors for faster sales."
          },
          {
            question: "What is the best time to sell a home in Arcadia Homes Las Vegas?",
            answer: "While luxury homes in Arcadia Homes Las Vegas sell year-round, spring and early fall typically see increased buyer activity. However, the limited inventory (only 95 homes) means well-priced properties sell quickly regardless of season. Dr. Duffy provides market timing advice based on current conditions."
          },
          {
            question: "How much should I invest in staging and preparation?",
            answer: "For luxury homes in Arcadia Homes Las Vegas, professional staging typically costs $5,000-$15,000 but can significantly increase sale price and reduce time on market. Dr. Duffy provides staging recommendations based on your specific property and target buyers."
          },
          {
            question: "What commission does Dr. Duffy charge?",
            answer: "Dr. Duffy's commission is competitive and negotiable based on the specific circumstances of your transaction. She believes in providing exceptional value and is transparent about all fees upfront. Her track record of maximizing sale prices often results in higher net proceeds for sellers."
          },
          {
            question: "Should I make repairs before selling?",
            answer: "Dr. Duffy provides a comprehensive property assessment to identify which repairs will maximize your return on investment. For luxury homes in Arcadia Homes Las Vegas, minor updates and repairs often pay for themselves through higher sale prices and faster sales."
          },
          {
            question: "How does Dr. Duffy market luxury homes differently?",
            answer: "Dr. Duffy uses luxury-specific marketing including professional photography, 3D virtual tours, drone footage of Red Rock Canyon views, targeted buyer outreach through her network, and placement on luxury real estate portals. Her exclusive focus on Arcadia Homes Las Vegas ensures your property reaches the right buyers."
          }
        ]}
        schemaId="selling-guide-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Sell Your Arcadia Homes Las Vegas Home?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get a free home valuation and consultation with Dr. Jan Duffy. Discover what your 
            luxury home is worth and how to maximize your sale price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/home-value"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <DollarSign className="w-4 h-4" />
              <span>Get Free Home Valuation</span>
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

