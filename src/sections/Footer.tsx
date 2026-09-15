import React from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { GraduationCap, Phone, MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 pt-16 pb-24 md:pb-12 text-sm">
      <Container size="default">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-navy-950 shadow-gold-glow font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white">
                  {INSTITUTION_INFO.schoolName}
                </h3>
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                  & {INSTITUTION_INFO.coachingName}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Combining structured CBSE school education (Nursery to VIII) with specialized coaching (Nursery to XII, Science, Commerce, Arts) and competitive preparation (Polytechnic & Paramedical).
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900 border border-navy-700 text-emerald-400 hover:bg-navy-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${INSTITUTION_INFO.contactNumber}`}
                className="p-2.5 rounded-xl bg-navy-900 border border-navy-700 text-gold-400 hover:bg-navy-800 transition-colors"
                aria-label="Call Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#school-coaching" className="hover:text-gold-400 transition-colors">School (Nursery – VIII)</a></li>
              <li><a href="#school-coaching" className="hover:text-gold-400 transition-colors">Coaching (Nursery – XII)</a></li>
              <li><a href="#academics" className="hover:text-gold-400 transition-colors">Academic Programs</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Institution</a></li>
              <li><a href="#results" className="hover:text-gold-400 transition-colors">Results & Accomplishments</a></li>
              <li><a href="#enquire" className="hover:text-gold-400 transition-colors">Admissions & Enquiries</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          {/* Contact & Campus Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Contact & Campus</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Call Desk: <strong className="text-white">{INSTITUTION_INFO.contactNumber}</strong></span>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: <strong className="text-white">+91 {INSTITUTION_INFO.contactNumber}</strong></span>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {INSTITUTION_INFO.schoolName} & {INSTITUTION_INFO.coachingName}. All rights reserved.</p>
          <p>Designed for Academic Excellence & Competitive Success.</p>
        </div>

      </Container>
    </footer>
  );
};
