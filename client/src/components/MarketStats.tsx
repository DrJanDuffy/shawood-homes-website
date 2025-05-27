import { useQuery } from "@tanstack/react-query";
import { TrendingUp } from "lucide-react";
import { type MarketData } from "@shared/schema";
import { formatPrice, formatNumber, formatDecimal } from "@/lib/utils";

export function MarketStats() {
  const { data: marketData, isLoading } = useQuery<MarketData[]>({
    queryKey: ["/api/market-data"],
  });

  const latest = marketData?.[0];

  if (isLoading || !latest) {
    return (
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Shawood Market Report
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest market trends and statistics for Shawood Homes community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Market Statistics */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Market Highlights - {latest.month} {latest.year}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(latest.medianPrice)}
                  </div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    ${formatNumber(latest.pricePerSqft)}
                  </div>
                  <div className="text-sm text-gray-600">Price per Sq Ft</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {latest.averageDaysOnMarket}
                  </div>
                  <div className="text-sm text-gray-600">Avg Days on Market</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {formatDecimal(latest.monthsOfInventory || "0")}
                  </div>
                  <div className="text-sm text-gray-600">Months of Inventory</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Market Trends</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Price Appreciation (YoY)</span>
                  <span className="text-secondary font-semibold">
                    +{formatDecimal(latest.priceAppreciation || "0")}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Active Listings</span>
                  <span className="text-secondary font-semibold">
                    {formatNumber(latest.activeListings)} homes
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Sold This Month</span>
                  <span className="text-secondary font-semibold">
                    {formatNumber(latest.homesSold)} homes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-24 h-24 text-primary/40 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Price Trend Analysis</h4>
              <p className="text-gray-600">
                Interactive chart showing Shawood Homes price trends over the past 12 months
              </p>
            </div>
          </div>
        </div>

        {/* Get Report CTA */}
        <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Get Your Personalized Market Report
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Receive detailed market analysis and home valuations for Shawood Homes
          </p>
          <button className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Download Report
          </button>
        </div>
      </div>
    </section>
  );
}
