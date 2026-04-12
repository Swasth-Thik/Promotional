import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-[#fdf7ff] dark:bg-stone-950 tonal-shift bg-stone-100/50 dark:bg-stone-900/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-serif font-black text-[#610000] dark:text-[#ffb4a8] italic">Swasth Thik</div>
          <p className="text-stone-500 dark:text-stone-400 max-w-xs font-sans text-sm tracking-wide">
            Bringing the essence of Indian tradition to modern kitchens. Handcrafted in Uttarakhand with locally sourced organic ingredients.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">camera_alt</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="font-bold text-[#610000] dark:text-[#ffb4ab] text-sm uppercase tracking-widest">
              Company
            </h5>
            <nav className="flex flex-col gap-2">
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="#">
                Privacy Policy
              </Link>
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="#">
                Terms of Service
              </Link>
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="#">
                Shipping Info
              </Link>
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="#">
                Wholesale
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-[#610000] dark:text-[#ffb4ab] text-sm uppercase tracking-widest">
              Explore
            </h5>
            <nav className="flex flex-col gap-2">
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="/products">
                All Pickles
              </Link>
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="/products">
                Ghee Guide
              </Link>
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="/products">
                Gift Sets
              </Link>
              <Link className="text-stone-500 dark:text-stone-400 hover:text-[#610000] underline decoration-[#610000]/30 underline-offset-4 font-sans text-sm tracking-wide" href="/about">
                Recipe Blog
              </Link>
            </nav>
          </div>
        </div>
        <div className="bg-surface-container p-8 rounded-[2rem] space-y-4">
          <h5 className="font-bold text-[#610000] text-sm uppercase tracking-widest">
            Newsletter
          </h5>
          <p className="text-xs text-on-surface-variant">
            Get a pinch of tradition in your inbox. No spam, just pure goodness.
          </p>
          <div className="flex gap-2">
            <input className="w-full bg-white border-none rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-primary" placeholder="Email address" type="email" />
            <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pb-12 text-center md:text-left">
        <p className="text-stone-500 dark:text-stone-400 font-sans text-xs opacity-80">
          © 2024 Swasth Thik. Preserving Ancestral Flavors.
        </p>
      </div>
    </footer>
  );
}
