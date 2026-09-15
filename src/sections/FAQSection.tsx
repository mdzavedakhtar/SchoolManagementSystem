import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AccordionItem } from '../components/ui/Accordion';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs = [
    {
      id: "faq-1",
      question: "Which classes does MG Oriental School offer?",
      answer: "MG Oriental School offers schooling from Nursery to Class VIII following the CBSE pattern of education."
    },
    {
      id: "faq-2",
      question: "What classes does New Era Coaching Centre cover?",
      answer: "New Era Coaching Centre provides comprehensive coaching for students from Nursery all the way up to Class XII."
    },
    {
      id: "faq-3",
      question: "Do you offer Hindi and English medium coaching?",
      answer: "Yes, both MG Oriental School and New Era Coaching Centre provide instruction and coaching in Hindi and English medium."
    },
    {
      id: "faq-4",
      question: "Which streams are available for senior secondary coaching?",
      answer: "For Class XI and XII, New Era Coaching Centre provides specialized coaching across Science (Physics, Chemistry, Maths, Biology), Commerce (Accountancy, Business Studies, Economics), and Arts streams."
    },
    {
      id: "faq-5",
      question: "Do you provide Polytechnic preparation?",
      answer: "Yes, New Era Coaching Centre runs specialized competitive exam preparation batches for Polytechnic diploma entrance tests."
    },
    {
      id: "faq-6",
      question: "Do you provide Paramedical preparation?",
      answer: "Yes, we offer targeted coaching for Paramedical entrance examinations with focused preparation in Science and General Knowledge."
    },
    {
      id: "faq-7",
      question: "Where is the institution located?",
      answer: `We are located at ${INSTITUTION_INFO.address.full}.`
    },
    {
      id: "faq-8",
      question: "How can I enquire about admission?",
      answer: `You can submit the online enquiry form on this website, contact us directly via phone at ${INSTITUTION_INFO.contactNumber}, or click any of our WhatsApp CTA buttons to send us an instant message.`
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container size="default" className="max-w-4xl">
        
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Have Questions? We Have Answers."
          subtitle="Clear information about classes, medium of instruction, streams, and admissions."
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold font-heading text-navy-900">Still have questions?</h4>
            <p className="text-xs text-slate-600">Connect directly with our admissions desk.</p>
          </div>
          <a href="#enquire" className="text-xs font-bold text-academic-800 hover:text-navy-900 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-colors">
            Ask Admission Desk →
          </a>
        </div>

      </Container>
    </section>
  );
};
