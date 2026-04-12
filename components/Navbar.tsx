"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Helper for active link
  const getLinkClass = (path: string, isExact = false) => {
    const isActive = isExact
      ? pathname === path
      : pathname.startsWith(path);

    return isActive
      ? "text-[#610000] font-bold border-b-2 border-[#610000] pb-1"
      : "text-stone-600 hover:text-[#610000] transition-colors";
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 w-full z-[60] border-b border-[#e3beb8]/30 shadow-sm"
        style={{
          backgroundColor: "rgba(253, 247, 255, 0.95)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center px-6 py-4 max-w-screen-2xl mx-auto justify-between">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-headline font-bold tracking-tight text-[#610000]"
          >
            Swasth Thik
          </Link>

          {/* DESKTOP MENU */}
          <div className="md:flex gap-8 items-center hidden font-headline text-sm tracking-widest uppercase">
            <Link href="/" className={getLinkClass("/", true)}>
              Home
            </Link>
            <Link href="/products" className={getLinkClass("/products")}>
              Categories
            </Link>
            <Link href="/about" className={getLinkClass("/about", true)}>
              Story
            </Link>
            <Link href="/#reviews" className={getLinkClass("/", true)}>
              Reviews
            </Link>
            <Link href="/contact" className={getLinkClass("/contact", true)}>
              Contact
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[70] p-2 text-[#610000]"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[50] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* PREMIUM RIGHT DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-[60] 
  bg-[#fdf7f5] shadow-2xl 
  transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-xl font-headline font-bold tracking-tight text-[#610000]">
              Swasth Thik
            </h2>
            <p className="text-[10px] tracking-widest text-stone-500 uppercase mt-1">
              Homemade Collective
            </p>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-2xl text-[#7a5c58]">
              close
            </span>
          </button>
        </div>

        {/* MAIN MENU */}
        <div className="flex flex-col gap-3 px-4 mt-4 font-headline uppercase tracking-widest text-sm">

          {/* ACTIVE ITEM */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === "/"
              ? "bg-[#e8d6d3] text-[#610000] font-bold"
              : "text-stone-600 hover:text-[#610000]"
              }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              home
            </span>
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname.startsWith("/products")
              ? "bg-[#e8d6d3] text-[#610000] font-bold"
              : "text-stone-600 hover:text-[#610000]"
              }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              category
            </span>
            Categories
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === "/about"
              ? "bg-[#e8d6d3] text-[#610000] font-bold"
              : "text-stone-600 hover:text-[#610000]"
              }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              menu_book
            </span>
            Story
          </Link>

          <Link
            href="/#reviews"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 hover:text-[#610000] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              star
            </span>
            Reviews
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === "/contact"
              ? "bg-[#e8d6d3] text-[#610000] font-bold"
              : "text-stone-600 hover:text-[#610000]"
              }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              call
            </span>
            Contact
          </Link>
        </div>



        {/* FOOTER */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex gap-5 text-[#610000] mb-4">
            <span className="material-symbols-outlined">share</span>
            <span className="material-symbols-outlined">language</span>
            <span className="material-symbols-outlined">mail</span>
          </div>

          <p className="text-xs text-[#a78a86]">
            © 2026 Swasth Thik
          </p>
        </div>
      </div>
    </>
  );
}