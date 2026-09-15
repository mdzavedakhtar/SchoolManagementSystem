import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { BookOpen, GraduationCap, Languages, Award } from 'lucide-react';

export const TrustStripSection: React.FC = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Nursery – VIII",
      subtitle: "School Classes (CBSE Pattern)",
      color: "text-gold-400"
    },
    {
      icon: GraduationCap,
      title: "Nursery – XII",
      subtitle: "Coaching Classes",
      color: "text-blue-300"
    },
    {
      icon: Languages,
      title: "Hindi + English",
      subtitle: "Bilingual Medium",
      color: "text-gold-400"
    },
    {
      icon: Award,
      title: "Polytechnic + Paramedical",
      subtitle: "Competitive Exam Prep",
      color: "text-blue-300"
    }
  ];

  return (
    <section className="bg-navy-900 border-y border-navy-800 py-8 relative z-20 shadow-lg">
      <Container size="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-3 rounded-xl hover:bg-navy-800/50 transition-colors"
              >
                <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-700/60 shadow-inner flex-shrink-0">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {item.subtitle}
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
