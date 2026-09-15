import React, { useState } from 'react';
import { INSTITUTION_INFO, NAV_LINKS } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useScroll } from '../hooks/useScroll';
import { useActiveSection } from '../hooks/useActiveSection';
import { Button } from './ui/Button';
import { MobileMenu } from './MobileMenu';
import { GraduationCap, MessageSquare, Menu, X } from 'lucide-react';

const SECTION_IDS = ['hero', 'school', 'coaching', 'academics', 'gallery', 'about', 'results', 'contact'];

export const Navbar: React.FC = () => {
  const isScrolled = useScroll(20);
  const activeSection = useActiveSection(SECTION_IDS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md py-3 shadow-xl border-b border-navy-700/50 text-white'
            : 'bg-gradient-to-b from-navy-950/90 via-navy-950/50 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Institution Brand Identity */}
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-xl p-1">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-navy-950 font-bold shadow-gold-glow group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight leading-tight text-white group-hover:text-gold-400 transition-colors">
                  {INSTITUTION_INFO.schoolName}
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-gold-400 uppercase">
                  & {INSTITUTION_INFO.coachingName}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Desktop Navigation">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-sm font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                      isActive
                        ? 'text-gold-400 font-bold bg-gold-500/15 border border-gold-500/30'
                        : 'text-slate-200 hover:text-gold-400 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
                  className="text-slate-200 hover:text-white hover:bg-white/10"
                >
                  WhatsApp
                </Button>
              </a>

              <a href="#enquire">
                <Button variant="gold" size="sm" className="font-bold">
                  Apply Now
                </Button>
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-400 hover:bg-white/10 rounded-lg md:hidden"
                aria-label="WhatsApp enquiry"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
                aria-label={mobileMenuOpen ? "Close menu" : "Open mobile navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
};
