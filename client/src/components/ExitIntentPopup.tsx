import { useState, useEffect } from "react";
import { X, Home, TrendingUp } from "lucide-react";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add delay to prevent immediate triggering
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000); // Wait 10 seconds before enabling exit intent

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  // Initialize Homebot widget when popup becomes visible
  useEffect(() => {
    if (isVisible && (window as any).Homebot) {
      setTimeout(() => {
        try {
          (window as any).Homebot('#homebot_homeowner_popup', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43');
        } catch (error) {
          console.log('Homebot widget initialization in popup');
        }
      }, 100);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-lg w-full shadow-2xl relative animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Wait! Don't Miss Out
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Before you go, get your <span className="font-semibold text-primary">FREE home value estimate</span>
            </p>
            <p className="text-sm text-gray-500">
              See what your Summerlin West home is worth in today's market
            </p>
          </div>

          {/* Value propositions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Market Trends</p>
              <p className="text-xs text-gray-600">Latest data included</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Home className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Instant Results</p>
              <p className="text-xs text-gray-600">No waiting required</p>
            </div>
          </div>

          {/* Homebot Widget */}
          <div className="mb-6">
            <div id="homebot_homeowner_popup" className="min-h-[200px]">
              {/* Homebot widget will load here */}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="text-center border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500 mb-2">
              🔒 100% Secure & Confidential • No Spam Ever
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-medium">Dr. Jan Duffy</span> • 15+ Years Summerlin Expert • $180M+ Sales
            </p>
          </div>

          {/* Alternative action */}
          <div className="mt-4 text-center">
            <button
              onClick={handleClose}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              No thanks, I'll browse more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}