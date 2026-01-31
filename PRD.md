# Product Requirements Document (PRD): Blessings Food Café Website

## 1. EXECUTIVE SUMMARY
### 1.1 Product Purpose
The purpose of this product is to design, build, and deploy a full-featured, mobile-first, conversion-focused website for **Blessings Food Café**, a local quick-service restaurant in Asansol, West Bengal. 

This is a direct-response digital asset designed to:
*   **Convert** local search traffic into physical walk-ins.
*   **Drive** high-intent actions (WhatsApp orders and phone calls).
*   **Establish** immediate trust and legitimacy in a competitive local market.
*   **Dominate** local SEO for food-related searches in the Asansol region.

### 1.2 Business Context
Operating in a small-city Indian market (Tier 2/3), the business faces specific challenges:
*   **Price Sensitivity:** Customers demand clear, upfront pricing.
*   **Mobile Dominance:** 90%+ traffic will be on mid-range Android devices.
*   **Network Variability:** The site must be lightweight to handle inconsistent 4G/5G connections.
*   **Trust Gap:** Visual proof (real photos) is more important than abstract branding.

### 1.3 Strategic Objectives
*   Provide a reliable digital source for menu, pricing, and location.
*   Reduce dependency on third-party aggregators (Zomato/Swiggy) by encouraging direct WhatsApp ordering.
*   Create a professional digital footprint that outperforms local competitors who lack dedicated websites.

---

## 2. BUSINESS & MARKET ANALYSIS
### 2.1 Business Overview
*   **Name:** Blessings Food Café
*   **Industry:** Food & Beverage (Quick Service Restaurant / Café)
*   **Location:** Asansol, West Bengal, India
*   **Service Model:** Dine-in + Takeaway + WhatsApp Ordering
*   **Price Point:** Affordable / Budget-friendly

### 2.2 Local Market Dynamics (Asansol)
*   **Demographics:** Students, office workers, and local families.
*   **Search Behavior:** High reliance on "near me" searches and Google Maps.
*   **Communication Preference:** WhatsApp is the primary tool for inquiries and informal ordering.
*   **Competitor Weaknesses:** Most local competitors have outdated listings, no digital menus, or poor-quality mobile experiences.

### 2.3 SWOT Analysis
*   **Strengths:** Local presence, affordable pricing, personal touch.
*   **Weaknesses:** Currently lacks digital visibility and structured online menu.
*   **Opportunities:** Rank #1 for "Cafe in Asansol," build a direct customer database via WhatsApp.
*   **Threats:** Aggregator commissions, internet outages, fluctuating ingredient costs (requiring easy menu updates).

---

## 3. PRODUCT VISION & PRINCIPLES
### 3.1 Vision Statement
*"To create a digital experience that is as warm, welcoming, and straightforward as the café itself, serving as the ultimate bridge between a hungry local customer and a delicious meal."*

### 3.2 Core Principles
1.  **Clarity over Creativity:** Don't make the user think. Information must be obvious.
2.  **Speed is a Feature:** The site must load in under 2 seconds on a standard 4G connection.
3.  **Mobile-First, Always:** Design for the thumb, not the mouse.
4.  **Conversion-Centric:** Every scroll should lead toward a Call, WhatsApp, or Map click.

---

## 4. GOALS, OBJECTIVES & KPIs
### 4.1 Primary KPIs
| Metric | Target |
| :--- | :--- |
| **WhatsApp Conversion Rate** | > 5% of total visitors |
| **Call-to-Action Clicks** | > 10% of total visitors |
| **Page Load Time** | < 2.5 seconds (LCP) |
| **Bounce Rate** | < 35% |

### 4.2 Success Definitions
*   **Short-term:** 100% accurate menu online with clickable ordering.
*   **Mid-term:** Ranking on the first page of Google for "Best snacks in Asansol."
*   **Long-term:** Significant portion of takeaway orders coming directly via the website.

---

## 5. TARGET USERS & PERSONAS
### 5.1 Persona A: The Hungry Student (Rohan, 19)
*   **Goal:** Find a cheap, tasty place to hang out with friends.
*   **Pain Point:** Doesn't want to walk to a place only to find it's too expensive or closed.
*   **Need:** Instant menu access and "vibe" photos.

### 5.2 Persona B: The Busy Professional (Priya, 28)
*   **Goal:** Order a quick takeaway lunch via WhatsApp.
*   **Pain Point:** No time to wait for a PDF menu to download.
*   **Need:** One-tap WhatsApp button and clear categories.

### 5.3 Persona C: The Family Decision Maker (Mr. Gupta, 45)
*   **Goal:** Find a clean, reliable place for a family snack.
*   **Pain Point:** Worried about hygiene and location accuracy.
*   **Need:** Google Maps integration and "About Us" section emphasizing quality.

---

## 6. INFORMATION ARCHITECTURE & USER FLOWS
### 6.1 Sitemap
*   **Home:** Hero, CTAs, Top Sellers, Map, Hours.
*   **Menu:** Categorized list with prices (Digital-only, no PDFs).
*   **About:** Story, Hygiene standards, Team.
*   **Contact:** Direct links to Call, WhatsApp, and Directions.

### 6.2 Primary User Flow (The "Hungry Path")
1.  **Entry:** User searches "Cafe near me" -> Clicks Website.
2.  **Discovery:** Views Hero section -> Scrolls to "Popular Items."
3.  **Decision:** Clicks "View Full Menu" -> Selects items.
4.  **Action:** Clicks "Order on WhatsApp" -> Pre-filled message sent.

