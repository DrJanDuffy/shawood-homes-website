import { useEffect } from "react";
import { CheckCircle, Home, Search, FileText, Handshake, Key, Phone, Mail } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";

export default function BuyingGuide() {
  // SEO Meta Tags
  useMetaTags({
    title: "Luxury Home Buying Guide - Arcadia Homes Las Vegas | Step-by-Step Process",
    description: "Complete guide to buying luxury homes in Arcadia Homes Las Vegas. Step-by-step process, financing options, inspection tips, and expert advice from Dr. Jan Duffy, specializing since 2008.",
    keywords: "buying luxury homes guide, Arcadia Homes Las Vegas buying process, Summerlin West home buying, luxury real estate buyer guide, home buying checklist",
    ogTitle: "Luxury Home Buying Guide - Arcadia Homes Las Vegas",
    ogDescription: "Complete step-by-step guide to buying luxury homes in Arcadia Homes Las Vegas. Expert advice from Dr. Jan Duffy.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/buying-guide",
    canonical: "https://www.arcadiahomeslasvegas.com/buying-guide",
  });

  // Add Article Schema
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Luxury Home Buying Guide - Arcadia Homes Las Vegas",
      "description": "Complete guide to buying luxury homes in Arcadia Homes Las Vegas, Summerlin West",
      "datePublished": new Date().toISOString().split('T')[0],
      "author": {
        "@type": "Person",
        "name": "Dr. Jan Duffy"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Arcadia Homes Las Vegas Real Estate"
      }
    };

    const schemaId = addSchemaMarkup(articleSchema, "buying-guide-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  const steps = [
    {
      icon: Search,
      title: "1. Define Your Criteria",
      description: "Work with Dr. Duffy to identify your must-haves, nice-to-haves, and deal-breakers for your Arcadia Homes Las Vegas luxury home.",
      details: [
        "Budget and price range ($2M-$4M typical)",
        "Square footage requirements (3,200-8,000 sq ft)",
        "Bedroom and bathroom count",
        "Must-have features (wine cellar, home theater, etc.)",
        "Red Rock Canyon view preferences",
        "Guard-gated security requirements"
      ]
    },
    {
      icon: Home,
      title: "2. Property Search & Viewings",
      description: "Dr. Duffy provides access to MLS listings, off-market properties, and pre-market opportunities in Arcadia Homes Las Vegas.",
      details: [
        "Real-time MLS access updated every 15 minutes",
        "Private showings scheduled at your convenience",
        "Off-market and pocket listing access",
        "Virtual tour options for out-of-town buyers",
        "Property comparison analysis",
        "Neighborhood and community insights"
      ]
    },
    {
      icon: FileText,
      title: "3. Make an Offer",
      description: "Dr. Duffy prepares a competitive offer strategy based on market analysis and her 15+ years of Arcadia Homes Las Vegas expertise.",
      details: [
        "Comparative Market Analysis (CMA)",
        "Competitive offer strategy",
        "Negotiation on price and terms",
        "Contingency planning",
        "Timeline coordination",
        "Contract preparation and review"
      ]
    },
    {
      icon: CheckCircle,
      title: "4. Due Diligence & Inspection",
      description: "Thorough property inspection and due diligence to ensure your Arcadia Homes Las Vegas home meets all expectations.",
      details: [
        "Professional home inspection",
        "Property condition assessment",
        "HOA document review",
        "Title search and insurance",
        "Property history research",
        "Builder reputation verification"
      ]
    },
    {
      icon: Handshake,
      title: "5. Financing & Appraisal",
      description: "Secure financing for your luxury home with Dr. Duffy's preferred lenders specializing in jumbo loans for $2M-$4M properties.",
      details: [
        "Pre-qualification with preferred lenders",
        "Jumbo loan options ($2M-$4M range)",
        "Appraisal coordination",
        "Loan approval process",
        "Down payment planning",
        "Closing cost estimates"
      ]
    },
    {
      icon: Key,
      title: "6. Closing & Move-In",
      description: "Final walkthrough, closing coordination, and seamless transition into your new Arcadia Homes Las Vegas luxury home.",
      details: [
        "Final walkthrough inspection",
        "Closing document preparation",
        "Title transfer and recording",
        "Key handover and move-in coordination",
        "Post-closing support and resources",
        "Community introduction and orientation"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Buying Guide", url: "/buying-guide" }]} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Luxury Home Buying Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete step-by-step guide to purchasing a luxury home in Arcadia Homes Las Vegas, 
              Summerlin West. Expert guidance from Dr. Jan Duffy, specializing in this exclusive 
              guard-gated community since 2008.
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
                <span>Schedule Consultation</span>
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
              The Buying Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these six steps to successfully purchase your luxury home in Arcadia Homes Las Vegas
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
              Why Work with Dr. Jan Duffy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only realtor exclusively focused on Arcadia Homes Las Vegas since 2008
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exclusive Focus</h3>
              <p className="text-gray-600">
                Dr. Duffy specializes exclusively in Arcadia Homes Las Vegas, providing unmatched 
                knowledge of every property, builder, and aspect of this exclusive community.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🔑</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Off-Market Access</h3>
              <p className="text-gray-600">
                Her 15+ years of relationships provide access to off-market and pre-market properties 
                before they're listed publicly, giving buyers a significant advantage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Expertise</h3>
              <p className="text-gray-600">
                With over 200 properties sold and $180M+ in sales volume, Dr. Duffy provides 
                unparalleled market insights and pricing strategies for Arcadia Homes Las Vegas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Buying in Arcadia Homes Las Vegas"
        description="Common questions about the luxury home buying process in this exclusive guard-gated community"
        faqs={[
          {
            question: "How long does it take to buy a luxury home in Arcadia Homes Las Vegas?",
            answer: "The typical buying process takes 30-45 days from offer acceptance to closing. However, well-priced homes in Arcadia Homes Las Vegas often sell within 18-25 days, so having financing pre-approved and being ready to act quickly is essential. Dr. Duffy helps buyers prepare in advance."
          },
          {
            question: "What financing options are available for $2M-$4M luxury homes?",
            answer: "Luxury homes in Arcadia Homes Las Vegas typically require jumbo loans, which have different requirements than conventional mortgages. Dr. Duffy works with preferred lenders specializing in jumbo loans for high-value properties. Down payments typically range from 20-30% for jumbo loans."
          },
          {
            question: "Should I get pre-approved before looking at homes?",
            answer: "Yes, absolutely. Pre-approval is essential for luxury home purchases in Arcadia Homes Las Vegas. It demonstrates your seriousness to sellers, helps you act quickly when the right property becomes available, and ensures you're looking at homes within your budget. Dr. Duffy can connect you with preferred lenders."
          },
          {
            question: "What inspections are recommended for luxury homes?",
            answer: "For luxury homes in Arcadia Homes Las Vegas, we recommend comprehensive inspections including structural, HVAC, plumbing, electrical, roof, and specialized systems like wine cellars, home theaters, and smart home automation. Dr. Duffy works with trusted inspectors familiar with luxury home features."
          },
          {
            question: "What are typical closing costs for luxury homes?",
            answer: "Closing costs for luxury homes in Arcadia Homes Las Vegas typically range from 2-5% of the purchase price. This includes lender fees, title insurance, escrow fees, property taxes, HOA transfer fees, and other transaction costs. Dr. Duffy provides detailed closing cost estimates early in the process."
          },
          {
            question: "Can I buy a home in Arcadia Homes Las Vegas if I'm relocating from out of state?",
            answer: "Yes, many buyers relocate to Arcadia Homes Las Vegas from other states. Dr. Duffy offers virtual tours, video consultations, and can coordinate the entire process remotely. She also provides relocation assistance including area orientation, school information, and community introductions."
          }
        ]}
        schemaId="buying-guide-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Start Your Buying Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let Dr. Jan Duffy guide you through purchasing your luxury home in Arcadia Homes Las Vegas. 
            Contact her today to begin your search.
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

