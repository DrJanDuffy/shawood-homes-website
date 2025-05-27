import { useState } from "react";
import { Phone, Mail, MessageCircle, X, ChevronUp } from "lucide-react";

export function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Contact Options */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fade-in">
          {/* Call Button */}
          <a
            href="tel:702-500-0337"
            className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">Call Dr. Duffy</div>
              <div className="text-xs opacity-90">(702) 500-0337</div>
            </div>
          </a>

          {/* Text/SMS Button */}
          <a
            href="sms:702-500-0337?body=Hi Dr. Duffy, I'm interested in Shawood Homes. Please contact me."
            className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">Text Message</div>
              <div className="text-xs opacity-90">Quick response</div>
            </div>
          </a>

          {/* Email Button */}
          <a
            href="mailto:jan.duffy@shawoodhomes.com?subject=Shawood Homes Inquiry&body=Hi Dr. Duffy, I'm interested in learning more about Shawood Homes. Please contact me."
            className="flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">Email</div>
              <div className="text-xs opacity-90">jan.duffy@shawoodhomes.com</div>
            </div>
          </a>
        </div>
      )}

      {/* Main Contact Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110
          ${isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90'
          }
        `}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <Phone className="w-6 h-6 text-white" />
            {/* Pulsing animation */}
            <div className="absolute inset-0 w-6 h-6 bg-white rounded-full opacity-30 animate-ping"></div>
          </div>
        )}
      </button>

      {/* Contact Label (when collapsed) */}
      {!isExpanded && (
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
          Contact Dr. Duffy
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}