---

## 7. DETAILED PAGE REQUIREMENTS
### 7.1 Home Page (The Conversion Engine)
*   **Hero Section:** High-quality image of the signature dish + "Open Now" status + "Order Now" CTA.
*   **Quick Links:** Floating Action Button (FAB) for WhatsApp.
*   **Social Proof:** 3-4 curated Google Reviews.
*   **Live Info:** Real-time operating hours and current location.

### 7.2 Menu Page (The Decision Maker)
*   **Navigation:** Sticky category tabs (e.g., Beverages, Snacks, Mains).
*   **Items:** Name, Description (short), Price, Veg/Non-Veg indicator.
*   **Visuals:** Thumbnail images for top-selling items.

### 7.3 About & Contact
*   **Story:** Why "Blessings"? (Local connection).
*   **Contact:** Large, thumb-friendly buttons for "Call Now" and "Get Directions."

---

## 8. DESIGN SYSTEM & UI GUIDELINES
### 8.1 Visual Identity
*   **Primary Color:** Warm Terracotta / Red (#D32F2F) - Stimulates appetite.
*   **Secondary Color:** Cream / Off-White (#FFF8E1) - Provides a clean, "café" feel.
*   **Accent Color:** Deep Coffee Brown (#3E2723) - For typography and trust.
*   **Typography:** 
    *   Headings: *Poppins* (Bold, Modern, Friendly).
    *   Body: *Inter* (Highly readable on small screens).

### 8.2 UI Components
*   **Buttons:** Rounded corners (8px), high contrast, minimum 44px touch target.
*   **Cards:** Subtle shadows, clean borders, focus on content.
*   **Animations:** Micro-interactions on button taps; no heavy parallax or scroll-jacking.

---

## 9. TECHNICAL & NON-FUNCTIONAL REQUIREMENTS
### 9.1 Tech Stack
*   **Frontend:** Next.js (for SEO and performance).
*   **Styling:** Vanilla CSS or Tailwind CSS (for rapid, responsive design).
*   **Deployment:** Vercel or Netlify (Global CDN for speed).
*   **Analytics:** Google Analytics 4 + Google Search Console.

### 9.2 Performance Standards
*   **Lighthouse Score:** 95+ for Performance, Accessibility, and SEO.
*   **Image Optimization:** WebP format, lazy loading enabled.
*   **PWA Features:** Basic manifest for "Add to Home Screen" capability.

---

## 10. SEO & LOCAL STRATEGY
*   **Keywords:** "Cafe in Asansol," "Best snacks in Asansol," "Blessings Food Cafe Menu," "Restaurants near Asansol Station."
*   **Schema Markup:** `LocalBusiness` and `Restaurant` JSON-LD for rich snippets (stars, hours, price range).
*   **Local SEO:** Consistent NAP (Name, Address, Phone) matching Google Business Profile.

---

## 11. RISK MANAGEMENT & SCALABILITY
*   **Risk:** Menu prices change frequently.
    *   *Solution:* Centralized `menu.json` for easy updates without redeploying code.
*   **Risk:** Low-end devices struggle with heavy JS.
    *   *Solution:* Minimize third-party scripts; use server-side rendering.
*   **Future Roadmap:**
    *   Phase 2: Integrated online payment (UPI).
    *   Phase 3: Loyalty program / Digital stamp card.

## 12. ANIMATION STRATEGY (SLIDING ANIMATIONS)
### 12.1 Global Animation Rules
1.  **Subtle & Short:** All animations must be purposeful and not exceed 500ms.
2.  **Non-Blocking:** Animations must not block content visibility or user interaction.
3.  **Performance-First:** No heavy JS loops; use GPU-accelerated properties (`transform`, `opacity`).
4.  **Accessibility:** Respect `prefers-reduced-motion` and disable animations if enabled.
5.  **Graceful Degradation:** Content must be visible if JS fails or on older devices.

### 12.2 Animation Definitions
*   **Slide-Up Fade-In:** 
    *   *State:* Opacity 0, TranslateY +20px -> Opacity 1, TranslateY 0.
    *   *Duration:* 400ms (ease-out).
    *   *Use:* Headings, food cards, testimonials.
*   **Slide-Down Navigation:** 
    *   *State:* Opacity 0, TranslateY -16px -> Opacity 1, TranslateY 0.
    *   *Duration:* 250ms (ease-out).
    *   *Use:* Mobile menu opening.
*   **Slide-In (Left/Right):** 
    *   *Desktop:* TranslateX ±24px -> 0.
    *   *Mobile:* Replaced by Slide-Up.
    *   *Duration:* 450ms (ease-out).

### 12.3 Page-Wise Application
*   **Home:** Hero elements (staggered), popular food cards (staggered 80-120ms), reviews.
*   **Menu:** Container slides only; prices and text must never animate independently.
*   **About:** Story text (slide-up), images (slide-in from right on desktop).
*   **Contact:** Map and CTA buttons (staggered 80ms).
*   **Global Nav:** Mobile menu slides down; closes instantly on tap.

### 12.4 Performance & Safety
*   **GPU Only:** Animate only `transform` and `opacity`. Avoid `width`, `height`, `top`, `left`.
*   **No Layout Shift:** Ensure CLS remains 0.
*   **Fast Scroll Handling:** Animations should not replay and must complete instantly if partially triggered.

---
**Document Version:** 1.1  
**Status:** Finalized for Development  
**Author:** Antigravity AI Project Lead
