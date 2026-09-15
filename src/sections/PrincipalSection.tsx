import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Quote, Phone, MessageSquare, GraduationCap } from 'lucide-react';
import principalWebp from '../assets/principal-zaif-akhtar.webp';
import principalJpg from '../assets/principal-zaif-akhtar-opt.jpg';

export const PrincipalSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <Container size="default">
        
        <SectionHeading
          badge="Leadership & Mentorship"
          title="Principal's Desk"
          subtitle="Guided by academic integrity, discipline, and educational commitment."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Portrait Column (Mobile: First) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-500/20 to-navy-900/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-navy-900 -z-10 hidden sm:block" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <picture>
                <source srcSet={principalWebp} type="image/webp" />
                <img
                  src={principalJpg}
                  alt={`Principal ${INSTITUTION_INFO.principalName}`}
                  width={400}
                  height={533}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge variant="gold" size="sm" className="mb-2">
                  Leadership
                </Badge>
                <h3 className="text-2xl font-extrabold font-heading text-white tracking-tight">
                  {INSTITUTION_INFO.principalName}
                </h3>
                <p className="text-sm font-medium text-gold-300">
                  Principal, MG Oriental School & New Era Coaching
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy">
                Institutional Commitment
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 leading-tight">
              Guided by Integrity, Discipline & Excellence
            </h2>

            <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 text-left">
              <Quote className="w-10 h-10 text-gold-400 opacity-60 mb-2" />

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans italic">
                "Welcome to <strong>{INSTITUTION_INFO.schoolName}</strong> and <strong>{INSTITUTION_INFO.coachingName}</strong>. Our mission is to provide an inclusive, disciplined, and empowering learning environment where every student gains both strong academic fundamentals and character values essential for future success."
              </p>

              <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-500 font-medium italic">
                Principal's message will be added here after final approval.
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-base font-bold font-heading text-navy-900">
                    {INSTITUTION_INFO.principalName}
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">
                    Principal & Academic Director
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-800 bg-gold-100 px-3 py-1.5 rounded-full">
                  <GraduationCap className="w-4 h-4 text-gold-700" />
                  <span>Vaishali Campus</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a href="#enquire" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full justify-center">
                  Schedule Desk Meeting
                </Button>
              </a>
              <a href={`tel:${INSTITUTION_INFO.contactNumber}`} className="w-full sm:w-auto">
                <Button variant="outline" size="md" leftIcon={<Phone className="w-4 h-4" />} className="w-full justify-center">
                  Call Desk: {INSTITUTION_INFO.contactNumber}
                </Button>
              </a>
            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
};
