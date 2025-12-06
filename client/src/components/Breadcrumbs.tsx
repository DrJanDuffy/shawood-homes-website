import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";
import { addSchemaMarkup, generateBreadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Add Breadcrumb Schema
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://www.arcadiahomeslasvegas.com" },
      ...items
    ]);

    const schemaId = addSchemaMarkup(breadcrumbSchema, "breadcrumb-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="container-max py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.url} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

