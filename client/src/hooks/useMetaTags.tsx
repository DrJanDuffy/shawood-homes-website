import { useEffect } from "react";

interface MetaTags {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  robots?: string;
  themeColor?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function useMetaTags(meta: MetaTags) {
  useEffect(() => {
    // Update title
    if (meta.title) {
      document.title = meta.title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Update meta tags
    if (meta.description) {
      updateMetaTag("description", meta.description);
    }

    if (meta.keywords) {
      updateMetaTag("keywords", meta.keywords);
    }

    // Open Graph tags
    if (meta.ogTitle) {
      updateMetaTag("og:title", meta.ogTitle, true);
    }

    if (meta.ogDescription) {
      updateMetaTag("og:description", meta.ogDescription, true);
    }

    if (meta.ogImage) {
      updateMetaTag("og:image", meta.ogImage, true);
    }

    if (meta.ogUrl) {
      updateMetaTag("og:url", meta.ogUrl, true);
    }

    // Canonical URL
    if (meta.canonical) {
      let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", meta.canonical);
    }

    // Robots meta tag
    if (meta.robots) {
      updateMetaTag("robots", meta.robots);
    } else if (meta.noindex || meta.nofollow) {
      const robotsValue = [
        meta.noindex ? "noindex" : "index",
        meta.nofollow ? "nofollow" : "follow"
      ].join(", ");
      updateMetaTag("robots", robotsValue);
    }

    // Theme color
    if (meta.themeColor) {
      updateMetaTag("theme-color", meta.themeColor);
    }

    // Cleanup function to restore defaults (optional)
    return () => {
      // Optionally restore default title
      if (meta.title) {
        document.title = "Arcadia Homes Las Vegas | Luxury Real Estate with Dr. Jan Duffy";
      }
    };
  }, [meta]);
}

