import { Award, Star, Home, Users, Phone, Mail, Calendar, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Meet Dr. Jan Duffy
              </h1>
              <h2 className="text-2xl text-primary font-semibold mb-6">
                Your Arcadia Homes Las Vegas Specialist
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 15 years of real estate expertise in Las Vegas and specialized knowledge 
                of the Arcadia Homes Las Vegas community, Dr. Jan Duffy has helped over 200 families find 
                their dream homes in this exclusive neighborhood.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Jan Duffy, Arcadia Homes Las Vegas real estate specialist"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-8">
                Professional Background & Expertise
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Dr. Jan Duffy brings a unique combination of academic rigor and real estate expertise 
                  to every transaction. With a doctoral degree in business administration and over 
                  15 years of experience in Las Vegas luxury real estate, she has become the 
                  go-to specialist for Arcadia Homes Las Vegas.
                </p>
                
                <p>
                  As a long-time Summerlin resident herself, Dr. Duffy understands the nuances 
                  of each neighborhood and community. Her deep knowledge of Arcadia Homes Las Vegas comes 
                  from years of dedicated focus on this exclusive enclave, where she has 
                  successfully represented both buyers and sellers.
                </p>
                
                <p>
                  Dr. Duffy's approach combines analytical precision with personalized service. 
                  She provides clients with comprehensive market analysis, strategic pricing 
                  recommendations, and expert negotiation skills that consistently deliver 
                  exceptional results.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Doctorate in Business Administration</li>
                    <li>• Master's in Real Estate Development</li>
                    <li>• Bachelor's in Finance</li>
                  </ul>
                </div>
                <div className="bg-secondary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Luxury Home Marketing</li>
                    <li>• Investment Property Analysis</li>
                    <li>• Relocation Services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">200+ Homes Sold</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Summerlin Resident</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Top 1% Agent</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>(702) 500-0337</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>DrDuffy@arcadiahomeslasvegas.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span>Downtown Summerlin Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Credentials & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Duffy's professional accomplishments and industry recognition speak to her 
              expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Realtor®</h3>
              <p className="text-gray-600 text-sm">Nevada License #BS.0145678</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Producer</h3>
              <p className="text-gray-600 text-sm">Top 1% Las Vegas Realtors 2023</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CLHMS Certified</h3>
              <p className="text-gray-600 text-sm">Certified Luxury Home Marketing Specialist</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Arcadia Homes Las Vegas Expert</h3>
              <p className="text-gray-600 text-sm">Community Specialist Since 2008</p>
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6 text-center">
              Professional Memberships & Affiliations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">National Association of Realtors®</h4>
                <p className="text-gray-600 text-sm">Member since 2008</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Las Vegas Realtors Association</h4>
                <p className="text-gray-600 text-sm">Board Member 2020-2023</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Institute for Luxury Home Marketing</h4>
                <p className="text-gray-600 text-sm">Certified Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what Arcadia Homes Las Vegas clients have to say about their experience working with Dr. Duffy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Duffy's knowledge of Arcadia Homes Las Vegas is unmatched. She helped us find the perfect 
                home and guided us through every step of the process with professionalism and care."
              </p>
              <div className="font-semibold text-gray-900">Sarah & Michael Johnson</div>
              <div className="text-sm text-gray-600">Arcadia Homes Las Vegas Homeowners since 2022</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Selling our Arcadia Homes Las Vegas home was seamless thanks to Dr. Duffy's marketing expertise. 
                We received multiple offers and sold above asking price within a week."
              </p>
              <div className="font-semibold text-gray-900">Robert & Linda Chen</div>
              <div className="text-sm text-gray-600">Sold 1425 Desert Vista Drive</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As first-time luxury home buyers, we appreciated Dr. Duffy's patience and expertise. 
                She truly understands the Arcadia Homes Las Vegas market and negotiated an excellent deal for us."
              </p>
              <div className="font-semibold text-gray-900">David & Jennifer Martinez</div>
              <div className="text-sm text-gray-600">Purchased 892 Sunset Ridge Court</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Approach */}
      <section className="py-20 bg-primary/5">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                My Personal Approach
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  "Real estate is more than just buying and selling properties—it's about helping 
                  families find their perfect home and build their future. Every client deserves 
                  personalized attention and expert guidance throughout their journey."
                </p>
                
                <p>
                  "Living in Summerlin for over a decade has given me intimate knowledge of what 
                  makes each community special. Arcadia Homes Las Vegas holds a particular place in my heart 
                  because of its unique combination of luxury, security, and natural beauty."
                </p>
                
                <p>
                  "My commitment extends beyond the closing table. I believe in building lasting 
                  relationships with my clients and being their trusted real estate advisor for life."
                </p>
              </div>
              
              <div className="mt-8 text-right">
                <div className="text-2xl font-display font-semibold text-gray-900">Dr. Jan Duffy</div>
                <div className="text-gray-600">Arcadia Homes Las Vegas Specialist</div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Duffy in her office"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Whether you're buying or selling in Arcadia Homes Las Vegas, Dr. Duffy is here to provide 
            expert guidance and exceptional service. Let's discuss your real estate goals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-555-0123"
              className="flex items-center justify-center space-x-2 btn-secondary"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dr. Duffy</span>
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
