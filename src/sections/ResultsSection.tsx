import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Trophy, Star, CheckCircle } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 lg:py-24 bg-white relative">
      <Container size="default">
        
        <SectionHeading
          badge="Academic Performance & Growth"
          title="Results & Academic Accomplishments"
          subtitle="Recognizing consistency, academic discipline, and student performance across school & coaching batches."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-navy-700/60 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center mx-auto shadow-gold-glow">
            <Trophy className="w-8 h-8" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Commitment to Real Educational Progress
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our students demonstrate steady conceptual improvement and academic discipline in school assessments, board examinations, and entrance preparations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-2">
            <div className="bg-navy-950/70 p-4 rounded-xl border border-navy-700/50 flex items-center gap-3">
              <Star className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Regular Assessment</p>
                <p className="text-[11px] text-slate-400">Chapter-wise progress evaluation</p>
              </div>
            </div>
            <div className="bg-navy-950/70 p-4 rounded-xl border border-navy-700/50 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Transparent Tracking</p>
                <p className="text-[11px] text-slate-400">Direct feedback to parents</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-navy-800">
            <p className="text-xs text-gold-400 font-semibold tracking-wide">
              Academic achievements and student accomplishments will be updated here.
            </p>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};
