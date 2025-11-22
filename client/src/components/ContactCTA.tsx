import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Call Arcadia Homes Las Vegas Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let Dr. Jan Duffy guide you through your Arcadia Homes Las Vegas journey. From market analysis 
              to closing, experience white-glove service every step of the way.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call or Text</div>
                  <div className="text-gray-300">(702) 500-0337</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">DrDuffy@arcadiahomeslasvegas.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Office</div>
                  <div className="text-gray-300">Downtown Summerlin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Get Your Free Market Analysis
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
