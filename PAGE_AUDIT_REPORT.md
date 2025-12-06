# Page Audit Report - Enhancement Recommendations
## Arcadia Homes Las Vegas Website
**Date:** November 22, 2025

---

## Executive Summary

This audit covers all pages except the homepage, identifying opportunities for:
- SEO optimization
- Google Analytics event tracking
- Accessibility improvements
- Performance enhancements
- User experience improvements
- Missing features

---

## Page-by-Page Audit

### 1. **About Page** (`/about`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags** - No `useMetaTags` hook implementation
- ❌ **No Google Analytics Events** - No tracking for CTA clicks, phone/email interactions
- ❌ **Missing Schema Markup** - No Person/RealEstateAgent schema
- ⚠️ **Accessibility** - Images missing proper alt text descriptions
- ⚠️ **Performance** - Large images not optimized with loading="lazy"

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "About Dr. Jan Duffy - Arcadia Homes Las Vegas Realtor | 15+ Years Experience",
     description: "Meet Dr. Jan Duffy, the only realtor exclusively focused on Arcadia Homes Las Vegas. 15+ years experience, Top 1% agent, $180M+ in sales.",
     keywords: "Dr Jan Duffy realtor, Arcadia Homes Las Vegas specialist, Summerlin West real estate agent, luxury home expert",
     ogTitle: "About Dr. Jan Duffy - Arcadia Homes Las Vegas Specialist",
     ogDescription: "The only realtor exclusively focused on Arcadia Homes Las Vegas. Hyper-local expertise, service-focused approach.",
     canonical: "https://arcadiahomeslasvegas.com/about",
   });
   ```

2. **Add Google Analytics Events:**
   - Track phone clicks: `gtag('event', 'click', { event_category: 'Contact', event_label: 'Phone - About Page' })`
   - Track email clicks: `gtag('event', 'click', { event_category: 'Contact', event_label: 'Email - About Page' })`
   - Track CTA button clicks

3. **Add Person Schema Markup** for Dr. Duffy

4. **Improve Image Alt Text** - More descriptive alt attributes

---

### 2. **Amenities Page** (`/amenities`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events** - No tracking for amenity interactions
- ❌ **Missing Schema Markup** - No LocalBusiness schema for amenities
- ⚠️ **Performance** - Images loading without lazy loading
- ⚠️ **Accessibility** - Interactive map may not be keyboard accessible

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Amenities Near Arcadia Homes Las Vegas | Shopping, Dining, Recreation",
     description: "Discover world-class amenities near Arcadia Homes Las Vegas. Downtown Summerlin, Red Rock Canyon, championship golf courses, and premium shopping within minutes.",
     keywords: "Arcadia Homes Las Vegas amenities, Summerlin West shopping, Red Rock Canyon, Downtown Summerlin",
     canonical: "https://arcadiahomeslasvegas.com/amenities",
   });
   ```

2. **Add Google Analytics Events:**
   - Track amenity card clicks
   - Track map interactions
   - Track external link clicks to amenities

3. **Add LocalBusiness Schema** for featured amenities

4. **Add Lazy Loading** to all images

---

### 3. **Community Page** (`/community`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ❌ **Missing Schema Markup** - No Place/ResidentialCommunity schema
- ⚠️ **Performance** - Large hero image not optimized

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Arcadia Homes Las Vegas Community | Guard-Gated Luxury in Summerlin West",
     description: "Exclusive guard-gated luxury community in Summerlin West. 95 custom homes, 24/7 security, Red Rock Canyon views. HOA information and community guidelines.",
     keywords: "Arcadia Homes Las Vegas community, guard gated Summerlin West, 89135 luxury community",
     canonical: "https://arcadiahomeslasvegas.com/community",
   });
   ```

2. **Add Place Schema Markup** for the community

3. **Add Google Analytics Events** for HOA info clicks, map interactions

---

### 4. **Contact Page** (`/contact`)
**Status:** ✅ Good (Has Meta Tags)

#### Issues Found:
- ✅ **Has SEO Meta Tags** - Good implementation
- ❌ **No Google Analytics Events** - Missing form submission tracking
- ❌ **No Conversion Tracking** - Form submissions not tracked as conversions
- ⚠️ **Accessibility** - Form validation messages need ARIA labels

#### Recommended Enhancements:
1. **Add Google Analytics Events:**
   - Track form submissions: `gtag('event', 'generate_lead', { event_category: 'Contact Form' })`
   - Track phone clicks
   - Track email clicks
   - Track office hours interactions

2. **Add Conversion Tracking:**
   ```typescript
   // On form submission
   gtag('event', 'conversion', {
     'send_to': 'G-RXEYVBCMLS/contact_form_submit',
     'value': 1.0,
     'currency': 'USD'
   });
   ```

3. **Improve Form Accessibility** - Add ARIA labels to validation messages

---

### 5. **Floor Plans Page** (`/floor-plans`)
**Status:** ⚠️ Needs Major Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ❌ **Missing Schema Markup** - No Product/FloorPlan schema
- ❌ **Non-functional Buttons** - "View Details" and "Download PDF" buttons don't work
- ⚠️ **Performance** - Images not optimized

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Custom Floor Plans - Arcadia Homes Las Vegas | 3,200-8,000 Sq Ft",
     description: "Explore custom floor plans for Arcadia Homes Las Vegas. Luxury homes from 3,200 to 8,000 square feet. Download PDFs and schedule consultations.",
     keywords: "Arcadia Homes Las Vegas floor plans, custom home designs Summerlin West, luxury home floor plans",
     canonical: "https://arcadiahomeslasvegas.com/floor-plans",
   });
   ```

