import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Edit3, PhoneCall, MessageSquare, GraduationCap, ArrowRight } from 'lucide-react';

export const AdmissionSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Edit3,
      title: "Enquire Online or In-Person",
      description: "Fill out the quick enquiry form or visit our campus at 22 Mile Chok, Vaishali."
    },
    {
      number: "02",
      icon: PhoneCall,
      title: "Talk to Academic Counsellor",
      description: "Discuss class availability, medium (Hindi/English), streams, or competitive preparation."
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Begin Your Learning Journey",
      description: "Complete formal registration and join the regular school or coaching batch."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container size="default">
        
        <SectionHeading
          badge="Enrollment Process"
          title="Admissions & Enquiries"
          subtitle="Simple 3-step admission process for MG Oriental School and New Era Coaching Centre."
          align="center"
        />

        {/* 3 Steps Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-premium transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-black font-heading text-slate-300 group-hover:text-gold-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-navy-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Action Box */}
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl border border-navy-700/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3 text-white">
            Ready to Enroll or Need Guidance?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Contact our admissions desk directly via phone, WhatsApp, or fill out the enquiry form below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#enquire" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />} className="w-full justify-center">
                Apply / Enquire Now
              </Button>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" leftIcon={<MessageSquare className="w-5 h-5 text-emerald-400" />} className="w-full justify-center border-slate-700 text-white hover:bg-white/10">
                WhatsApp Us
              </Button>
            </a>

            <a href={`tel:${INSTITUTION_INFO.contactNumber}`} className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" leftIcon={<PhoneCall className="w-5 h-5 text-gold-400" />} className="w-full justify-center">
                Call: {INSTITUTION_INFO.contactNumber}
              </Button>
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
};
