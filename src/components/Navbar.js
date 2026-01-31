"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isHomePage = pathname === "/";
    const isMenuPage = pathname === "/menu";
    const hasDarkHeader = isHomePage || isMenuPage;

    // Show scrolled style (dark text, light background) if:
    // 1. User has scrolled
    // 2. We're on a page that doesn't start with a dark header (like /blogs, /about, /contact)
    const shouldShowScrolledStyle = scrolled || !hasDarkHeader;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Blogs", href: "/blogs" },
        { name: "About", href: "/#about" },
        { name: "Visit Us", href: "/contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowScrolledStyle
                    ? "bg-secondary/95 backdrop-blur-lg shadow-md py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center gap-1">
                            <span className={`text-2xl font-headings font-black tracking-tight transition-colors ${shouldShowScrolledStyle ? "text-primary" : "text-secondary"
                                }`}>
                                Blessings
                            </span>
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-sm uppercase tracking-widest font-bold transition-colors hover:text-primary ${shouldShowScrolledStyle ? "text-accent/70" : "text-secondary/70"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+919475875536"
                                className="bg-primary text-secondary px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                            >
                                Order Now
                            </a>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${shouldShowScrolledStyle ? "text-accent" : "text-secondary"}`}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-72 bg-secondary z-50 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-20 px-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-5 right-5 p-2 text-accent"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Nav Links */}
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-bold py-3 px-4 rounded-xl transition-colors ${pathname === link.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-accent hover:bg-accent/5"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a
                            href="tel:+919475875536"
                            className="flex items-center justify-center gap-2 bg-primary text-secondary w-full py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all active:scale-95 shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Order Now
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-auto pb-8 text-center text-accent/50 text-sm">
                        <p className="mb-2">📍 Asansol, West Bengal</p>
                        <p>📞 +91 94758 75536</p>
                    </div>
                </div>
            </div>
        </>
    );
}

