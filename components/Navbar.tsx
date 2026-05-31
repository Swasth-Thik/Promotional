'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { contact } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  // Helper for active link
  const getLinkClass = (path: string, isExact = false) => {
    const isActive = isExact ? pathname === path : pathname.startsWith(path)

    return isActive
      ? 'text-primary font-bold border-b-2 border-primary pb-1'
      : 'text-text-muted hover:text-primary transition-colors duration-300'
  }

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 will-change-transform ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md shadow-md border-b border-outline'
            : 'bg-transparent'
        }`}
      >
        <div className='flex items-center px-6 lg:px-12 py-4 max-w-7xl mx-auto justify-between'>
          {/* LOGO */}
          <Link
            href='/'
            onClick={() => setIsOpen(false)}
            className='flex items-center gap-3'
          >
            <img
              src='/logo.png'
              alt='Swasth-Thik Logo'
              className='h-12 lg:h-14 w-auto'
            />
            <div className='flex flex-col'>
              <span className='text-xl lg:text-2xl font-headline font-bold text-primary tracking-tight'>
                SWASTH-THIK
              </span>
              <span className='hidden sm:block text-[9px] text-accent font-sans tracking-[0.15em] uppercase'>
                Authentic Recipes, Homemade Goodness
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className='hidden md:flex gap-8 items-center font-sans text-sm font-medium'>
            <Link href='/' className={getLinkClass('/', true)}>
              Home
            </Link>
            <Link
              href='/#products'
              className='text-text-muted hover:text-primary transition-colors duration-300'
            >
              Products
            </Link>
            <Link
              href='/#story'
              className='text-text-muted hover:text-primary transition-colors duration-300'
            >
              Our Story
            </Link>
            <Link
              href='/#reviews'
              className='text-text-muted hover:text-primary transition-colors duration-300'
            >
              Reviews
            </Link>
            <a
              href={contact.whatsappLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2'
            >
              <span className='material-symbols-outlined text-lg'>chat</span>
              Order on WhatsApp
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden z-[60] p-2 text-primary hover:bg-surface-container rounded-lg transition-colors'
            aria-label='Toggle menu'
          >
            <span className='material-symbols-outlined text-3xl'>
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className='fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-surface shadow-2xl md:hidden'
          >
            {/* HEADER */}
            <div className='flex items-center justify-between px-6 py-6 border-b border-outline'>
              <div>
                <h2 className='text-xl font-headline font-bold text-primary'>
                  SWASTH-THIK
                </h2>
                <p className='text-[10px] tracking-widest text-accent uppercase mt-1'>
                  Homemade Goodness
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='p-2 hover:bg-surface-container rounded-lg transition-colors'
              >
                <span className='material-symbols-outlined text-2xl text-primary'>
                  close
                </span>
              </button>
            </div>

            {/* MENU LINKS */}
            <div className='flex flex-col gap-2 px-4 mt-6 font-sans'>
              <Link
                href='/'
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  pathname === '/'
                    ? 'bg-surface-container text-primary font-semibold'
                    : 'text-text-muted hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                <span className='material-symbols-outlined text-xl'>home</span>
                Home
              </Link>

              <Link
                href='/#products'
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-muted hover:bg-surface-container-low hover:text-primary transition-all'
              >
                <span className='material-symbols-outlined text-xl'>
                  shopping_bag
                </span>
                Products
              </Link>

              <Link
                href='/#story'
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-muted hover:bg-surface-container-low hover:text-primary transition-all'
              >
                <span className='material-symbols-outlined text-xl'>
                  menu_book
                </span>
                Our Story
              </Link>

              <Link
                href='/#reviews'
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-muted hover:bg-surface-container-low hover:text-primary transition-all'
              >
                <span className='material-symbols-outlined text-xl'>star</span>
                Reviews
              </Link>

              <a
                href={contact.whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 px-4 py-3.5 mt-4 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary-light transition-all shadow-md'
              >
                <span className='material-symbols-outlined text-xl'>chat</span>
                Order on WhatsApp
              </a>
            </div>

            {/* FOOTER INFO */}
            <div className='absolute bottom-6 left-6 right-6 border-t border-outline pt-6'>
              <p className='text-xs text-text-muted mb-3'>Connect with us:</p>
              <div className='flex gap-4 mb-4'>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                >
                  <span className='material-symbols-outlined text-lg'>
                    share
                  </span>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                >
                  <span className='material-symbols-outlined text-lg'>
                    mail
                  </span>
                </a>
              </div>
              <p className='text-xs text-text-muted'>
                © 2026 Swasth-Thik. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
