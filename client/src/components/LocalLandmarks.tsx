import { MapPin, Clock, Car } from "lucide-react";

export function LocalLandmarks() {
  const landmarks = [
    {
      name: "Red Rock Canyon National Conservation Area",
      description: "13-mile scenic drive through stunning red rock formations",
      distance: "3.2 miles",
      driveTime: "8 minutes",
      address: "1000 Scenic Loop Dr, Las Vegas, NV 89161",
      highlights: ["Calico Hills", "First Creek Canyon Trail", "Visitor Center"]
    },
    {
      name: "TPC Las Vegas Golf Course",
      description: "Championship course designed by Raymond Floyd",
      distance: "1.8 miles",
      driveTime: "4 minutes",
      address: "9851 Canyon Run Dr, Las Vegas, NV 89145",
      highlights: ["18-hole championship", "Desert target golf", "Red Rock views"]
    },
    {
      name: "Downtown Summerlin",
      description: "Premier shopping and dining destination",
      distance: "5.1 miles",
      driveTime: "12 minutes",
      address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
      highlights: ["125+ stores", "Whole Foods Market", "Las Vegas Ballpark"]
    },
    {
      name: "Red Rock Casino Resort & Spa",
      description: "Luxury resort with gaming, dining, and entertainment",
      distance: "6.2 miles",
      driveTime: "14 minutes",
      address: "11011 W Charleston Blvd, Las Vegas, NV 89135",
      highlights: ["Gaming", "T-Bones Chophouse", "Spa & Fitness"]
    },
    {
      name: "Buffalo Drive Corridor",
      description: "Major north-south arterial with shopping and services",
      distance: "0.8 miles",
      driveTime: "2 minutes",
      address: "Buffalo Dr & W Charleston Blvd",
      highlights: ["Albertsons", "CVS Pharmacy", "Restaurants"]
    },
    {
      name: "Hualapai Way Commercial District",
      description: "Local shopping and professional services",
      distance: "1.2 miles",
      driveTime: "3 minutes",
      address: "Hualapai Way & W Charleston Blvd",
      highlights: ["Smith's Food", "Starbucks", "Medical offices"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Summerlin West Neighborhood
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes the 89135 ZIP code one of Las Vegas's most desirable addresses, 
            with world-class recreation, shopping, and dining just minutes from your front door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((landmark, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 pr-4">
                  {landmark.name}
                </h3>
                <div className="flex items-center text-primary text-sm font-medium">
                  <Car className="w-4 h-4 mr-1" />
                  {landmark.driveTime}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {landmark.description}
              </p>
              
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{landmark.distance} • {landmark.address}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700">Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {landmark.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ZIP Code Info */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">89135 ZIP Code</h3>
          <p className="text-xl mb-6">
            Summerlin West's premier residential area featuring master-planned communities, 
            top-rated schools, and easy access to Red Rock Canyon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">15 min</div>
              <div className="text-sm opacity-90">to Las Vegas Strip</div>
            </div>
            <div>
              <div className="text-3xl font-bold">A+</div>
              <div className="text-sm opacity-90">School District Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2,200+</div>
              <div className="text-sm opacity-90">Elevation (feet)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}