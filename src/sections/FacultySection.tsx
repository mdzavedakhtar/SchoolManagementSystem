import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';

export const FacultySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Academic Mentors"
          title="Our Dedicated Faculty & Mentors"
          subtitle="Experienced educators committed to subject mastery, discipline, and personalized student guidance."
          align="center"
        />

        {/* Faculty Architectural Placeholder Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-slate-200/80 text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-academic-100 text-academic-800 flex items-center justify-center mx-auto">
            <Users className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-900">
            Qualified Subject Specialists Across All Wings
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our teaching team comprises qualified educators specializing in Primary CBSE education, High School Science, Commerce & Arts streams, as well as competitive entrance exam mentors for Polytechnic and Paramedical courses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-gold-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-navy-900">CBSE Trained</p>
                <p className="text-[11px] text-slate-500">School Faculty</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-gold-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-navy-900">Stream Experts</p>
                <p className="text-[11px] text-slate-500">Science / Commerce / Arts</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Award className="w-5 h-5 text-gold-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-navy-900">Competitive Mentors</p>
                <p className="text-[11px] text-slate-500">Polytechnic / Paramedical</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 italic">
              Faculty profiles will be updated here.
            </p>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};
