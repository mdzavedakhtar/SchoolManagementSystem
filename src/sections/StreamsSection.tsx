import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Atom, TrendingUp, BookOpen, Check } from 'lucide-react';

export const StreamsSection: React.FC = () => {
  const streams = [
    {
      id: "science",
      name: "SCIENCE",
      icon: Atom,
      description: "Comprehensive coaching for conceptual mastery in fundamental pure and applied sciences.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"]
    },
    {
      id: "commerce",
      name: "COMMERCE",
      icon: TrendingUp,
      description: "Structured analytical training in finance, accounting, business principles, and economic theory.",
      subjects: ["Accountancy", "Business Studies", "Economics"]
    },
    {
      id: "arts",
      name: "ARTS",
      icon: BookOpen,
      description: "In-depth humanities education fostering critical inquiry, social understanding, and expression.",
      subjects: ["Humanities & Social Science Based Learning"]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Class XI & XII Specializations"
          title="Senior Secondary Streams (New Era Coaching)"
          subtitle="In-depth subject coaching designed for board examination mastery and academic success."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card goldAccent={index === 0} className="h-full flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-academic-100 text-academic-800 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-academic-800" />
                      </div>
                      <Badge variant="academic" size="sm">Class XI - XII</Badge>
                    </div>

                    <h3 className="text-2xl font-extrabold font-heading text-navy-900 mb-3">
                      {stream.name}
                    </h3>

                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {stream.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Core Subjects Offered:
                      </p>
                      {stream.subjects.map((sub, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center flex-shrink-0 text-xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span className="text-sm font-semibold text-navy-900">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <a href="#enquire" className="block text-center text-sm font-bold text-academic-800 hover:text-navy-900 transition-colors">
                      Enquire for {stream.name} Batch →
                    </a>
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
