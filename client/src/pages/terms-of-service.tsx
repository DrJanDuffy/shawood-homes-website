import { useEffect } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function TermsOfService() {
  // SEO Meta Tags
  useMetaTags({
    title: "Terms of Service - Arcadia Homes Las Vegas Real Estate",
    description: "Terms of service for Arcadia Homes Las Vegas real estate website. Read our terms and conditions for using our services.",
    robots: "noindex, follow",
    canonical: "https://www.arcadiahomeslasvegas.com/terms-of-service",
  });

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />
      
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Terms of Service
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using www.arcadiahomeslasvegas.com (the "Website"), you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, please do not use 
              this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials on Arcadia Homes Las Vegas Real Estate's website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Real Estate Services</h2>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy is a licensed real estate agent in Nevada (License #BS.0145678). All real estate services 
              are provided in accordance with Nevada real estate laws and regulations. Information on this website is 
              provided for informational purposes only and does not constitute legal, financial, or professional advice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Property Information</h2>
            <p className="text-gray-700 mb-6">
              Property information, including prices, availability, and features, is subject to change without notice. 
              While we strive to provide accurate information, we do not warrant the accuracy, completeness, or usefulness 
              of any information on the website. All property information should be verified independently.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or services that are not owned or controlled by us. 
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of 
              any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable 
              for any damage or loss caused by or in connection with the use of any such content or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Arcadia Homes Las Vegas Real Estate or Dr. Jan Duffy be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) arising out of the 
              use or inability to use the materials on this website, even if we or an authorized representative has been 
              notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify, defend, and hold harmless Arcadia Homes Las Vegas Real Estate, Dr. Jan Duffy, and 
              their affiliates from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) 
              arising out of your use of the website or violation of these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Nevada, 
              without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms 
              shall be subject to the exclusive jurisdiction of the courts of Nevada.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Dr. Jan Duffy</strong></p>
              <p className="text-gray-700 mb-2">Arcadia Homes Las Vegas Real Estate</p>
              <p className="text-gray-700 mb-2">Phone: (702) 500-0337</p>
              <p className="text-gray-700">Email: DrDuffy@arcadiahomeslasvegas.com</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify users of any material 
              changes by posting the new Terms of Service on this page and updating the "Last Updated" date. Your 
              continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

