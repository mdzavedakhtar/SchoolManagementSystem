import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen: externalIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-slate-300 transition-colors">
      <button
        onClick={handleToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-navy-900 focus:outline-none focus:bg-slate-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-heading text-navy-900">{question}</span>
        <span className={cn(
          "w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-navy-800 transition-transform duration-300",
          isOpen && "rotate-180 bg-gold-100 text-gold-700"
        )}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 pt-1 text-slate-600 border-t border-slate-100 text-sm sm:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
