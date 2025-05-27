import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael & Sarah Chen",
      location: "The Summit - Shawood Homes",
      rating: 5,
      text: "Dr. Jan Duffy made our dream of living in Summerlin West a reality. Her knowledge of the area and attention to detail throughout the entire process was exceptional. Our home in Shawood Homes exceeds every expectation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "November 2024"
    },
    {
      id: 2,
      name: "Robert & Linda Martinez",
      location: "The Pinnacle - Shawood Homes",
      rating: 5,
      text: "After looking at homes throughout Las Vegas for months, we knew Shawood Homes was special the moment we drove through the guard gate. Dr. Duffy understood exactly what we wanted and found us the perfect home with Red Rock Canyon views.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "October 2024"
    },
    {
      id: 3,
      name: "David Thompson",
      location: "The Estate - Shawood Homes",
      rating: 5,
      text: "As a CEO relocating to Las Vegas, I needed someone who understood luxury real estate. Dr. Duffy's expertise in the Summerlin West market and her professional approach made the entire transaction seamless. The community is exactly what I was looking for.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "September 2024"
    },
    {
      id: 4,
      name: "Jennifer & Mark Wilson",
      location: "The Vista - Shawood Homes",
      rating: 5,
      text: "Dr. Duffy's knowledge of Shawood Homes and the entire 89135 area is unmatched. She helped us navigate the custom home building process and ensured every detail met our high standards. We couldn't be happier with our decision.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "August 2024"
    },
    {
      id: 5,
      name: "Thomas & Patricia Johnson",
      location: "Custom Estate - Shawood Homes",
      rating: 5,
      text: "After 30 years in Manhattan, we wanted a different lifestyle but with the same level of luxury. Shawood Homes delivers on both fronts. Dr. Duffy made the transition from New York to Las Vegas effortless.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "July 2024"
    },
    {
      id: 6,
      name: "Dr. Amanda Rodriguez",
      location: "The Summit - Shawood Homes",
      rating: 5,
      text: "As a fellow doctor, I appreciate attention to detail and professionalism. Dr. Duffy provided both throughout our home buying experience. The security and privacy of Shawood Homes, combined with the Red Rock Canyon views, make this the perfect place to call home.",
      image: "https://images.unsplash.com/photo-1559941619-638ecf0b396d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "June 2024"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "45+", label: "Homes Sold in Shawood" },
    { number: "$180M+", label: "Total Sales Volume" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover why discerning buyers choose Dr. Jan Duffy and Shawood Homes 
            for their luxury real estate needs in Summerlin West.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read authentic reviews from Shawood Homes residents who trusted Dr. Jan Duffy 
              with their luxury real estate investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6 mb-4">"{testimonial.text}"</p>
                </div>
                
                <div className="text-sm text-gray-500">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from Shawood Homes residents about their experience 
              working with Dr. Jan Duffy and living in this exclusive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">The Chen Family</h3>
                  <p className="text-sm opacity-90">Their journey to Shawood Homes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">David Thompson</h3>
                  <p className="text-sm opacity-90">CEO's relocation experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy's expertise and dedication have earned recognition 
              from industry leaders and satisfied clients alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Producer</h3>
              <p className="text-gray-600">Las Vegas Luxury Real Estate - 2024</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Choice Award</h3>
              <p className="text-gray-600">Summerlin Real Estate Council - 2024</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
              <p className="text-gray-600">Nevada Realtors Association - 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}