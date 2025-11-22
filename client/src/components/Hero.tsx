import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type MarketData } from "@shared/schema";
import { formatPrice, formatNumber } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

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
          alt="Luxury home in Arcadia Homes Las Vegas Summerlin"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-max px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Arcadia Homes Las Vegas
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

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link 
            href="/homes" 
            className="btn-primary text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
            aria-label="View available luxury homes in Arcadia Homes Las Vegas"
          >
            View Exclusive Homes
          </Link>
          <Link 
            href="/contact" 
            className="btn-secondary text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
            aria-label="Schedule a consultation with Dr. Jan Duffy"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link href="/home-value" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
            🏡 Home Value
          </Link>
          <Link href="/property-alerts" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
            🚨 Property Alerts
          </Link>
          <Link href="/mortgage-calculator" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
            🧮 Calculator
          </Link>
          <a 
            href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
            className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105 flex items-center space-x-2"
            aria-label="Email Dr. Jan Duffy at DrDuffy@arcadiahomeslasvegas.com"
          >
            <span>✉️</span>
            <span>Email</span>
          </a>
        </div>

        {/* Urgency/Scarcity Message */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-8 shadow-xl animate-pulse">
          <p className="text-white text-center font-semibold text-lg">
            🔥 Only 3 luxury homes available • Exclusive community rarely has inventory
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#home-content" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-sm mb-2">Explore More</span>
            <ArrowDown className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
