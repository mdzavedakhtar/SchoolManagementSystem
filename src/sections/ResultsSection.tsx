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
          badge="New Institution • Growing Together"
          title="Building Today's Learners for Tomorrow's Achievements"
          subtitle="MG Oriental School and New Era Coaching Centre are at the beginning of their academic journey. Our current focus is on building strong fundamentals, consistent learning habits and a supportive academic environment for every student."
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
            Building Today's Learners for Tomorrow's Achievements
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            MG Oriental School and New Era Coaching Centre are at the beginning of their academic journey. Our current focus is on building strong fundamentals, consistent learning habits and a supportive academic environment for every student.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-2">
            <div className="bg-navy-950/70 p-4 rounded-xl border border-navy-700/50 flex items-center gap-3">
              <Star className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Strong Fundamentals</p>
                <p className="text-[11px] text-slate-400">Concept clarity from early stages</p>
              </div>
            </div>
            <div className="bg-navy-950/70 p-4 rounded-xl border border-navy-700/50 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Supportive Environment</p>
                <p className="text-[11px] text-slate-400">Individual focus & positive habits</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-navy-800">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-xs font-bold text-gold-300">
              New Institution • Growing Together
            </span>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};
