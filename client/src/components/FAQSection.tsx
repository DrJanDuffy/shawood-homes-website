import { useEffect } from "react";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQ[];
  schemaId: string;
  className?: string;
}

export function FAQSection({ title, description, faqs, schemaId, className = "" }: FAQSectionProps) {
  // Add FAQ Schema
  useEffect(() => {
    const faqSchema = generateFAQSchema(faqs);
    const id = addSchemaMarkup(faqSchema, schemaId);
    return () => {
      const script = document.getElementById(id);
      if (script) script.remove();
    };
  }, [faqs, schemaId]);

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

