"use client";

import { useState, useEffect, useRef } from "react";

// Section colors mapping for dynamic theme
const SECTION_COLORS = {
  'home': '#3E2723',      // Hero - dark brown
  'chefs-picks': '#F5F1E8', // Chef's Picks - cream
  'about': '#FFF8E1',     // About - light cream
  'reviews': '#F5F5F5',   // Reviews - light gray
  'footer': '#3E2723',    // Footer - dark brown
};

// Custom hook for dynamic theme color
function useThemeColor() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const sectionId = entry.target.getAttribute('data-section');
            const color = SECTION_COLORS[sectionId] || '#3E2723';

            // Update theme-color meta tag
            const metaTheme = document.querySelector('meta[name="theme-color"]');
            if (metaTheme) {
              metaTheme.setAttribute('content', color);
            }

            // Also update body background for overscroll
            document.documentElement.style.backgroundColor = color;
          }
        });
      },
      { threshold: [0.5] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}


// Google Reviews (5.0 and 4.8 star ratings from verified customers)
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

const STATS = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Menu Items" },
  { value: 3, suffix: "", label: "Years Serving" },
  { value: 5.0, suffix: "", label: "Google Rating", isDecimal: true },
];

// CountUp Component with Intersection Observer
function CountUp({ value, suffix = "", isDecimal = false }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[380px] bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-accent/5 mx-2 md:mx-3">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, j) => (
            <span key={j} className="text-yellow-400 text-xs md:text-sm">★</span>
          ))}
        </div>
        <span className="text-[10px] md:text-xs text-accent/40 font-medium">{review.source}</span>
      </div>
      <p className="text-accent/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">"{review.text}"</p>
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs md:text-sm">
          {review.avatar}
        </div>
        <span className="font-bold text-accent text-xs md:text-sm">{review.name}</span>
      </div>
    </div>
  );
}

