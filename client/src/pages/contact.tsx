import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Contact Dr. Duffy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore Arcadia Homes Las Vegas? Get in touch with Dr. Jan Duffy, your trusted 
              real estate specialist for personalized service and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Call or text anytime</p>
                    <a 
                      href="tel:702-500-0337" 
                      className="text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      (702) 500-0337
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Professional correspondence</p>
                    <a 
                      href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
                      className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
                    >
                      DrDuffy@arcadiahomeslasvegas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                    <p className="text-gray-600 mb-2">Downtown Summerlin</p>
                    <p className="text-gray-600">
                      1980 Festival Plaza Drive<br />
                      Las Vegas, NV 89135
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-primary mt-2">Available by appointment anytime</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:702-500-0337"
                    className="flex items-center justify-center space-x-2 btn-primary"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                      href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                    className="flex items-center justify-center space-x-2 btn-secondary"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and Dr. Duffy will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              How Dr. Duffy Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate services tailored to your Arcadia Homes Las Vegas needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Buyer Consultation</h3>
              <p className="text-gray-600">
                Comprehensive market analysis, property tours, and expert guidance through 
                the home buying process in Arcadia Homes Las Vegas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Showings</h3>
              <p className="text-gray-600">
                Private tours of available Arcadia Homes Las Vegas properties, including off-market 
                opportunities and coming soon listings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600">
                Detailed market reports, property valuations, and investment analysis 
                specific to the Arcadia Homes Las Vegas community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selling Services</h3>
              <p className="text-gray-600">
                Strategic marketing, professional photography, and expert pricing to 
                maximize your Arcadia Homes Las Vegas home's sale potential.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relocation Assistance</h3>
              <p className="text-gray-600">
                Complete relocation support including school information, community resources, 
                and local area orientation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Guidance</h3>
              <p className="text-gray-600">
                Investment property analysis, rental market insights, and long-term 
                appreciation forecasts for Arcadia Homes Las Vegas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with Dr. Duffy and buying in Arcadia Homes Las Vegas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long have you been selling in Arcadia Homes Las Vegas?
                </h3>
                <p className="text-gray-600">
                  I've been specializing in Arcadia Homes Las Vegas since 2008 and have sold over 200 properties 
                  in this exclusive community. My deep knowledge of the neighborhood gives my clients 
                  a significant advantage.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you represent both buyers and sellers?
                </h3>
                <p className="text-gray-600">
                  Yes, I provide comprehensive services to both buyers and sellers in Arcadia Homes Las Vegas. 
                  My expertise allows me to effectively represent clients on either side of the transaction.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What sets Arcadia Homes Las Vegas apart from other communities?
                </h3>
                <p className="text-gray-600">
                  Arcadia Homes Las Vegas offers a unique combination of 24/7 guard-gated security, stunning 
                  Red Rock Canyon views, custom luxury homes, and proximity to top amenities in 
                  Summerlin West.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly do homes sell in Arcadia Homes Las Vegas?
                </h3>
                <p className="text-gray-600">
                  Currently, well-priced homes in Arcadia Homes Las Vegas typically sell within 18-25 days. The exact 
                  timeframe depends on pricing, condition, and market conditions at the time of listing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you have access to off-market properties?
                </h3>
                <p className="text-gray-600">
                  Yes, my network and reputation in Arcadia Homes Las Vegas often gives me access to properties 
                  before they hit the market. This can be a significant advantage for serious buyers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's your commission structure?
                </h3>
                <p className="text-gray-600">
                  My commission is competitive and negotiable based on the specific circumstances 
                  of your transaction. I believe in providing exceptional value for the service I deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Let's Start Your Arcadia Homes Las Vegas Journey
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Whether you're ready to buy, sell, or just explore your options in Arcadia Homes Las Vegas, 
            Dr. Duffy is here to help. Contact her today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-500-0337"
              className="flex items-center justify-center space-x-2 btn-secondary"
            >
              <Phone className="w-4 h-4" />
              <span>Call (702) 500-0337</span>
            </a>
            <a
                      href="mailto:DrDuffy@arcadiahomeslasvegas.com"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
