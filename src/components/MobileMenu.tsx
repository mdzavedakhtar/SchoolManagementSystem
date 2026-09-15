import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Button } from './ui/Button';
import { GraduationCap, MessageSquare, Phone, MapPin, X, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  activeSection?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links, activeSection }) => {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard accessibility: Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Slide-out Navigation Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-navy-900 text-white shadow-2xl flex flex-col justify-between border-l border-navy-700/50 p-6 overflow-y-auto"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold-500 flex items-center justify-center text-navy-950 font-bold shadow-gold-glow">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-sm text-white tracking-tight">
                      {INSTITUTION_INFO.schoolName}
                    </p>
                    <p className="text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                      & {INSTITUTION_INFO.coachingName}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 flex flex-col gap-1.5" aria-label="Mobile Navigation Links">
                {links.map((link) => {
                  const targetId = link.href.replace('#', '');
                  const isActive = activeSection === targetId;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className={`px-4 py-3 text-base font-medium rounded-xl transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                        isActive
                          ? 'text-gold-400 font-bold bg-gold-500/15 border border-gold-500/30'
                          : 'text-slate-200 hover:text-gold-400 hover:bg-navy-800/80'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 transition-all ${isActive ? 'text-gold-400 translate-x-1' : 'text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="pt-6 border-t border-navy-800 space-y-3.5">
              <a href="#enquire" onClick={onClose} className="block">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full justify-center font-bold"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply Now
                </Button>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<MessageSquare className="w-5 h-5 text-emerald-400" />}
                  className="w-full justify-center border-navy-700 text-white hover:bg-white/10"
                >
                  WhatsApp
                </Button>
              </a>

              <div className="pt-2 text-xs text-slate-400 space-y-1.5 text-center">
                <p className="flex items-center justify-center gap-1.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call: {INSTITUTION_INFO.contactNumber}</span>
                </p>
                <p className="flex items-center justify-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Vaishali, Bihar – {INSTITUTION_INFO.address.pin}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
