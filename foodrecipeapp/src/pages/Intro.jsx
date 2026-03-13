import { Link } from "react-router-dom";

const features = [
  {
    icon: "🔍",
    title: "Search Any Recipe",
    desc: "Discover thousands of recipes from around the world by ingredient or dish name.",
  },
  {
    icon: "🥘",
    title: "Rich Recipe Details",
    desc: "Get full ingredient lists, cook times, servings, and a direct link to cooking instructions.",
  },
  {
    icon: "♥",
    title: "Save Your Favorites",
    desc: "Build your personal cookbook by saving the recipes you love with one tap.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-amber-50 overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* Decorative blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-orange-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] bg-amber-300/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <span className="relative z-10 inline-block mb-6 px-4 py-1.5 bg-orange-100 border border-orange-200 text-orange-700 text-[11px] font-black uppercase tracking-[0.25em] rounded-full shadow-sm">
          🥘 Your Personal Recipe Collection
        </span>

        {/* Headline */}
        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-amber-950 tracking-tighter leading-[1.05] max-w-4xl">
          Cook with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic text-orange-600">Passion</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/70 rounded-full -z-0" />
          </span>
          ,<br />
          Eat with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic text-amber-700">Joy</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/70 rounded-full -z-0" />
          </span>
          .
        </h1>

        {/* Subheading */}
        <p className="relative z-10 mt-8 text-amber-800/70 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
          Discover thousands of recipes, save your all-time favorites, and bring
          restaurant-quality meals to your kitchen — every single day.
        </p>

        {/* CTAs */}
        <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/home"
            className="px-10 py-4 bg-amber-900 text-amber-50 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-amber-900/25 hover:bg-orange-700 active:scale-95 transition-all"
          >
            Get Started →
          </Link>
          <Link
            to="/favorites"
            className="px-10 py-4 border-2 border-amber-300 text-amber-800 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-orange-400 hover:text-orange-700 active:scale-95 transition-all"
          >
            My Favorites ♥
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 mt-16 flex flex-col items-center gap-2 text-amber-400 animate-bounce">
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────────── */}
      <section className="bg-orange-600 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { num: "1,000+", label: "Recipes" },
            { num: "100%", label: "Free to Use" },
            { num: "∞", label: "Favorites" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-5xl font-black text-white">{s.num}</p>
              <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-3">
              Everything you need
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-amber-950 tracking-tighter">
              Why You'll{" "}
              <span className="italic text-amber-700">Love</span> It
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-amber-200" />
              <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <div className="h-px w-16 bg-amber-200" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 bg-white/50 backdrop-blur-sm border border-amber-200/60 rounded-3xl shadow-lg shadow-amber-900/5 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10 transition-all duration-300"
              >
                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-black text-amber-950 tracking-tight mb-3">{f.title}</h3>
                <p className="text-amber-800/65 font-medium leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-amber-900 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl shadow-amber-900/30 relative overflow-hidden">
          {/* Decorative blobs inside banner */}
          <div className="absolute top-[-40px] right-[-40px] w-48 h-48 bg-orange-600/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 bg-amber-700/30 rounded-full blur-2xl pointer-events-none" />

          <p className="relative z-10 text-orange-300 font-black text-xs uppercase tracking-[0.3em] mb-4">
            Ready to cook?
          </p>
          <h2 className="relative z-10 text-4xl md:text-5xl font-black text-amber-50 tracking-tighter leading-tight mb-6">
            Your next favorite meal<br />
            <span className="italic text-orange-300">is one search away.</span>
          </h2>
          <Link
            to="/home"
            className="relative z-10 inline-block px-12 py-4 bg-amber-50 text-amber-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-100 active:scale-95 transition-all shadow-lg"
          >
            Start Cooking Now →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="border-t border-amber-200 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🥘</span>
          <span className="text-xl font-black text-amber-900 tracking-tighter">
            Food<span className="text-orange-600">Recipe</span>
          </span>
        </div>
        <p className="text-amber-700/50 text-xs font-medium">
          Powered by Forkify API · Built with React & Tailwind
        </p>
      </footer>

    </div>
  );
};

export default Landing;