2. **Implement Functional Buttons:**
   - "View Details" should navigate to detailed floor plan page
   - "Download PDF" should trigger download or email form

3. **Add Google Analytics Events:**
   - Track floor plan views
   - Track PDF downloads
   - Track "favorite" button clicks

4. **Add Product Schema** for each floor plan

---

### 6. **Gallery Page** (`/gallery`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events** - No tracking for image views, lightbox interactions
- ❌ **Missing Schema Markup** - No ImageGallery schema
- ⚠️ **Performance** - All images load immediately (should lazy load)
- ⚠️ **Accessibility** - Lightbox navigation needs keyboard support improvements

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Arcadia Homes Las Vegas Photo Gallery | Luxury Homes & Community",
     description: "Explore stunning photos of Arcadia Homes Las Vegas. Luxury interiors, exteriors, Red Rock Canyon views, and community amenities.",
     keywords: "Arcadia Homes Las Vegas photos, luxury home gallery, Summerlin West real estate photos",
     canonical: "https://arcadiahomeslasvegas.com/gallery",
   });
   ```

2. **Add Google Analytics Events:**
   - Track image clicks: `gtag('event', 'view_item', { event_category: 'Gallery', event_label: 'Image Name' })`
   - Track lightbox navigation (next/prev)
   - Track virtual tour button clicks

3. **Add Lazy Loading** to gallery images

4. **Add ImageGallery Schema**

5. **Improve Keyboard Navigation** in lightbox

---

### 7. **Homes/Listings Page** (`/homes`)
**Status:** ✅ Good (Has Meta Tags)

#### Issues Found:
- ✅ **Has SEO Meta Tags** - Good implementation
- ❌ **No Google Analytics Events** - Missing property view tracking
- ⚠️ **RealScout Integration** - Should track widget interactions

#### Recommended Enhancements:
1. **Add Google Analytics Events:**
   - Track property card clicks
   - Track filter usage
   - Track "Schedule Showing" clicks
   - Track RealScout widget interactions

2. **Add Enhanced Ecommerce Tracking:**
   ```typescript
   // When property is viewed
   gtag('event', 'view_item_list', {
     items: [{
       item_id: property.id,
       item_name: property.address,
       price: property.price,
       item_category: 'Luxury Home'
     }]
   });
   ```

---

### 8. **Home Details Page** (`/homes/:id`)
**Status:** ✅ Good (Has Meta Tags & Schema)

#### Issues Found:
- ✅ **Has SEO Meta Tags** - Excellent dynamic implementation
- ✅ **Has Schema Markup** - RealEstateListing schema present
- ❌ **No Google Analytics Events** - Missing detailed property interaction tracking
- ⚠️ **Share Functionality** - Should track share events

#### Recommended Enhancements:
1. **Add Google Analytics Events:**
   - Track "Schedule Showing" clicks: `gtag('event', 'generate_lead', { event_category: 'Property', event_label: property.id })`
   - Track share button clicks
   - Track virtual tour clicks
   - Track contact form on property page

2. **Add Enhanced Ecommerce:**
   ```typescript
   // On page load
   gtag('event', 'view_item', {
     currency: 'USD',
     value: property.price,
     items: [{
       item_id: property.id,
       item_name: property.address,
       price: property.price,
       item_category: 'Luxury Home',
       item_category2: 'Arcadia Homes Las Vegas'
     }]
   });
   ```

---

### 9. **Home Value Page** (`/home-value`)
**Status:** ⚠️ Needs Major Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ❌ **Incorrect Phone Number** - Shows "(702) 222-1964" instead of "(702) 500-0337"
- ❌ **Incorrect Email** - Shows "janet.duffy@bhhsnv.com" instead of "DrDuffy@arcadiahomeslasvegas.com"
- ⚠️ **RealScout Widget** - Should track widget interactions

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Free Home Valuation - Arcadia Homes Las Vegas | Instant Property Value",
     description: "Get a free, instant home valuation for your Arcadia Homes Las Vegas property. Expert market analysis from Dr. Jan Duffy.",
     keywords: "home value Arcadia Homes Las Vegas, property valuation Summerlin West, free home estimate",
     canonical: "https://arcadiahomeslasvegas.com/home-value",
   });
   ```

