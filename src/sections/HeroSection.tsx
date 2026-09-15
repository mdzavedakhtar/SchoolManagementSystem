import React from 'react';
import { motion, Variants } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { EducationalCanvas } from '../components/3d/EducationalCanvas';
import { ArrowRight, BookOpen, GraduationCap, Sparkles, MessageSquare } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../animations/motionPresets';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 bg-navy-950 overflow-hidden text-white border-b border-navy-800"
    >
      {/* TABLET AMBIENT GRADIENT OVERLAY (768px to 1023px) */}
      <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/65 to-navy-950/90 pointer-events-none z-10" />

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-academic-800/30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Subtle Grid Accent Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <Container size="default" className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left relative z-20"
          >
            {/* 1. Eyebrow Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
              <Badge variant="navy" className="px-3.5 py-1 sm:px-4 sm:py-1.5 border-gold-500/30 shadow-sm text-xs sm:text-sm uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 mr-1.5 animate-pulse" />
                CBSE PATTERN • NURSERY TO VIII
              </Badge>
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-hero font-extrabold font-heading tracking-tight leading-[1.08] sm:leading-[1.12] lg:leading-[1.15] text-white"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">Strong Foundations</span> for a Brighter Future
            </motion.h1>

            {/* 3. Supporting Text */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-300/90 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Quality school education at <strong className="text-white font-semibold">{INSTITUTION_INFO.schoolName}</strong> and dedicated coaching at <strong className="text-gold-300 font-semibold">{INSTITUTION_INFO.coachingName}</strong> for academic excellence, competitive preparation, and lifelong learning.
            </motion.p>

            {/* 4. Action CTAs & WhatsApp Link */}
            <motion.div
              variants={fadeInUp}
              className="pt-1 sm:pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <a href="#enquire" className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto font-extrabold shadow-gold-glow active:scale-[0.97] transition-all"
                >
                  Apply / Enquire Now
                </Button>
              </a>

              <a href="#school-coaching" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<BookOpen className="w-5 h-5 text-gold-400" />}
                  className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-white/10 hover:border-slate-400 active:scale-[0.97] transition-all"
                >
                  Explore School
                </Button>
              </a>

              <a href="#school-coaching" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<GraduationCap className="w-5 h-5 text-slate-200" />}
                  className="w-full sm:w-auto bg-academic-800 hover:bg-academic-700 text-white border border-academic-600/50 active:scale-[0.97] transition-all"
                >
                  Explore Coaching
                </Button>
              </a>
            </motion.div>

            {/* 5. WhatsApp & Quick Info Footer */}
            <motion.div
              variants={fadeInUp}
              className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-5 text-xs text-slate-400 border-t border-navy-800/80"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group active:scale-[0.97]"
              >
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp ({INSTITUTION_INFO.contactNumber})</span>
              </a>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-400" />
                <span>Medium: <strong className="text-slate-200">{INSTITUTION_INFO.medium}</strong></span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN / BACKGROUND: 3D Educational Canvas
              - Hidden on Mobile Phones (< 768px): hidden
              - Tablet (768px to 1023px): Ambient background md:block absolute inset-0 ...
              - Desktop (>= 1024px): Boxed card lg:relative lg:col-span-5 ... */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none opacity-40 blur-[1px] lg:relative lg:inset-auto lg:col-span-5 lg:w-full lg:h-auto lg:opacity-100 lg:blur-none lg:pointer-events-auto z-0 lg:z-10"
          >
            <EducationalCanvas />
          </motion.div>

        </div>
      </Container>

      {/* Subtle Gradient Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent pointer-events-none" />
    </section>
  );
};
