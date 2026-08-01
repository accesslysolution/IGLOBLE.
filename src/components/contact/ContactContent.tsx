"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  FiChevronRight, 
  FiMapPin, 
  FiPhone, 
  FiClock, 
  FiGlobe, 
  FiMail, 
  FiShare2, 
  FiSend, 
  FiCheckCircle, 
  FiArrowRight 
} from "react-icons/fi";
import styles from "@/css/components/contact/Contact.module.css";

export default function ContactContent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const servicesList = [
    "Product Design & Development", "3D CAD Modeling", "2D Drawings & GD&T", 
    "Sheet Metal Design", "Plastic Part Design", "Machine Design", 
    "FEA/CAE Analysis", "DFM & DFA", "Prototype Support", 
    "BOM & Documentation", "Product Redesign & Cost Optimisation"
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: PAGE HERO */}
      <section className={styles.heroContainer}>
        <div className={styles.isometricGrid}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm font-medium text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-white">Contact Us</span>
          </nav>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">CONTACT</span>
            <div className="h-px w-12 bg-[#f59e0b]/50"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-tight">
            Let's talk about what <span className="text-white/60">you're building.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Send us a concept, a sketch, a sample part or an existing drawing. We'll come back with a scope, a timeline and a cost — usually within 48 hours.
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT DETAILS */}
      <section className={`${styles.sectionContainer} py-24 md:py-32`} id="details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">01</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Reach us directly.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={styles.contactCard}>
              <div className="text-brand-primary mb-4"><FiMapPin size={28} /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Office</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                IGLOBLE TECHNOLOGIES<br />
                Jai Ganesh Vision, B Wing, 2nd Floor, Office No. 215,<br />
                Ganga Nagar, Akurdi, Pune, Maharashtra 411035, India
              </p>
            </div>

            <div className={styles.contactCard}>
              <div className="text-brand-primary mb-4"><FiPhone size={28} /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
              <a href="tel:+919665410263" className="text-foreground/80 font-semibold hover:text-brand-primary transition-colors text-lg block mb-1">
                +91 96654 10263
              </a>
              <span className="text-xs text-foreground/50 uppercase tracking-wider font-mono">Click-to-call enabled on mobile</span>
            </div>

            <div className={styles.contactCard}>
              <div className="text-brand-primary mb-4"><FiClock size={28} /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Business Hours</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">
                Monday to Friday: 10:00 – 20:00 IST<br />
                Saturday & Sunday: Closed
              </p>
              <p className="text-xs text-foreground/50">International clients: calls outside these hours by arrangement.</p>
            </div>

            <div className={styles.contactCard}>
              <div className="text-brand-primary mb-4"><FiGlobe size={28} /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Website</h3>
              <a href="https://igloble-technologies.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline font-medium">
                igloble-technologies.com
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className="text-brand-primary mb-4"><FiMail size={28} /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <p className="text-foreground/70 text-sm">contact@igloble-technologies.com</p>
            </div>

            <div className={styles.contactCard}>
              <div className="text-brand-primary mb-4"><FiShare2 size={28} /></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Social</h3>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a> · 
                <a href="#" className="hover:text-brand-primary transition-colors">Facebook</a> · 
                <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a> · 
                <a href="#" className="hover:text-brand-primary transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT ENQUIRY FORM */}
      <section className={`${styles.sectionContainer} py-24 md:py-32`} id="enquiry">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">02</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Project Enquiry</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Tell us about your project.</h2>
            <p className="text-foreground/70 text-lg">The more you tell us here, the more useful our first reply will be.</p>
          </div>

          <div className={styles.formBox}>
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex text-emerald-500 mb-6"><FiCheckCircle size={64} /></div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Thank you — your enquiry has reached our engineering team.</h3>
                <p className="text-foreground/70 text-lg max-w-xl mx-auto leading-relaxed">
                  We review every enquiry personally, and you'll hear back within one business day. If your project is urgent, call us directly on <a href="tel:+919665410263" className="text-brand-primary font-bold">+91 96654 10263</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input type="text" required className={styles.inputField} placeholder="Rishikesh Joshi" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Name *</label>
                    <input type="text" required className={styles.inputField} placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input type="email" required className={styles.inputField} placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <input type="tel" required className={styles.inputField} placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Country / Location</label>
                    <input type="text" className={styles.inputField} placeholder="India, Germany, USA..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Industry *</label>
                    <select required className={styles.inputField}>
                      <option value="">Select Industry...</option>
                      <option>Automotive</option>
                      <option>Industrial Machinery</option>
                      <option>Consumer Products</option>
                      <option>Heavy Engineering</option>
                      <option>Aerospace</option>
                      <option>Medical Devices</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Service Required * (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {servicesList.map((srv, idx) => (
                      <label key={idx} className="flex items-center gap-2 text-sm cursor-pointer p-2 rounded-lg hover:bg-foreground/5">
                        <input 
                          type="checkbox" 
                          checked={selectedServices.includes(srv)}
                          onChange={() => handleServiceToggle(srv)}
                          className="rounded border-foreground/20 text-brand-primary focus:ring-brand-primary"
                        />
                        <span>{srv}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Stage</label>
                    <select className={styles.inputField}>
                      <option value="">Select Stage...</option>
                      <option>Concept only</option>
                      <option>Partial design exists</option>
                      <option>Complete design, needs review</option>
                      <option>Existing product, needs redesign</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Expected Timeline</label>
                    <select className={styles.inputField}>
                      <option value="">Select Timeline...</option>
                      <option>Urgent (under 2 weeks)</option>
                      <option>2–6 weeks</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                      <option>Not yet defined</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Details *</label>
                  <textarea required rows={5} className={styles.inputField} placeholder="Describe your requirement, application, volume, and technical constraints..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Upload File (PDF, STEP, IGES, DWG, JPG, PNG - max 25 MB)</label>
                  <input type="file" className="block w-full text-sm text-foreground/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20" />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" required id="consent" className="rounded border-foreground/20 text-brand-primary focus:ring-brand-primary" />
                  <label htmlFor="consent" className="text-sm text-foreground/80 cursor-pointer">
                    I agree to IGLOBLE TECHNOLOGIES contacting me about this enquiry. *
                  </label>
                </div>

                <button type="submit" className={`${styles.primaryButton} w-full py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2`}>
                  <FiSend size={18} /> Submit Enquiry
                </button>

                <p className="text-xs text-center text-foreground/50 mt-4">
                  Your files and project information are treated as strictly confidential. We're happy to sign an NDA before you share anything sensitive — just ask.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION & MAP */}
      <section className={`${styles.sectionContainer} py-24 md:py-32 border-t border-foreground/10`} id="map">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold tracking-widest text-brand-primary">03</span>
                <div className="h-px w-12 bg-brand-primary/50"></div>
                <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Find Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Akurdi, Pune — in the heart of Maharashtra's manufacturing belt.
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed font-light mb-6">
                Our office sits in Akurdi, minutes from the Pimpri-Chinchwad industrial corridor — one of India's densest concentrations of automotive, machinery and engineering manufacturing. Being close to the factories we design for is deliberate: it means shop-floor visits, supplier meetings and design reviews happen in person, not over email.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-foreground/60">
                <span className="font-semibold text-foreground">Nearby landmarks:</span> Akurdi Railway Station · Chinchwad · Nigdi · Pimpri-Chinchwad MIDC · Ravet
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-foreground/10 h-[400px] shadow-lg">
                <iframe 
                  src="https://www.google.com/maps?q=Jai+Ganesh+Vision+B+Wing+Ganga+Nagar+Akurdi+Pune+411035&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="IGLOBLE TECHNOLOGIES Location Map"
                ></iframe>
              </div>
              <a 
                href="https://maps.google.com/?q=Jai+Ganesh+Vision+B+Wing+Ganga+Nagar+Akurdi+Pune+411035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline self-end"
              >
                Get Directions <FiArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESPONSE COMMITMENT */}
      <section className={`${styles.sectionContainer} py-24 md:py-32 border-t border-foreground/10`} id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">04</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">What Happens Next</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">What happens after you hit send.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10">
              <span className="font-mono text-3xl font-bold text-brand-primary mb-4 block">01</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Within one business day</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">An engineer reviews your enquiry and responds with initial questions or an acknowledgement. Not an auto-reply.</p>
            </div>
            <div className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10">
              <span className="font-mono text-3xl font-bold text-brand-primary mb-4 block">02</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Within 48 hours</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">Where the requirement is clear, you receive a written scope, timeline and cost.</p>
            </div>
            <div className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10">
              <span className="font-mono text-3xl font-bold text-brand-primary mb-4 block">03</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Technical discussion</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">A call or meeting to walk through the approach, clarify constraints and agree deliverables. Under NDA if you prefer.</p>
            </div>
            <div className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10">
              <span className="font-mono text-3xl font-bold text-brand-primary mb-4 block">04</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Project start</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">Scope confirmed, schedule locked, work begins with a named engineer accountable for delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT FAQ */}
      <section className={`${styles.sectionContainer} py-24 md:py-32 border-t border-foreground/10`} id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">05</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Before You Write</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Answers that will save you an email.</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">What should I include in my first message?</h3>
              <p className="text-foreground/70 leading-relaxed">A description of the part or product, the application and operating conditions, expected volume, target timeline, and any existing files — a sketch, photo, sample part image, STEP file or old drawing all help.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Do you sign NDAs?</h3>
              <p className="text-foreground/70 leading-relaxed">Yes, as standard practice before receiving any confidential design data.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Do you work with international clients?</h3>
              <p className="text-foreground/70 leading-relaxed">Yes. We have delivered projects for clients in both domestic and international markets, and can work to your regional drawing standards and file formats.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">What's the minimum project size?</h3>
              <p className="text-foreground/70 leading-relaxed">There isn't a fixed minimum. We take on single-part design work as readily as complete product programmes.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How is pricing structured?</h3>
              <p className="text-foreground/70 leading-relaxed">Depending on the engagement, we quote fixed-price per project, hourly, or monthly for dedicated engineering capacity. You'll always receive a written cost before work begins.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Can we visit your office?</h3>
              <p className="text-foreground/70 leading-relaxed">Yes. We welcome technical discussions in person at our Akurdi office, Monday to Friday between 10:00 and 20:00.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CAREERS */}
      <section className={`${styles.sectionContainer} py-24 md:py-32 border-t border-foreground/10`} id="careers">
        <div className="max-w-4xl mx-auto px-6 bg-foreground/5 p-12 rounded-3xl border border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">06</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Join Us</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">We're building a team of experienced design engineers.</h2>
            <p className="text-foreground/70 text-base leading-relaxed font-light">
              If you work in Creo, CATIA or NX, understand GD&T properly, and want to work on real products rather than back-office drafting — we'd like to hear from you. Building a team of experienced design engineers is one of our stated medium-term goals, and we hire for capability over headcount.
            </p>
          </div>
          <Link href="#enquiry" className="bg-foreground text-background dark:bg-white dark:text-black px-8 py-4 rounded-full font-bold whitespace-nowrap hover:scale-105 transition-transform shadow-lg">
            Send Your Portfolio
          </Link>
        </div>
      </section>

      {/* SECTION 8: SOCIAL */}
      <section className={`${styles.sectionContainer} py-24 md:py-32 border-t border-foreground/10`} id="social">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">07</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Follow Our Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">See what we're designing.</h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8">
            We share project work, engineering breakdowns and design notes across our channels — renders and analysis on Instagram, technical writing and company updates on LinkedIn, and process walkthroughs on YouTube.
          </p>
          <div className="flex justify-center gap-6 text-lg font-bold">
            <a href="#" className="text-brand-primary hover:underline">Instagram</a>
            <a href="#" className="text-brand-primary hover:underline">Facebook</a>
            <a href="#" className="text-brand-primary hover:underline">LinkedIn</a>
            <a href="#" className="text-brand-primary hover:underline">YouTube</a>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-brand-primary text-white py-24 md:py-32 relative overflow-hidden" id="final-cta">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Design the future — starting with your next project.
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Five years. Four industries. Domestic and international delivery. Send us the brief and let's see what's possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#enquiry" className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-colors shadow-lg">
              <FiMail size={20} /> Request a Quote
            </Link>
            <a href="tel:+919665410263" className="border-2 border-white/80 hover:bg-white hover:text-brand-primary text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-colors">
              <FiPhone size={20} /> Call +91 96654 10263
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}