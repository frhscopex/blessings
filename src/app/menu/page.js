"use client";

import { useState, useMemo } from "react";

const MENU_DATA = [
    {
        category: "Beverages",
        icon: "☕",
        items: [
            { id: 1, name: "Classic Cold Coffee", price: "80", desc: "Creamy, chilled, and perfectly balanced with premium espresso.", img: "/images/cold-coffee.png", tag: "Bestseller", category: "Beverages" },
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

export default function Menu() {
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", ...MENU_DATA.map(c => c.category)];

    const filteredItems = useMemo(() => {
        if (activeFilter === "All") {
            return MENU_DATA.flatMap(c => c.items);
        }
        return MENU_DATA.find(c => c.category === activeFilter)?.items || [];
    }, [activeFilter]);

    return (
        <main className="min-h-screen bg-secondary">

            {/* Premium Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-4 bg-accent overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-bg" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-bg [animation-delay:2s]" />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.5em] text-sm mb-6 block animate-slide-up">Taste the Best</span>
                    <h1 className="text-6xl md:text-9xl font-headings font-black text-secondary mb-8 leading-tight animate-slide-up [animation-delay:100ms]">
                        Our <span className="text-primary">Menu</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary/60 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up [animation-delay:200ms]">
                        Explore our handcrafted selection of artisanal snacks and beverages, prepared fresh daily for your delight.
                    </p>
                </div>
            </section>

            {/* Dynamic Filter Navigation */}
            <div className="sticky top-16 md:top-20 z-40 py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 flex justify-center">
                    <div className="bg-white/80 backdrop-blur-2xl border border-white/50 p-1.5 md:p-2 rounded-full shadow-2xl flex gap-1 md:gap-2 overflow-x-auto no-scrollbar max-w-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`flex items-center gap-2 text-xs md:text-sm font-bold transition-all duration-300 px-5 md:px-10 py-2.5 md:py-4 rounded-full whitespace-nowrap ${activeFilter === cat
                                    ? "bg-primary text-secondary shadow-xl shadow-primary/20 scale-105"
                                    : "text-accent/60 hover:text-primary hover:bg-primary/5"
                                    }`}
                            >
                                {cat === "All" ? "✨" : MENU_DATA.find(c => c.category === cat)?.icon}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Refined Food Listing View */}
            <div className="max-w-7xl mx-auto px-4 pb-32 min-h-[600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {filteredItems.map((item, i) => (
                        <div
                            key={item.id}
                            className="group flex items-center gap-6 md:gap-8 p-4 md:p-6 rounded-[2rem] bg-white/40 hover:bg-white border border-accent/5 hover:border-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 animate-slide-up"
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            {/* Visuals - Circular/Organic */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-secondary border border-accent/5 group-hover:rotate-6 transition-transform duration-500">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                {item.tag && (
                                    <span className="absolute -top-2 -right-2 bg-primary text-secondary text-[8px] md:text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">
                                        {item.tag}
                                    </span>
                                )}
                            </div>

                            {/* Content - Streamlined Horizontal */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline justify-between gap-4 mb-2">
                                    <h3 className="text-xl md:text-2xl font-headings font-bold text-accent group-hover:text-primary transition-colors truncate">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-primary font-bold">₹</span>
                                        <span className="text-xl md:text-2xl font-black text-primary">{item.price}</span>
                                    </div>
                                </div>

                                <p className="text-accent/40 text-sm md:text-base line-clamp-2 md:line-clamp-1 mb-4">
                                    {item.desc}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 bg-primary/5 px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-accent/40 text-xl">No items found in this category.</p>
                    </div>
                )}
            </div>

            {/* Custom CTA Section */}
            <section className="bg-primary py-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-headings font-bold text-secondary mb-8 leading-tight">
                        Craving something <br /> special?
                    </h2>
                    <p className="text-xl text-secondary/80 mb-12 max-w-xl mx-auto">
                        Our chefs are always experimenting! Text us for today's off-menu specials.
                    </p>
                    <a
                        href="https://wa.me/919475875536"
                        className="inline-flex items-center gap-4 bg-accent text-secondary px-12 py-5 rounded-full font-bold text-xl hover:bg-secondary hover:text-accent transition-all shadow-2xl active:scale-95 group"
                    >
                        <span>Chat via WhatsApp</span>
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    );
}