2. **Fix Contact Information:**
   - Update phone to (702) 500-0337
   - Update email to DrDuffy@arcadiahomeslasvegas.com

3. **Add Google Analytics Events:**
   - Track widget submissions: `gtag('event', 'generate_lead', { event_category: 'Home Valuation' })`
   - Track phone/email clicks

---

### 10. **Lifestyle Page** (`/lifestyle`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ⚠️ **Performance** - Multiple large images not optimized

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Summerlin West Lifestyle | Arcadia Homes Las Vegas Living",
     description: "Experience the perfect blend of luxury living, outdoor recreation, and urban sophistication in Summerlin West. Red Rock Canyon, golf, dining, and entertainment.",
     keywords: "Summerlin West lifestyle, Arcadia Homes Las Vegas living, Red Rock Canyon, Las Vegas lifestyle",
     canonical: "https://arcadiahomeslasvegas.com/lifestyle",
   });
   ```

2. **Add Google Analytics Events** for activity card interactions

3. **Add Lazy Loading** to images

---

### 11. **Market Report Page** (`/market-report`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ⚠️ **Data Visualization** - Could benefit from charts/graphs

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Arcadia Homes Las Vegas Market Report | Real Estate Trends & Statistics",
     description: "Comprehensive market report for Arcadia Homes Las Vegas. Current prices, trends, inventory, and investment outlook. Download free report.",
     keywords: "Arcadia Homes Las Vegas market report, Summerlin West real estate trends, luxury home market analysis",
     canonical: "https://arcadiahomeslasvegas.com/market-report",
   });
   ```

2. **Add Google Analytics Events:**
   - Track report download requests
   - Track table interactions
   - Track comparison views

3. **Add Data Visualization** - Consider adding charts for trends

---

### 12. **Mortgage Calculator Page** (`/mortgage-calculator`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ❌ **Incorrect Email** - Shows "janet.duffy@bhhsnv.com" instead of "DrDuffy@arcadiahomeslasvegas.com"
- ⚠️ **Homebot Widget** - Should track widget interactions

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Luxury Home Mortgage Calculator | Jumbo Loans for Arcadia Homes Las Vegas",
     description: "Calculate monthly payments for luxury homes in Arcadia Homes Las Vegas. Jumbo loan calculator for $2M-$4M properties. Current rates included.",
     keywords: "mortgage calculator luxury homes, jumbo loan calculator, Summerlin West mortgage rates",
     canonical: "https://arcadiahomeslasvegas.com/mortgage-calculator",
   });
   ```

2. **Fix Email Address** - Update to DrDuffy@arcadiahomeslasvegas.com

3. **Add Google Analytics Events:**
   - Track calculator usage: `gtag('event', 'calculate', { event_category: 'Mortgage Calculator' })`
   - Track "Get Pre-Qualified" clicks
   - Track Homebot widget interactions

---

### 13. **Neighborhood Page** (`/neighborhood`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ⚠️ **Performance** - Large hero image not optimized

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Summerlin West Neighborhood | 89135 ZIP Code Demographics & Lifestyle",
     description: "Discover Summerlin West neighborhood. Demographics, lifestyle, amenities, and why the 89135 ZIP code is Las Vegas's most desirable area.",
     keywords: "Summerlin West neighborhood, 89135 demographics, Las Vegas best neighborhoods",
     canonical: "https://arcadiahomeslasvegas.com/neighborhood",
   });
   ```

2. **Add Google Analytics Events** for demographic card interactions

---

### 14. **Property Alerts Page** (`/property-alerts`)
**Status:** ⚠️ Needs Major Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ❌ **Incorrect Phone Number** - Shows "(702) 222-1964" instead of "(702) 500-0337"
- ❌ **Incorrect Email** - Shows "janet.duffy@bhhsnv.com" instead of "DrDuffy@arcadiahomeslasvegas.com"
- ⚠️ **RealScout Widget** - Should track alert setup

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Property Alerts - Arcadia Homes Las Vegas | Never Miss Your Dream Home",
     description: "Get instant alerts when luxury homes in Arcadia Homes Las Vegas match your criteria. Exclusive off-market opportunities and new listings.",
     keywords: "property alerts Arcadia Homes Las Vegas, luxury home notifications, Summerlin West real estate alerts",
     canonical: "https://arcadiahomeslasvegas.com/property-alerts",
   });
   ```

2. **Fix Contact Information:**
   - Update phone to (702) 500-0337
   - Update email to DrDuffy@arcadiahomeslasvegas.com

3. **Add Google Analytics Events:**
   - Track alert setup: `gtag('event', 'generate_lead', { event_category: 'Property Alerts' })`
   - Track RealScout widget interactions

---

### 15. **Schools Page** (`/schools`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ⚠️ **Performance** - School images not optimized

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Schools Near Arcadia Homes Las Vegas | Top-Rated Education in Summerlin West",
     description: "Arcadia Homes Las Vegas students attend top-rated schools in Clark County School District. Elementary, middle, and high school information.",
     keywords: "Arcadia Homes Las Vegas schools, Summerlin West schools, Clark County School District, 89135 schools",
     canonical: "https://arcadiahomeslasvegas.com/schools",
   });
   ```