export default function Home() {
  // Dynamic theme color based on visible section
  useThemeColor();

  return (
    <main className="min-h-screen bg-secondary">

      {/* ========== HERO SECTION ========== */}
      <section id="home" data-section="home" className="relative h-[100vh] flex items-center justify-center bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/cafe.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-[0.4em] text-sm mb-6">Welcome to</p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-glow-bg" />
            <h1 className="relative text-6xl md:text-9xl font-headings font-black text-secondary mb-8 leading-[0.9] tracking-tight">
              Blessings<br />Food Café
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-secondary/70 mb-12 max-w-2xl mx-auto font-light">
            Delicious snacks, warm coffee, and a cozy atmosphere in Asansol.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/menu"
              className="bg-primary text-secondary px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-95"
            >
              Explore Menu
            </a>
            <a
              href="https://wa.me/919475875536"
              className="border-2 border-secondary/30 text-secondary px-12 py-5 rounded-full font-bold text-lg hover:bg-secondary hover:text-accent transition-all active:scale-95"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-headings font-black text-secondary mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-secondary/70 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CHEF'S PICKS SECTION ========== */}
      <section data-section="chefs-picks" className="relative py-16 md:py-24 px-4 overflow-hidden" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Decorative Elements - Desktop only */}
        <div className="hidden md:block absolute top-20 left-0 w-48 h-48 opacity-60 -translate-x-1/4">
          <img src="/images/leaves.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="hidden md:block absolute top-1/4 right-0 w-32 h-32 opacity-50 translate-x-1/4">
          <img src="/images/orange-slice.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="hidden md:block absolute bottom-40 right-0 w-56 h-56 opacity-50 translate-x-1/3">
          <img src="/images/orange-slice.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ===== HERO: Section Header ===== */}
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm mb-3 md:mb-4 block">Chef's Picks</span>
            <h2 className="text-3xl md:text-6xl font-headings font-bold text-accent mb-4 md:mb-6">
              Our Most Loved
            </h2>
            <p className="text-accent/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Discover the dishes that keep our customers coming back for more. Handcrafted with love, made fresh daily.
            </p>
          </div>

          {/* Main Popular Item - Cold Coffee - Image Left, Content Right */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-16 items-center mb-10 md:mb-32">
            {/* Image - Left */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-[50px] md:blur-[80px] scale-90 opacity-40"></div>
              <img
                src="/images/cold-coffee-transparent.png"
                alt="Classic Cold Coffee"
                className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content - Right */}
            <div className="text-left">
              <span className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] text-[9px] sm:text-xs md:text-xs mb-1.5 md:mb-3 block">★ Most Popular ★</span>
              <h3 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-headings font-bold text-accent mb-1.5 md:mb-4">
                Classic Cold Coffee
              </h3>
              <p className="text-accent/60 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-6 line-clamp-3 md:line-clamp-none">
                Our signature cold coffee is a symphony of rich espresso, creamy milk, and just the right touch of sweetness. Blended to perfection and served ice-cold.
              </p>
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <span className="text-lg sm:text-2xl md:text-3xl font-black text-primary">₹80</span>
                <a href="tel:+919475875536" className="bg-accent text-secondary px-3 sm:px-5 md:px-8 py-2 sm:py-2.5 md:py-4 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm md:text-base hover:bg-accent/90 transition-all shadow-lg active:scale-95">
                  Order Now
                </a>
              </div>
            </div>
          </div>

          {/* ===== Featured Items Below - Alternating Layout ===== */}
          <div className="space-y-8 md:space-y-24">

            {/* Item 1: Paneer Tikka Sandwich - Image LEFT on mobile, Content LEFT on desktop */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-16 items-center">
              {/* Image - Left on mobile, Right on desktop */}
              <div className="relative flex justify-center order-1 lg:order-2">
                <div className="absolute inset-0 bg-primary/40 rounded-full blur-[50px] md:blur-[80px] scale-90 opacity-40"></div>
                <img
                  src="/images/paneer-sandwich-transparent.png"
                  alt="Paneer Tikka Sandwich"
                  className="relative w-full max-w-[140px] sm:max-w-[180px] md:max-w-[280px] lg:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content - Right on mobile, Left on desktop */}
              <div className="text-left order-2 lg:order-1">
                <span className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] text-[9px] sm:text-xs md:text-xs mb-1.5 md:mb-4 block">Bestseller</span>
                <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-headings font-bold text-accent mb-1.5 md:mb-4 leading-tight">
                  Paneer Tikka Sandwich
                </h3>
                <p className="text-accent/60 text-xs sm:text-sm md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
                  A culinary masterpiece with tandoori-spiced paneer, fresh crunchy vegetables, and zesty mint chutney. Layered between toasted bread for the ultimate crunch.
                </p>
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                  <span className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-black text-primary">₹120</span>
                  <a href="tel:+919475875536" className="bg-accent text-secondary px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm md:text-sm hover:bg-accent/90 transition-all shadow-lg active:scale-95">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2: Crispy Veg Burger - Image LEFT, Content RIGHT */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-16 items-center">
              {/* Image - Left */}
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-primary/40 rounded-full blur-[50px] md:blur-[80px] scale-90 opacity-40"></div>
                <img
                  src="/images/veg-burger-transparent.png"
                  alt="Crispy Veg Burger"
                  className="relative w-full max-w-[140px] sm:max-w-[180px] md:max-w-[280px] lg:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content - Right */}
              <div className="text-left">
                <span className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] text-[9px] sm:text-xs md:text-xs mb-1.5 md:mb-4 block">Customer Favorite</span>
                <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-headings font-bold text-accent mb-1.5 md:mb-4 leading-tight">
                  Crispy Veg Burger
                </h3>
                <p className="text-accent/60 text-xs sm:text-sm md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
                  Our signature veg burger with a labor of love patty—potatoes, peas, corn, and secret spices—coated in golden breadcrumbs and fried to crispy perfection.
                </p>
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                  <span className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-black text-primary">₹90</span>
                  <a href="tel:+919475875536" className="bg-accent text-secondary px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm md:text-sm hover:bg-accent/90 transition-all shadow-lg active:scale-95">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* CTA to View Full Menu */}
          <div className="text-center mt-12 md:mt-20">
            <a href="/menu" className="inline-block bg-primary text-secondary px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 active:scale-95">
              View Full Menu
            </a>
          </div>

        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" data-section="about" className="py-16 md:py-32 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm mb-3 md:mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-headings font-bold text-accent mb-6 md:mb-12 leading-tight">
              Why Choose<br /><span className="text-primary">Blessings?</span>
            </h2>
            <p className="text-base md:text-xl text-accent/70 mb-6 md:mb-10 leading-relaxed">
              Founded in the heart of Asansol, Blessings Food Café started with a simple mission: to serve delicious, high-quality snacks in a space that feels like home.
            </p>
            <ul className="space-y-4 md:space-y-6">
              {[
                { num: "01", title: "Fresh Daily", desc: "Freshly prepared snacks every day" },
                { num: "02", title: "Hygienic", desc: "Clean environment and kitchen" },
                { num: "03", title: "Affordable", desc: "Quality food at fair prices" },
                { num: "04", title: "Quick Service", desc: "Friendly staff, fast delivery" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-5 group">
                  <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm md:text-base group-hover:bg-primary group-hover:text-secondary transition-all">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-accent mb-0.5 md:mb-1">{item.title}</h4>
                    <p className="text-accent/60 text-sm md:text-base">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[300px] md:h-[450px] lg:h-[550px] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl order-first md:order-last">
            <img
              src="/images/cafe-interior.png"
              alt="Blessings Food Café Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========== REVIEWS MARQUEE SECTION (Above Contact) ========== */}
      <section data-section="reviews" className="py-12 md:py-16 bg-accent/5 overflow-hidden">
        <div className="text-center mb-8 px-4">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-2 block">What Our Happy Customers Say</span>
          <h2 className="text-3xl md:text-5xl font-headings font-bold text-accent">
            Customer Reviews
          </h2>
        </div>

        {/* Marquee Row 1 - Left to Right */}
        <div className="relative mb-4 w-full overflow-hidden">
          <div className="flex animate-marquee-left" style={{ width: 'max-content', willChange: 'transform' }}>
            {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1, ...REVIEWS_ROW_1, ...REVIEWS_ROW_1, ...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((review, i) => (
              <ReviewCard key={`row1-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-right" style={{ width: 'max-content', willChange: 'transform' }}>
            {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2, ...REVIEWS_ROW_2, ...REVIEWS_ROW_2, ...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((review, i) => (
              <ReviewCard key={`row2-${i}`} review={review} />
            ))}
          </div>
        </div>
      </section>



      {/* ========== FOOTER ========== */}
      <footer data-section="footer" className="relative bg-accent text-secondary overflow-hidden">
        {/* Decorative top gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">

            {/* Brand Column */}
            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <h3 className="text-xl md:text-3xl font-headings font-bold mb-2 md:mb-4">
                Blessings <span className="text-primary">Food Café</span>
              </h3>
              <p className="text-secondary/50 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Your favorite spot in Asansol for delicious quick bites and great conversations.
              </p>
            </div>

            {/* Quick Links - Hidden on mobile */}
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 md:mb-5">Quick Links</h4>
              <div className="flex flex-col space-y-2 md:space-y-3">
                <a href="/" className="text-secondary/60 hover:text-primary transition-colors text-xs md:text-sm">Home</a>
                <a href="/menu" className="text-secondary/60 hover:text-primary transition-colors text-xs md:text-sm">Our Menu</a>
                <a href="/blogs" className="text-secondary/60 hover:text-primary transition-colors text-xs md:text-sm">Blogs</a>
                <a href="/about" className="text-secondary/60 hover:text-primary transition-colors text-xs md:text-sm">About Us</a>
                <a href="/contact" className="text-secondary/60 hover:text-primary transition-colors text-xs md:text-sm">Visit Us</a>
              </div>
            </div>

            {/* Socials Column */}
            <div className="text-center md:text-left">
              <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-5">Socials</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://wa.me/919475875536" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-primary/20 flex items-center justify-center text-secondary/60 hover:text-primary transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.53.909 3.039 1.389 4.625 1.39 5.25.001 9.522-4.273 9.523-9.524 0-2.544-.992-4.936-2.792-6.738-1.8-1.802-4.194-2.794-6.738-2.794-5.251 0-9.524 4.272-9.524 9.525 0 1.683.463 3.322 1.34 4.756l-.995 3.638 3.732-.979zm11.167-5.39c-.27-.135-1.598-.788-1.846-.877-.248-.09-.43-.135-.61.135-.18.27-.698.877-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.34-.803-.715-1.345-1.598-1.502-1.868-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.61-1.463-.833-2.003-.217-.526-.435-.453-.61-.462-.158-.007-.338-.008-.518-.008-.18 0-.472.067-.72.337-.248.27-.945.923-.945 2.25s.968 2.61 1.103 2.79c.135.18 1.905 2.908 4.613 4.082.645.278 1.148.445 1.54.57.648.205 1.238.176 1.703.107.52-.077 1.598-.653 1.823-1.283.225-.63.225-1.17.157-1.283-.068-.113-.248-.18-.518-.315z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/blessingsfoodcafeasansol/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-primary/20 flex items-center justify-center text-secondary/60 hover:text-primary transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/people/Blessings-Food-Cafe-Asansol/61585279472477/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-primary/20 flex items-center justify-center text-secondary/60 hover:text-primary transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <h4 className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-5">Get In Touch</h4>
              <div className="flex flex-col space-y-2 md:space-y-3 text-xs md:text-sm">
                <a href="tel:+919475875536" className="text-secondary/60 hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 94758 75536</span>
                </a>
                <p className="text-secondary/60 flex items-start justify-center md:justify-start gap-2 text-center md:text-left">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Islampur more, Purnashreepally lane, SB Gorai Rd, beside IMA house, Ismile, Asansol, West Bengal 713301</span>
                </p>
                <p className="text-secondary/60 flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Open 12PM - 10PM</span>
                </p>
              </div>
            </div>
          </div>


          {/* Bottom Bar */}
          <div className="border-t border-secondary/10 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-secondary/30 text-[10px] md:text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} Blessings Food Café
            </p>
            <p className="text-secondary/30 text-[10px] md:text-xs">
              Made with ☕ in Asansol
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB - Premium Style */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <WhatsAppButton />
      </div>
    </main>
  );
}

function WhatsAppButton() {
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPulsing(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/919475875536"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 md:hover:pr-6"
    >
      {/* Pulsing Effect - Only for first 5 seconds */}
      {isPulsing && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      )}

      {/* Icon */}
      <span className="relative z-10 flex items-center gap-3">
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.53.909 3.039 1.389 4.625 1.39 5.25.001 9.522-4.273 9.523-9.524 0-2.544-.992-4.936-2.792-6.738-1.8-1.802-4.194-2.794-6.738-2.794-5.251 0-9.524 4.272-9.524 9.525 0 1.683.463 3.322 1.34 4.756l-.995 3.638 3.732-.979zm11.167-5.39c-.27-.135-1.598-.788-1.846-.877-.248-.09-.43-.135-.61.135-.18.27-.698.877-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.34-.803-.715-1.345-1.598-1.502-1.868-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.61-1.463-.833-2.003-.217-.526-.435-.453-.61-.462-.158-.007-.338-.008-.518-.008-.18 0-.472.067-.72.337-.248.27-.945.923-.945 2.25s.968 2.61 1.103 2.79c.135.18 1.905 2.908 4.613 4.082.645.278 1.148.445 1.54.57.648.205 1.238.176 1.703.107.52-.077 1.598-.653 1.823-1.283.225-.63.225-1.17.157-1.283-.068-.113-.248-.18-.518-.315z" />
        </svg>

        {/* Label (Hidden by default, shown on hover/group-hover) */}
        <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-sm">
          Chat with us
        </span>
      </span>
    </a>
  );
}
