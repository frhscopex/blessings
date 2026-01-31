export default function Blogs() {
    return (
        <main className="min-h-screen bg-secondary flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm mb-6 block animate-pulse">Coming Soon</span>
                <h1 className="text-5xl md:text-7xl font-headings font-bold text-accent mb-8 leading-tight">
                    Our Blog is<br /><span className="text-primary">Cooking...</span>
                </h1>
                <p className="text-xl text-accent/60 mb-12 font-light leading-relaxed">
                    We're preparing some delicious stories, recipes, and updates for you. Stay tuned for a taste of what's happening at Blessings Food Café!
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/"
                        className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 active:scale-95"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
