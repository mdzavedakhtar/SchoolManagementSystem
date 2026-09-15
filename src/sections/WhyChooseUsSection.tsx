import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { UserCheck, Award, Languages, Compass, Target, Sparkles, ArrowRight } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Strong Academic Foundation",
      description: "Focus on clear concepts and fundamentals from the early stages of learning.",
      icon: Award,
    },
    {
      number: "02",
      title: "Individual Attention",
      description: "A learning environment designed to understand students' academic needs and progress.",
      icon: UserCheck,
    },
    {
      number: "03",
      title: "Hindi & English Medium",
      description: "Learning support for students from both Hindi and English medium backgrounds.",
      icon: Languages,
    },
    {
      number: "04",
      title: "Structured Practice",
      description: "Regular classroom practice and revision to help students build confidence.",
      icon: Compass,
    },
    {
      number: "05",
      title: "Academic Guidance",
      description: "Guidance for school academics as well as higher classes and competitive preparation.",
      icon: Target,
    },
    {
      number: "06",
      title: "Values & Discipline",
      description: "Encouraging discipline, responsibility, confidence and positive learning habits.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Institutional Pillars"
          title="Why Choose MG Oriental & New Era?"
          subtitle="Dedicated academic values designed to support every student's growth and competitive edge."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-premium hover:shadow-premium-hover border border-slate-200/80 hover:border-academic-500/40 transition-all duration-300 group flex flex-col justify-between focus-within:ring-2 focus-within:ring-gold-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-navy-900 text-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-300 group-hover:text-gold-500 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-2 group-hover:text-academic-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Pillar Focus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
