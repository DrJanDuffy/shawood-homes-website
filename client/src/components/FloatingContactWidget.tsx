import { useState, useEffect } from "react";
import * as React from "react";
import { Phone, Mail, MessageCircle, X } from "lucide-react";

export function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ariaExpanded = isExpanded ? "true" : "false";

  // Close on outside click
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (isExpanded && !target.closest('.floating-contact-widget')) {
      setIsExpanded(false);
    }
  };

  // Close on escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isExpanded) {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isExpanded]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 floating-contact-widget">
      {/* Expanded Contact Options */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fade-in" role="menu" aria-label="Contact options">
          {/* Call Button */}
          <a
            href="tel:702-500-0337"
            role="menuitem"
            aria-label="Call Dr. Duffy at (702) 500-0337"
            className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <Phone className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">Call Dr. Duffy</div>
              <div className="text-xs opacity-90">(702) 500-0337</div>
            </div>
          </a>

          {/* Text/SMS Button */}
          <a
            href="sms:702-500-0337?body=Hi Dr. Duffy, I'm interested in Arcadia Homes Las Vegas. Please contact me."
            role="menuitem"
            aria-label="Text message Dr. Duffy"
            className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <MessageCircle className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">Text Message</div>
              <div className="text-xs opacity-90">Quick response</div>
            </div>
          </a>

          {/* Email Button */}
          <a
            href="mailto:DrDuffy@arcadiahomeslasvegas.com?subject=Arcadia Homes Las Vegas Inquiry&body=Hi Dr. Duffy, I'm interested in learning more about Arcadia Homes Las Vegas. Please contact me."
            role="menuitem"
            aria-label="Email Dr. Duffy"
            className="flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <Mail className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">Email</div>
              <div className="text-xs opacity-90">DrDuffy@arcadiahomeslasvegas.com</div>
            </div>
          </a>
        </div>
      )}

      {/* Main Contact Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? "Close contact options" : "Open contact options"}
        aria-expanded={ariaExpanded}
        className={`
          flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
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