2. **Add Google Analytics Events:**
   - Track school card clicks
   - Track external school website links
   - Track "Discuss School Options" CTA

3. **Add School Schema Markup** for featured schools

---

### 16. **Testimonials Page** (`/testimonials`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ❌ **Missing Schema Markup** - No Review/AggregateRating schema
- ⚠️ **Video Placeholders** - Video testimonials are placeholders, not functional

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Client Testimonials - Dr. Jan Duffy | Arcadia Homes Las Vegas Reviews",
     description: "Read authentic testimonials from Arcadia Homes Las Vegas clients. 98% satisfaction, $180M+ in sales, 15+ years of excellence.",
     keywords: "Dr Jan Duffy reviews, Arcadia Homes Las Vegas testimonials, Summerlin West realtor reviews",
     canonical: "https://arcadiahomeslasvegas.com/testimonials",
   });
   ```

2. **Add Review Schema Markup:**
   ```json
   {
     "@type": "AggregateRating",
     "ratingValue": "4.9",
     "reviewCount": "45"
   }
   ```

3. **Add Google Analytics Events:**
   - Track testimonial card interactions
   - Track video play attempts

4. **Implement Real Video Testimonials** or remove placeholders

---

### 17. **Market Predictions Page** (`/market-predictions`)
**Status:** ⚠️ Needs Enhancement

#### Issues Found:
- ❌ **Missing SEO Meta Tags**
- ❌ **No Google Analytics Events**
- ⚠️ **Dynamic Content** - Predictions are generated dynamically, should be cached

#### Recommended Enhancements:
1. **Add SEO Meta Tags:**
   ```typescript
   useMetaTags({
     title: "Summerlin West Market Predictions | Arcadia Homes Las Vegas Forecast 2025-2027",
     description: "Dr. Jan Duffy's exclusive market predictions for Summerlin West. Price appreciation forecasts, inventory trends, and investment opportunities.",
     keywords: "Summerlin West market predictions, Arcadia Homes Las Vegas forecast, luxury real estate trends 2025",
     canonical: "https://arcadiahomeslasvegas.com/market-predictions",
   });
   ```

2. **Add Google Analytics Events:**
   - Track timeframe selection
   - Track "Schedule Market Strategy Call" clicks
   - Track report requests

3. **Add Caching** for prediction calculations

---

## Priority Recommendations

### 🔴 High Priority (Do First)
1. **Add SEO Meta Tags** to all pages missing them (13 pages)
2. **Fix Contact Information** errors (3 pages: home-value, mortgage-calculator, property-alerts)
3. **Add Google Analytics Event Tracking** for key interactions
4. **Implement Functional Buttons** on floor-plans page

### 🟡 Medium Priority
1. **Add Schema Markup** where missing (Person, LocalBusiness, Review, etc.)
2. **Add Lazy Loading** to images for performance
3. **Improve Accessibility** (ARIA labels, keyboard navigation)
4. **Add Conversion Tracking** for forms

### 🟢 Low Priority (Nice to Have)
1. **Add Data Visualization** to market report
2. **Implement Real Video Testimonials**
3. **Add Caching** for dynamic content
4. **Enhanced Ecommerce Tracking** for property views

---

## Implementation Checklist

- [ ] Add `useMetaTags` to all pages missing it
- [ ] Fix incorrect phone numbers and emails
- [ ] Add Google Analytics event tracking
- [ ] Add Schema markup where appropriate
- [ ] Implement lazy loading for images
- [ ] Fix non-functional buttons
- [ ] Add ARIA labels for accessibility
- [ ] Add conversion tracking
- [ ] Test all changes
- [ ] Deploy to production

---

## Notes

- All pages should have consistent contact information: (702) 500-0337 and DrDuffy@arcadiahomeslasvegas.com
- Google Analytics tracking ID: G-RXEYVBCMLS
- Consider creating a shared utility for Google Analytics event tracking
- Schema markup should be validated using Google's Rich Results Test



