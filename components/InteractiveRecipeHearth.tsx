'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface InteractiveRecipeHearthProps {
  slug: string
  story: string
  image: string
  pairings: string[]
}

export default function InteractiveRecipeHearth({
  slug,
  story,
  image,
  pairings,
}: InteractiveRecipeHearthProps) {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [hoveredPairing, setHoveredPairing] = useState<number | null>(null)

  const steps = [
    {
      id: 0,
      title: 'Select & Cut',
      subtitle: 'Crisp green mangoes selected at dawn',
      desc: 'We hand-pick fresh green mangoes early in the morning when they are extremely firm, washing and cutting them into thick traditional slices.',
      badge: '🌱 Fresh Harvest',
      icon: 'nature_people'
    },
    {
      id: 1,
      title: 'Stone-Grind Spices',
      subtitle: 'Dry-roasted separately on iron tawas',
      desc: 'Each spice (mustard, fenugreek, fennel, nigella seeds) is slow-roasted individually before stone-grinding to unlock their essential aromatic oils.',
      badge: '🌶 Spice Craft',
      icon: 'spa'
    },
    {
      id: 2,
      title: 'Sun Barni Curing',
      subtitle: 'Maturing slowly under summer sun',
      desc: 'The spiced mangoes are cured inside authentic clay jars (Barnis) for 3 full days, absorbing spices naturally under the warm sun.',
      badge: '☀️ Sun Cured',
      icon: 'wb_sunny'
    },
    {
      id: 3,
      title: 'Serve with Love',
      subtitle: 'Infused with cold-pressed mustard oil',
      desc: 'Sealed instantly in airtight pouches with pure, cold-pressed mustard oil to lock in the freshness and traditional flavor profiles.',
      badge: '🍽 Ready to Serve',
      icon: 'restaurant'
    }
  ]

  const getPairingIcon = (name: string) => {
    const lower = name.toLowerCase()
    if (lower.includes('dal') || lower.includes('khichuri') || lower.includes('rice')) return 'dinner_dining'
    if (lower.includes('luchi') || lower.includes('bread') || lower.includes('paratha')) return 'bakery_dining'
    if (lower.includes('fish') || lower.includes('seafood')) return 'set_meal'
    return 'restaurant'
  }

  return (
    <div className='w-full max-w-6xl mx-auto space-y-8'>
      {/* 2-Column interactive cooking grid */}
      <div className='grid lg:grid-cols-12 gap-8 items-stretch'>
        
        {/* LEFT COLUMN: Cooking Stages Stepper (Col Span 5) */}
        <div className='lg:col-span-5 flex flex-col justify-between gap-4 bg-[#fbf9f4] border border-outline/10 p-6 sm:p-8 rounded-[32px] shadow-lg'>
          <div>
            <span className='text-[10px] font-bold tracking-widest text-accent uppercase border border-accent/20 bg-accent/5 py-1.5 px-3 rounded-full'>
              🍳 Hearth Timeline
            </span>
            <h3 className='text-2xl font-headline font-bold text-primary mt-3'>
              Artisan Preparation
            </h3>
            <p className='text-xs text-text-muted mt-1'>
              Click a step to experience how we handcraft each batch step-by-step
            </p>
          </div>

          {/* Stepper Buttons list */}
          <div className='flex flex-col gap-3.5 my-6 flex-1 justify-center'>
            {steps.map((step) => {
              const isActive = activeStep === step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 relative overflow-hidden select-none ${
                    isActive
                      ? 'bg-white border-primary shadow-md scale-[1.01]'
                      : 'bg-white/40 border-outline/5 hover:bg-white hover:border-primary/20'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive ? 'bg-primary text-white' : 'bg-outline/5 text-text-muted'
                  }`}>
                    <span className='material-symbols-outlined text-base'>{step.icon}</span>
                  </div>

                  <div className='space-y-0.5 flex-1'>
                    <div className='flex items-center justify-between gap-2'>
                      <span className='text-xs font-bold text-primary'>{step.title}</span>
                      <span className={`text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-outline/5 text-text-muted'
                      }`}>
                        Stage 0{step.id + 1}
                      </span>
                    </div>
                    <p className='text-[10px] text-text-muted leading-relaxed'>{step.subtitle}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className='pt-4 border-t border-outline/10 text-center italic font-serif text-[11px] text-text-muted px-2'>
            "Traditional pickling is an art of patience—allowing spice oils to infuse slowly under the Kolkata sun."
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Stove Showcase (Col Span 7) */}
        <div className='lg:col-span-7 bg-[#21291b] text-[#f7f5ee] p-8 sm:p-10 rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px] border border-[#2e3727]'>
          {/* Subtle background glow */}
          <div className='absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none' />

          {/* Dynamic Step Header */}
          <div className='flex items-center justify-between border-b border-[#eedfa7]/10 pb-4 relative z-10'>
            <div>
              <span className='text-[10px] font-bold tracking-widest text-[#eedfa7] uppercase bg-[#eedfa7]/5 border border-[#eedfa7]/30 py-1 px-3 rounded-full'>
                {steps[activeStep].badge}
              </span>
              <h4 className='font-headline font-bold text-[#eedfa7] text-lg sm:text-xl mt-2'>
                {steps[activeStep].title}
              </h4>
            </div>
            <span className='text-xs text-[#eedfa7]/75 font-serif italic'>
              Step 0{activeStep + 1} of 4
            </span>
          </div>

          {/* DYNAMIC VISUAL STOVE CANVAS */}
          <div className='relative flex-1 flex items-center justify-center py-6 min-h-[220px]'>
            
            {/* STAGE 01: Select & Cut (Green Mango slices slide down) */}
            <AnimatePresence mode='wait'>
              {activeStep === 0 && (
                <motion.div
                  key='stage-1'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='relative w-full max-w-[280px] h-full flex flex-col items-center justify-center'
                >
                  <img src={image} className='w-40 h-40 object-contain drop-shadow-2xl opacity-40 filter blur-sm' alt='Cut background' />
                  
                  {/* Floating cut mango slices dropping */}
                  <motion.div
                    initial={{ y: -80, opacity: 0, rotate: -15 }}
                    animate={{ y: 0, opacity: 1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 15 }}
                    className='absolute top-4 left-6 bg-[#eedfa7] border-2 border-[#21291b] p-3 rounded-2xl shadow-xl flex items-center gap-2'
                  >
                    <span className='text-xl'>🌱</span>
                    <span className='text-[10px] font-bold text-[#21291b] uppercase tracking-wider'>Crisp Green Mango</span>
                  </motion.div>

                  <motion.div
                    initial={{ y: -100, opacity: 0, rotate: 20 }}
                    animate={{ y: 20, opacity: 1, rotate: -10 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 0.15 }}
                    className='absolute bottom-6 right-6 bg-[#eedfa7] border-2 border-[#21291b] p-3 rounded-2xl shadow-xl flex items-center gap-2'
                  >
                    <span className='text-xl'>🔪</span>
                    <span className='text-[10px] font-bold text-[#21291b] uppercase tracking-wider'>Hand Cut Slices</span>
                  </motion.div>
                </motion.div>
              )}

              {/* STAGE 02: Stone-Grind Spices (Spice badges dropping) */}
              {activeStep === 1 && (
                <motion.div
                  key='stage-2'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='relative w-full max-w-[300px] h-full flex flex-col items-center justify-center gap-4'
                >
                  <div className='flex flex-wrap justify-center gap-3 relative z-10'>
                    {['🌶 Kashmiri Chili', '🟡 Turmeric Seeds', '🌱 Fenugreek', '⚫ Nigella Seeds'].map((spice, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ y: -40, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: idx * 0.1 }}
                        className='bg-[#eedfa7] text-[#21291b] border border-[#21291b] px-3.5 py-2 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1.5'
                      >
                        <span className='w-1.5 h-1.5 rounded-full bg-[#21291b]' />
                        {spice}
                      </motion.div>
                    ))}
                  </div>
                  <p className='text-[10px] text-[#eedfa7]/80 text-center max-w-xs italic leading-relaxed pt-2'>
                    "Stone-ground spices are roasted separately on flat iron tawas to lock in natural essential oils."
                  </p>
                </motion.div>
              )}

              {/* STAGE 03: Sun Curing (Sun rays casting over Barni) */}
              {activeStep === 2 && (
                <motion.div
                  key='stage-3'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='relative w-full max-w-[280px] h-full flex flex-col items-center justify-center'
                >
                  {/* Glowing sun in the background */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                    className='absolute top-[-30px] w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 filter blur-xl'
                  />
                  <span className='material-symbols-outlined text-yellow-400 text-6xl animate-pulse relative z-10'>
                    wb_sunny
                  </span>

                  <img src={image} className='w-36 h-36 object-contain drop-shadow-2xl relative z-10 mt-3' alt='Clay Barni Sun Cured' />
                  
                  <span className='text-[9px] font-black uppercase tracking-widest text-[#eedfa7] mt-3 border border-[#eedfa7]/20 bg-[#eedfa7]/5 px-2.5 py-1 rounded-full'>
                    ☀️ 3 Days Sun Maturation
                  </span>
                </motion.div>
              )}

              {/* STAGE 04: Serve with Love (Perfect pairings platter cards) */}
              {activeStep === 3 && (
                <motion.div
                  key='stage-4'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className='w-full space-y-4 pt-2'
                >
                  <p className='text-xs text-[#eedfa7]/80 text-center max-w-md mx-auto mb-2 leading-relaxed'>
                    Our final blend is ready to serve! Handcrafted to elevate local gourmet menus:
                  </p>

                  <div className='grid sm:grid-cols-2 gap-3 pl-8 relative'>
                    {pairings.map((pairing, index) => {
                      const isHovered = hoveredPairing === index
                      return (
                        <div
                          key={index}
                          onMouseEnter={() => setHoveredPairing(index)}
                          onMouseLeave={() => setHoveredPairing(null)}
                          className={`relative flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            isHovered
                              ? 'bg-[#252721] border-[#eedfa7]/40 shadow-lg scale-[1.02]'
                              : 'bg-[#20211e] border-[#2e302a]'
                          }`}
                        >
                          {/* Pointing hand 👉 guide sitting on the left track */}
                          {isHovered && (
                            <motion.div
                              layoutId="hearthPairingHandPointer"
                              transition={{ type: "spring", stiffness: 220, damping: 20 }}
                              className="absolute left-[-32px] text-2xl select-none pointer-events-none"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                            >
                              👉
                            </motion.div>
                          )}

                          <div className='flex items-center gap-3'>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                              isHovered ? 'bg-[#eedfa7]/20 text-[#eedfa7]' : 'bg-[#2b2d28] text-[#f7f5ee]/55'
                            }`}>
                              <span className='material-symbols-outlined text-base'>
                                {getPairingIcon(pairing)}
                              </span>
                            </div>
                            <span className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                              isHovered ? 'text-[#eedfa7]' : 'text-[#f7f5ee]/90'
                            }`}>
                              {pairing}
                            </span>
                          </div>

                          <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
                            isHovered ? 'bg-[#eedfa7] scale-125' : 'bg-[#3b3d37]'
                          }`} />
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Recipe Story Quotation */}
          <div className='border-t border-[#eedfa7]/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 relative z-10'>
            <p className='text-xs text-[#f7f5ee]/80 leading-relaxed italic max-w-lg font-serif'>
              "{story}"
            </p>
            <span className='text-[10px] font-bold text-[#eedfa7] uppercase tracking-wider flex-shrink-0 flex items-center gap-1.5'>
              <span className='material-symbols-outlined text-sm'>history_edu</span>
              Passed Down Generations
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
