import Link from 'next/link'
import { contact } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SWASTH-THIK Traditional Bengali Pickles',
  description: 'Understand how SWASTH-THIK collects, uses, and safeguards your personal information when browsing our site or placing orders for our homemade pickles via WhatsApp.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  const lastUpdated = 'May 31, 2026'

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy of SWASTH-THIK outlining how customer data is processed and protected.',
    url: 'https://swasththik.vercel.app/privacy-policy',
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
            Privacy Policy
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
                  <a href='#introduction' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    1. Introduction
                  </a>
                  <a href='#info-we-collect' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    2. Information We Collect
                  </a>
                  <a href='#how-we-use-info' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    3. How We Use Your Info
                  </a>
                  <a href='#data-protection' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    4. Data Protection & Security
                  </a>
                  <a href='#whatsapp-sharing' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    5. WhatsApp Ordering Flow
                  </a>
                  <a href='#your-rights' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    6. Your Privacy Rights
                  </a>
                  <a href='#cookies' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    7. Cookies & Analytics
                  </a>
                  <a href='#contact-us' className='text-text-muted hover:text-primary hover:font-semibold transition-all flex items-center gap-1.5'>
                    <span className='w-1 h-1 rounded-full bg-accent'></span>
                    8. Contact Information
                  </a>
                </nav>
              </div>
            </aside>

            {/* MAIN POLICY CONTENT */}
            <div className='lg:col-span-8 space-y-12 text-text-muted leading-relaxed font-sans'>
              
              {/* Introduction */}
              <div id='introduction' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>info</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>1. Introduction</h2>
                </div>
                <p>
                  At <strong>SWASTH-THIK</strong>, we cherish the trust you place in our handcrafted traditional Bengali pickles. We are committed to protecting your privacy and ensuring your personal information is handled safely and responsibly.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, and share your personal information when you visit our website (<Link href='/' className='text-primary hover:underline'>swasththik.vercel.app</Link>) or communicate with us to purchase our homemade products.
                </p>
              </div>

              {/* Information We Collect */}
              <div id='info-we-collect' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>person_search</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>2. Information We Collect</h2>
                </div>
                <p>
                  Because we utilize a highly personal, direct-to-customer model via WhatsApp, we do not require you to create an account or store sensitive credit card credentials on our servers. Instead, we collect only the necessary information to process your handcrafted order:
                </p>
                <ul className='space-y-2.5 pl-5 list-none'>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>check_circle</span>
                    <span><strong>Order & Identity Details:</strong> Your name, phone number, and delivery address in Kolkata or surrounding areas, shared when you confirm your order over WhatsApp.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>check_circle</span>
                    <span><strong>Device & Usage Data:</strong> Basic technical info collected automatically via our website hosting provider (IP address, browser type, referring pages) to optimize website performance.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>check_circle</span>
                    <span><strong>Communication History:</strong> Chat history and preferences shared during our WhatsApp conversation to serve you better in future orders.</span>
                  </li>
                </ul>
              </div>

              {/* How We Use Your Info */}
              <div id='how-we-use-info' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>settings</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>3. How We Use Your Info</h2>
                </div>
                <p>
                  We believe in keeping things simple and pure, just like our pickles. Your details are used strictly for operational purposes:
                </p>
                <div className='grid sm:grid-cols-2 gap-4 pt-2'>
                  <div className='bg-surface-cream p-5 rounded-2xl border border-outline/20'>
                    <h4 className='font-bold text-primary mb-2 flex items-center gap-1.5'>
                      <span className='material-symbols-outlined text-sm text-accent'>local_shipping</span>
                      Order Fulfillment
                    </h4>
                    <p className='text-sm'>To prepare your specific order batch, arrange coordinate deliveries in Kolkata, and send receipts.</p>
                  </div>
                  <div className='bg-surface-cream p-5 rounded-2xl border border-outline/20'>
                    <h4 className='font-bold text-primary mb-2 flex items-center gap-1.5'>
                      <span className='material-symbols-outlined text-sm text-accent'>chat</span>
                      Customer Support
                    </h4>
                    <p className='text-sm'>To answer questions about jar sizes, ingredients, shelf life, or custom pickle requirements via WhatsApp.</p>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div id='data-protection' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>security</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>4. Data Protection & Security</h2>
                </div>
                <p>
                  Your trust is our ultimate ingredient. We implement strict safeguards to protect your personal details:
                </p>
                <ul className='space-y-2.5 pl-5 list-none'>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>shield</span>
                    <span><strong>No Third-Party Selling:</strong> We NEVER sell, lease, or rent your personal information to marketing firms or external agencies.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>shield</span>
                    <span><strong>Secure Transactions:</strong> Online transactions are handled through standard direct UPI transfers (GPay, PhonePe, Paytm, BHIM) or bank transfers. We do not store or process card numbers on our server.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='material-symbols-outlined text-accent text-sm mt-1'>shield</span>
                    <span><strong>Limited Access:</strong> Access to customer shipping addresses and phone numbers is restricted to family kitchen operators and trusted delivery partners solely for delivery purposes.</span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Ordering Flow */}
              <div id='whatsapp-sharing' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>forum</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>5. WhatsApp Ordering Flow</h2>
                </div>
                <p>
                  Our website contains links to open chats in WhatsApp. When you click our WhatsApp links, you will navigate outside our web ecosystem. WhatsApp has its own privacy framework and end-to-end encryption. Any information shared within WhatsApp is subject to WhatsApp's own terms and policies. We store your chat and delivery information locally in our home kitchen system purely to fulfill your direct request.
                </p>
              </div>

              {/* Your Privacy Rights */}
              <div id='your-rights' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>lock_open</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>6. Your Privacy Rights</h2>
                </div>
                <p>
                  You are in complete control of your data. At any point, you can ask us to:
                </p>
                <div className='grid sm:grid-cols-3 gap-4 text-center'>
                  <div className='bg-surface border border-outline/20 p-4 rounded-xl'>
                    <span className='material-symbols-outlined text-2xl text-accent mb-2 block'>visibility</span>
                    <h5 className='font-bold text-primary text-sm mb-1'>Access Data</h5>
                    <p className='text-xs'>Request a summary of what info we have stored (e.g. delivery address).</p>
                  </div>
                  <div className='bg-surface border border-outline/20 p-4 rounded-xl'>
                    <span className='material-symbols-outlined text-2xl text-accent mb-2 block'>edit</span>
                    <h5 className='font-bold text-primary text-sm mb-1'>Correct Data</h5>
                    <p className='text-xs'>Update or correct your phone number or shipping address details.</p>
                  </div>
                  <div className='bg-surface border border-outline/20 p-4 rounded-xl'>
                    <span className='material-symbols-outlined text-2xl text-accent mb-2 block'>delete</span>
                    <h5 className='font-bold text-primary text-sm mb-1'>Delete Data</h5>
                    <p className='text-xs'>Ask us to permanently purge your contact info from our records.</p>
                  </div>
                </div>
                <p className='text-sm pt-2'>
                  Simply message us on WhatsApp or email <a href={`mailto:${contact.email}`} className='text-primary hover:underline'>{contact.email}</a> to initiate any request.
                </p>
              </div>

              {/* Cookies */}
              <div id='cookies' className='scroll-mt-28 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>cookie</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>7. Cookies & Analytics</h2>
                </div>
                <p>
                  Our site is highly optimized and relies on minimal cookies. We only use essential system cookies to ensure pages load quickly, layout rendering is correct, and navigation transitions are smooth. We do not use intrusive advertising cookies.
                </p>
              </div>

              {/* Contact Us */}
              <div id='contact-us' className='scroll-mt-28 bg-surface-cream p-6 md:p-8 rounded-3xl border border-outline/40 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary flex-shrink-0'>
                    <span className='material-symbols-outlined text-lg'>mail</span>
                  </div>
                  <h2 className='text-2xl font-headline font-bold text-primary'>8. Contact Information</h2>
                </div>
                <p className='text-sm md:text-base'>
                  If you have any questions about this Privacy Policy, your data protection, or wish to exercise your rights, please reach out to us:
                </p>
                <div className='grid sm:grid-cols-2 gap-4 text-sm pt-2'>
                  <div className='flex items-center gap-2.5'>
                    <span className='material-symbols-outlined text-primary text-xl'>mail</span>
                    <div>
                      <p className='text-xs text-text-muted'>Email Us</p>
                      <a href={`mailto:${contact.email}`} className='font-semibold text-primary hover:underline'>{contact.email}</a>
                    </div>
                  </div>
                  <div className='flex items-center gap-2.5'>
                    <span className='material-symbols-outlined text-primary text-xl'>call</span>
                    <div>
                      <p className='text-xs text-text-muted'>WhatsApp / Call</p>
                      <a href={`tel:+${contact.phone}`} className='font-semibold text-primary hover:underline'>{contact.phoneDisplay}</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
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
          <h2 className='text-3xl font-headline font-bold'>Have Questions?</h2>
          <p className='opacity-90 text-base leading-relaxed'>
            We are always here to help you understand our handmade processing, ingredients, or order flow. Message us on WhatsApp for a quick response!
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-2'>
            <a
              href={contact.whatsappLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-on-primary text-primary px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl'
            >
              <span className='material-symbols-outlined text-lg'>chat</span>
              Chat on WhatsApp
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
