"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

// Navigation Hierarchy mapped to multi-page structure
const navItems = [
  {
    title: "Home",
    href: "/",
    children: [
      { name: "Overview", href: "/" },
      { name: "Industries", href: "/#industries" },
      { name: "Our Process", href: "/#process" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about#our-story" },
      { name: "Our Journey", href: "/about#journey" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Core Values", href: "/about#values" },
      { name: "Our Team", href: "/about#team" },
      { name: "Roadmap & KPIs", href: "/about#roadmap" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    children: [
      { name: "All Services Index", href: "/services#services-index" },
      { name: "Product Concept", href: "/services#concept" },
      { name: "3D CAD Modeling", href: "/services#cad" },
      { name: "2D Drawings & GD&T", href: "/services#drawings" },
      { name: "Sheet Metal & Plastics", href: "/services#sheetmetal" },
      { name: "Machine Design", href: "/services#machine" },
      { name: "FEA / CAE Analysis", href: "/services#fea" },
      { name: "DFM & DFA", href: "/services#dfm" },
      { name: "Engagement Models", href: "/services#engagement" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    children: [
      { name: "Get In Touch", href: "/contact#details" },
      { name: "Project Enquiry", href: "/contact#enquiry" },
      { name: "Find Our Office (Akurdi)", href: "/contact#map" },
      { name: "Careers & Join Us", href: "/contact#careers" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileMenu = (title: string) => {
    setMobileExpanded(mobileExpanded === title ? null : title);
  };

  return (
    <>
      {/* Floating Centered Container */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        {/* The Glassy Pill */}
        <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          
          {/* Brand Logo */}
          <Link href="/" className="font-bold text-lg tracking-tight z-10">
            IGLOBLE<span className="text-brand-primary">.</span>
          </Link>

          {/* Desktop Center Links (Hierarchy Dropdowns) */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-foreground/80">
            {navItems.map((item) => (
              <div key={item.title} className="relative group py-2">
                <Link 
                  href={item.href}
                  className="flex items-center gap-1 hover:text-brand-primary transition-colors"
                >
                  {item.title}
                  <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                </Link>

                {/* Desktop Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-2 border border-black/5 dark:border-white/10 shadow-xl overflow-hidden">
                    {item.children.map((child) => (
                      <Link 
                        key={child.name} 
                        href={child.href}
                        className="block px-4 py-2.5 text-sm rounded-xl hover:bg-black/5 dark:hover:bg-white/5 hover:text-brand-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block z-10">
            <Link 
              href="/contact#enquiry" 
              className="group flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10"
            >
              Let's Talk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-foreground p-1 z-10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 p-6 rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl lg:hidden max-h-[75vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col border-b border-black/5 dark:border-white/5 last:border-0 pb-2">
                  <div className="flex justify-between items-center py-3">
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-semibold text-foreground hover:text-brand-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                    <button 
                      onClick={() => toggleMobileMenu(item.title)}
                      className="p-1 text-foreground/70"
                    >
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${mobileExpanded === item.title ? "rotate-180 text-brand-primary" : "opacity-50"}`} 
                      />
                    </button>
                  </div>
                  
                  {/* Mobile Accordion Children */}
                  <AnimatePresence>
                    {mobileExpanded === item.title && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-1 pl-4 pb-3"
                      >
                        {item.children.map((child) => (
                          <Link 
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="py-2 text-foreground/70 hover:text-brand-primary font-medium text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link 
                href="/contact#enquiry" 
                onClick={() => setIsOpen(false)} 
                className="mt-6 bg-brand-primary text-white text-center py-4 rounded-full font-bold shadow-lg shadow-brand-primary/20"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}