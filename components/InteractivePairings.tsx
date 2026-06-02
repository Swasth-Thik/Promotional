'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface InteractivePairingsProps {
  pairings: string[]
}

export default function InteractivePairings({ pairings }: InteractivePairingsProps) {
  const [hoveredPairing, setHoveredPairing] = useState<number | null>(null)

  const getPairingIcon = (name: string) => {
    const lower = name.toLowerCase()
    if (lower.includes('dal') || lower.includes('khichuri') || lower.includes('rice')) return 'dinner_dining'
    if (lower.includes('luchi') || lower.includes('bread') || lower.includes('paratha')) return 'bakery_dining'
    if (lower.includes('fish') || lower.includes('seafood')) return 'set_meal'
    return 'restaurant'
  }

  return (
    <div className='bg-[#1a1b18] border border-[#2e302a] p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px] w-full'>
      {/* Chalkboard Dust Overlay Pattern */}
      <div className='absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none opacity-20' />

      <div className='space-y-6 relative z-10'>
        <div>
          <span className='text-[10px] font-bold tracking-widest text-accent-sweet uppercase border border-accent-sweet/30 bg-accent-sweet/5 py-1 px-3 rounded-full'>
            💡 Kitchen Pairing Tip
          </span>
          <h4 className='font-headline font-bold text-[#fdfdf5] text-xl sm:text-2xl mt-3 flex items-center gap-2'>
            <span className='material-symbols-outlined text-accent text-2xl'>restaurant</span>
            Perfect Pairings
          </h4>
        </div>

        <p className='text-xs sm:text-sm text-[#f5f5e9]/70 leading-relaxed'>
          Elevate your everyday dining. This authentic blend pairs exquisitely with:
        </p>

        <div className='space-y-4 pt-2 relative pl-8'>
          {pairings.map((pairing, index) => {
            const isHovered = hoveredPairing === index
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredPairing(index)}
                onMouseLeave={() => setHoveredPairing(null)}
                className={`relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-[#252721] border-accent/40 shadow-lg scale-[1.01]'
                    : 'bg-[#20211e] border-[#2e302a]'
                }`}
              >
                {/* Pointing hand 👉 guide sitting on the left track */}
                {isHovered && (
                  <motion.div
                    layoutId="pairingHandPointer"
                    className="absolute left-[-32px] text-2xl select-none pointer-events-none"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      x: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                      layout: { type: "spring", stiffness: 220, damping: 20 }
                    }}
                  >
                    👉
                  </motion.div>
                )}

                <div className='flex items-center gap-3.5'>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isHovered ? 'bg-accent/25' : 'bg-[#2b2d28]'
                  }`}>
                    <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${
                      isHovered ? 'text-accent' : 'text-[#f5f5e9]/55'
                    }`}>
                      {getPairingIcon(pairing)}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold transition-colors duration-300 ${
                    isHovered ? 'text-accent' : 'text-[#f5f5e9]/90'
                  }`}>
                    {pairing}
                  </span>
                </div>

                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isHovered ? 'bg-accent scale-125' : 'bg-[#3b3d37]'
                }`} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
