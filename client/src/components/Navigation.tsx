import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Available Homes", href: "/homes" },
    { name: "Floor Plans", href: "/floor-plans" },
    { name: "Community", href: "/community" },
    { name: "Neighborhood", href: "/neighborhood" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Amenities", href: "/amenities" },
    { name: "Schools", href: "/schools" },
    { name: "Market Report", href: "/market-report" },
    { name: "About Dr. Duffy", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-display">S</span>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-gray-900">
                Arcadia Homes Las Vegas
              </div>
              <div className="text-sm text-gray-600">Summerlin West</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors hover:text-primary",
                location === "/" ? "text-primary" : "text-gray-700"
              )}
            >
              Home
            </Link>
            
            {/* Properties Dropdown */}
            <div className="relative group">
              <button className="font-medium transition-colors hover:text-primary text-gray-700 flex items-center">
                Properties
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <Link href="/homes" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-t-lg">Available Homes</Link>
                <Link href="/floor-plans" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">Floor Plans</Link>
                <Link href="/gallery" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-b-lg">Photo Gallery</Link>
              </div>
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <button className="font-medium transition-colors hover:text-primary text-gray-700 flex items-center">
                Community
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <Link href="/community" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-t-lg">About Arcadia Homes Las Vegas</Link>
                <Link href="/neighborhood" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">Neighborhood</Link>
                <Link href="/lifestyle" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">Lifestyle</Link>
                <Link href="/amenities" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">Amenities</Link>
                <Link href="/schools" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-b-lg">Schools</Link>
              </div>
            </div>

            <Link
              href="/testimonials"
              className={cn(
                "font-medium transition-colors hover:text-primary",
                location === "/testimonials" ? "text-primary" : "text-gray-700"
              )}
            >
              Testimonials
            </Link>

            <Link
              href="/market-report"
              className={cn(
                "font-medium transition-colors hover:text-primary",
                location === "/market-report" ? "text-primary" : "text-gray-700"
              )}
            >
              Market Report
            </Link>

            <Link
              href="/home-value"
              className={cn(
                "font-medium transition-colors hover:text-primary bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200",
                location === "/home-value" ? "text-primary bg-yellow-100" : "text-gray-700"
              )}
            >
              🏡 Home Value
            </Link>

            <Link
              href="/property-alerts"
              className={cn(
                "font-medium transition-colors hover:text-primary bg-red-50 px-3 py-1 rounded-lg border border-red-200 pulse",
                location === "/property-alerts" ? "text-primary bg-red-100" : "text-gray-700"
              )}
            >
              🚨 Property Alerts
            </Link>

            <Link
              href="/mortgage-calculator"
              className={cn(
                "font-medium transition-colors hover:text-primary bg-blue-50 px-3 py-1 rounded-lg border border-blue-200",
                location === "/mortgage-calculator" ? "text-primary bg-blue-100" : "text-gray-700"
              )}
            >
              🧮 Mortgage Calculator
            </Link>

            <Link
              href="/market-predictions"
              className={cn(
                "font-medium transition-colors hover:text-primary bg-purple-50 px-3 py-1 rounded-lg border border-purple-200 animate-pulse",
                location === "/market-predictions" ? "text-primary bg-purple-100" : "text-gray-700"
              )}
            >
              🔮 Market Predictions
            </Link>

            <Link
              href="/about"
              className={cn(
                "font-medium transition-colors hover:text-primary",
                location === "/about" ? "text-primary" : "text-gray-700"
              )}
            >
              About Dr. Duffy
            </Link>

            <Link
              href="/contact"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary",
                    location === item.href 
                      ? "text-primary" 
                      : "text-gray-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:702-555-0123"
                className="flex items-center space-x-2 btn-primary w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>(702) 555-0123</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
