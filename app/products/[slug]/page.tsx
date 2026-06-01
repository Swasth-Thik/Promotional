import Link from 'next/link'
import { notFound } from 'next/navigation'
import { productsMap as products, contact } from '@/lib/data'
import ImageZoom from '@/components/ImageZoom'
import InteractiveIngredients from '@/components/InteractiveIngredients'
import HealthBenefitsShowcase from '@/components/HealthBenefitsShowcase'

// Generate metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    return {}
  }

  const imageUrl = `https://swasththik.vercel.app${product.image}`

  return {
    title: `${product.nameEn} (${product.name}) | SWASTH-THIK Traditional Bengali Pickles`,
    description: product.description,
    metadataBase: new URL('https://swasththik.vercel.app'),
    openGraph: {
      title: `${product.nameEn} - SWASTH-THIK`,
      description: product.description,
      url: `https://swasththik.vercel.app/products/${product.slug}`,
      siteName: 'SWASTH-THIK',
      images: [
        {
          url: imageUrl,
          width: 1122,
          height: 1402,
          alt: product.nameEn,
          type: 'image/png',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.nameEn} - SWASTH-THIK`,
      description: product.description,
      images: [imageUrl],
      creator: '@swasththik',
    },
  }
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.nameEn,
    alternateName: product.name,
    image: `https://swasththik.vercel.app${product.image}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'SWASTH-THIK',
    },
    offers: product.sizes.map((size) => ({
      '@type': 'Offer',
      price: size.price.replace('₹', ''),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split('T')[0],
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'IN',
          addressRegion: 'West Bengal',
        },
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
    category: 'Food & Beverages',
    productionDate: new Date().toISOString().split('T')[0],
  }

  return (
    <main className='bg-background'>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className='pt-32 pb-20 px-6 bg-surface-cream'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Product Image */}
            <div className='relative w-full'>
              <div className='aspect-square rounded-3xl overflow-hidden shadow-2xl bg-surface'>
                <img
                  src={product.image}
                  alt={product.nameEn}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Product Info */}
            <div
              className='space-y-6'
            >
              <div>
                <span className='inline-block px-4 py-2 bg-surface-container rounded-full text-sm font-semibold text-primary mb-4'>
                  Traditional Bengali Recipe
                </span>
                <h1 className='text-3xl font-headline font-bold text-primary mb-2'>
                  {product.name}
                </h1>
                <h2 className='text-2xl text-accent font-semibold mb-4'>
                  {product.nameEn}
                </h2>
                <p className='text-lg text-text-muted leading-relaxed mb-6'>
                  {product.longDescription}
                </p>
              </div>

              {/* Feature Highlights with Real Illustrated Badges */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 py-6'>
                <div className='flex flex-col items-center text-center group'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-300 group-hover:scale-105 overflow-hidden shadow-sm bg-white border border-outline/10 p-0.5'>
                    <img
                      src='/badge_handmade_real.png'
                      alt='Hygienically Handmade'
                      className='w-full h-full object-contain scale-[1.12]'
                    />
                  </div>
                  <p className='text-xs font-semibold text-primary mt-1'>Hygienically</p>
                  <p className='text-xs text-text-muted'>Handmade</p>
                </div>
                <div className='flex flex-col items-center text-center group'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-300 group-hover:scale-105 overflow-hidden shadow-sm bg-white border border-outline/10 p-0.5'>
                    <img
                      src='/badge_ingredients_real.png'
                      alt='Premium Ingredients'
                      className='w-full h-full object-contain scale-[1.12]'
                    />
                  </div>
                  <p className='text-xs font-semibold text-primary mt-1'>Premium</p>
                  <p className='text-xs text-text-muted'>Ingredients</p>
                </div>
                <div className='flex flex-col items-center text-center group'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-300 group-hover:scale-105 overflow-hidden shadow-sm bg-white border border-outline/10 p-0.5'>
                    <img
                      src='/badge_sun_dried_real.png'
                      alt='Sun Dried in Barnis'
                      className='w-full h-full object-contain scale-[1.12]'
                    />
                  </div>
                  <p className='text-xs font-semibold text-primary mt-1'>Sun Dried</p>
                  <p className='text-xs text-text-muted'>in Barnis</p>
                </div>
                <div className='flex flex-col items-center text-center group'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-300 group-hover:scale-105 overflow-hidden shadow-sm bg-white border border-outline/10 p-0.5'>
                    <img
                      src='/badge_no_chemicals_real.png'
                      alt='No Chemical Preservatives'
                      className='w-full h-full object-contain scale-[1.12]'
                    />
                  </div>
                  <p className='text-xs font-semibold text-primary mt-1'>No Chemical</p>
                  <p className='text-xs text-text-muted'>Preservatives</p>
                </div>
              </div>

              {/* Size & Pricing Options */}
              <div className='space-y-3 mb-4'>
                <p className='text-sm font-semibold text-primary mb-3'>
                  Available Sizes:
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {product.sizes.map((size, idx) => {
                    const weight = parseInt(size.weight)
                    const price = parseInt(size.price.replace('₹', ''))
                    const per100g = Math.round((price / weight) * 100)
                    const isBestValue = idx === 1 // 500g is best value

                    return (
                      <div
                        key={idx}
                        className={`relative rounded-2xl p-4 border-2 transition-all hover:shadow-lg ${
                          isBestValue
                            ? 'border-primary bg-surface shadow-md'
                            : 'border-accent/30 bg-accent/5'
                        }`}
                      >
                        {isBestValue && (
                          <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                            <span className='bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full shadow-md'>
                              Best Value
                            </span>
                          </div>
                        )}
                        <div className='text-center'>
                          <div className={`text-2xl font-bold mb-1 ${
                            isBestValue ? 'text-primary' : 'text-accent'
                          }`}>
                            {size.weight} Pack
                          </div>
                          <div className='flex items-baseline justify-center gap-2 mb-2'>
                            <span className='text-3xl font-bold text-primary'>
                              {size.price}
                            </span>
                          </div>
                          <div className='text-xs text-text-muted bg-surface-container px-3 py-1 rounded-full inline-block'>
                            ₹{per100g}/100g
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='bg-primary/10 border border-primary/20 rounded-xl p-4 mb-4'>
                <div className='flex items-start gap-2'>
                  <span className='material-symbols-outlined text-primary mt-0.5'>
                    local_shipping
                  </span>
                  <p className='text-sm text-primary font-medium'>
                    <strong>Special Offer:</strong> Get FREE delivery when you
                    purchase both 500g products together!
                  </p>
                </div>
              </div>

              <div className='space-y-2'>
                <p className='text-sm text-text-muted'>
                  <strong className='text-primary'>Shelf Life:</strong> 8-12
                  months
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <a
                  href={`${contact.whatsappLink}?text=${encodeURIComponent(`Hello! I'm interested in ordering *${product.nameEn}* (${product.name}).\n\n👉 Product Details:\nhttps://swasththik.vercel.app/products/${product.slug}\n\n📦 Available Sizes:\n• 200g - ₹80\n• 500g - ₹180\n\nPlease confirm:\n✓ Product availability\n✓ Delivery to my location in Kolkata\n✓ Expected delivery time\n\nThank you!`)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 bg-primary text-on-primary px-8 py-4 rounded-full font-semibold text-center hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                >
                  <span className='material-symbols-outlined'>chat</span>
                  Order on WhatsApp
                </a>
                <Link
                  href='/'
                  className='px-8 py-4 rounded-full font-semibold text-center border-2 border-primary text-primary hover:bg-surface-container transition-all duration-300'
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className='py-20 px-6 bg-surface'>
        <div className='max-w-6xl mx-auto'>
          <div
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-headline font-bold text-primary mb-4'>
              Pure Ingredients
            </h2>
            <p className='text-lg text-text-muted'>
              Only the finest natural ingredients go into every pouch
            </p>
          </div>

          <InteractiveIngredients ingredients={product.ingredients} />
        </div>
      </section>

      {/* Editorial Poster Showcase Section */}
      <section className='py-24 px-6 bg-gradient-to-br from-surface-cream via-surface to-surface-cream border-y border-outline/15 overflow-hidden relative'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
            
            {/* Left: Premium Storytelling & Editorial Copy */}
            <div className='lg:col-span-6 space-y-8 text-left'>
              <div>
                <span className='inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-xs font-bold text-accent tracking-wider uppercase mb-4'>
                  <span className='material-symbols-outlined text-[14px]'>auto_awesome</span>
                  Visual Heritage
                </span>
                <h2 className='text-4xl md:text-5xl font-headline font-bold text-primary leading-tight'>
                  The Canvas of <br />
                  <span className='text-accent italic font-serif font-normal'>Bengali Tradition</span>
                </h2>
              </div>
              
              <p className='text-lg text-text-muted leading-relaxed font-light'>
                Every bottle of our <strong className='text-primary font-semibold'>{product.nameEn}</strong> is more than just a pickle—it is a piece of art handcrafted over generations. 
              </p>

              <blockquote className='border-l-4 border-accent pl-4 italic text-primary/80 bg-accent/5 p-4 rounded-r-xl text-base leading-relaxed'>
                "Sun-ripened Bengali mangoes, cold-pressed mustard oil, and our grandmother's secret spice mixture, slowly matured under the warm summer sun."
              </blockquote>

              {/* Editorial list features */}
              <div className='space-y-4 pt-2'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 border border-primary/10 shadow-sm'>
                    <span className='material-symbols-outlined text-xl'>wb_sunny</span>
                  </div>
                  <div>
                    <h4 className='font-bold text-primary text-base'>Sun-Dried Artistry</h4>
                    <p className='text-sm text-text-muted mt-0.5'>Matured slowly in traditional ceramic 'Barnis' under natural sunlight to capture authentic flavor depth.</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent flex-shrink-0 border border-accent/10 shadow-sm'>
                    <span className='material-symbols-outlined text-xl'>nutrition</span>
                  </div>
                  <div>
                    <h4 className='font-bold text-primary text-base'>Handpicked Raw Spices</h4>
                    <p className='text-sm text-text-muted mt-0.5'>Aromatic mustard seeds, fenugreek, and native red chilies hand-ground in small, hygienic home-batches.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Immersive Poster Showcase with Zoom Magnifier */}
            <div className='lg:col-span-6 flex flex-col items-center justify-center'>
              <div className='relative w-full max-w-[540px] group'>
                
                {/* 3D background glowing drop shadows */}
                <div className='absolute -inset-1 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10' />
                
                {/* Mockup Frame Container with hover scaling and shadows */}
                <div className='relative rounded-3xl overflow-hidden bg-surface shadow-2xl border-8 border-surface p-1 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)]'>
                  
                  {/* Poster Image with Magnifier Zoom Component */}
                  <ImageZoom
                    src={product.poster}
                    alt={`${product.nameEn} Promotional Poster`}
                  />

                  {/* Micro-interaction helper banner */}
                  <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5'>
                      <span className='material-symbols-outlined text-sm animate-pulse'>zoom_in</span>
                      HOVER IMAGE TO MAGNIFY RECIPE DETAILS
                    </p>
                  </div>

                </div>

                {/* Aesthetic shadow indicator beneath the frame */}
                <div className='w-[85%] h-6 bg-black/10 rounded-full blur-xl mx-auto mt-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500' />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Health & Gut Wellness Showcase Section */}
      <section className='py-24 px-6 bg-surface-cream border-t border-outline/5'>
        <div className='max-w-6xl mx-auto space-y-12'>
          <div className='text-center max-w-2xl mx-auto space-y-4'>
            <span className='text-xs font-bold tracking-widest text-accent uppercase bg-accent/5 py-1.5 px-4 rounded-full'>
              Wellness & Nutrition
            </span>
            <h2 className='text-3xl sm:text-4xl font-headline font-bold text-primary'>
              Health & Gut Benefits
            </h2>
            <p className='text-sm sm:text-base text-text-muted leading-relaxed font-light'>
              Our traditional preparation doesn't just taste incredible—it naturally nurtures and protects your body.
            </p>
          </div>

          <HealthBenefitsShowcase benefits={product.benefits} />
        </div>
      </section>

      {/* Secret Recipe & Pairings Section */}
      <section className='py-24 px-6 bg-surface border-t border-outline/5'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
            
            {/* Story (7 cols) */}
            <div className='lg:col-span-7 space-y-6'>
              <span className='text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 py-1.5 px-4 rounded-full'>
                Heritage Story
              </span>
              <h3 className='text-3xl font-headline font-bold text-primary'>
                The Secret Recipe
              </h3>
              <p className='text-base sm:text-lg text-text-muted leading-relaxed italic font-serif font-light'>
                "{product.story}"
              </p>
            </div>

            {/* Pairings (5 cols) */}
            <div className='lg:col-span-5 bg-surface-cream p-8 rounded-3xl border border-outline/10 shadow-sm space-y-4'>
              <h4 className='font-headline font-bold text-primary text-xl flex items-center gap-2'>
                <span className='material-symbols-outlined text-accent'>restaurant</span>
                Perfect Pairings
              </h4>
              <p className='text-xs text-text-muted leading-relaxed'>
                Elevate your everyday dining. This authentic blend pairs exquisitely with:
              </p>
              <ul className='space-y-3 pt-2'>
                {product.pairings.map((pairing, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 text-sm text-primary/85 font-medium'
                  >
                    <span className='w-2 h-2 rounded-full bg-accent' />
                    {pairing}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className='py-20 px-6 bg-primary text-on-primary'>
        <div className='max-w-4xl mx-auto text-center'>
          <div
          >
            <span className='material-symbols-outlined text-5xl mb-4 inline-block'>
              shopping_bag
            </span>
            <h2 className='text-3xl md:text-4xl font-headline font-bold mb-4'>
              Ready to Order?
            </h2>
            <p className='text-lg mb-8 opacity-90'>
              Get your {product.nameEn} delivered fresh to your doorstep. Choose
              your size and order now via WhatsApp!
            </p>
            <a
              href={`${contact.whatsappLink}?text=${encodeURIComponent(`Hello! I would like to place an order for *${product.nameEn}* (${product.name}).\n\n👉 Product Details:\nhttps://swasththik.vercel.app/products/${product.slug}\n\n📦 Available Sizes:\n• 200g - ₹80\n• 500g - ₹180\n\n🎁 Special Offer: FREE delivery when purchasing both 500g products together!\n\nPlease confirm:\n✓ Product availability\n✓ Delivery to my location in Kolkata\n✓ Expected delivery time\n\nLooking forward to your response!`)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 bg-on-primary text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl'
            >
              <span className='material-symbols-outlined text-2xl'>chat</span>
              Order Now on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
