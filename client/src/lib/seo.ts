/**
 * SEO Utilities for 2025 Best Practices
 * Includes schema markup helpers and SEO optimization functions
 */

/**
 * Generate Review Schema Markup
 */
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    "reviewCount": reviews.length,
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy"
    }
  };
}

/**
 * Generate FAQ Schema Markup
 */
export function generateFAQSchema(faqs: Array<{
  question: string;
  answer: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{
  name: string;
  url: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate Article Schema (for blog posts or detailed content)
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arcadia Homes Las Vegas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.arcadiahomeslasvegas.com/logo.png"
      }
    },
    "url": article.url
  };
}

/**
 * Add schema markup to page
 */
export function addSchemaMarkup(schema: object, id?: string) {
  // Remove existing schema if updating
  if (id) {
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id || `schema-${Date.now()}`;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  return script.id;
}

/**
 * Remove schema markup by ID
 */
export function removeSchemaMarkup(id: string) {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}

