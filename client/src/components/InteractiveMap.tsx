export function InteractiveMap() {
  // Arcadia Homes Las Vegas location: 1020 Natural Harmony Street, Las Vegas, NV 89135
  // Using simple Google Maps embed URL with address query
  const mapEmbedUrl = "https://www.google.com/maps?q=1020+Natural+Harmony+Street,+Las+Vegas,+NV+89135&output=embed";

  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          Arcadia Homes Las Vegas Location
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the premier guard-gated community in Summerlin West, Las Vegas 89135. 
          Experience luxury living with stunning Red Rock Canyon views and world-class amenities.
        </p>
      </div>
      
      {/* Location Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🏔️</div>
          <h4 className="font-semibold text-gray-800 mb-1">Red Rock Canyon</h4>
          <p className="text-sm text-gray-600">5 minutes away</p>
          <p className="text-xs text-gray-500 mt-1">National Conservation Area</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🛒</div>
          <h4 className="font-semibold text-gray-800 mb-1">Downtown Summerlin</h4>
          <p className="text-sm text-gray-600">2 minutes away</p>
          <p className="text-xs text-gray-500 mt-1">Shopping & Dining</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">✈️</div>
          <h4 className="font-semibold text-gray-800 mb-1">Harry Reid Airport</h4>
          <p className="text-sm text-gray-600">25 minutes away</p>
          <p className="text-xs text-gray-500 mt-1">International Airport</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="rounded-xl overflow-hidden shadow-xl mb-6">
        <div className="relative bg-gray-200">
          <iframe
            src="https://www.google.com/maps?q=1020+Natural+Harmony+Street,+Las+Vegas,+NV+89135&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arcadia Homes Las Vegas Summerlin West Location with Nearby Amenities"
            className="w-full"
            aria-label="Interactive map showing Arcadia Homes Las Vegas location at 1020 Natural Harmony Street in Summerlin West with nearby amenities including Red Rock Canyon, Downtown Summerlin, and Harry Reid Airport"
          />
        </div>
        <div className="mt-4 text-center bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">📍 Location:</span> 1020 Natural Harmony Street, Las Vegas, NV 89135
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Use the map controls above to explore nearby amenities, get directions, and view the area in detail
          </p>
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🛡️</span>
              Guard-Gated Community
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>24/7 Security & Gate Access</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Luxury Custom Homes ($2M-$4M)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Red Rock Canyon Views</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Private Community Parks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Exclusive 89135 Zip Code</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📍</span>
              Nearby Amenities
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Downtown Summerlin Shopping (2 min)</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>World-Class Dining & Entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>TPC Summerlin Golf Course</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Red Rock Casino & Resort</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Top-Rated Schools (Summerlin Area)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.google.com/maps/search/1020+Natural+Harmony+Street,+Las+Vegas,+NV+89135"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>📍</span>
              <span>Get Directions</span>
            </a>
            <a 
              href="tel:702-500-0337"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>📞</span>
              <span>Call Dr. Duffy: (702) 500-0337</span>
            </a>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Address: 1020 Natural Harmony Street, Las Vegas, NV 89135
          </p>
        </div>
      </div>
    </div>
  );
}
