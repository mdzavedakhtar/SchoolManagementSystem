import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AcademicProgramsSection: React.FC = () => {
  const programs = [
    {
      id: "foundation",
      title: "FOUNDATION STAGE",
      grades: "Nursery – V",
      category: "school" as const,
      badge: "MG Oriental School (CBSE Pattern)",
      description: "Building strong literacy, numeracy, conceptual clarity, and curiosity in young learners.",
      highlights: [
        "CBSE Curriculum Standards",
        "Bilingual Learning Support (Hindi & English)",
        "Interactive Conceptual Teaching",
        "Individual Child Attention"
      ]
    },
    {
      id: "middle",
      title: "MIDDLE SCHOOL",
      grades: "VI – VIII",
      category: "school" as const,
      badge: "MG Oriental School (CBSE Pattern)",
      description: "Developing analytical thinking, scientific aptitude, and strong language skills for higher education.",
      highlights: [
        "Rigorous CBSE Syllabus",
        "Core Subject Mastery (Maths, Science, Social)",
        "Continuous Evaluation & Assessment",
        "Discipline & Ethics Focus"
      ]
    },
    {
      id: "secondary-coaching",
      title: "SECONDARY COACHING",
      grades: "IX – X",
      category: "coaching" as const,
      badge: "New Era Coaching Centre",
      description: "Targeted coaching for board examination excellence and solid conceptual clarity.",
      highlights: [
        "Chapter-wise Practice & Test Series",
        "Doubt Resolution Sessions",
        "Hindi & English Medium Batches",
        "Board Exam Oriented Preparation"
      ]
    },
    {
      id: "senior-secondary-coaching",
      title: "SENIOR SECONDARY COACHING",
      grades: "XI – XII",
      category: "coaching" as const,
      badge: "New Era Coaching Centre",
      description: "Specialized stream coaching for Science, Commerce, and Arts with expert faculty mentorship.",
      highlights: [
        "Stream Specific Deep-Dive",
        "Regular Assessment & Feedback",
        "Concept-to-Application Approach",
        "Competitive Foundation Integration"
      ]
    },
    {
      id: "competitive-prep",
      title: "COMPETITIVE PREPARATION",
      grades: "Polytechnic / Paramedical",
      category: "coaching" as const,
      badge: "New Era Specialized Wing",
      description: "Focused entrance exam preparation for Polytechnic and Paramedical courses.",
      highlights: [
        "Exam Pattern Syllabus Coverage",
        "Mock Tests & Time Management",
        "Previous Year Paper Solving",
        "Strategic Guidance & Counselling"
      ]
    }
  ];

  return (
    <section id="academics" className="py-20 lg:py-28 bg-white relative">
      <Container size="default">
        
        <SectionHeading
          badge="Structured Learning Path"
          title="Academic Programs & Class Offerings"
          subtitle="Clear division between foundational school grades (Nursery–VIII) and secondary coaching wings."
          align="center"
        />

        <div className="space-y-6">
          {programs.map((program, index) => {
            const isSchool = program.category === 'school';
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  isSchool
                    ? 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                    : 'bg-navy-900 text-white border-navy-700/60 shadow-lg hover:shadow-navy-glow'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant={isSchool ? 'navy' : 'gold'} size="sm">
                        {program.badge}
                      </Badge>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isSchool ? 'bg-gold-100 text-gold-700' : 'bg-navy-800 text-gold-400'
                      }`}>
                        {program.grades}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-extrabold font-heading ${
                      isSchool ? 'text-navy-900' : 'text-white'
                    }`}>
                      {program.title}
                    </h3>
                    <p className={`text-sm ${isSchool ? 'text-slate-600' : 'text-slate-300'}`}>
                      {program.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {program.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                          isSchool ? 'text-gold-500' : 'text-gold-400'
                        }`} />
                        <span className={`text-xs font-medium ${
                          isSchool ? 'text-slate-700' : 'text-slate-200'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-3 flex justify-start lg:justify-end">
                    <a href="#enquire" className="w-full lg:w-auto">
                      <Button
                        variant={isSchool ? 'primary' : 'gold'}
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                        className="w-full lg:w-auto justify-center"
                      >
                        Enquire Class
                      </Button>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
