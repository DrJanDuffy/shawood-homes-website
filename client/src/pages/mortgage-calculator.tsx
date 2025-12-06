import { useState, useEffect } from "react";
import { Calculator, DollarSign, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";

export default function MortgageCalculator() {
  // SEO Meta Tags
  useMetaTags({
    title: "Luxury Home Mortgage Calculator | Jumbo Loans for Arcadia Homes Las Vegas",
    description: "Calculate monthly payments for luxury homes in Arcadia Homes Las Vegas. Jumbo loan calculator for $2M-$4M properties. Current rates included. Get pre-qualified with preferred lenders.",
    keywords: "mortgage calculator luxury homes, jumbo loan calculator, Summerlin West mortgage rates, luxury home financing calculator",
    ogTitle: "Luxury Home Mortgage Calculator - Arcadia Homes Las Vegas",
    ogDescription: "Jumbo loan calculator for $2M-$4M luxury properties. Calculate monthly payments with current rates.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/mortgage-calculator",
    canonical: "https://www.arcadiahomeslasvegas.com/mortgage-calculator",
  });
  const [homePrice, setHomePrice] = useState(3000000);
  const [downPayment, setDownPayment] = useState(600000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Add WebApplication Schema
  useEffect(() => {
    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Luxury Home Mortgage Calculator",
      "description": "Calculate monthly payments for luxury homes in Arcadia Homes Las Vegas. Jumbo loan calculator for $2M-$4M properties.",
      "url": "https://www.arcadiahomeslasvegas.com/mortgage-calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free mortgage calculator"
      }
    };

    const schemaId = addSchemaMarkup(webAppSchema, "mortgage-calculator-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  // Initialize Homebot widget
  useEffect(() => {
    // Load Homebot script
    const script = document.createElement('script');
    script.src = 'https://embed.homebotapp.com/lgw/v1/widget.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Homebot
      if (window.Homebot) {
        window.Homebot('#homebot_homeowner', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43');
      } else {
        // Set up namespace if needed
        window.__hb_namespace = 'Homebot';
        window.Homebot = window.Homebot || function () { 
          (window.Homebot.q = window.Homebot.q || []).push(arguments) 
        };
        window.Homebot('#homebot_homeowner', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43');
      }
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Calculate mortgage details
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  const monthlyPayment = loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
  const totalPaid = loanAmount + totalInterest;
  const downPaymentPercent = (downPayment / homePrice) * 100;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-brown via-cream to-sage-green">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Luxury Home <span className="text-primary">Mortgage Calculator</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Calculate your monthly payments for luxury homes in Summerlin West. 
            Dr. Jan Duffy's exclusive calculator includes current rates and 
            jumbo loan options for $2M-$4M properties.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <Calculator className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Jumbo Loan Ready</h3>
              <p className="text-gray-600">Specialized calculations for luxury home financing</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Current Rates</h3>
              <p className="text-gray-600">Updated with today's luxury lending rates</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Pre-Qualification</h3>
              <p className="text-gray-600">Connect with Dr. Duffy's preferred lenders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-primary" />
                Loan Details
              </h2>

              <div className="space-y-6">
                {/* Home Price */}
                <div>
                  <Label className="text-lg font-semibold">Home Price</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="text-lg"
                    />
                    <Slider
                      value={[homePrice]}
                      onValueChange={(value) => setHomePrice(value[0])}
                      max={5000000}
                      min={1000000}
                      step={50000}
                      className="mt-3"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>$1M</span>
                      <span>$5M</span>
                    </div>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <Label className="text-lg font-semibold">Down Payment</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="text-lg"
                    />
                    <Slider
                      value={[downPayment]}
                      onValueChange={(value) => setDownPayment(value[0])}
                      max={homePrice * 0.5}
                      min={homePrice * 0.1}
                      step={25000}
                      className="mt-3"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>10%</span>
                      <span className="font-medium text-primary">{downPaymentPercent.toFixed(1)}%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <Label className="text-lg font-semibold">Interest Rate (%)</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="text-lg"
                    />
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={10}
                      min={5}
                      step={0.1}
                      className="mt-3"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>5%</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <Label className="text-lg font-semibold">Loan Term (Years)</Label>
                  <div className="mt-2">
                    <div className="grid grid-cols-3 gap-3">
                      {[15, 30, 40].map((term) => (
                        <Button
                          key={term}
                          variant={loanTerm === term ? "default" : "outline"}
                          onClick={() => setLoanTerm(term)}
                          className="w-full"
                        >
                          {term} years
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Monthly Payment */}
              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Home className="w-6 h-6 mr-2" />
                    Monthly Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">
                    {formatCurrency(monthlyPayment)}
                  </div>
                  <p className="text-gray-100">Principal & Interest</p>
                </CardContent>
              </Card>

              {/* Loan Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Loan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Loan Amount:</span>
                    <span className="text-primary font-semibold">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Down Payment:</span>
                    <span>{formatCurrency(downPayment)} ({downPaymentPercent.toFixed(1)}%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Interest Paid:</span>
                    <span>{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total Amount Paid:</span>
                    <span className="font-semibold text-lg">{formatCurrency(totalPaid)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle>Ready to Get Pre-Qualified?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Dr. Duffy works with top jumbo loan specialists who understand 
                    luxury home financing in Summerlin West.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Connect with Preferred Lenders
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href="tel:702-500-0337"
                        className="btn-secondary text-center py-2"
                      >
                        Call Dr. Duffy
                      </a>
                      <a 
                        href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                        className="btn-outline text-center py-2"
                      >
                        Email Expert
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Homebot Partnership Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Homeownership Intelligence</h2>
              <p className="text-xl text-gray-700 mb-2">
                Powered by Dr. Duffy's Exclusive Partnership with Homebot
              </p>
              <p className="text-gray-600">
                Get personalized insights on your home's value, equity growth, and refinancing opportunities
              </p>
              <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg mt-4 inline-block text-sm font-medium">
                🤝 Exclusive Access • VIP Homeowner Dashboard • Market Predictions
              </div>
            </div>
            
            {/* Homebot Widget */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div id="homebot_homeowner" className="min-h-[400px]"></div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 mb-4">
                🔒 Secure • Free • Updated Monthly • Exclusive to Dr. Duffy's Clients
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="tel:702-500-0337"
                  className="btn-primary py-3 text-center"
                >
                  Discuss Your Home Value with Dr. Duffy
                </a>
                <a 
                  href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                  className="btn-secondary py-3 text-center"
                >
                  Get Personalized Market Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Summerlin West Luxury Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$3.2M</div>
                <p className="text-gray-300">Average Luxury Home Price</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7.5%</div>
                <p className="text-gray-300">Current Jumbo Loan Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">21 Days</div>
                <p className="text-gray-300">Average Days on Market</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}