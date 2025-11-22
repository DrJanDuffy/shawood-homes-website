import { Award, Star, Home, Users, Phone, Mail } from "lucide-react";

export function AboutDrDuffy() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Meet Dr. Jan Duffy
            </h2>
            <h3 className="text-xl text-primary font-semibold mb-6">
              Your Arcadia Homes Las Vegas Specialist
            </h3>
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p>
                With over 15 years of real estate expertise in Las Vegas and specialized knowledge 
                of the Arcadia Homes Las Vegas community, Dr. Jan Duffy has helped over 200 families find 
                their dream homes in this exclusive neighborhood.
              </p>
              <p>
                As a long-time Summerlin resident and Arcadia Homes Las Vegas specialist, Dr. Duffy provides 
                unmatched local market insight and personalized service to every client.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Nevada Real Estate License #BS.0145678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Top 1% Las Vegas Realtors 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Certified Luxury Home Marketing Specialist</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:702-500-0337"
                className="flex items-center justify-center space-x-2 btn-primary"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. Duffy</span>
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

          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Dr. Jan Duffy, Arcadia Homes Las Vegas real estate specialist"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
