/**
 * Google Analytics Event Tracking
 * Tracks user interactions for better insights
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a Google Analytics event
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Track phone number clicks
 */
export function trackPhoneClick(phoneNumber: string, location?: string) {
  trackEvent("phone_click", "Contact", `${phoneNumber} - ${location || "unknown"}`);
}

/**
 * Track email clicks
 */
export function trackEmailClick(email: string, location?: string) {
  trackEvent("email_click", "Contact", `${email} - ${location || "unknown"}`);
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string, formType?: string) {
  trackEvent("form_submit", "Lead Generation", `${formName} - ${formType || "contact"}`);
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent("button_click", "Engagement", `${buttonName} - ${location || "unknown"}`);
}

/**
 * Track page views (for SPA navigation)
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-RXEYVBCMLS", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}

/**
 * Track property views
 */
export function trackPropertyView(propertyId: string, propertyAddress?: string) {
  trackEvent("view_property", "Property", propertyAddress || propertyId);
}

/**
 * Track property favorites
 */
export function trackPropertyFavorite(propertyId: string) {
  trackEvent("favorite_property", "Property", propertyId);
}

/**
 * Track property shares
 */
export function trackPropertyShare(propertyId: string, shareMethod: string) {
  trackEvent("share_property", "Property", `${propertyId} - ${shareMethod}`);
}

/**
 * Track search queries
 */
export function trackSearch(query: string, resultsCount?: number) {
  trackEvent("search", "Search", query, resultsCount);
}

/**
 * Track file downloads
 */
export function trackDownload(fileName: string, fileType: string) {
  trackEvent("file_download", "Downloads", `${fileName} - ${fileType}`);
}

/**
 * Track video plays
 */
export function trackVideoPlay(videoName: string, videoLocation?: string) {
  trackEvent("video_play", "Video", `${videoName} - ${videoLocation || "unknown"}`);
}

/**
 * Track outbound links
 */
export function trackOutboundLink(url: string, linkText?: string) {
  trackEvent("outbound_click", "Outbound Links", `${linkText || url} - ${url}`);
}

/**
 * Track calculator usage
 */
export function trackCalculatorUse(calculatorType: string) {
  trackEvent("calculator_use", "Tools", calculatorType);
}

/**
 * Track widget interactions
 */
export function trackWidgetInteraction(widgetName: string, action: string) {
  trackEvent("widget_interaction", "Widgets", `${widgetName} - ${action}`);
}

