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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionHeading
              badge="About Institution"
              title="Education That Builds More Than Academics"
              align="left"
              className="mb-4"
            />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong>{INSTITUTION_INFO.schoolName}</strong> and <strong>{INSTITUTION_INFO.coachingName}</strong> work in harmony to provide students in Vaishali, Bihar with rigorous schooling and specialized academic guidance.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether laying early foundational concepts from Nursery to Class VIII or preparing senior students for Class XII board exams and competitive entrance tests like Polytechnic and Paramedical, our objective remains steadfast: nurturing disciplined, confident, and knowledgeable learners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-navy-900">Bilingual Support (Hindi & English)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-navy-900">CBSE Curriculum Pattern</span>
              </div>
            </div>
          </motion.div>

          {/* Right Principles Cards */}
          <div className="lg:col-span-6 space-y-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card goldAccent={index === 0} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-navy-800 text-gold-400 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-heading text-navy-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
};
