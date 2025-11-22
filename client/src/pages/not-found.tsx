import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4 py-20">
      <Card className="w-full max-w-lg mx-auto">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-500" />
              </div>
            </div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              404 Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              The page may have been moved, deleted, or the URL might be incorrect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="gap-2 w-full sm:w-auto">
                  <Home className="w-4 h-4" />
                  Go Home
                </Button>
              </Link>
              <Link href="/homes">
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Search className="w-4 h-4" />
                  Browse Homes
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="gap-2 w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/homes" className="text-primary hover:underline text-sm">Available Homes</Link>
                <Link href="/about" className="text-primary hover:underline text-sm">About Dr. Duffy</Link>
                <Link href="/market-report" className="text-primary hover:underline text-sm">Market Report</Link>
                <Link href="/contact" className="text-primary hover:underline text-sm">Contact</Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
