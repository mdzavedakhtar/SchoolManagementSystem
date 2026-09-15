import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Navigation Primitives
import { Navbar } from './components/Navbar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Landing Page Sections
import { HeroSection } from './sections/HeroSection';
import { TrustStripSection } from './sections/TrustStripSection';
import { SplitSchoolCoachingSection } from './sections/SplitSchoolCoachingSection';
import { AboutSection } from './sections/AboutSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';
import { AcademicProgramsSection } from './sections/AcademicProgramsSection';
import { StreamsSection } from './sections/StreamsSection';
import { CompetitiveSection } from './sections/CompetitiveSection';
import { PrincipalSection } from './sections/PrincipalSection';
import { FacultySection } from './sections/FacultySection';
import { ResultsSection } from './sections/ResultsSection';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { StudentExperienceSection } from './sections/StudentExperienceSection';
import { GallerySection } from './sections/GallerySection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { AdmissionSection } from './sections/AdmissionSection';
import { EnquiryFormSection } from './sections/EnquiryFormSection';
import { FAQSection } from './sections/FAQSection';
import { LocationSection } from './sections/LocationSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bgLight text-darkText font-sans relative selection:bg-gold-500 selection:text-navy-950">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <HeroSection />
        <TrustStripSection />
        <SplitSchoolCoachingSection />
        <AboutSection />
        <WhyChooseUsSection />
        <AcademicProgramsSection />
        <StreamsSection />
        <CompetitiveSection />
        <GallerySection />
        <PrincipalSection />
        <FacultySection />
        <ResultsSection />
        <FacilitiesSection />
        <StudentExperienceSection />
        <TestimonialsSection />
        <AdmissionSection />
        <EnquiryFormSection />
        <FAQSection />
        <LocationSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Desktop WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Action Bar */}
      <MobileBottomBar />
    </div>
  );
};

export default App;
