import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      aria-label="Chat with Admissions on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-white stroke-emerald-500" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold tracking-wide">
        Chat with Admissions
      </span>
      <span className="relative flex h-3 w-3 -mt-3 -mr-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
      </span>
    </a>
  );
};
