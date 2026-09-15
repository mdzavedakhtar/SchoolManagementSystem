import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryCategory } from '../data/galleryData';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Maximize2, MessageSquare, ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter gallery items by active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-academic-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Our Campus & Activities"
          title="Moments That Inspire Learning"
          subtitle="Explore glimpses of our classrooms, activities, learning environment and student experiences."
          align="center"
          dark
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  isActive
                    ? 'bg-gold-500 text-navy-950 shadow-gold-glow font-extrabold'
                    : 'bg-navy-900/80 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-700/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Content Flow */}
        {GALLERY_ITEMS.length === 0 ? (
          /* Premium Empty State UI when real photographs are awaiting upload */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto rounded-3xl bg-navy-900/80 border border-navy-700/60 p-10 sm:p-14 text-center space-y-6 shadow-2xl backdrop-blur-sm"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-gold-glow">
              <ImageIcon className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <Badge variant="gold" size="sm">
                Campus Gallery
              </Badge>
              <h3 className="text-2xl font-extrabold font-heading text-white">
                Gallery Coming Soon
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-lg mx-auto font-sans">
                Authentic glimpses of classrooms, academic sessions, and campus life at <strong>MG Oriental School</strong> and <strong>New Era Coaching Centre</strong> will be showcased here.
              </p>
            </div>
          </motion.div>
        ) : filteredItems.length === 0 ? (
          /* Category Empty Filter Message */
          <div className="text-center py-16 text-slate-400">
            <p className="text-base font-medium">No images available in this category.</p>
          </div>
        ) : (
          /* Responsive Image Cards Grid */
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleOpenLightbox(index)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-navy-900 border border-navy-700/60 shadow-xl hover:border-gold-500/50 hover:shadow-gold-glow transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={600}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Category Tag Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-navy-950 bg-gold-400 px-2.5 py-1 rounded-md shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                      <Maximize2 className="w-4 h-4 text-gold-400" />
                    </div>

                    {/* Card Title Footer inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-base font-bold font-heading text-white line-clamp-1">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-sans">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </Container>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
};

export default GallerySection;
