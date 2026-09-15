import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../../data/galleryData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentItem = items[currentIndex];

  // Prevent background scrolling while lightbox is open
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

  // Keyboard navigation: ESC to close, Left/Right arrows for prev/next
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Viewer"
      >
        {/* Dark Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/95 backdrop-blur-md"
        />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center"
        >
          {/* Top Bar (Close Button & Counter) */}
          <div className="w-full flex items-center justify-between pb-4 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold font-mono tracking-widest text-gold-400 bg-navy-900/80 px-3 py-1 rounded-full border border-gold-500/30">
                {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider hidden sm:inline-block">
                {currentItem.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-navy-900/80 text-slate-300 hover:text-white hover:bg-gold-500 hover:text-navy-950 transition-all border border-navy-700/60 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Frame with Prev/Next Controls */}
          <div className="relative w-full flex items-center justify-center group">
            {/* Previous Button */}
            {items.length > 1 && (
              <button
                onClick={onPrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition-all border border-navy-700/60 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Displayed Image */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-navy-700/60 bg-navy-950 shadow-2xl max-h-[75vh] flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Next Button */}
            {items.length > 1 && (
              <button
                onClick={onNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition-all border border-navy-700/60 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Image Caption & Category Footer */}
          <div className="pt-4 text-center space-y-1">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-sans">
                {currentItem.description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
