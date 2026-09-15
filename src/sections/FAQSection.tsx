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
      answer: "MG Oriental School currently offers classes from Nursery to VIII under a CBSE-pattern academic approach."
    },
    {
      id: "faq-2",
      question: "Which classes does New Era Coaching Centre cover?",
      answer: "New Era Coaching Centre provides academic coaching from Nursery to Class XII."
    },
    {
      id: "faq-3",
      question: "Which mediums are supported?",
      answer: "Coaching support is available for both Hindi and English medium students."
    },
    {
      id: "faq-4",
      question: "Which streams are available?",
      answer: "Science, Commerce and Arts streams are available for senior classes, subject to the centre's current batch structure."
    },
    {
      id: "faq-5",
      question: "Do you provide competitive exam preparation?",
      answer: "Yes. The centre provides preparation support for Polytechnic and Paramedical opportunities."
    },
    {
      id: "faq-6",
      question: "Where are you located?",
      answer: "22 Mile Chok, Tejpurwa, Mahua Road, Vaishali, Bihar – 843102."
    },
    {
      id: "faq-7",
      question: "How can I enquire about admission?",
      answer: "You can contact the institution through the enquiry form, phone or WhatsApp."
    },
    {
      id: "faq-8",
      question: "How can I contact the institution?",
      answer: "Call or WhatsApp on +91 9934795178."
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
