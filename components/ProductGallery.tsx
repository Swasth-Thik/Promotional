'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductGalleryProps {
  image: string
  poster: string
  nameEn: string
}

export default function ProductGallery({ image, poster, nameEn }: ProductGalleryProps) {
  const [activeTab, setActiveTab] = useState<'jar' | 'poster'>('jar')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const activeImage = activeTab === 'jar' ? image : poster

  return (
    <div className='flex flex-col gap-6'>
      {/* Active Image Showcase */}
      <div className='relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-surface-cream to-surface-container border border-outline/10 group'>
        
        {/* Active Image with crossfade transition */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className='w-full h-full flex items-center justify-center'
          >
            <img
              src={activeImage}
              alt={`${nameEn} - ${activeTab === 'jar' ? 'Product Jar' : 'Promo Poster'}`}
              className={`w-full h-full select-none transition-all duration-500 ${
                activeTab === 'jar' ? 'object-contain p-8 group-hover:scale-105' : 'object-cover'
              }`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Hover / Overlay badges */}
        <div className='absolute top-4 left-4 flex flex-col gap-2 pointer-events-none'>
          <span className='bg-primary/95 text-on-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-sm'>
            <span className='material-symbols-outlined text-sm'>
              {activeTab === 'jar' ? 'shopping_bag' : 'auto_awesome'}
            </span>
            {activeTab === 'jar' ? 'Product Jar' : 'Special Promotion'}
          </span>
        </div>

        {/* Lightbox / Zoom Action for Poster */}
        {activeTab === 'poster' && (
          <button
            onClick={() => setIsLightboxOpen(true)}
            className='absolute bottom-4 right-4 bg-surface/90 hover:bg-surface text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer font-semibold text-xs border border-outline/20 backdrop-blur-sm'
          >
            <span className='material-symbols-outlined text-lg'>zoom_in</span>
            <span>View Full Poster</span>
          </button>
        )}
      </div>

      {/* Interactive Thumbnails */}
      <div className='grid grid-cols-2 gap-4'>
        {/* Jar Thumbnail */}
        <button
          onClick={() => setActiveTab('jar')}
          className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left group cursor-pointer ${
            activeTab === 'jar'
              ? 'border-primary bg-primary/5 shadow-md'
              : 'border-outline/20 bg-surface hover:border-accent/40 hover:shadow-sm'
          }`}
        >
          <div className='w-14 h-14 rounded-xl overflow-hidden bg-surface-cream flex-shrink-0 border border-outline/10 p-1 flex items-center justify-center'>
            <img
              src={image}
              alt='Product Jar Thumbnail'
              className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div>
            <p className={`text-sm font-bold leading-tight ${activeTab === 'jar' ? 'text-primary' : 'text-text-muted'}`}>
              Product Jar
            </p>
            <p className='text-xs text-text-muted mt-0.5 opacity-80'>Studio View</p>
          </div>
        </button>

        {/* Poster Thumbnail */}
        <button
          onClick={() => setActiveTab('poster')}
          className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left group cursor-pointer ${
            activeTab === 'poster'
              ? 'border-primary bg-primary/5 shadow-md'
              : 'border-outline/20 bg-surface hover:border-accent/40 hover:shadow-sm'
          }`}
        >
          <div className='w-14 h-14 rounded-xl overflow-hidden bg-surface-cream flex-shrink-0 border border-outline/10 flex items-center justify-center'>
            <img
              src={poster}
              alt='Promo Poster Thumbnail'
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div>
            <p className={`text-sm font-bold leading-tight ${activeTab === 'poster' ? 'text-primary' : 'text-text-muted'}`}>
              Promo Poster
            </p>
            <p className='text-xs text-text-muted mt-0.5 opacity-80'>Infographic</p>
          </div>
        </button>
      </div>

      {/* Lightbox / Modal Portal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md'>
            {/* Click outside to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className='absolute inset-0 cursor-zoom-out'
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 border border-outline/20'
            >
              {/* Header */}
              <div className='flex items-center justify-between px-6 py-4 border-b border-outline/20 bg-surface-cream'>
                <div>
                  <h3 className='font-headline font-bold text-primary text-lg'>{nameEn}</h3>
                  <p className='text-xs text-text-muted'>Official Promotional Poster</p>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className='p-2 rounded-full hover:bg-surface-container text-text-muted hover:text-primary transition-all duration-200 cursor-pointer flex items-center justify-center'
                >
                  <span className='material-symbols-outlined text-2xl'>close</span>
                </button>
              </div>

              {/* Scrollable / Zoomable Poster Image */}
              <div className='flex-1 overflow-y-auto p-6 bg-surface-container/30 flex justify-center items-center min-h-[50vh]'>
                <img
                  src={poster}
                  alt={`${nameEn} Promo Poster`}
                  className='max-h-[70vh] w-auto h-auto rounded-xl shadow-lg border border-outline/10 object-contain select-none'
                />
              </div>
              
              {/* Footer info */}
              <div className='px-6 py-4 bg-surface border-t border-outline/20 text-center text-xs text-text-muted'>
                Sun-dried recipe poster highlighting premium ingredients & traditional pickling art.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
