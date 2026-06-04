'use client'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { products, whyChoose, process, reviews, faqs, contact } from '@/lib/data'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const currentCount = Math.floor(progress * (end - startValue) + startValue)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTimelineStep, setActiveTimelineStep] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setActiveTimelineStep((prev) => (prev + 1) % process.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [isAutoplay])

  // JSON-LD structured data for SEO
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SWASTH-THIK',
    image: 'https://swasththik.vercel.app/logo.png',
    description:
      'Traditional Bengali pickles made with authentic family recipes. Handcrafted Sweet and Spicy Mango Pickles delivered fresh in Kolkata.',
    url: 'https://swasththik.vercel.app',
    telephone: '+919330690128',
    priceRange: '₹80-₹180',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.5726,
      longitude: 88.3639,
    },
    openingHours: 'Mo-Su 09:00-20:00',
    servesCuisine: 'Bengali',
    acceptsReservations: false,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '500',
    },
  }

  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.nameEn,
        alternateName: product.name,
        image: `https://swasththik.vercel.app${product.image}`,
        description: product.description,
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '80',
          highPrice: '180',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  }

  return (
    <div className='bg-background'>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src='/banner1.png'
            alt='Traditional Bengali Pickles Background'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60'></div>
        </div>

        <div className='relative z-10 max-w-6xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='inline-flex items-center gap-2 px-5 py-2.5 bg-surface-container rounded-full text-sm font-semibold text-primary mb-6 shadow-lg border border-outline/30'
            >
              <span
                className='material-symbols-outlined text-accent text-base'
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              <span>
                <AnimatedCounter end={500} suffix='+ Happy Customers' duration={2} />
              </span>
              <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
              <span>100% Authentic</span>
            </motion.div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary mb-6 leading-tight'>
              Traditional Bengali Pickles
              <br />
              <span className='text-accent'>Made With Love</span>
            </h1>

            <p className='text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed'>
              Authentic Recipes, Homemade Goodness
              <br />
              Experience the taste of traditional Bengali pickles, handcrafted
              with care
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <motion.a
                href='#products'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary text-on-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto flex items-center justify-center gap-2 group'
              >
                <span>Shop Now</span>
                <span className='material-symbols-outlined text-xl group-hover:translate-y-1 transition-transform'>
                  arrow_downward
                </span>
              </motion.a>
              <motion.a
                href={`${contact.whatsappLink}?text=${encodeURIComponent("Hello! I'm interested in ordering SWASTH-THIK Traditional Bengali Pickles.\n\nI would like to know more about:\n• Available products and sizes\n• Current pricing\n• Delivery to my location\n\nThank you!")}`}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-on-primary transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg'
              >
                <span className='material-symbols-outlined'>chat</span>
                Order on WhatsApp
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted'
            >
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  verified
                </span>
                <span>100% Natural</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  eco
                </span>
                <span>Freshly Prepared</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined text-primary text-lg'>
                  local_shipping
                </span>
                <span>Delivery in Kolkata</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='absolute bottom-10 left-1/2 -translate-x-1/2'
        >
          <motion.a
            href='#products'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors cursor-pointer'
          >
            <span className='text-xs font-medium'>Scroll to explore</span>
            <span className='material-symbols-outlined text-2xl'>
              expand_more
            </span>
          </motion.a>
        </motion.div>

        {/* Decorative Elements */}
        <div className='absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse' />
      </section>

      {/* FEATURED PRODUCTS */}
      <section id='products' className='py-16 px-6 bg-surface-cream'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-headline font-bold text-primary mb-4'>
              Our Products
            </h2>
            <p className='text-lg text-text-muted max-w-2xl mx-auto'>
              Handcrafted traditional Bengali pickles made with authentic
              recipes
            </p>
          </motion.div>

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-8 bg-gradient-to-br from-primary via-primary to-[#4A0808] text-on-primary p-4 rounded-2xl shadow-lg text-center'
          >
            <div className='flex items-center justify-center gap-3'>
              <span className='material-symbols-outlined text-2xl'>
                local_shipping
              </span>
              <p className='text-sm md:text-base font-semibold'>
                🎉 Special Offer: Buy 2 (500g Each) & Enjoy FREE DELIVERY !!
              </p>
            </div>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-surface rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-outline/20'
              >
                {/* Product Image */}
                <div className='relative h-72 overflow-hidden bg-gradient-to-br from-surface-cream to-surface-container'>
                  <img
                    src={product.image}
                    alt={product.nameEn}
                    className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-700'
                  />
                  {/* Badges */}
                  <div className='absolute top-4 left-4 flex flex-col gap-2'>
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className='bg-primary/90 backdrop-blur-sm text-on-primary px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg'
                    >
                      <span className='material-symbols-outlined text-sm'>
                        verified
                      </span>
                      Authentic
                    </motion.div>
                    {index === 0 && (
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='bg-accent/90 backdrop-blur-sm text-on-primary px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg'
                      >
                        <span
                          className='material-symbols-outlined text-sm'
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          star
                        </span>
                        Best Seller
                      </motion.div>
                    )}
                  </div>
                  {/* Rating Badge */}
                  <div className='absolute top-4 right-4'>
                    <div className='bg-surface/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg'>
                      <div className='flex items-center gap-1 mb-1'>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className='material-symbols-outlined text-accent text-sm'
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <p className='text-xs text-text-muted text-center font-semibold'>
                        5.0
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className='p-6'>
                  {/* Product Names */}
                  <div className='mb-4'>
                    <h3 className='text-2xl font-headline font-bold text-primary mb-1.5 leading-tight'>
                      {product.name}
                    </h3>
                    <h4 className='text-lg text-accent font-semibold'>
                      {product.nameEn}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className='text-sm text-text-muted mb-5 leading-relaxed'>
                    {product.description}
                  </p>

                  {/* Divider */}
                  <div className='border-t border-outline/30 my-5'></div>

                  {/* Pricing Section */}
                  <div className='mb-5'>
                    <p className='text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3'>
                      Choose Your Size
                    </p>
                    <div className='grid grid-cols-2 gap-3'>
                      {product.sizes.map((size, idx) => {
                        const weight = parseInt(size.weight)
                        const price = parseInt(size.price.replace('₹', ''))
                        const per100g = Math.round((price / weight) * 100)
                        const isBestValue = idx === 1

                        return (
                          <div
                            key={idx}
                            className={`relative rounded-xl p-3 border-2 transition-all hover:shadow-lg cursor-pointer ${isBestValue
                              ? 'border-primary bg-surface shadow-sm'
                              : 'border-accent/30 bg-accent/5'
                              }`}
                          >
                            {isBestValue && (
                              <div className='absolute -top-2 left-1/2 -translate-x-1/2'>
                                <span className='bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm'>
                                  Best Value
                                </span>
                              </div>
                            )}
                            <div className='text-center'>
                              <div className={`text-base font-bold mb-1 ${isBestValue ? 'text-primary' : 'text-accent'
                                }`}>
                                {size.weight}
                              </div>
                              <div className='text-xl font-bold text-primary mb-1'>
                                {size.price}
                              </div>
                              <div className='text-[10px] text-text-muted bg-surface-container px-2 py-0.5 rounded-full inline-block'>
                                ₹{per100g}/100g
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className='w-full bg-gradient-to-r from-primary to-primary-light text-on-primary py-3.5 rounded-full font-bold text-sm text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group'
                  >
                    <span>View Details & Order</span>
                    <span className='material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform'>
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id='story' className='py-20 px-6 bg-surface'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className='inline-block px-4 py-2 bg-surface-container rounded-full text-sm font-semibold text-primary mb-6'>
                Our Story
              </span>
              <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mb-6'>
                Preserving Bengali Heritage, One Pack at a Time
              </h2>
              <p className='text-lg text-text-muted mb-6 leading-relaxed'>
                Swasth-Thik was born from a deep love for traditional Bengali
                cuisine and a desire to share authentic homemade flavors with
                food lovers across India.
              </p>
              <p className='text-lg text-text-muted mb-6 leading-relaxed'>
                Every pouch of our pickle carries the essence of Bengal – from the
                carefully selected raw mangoes to the aromatic mustard oil and
                the perfect blend of traditional spices that have been passed
                down through generations in our family.
              </p>
              <p className='text-lg text-text-muted leading-relaxed'>
                We believe in the purity of homemade food. No shortcuts, no
                artificial chemicals – just authentic recipes, quality
                ingredients, and a whole lot of love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative flex items-center justify-center'
            >
              <div className='relative w-full max-w-md'>
                <img
                  src='/mascot.png'
                  alt='Swasth-Thik - Traditional Bengali Pickles'
                  className='w-full h-auto drop-shadow-2xl'
                />
              </div>
              {/* Decorative Bengali Pattern */}
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl' />
              <div className='absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl' />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SWASTH-THIK */}
      <section className='py-20 px-6 bg-surface-cream'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mb-4'>
              Why Choose Swasth-Thik?
            </h2>
            <p className='text-lg text-text-muted max-w-2xl mx-auto'>
              What makes our pickles special and authentic
            </p>
          </motion.div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-surface p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2'
              >
                <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-outline/10 p-1 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300 overflow-hidden flex-shrink-0'>
                  {item.mascot ? (
                    <img
                      src={item.mascot}
                      alt={item.title}
                      className='w-full h-full object-contain scale-[1.12]'
                    />
                  ) : (
                    <span className='material-symbols-outlined text-4xl text-primary'>
                      {item.icon}
                    </span>
                  )}
                </div>
                <h3 className='text-xl font-bold text-primary mb-3'>
                  {item.title}
                </h3>
                <p className='text-text-muted leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE MAKE IT - 2X2 INTERACTIVE GRID HUB */}
      <section className='py-28 px-6 bg-surface-container/20 relative overflow-hidden'>
        {/* Background decorative warm ambient blurs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px] pointer-events-none' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-sweet/5 rounded-full filter blur-[120px] pointer-events-none' />

        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <span className='text-xs font-bold text-accent-sweet tracking-widest uppercase bg-accent-sweet/10 py-1.5 px-4 rounded-full select-none'>
              ✨ OUR CRAFTSMANSHIP
            </span>
            <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mt-4 mb-4'>
              How We Make It
            </h2>
            <p className='text-lg text-text-muted max-w-2xl mx-auto'>
              Watch our traditional process auto-play, or click any step to explore our traditional Bengali kitchen secrets
            </p>
          </motion.div>

          {/* DESKTOP: 2x2 Interactive Grid Hub */}
          <div className='relative hidden md:block max-w-4xl mx-auto p-8 min-h-[500px]'>
            {/* The Central Interactive rotating Sun Dial Hub */}
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-surface border-4 border-primary/20 shadow-2xl flex items-center justify-center z-25 p-4'>
              {/* Glowing Ambient ring */}
              <div className='absolute inset-0 rounded-full bg-primary/5 filter blur-md animate-pulse pointer-events-none' />

              {/* Inner Circle with Active Mascot illustration */}
              <div className='w-full h-full rounded-full bg-white border border-outline/10 shadow-inner flex items-center justify-center p-3 relative overflow-hidden'>
                <motion.img
                  key={activeTimelineStep}
                  initial={{ scale: 0.7, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  src={process[activeTimelineStep].mascot}
                  alt={process[activeTimelineStep].title}
                  className='w-full h-full object-contain'
                />
              </div>

              {/* Rotating Pointer Hand wrapper */}
              <div className='absolute inset-0 w-full h-full z-30 pointer-events-none'>
                <motion.div
                  animate={{ rotate: [-135, -45, 135, 45][activeTimelineStep] }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className='w-full h-full relative'
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className='absolute right-[-28px] top-1/2 transform -translate-y-1/2 text-4xl select-none pointer-events-none'
                  >
                    👉
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-x-32 gap-y-16'>
              {process.map((step, index) => {
                const isActive = activeTimelineStep === index;
                const secretTips = [
                  "Artisan Tip: We select green mangoes early in the morning when they are crisp and hold their firm shape perfectly during pickling.",
                  "Spice Secret: We dry-roast each spice separately on an iron tawa before stone-grinding to activate their essential aromatic oils.",
                  "Sun-drying Tradition: We let the spices and mangoes dry in the summer sun in large clay jars (Barnis) for 3 full days to lock in flavors naturally.",
                  "Packaged Fresh: We seal our pouches instantly in airtight packages to retain the rich aroma of pure cold-pressed mustard oil."
                ];

                return (
                  <motion.div
                    key={index}
                    onClick={() => {
                      setActiveTimelineStep(index);
                      setIsAutoplay(false);
                    }}
                    onMouseEnter={() => {
                      setActiveTimelineStep(index);
                      setIsAutoplay(false);
                    }}
                    className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] ${isActive
                      ? 'bg-surface border-primary shadow-2xl ring-2 ring-primary/5 scale-[1.01]'
                      : 'bg-surface/50 border-outline/10 hover:bg-surface hover:border-primary/20'
                      }`}
                  >
                    <div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase mb-1.5 inline-block ${isActive ? 'text-accent-sweet' : 'text-text-muted'
                        }`}>
                        Step 0{index + 1}
                      </span>
                      <h3 className='text-lg md:text-xl font-bold text-primary mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-xs md:text-sm text-text-muted leading-relaxed'>
                        {step.description}
                      </p>
                    </div>

                    {/* Artisan Secret tip Quote Drawer */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-4 pt-4 border-t border-outline/15 text-left text-[11px] text-primary font-medium italic flex items-start gap-2 bg-primary/5 p-3 rounded-xl'
                      >
                        <span className='text-xs flex-shrink-0'>💡</span>
                        <span>{secretTips[index]}</span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE: Collapsed Vertical Stepper List */}
          <div className='md:hidden space-y-6 relative pl-6'>
            {/* Mobile Timeline Track */}
            <div className='absolute left-2 top-2 bottom-2 w-0.5 bg-outline/20' />

            {process.map((step, index) => {
              const isActive = activeTimelineStep === index;
              const secretTips = [
                "Artisan Tip: We select green mangoes early in the morning when they are crisp and hold their firm shape perfectly during pickling.",
                "Spice Secret: We dry-roast each spice separately on an iron tawa before stone-grinding to activate their essential aromatic oils.",
                "Sun-drying Tradition: We let the spices and mangoes dry in the summer sun in large clay jars (Barnis) for 3 full days to lock in flavors naturally.",
                "Packaged Fresh: We seal our pouches instantly in airtight packages to retain the rich aroma of pure cold-pressed mustard oil."
              ];

              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveTimelineStep(index);
                    setIsAutoplay(false);
                  }}
                  className='relative flex items-center pl-4 cursor-pointer group'
                >
                  {/* Pointing hand pointing 👉 on mobile */}
                  {isActive && (
                    <motion.div
                      layoutId="pointingHandMobileSplit"
                      className="absolute left-[-22px] z-20 text-xl select-none pointer-events-none"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                      👉
                    </motion.div>
                  )}

                  <div
                    className={`w-full p-5 rounded-2xl border transition-all duration-300 ${isActive
                      ? 'bg-surface border-primary shadow-lg scale-[1.01]'
                      : 'bg-surface/50 border-outline/10'
                      }`}
                  >
                    <span className={`text-[10px] font-bold tracking-wider uppercase mb-1 inline-block ${isActive ? 'text-accent-sweet' : 'text-text-muted'
                      }`}>
                      Step 0{index + 1}
                    </span>
                    <h3 className='text-lg font-bold text-primary mb-1'>{step.title}</h3>
                    <p className='text-xs text-text-muted leading-relaxed mb-3'>{step.description}</p>

                    {isActive && (
                      <div className='pt-3 border-t border-outline/15 text-left text-[11px] text-primary font-medium italic flex items-start gap-2 bg-primary/5 p-2 rounded-xl'>
                        <span className='text-xs flex-shrink-0'>💡</span>
                        <span>{secretTips[index]}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section
        id='reviews'
        className='py-20 px-6 bg-surface-cream relative overflow-hidden'
      >
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full'></div>
          <div className='absolute bottom-20 right-20 w-40 h-40 border-4 border-accent rounded-full'></div>
        </div>

        <div className='max-w-6xl mx-auto relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <span className='inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4'>
              Testimonials
            </span>
            <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mb-4'>
              What Our Customers Say
            </h2>
            <p className='text-lg text-text-muted max-w-2xl mx-auto mb-6'>
              Love from pickle enthusiasts across India
            </p>
            {/* Overall Rating */}
            <div className='inline-flex items-center gap-3 bg-surface px-6 py-3 rounded-full shadow-lg'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className='material-symbols-outlined text-accent text-xl'
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className='text-2xl font-bold text-primary'>
                <AnimatedCounter end={5} suffix='.0' duration={1.5} />
              </span>
              <span className='text-sm text-text-muted'>
                from <AnimatedCounter end={500} suffix='+' duration={1.5} /> reviews
              </span>
            </div>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-surface p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-outline/20 relative'
              >
                {/* Quote Icon */}
                <div className='absolute top-6 right-6 opacity-10'>
                  <span className='material-symbols-outlined text-6xl text-primary'>
                    format_quote
                  </span>
                </div>

                <div className='flex gap-1 mb-4'>
                  {[...Array(review.rating)].map((_, i) => (
                    <span
                      key={i}
                      className='material-symbols-outlined text-accent text-xl'
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className='text-text-muted mb-6 leading-relaxed relative z-10'>
                  "{review.text}"
                </p>
                <div className='flex items-center gap-4 pt-4 border-t border-outline/20'>
                  <div className='relative'>
                    <img
                      src={review.image}
                      alt={review.name}
                      className='w-14 h-14 rounded-full object-cover ring-2 ring-primary/20'
                    />
                    <div className='absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-surface'></div>
                  </div>
                  <div>
                    <h4 className='font-bold text-primary text-base'>
                      {review.name}
                    </h4>
                    <p className='text-sm text-text-muted flex items-center gap-1'>
                      <span className='material-symbols-outlined text-xs'>
                        location_on
                      </span>
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Customer Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='mt-12'
          >
            <div className='flex items-center justify-center gap-4 sm:gap-8 bg-surface px-4 sm:px-8 py-4 rounded-2xl shadow-lg'>
              <div className='text-center border-r border-outline/30 pr-4 sm:pr-8 flex-1'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1'>
                  <AnimatedCounter end={500} suffix='+' />
                </p>
                <p className='text-xs sm:text-sm text-text-muted'>Happy Customers</p>
              </div>
              <div className='text-center border-r border-outline/30 pr-4 sm:pr-8 flex-1'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1'>
                  <AnimatedCounter end={1000} suffix='+' />
                </p>
                <p className='text-xs sm:text-sm text-text-muted'>Packs Sold</p>
              </div>
              <div className='text-center flex-1'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1'>
                  <AnimatedCounter end={5} suffix='.0' />
                </p>
                <p className='text-xs sm:text-sm text-text-muted'>Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHATSAPP ORDER CTA */}
      <section className='py-20 px-6 bg-primary text-on-primary relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className='material-symbols-outlined text-6xl mb-6 inline-block'>
              chat
            </span>
            <h2 className='text-3xl md:text-5xl font-headline font-bold mb-6'>
              Order Directly on WhatsApp
            </h2>
            <p className='text-lg mb-10 opacity-90 max-w-2xl mx-auto'>
              Get instant response, personalized service, and easy ordering.
              Chat with us now to place your order!
            </p>
            <a
              href={`${contact.whatsappLink}?text=${encodeURIComponent("Hello! I'm interested in ordering SWASTH-THIK Traditional Bengali Pickles.\n\nI would like to know more about:\n• Available products and sizes\n• Current pricing\n• Delivery to my location\n\nThank you!")}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 bg-on-primary text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl'
            >
              <span className='material-symbols-outlined text-2xl'>chat</span>
              Order Now on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className='py-20 px-6 bg-surface'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-text-muted max-w-2xl mx-auto'>
              Everything you need to know about our pickles
            </p>
          </motion.div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-surface-container rounded-2xl overflow-hidden shadow-md'
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className='w-full px-8 py-6 flex items-center justify-between text-left hover:bg-surface-container-high transition-colors'
                >
                  <span className='font-bold text-lg text-primary pr-4'>
                    {faq.question}
                  </span>
                  <span className='material-symbols-outlined text-primary flex-shrink-0'>
                    {openFaq === index ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className='px-8 pb-6 text-text-muted leading-relaxed'>
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
