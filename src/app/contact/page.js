export default function Contact() {
    return (
        <main className="min-h-screen bg-secondary">

            <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-20">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm mb-3 md:mb-4 block">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-headings font-bold text-accent">
                        Visit Us
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Map */}
                    <div className="h-[300px] md:h-[400px] lg:h-[450px] bg-accent/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-accent/10 order-2 lg:order-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.9824135930317!2d86.9695637!3d23.6765869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f9fab605091%3A0x52ea72f0e80e637c!2sBlessings%20food%20cafe%20Asansol!5e0!3m2!1sen!2sin!4v1769874519172!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            suppressHydrationWarning
                        />
                    </div>

                    {/* Contact Card */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                        <div className="bg-white p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl shadow-sm border border-accent/5">
                            <h2 className="text-2xl md:text-3xl font-headings font-bold text-accent mb-6 md:mb-10">Location & Hours</h2>

                            <div className="space-y-5 md:space-y-8 mb-8 md:mb-12">
                                {[
                                    { icon: "📍", title: "Address", desc: "Islampur more, Purnashreepally lane, SB Gorai Rd, beside IMA house, Ismile, Asansol, West Bengal 713301" },
                                    { icon: "⏰", title: "Hours", desc: "Monday - Sunday: 12:00 PM - 10:00 PM" },
                                    { icon: "📞", title: "Phone", desc: "+91 94758 75536" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 md:gap-5">
                                        <span className="text-xl md:text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-accent mb-0.5 md:mb-1 text-sm md:text-base">{item.title}</h4>
                                            <p className="text-accent/60 text-sm md:text-base">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                <a
                                    href="https://wa.me/919475875536"
                                    className="bg-primary text-secondary px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base text-center hover:bg-primary/90 transition-all shadow-lg active:scale-95"
                                >
                                    Order on WhatsApp
                                </a>
                                <a
                                    href="tel:+919475875536"
                                    className="bg-accent text-secondary px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base text-center hover:bg-accent/90 transition-all shadow-lg active:scale-95"
                                >
                                    Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
