import { useState, useEffect } from "react";
import { X, Download, Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

// Phone number formatting function
function formatPhoneNumber(value: string): string {
  const phoneNumber = value.replace(/\D/g, '');
  if (phoneNumber.length <= 3) return phoneNumber;
  if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

export function LeadMagnetPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if popup was already closed in this session
    const wasClosed = localStorage.getItem('leadMagnetPopupClosed');
    if (wasClosed === 'true') {
      setHasShown(true);
      return;
    }

    // Exit intent detection - only show when user is leaving the site
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add delay to prevent immediate triggering (wait at least 5 seconds for better UX)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const createLead = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Your exclusive market report is being sent to your email.",
      });
      setTimeout(() => {
        setIsVisible(false);
        // Store in localStorage to prevent showing again after successful submission
        localStorage.setItem('leadMagnetPopupClosed', 'true');
        setIsSuccess(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      }, 2000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.message || "Something went wrong. Please try again or call (702) 500-0337.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadData = {
      firstName,
      lastName,
      email,
      phone,
      interest: "market_analysis",
      message: "Requested free Summerlin West market report",
      source: "Lead Magnet Popup"
    };

    createLead.mutate(leadData);
  };

  const handleClose = () => {
    setIsVisible(false);
    // Store in localStorage to prevent showing again in this session
    localStorage.setItem('leadMagnetPopupClosed', 'true');
  };

  // Close on escape key and prevent body scroll
  useEffect(() => {
    if (!isVisible) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    // Prevent body scroll when popup is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };


  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-sm w-full shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full p-1 z-20 transition-all"
          aria-label="Close popup"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              FREE Market Report
            </h3>
            <p className="text-sm text-gray-600">
              Get exclusive insights on luxury home values ($2M-$4M) and market trends in the guard-gated 89135 area.
            </p>
          </div>

          {/* Value bullets - more compact */}
          <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-start space-x-1">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Market values</span>
            </div>
            <div className="flex items-start space-x-1">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Upcoming listings</span>
            </div>
            <div className="flex items-start space-x-1">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Investment outlook</span>
            </div>
            <div className="flex items-start space-x-1">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Insider predictions</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full text-sm"
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full text-sm"
              />
            </div>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-sm"
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setPhone(formatted);
              }}
              maxLength={14}
              required
              className="w-full text-sm"
            />
            
            <Button 
              type="submit" 
              disabled={createLead.isPending || isSuccess}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-2.5 text-sm"
            >
              {createLead.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Success!
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Get FREE Report
                </>
              )}
            </Button>
          </form>

          {/* Alternative contact methods */}
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-center text-xs text-gray-600 mb-2">
              Prefer to speak directly?
            </p>
            <div className="flex space-x-2">
              <a
                href="tel:702-500-0337"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg text-xs font-medium flex items-center justify-center space-x-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
              <a
                href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-xs font-medium flex items-center justify-center space-x-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-3 h-3" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              🔒 Secure & confidential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}