import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-gold-500/10 via-academic-500/20 to-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 text-center space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">Admissions Open</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
          Admissions Open
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Begin your child's academic journey with MG Oriental School and New Era Coaching Centre.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#enquire" className="w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto justify-center font-extrabold shadow-gold-glow"
            >
              Enquire Now
            </Button>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              leftIcon={<MessageSquare className="w-5 h-5 text-emerald-400" />}
              className="w-full sm:w-auto justify-center border-slate-700 text-white hover:bg-white/10"
            >
              WhatsApp Us
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
