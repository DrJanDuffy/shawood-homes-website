import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-display">S</span>
              </div>
              <div>
                <div className="font-display text-xl font-bold">Shawood Homes</div>
                <div className="text-sm text-gray-400">Summerlin West Luxury Real Estate</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for luxury real estate in Shawood Homes, Summerlin West. 
              Specializing in this exclusive guard-gated community since 2008.
            </p>
            <div className="text-sm text-gray-400">
              <p>Dr. Jan Duffy, Realtor®</p>
              <p>Nevada License #BS.0145678</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/homes" className="hover:text-white transition-colors">Available Homes</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community Info</Link></li>
              <li><Link href="/market-report" className="hover:text-white transition-colors">Market Report</Link></li>
              <li><Link href="/amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Dr. Duffy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(702) 222-1964</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sales@shawoodhomes.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Downtown Summerlin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Shawood Homes Real Estate. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
