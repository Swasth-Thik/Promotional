import Link from 'next/link'
import { contact } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | SWASTH-THIK Traditional Bengali Pickles',
  description: 'Review the terms and conditions for ordering SWASTH-THIK handcrafted, authentic Bengali pickles via WhatsApp, payments, delivery, and food safety standards.',
  alternates: {
    canonical: '/terms-of-service',
  },
}

export default function TermsOfService() {
  const lastUpdated = 'May 31, 2026'

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description: 'Terms of Service of SWASTH-THIK outlining terms for website usage, orders, payments, and storage guidelines.',
    url: 'https://swasththik.vercel.app/terms-of-service',
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
            Terms of Service
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
                  <a href='#acceptance' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    1. Acceptance of Terms
                  </a>
                  <a href='#whatsapp-checkout' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    2. WhatsApp Ordering Flow
                  </a>
                  <a href='#pricing-availability' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    3. Pricing & Availability
                  </a>
                  <a href='#payment-delivery' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    4. Payments & Delivery
                  </a>
                  <a href='#safety-guidelines' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    5. Food Safety & Storage
                  </a>
                  <a href='#intellectual-property' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    6. Intellectual Property
                  </a>
                  <a href='#liability-limit' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    7. Limitation of Liability
                  </a>
                  <a href='#governing-law' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    8. Governing Law
                  </a>
                </nav>
              </div>
            </aside>

            {/* MAIN TERMS CONTENT */}
            <div className='lg:col-span-8 space-y-12 text-text-muted leading-relaxed font-sans'>
              
              {/* Acceptance of Terms */}
              <div id='acceptance' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>fact_check</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>1. Acceptance of Terms</h2>
                </div>
                <p>
                  Welcome to SWASTH-THIK. By accessing our website, browsing our product details, or initiating purchase inquiries, you agree to comply with and be bound by the following Terms of Service.
                </p>
                <p>
                  These terms govern the relationship between you (the customer) and SWASTH-THIK concerning our homemade pickle products, digital content, and direct WhatsApp sales flow. If you disagree with any part of these terms, please do not use our service.
                </p>
              </div>

              {/* WhatsApp Checkout */}
              <div id='whatsapp-checkout' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>forum</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>2. WhatsApp Ordering Flow</h2>
                </div>
                <p>
                  To offer the most authentic and personalized service, SWASTH-THIK operates as a direct-to-consumer brand via <strong>WhatsApp Business</strong>.
                </p>
                <ul className='space-y-2.5 pl-5 list-none'>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>radio_button_checked</span>
                    <span><strong>Order Initiation:</strong> Selecting a product on our website creates a customized order request message template. Clicking "Order on WhatsApp" opens a chat with our kitchen managers.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>radio_button_checked</span>
                    <span><strong>Order Confirmation:</strong> An order is only deemed accepted and confirmed once we verify the delivery address and payment has been processed or Cash on Delivery is confirmed.</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & Seasonal Availability */}
              <div id='pricing-availability' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>monetization_on</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>3. Pricing & Availability</h2>
                </div>
                <p>
                  Our pickles are handcrafted in small, seasonal batches in our home kitchen.
                </p>
                <ul className='space-y-2.5 pl-5 list-none'>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>payments</span>
                    <span><strong>Pricing structure:</strong> The prices listed on our website (₹80 for 200g jars, ₹180 for 500g jars) are subject to change. Any price change will be updated on the website before you purchase.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>eco</span>
                    <span><strong>Seasonal Nature:</strong> Since we use fresh, premium Bengali mangoes and natural mustard oil, availability is contingent on seasons. If a product goes out of stock, we will let you know instantly during our WhatsApp discussion.</span>
                  </li>
                </ul>
              </div>

              {/* Payments & Delivery */}
              <div id='payment-delivery' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>local_shipping</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>4. Payments & Delivery</h2>
                </div>
                <p>
                  We aim to make our delivery as convenient as possible:
                </p>
                <div className='bg-surface border border-outline/30 p-5 rounded-2xl space-y-3'>
                  <p>
                    <strong>Approved Payment Methods:</strong> Direct UPI (Google Pay, PhonePe, Paytm, BHIM), direct bank transfer, or Cash on Delivery (COD) in select Kolkata pincodes.
                  </p>
                  <p>
                    <strong>Delivery Area:</strong> Currently serving Kolkata and surrounding areas. For full details on shipping timelines and special rates, please check our <Link href='/shipping-info' className='text-primary font-semibold hover:underline'>Shipping Info Page</Link>.
                  </p>
                </div>
              </div>

              {/* Food Safety & Storage Guidelines */}
              <div id='safety-guidelines' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>volunteer_activism</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>5. Food Safety & Storage</h2>
                </div>
                <p>
                  Our pickles are made without artificial chemical preservatives or synthetic colors. We rely on traditional preservation methods (mustard oil, sunlight curation, and spice balance) which keep our pickles fresh for <strong>8 to 12 months</strong>.
                </p>
                <div className='bg-primary/5 border border-primary/20 p-5 rounded-2xl space-y-3 text-sm'>
                  <h5 className='font-bold text-primary flex items-center gap-1.5'>
                    <span className='material-symbols-outlined text-base'>warning</span>
                    CRITICAL CUSTOMER OBLIGATIONS:
                  </h5>
                  <ul className='space-y-2 list-disc pl-5'>
                    <li>Keep the jars stored in a cool, dark, and dry shelf, away from direct moisture.</li>
                    <li><strong>Always</strong> use a clean, fully dry spoon to serve the pickles. Any moisture introduction will spoil the natural pickle culture.</li>
                    <li>Keep the lid sealed tightly after opening.</li>
                  </ul>
                  <p className='text-xs text-text-muted mt-2'>
                    *SWASTH-THIK cannot be held responsible for premature spoilage or mold due to non-compliance with these standard domestic storage instructions.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div id='intellectual-property' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>copyright</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>6. Intellectual Property</h2>
                </div>
                <p>
                  All website elements, including but not limited to the brand name <strong>SWASTH-THIK</strong>, the corporate logo, illustrations, digital copy, mascot artwork, packaging layouts, and proprietary recipes, are the exclusive intellectual property of SWASTH-THIK.
                </p>
                <p>
                  You may not reproduce, copy, or redistribute any of these assets for commercial purposes without explicit, written family consent.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div id='liability-limit' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>gavel</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>7. Limitation of Liability</h2>
                </div>
                <p>
                  Our products are prepared in a clean, sanitized domestic home kitchen using standard raw ingredients (mangoes, mustard oil, dry spices, jaggery). It is the customer's responsibility to review product ingredients for any personal food allergies. SWASTH-THIK will not be held liable for any allergic reactions or medical discomfort due to ingredient sensitivities.
                </p>
              </div>

              {/* Governing Law */}
              <div id='governing-law' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>balance</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>8. Governing Law</h2>
                </div>
                <p>
                  These Terms of Service and any transactional disputes related to our products are governed strictly by the laws of the State of West Bengal, India. Any legal proceedings arising from these terms will be handled exclusively in the courts of Kolkata, West Bengal.
                </p>
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
          <h2 className='text-3xl font-headline font-bold'>Questions About Our Terms?</h2>
          <p className='opacity-90 text-base leading-relaxed'>
            We strive to maintain complete transparency. If you have any inquiries regarding our batch policies, seasonal availability, or terms, we are happy to chat!
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
