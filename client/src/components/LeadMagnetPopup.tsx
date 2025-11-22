import { useState, useEffect } from "react";
import { X, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function LeadMagnetPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const createLead = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your exclusive market report is being sent to your email.",
      });
      setIsVisible(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
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
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              FREE Summerlin West Market Report
            </h3>
            <p className="text-gray-600">
              Get exclusive insights on luxury home values ($2M-$4M), market trends, and upcoming inventory in the guard-gated 89135 area. Includes recent sales data and price predictions.
            </p>
          </div>

          {/* Value bullets */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Current market values for Arcadia Homes Las Vegas</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Upcoming luxury listings (not public yet)</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Neighborhood investment outlook</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Dr. Duffy's insider market predictions</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full"
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={createLead.isPending}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3"
            >
              {createLead.isPending ? (
                "Sending Report..."
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Get FREE Market Report
                </>
              )}
            </Button>
          </form>

          {/* Alternative contact methods */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-3">
              Prefer to speak directly?
            </p>
            <div className="flex space-x-3">
              <a
                href="tel:702-555-0123"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is secure and never shared
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}