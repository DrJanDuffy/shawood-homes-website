import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";

export default function Homes() {
  // SEO Meta Tags
  useMetaTags({
    title: "Available Homes in Arcadia Homes Las Vegas | $2M-$4M Luxury Listings",
    description: "Browse exclusive luxury homes for sale in Arcadia Homes Las Vegas, Summerlin West 89135. Guard-gated community with Red Rock Canyon views. $2M-$4M custom estates.",
    keywords: "Arcadia Homes Las Vegas for sale, luxury homes Summerlin West, 89135 homes for sale, guard gated community Las Vegas, Arcadia Homes listings, Dr Jan Duffy listings",
    ogTitle: "Available Homes in Arcadia Homes Las Vegas",
    ogDescription: "Exclusive luxury homes for sale in Arcadia Homes Las Vegas. Live MLS listings updated in real-time.",
    ogUrl: "https://arcadiahomeslasvegas.com/homes",
    canonical: "https://arcadiahomeslasvegas.com/homes",
  });

  // Add ItemList Schema for property listings
  useEffect(() => {
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Available Homes in Arcadia Homes Las Vegas",
      "description": "Exclusive luxury homes for sale in Arcadia Homes Las Vegas, Summerlin West 89135",
      "url": "https://www.arcadiahomeslasvegas.com/homes",
      "numberOfItems": "Multiple",
      "itemListElement": {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "url": "https://www.arcadiahomeslasvegas.com"
        }
      }
    };

    const schemaId = addSchemaMarkup(itemListSchema, "homes-list-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  // Add FAQ Schema
  useEffect(() => {
    const faqs = [
      {
        question: "How does Dr. Duffy help buyers navigate the home buying process?",
        answer: "Dr. Duffy provides comprehensive buyer services including property search and filtering, private showings, property analysis and comparisons, negotiation strategies, inspection coordination, and guidance through closing. Her exclusive focus on Arcadia Homes Las Vegas ensures buyers see the best properties first."
      },
      {
        question: "What buyer representation services does Dr. Duffy offer?",
        answer: "Dr. Duffy offers full buyer representation including access to off-market and pre-market properties, detailed property analysis, market insights and pricing guidance, expert negotiation on your behalf, transaction management, and post-closing support. She works exclusively for buyers' best interests."
      },
      {
        question: "Can Dr. Duffy help me find off-market properties?",
        answer: "Yes, Dr. Duffy's extensive network and reputation in Arcadia Homes Las Vegas provides access to properties before they hit the MLS. She maintains relationships with homeowners, builders, and other agents to bring exclusive opportunities to her buyer clients first."
      },
      {
        question: "What makes Dr. Duffy's buyer services different?",
        answer: "Dr. Duffy's exclusive focus on Arcadia Homes Las Vegas means she knows every property, every builder, and every aspect of the community. She provides hyper-local expertise, insider knowledge, and personalized service that general realtors cannot match."
      },
      {
        question: "How does Dr. Duffy help with property analysis and pricing?",
        answer: "Dr. Duffy provides detailed Comparative Market Analysis (CMA) for every property, including comparable sales, current market trends, pricing strategies, and investment potential. Her 15+ years of experience in this specific market provides unparalleled insights."
      },
      {
        question: "What support does Dr. Duffy provide after closing?",
        answer: "Dr. Duffy provides ongoing support after closing including introductions to trusted contractors and service providers, community information and resources, and long-term relationship building. She believes in being a trusted real estate advisor for life, not just for the transaction."
      }
    ];

    const faqSchema = generateFAQSchema(faqs);
    const schemaId = addSchemaMarkup(faqSchema, "homes-faq-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  // Ensure RealScout script is loaded
  useEffect(() => {
    const checkScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="realscout-web-components"]');
      if (existingScript) return;
      
      // Check if custom elements are already defined
      if (customElements.get('realscout-office-listings')) return;

      // Load script if not present
      const realScoutScript = document.createElement('script');
      realScoutScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      realScoutScript.type = 'module';
      document.head.appendChild(realScoutScript);
    };

    checkScript();
    const timer = setTimeout(checkScript, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Available Homes", url: "/homes" }]} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Available Homes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover luxury homes currently available in Arcadia Homes Las Vegas community. 
              Each property offers exceptional quality and stunning desert views.
            </p>
          </div>
        </div>
      </section>

      {/* Note: Filters are now handled by RealScout widget below */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-600">
              Use the filters in the RealScout widget below to search by price, bedrooms, bathrooms, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Live Property Listings */}
      <section className="py-20">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Live MLS Listings - Summerlin West
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Authentic property listings updated directly from the MLS. Dr. Duffy's exclusive access to luxury homes $2M-$4M.
            </p>
            
            <div dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,TC" price-min="2000000" price-max="4000000"></realscout-office-listings>`
            }} />
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                🔒 Exclusive MLS Access • Updated Every 15 Minutes • Dr. Duffy's Personal Listings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:702-500-0337"
                  className="btn-primary"
                >
                  Schedule Private Showing
                </a>
                <a 
                  href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                  className="btn-secondary"
                >
                  Get Property Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Duffy has access to off-market properties and upcoming listings. 
            Get notified first about new Arcadia Homes Las Vegas opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/property-alerts">
              <Button variant="secondary" size="lg">
                Set Up Property Alerts
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Dr. Duffy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
