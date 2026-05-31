import Link from 'next/link'
import { contact, siteMetadata, footerLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className='bg-surface-cream border-t border-outline'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Column */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-headline font-bold text-primary mb-1'>
                {siteMetadata.name}
              </h3>
              <p className='text-xs text-accent tracking-[0.15em] uppercase'>
                {siteMetadata.tagline}
              </p>
            </div>
            <p className='text-sm text-text-muted leading-relaxed'>
              {siteMetadata.shortDescription}
            </p>
            <div className='flex gap-3'>
              <a
                href={siteMetadata.socialMedia.facebook}
                className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                aria-label='Facebook'
              >
                <span className='material-symbols-outlined text-lg'>share</span>
              </a>
              <a
                href={siteMetadata.socialMedia.instagram}
                className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all'
                aria-label='Instagram'
              >
                <span className='material-symbols-outlined text-lg'>
                  camera_alt
                </span>
              </a>
              <a
                href={`mailto:${contact.email}`}
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
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-text-muted hover:text-primary transition-colors text-sm'
                >
                  {link.label}
                </Link>
              ))}
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
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state}{' '}
                  {contact.address.zip}
                  <br />
                  {contact.address.country}
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  call
                </span>
                <a
                  href={`tel:+${contact.phone}`}
                  className='hover:text-primary transition-colors'
                >
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  mail
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className='hover:text-primary transition-colors'
                >
                  {contact.email}
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
              href={contact.whatsappLink}
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
              <Link href='/privacy-policy' className='hover:text-primary transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms-of-service' className='hover:text-primary transition-colors'>
                Terms of Service
              </Link>
              <Link href='/shipping-info' className='hover:text-primary transition-colors'>
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
