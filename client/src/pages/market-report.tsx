import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { TrendingUp, BarChart, Home, Calendar, Download, DollarSign } from "lucide-react";
import { type MarketData } from "@shared/schema";
import { formatPrice, formatNumber, formatDecimal } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup, generateArticleSchema } from "@/lib/seo";

export default function MarketReport() {
  // SEO Meta Tags
  useMetaTags({
    title: "Arcadia Homes Las Vegas Market Report | Real Estate Trends & Statistics",
    description: "Comprehensive market report for Arcadia Homes Las Vegas. Current prices, trends, inventory, and investment outlook. Download free detailed market analysis report.",
    keywords: "Arcadia Homes Las Vegas market report, Summerlin West real estate trends, luxury home market analysis, 89135 market data",
    ogTitle: "Arcadia Homes Las Vegas Market Report",
    ogDescription: "Comprehensive market report with current prices, trends, inventory, and investment outlook. Download free detailed analysis.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/market-report",
    canonical: "https://www.arcadiahomeslasvegas.com/market-report",
  });
  const { data: marketData, isLoading } = useQuery<MarketData[]>({
    queryKey: ["/api/market-data"],
  });

  const latest = marketData?.[0];
  const previous = marketData?.[1];

  const calculateTrend = (current: number, previous: number) => {
    if (!previous) return 0;
    return ((current - previous) / previous) * 100;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Arcadia Homes Las Vegas Market Report
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive market insights and analytics for Arcadia Homes Las Vegas community. 
              Stay informed with the latest trends, pricing data, and market forecasts.
            </p>
          </div>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Current Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              {latest && `Data for ${latest.month} ${latest.year}`}
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
                  <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : latest ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatPrice(latest.medianPrice)}
                </div>
                <div className="text-sm text-gray-600 mb-2">Median Home Price</div>
                {previous && (
                  <div className={`text-sm font-medium ${
                    calculateTrend(latest.medianPrice, previous.medianPrice) >= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {calculateTrend(latest.medianPrice, previous.medianPrice) >= 0 ? '+' : ''}
                    {formatDecimal(calculateTrend(latest.medianPrice, previous.medianPrice))}% MoM
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {latest.averageDaysOnMarket}
                </div>
                <div className="text-sm text-gray-600 mb-2">Avg. Days on Market</div>
                {previous && (
                  <div className={`text-sm font-medium ${
                    calculateTrend(latest.averageDaysOnMarket, previous.averageDaysOnMarket) <= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {calculateTrend(latest.averageDaysOnMarket, previous.averageDaysOnMarket) >= 0 ? '+' : ''}
                    {formatDecimal(calculateTrend(latest.averageDaysOnMarket, previous.averageDaysOnMarket))}% MoM
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatNumber(latest.homesSold)}
                </div>
                <div className="text-sm text-gray-600 mb-2">Homes Sold</div>
                {previous && (
                  <div className={`text-sm font-medium ${
                    calculateTrend(latest.homesSold, previous.homesSold) >= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {calculateTrend(latest.homesSold, previous.homesSold) >= 0 ? '+' : ''}
                    {formatDecimal(calculateTrend(latest.homesSold, previous.homesSold))}% MoM
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatNumber(latest.activeListings)}
                </div>
                <div className="text-sm text-gray-600 mb-2">Active Listings</div>
                {previous && (
                  <div className={`text-sm font-medium ${
                    calculateTrend(latest.activeListings, previous.activeListings) >= 0 
                      ? 'text-red-600' 
                      : 'text-green-600'
                  }`}>
                    {calculateTrend(latest.activeListings, previous.activeListings) >= 0 ? '+' : ''}
                    {formatDecimal(calculateTrend(latest.activeListings, previous.activeListings))}% MoM
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <BarChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No market data available</h3>
              <p className="text-gray-500">Market data will be updated soon.</p>
            </div>
          )}

          {/* Market Analysis */}
          {latest && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Market Analysis
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Price Trends</h4>
                    <p className="text-gray-600">
                      Arcadia Homes Las Vegas continues to show strong appreciation with a median price of{' '}
                      {formatPrice(latest.medianPrice)}. The community maintains its position as one of 
                      Summerlin's most desirable luxury neighborhoods.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Market Velocity</h4>
                    <p className="text-gray-600">
                      Properties are selling in an average of {latest.averageDaysOnMarket} days, 
                      indicating {latest.averageDaysOnMarket < 30 ? 'strong' : 'steady'} buyer demand 
                      for luxury homes in this exclusive community.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Inventory Status</h4>
                    <p className="text-gray-600">
                      With {latest.monthsOfInventory} months of inventory, the market shows{' '}
                      {parseFloat(latest.monthsOfInventory || "0") < 3 ? 'seller-favorable' : 'balanced'} conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Investment Outlook
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Appreciation Forecast</h4>
                    <p className="text-gray-600">
                      Based on current trends and Las Vegas market fundamentals, Arcadia Homes Las Vegas 
                      is positioned for continued steady appreciation driven by limited supply 
                      and strong demand for luxury properties.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Market Drivers</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Limited new construction in guard-gated communities</li>
                      <li>• Proximity to Red Rock Canyon and outdoor recreation</li>
                      <li>• Top-rated school districts</li>
                      <li>• Growing tech and business sector in Las Vegas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              How Arcadia Homes Las Vegas Compares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Arcadia Homes Las Vegas stacks up against other luxury communities in Summerlin
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Community</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Median Price</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Avg. Days</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Price/Sq Ft</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Gate Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-primary/5">
                    <td className="px-6 py-4 font-semibold text-gray-900">Arcadia Homes Las Vegas</td>
                    <td className="px-6 py-4 text-right font-semibold text-primary">
                      {latest ? formatPrice(latest.medianPrice) : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-right">{latest?.averageDaysOnMarket || 'N/A'}</td>
                    <td className="px-6 py-4 text-right">${latest ? formatNumber(latest.pricePerSqft) : 'N/A'}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Gated
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">The Ridges</td>
                    <td className="px-6 py-4 text-right">$1,850,000</td>
                    <td className="px-6 py-4 text-right">25</td>
                    <td className="px-6 py-4 text-right">$320</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Gated
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Tournament Hills</td>
                    <td className="px-6 py-4 text-right">$1,150,000</td>
                    <td className="px-6 py-4 text-right">32</td>
                    <td className="px-6 py-4 text-right">$265</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Open
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Red Rock Country Club</td>
                    <td className="px-6 py-4 text-right">$2,100,000</td>
                    <td className="px-6 py-4 text-right">28</td>
                    <td className="px-6 py-4 text-right">$380</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Gated
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Download Report CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Get Your Detailed Market Report
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Receive a comprehensive 15-page market analysis including price trends, 
                neighborhood comparisons, and investment forecasts specifically for Arcadia Homes Las Vegas.
              </p>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5" />
                  <span>12-month price trend analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BarChart className="w-5 h-5" />
                  <span>Detailed market statistics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Home className="w-5 h-5" />
                  <span>Property value estimates</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Request Your Report
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
