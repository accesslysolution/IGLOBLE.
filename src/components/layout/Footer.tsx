import Link from "next/link";
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black pt-24 pb-10 border-t border-black/5 dark:border-white/10 mt-20 overflow-hidden">
      
      {/* Subtle Premium Glow on the top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: CTA (Call to Action) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black/5 dark:border-white/10 pb-16 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Have a design on your desk <br />
              <span className="text-brand-primary">that needs to move forward?</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              Send us your concept, sketch, sample part or existing drawing. We'll come back with a scope, a timeline and a fixed cost.
            </p>
          </div>
          <Link 
            href="/contact#enquiry" 
            className="group flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Request a Quote
            <FiArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight inline-block mb-4">
              IGLOBLE<span className="text-brand-primary">.</span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Mechanical product design and engineering services — CAD modeling, FEA analysis, GD&T drawings and prototype support from Pune, India.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/40 hover:text-brand-primary transition-colors"><FaLinkedinIn size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-foreground/40 hover:text-brand-primary transition-colors"><FaYoutube size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/40 hover:text-brand-primary transition-colors"><FaInstagram size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/40 hover:text-brand-primary transition-colors"><FaFacebookF size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Services Index</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="font-semibold mb-6">Capabilities</h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/services#concept" className="hover:text-brand-primary transition-colors">Product Concept</Link></li>
              <li><Link href="/services#cad" className="hover:text-brand-primary transition-colors">3D CAD (Creo, CATIA, NX)</Link></li>
              <li><Link href="/services#drawings" className="hover:text-brand-primary transition-colors">2D Drawings & GD&T</Link></li>
              <li><Link href="/services#fea" className="hover:text-brand-primary transition-colors">FEA / CAE Analysis</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li className="flex items-center gap-3">
                <FiMail size={16} className="text-brand-primary shrink-0" />
                <a href="mailto:contact@igloble-technologies.com" className="hover:text-brand-primary transition-colors">contact@igloble-technologies.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={16} className="text-brand-primary shrink-0" />
                <a href="tel:+919665410263" className="hover:text-brand-primary transition-colors">+91 96654 10263</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span>Jai Ganesh Vision, B Wing, 2nd Flr, Office 215, Ganga Nagar, Akurdi, Pune 411035</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 dark:border-white/10 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} IGLOBLE TECHNOLOGIES. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Engineered for precision and manufacturability.
          </p>
        </div>

      </div>
    </footer>
  );
}