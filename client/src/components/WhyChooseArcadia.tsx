import { Mountain, GraduationCap, ShoppingBag, TreePine } from "lucide-react";

export function WhyChooseArcadia() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Choose Arcadia Homes Las Vegas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Arcadia Homes Las Vegas the premier luxury community in Summerlin West
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Rock Canyon Views</h3>
                <p className="text-gray-600">
                  Wake up to breathtaking views of Red Rock Canyon's iconic sandstone formations from your backyard.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Top-Rated Schools</h3>
                <p className="text-gray-600">
                  Children attend prestigious Palo Verde High School and other highly-rated CCSD schools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Downtown Summerlin</h3>
                <p className="text-gray-600">
                  Minutes from premium shopping, dining, and entertainment at Downtown Summerlin.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TreePine className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recreation & Trails</h3>
                <p className="text-gray-600">
                  Access to miles of hiking trails, golf courses, and outdoor recreation opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Red Rock Canyon landscape with dramatic sandstone formations near Arcadia Homes Las Vegas in Summerlin West"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6 text-center">
            Arcadia Homes Las Vegas Location
          </h3>
          <div className="mapbox-placeholder bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h4 className="text-lg font-semibold text-gray-600 mb-2">Interactive Map</h4>
              <p className="text-gray-500">Arcadia Homes Las Vegas location with nearby amenities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

