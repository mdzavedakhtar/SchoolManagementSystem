import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { BookOpen, Laptop, FlaskConical, Trophy, Users, LayoutGrid } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const facilityCategories = [
    {
      icon: LayoutGrid,
      title: "Classrooms",
      description: "Structured learning spaces designed for focused instruction and teacher-student interaction."
    },
    {
      icon: BookOpen,
      title: "Library & Study Resources",
      description: "Curated reference books, text guides, and study materials for school and competitive preparation."
    },
    {
      icon: Laptop,
      title: "Computer Education",
      description: "Basic digital literacy and computer familiarity for modern technical understanding."
    },
    {
      icon: FlaskConical,
      title: "Science Learning",
      description: "Practical demonstration and conceptual apparatus for Physics, Chemistry & Biology."
    },
    {
      icon: Trophy,
      title: "Sports & Physical Wellness",
      description: "Activities promoting physical fitness, discipline, teamwork, and healthy outdoor habits."
    },
    {
      icon: Users,
      title: "Student Activities",
      description: "Co-curricular events, debate, quiz competitions, and cultural celebrations."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Campus Infrastructure Overview"
          title="Learning Infrastructure & Resources"
          subtitle="Designed to support focused academic study, conceptual clarity, and balanced student growth."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityCategories.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">
                      {facility.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>Resource Overview</span>
                    <span className="text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">Info →</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8 italic">
          * Campus facility imagery will be updated following final client photography review.
        </p>

      </Container>
    </section>
  );
};
