import Link from 'next/link'
import { contact } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping & Delivery Info | SWASTH-THIK Traditional Bengali Pickles',
  description: 'Learn about our localized delivery areas in Kolkata, prompt timelines, transit-safe packaging, and our free shipping offer when purchasing 500g pickle bundles.',
  alternates: {
    canonical: '/shipping-info',
  },
}

export default function ShippingInfo() {
  const lastUpdated = 'May 31, 2026'

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Shipping Info',
    description: 'Shipping & Delivery information of SWASTH-THIK including delivery zones, timelines, and transit policies.',
    url: 'https://swasththik.vercel.app/shipping-info',
    publisher: {
      '@type': 'Organization',
      name: 'SWASTH-THIK',
      logo: 'https://swasththik.vercel.app/logo.png'
    }
  }

  return (
    <main className='bg-background min-h-screen'>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BANNER HEADER */}
      <section className='relative pt-32 pb-16 px-6 bg-surface-cream border-b border-outline/30 overflow-hidden'>
        <div className='absolute inset-0 linen-texture opacity-5 pointer-events-none' />
        <div className='absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl' />
        <div className='absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl' />

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-semibold mb-4 group'
          >
            <span className='material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform'>
              arrow_back
            </span>
            Back to Home
          </Link>
          <h1 className='text-4xl md:text-5xl font-headline font-bold text-primary mb-4'>
            Shipping & Delivery Info
          </h1>
          <p className='text-sm md:text-base text-text-muted max-w-xl mx-auto leading-relaxed'>
            Last updated: {lastUpdated} • SWASTH-THIK Traditional Bengali Pickles
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className='py-16 px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            
            {/* SIDE NAVIGATION - TABLE OF CONTENTS */}
            <aside className='lg:col-span-4 hidden lg:block'>
              <div className='sticky top-28 bg-surface p-6 rounded-3xl border border-outline/30 shadow-md space-y-4'>
                <h3 className='font-headline font-bold text-lg text-primary pb-3 border-b border-outline/30 flex items-center gap-2'>
                  <span className='material-symbols-outlined text-accent'>toc</span>
                  Table of Contents
                </h3>
                <nav className='flex flex-col gap-2.5 text-sm'>
                  <a href='#delivery-zones' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    1. Delivery Zones (Kolkata)
                  </a>
                  <a href='#delivery-charges' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    2. Charges & Free Shipping Offer
                  </a>
                  <a href='#delivery-timelines' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    3. Estimated Timelines
                  </a>
                  <a href='#packaging-standards' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    4. Hygiene & Safety Packaging
                  </a>
                  <a href='#order-updates' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    5. Real-Time WhatsApp Updates
                  </a>
                  <a href='#damaged-transit' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    6. Return & Damage Refund Clause
                  </a>
                </nav>
              </div>
            </aside>

            {/* MAIN SHIPPING CONTENT */}
            <div className='lg:col-span-8 space-y-12 text-text-muted leading-relaxed font-sans'>
              
              {/* Delivery Zones */}
              <div id='delivery-zones' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>distance</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>1. Delivery Zones (Kolkata)</h2>
                </div>
                <p>
                  To maintain the pristine freshness of our handcrafted pickles, SWASTH-THIK currently offers localized delivery solutions across <strong>Kolkata and surrounding municipal zones</strong>.
                </p>
                <div className='grid sm:grid-cols-2 gap-4 pt-2'>
                  <div className='bg-surface-cream p-5 rounded-2xl border border-outline/20'>
                    <h5 className='font-bold text-primary mb-2 flex items-center gap-1.5'>
                      <span className='material-symbols-outlined text-sm text-accent'>home</span>
                      Core Service Areas
                    </h5>
                    <p className='text-xs leading-relaxed'>
                      North Kolkata, South Kolkata, Central Kolkata, East Kolkata (Salt Lake, New Town, Lake Town), and South-East borders (Garia, Jadavpur, Tollygunge).
                    </p>
                  </div>
                  <div className='bg-surface-cream p-5 rounded-2xl border border-outline/20'>
                    <h5 className='font-bold text-primary mb-2 flex items-center gap-1.5'>
                      <span className='material-symbols-outlined text-sm text-accent'>airport_shuttle</span>
                      Extended Areas
                    </h5>
                    <p className='text-xs leading-relaxed'>
                      Howrah, Rajarhat, Sonarpur, Dum Dum, Behala, and nearby municipal areas. Deliveries in these sectors are coordinated via our trusted express delivery partners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Charges */}
              <div id='delivery-charges' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>payments</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>2. Charges & Free Shipping Offer</h2>
                </div>
                <p>
                  Our delivery charges are kept to a minimum and directly mirror actual transit costs:
                </p>
                <ul className='space-y-2.5 pl-5 list-none'>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>arrow_right</span>
                    <span><strong>Standard Delivery Fee:</strong> Typically varies between ₹40 to ₹60 based on your exact pincode distance from our family kitchen in Kolkata. We will confirm the exact charge in our WhatsApp chat.</span>
                  </li>
                </ul>

                {/* Bundle Offer Promotion */}
                <div className='bg-gradient-to-br from-primary via-primary to-[#4A0808] text-on-primary p-6 rounded-3xl shadow-lg relative overflow-hidden mt-6'>
                  <div className='absolute right-4 bottom-2 opacity-10'>
                    <span className='material-symbols-outlined text-8xl'>local_shipping</span>
                  </div>
                  <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
                    <span className='material-symbols-outlined text-on-primary' style={{ fontVariationSettings: '"FILL" 1' }}>featured_play_list</span>
                    Special Family Bundle Promo!
                  </h4>
                  <p className='text-sm leading-relaxed opacity-95'>
                    Receive <strong>FREE Delivery</strong> anywhere inside our standard delivery zones when you order our two signature 500g jars together:
                  </p>
                  <div className='mt-3 font-semibold text-sm flex flex-col sm:flex-row gap-2 sm:gap-4'>
                    <span className='bg-white/20 px-3 py-1.5 rounded-lg'>✓ 1x Sweet Mango Pickle (500g)</span>
                    <span className='bg-white/20 px-3 py-1.5 rounded-lg'>✓ 1x Spicy Mango Pickle (500g)</span>
                  </div>
                </div>
              </div>

              {/* Estimated Timelines */}
              <div id='delivery-timelines' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>schedule</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>3. Estimated Timelines</h2>
                </div>
                <p>
                  Since we process small, dedicated batches, we prioritize speed without sacrificing product quality:
                </p>
                <div className='space-y-3.5'>
                  <div className='flex items-center gap-4 bg-surface p-4 rounded-xl border border-outline/20'>
                    <div className='w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent flex-shrink-0 font-bold'>
                      24h
                    </div>
                    <div>
                      <h4 className='font-bold text-primary text-sm'>Core Kolkata Regions</h4>
                      <p className='text-xs'>Same-Day or Next-Day delivery for orders placed and confirmed before 12:00 PM.</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 bg-surface p-4 rounded-xl border border-outline/20'>
                    <div className='w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent flex-shrink-0 font-bold'>
                      48h
                    </div>
                    <div>
                      <h4 className='font-bold text-primary text-sm'>Extended Municipal Sectors</h4>
                      <p className='text-xs'>Delivered within 2 to 3 business days from formal WhatsApp confirmation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packaging Standards */}
              <div id='packaging-standards' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>package_2</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>4. Hygiene & Safety Packaging</h2>
                </div>
                <p>
                  Food safety is at the heart of our kitchen. We take exceptional care to package your pickles so they arrive safely and cleanly:
                </p>
                <ul className='space-y-3 pl-5 list-none'>
                  <li className='flex items-start gap-2.5'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>verified</span>
                    <span><strong>Hermetic Sealing:</strong> Each jar is fully sterilized, filled under clean hygienic conditions, and hermetically sealed to preserve the natural oil and spice barrier.</span>
                  </li>
                  <li className='flex items-start gap-2.5'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>verified</span>
                    <span><strong>Transit Cushioning:</strong> We wrap every jar in biodegradable corrugated cushioning and place them in secure, spill-proof delivery outer boxes, protecting them from transit vibration.</span>
                  </li>
                </ul>
              </div>

              {/* Real-Time updates */}
              <div id='order-updates' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>notifications_active</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>5. Real-Time WhatsApp Updates</h2>
                </div>
                <p>
                  We keep our delivery process transparent. Once your handcrafted pickle batch is packaged and handed over to our delivery partner, we will message you directly on WhatsApp to confirm:
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs'>
                  <div className='p-3 bg-surface border border-outline/20 rounded-xl'>
                    <span className='material-symbols-outlined text-primary mb-1 block'>check_circle</span>
                    Order Prep
                  </div>
                  <div className='p-3 bg-surface border border-outline/20 rounded-xl'>
                    <span className='material-symbols-outlined text-primary mb-1 block'>local_shipping</span>
                    Dispatch Alert
                  </div>
                  <div className='p-3 bg-surface border border-outline/20 rounded-xl'>
                    <span className='material-symbols-outlined text-primary mb-1 block'>person</span>
                    Rider Details
                  </div>
                  <div className='p-3 bg-surface border border-outline/20 rounded-xl'>
                    <span className='material-symbols-outlined text-primary mb-1 block'>call</span>
                    ETA Ring
                  </div>
                </div>
              </div>

              {/* Returns & Damage Refund Clause */}
              <div id='damaged-transit' className='scroll-mt-28 bg-surface-cream p-6 md:p-8 rounded-3xl border border-outline/40 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>broken_image</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>6. Return & Damage Refund Clause</h2>
                </div>
                <p className='text-sm md:text-base'>
                  Due to the perishable, handmade nature of raw pickles, <strong>we are unable to accept general returns or exchanges</strong> once a jar has been delivered and opened.
                </p>
                <div className='bg-surface border border-outline/30 p-5 rounded-2xl text-xs space-y-2.5 leading-relaxed'>
                  <h6 className='font-bold text-primary uppercase tracking-wide flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-base text-accent'>health_and_safety</span>
                    Our Transit Guarantee:
                  </h6>
                  <p>
                    In the highly rare event that your pickle jar arrives damaged, leaking, or broken during transit:
                  </p>
                  <ol className='list-decimal pl-5 space-y-1.5'>
                    <li>Take a clear photograph of the damaged jar inside its packaging as soon as you receive it.</li>
                    <li>Send the photo directly to our WhatsApp support within <strong>24 hours of delivery</strong>.</li>
                    <li>Our team will verify the damage immediately and ship a brand new replacement jar completely free of charge, or issue a full refund via UPI.</li>
                  </ol>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className='py-16 px-6 bg-primary text-on-primary text-center relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className='relative z-10 max-w-2xl mx-auto space-y-6'>
          <h2 className='text-3xl font-headline font-bold'>Ready to Get Your Pickle Packs?</h2>
          <p className='opacity-90 text-base leading-relaxed'>
            We deliver handcrafted goodness straight from our kitchen to your table. Let's arrange your sweet and spicy delivery today!
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-2'>
            <a
              href={contact.whatsappLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-on-primary text-primary px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl'
            >
              <span className='material-symbols-outlined text-lg'>chat</span>
              Order on WhatsApp
            </a>
            <Link
              href='/'
              className='inline-flex items-center gap-2 border border-on-primary/40 text-on-primary px-8 py-3.5 rounded-full font-bold hover:bg-on-primary hover:text-primary transition-all duration-300'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
