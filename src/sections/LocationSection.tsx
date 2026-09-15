import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { MapPin, Navigation, Phone, MessageSquare } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${INSTITUTION_INFO.schoolName}, ${INSTITUTION_INFO.address.full}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <SectionHeading
          badge="Campus Location"
          title="Visit Our Institution"
          subtitle="Conveniently situated at 22 Mile Chok, Mahua Road, Vaishali."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-navy-700/60 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center mb-6 shadow-gold-glow">
                <MapPin className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-extrabold font-heading text-white mb-2">
                {INSTITUTION_INFO.schoolName}
              </h3>
              <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-6">
                & {INSTITUTION_INFO.coachingName}
              </p>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base border-t border-navy-800 pt-6 mb-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gold-400 flex-shrink-0">Spot:</span>
                  <span>{INSTITUTION_INFO.address.spot}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gold-400 flex-shrink-0">Village:</span>
                  <span>{INSTITUTION_INFO.address.village}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gold-400 flex-shrink-0">Road:</span>
                  <span>{INSTITUTION_INFO.address.road}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gold-400 flex-shrink-0">District:</span>
                  <span>{INSTITUTION_INFO.address.district}, {INSTITUTION_INFO.address.state}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gold-400 flex-shrink-0">PIN Code:</span>
                  <span className="font-mono text-gold-300 font-bold">{INSTITUTION_INFO.address.pin}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-navy-800">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="gold"
                  size="md"
                  leftIcon={<Navigation className="w-4 h-4" />}
                  className="w-full justify-center font-bold"
                >
                  Get Directions on Google Maps
                </Button>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${INSTITUTION_INFO.contactNumber}`}>
                  <Button variant="outline" size="md" leftIcon={<Phone className="w-4 h-4" />} className="w-full justify-center border-navy-700 text-white hover:bg-white/10">
                    Call Desk
                  </Button>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="md" leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />} className="w-full justify-center border-navy-700 text-white hover:bg-white/10">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Embed Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 min-h-[380px] relative flex flex-col"
          >
            <iframe
              title="Institution Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent("22 Mile Chok, Tejpurwa, Mahua Road, Vaishali, Bihar 843102")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full min-h-[380px] border-0 rounded-3xl"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

        </div>

      </Container>
    </section>
  );
};
