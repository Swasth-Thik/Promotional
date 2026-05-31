import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-surface-cream border-t border-outline'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Column */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-headline font-bold text-primary mb-1'>
                SWASTH-THIK
              </h3>
              <p className='text-xs text-accent tracking-[0.15em] uppercase'>
                Authentic Recipes, Homemade Goodness
              </p>
            </div>
            <p className='text-sm text-text-muted leading-relaxed'>
              Traditional Bengali pickles handcrafted with love using authentic
              family recipes and the finest ingredients.
            </p>
            <div className='flex gap-3'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                aria-label='Facebook'
              >
                <span className='material-symbols-outlined text-lg'>share</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                aria-label='Instagram'
              >
                <span className='material-symbols-outlined text-lg'>
                  camera_alt
                </span>
              </a>
              <a
                href='mailto:info@swasththik.com'
                className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                aria-label='Email'
              >
                <span className='material-symbols-outlined text-lg'>mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-bold text-primary mb-4 uppercase tracking-wider text-sm'>
              Quick Links
            </h4>
            <nav className='flex flex-col gap-3'>
              <Link
                href='/'
                className='text-text-muted hover:text-primary transition-colors text-sm'
              >
                Home
              </Link>
              <Link
                href='/#products'
                className='text-text-muted hover:text-primary transition-colors text-sm'
              >
                Products
              </Link>
              <Link
                href='/#story'
                className='text-text-muted hover:text-primary transition-colors text-sm'
              >
                Our Story
              </Link>
              <Link
                href='/#reviews'
                className='text-text-muted hover:text-primary transition-colors text-sm'
              >
                Reviews
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='font-bold text-primary mb-4 uppercase tracking-wider text-sm'>
              Contact Us
            </h4>
            <div className='space-y-3 text-sm text-text-muted'>
              <div className='flex items-start gap-2'>
                <span className='material-symbols-outlined text-primary text-lg mt-0.5'>
                  location_on
                </span>
                <p className='leading-relaxed'>
                  123 Bengali Lane
                  <br />
                  Kolkata, West Bengal 700001
                  <br />
                  India
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  call
                </span>
                <a
                  href='tel:+919330690128'
                  className='hover:text-primary transition-colors'
                >
                  +91 98765 43210
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  mail
                </span>
                <a
                  href='mailto:info@swasththik.com'
                  className='hover:text-primary transition-colors'
                >
                  info@swasththik.com
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Order */}
          <div>
            <h4 className='font-bold text-primary mb-4 uppercase tracking-wider text-sm'>
              Order Now
            </h4>
            <p className='text-sm text-text-muted mb-4 leading-relaxed'>
              Get your favorite Bengali pickles delivered to your doorstep.
              Order via WhatsApp now!
            </p>
            <a
              href='https://wa.me/919330690128'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-light transition-all shadow-md hover:shadow-lg'
            >
              <span className='material-symbols-outlined text-lg'>chat</span>
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-outline'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted'>
            <p>© 2026 Swasth-Thik. All rights reserved.</p>
            <div className='flex gap-6'>
              <Link href='#' className='hover:text-primary transition-colors'>
                Privacy Policy
              </Link>
              <Link href='#' className='hover:text-primary transition-colors'>
                Terms of Service
              </Link>
              <Link href='#' className='hover:text-primary transition-colors'>
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
