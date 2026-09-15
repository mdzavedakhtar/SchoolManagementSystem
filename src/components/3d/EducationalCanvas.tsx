import React, { Suspense, useState, useEffect, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { BookOpen, GraduationCap, Award, Compass } from 'lucide-react';

// Dynamic lazy import of 3D Academic Scene inside R3F Canvas
const AcademicScene = lazy(() =>
  import('./AcademicScene').then((module) => ({ default: module.AcademicScene }))
);

const CanvasLoader: React.FC = () => (
  <Html center>
    <div className="flex flex-col items-center justify-center text-center p-5 min-w-[200px] bg-navy-950/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Skeleton Shimmer Pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent animate-pulse pointer-events-none" />

      {/* Glowing Pulse Ring */}
      <div className="relative w-12 h-12 flex items-center justify-center mb-3">
        <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-md animate-ping opacity-60" />
        <div className="absolute inset-0 rounded-full border-2 border-gold-500/30 border-t-gold-400 animate-spin" />
        <GraduationCap className="w-6 h-6 text-gold-400 relative z-10" />
      </div>

      <span className="text-xs font-bold font-heading text-slate-200 tracking-wider uppercase animate-pulse">
        Loading 3D Visual...
      </span>
    </div>
  </Html>
);

export const EducationalCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Mobile/tablet viewport check (< 1024px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // WebGL capability check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    // Reduced motion preference check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // WebGL Fallback UI for unsupported browsers or reduced motion preference
  if (!hasWebGL || prefersReducedMotion) {
    return (
      <div className="w-full h-full lg:h-[540px] flex flex-col items-center justify-center relative rounded-none lg:rounded-3xl bg-transparent lg:bg-gradient-to-br lg:from-navy-900/90 lg:via-navy-950/95 lg:to-slate-900/90 p-6 sm:p-8 shadow-none lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] border-0 lg:border lg:border-white/10 backdrop-blur-none lg:backdrop-blur-md overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.18),rgba(30,58,138,0.12)_45%,transparent_75%)] pointer-events-none z-0 opacity-70 lg:opacity-100" />

        <div className="relative z-10 text-center space-y-4 sm:space-y-6 max-w-sm">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shadow-gold-glow">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white">MG Oriental & New Era</h3>
            <p className="text-xs text-slate-300 mt-1">Empowering Academic Excellence & Competitive Success</p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2 text-left">
            <div className="bg-white/[0.04] backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5 transition-all active:scale-[0.97] active:border-gold-400/50 hover:bg-white/[0.08]">
              <div className="w-7 h-7 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-sm">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs text-slate-200 font-semibold tracking-tight">CBSE Pattern</span>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5 transition-all active:scale-[0.97] active:border-gold-400/50 hover:bg-white/[0.08]">
              <div className="w-7 h-7 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-sm">
                <Award className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs text-slate-200 font-semibold tracking-tight">Nursery – XII</span>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5 transition-all active:scale-[0.97] active:border-gold-400/50 hover:bg-white/[0.08]">
              <div className="w-7 h-7 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-sm">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs text-slate-200 font-semibold tracking-tight">Polytechnic</span>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5 transition-all active:scale-[0.97] active:border-gold-400/50 hover:bg-white/[0.08]">
              <div className="w-7 h-7 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-sm">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs text-slate-200 font-semibold tracking-tight">Paramedical</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full lg:h-[540px] relative rounded-none lg:rounded-3xl overflow-hidden bg-transparent lg:bg-gradient-to-br lg:from-navy-900/90 lg:via-navy-950/95 lg:to-slate-900/90 border-0 lg:border lg:border-white/10 shadow-none lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-none lg:backdrop-blur-md">
      {/* Radial Ambient Glow behind 3D Visual Objects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.18),rgba(30,58,138,0.12)_45%,transparent_75%)] pointer-events-none z-0 opacity-70 lg:opacity-100" />

      <Canvas
        camera={{ position: [0, 0, 7.0], fov: 45 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: !isMobile, powerPreference: 'high-performance', alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <AcademicScene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EducationalCanvas;
