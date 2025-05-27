import { useState } from "react";
import { Bell, Star, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function MarketInsiderAlert() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const createLead = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to Market Insider Alerts!",
        description: "You'll receive exclusive notifications for new Shawood Homes listings.",
      });
      setEmail("");
      setFirstName("");
      setIsExpanded(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Please try again or call Dr. Duffy directly at (702) 500-0337.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadData = {
      firstName,
      lastName: "",
      email,
      phone: "",
      interest: "market_insider_alerts",
      message: "Signed up for exclusive Market Insider Alerts for Shawood Homes",
      source: "Market Insider Alert Widget"
    };

    createLead.mutate(leadData);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 mr-3" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Market Insider Alerts
              </h2>
            </div>
            <p className="text-xl text-white/90 mb-6">
              Get exclusive early access to new Shawood Homes listings before they hit the market
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
              <p className="text-white/80 text-sm">
                Be the first to know about new luxury listings, often 24-48 hours before public release
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-300" />
              <h3 className="text-lg font-semibold mb-2">Market Intelligence</h3>
              <p className="text-white/80 text-sm">
                Receive insider insights on pricing trends and market opportunities in Summerlin West
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Home className="w-8 h-8 mx-auto mb-3 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Curated Matches</h3>
              <p className="text-white/80 text-sm">
                Personalized recommendations based on your luxury home preferences
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join the Insider Circle</h3>
            <p className="text-white/90 mb-6">
              Limited to serious luxury home buyers in the $2M-$4M range
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              
              <Button
                type="submit"
                disabled={createLead.isPending}
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3 text-lg"
              >
                {createLead.isPending ? (
                  "Activating Your Alerts..."
                ) : (
                  <>
                    <Bell className="w-5 h-5 mr-2" />
                    Activate My Market Insider Alerts
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-white/70 text-sm mt-4">
              Managed personally by Dr. Jan Duffy • No spam, unsubscribe anytime
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-white/90 text-sm">
              <strong>47 exclusive clients</strong> have already secured their dream homes through early alerts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}