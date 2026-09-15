import React from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Phone, MessageSquare, Edit3 } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy-950/95 backdrop-blur-lg border-t border-navy-700/60 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${INSTITUTION_INFO.contactNumber}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-800 text-slate-200 hover:bg-navy-700 active:scale-95 transition-all border border-navy-700/50"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/90 text-white hover:bg-emerald-600 active:scale-95 transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Enquire Action */}
        <a
          href="#enquire"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 active:scale-95 transition-all font-bold shadow-md"
        >
          <Edit3 className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Enquire</span>
        </a>
      </div>
    </div>
  );
};
