import { motion } from 'motion/react';
import { VietnamFlag, CanadaFlag } from './Flags';

export function HeaderBanner() {
  return (
    <header className="relative overflow-hidden bg-[#6a1017] text-white shadow-2xl rounded-b-3xl h-[800px] min-h-[800px] flex flex-col justify-center items-center">
      {/* Background layer matching uploaded image: deep wine red with two soft radial glow spots */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* SVG background for flawless high-DPI radial spotlights */}
        <svg
          viewBox="0 0 1000 420"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="header-base-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5a0b10" />
              <stop offset="30%" stopColor="#6e1118" />
              <stop offset="70%" stopColor="#6b1016" />
              <stop offset="100%" stopColor="#48070c" />
            </linearGradient>

            {/* Left radial spotlight from reference image */}
            <radialGradient id="left-spotlight" cx="26%" cy="50%" rx="28%" ry="48%">
              <stop offset="0%" stopColor="#b61f28" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#a31821" stopOpacity="0.82" />
              <stop offset="68%" stopColor="#751118" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#580b10" stopOpacity="0" />
            </radialGradient>

            {/* Right radial spotlight from reference image */}
            <radialGradient id="right-spotlight" cx="74%" cy="50%" rx="28%" ry="48%">
              <stop offset="0%" stopColor="#b61f28" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#a31821" stopOpacity="0.82" />
              <stop offset="68%" stopColor="#751118" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#580b10" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Base deep red gradient */}
          <rect width="100%" height="100%" fill="url(#header-base-bg)" />

          {/* Two spotlight lobes with subtle ambient breathing */}
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#left-spotlight)"
            animate={{ opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#right-spotlight)"
            animate={{ opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </svg>

        {/* Ambient center vignette to deepen the contrast */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#540a0f]/15 to-[#3b0508]/65" />
      </div>

      {/* Ánh sáng chạy nhẹ qua (Gentle sweeping light sheen effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* Primary soft angled light beam */}
        <motion.div
          className="absolute -inset-y-12 w-64 -skew-x-20 blur-sm pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.01) 15%, rgba(255,235,235,0.12) 35%, rgba(255,255,255,0.26) 50%, rgba(255,248,240,0.32) 52%, rgba(255,255,255,0.26) 54%, rgba(255,235,235,0.12) 65%, rgba(255,255,255,0.01) 85%, transparent 100%)',
          }}
          animate={{
            x: ['-140%', '380%', '380%'],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 6.5,
            times: [0, 0.55, 1],
            repeat: Infinity,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />

        {/* Wider diffused ambient glow traveling with the beam */}
        <motion.div
          className="absolute -inset-y-16 w-96 -skew-x-20 blur-2xl pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,220,180,0.03) 25%, rgba(255,240,220,0.14) 50%, rgba(255,220,180,0.03) 75%, transparent 100%)',
          }}
          animate={{
            x: ['-150%', '350%', '350%'],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 6.5,
            times: [0, 0.55, 1],
            repeat: Infinity,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 text-center flex flex-col items-center justify-center my-auto">
        {/* Flag pairing - no border frames, equal size */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8" aria-hidden="true">
          <VietnamFlag className="w-16 h-11 sm:w-24 sm:h-16 md:w-28 md:h-19 drop-shadow-xl" />
          <CanadaFlag className="w-16 h-11 sm:w-24 sm:h-16 md:w-28 md:h-19 drop-shadow-xl" />
        </div>

        {/* Main Title Badge - larger text, white color, transparent background */}
        <div className="inline-block bg-transparent text-lg sm:text-xl md:text-2xl font-black tracking-widest uppercase mb-5 text-white drop-shadow-md">
          VIỆT NAM - CANADA
        </div>

        {/* Main Title - preserved exact 3-line format */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-snug sm:leading-tight text-white drop-shadow-xl max-w-3xl mx-auto">
          Triển vọng tăng cường hợp tác
          <br />
          song phương và đa phương
          <br />
          trên nhiều lĩnh vực
        </h1>
      </div>
    </header>
  );
}
