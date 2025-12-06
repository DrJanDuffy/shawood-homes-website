import { useEffect } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
  // SEO Meta Tags
  useMetaTags({
    title: "Privacy Policy - Arcadia Homes Las Vegas Real Estate",
    description: "Privacy policy for Arcadia Homes Las Vegas real estate website. Learn how we collect, use, and protect your personal information.",
    robots: "noindex, follow",
    canonical: "https://www.arcadiahomeslasvegas.com/privacy-policy",
  });

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
      
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last Updated: December 6, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Dr. Jan Duffy and Arcadia Homes Las Vegas Real Estate ("we," "our," or "us") is committed to protecting 
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website www.arcadiahomeslasvegas.com.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety of ways:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact information you provide when contacting us or using our services.</li>
              <li><strong>Property Information:</strong> Details about properties you're interested in, search criteria, and property preferences.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and pages visited.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Provide, maintain, and improve our real estate services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you property alerts, market updates, and relevant information about Arcadia Homes Las Vegas</li>
              <li>Process transactions and send related information</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and provide services (e.g., CRM systems, email services)</li>
              <li><strong>Business Partners:</strong> Trusted partners such as lenders, inspectors, and other real estate professionals when necessary to provide services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Google Analytics</h2>
            <p className="text-gray-700 mb-6">
              We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to 
              collect information such as how often users visit our site and what pages they visit. We use the information 
              to improve our website and services. Google's ability to use and share information collected by Google Analytics 
              is restricted by the Google Analytics Terms of Service and Privacy Policy. You can opt-out of Google Analytics 
              by installing the Google Analytics Opt-out Browser Add-on.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request restriction of processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Dr. Jan Duffy</strong></p>
              <p className="text-gray-700 mb-2">Arcadia Homes Las Vegas Real Estate</p>
              <p className="text-gray-700 mb-2">Phone: (702) 500-0337</p>
              <p className="text-gray-700">Email: DrDuffy@arcadiahomeslasvegas.com</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

