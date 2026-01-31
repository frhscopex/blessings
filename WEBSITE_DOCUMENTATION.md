# Blessings Food Café - Complete Website Documentation

> **Purpose:** This document contains every detail needed to recreate the Blessings Food Café website from scratch.

---

## Table of Contents
1. [Tech Stack](#1-tech-stack)
2. [Project Structure](#2-project-structure)
3. [Design System](#3-design-system)
4. [Typography](#4-typography)
5. [Global Styles & Animations](#5-global-styles--animations)
6. [Layout & Navbar](#6-layout--navbar)
7. [Pages](#7-pages)
8. [Images & Assets](#8-images--assets)
9. [Data Structures](#9-data-structures)
10. [Business Information](#10-business-information)
11. [Third-Party Integrations](#11-third-party-integrations)

---

## 1. Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with SSR and App Router |
| **React** | 19.2.3 | UI library |
| **Tailwind CSS** | v4 | Utility-first styling |
| **PostCSS** | - | CSS processing |
| **ESLint** | v9 | Code linting |

### Dependencies (package.json)
```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4"
  }
}
```

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 2. Project Structure

```
blessings/
├── public/
│   ├── cafe.jpg                    # Hero background image
│   └── images/
│       ├── cafe-interior.png       # About section image
│       ├── cappuccino.png
│       ├── cheese-nuggets.png
│       ├── cold-coffee.png
│       ├── cold-coffee-transparent.png
│       ├── french-fries.png
│       ├── hakka-noodles.png
│       ├── hero.png
│       ├── leaves.png              # Decorative
│       ├── lime-soda.png
│       ├── masala-tea.png
│       ├── orange-slice.png        # Decorative
│       ├── paneer-butter-masala.png
│       ├── paneer-sandwich.png
│       ├── paneer-sandwich-transparent.png
│       ├── veg-burger.png
│       ├── veg-burger-transparent.png
│       └── veg-pulao.png
├── src/
│   ├── app/
│   │   ├── layout.js               # Root layout with fonts & Navbar
│   │   ├── globals.css             # Global styles & theme
│   │   ├── page.js                 # Homepage
│   │   ├── menu/
│   │   │   └── page.js             # Menu page
│   │   ├── blogs/
│   │   │   └── page.js             # Coming soon placeholder
│   │   └── contact/
│   │       └── page.js             # Contact page
│   └── components/
│       └── Navbar.js               # Navigation component
├── package.json
├── next.config.mjs
├── postcss.config.mjs
└── jsconfig.json
```

---

## 3. Design System

### Color Palette

| Variable | Hex Code | Name | Usage |
|----------|----------|------|-------|
| `--color-primary` | `#D32F2F` | Warm Terracotta/Red | CTAs, accents, highlights |
| `--color-secondary` | `#FFF8E1` | Cream/Off-White | Backgrounds, text on dark |
| `--color-accent` | `#3E2723` | Deep Coffee Brown | Text, dark backgrounds |

### Tailwind Theme Classes
- `bg-primary` / `text-primary` - Red (#D32F2F)
- `bg-secondary` / `text-secondary` - Cream (#FFF8E1)
- `bg-accent` / `text-accent` - Brown (#3E2723)

### Section Color Mapping (Dynamic Theme)
```javascript
const SECTION_COLORS = {
  'home': '#3E2723',      // Hero - dark brown
  'chefs-picks': '#F5F1E8', // Chef's Picks - cream
  'about': '#FFF8E1',     // About - light cream
  'reviews': '#F5F5F5',   // Reviews - light gray
  'footer': '#3E2723',    // Footer - dark brown
};
```

---

## 4. Typography

### Font Families

| Style | Font | Weights | CSS Variable |
|-------|------|---------|--------------|
| Headings | **Poppins** (Google Fonts) | 400, 700, 900 | `--font-poppins` |
| Body | **Inter** (Google Fonts) | Regular | `--font-inter` |

### Import in Layout
```javascript
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### Tailwind Classes
- `font-headings` - Poppins (for h1-h6)
- `font-body` - Inter (body text)

---

## 5. Global Styles & Animations

### Base Styles
- Hidden scrollbars (WebKit, Firefox, IE/Edge)
- Smooth scroll behavior
- Anti-aliased font rendering
- Overflow-x hidden globally
- Dark background (`#3E2723`) on body for overscroll effect

### Custom Animations

#### Slide Animations (PRD 12.2 Compliant)
```css
/* Slide Up - 400ms ease-out */
.animate-slide-up {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 400ms ease-out forwards;
}

/* Slide Down - 250ms ease-out (mobile menu) */
.animate-slide-down {
  opacity: 0;
  transform: translateY(-16px);
  animation: slideDown 250ms ease-out forwards;
}

/* Slide Left/Right - Desktop only, 450ms */
/* Falls back to slide-up on mobile */
```

#### Marquee Animations (Reviews)
```css
.animate-marquee-left {
  animation: marquee-left 180s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 180s linear infinite;
}
```

#### Glow Background Effect
```css
.animate-glow-bg {
  animation: glow-bg-pulse 4s ease-in-out infinite;
}
```

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 1ms !important;
    transition-duration: 0s !important;
  }
}
```

---

## 6. Layout & Navbar

### Root Layout (`layout.js`)

```javascript
export const metadata = {
  title: "Blessings Food Café | Best Snacks in Asansol",
  description: "Delicious snacks, warm coffee, and a cozy atmosphere in Asansol. Visit us or order via WhatsApp!",
};
```

- Theme color meta tag: `#3E2723`
- Navbar included globally
- Font variables applied to body

### Navbar Component

#### Features
- **Fixed position** (top: 0, z-50)
- **Scroll detection** (changes style after 20px scroll)
- **Page-aware styling**:
  - Home & Menu pages: Transparent navbar with light text
  - Other pages: Solid cream navbar with dark text
- **Mobile drawer menu** (slides from right, 288px wide)

#### Navigation Links
```javascript
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/#about" },
  { name: "Visit Us", href: "/contact" },
];
```

#### Navbar States
| State | Background | Text Color | Padding |
|-------|------------|------------|---------|
| Default (dark pages) | Transparent | secondary/70 | py-5 |
| Scrolled | secondary/95 + blur | accent/70 | py-3 |
| Light pages | secondary/95 + blur | accent/70 | py-3 |

#### Mobile Menu
- Overlay: `bg-black/50`
- Drawer: 288px wide, slides in from right
- Close button in top-right corner
- Contact info at bottom

---

## 7. Pages

### 7.1 Homepage (`src/app/page.js`)

#### Sections (in order):

##### A. Hero Section
- **Background**: `/cafe.jpg` with 40% opacity + gradient overlay
- **Content**:
  - "Welcome to" label (uppercase, tracking-[0.4em])
  - "Blessings Food Café" title (6xl → 9xl on desktop)
  - Tagline: "Delicious snacks, warm coffee, and a cozy atmosphere in Asansol."
- **CTAs**:
  - "Explore Menu" → `/menu` (primary button)
  - "Order on WhatsApp" → `https://wa.me/919475875536` (outline button)
- **Glow effect**: Blurred primary/20 behind title

##### B. Stats Section
- Background: `bg-primary`
- 4-column grid (2 on mobile)
- Animated count-up on scroll (IntersectionObserver)

```javascript
const STATS = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Menu Items" },
  { value: 3, suffix: "", label: "Years Serving" },
  { value: 5.0, suffix: "", label: "Google Rating", isDecimal: true },
];
```

##### C. Chef's Picks Section
- Background: `#F5F1E8`
- Decorative elements: leaves.png, orange-slice.png (desktop only)
- **Featured Items Layout**:
  1. Cold Coffee (image left, content right) - Main hero item
  2. Paneer Tikka Sandwich (image right on desktop)
  3. Crispy Veg Burger (image left, content right)
- "View Full Menu" CTA at bottom

##### D. About Section
- 2-column grid (content left, image right)
- **Content**:
  - "Why Choose Blessings?" heading
  - Story paragraph
  - 4 numbered features list
- **Image**: cafe-interior.png (550px height, rounded-[3rem])

##### E. Reviews Marquee Section
- 2 rows of auto-scrolling review cards
- Row 1: Scrolls left-to-right
- Row 2: Scrolls right-to-left
- Cards contain: rating stars, review text, customer name/avatar

##### F. Footer
- 4-column grid (2 on mobile)
- **Columns**:
  1. Brand (name + tagline)
  2. Quick Links
  3. Socials (WhatsApp, Instagram, Facebook)
  4. Contact Info
- Copyright bottom bar

##### G. WhatsApp FAB
- Fixed bottom-right (bottom-6, right-6)
- Green (#25D366) background
- **Pulse animation**: First 5 seconds only
- Hover expands to show "Chat with us" text

---

### 7.2 Menu Page (`src/app/menu/page.js`)

#### Sections:

##### A. Hero
- Dark background (bg-accent)
- Decorative glow blobs
- "Taste the Best" label
- "Our Menu" title (primary colored "Menu")

##### B. Filter Navigation
- Sticky (below navbar)
- Pill-style buttons: All, Beverages, Snacks, Mains
- Active state: Primary bg with scale effect
- White/80 backdrop blur container

##### C. Food Grid
- 2-column grid on desktop, 1 on mobile
- **Card Structure**:
  - Image (rounded, 6° rotation on hover)
  - Name + Price (horizontal)
  - Description
  - Category badge
- Staggered animation (50ms delay per item)

##### D. CTA Section
- Primary background
- "Craving something special?" heading
- WhatsApp CTA button

---

### 7.3 Blogs Page (`src/app/blogs/page.js`)

Simple "Coming Soon" placeholder:
- Centered content
- "Our Blog is Cooking..." heading
- "Back to Home" button

---

### 7.4 Contact Page (`src/app/contact/page.js`)

#### Layout
- 2-column grid (map left, contact card right)
- Mobile: Contact card first, then map

#### Google Maps Embed
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58514.3941740924!2d86.9314486!3d23.6834541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022577%3A0x210ca9278711e646!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
/>
```

#### Contact Card Content
- Address, Hours, Phone
- Two CTA buttons: WhatsApp & Call

---

## 8. Images & Assets

### Hero & Backgrounds
| File | Usage | Size |
|------|-------|------|
| `/cafe.jpg` | Hero background | 316KB |
| `/images/cafe-interior.png` | About section | 780KB |
| `/images/hero.png` | Alternative hero | 714KB |

### Decorative Elements
| File | Usage |
|------|-------|
| `/images/leaves.png` | Chef's picks decoration |
| `/images/orange-slice.png` | Chef's picks decoration |

### Food Images (Standard)
| File | Menu Item |
|------|-----------|
| `cold-coffee.png` | Classic Cold Coffee |
| `cappuccino.png` | Hot Cappuccino |
| `masala-tea.png` | Masala Tea |
| `lime-soda.png` | Fresh Lime Soda |
| `paneer-sandwich.png` | Paneer Tikka Sandwich |
| `veg-burger.png` | Crispy Veg Burger |
| `french-fries.png` | French Fries |
| `cheese-nuggets.png` | Cheese Corn Nuggets |
| `hakka-noodles.png` | Veg Hakka Noodles |
| `paneer-butter-masala.png` | Paneer Butter Masala |
| `veg-pulao.png` | Mixed Veg Pulao |

### Transparent Food Images (Featured Section)
| File | Used In |
|------|---------|
| `cold-coffee-transparent.png` | Chef's Picks hero |
| `paneer-sandwich-transparent.png` | Chef's Picks |
| `veg-burger-transparent.png` | Chef's Picks |

---

## 9. Data Structures

### Menu Data (`MENU_DATA`)

```javascript
const MENU_DATA = [
  {
    category: "Beverages",
    icon: "☕",
    items: [
      { 
        id: 1, 
        name: "Classic Cold Coffee", 
        price: "80", 
        desc: "Creamy, chilled, and perfectly balanced with premium espresso.", 
        img: "/images/cold-coffee.png", 
        tag: "Bestseller", 
        category: "Beverages" 
      },
      { id: 2, name: "Hot Cappuccino", price: "60", desc: "Rich espresso with silky steamed milk foam and art.", img: "/images/cappuccino.png", category: "Beverages" },
      { id: 3, name: "Masala Tea", price: "30", desc: "Authentic Indian spiced tea with ginger and cardamom.", img: "/images/masala-tea.png", category: "Beverages" },
      { id: 4, name: "Fresh Lime Soda", price: "50", desc: "Sweet or salted, sparkling citrus refresher.", img: "/images/lime-soda.png", category: "Beverages" }
    ]
  },
  {
    category: "Snacks",
    icon: "🥪",
    items: [
      { id: 5, name: "Paneer Tikka Sandwich", price: "120", desc: "Spiced tandoori paneer with fresh garden veggies.", img: "/images/paneer-sandwich.png", tag: "Must Try", category: "Snacks" },
      { id: 6, name: "Crispy Veg Burger", price: "90", desc: "Our signature handmade patty with secret house sauce.", img: "/images/veg-burger.png", category: "Snacks" },
      { id: 7, name: "French Fries", price: "70", desc: "Golden, double-fried crispy potatoes with classic dip.", img: "/images/french-fries.png", category: "Snacks" },
      { id: 8, name: "Cheese Corn Nuggets", price: "100", desc: "Melty mozzarella and sweet corn golden bites.", img: "/images/cheese-nuggets.png", category: "Snacks" }
    ]
  },
  {
    category: "Mains",
    icon: "🍜",
    items: [
      { id: 9, name: "Veg Hakka Noodles", price: "140", desc: "Wok-tossed noodles with crunchy seasonal vegetables.", img: "/images/hakka-noodles.png", category: "Mains" },
      { id: 10, name: "Paneer Butter Masala", price: "180", desc: "Rich, creamy cashew and tomato-based curry with soft paneer.", img: "/images/paneer-butter-masala.png", category: "Mains" },
      { id: 11, name: "Mixed Veg Pulao", price: "130", desc: "Fragrant long-grain basmati rice with aromatic spices.", img: "/images/veg-pulao.png", category: "Mains" }
    ]
  }
];
```

### Reviews Data (`REVIEWS_ROW_1` and `REVIEWS_ROW_2`)

#### Row 1 (14 reviews)
```javascript
const REVIEWS_ROW_1 = [
  { name: "Neelasha Debnath", text: "Too good food taste ❤️‍🔥 definitely do visit 😍😍😍", rating: 5, avatar: "ND", source: "Google" },
  { name: "Dipankar Das", text: "The food was absolutely delicious, and the quantity of biryani was huge! We really enjoyed every bite. A fantastic experience!", rating: 5, avatar: "DD", source: "Google" },
  { name: "Rudra Official", text: "A perfect spot to unwind above the city. The rooftop ambience is stunning, especially in the evening, with cool breezes and beautiful views.", rating: 5, avatar: "RO", source: "Google" },
  { name: "Sajjad Hussain", text: "Great ambiance, warm vibes and amazing food. Must recommended!", rating: 5, avatar: "SH", source: "Google" },
  { name: "Sumanta Mitra", text: "Quality foods and great ambience to spend time with your family and your favourite ones 🫶🌹", rating: 5, avatar: "SM", source: "Google" },
  { name: "KOUSHIK DHIBAR", text: "Food Quality very good 👍 Owner and staff behaviour are good 😊👍", rating: 5, avatar: "KD", source: "Google" },
  { name: "Prashant Pathak", text: "Best place to spend some quality time with special one and food is also too good.", rating: 5, avatar: "PP", source: "Google" },
  { name: "YUNGLIT", text: "Best place for hanging out with homies in this city for real. Food vibes and the owner dada and didi they were really great person!", rating: 5, avatar: "YL", source: "Google" },
  { name: "Anik Burman", text: "The food is very good but the biryani is very tasty! You should come and try it. The place is also very beautiful and peaceful ☺️", rating: 5, avatar: "AB", source: "Google" },
  { name: "Sneha Samanta", text: "Food quality is very good and the behaviour as well as the service is also really good. 😊😊", rating: 5, avatar: "SS", source: "Google" },
  { name: "Raj Gupta", text: "Awesome food and awesome ambiance. The biggest positive point is it's too budget friendly. The owners host their guests very nicely ❤️😍", rating: 5, avatar: "RG", source: "Google" },
  { name: "Amon Mollah", text: "Great happening and chillzz place with moody ambience 😇", rating: 5, avatar: "AM", source: "Google" },
  { name: "Sayan Kr. Bhowmick", text: "Great start-up café. Amazing food, ambience and service. Fabulous place to hangout with friends and family. Must try!!", rating: 5, avatar: "SB", source: "Google" },
  { name: "Mr.Arindam Mitra", text: "Just tried the food, taste, quality ambience everything is good ❤️. Rooftop cafe at this price is really a blessings for Dear Asansolians!", rating: 5, avatar: "AM", source: "Google" },
];
```

#### Row 2 (13 reviews)
```javascript
const REVIEWS_ROW_2 = [
  { name: "Subrata Maity", text: "Truly amazing place for dining, get together and special moments like birthday party 🎈🥳🎉 Taste of food is really awesome, fresh and well hygienic.", rating: 5, avatar: "SM", source: "Google" },
  { name: "Moonmoon Ghosh", text: "Great food and great service with good ambience!", rating: 5, avatar: "MG", source: "Google" },
  { name: "Purnendu Pal", text: "Food quality, quantity and ambience is excellent. Taste was awesome and behaviour is so kind.", rating: 5, avatar: "PP", source: "Google" },
  { name: "Md Ghulam", text: "Very tasty food and friendly behaviour!", rating: 5, avatar: "MG", source: "Google" },
  { name: "Syed Nahin", text: "Very delicious food and ambiance!", rating: 5, avatar: "SN", source: "Google" },
  { name: "Konish Atib", text: "Have great Taste And Experience. Maintaining good hygiene. Also visit for Awesome Taste!", rating: 5, avatar: "KA", source: "Google" },
  { name: "Debabrato Maity", text: "Very good place with quality food!", rating: 5, avatar: "DM", source: "Google" },
  { name: "Arghya Banerjee", text: "Loved the food, but the real highlight was the chutney—unique in taste and a true flavor enhancer. Definitely worth trying ✨💫", rating: 5, avatar: "AB", source: "Google" },
  { name: "Abhilash Mukherjee", text: "Awesome place and wonderful taste of the food, Must recommended 💯💯", rating: 5, avatar: "AM", source: "Google" },
  { name: "Duniya ka Papa", text: "Very tasty food and hygienic. Also affordable!", rating: 5, avatar: "DP", source: "Google" },
  { name: "Yugankit Prasad", text: "Great food and good ambience!", rating: 5, avatar: "YP", source: "Google" },
  { name: "DEEP DEY", text: "This place and food is too good 🤩", rating: 5, avatar: "DD", source: "Google" },
  { name: "Dipayan Sarkar", text: "Found my new go-to spot! ✨ The food quality is 10/10. The Kathi Kabab was perfectly seasoned and the Chicken Biryani is a must-try—absolutely delicious!", rating: 5, avatar: "DS", source: "Google" },
];
```

---

## 10. Business Information

### Contact Details
| Field | Value |
|-------|-------|
| **Business Name** | Blessings Food Café |
| **Phone** | +91 94758 75536 |
| **WhatsApp** | `https://wa.me/919475875536` |
| **Location** | Asansol, West Bengal, India |
| **Full Address** | Islampur more, Purnashreepally lane, SB Gorai Rd, beside IMA house, Ismile, Asansol, West Bengal 713301 |
| **Operating Hours** | 12:00 PM - 10:00 PM (Mon-Sun) |

### Social Links
| Platform | URL |
|----------|-----|
| **WhatsApp** | `https://wa.me/919475875536` |
| **Instagram** | `https://www.instagram.com/blessingsfoodcafeasansol/` |
| **Facebook** | `https://www.facebook.com/people/Blessings-Food-Cafe-Asansol/61585279472477/` |

---

## 11. Third-Party Integrations

### Google Fonts
- Poppins (weights: 400, 700, 900)
- Inter (regular)
- Loaded via `next/font/google`

### Google Maps Embed
- Location: Asansol, West Bengal
- Coordinates: 23.6834541, 86.9314486

### WhatsApp Business
- Click-to-chat URL: `https://wa.me/919475875536`
- Used in: Navbar, Hero CTAs, Footer, FAB, Contact page

---

## Quick Start Recreation Guide

### 1. Initialize Project
```bash
npx -y create-next-app@latest blessings --use-npm
cd blessings
npm install tailwindcss@^4 @tailwindcss/postcss@^4 --save-dev
```

### 2. Configure PostCSS
Create `postcss.config.mjs`:
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 3. Add Global CSS
Copy the theme variables and animation definitions to `globals.css`

### 4. Create Layout
- Import Poppins and Inter fonts
- Add Navbar component
- Set metadata

### 5. Build Pages
Create the 4 pages following the section structures above

### 6. Add Images
Place all images in `/public/images/`

### 7. Deploy
```bash
npm run build
npm run start
# Or deploy to Vercel
```

---

## SEO Metadata

```javascript
export const metadata = {
  title: "Blessings Food Café | Best Snacks in Asansol",
  description: "Delicious snacks, warm coffee, and a cozy atmosphere in Asansol. Visit us or order via WhatsApp!",
};
```

### Theme Color
- Default: `#3E2723` (Deep Coffee Brown)
- Dynamically changes based on visible section

---

**Document Version:** 1.0  
**Created:** 2026-01-31  
**Based on:** Blessings Food Café website codebase
