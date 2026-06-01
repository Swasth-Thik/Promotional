'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Ingredient {
  name: string
  desc: string
}

interface InteractiveIngredientsProps {
  ingredients: Ingredient[]
}

// Specialized details, custom mascot images, colors, and progress gauges for each culinary ingredient
const ingredientMetadata: Record<
  string,
  {
    mascot: string
    textColor: string
    bgColor: string
    barBg: string
    glowColor: string
    borderColor: string
    gauges: { label: string; value: number }[]
  }
> = {
  'Raw Mangoes': {
    mascot: '/mascot_raw_mango.png',
    textColor: 'text-green-700',
    bgColor: 'bg-green-50',
    barBg: 'bg-green-600',
    borderColor: 'hover:border-green-300',
    glowColor: 'rgba(22, 163, 74, 0.12)',
    gauges: [
      { label: 'Tanginess', value: 90 },
      { label: 'Crispness', value: 85 },
    ],
  },
  'Jaggery': {
    mascot: '/mascot_jaggery.png',
    textColor: 'text-amber-700',
    bgColor: 'bg-amber-50',
    barBg: 'bg-amber-600',
    borderColor: 'hover:border-amber-300',
    glowColor: 'rgba(217, 119, 6, 0.12)',
    gauges: [
      { label: 'Sweetness', value: 95 },
      { label: 'Flavor Richness', value: 80 },
    ],
  },
  'Red Chili': {
    mascot: '/mascot_red_chili.png',
    textColor: 'text-red-700',
    bgColor: 'bg-red-50',
    barBg: 'bg-red-600',
    borderColor: 'hover:border-red-300',
    glowColor: 'rgba(220, 38, 38, 0.12)',
    gauges: [
      { label: 'Heat & Spiciness', value: 95 },
      { label: 'Warmth', value: 85 },
    ],
  },
  'Mustard Oil': {
    mascot: '/mascot_mustard_oil.png',
    textColor: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    barBg: 'bg-yellow-500',
    borderColor: 'hover:border-yellow-300',
    glowColor: 'rgba(202, 138, 4, 0.12)',
    gauges: [
      { label: 'Pungency', value: 75 },
      { label: 'Aroma Infusion', value: 90 },
    ],
  },
  'Spices': {
    mascot: '/mascot_spices.png',
    textColor: 'text-stone-700',
    bgColor: 'bg-stone-50',
    barBg: 'bg-stone-600',
    borderColor: 'hover:border-stone-300',
    glowColor: 'rgba(120, 113, 108, 0.12)',
    gauges: [
      { label: 'Aromatic Zest', value: 95 },
      { label: 'Warmth Blend', value: 80 },
    ],
  },
}

export default function InteractiveIngredients({
  ingredients,
}: InteractiveIngredientsProps) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
      {ingredients.map((ingredient, index) => {
        // Fallback metadata if a new ingredient is added
        const meta = ingredientMetadata[ingredient.name] || {
          mascot: '/logo.png',
          textColor: 'text-primary',
          bgColor: 'bg-primary/5',
          barBg: 'bg-primary',
          borderColor: 'hover:border-primary/30',
          glowColor: 'rgba(124, 45, 18, 0.05)',
          gauges: [
            { label: 'Purity', value: 100 },
            { label: 'Flavor Level', value: 85 },
          ],
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{
              y: -8,
              boxShadow: `0 20px 40px ${meta.glowColor}`,
            }}
            className={`bg-surface-container p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-outline/10 transition-all duration-500 ${meta.borderColor} group flex flex-col justify-between h-full`}
          >
            <div>
              {/* Premium Illustrated Mascot Sticker Container */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 ${meta.bgColor} rounded-full flex items-center justify-center mb-3 sm:mb-5 transition-transform duration-300 group-hover:scale-115 p-1 border border-outline/5 overflow-hidden shadow-sm`}
              >
                <img
                  src={meta.mascot}
                  alt={ingredient.name}
                  className='w-full h-full object-contain'
                  loading='lazy'
                />
              </div>

              {/* Title & Short narrative description */}
              <h3 className='font-headline font-bold text-primary text-sm sm:text-lg mb-1 sm:mb-2'>
                {ingredient.name}
              </h3>
              <p className='text-[11px] sm:text-sm text-text-muted leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none'>
                {ingredient.desc}
              </p>
            </div>

            {/* Premium scroll-triggered Flavor Gauges */}
            <div className='space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-outline/5'>
              {meta.gauges.map((gauge, idx) => (
                <div key={idx} className='space-y-1 sm:space-y-1.5'>
                  <div className='flex justify-between text-[9px] sm:text-[11px] font-medium text-text-muted'>
                    <span className='truncate mr-1'>{gauge.label}</span>
                    <span className='font-semibold text-primary'>{gauge.value}%</span>
                  </div>
                  <div className='w-full h-1 sm:h-1.5 bg-outline/10 rounded-full overflow-hidden'>
                    <motion.div
                      className={`h-full rounded-full ${meta.barBg}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${gauge.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
