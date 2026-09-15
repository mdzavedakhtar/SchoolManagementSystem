import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { BookOpen, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const SplitSchoolCoachingSection: React.FC = () => {
  return (
    <section id="school-coaching" className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Two Wings • One Brand Experience"
          title="Complete Education Under One Institution"
          subtitle="Providing structured school foundation alongside specialized coaching and competitive preparation."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PANEL 1: MG ORIENTAL SCHOOL */}
          <motion.div
            id="school"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-200/80 hover:shadow-premium-hover transition-all relative overflow-hidden flex flex-col justify-between group scroll-mt-28"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-navy-800" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <Badge variant="navy" size="md">
                  CBSE Pattern
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-2">
                {INSTITUTION_INFO.schoolName}
              </h3>
              <p className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-4">
                Classes {INSTITUTION_INFO.schoolGrades}
              </p>              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                MG Oriental School focuses on building strong academic foundations through a supportive learning environment that encourages curiosity, confidence, discipline and positive learning habits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Nursery to Class VIII</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">CBSE-pattern academic approach</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Hindi & English learning support</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Strong academic foundations</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Student-focused learning</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Values and discipline</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <a href="#enquire" className="w-full sm:w-auto flex-1">
                <Button variant="primary" size="md" className="w-full justify-center" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore School
                </Button>
              </a>
              <a
                href={getWhatsAppUrl("Hello, I would like to enquire about admission at MG Oriental School.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="md" className="w-full justify-center">
                  School WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* PANEL 2: NEW ERA COACHING CENTRE */}
          <motion.div
            id="coaching"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-navy-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-navy-700/60 hover:shadow-navy-glow transition-all relative overflow-hidden text-white flex flex-col justify-between group scroll-mt-28"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <Badge variant="gold" size="md">
                  Nursery to XII
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
                {INSTITUTION_INFO.coachingName}
              </h3>
              <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
                Nursery – XII
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                New Era Coaching Centre provides academic guidance for students from Nursery to Class XII in both Hindi and English medium, along with preparation support for Polytechnic and Paramedical opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">Nursery to Class XII</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">Hindi & English Medium</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">Science, Commerce & Arts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">Academic support and revision</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">Regular practice</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">Polytechnic & Paramedical preparation</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center gap-3">
              <a href="#enquire" className="w-full sm:w-auto flex-1">
                <Button variant="gold" size="md" className="w-full justify-center" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Coaching
                </Button>
              </a>
              <a
                href={getWhatsAppUrl("Hello, I would like to enquire about New Era Coaching Centre.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="md" className="w-full justify-center border-slate-600 text-white hover:bg-white/10">
                  Coaching WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
