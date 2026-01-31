export default function Contact() {
    return (
        <main className="min-h-screen bg-secondary">

            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-7xl font-headings font-bold text-accent">
                        Visit Us
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map */}
                    <div className="h-[450px] bg-accent/5 rounded-3xl overflow-hidden shadow-lg border border-accent/10 order-2 lg:order-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58514.3941740924!2d86.9314486!3d23.6834541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022577%3A0x210ca9278711e646!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Contact Card */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-accent/5">
                            <h2 className="text-3xl font-headings font-bold text-accent mb-10">Location & Hours</h2>

                            <div className="space-y-8 mb-12">
                                {[
                                    { icon: "📍", title: "Address", desc: "Islampur more, Purnashreepally lane, SB Gorai Rd, beside IMA house, Ismile, Asansol, West Bengal 713301" },
                                    { icon: "⏰", title: "Hours", desc: "Monday - Sunday: 12:00 PM - 10:00 PM" },
                                    { icon: "📞", title: "Phone", desc: "+91 94758 75536" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-accent mb-1">{item.title}</h4>
                                            <p className="text-accent/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href="https://wa.me/919475875536"
                                    className="bg-primary text-secondary px-6 py-4 rounded-2xl font-bold text-center hover:bg-primary/90 transition-all shadow-lg active:scale-95"
                                >
                                    Order on WhatsApp
                                </a>
                                <a
                                    href="tel:+919475875536"
                                    className="bg-accent text-secondary px-6 py-4 rounded-2xl font-bold text-center hover:bg-accent/90 transition-all shadow-lg active:scale-95"
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
