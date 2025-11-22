export function InteractiveMap() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6 text-center">
        Exclusive Arcadia Homes Las Vegas Location
      </h3>
      
      {/* Location Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl mb-2">🏔️</div>
          <h4 className="font-semibold text-gray-800">Red Rock Canyon</h4>
          <p className="text-sm text-gray-600">5 minutes away</p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl mb-2">🛒</div>
          <h4 className="font-semibold text-gray-800">Downtown Summerlin</h4>
          <p className="text-sm text-gray-600">2 minutes away</p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl mb-2">✈️</div>
          <h4 className="font-semibold text-gray-800">McCarran Airport</h4>
          <p className="text-sm text-gray-600">25 minutes away</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.7234567891234!2d-115.32!3d36.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA5JzAwLjAiTiAxMTXCsDE5JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arcadia Homes Las Vegas Summerlin West Location"
        />
      </div>

      {/* Location Details */}
      <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Guard-Gated Community</h4>
            <ul className="space-y-2 text-gray-600">
              <li>🛡️ 24/7 Security & Gate Access</li>
              <li>🏡 Luxury Custom Homes</li>
              <li>⛰️ Red Rock Canyon Views</li>
              <li>🌳 Private Community Parks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Nearby Amenities</h4>
            <ul className="space-y-2 text-gray-600">
              <li>🏪 Downtown Summerlin Shopping</li>
              <li>🍽️ World-Class Dining</li>
              <li>⛳ TPC Summerlin Golf Course</li>
              <li>🎭 Red Rock Casino & Resort</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="https://maps.google.com/maps?q=Arcadia+Homes+Las+Vegas+Summerlin+West+Las+Vegas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>📍</span>
            <span>Get Directions to Arcadia Homes Las Vegas</span>
          </a>
        </div>
      </div>
    </div>
  );
}
