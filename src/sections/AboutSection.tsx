import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { ShieldCheck, UserCheck, Compass, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Strong Foundation",
      description: "Focusing on core literacy, numeracy, scientific inquiry, and fundamental concepts that prepare students for higher academic challenges."
    },
    {
      icon: UserCheck,
      title: "Student-Centered Learning",
      description: "Adapting instruction to student needs through small batch attention, dual-medium support, and regular conceptual assessments."
    },
    {
      icon: Compass,
      title: "Future-Focused Education",
      description: "Integrating competitive entrance orientation for Polytechnic and Paramedical courses alongside standard secondary curriculum."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* About School Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 sm:p-10 h-full flex flex-col justify-between border-slate-200/80">
              <div className="space-y-4">
                <SectionHeading
                  badge="MG Oriental School"
                  title="A New Beginning in Quality Education"
                  align="left"
                  className="mb-2"
                />

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  MG Oriental School has been established with a vision to provide accessible, disciplined and quality-focused education to children in the local community. With classes from Nursery to VIII, the school focuses on building strong academic foundations while encouraging confidence, discipline, curiosity and good values.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  Our approach is centered around understanding each learner's needs and creating a positive environment where students can learn, participate and grow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-navy-900">Nursery to VIII (CBSE Pattern)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-navy-900">Values & Discipline Focus</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* About Coaching Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card goldAccent className="p-8 sm:p-10 h-full flex flex-col justify-between border-slate-200/80">
              <div className="space-y-4">
                <SectionHeading
                  badge="New Era Coaching Centre"
                  title="Focused Coaching for Every Stage of Learning"
                  align="left"
                  className="mb-2"
                />

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  New Era Coaching Centre provides academic support from Nursery to Class XII for students studying in both Hindi and English medium. The centre offers guidance across Science, Commerce and Arts, along with focused preparation for Polytechnic and Paramedical opportunities.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  The objective is to help students strengthen their concepts, practise regularly and approach their academic goals with confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-navy-900">Nursery to XII (Bilingual)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-navy-900">Polytechnic & Paramedical</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
