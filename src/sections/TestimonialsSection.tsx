import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Community Voices"
          title="Parent & Student Testimonials"
          subtitle="Feedback from parents and students experiencing our school and coaching education."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-slate-200/80 max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center mx-auto">
            <Quote className="w-7 h-7" />
          </div>

          <h3 className="text-xl font-bold font-heading text-navy-900">
            Parent & Student Feedback Space
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We prioritize authentic feedback from our community. Verified parent reviews and student experiences will be published here following the academic term review.
          </p>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 italic">
              "Parent and student testimonials will appear here."
            </p>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};
