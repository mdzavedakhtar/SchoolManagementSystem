import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Sparkles, Heart, Compass, ShieldCheck } from 'lucide-react';

export const StudentExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Sparkles,
      title: "Interactive Classroom Atmosphere",
      description: "Encouraging curiosity, student participation, and question asking in every subject."
    },
    {
      icon: Heart,
      title: "Values & Moral Guidance",
      description: "Cultivating respect, discipline, empathy, and integrity alongside academic studies."
    },
    {
      icon: Compass,
      title: "Exam Preparation Support",
      description: "Structured practice tests and doubt elimination sessions to build confidence before exams."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Supportive Environment",
      description: "Careful monitoring and respectful surroundings ensuring comfort for every young learner."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container size="default">
        
        <SectionHeading
          badge="Campus Culture"
          title="A Place to Learn, Grow & Achieve"
          subtitle="Creating an environment where students build knowledge, confidence, and lifelong academic habits."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
