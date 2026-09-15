import React from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Compass, Award, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export const CompetitiveSection: React.FC = () => {
  const courses = [
    {
      id: "polytechnic",
      name: "Polytechnic Preparation",
      badge: "Technical Guidance",
      description: "Concept-based preparation in Mathematics, Physics and Chemistry with regular practice and revision.",
      icon: Compass,
      keyAreas: [
        "Concept-based Mathematics, Physics & Chemistry",
        "Regular Practice & Problem Solving",
        "Syllabus Revision",
        "Examination Guidance"
      ]
    },
    {
      id: "paramedical",
      name: "Paramedical Preparation",
      badge: "Healthcare Guidance",
      description: "Academic preparation with focus on Biology, General Science and examination-oriented practice.",
      icon: Award,
      keyAreas: [
        "Biology & General Science Focus",
        "Examination-oriented Practice",
        "Regular Revision & Doubt Support",
        "Academic Preparation"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-navy-950 text-white relative overflow-hidden border-y border-navy-800">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-academic-500/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        
        <SectionHeading
          badge="Specialized Competitive Entrance Wing"
          title="Prepare Today. Build Your Future Tomorrow."
          subtitle="Dedicated test series, concept clarity, and syllabus coverage for technical & healthcare diploma entrance exams."
          align="center"
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-navy-900/90 rounded-3xl p-8 sm:p-10 border border-navy-700/60 shadow-2xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <Badge variant="gold" size="sm">
                      {course.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-3">
                    {course.name}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-navy-800">
                    <p className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-2">
                      Key Preparation Focus:
                    </p>
                    {course.keyAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center gap-3">
                  <a href="#enquire" className="w-full sm:w-auto flex-1">
                    <Button variant="gold" size="md" className="w-full justify-center" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Enquire for Preparation
                    </Button>
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello, I would like to enquire about ${course.name} at New Era Coaching Centre.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" size="md" leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />} className="w-full justify-center border-navy-700 text-slate-200 hover:bg-white/10">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
