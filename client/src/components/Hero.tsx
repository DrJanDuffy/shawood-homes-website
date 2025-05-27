import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type MarketData } from "@shared/schema";
import { formatPrice, formatNumber } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";

export function Hero() {
  const { data: marketData } = useQuery<MarketData>({
    queryKey: ["/api/market-data/latest"],
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury home in Shawood Homes Summerlin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-max px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Shawood Homes
          <span className="block text-3xl md:text-4xl text-yellow-300 mt-2">
            Luxury Living in Summerlin West
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
          <span className="text-yellow-300 font-semibold">$2M-$4M Custom Estates</span> in Summerlin West's exclusive 89135 ZIP code, 
          with Red Rock Canyon views and 24/7 guard-gated security.
        </p>

        {/* Value Proposition Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto text-sm md:text-base">
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-yellow-300">✓</span>
            <span>Only 45 custom homes</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-yellow-300">✓</span>
            <span>3 minutes to Red Rock Canyon</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-yellow-300">✓</span>
            <span>Dr. Duffy - 15 years local expert</span>
          </div>
        </div>

        {/* Home Valuation Widget */}
        <div className="bg-white bg-opacity-95 rounded-xl p-6 max-w-md mx-auto shadow-2xl mb-8">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">What's Your Home Worth?</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Get your instant home value estimate</p>
          <div dangerouslySetInnerHTML={{
            __html: `<hvs-widget
              apikey='2947274957274029'
              placeholder='Enter your Address'
              no-result-message='No Results'
              username='drduffy@bhhsnv.com'
              new-window='true'
            ></hvs-widget>`
          }} />
          <p className="text-xs text-gray-500 text-center mt-3">
            🔒 Secure • Free • No Obligation
          </p>
        </div>

        {/* Property Alerts Section */}
        <div className="bg-white bg-opacity-95 rounded-xl p-6 max-w-2xl mx-auto shadow-2xl mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">🚨 Never Miss Your Dream Home</h3>
            <p className="text-gray-600">Get instant alerts when luxury homes match your criteria</p>
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg mt-3 text-sm font-medium">
              Only 3 luxury homes available • Be first in line for new listings
            </div>
          </div>
          
          <div dangerouslySetInnerHTML={{
            __html: `<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>`
          }} />
          
          <p className="text-xs text-gray-500 text-center mt-3">
            🔒 Exclusive access to off-market properties • Dr. Duffy's VIP buyer list
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white bg-opacity-95 rounded-xl p-6 max-w-md mx-auto shadow-2xl mb-8">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Get Your Free Market Analysis</h3>
          <ContactForm />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/homes" className="btn-secondary text-lg px-8 py-4 shadow-xl">
            View Exclusive Homes
          </Link>
          <Link href="/market-predictions" className="btn-primary text-lg px-8 py-4 shadow-xl animate-pulse">
            🔮 Market Predictions
          </Link>
          <Link href="/mortgage-calculator" className="btn-secondary text-lg px-8 py-4 shadow-xl">
            🧮 Calculate Payments
          </Link>
          <a href="mailto:sales@shawoodhomes.com" className="btn-secondary text-lg px-8 py-4 shadow-xl flex items-center justify-center space-x-2">
            <span>✉️</span>
            <span>Email: sales@shawoodhomes.com</span>
          </a>
        </div>

        {/* Urgency/Scarcity Message */}
        <div className="bg-red-600 bg-opacity-90 rounded-lg px-6 py-3 max-w-2xl mx-auto mb-8">
          <p className="text-white text-center font-medium">
            🔥 Only 3 homes available • Exclusive community rarely has inventory
          </p>
        </div>

        {/* Quick Stats */}
        {marketData && (
          <div className="bg-white bg-opacity-95 text-gray-900 rounded-xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {formatPrice(marketData.medianPrice)}
                </div>
                <div className="text-sm text-gray-600">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {marketData.averageDaysOnMarket}
                </div>
                <div className="text-sm text-gray-600">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(marketData.activeListings)}
                </div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(marketData.homesSold)}
                </div>
                <div className="text-sm text-gray-600">Sold This Month</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
