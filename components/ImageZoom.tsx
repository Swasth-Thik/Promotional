'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageZoomProps {
  src: string
  alt: string
  zoomScale?: number
  lensSize?: number
}

export default function ImageZoom({
  src,
  alt,
  zoomScale = 2.2,
  lensSize = 180,
}: ImageZoomProps) {
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [[x, y], setXY] = useState([0, 0])
  const [[imgWidth, imgHeight], setImgSize] = useState([0, 0])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setShowMagnifier(true)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container) return

    const { top, left, width, height } = container.getBoundingClientRect()

    // Calculate cursor position relative to the image container
    const cursorX = e.clientX - left
    const cursorY = e.clientY - top

    setXY([cursorX, cursorY])
    setImgSize([width, height])
  }

  const handleMouseLeave = () => {
    setShowMagnifier(false)
  }

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden cursor-crosshair rounded-2xl w-full h-auto bg-surface select-none border border-outline/10'
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Image */}
      <img
        src={src}
        alt={alt}
        className='w-full h-auto rounded-2xl object-contain shadow-inner pointer-events-none'
      />

      {/* Interactive Magnifying Glass Lens - Hidden on touch devices/mobile since hover doesn't exist */}
      <AnimatePresence>
        {showMagnifier && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className='pointer-events-none absolute hidden md:block rounded-full border-4 border-surface shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] z-20 overflow-hidden'
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              // Position lens centered under the cursor
              left: `${x - lensSize / 2}px`,
              top: `${y - lensSize / 2}px`,
              // Render zoomed background image inside the lens
              backgroundImage: `url('${src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgWidth * zoomScale}px ${imgHeight * zoomScale}px`,
              backgroundPosition: `${-x * zoomScale + lensSize / 2}px ${-y * zoomScale + lensSize / 2}px`,
            }}
          >
            {/* Glossy sheen overlay on the lens */}
            <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-full' />
            {/* Fine border highlights inside the lens */}
            <div className='absolute inset-0 rounded-full border border-black/10' />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
