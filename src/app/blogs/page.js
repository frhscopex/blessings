export default function Blogs() {
    return (
        <main className="min-h-screen bg-secondary flex items-center justify-center px-4 pt-20 md:pt-0">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm mb-4 md:mb-6 block animate-pulse">Coming Soon</span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-headings font-bold text-accent mb-4 md:mb-8 leading-tight">
                    Our Blog is<br /><span className="text-primary">Cooking...</span>
                </h1>
                <p className="text-base md:text-xl text-accent/60 mb-8 md:mb-12 font-light leading-relaxed px-2">
                    We're preparing some delicious stories, recipes, and updates for you. Stay tuned for a taste of what's happening at Blessings Food Café!
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/"
                        className="bg-primary text-secondary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 active:scale-95"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
