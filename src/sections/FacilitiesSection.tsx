import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { LayoutGrid, BookOpen, Compass, Sparkles } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const facilityCategories = [
    {
      icon: LayoutGrid,
      title: "Supportive Classrooms",
      description: "Focused classroom environments designed to encourage participation and learning."
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Academic resources to support classroom learning and regular practice."
    },
    {
      icon: Compass,
      title: "Academic Guidance",
      description: "Subject-focused support for students across different academic levels."
    },
    {
      icon: Sparkles,
      title: "Student Development",
      description: "Encouraging confidence, discipline and positive learning habits."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Learning Environment"
          title="Campus Infrastructure & Environment"
          subtitle="Designed to support focused academic study, conceptual clarity, and positive student development."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                </Card>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
