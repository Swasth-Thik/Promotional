'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      slug: 'sweet-mango-pickle',
      name: 'মিষ্টি আমের আচার',
      nameEn: 'Sweet Mango Pickle',
      sizes: [
        { weight: '200g', price: '₹80' },
        { weight: '500g', price: '₹180' },
      ],
      image: '/sweet-mango-pickle.png',
      description:
        'Handcrafted with sun-ripened Bengali mangoes, jaggery, and traditional spices.',
    },
    {
      id: 2,
      slug: 'spicy-mango-pickle',
      name: 'ঝাল আমের আচার',
      nameEn: 'Spicy Mango Pickle',
      sizes: [
        { weight: '200g', price: '₹80' },
        { weight: '500g', price: '₹180' },
      ],
      image: '/spicy-mango-pickle.png',
      description:
        'Fiery and flavorful traditional Bengali pickle made with raw mangoes, mustard oil, and aromatic spices.',
    },
  ]

  const whyChoose = [
    {
      icon: 'home',
      title: 'Homemade',
      description:
        'Prepared in small batches in our home kitchen with love and care',
    },
    {
      icon: 'restaurant',
      title: 'Traditional Bengali Recipe',
      description: 'Authentic family recipes passed down through generations',
    },
    {
      icon: 'eco',
      title: 'Quality Ingredients',
      description:
        'Only the finest mangoes and pure mustard oil from local sources',
    },
    {
      icon: 'verified',
      title: 'Hygienic Preparation',
      description:
        'Prepared in clean, sanitized conditions following food safety standards',
    },
  ]

  const process = [
    {
      icon: 'nutrition',
      title: 'Fresh Mangoes',
      description: 'Handpicked raw mangoes at peak freshness',
    },
    {
      icon: 'local_florist',
      title: 'Traditional Spices',
      description: 'Aromatic blend of Bengali spices',
    },
    {
      icon: 'favorite',
      title: 'Homemade Preparation',
      description: 'Lovingly prepared using traditional methods',
    },
    {
      icon: 'package',
      title: 'Fresh Packaging',
      description: 'Sealed in clean jars to preserve freshness',
    },
  ]

  const reviews = [
    {
      name: 'Priya Chatterjee',
      location: 'Kolkata',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'The sweet mango pickle tastes exactly like my grandmother used to make! The balance of sweetness and spices is perfect.',
    },
    {
      name: 'Amit Das',
      location: 'Mumbai',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Best Bengali pickle I have found online! The spicy version has the right amount of heat and the mustard oil flavor is authentic.',
    },
    {
      name: 'Anjali Roy',
      location: 'Delhi',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'Reminds me of home! The quality is excellent and the taste is genuinely homemade. Will definitely order again.',
    },
  ]

  const faqs = [
    {
      question: 'What is the shelf life of the pickles?',
      answer:
        'Our pickles have a shelf life of 8-12 months when stored properly. Keep them in a cool, dry place away from direct sunlight. Always use a clean, dry spoon to avoid contamination.',
    },
    {
      question: 'How should I store the pickles?',
      answer:
        'Store in a cool, dry place away from direct sunlight. Once opened, ensure the lid is tightly closed after each use and always use a clean, dry spoon. Refrigeration is not necessary but can extend freshness.',
    },
    {
      question: 'Do you deliver to my location?',
      answer:
        'Currently, we provide delivery services within Kolkata and nearby areas. We use reliable local delivery partners to ensure your pickles reach you fresh and in perfect condition. Same-day or next-day delivery available for most areas in Kolkata.',
    },
    {
      question: 'What ingredients do you use?',
      answer:
        'We use only natural ingredients: fresh raw mangoes, pure mustard oil, traditional Bengali spices (mustard seeds, fenugreek, turmeric, red chili), jaggery (for sweet pickle), and salt. No artificial preservatives or colors.',
    },
  ]

  return (
    <div className='bg-background'>
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
              <span>500+ Happy Customers</span>
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
                href={`https://wa.me/919330690128?text=${encodeURIComponent("Hello! I'm interested in ordering SWASTH-THIK Traditional Bengali Pickles.\n\nI would like to know more about:\n• Available products and sizes\n• Current pricing\n• Delivery to my location\n\nThank you!")}`}
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
                <span>100% Organic</span>
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
              Our Featured Products
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
            className='mb-8 bg-gradient-to-r from-primary to-primary-light text-on-primary p-4 rounded-2xl shadow-lg text-center'
          >
            <div className='flex items-center justify-center gap-3'>
              <span className='material-symbols-outlined text-2xl'>
                local_shipping
              </span>
              <p className='text-sm md:text-base font-semibold'>
                🎉 Special Offer: FREE DELIVERY when you buy both 500g products
                together!
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
                      initial={{ x: -20, opacity: 0 }}
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
                        initial={{ x: -20, opacity: 0 }}
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
                      {product.sizes.map((size, idx) => (
                        <div
                          key={idx}
                          className='bg-gradient-to-br from-surface-container to-surface-container-low border border-outline/20 px-4 py-3.5 rounded-xl text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer'
                        >
                          <div className='text-xs font-medium text-text-muted mb-1'>
                            {size.weight}
                          </div>
                          <div className='text-xl font-bold text-primary'>
                            {size.price}
                          </div>
                        </div>
                      ))}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className='inline-block px-4 py-2 bg-surface-container rounded-full text-sm font-semibold text-primary mb-6'>
                Our Story
              </span>
              <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mb-6'>
                Preserving Bengali Heritage, One Jar at a Time
              </h2>
              <p className='text-lg text-text-muted mb-6 leading-relaxed'>
                Swasth-Thik was born from a deep love for traditional Bengali
                cuisine and a desire to share authentic homemade flavors with
                food lovers across India.
              </p>
              <p className='text-lg text-text-muted mb-6 leading-relaxed'>
                Every jar of our pickle carries the essence of Bengal – from the
                carefully selected raw mangoes to the aromatic mustard oil and
                the perfect blend of traditional spices that have been passed
                down through generations in our family.
              </p>
              <p className='text-lg text-text-muted leading-relaxed'>
                We believe in the purity of homemade food. No shortcuts, no
                artificial preservatives – just authentic recipes, quality
                ingredients, and a whole lot of love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300'>
                  <span className='material-symbols-outlined text-4xl text-primary group-hover:text-on-primary'>
                    {item.icon}
                  </span>
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

      {/* HOW WE MAKE IT */}
      <section className='py-20 px-6 bg-surface'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-headline font-bold text-primary mb-4'>
              How We Make It
            </h2>
            <p className='text-lg text-text-muted max-w-2xl mx-auto'>
              Our traditional process from farm to jar
            </p>
          </motion.div>

          <div className='relative'>
            {/* Timeline Line - Desktop (center) */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-outline hidden md:block' />

            {/* Timeline Line - Mobile (left) */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-outline md:hidden' />

            <div className='space-y-12'>
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Icon - Mobile (left side) */}
                  <div className='flex md:hidden w-16 h-16 bg-primary rounded-full items-center justify-center z-10 shadow-lg flex-shrink-0'>
                    <span className='material-symbols-outlined text-2xl text-on-primary'>
                      {step.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className='bg-surface-container p-6 rounded-2xl shadow-md w-full md:inline-block'>
                      <h3 className='text-xl md:text-2xl font-bold text-primary mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-sm md:text-base text-text-muted'>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon - Desktop (center) */}
                  <div className='hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center z-10 shadow-lg flex-shrink-0'>
                    <span className='material-symbols-outlined text-3xl text-on-primary'>
                      {step.icon}
                    </span>
                  </div>

                  <div className='flex-1 hidden md:block' />
                </motion.div>
              ))}
            </div>
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
              <span className='text-2xl font-bold text-primary'>5.0</span>
              <span className='text-sm text-text-muted'>from 500+ reviews</span>
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
            className='mt-12 text-center'
          >
            <div className='inline-flex items-center gap-8 bg-surface px-8 py-4 rounded-2xl shadow-lg'>
              <div className='text-center border-r border-outline/30 pr-8'>
                <p className='text-3xl font-bold text-primary mb-1'>500+</p>
                <p className='text-sm text-text-muted'>Happy Customers</p>
              </div>
              <div className='text-center border-r border-outline/30 pr-8'>
                <p className='text-3xl font-bold text-primary mb-1'>1000+</p>
                <p className='text-sm text-text-muted'>Jars Sold</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary mb-1'>5.0</p>
                <p className='text-sm text-text-muted'>Average Rating</p>
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
              href={`https://wa.me/919330690128?text=${encodeURIComponent("Hello! I'm interested in ordering SWASTH-THIK Traditional Bengali Pickles.\n\nI would like to know more about:\n• Available products and sizes\n• Current pricing\n• Delivery to my location\n\nThank you!")}`}
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
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
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
