'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Benefit {
  icon: string
  mascot?: string
  title: string
  desc: string
  image: string
  stamp: string
}

interface HealthBenefitsShowcaseProps {
  benefits: Benefit[]
}

export default function HealthBenefitsShowcase({ benefits }: HealthBenefitsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeBenefit = benefits[activeIndex] || benefits[0]

  return (
    <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
      
      {/* Left: Dynamic Visual Magazine Canvas (5 cols) */}
      <div className='lg:col-span-5 flex flex-col items-center justify-center p-2'>
        <div className='relative w-full aspect-[4/3] lg:aspect-square rounded-[32px] overflow-hidden border border-outline/10 shadow-2xl bg-surface-cream/30 group'>
          
          {/* Glassmorphic Stamp Overlay */}
          <div className='absolute top-4 right-4 bg-white/75 backdrop-blur-md border border-white/40 text-primary font-bold text-[10px] tracking-widest uppercase py-1.5 px-3.5 rounded-full shadow-md z-20 select-none'>
            ✨ {activeBenefit.stamp}
          </div>

          {/* Smooth Image Cross-Fade & Scale Transition */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className='w-full h-full'
            >
              <img
                src={activeBenefit.image}
                alt={activeBenefit.title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none'
              />
            </motion.div>
          </AnimatePresence>

          {/* Radial decorative vignette shadow overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none' />
          
        </div>
      </div>

      {/* Right: Interactive Narrative Cards List (7 cols) */}
      <div className='lg:col-span-7 space-y-4 sm:space-y-6'>
        <div className='space-y-4'>
          {benefits.map((benefit, index) => {
            const isSelected = activeIndex === index

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-5 sm:p-6 rounded-3xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden flex items-start gap-4 sm:gap-6 ${
                  isSelected
                    ? 'bg-surface border-primary shadow-md ring-2 ring-primary/5 scale-[1.01]'
                    : 'bg-surface-container/40 border-outline/10 hover:bg-surface hover:border-primary/20'
                }`}
              >
                {/* Custom glowing circular mascot container */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border border-outline/10 transition-all duration-300 p-1.5 select-none overflow-hidden flex-shrink-0 ${
                    isSelected
                      ? 'bg-white shadow-md ring-2 ring-primary/20 scale-105'
                      : 'bg-surface-cream text-primary'
                  }`}
                >
                  {benefit.mascot ? (
                    <img
                      src={benefit.mascot}
                      alt={benefit.title}
                      className='w-full h-full object-contain'
                    />
                  ) : (
                    <span className='material-symbols-outlined text-xl sm:text-2xl'>
                      {benefit.icon}
                    </span>
                  )}
                </div>

                {/* Narrative content block */}
                <div className='flex-1 space-y-1 sm:space-y-1.5'>
                  <h4 className='font-headline font-bold text-primary text-base sm:text-lg flex items-center gap-2'>
                    {benefit.title}
                    {isSelected && (
                      <span className='w-1.5 h-1.5 rounded-full bg-accent animate-ping' />
                    )}
                  </h4>
                  <p className='text-xs sm:text-sm text-text-muted leading-relaxed font-light line-clamp-2 sm:line-clamp-none'>
                    {benefit.desc}
                  </p>
                </div>

                {/* Animated active progress indicator bar */}
                {isSelected && (
                  <motion.div
                    className='absolute bottom-0 left-0 right-0 h-1 bg-primary'
                    layoutId='active-benefit-bar'
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}
