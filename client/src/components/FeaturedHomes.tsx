import { useEffect, useState } from "react";
import { Link } from "wouter";

export function FeaturedHomes() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Ensure RealScout script is loaded
  useEffect(() => {
    const checkScript = () => {
      const script = document.querySelector('script[src*="realscout-web-components"]');
      if (script) {
        setScriptLoaded(true);
        return;
      }
      
      // Check if custom elements are defined (indicates script loaded)
      if (customElements.get('realscout-office-listings')) {
        setScriptLoaded(true);
        return;
      }

      // Load script if not present
      const realScoutScript = document.createElement('script');
      realScoutScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      realScoutScript.type = 'module';
      realScoutScript.onload = () => setScriptLoaded(true);
      realScoutScript.onerror = () => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('RealScout script failed to load');
        }
      };
      document.head.appendChild(realScoutScript);
    };

    // Check immediately
    checkScript();

    // Also check after a short delay in case script loads asynchronously
    const timer = setTimeout(checkScript, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Available Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover luxury homes currently available in Arcadia Homes Las Vegas community. 
            Live MLS listings updated in real-time.
          </p>
        </div>

        {/* RealScout Office Listings Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div 
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,TC" price-min="2000000" price-max="4000000" max-results="6"></realscout-office-listings>`
            }} 
          />
          
          <div className="text-center mt-8">
            <Link href="/homes" className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              View All Homes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
