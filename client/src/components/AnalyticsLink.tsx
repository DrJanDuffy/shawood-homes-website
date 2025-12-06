import { Link, type LinkProps } from "wouter";
import { trackButtonClick, trackOutboundLink } from "@/lib/analytics";

interface AnalyticsLinkProps extends LinkProps {
  analyticsLabel?: string;
  analyticsCategory?: "button" | "link" | "outbound";
  isOutbound?: boolean;
}

/**
 * Link component with automatic analytics tracking
 */
export function AnalyticsLink({
  href,
  analyticsLabel,
  analyticsCategory = "link",
  isOutbound = false,
  children,
  ...props
}: AnalyticsLinkProps) {
  const handleClick = () => {
    if (isOutbound && typeof href === "string" && href.startsWith("http")) {
      trackOutboundLink(href, analyticsLabel);
    } else if (analyticsCategory === "button") {
      trackButtonClick(analyticsLabel || String(href), window.location.pathname);
    } else {
      trackButtonClick(analyticsLabel || String(href), window.location.pathname);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

/**
 * Anchor component with automatic analytics tracking for phone/email
 */
interface AnalyticsAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  analyticsLabel?: string;
  trackAs?: "phone" | "email" | "link";
}

export function AnalyticsAnchor({
  href,
  analyticsLabel,
  trackAs,
  children,
  onClick,
  ...props
}: AnalyticsAnchorProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      if (trackAs === "phone" || href.startsWith("tel:")) {
        trackPhoneClick(href.replace("tel:", ""), analyticsLabel);
      } else if (trackAs === "email" || href.startsWith("mailto:")) {
        trackEmailClick(href.replace("mailto:", ""), analyticsLabel);
      } else if (href.startsWith("http") && !href.includes(window.location.hostname)) {
        trackOutboundLink(href, analyticsLabel);
      } else {
        trackButtonClick(analyticsLabel || href, window.location.pathname);
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

