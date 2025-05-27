import { Star, Users, Award, TrendingUp } from "lucide-react";

export function SocialProofWidget() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Social Proof Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Luxury Home Buyers
          </h2>
          <p className="text-gray-600">Join exclusive clients who chose Shawood Homes</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">$180M+</div>
            <div className="text-sm text-gray-600">Sales Volume</div>
          </div>
          
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">45+</div>
            <div className="text-sm text-gray-600">Homes Sold</div>
          </div>
          
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-600">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-gray-600">Years Expert</div>
          </div>
        </div>

        {/* Client Testimonials Carousel */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-sm">Michael Chen</div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                "Dr. Duffy found us the perfect home in Shawood. Her expertise in the area is unmatched."
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-sm">Linda Martinez</div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                "The Red Rock Canyon views from our home are breathtaking. Worth every penny."
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-sm">David Thompson</div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                "Professional service from start to finish. Shawood Homes exceeded expectations."
              </p>
            </div>
          </div>
        </div>

        {/* Awards Banner */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium">Top Producer 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Client Choice Award</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Excellence in Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}