import Link from 'next/link'
import { notFound } from 'next/navigation'

// Product data
const products = {
  'sweet-mango-pickle': {
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
      'Handcrafted with sun-ripened Bengali mangoes, jaggery, and traditional spices. A sweet and tangy delight that brings back childhood memories.',
    longDescription:
      "Our Sweet Mango Pickle is a traditional Bengali delicacy made with love using our grandmother's secret recipe. Each mango is carefully selected at peak ripeness, hand-cut, and mixed with aromatic spices and pure jaggery to create the perfect balance of sweet and tangy flavors.",
    ingredients: [
      { name: 'Raw Mangoes', desc: 'Sun-ripened Bengali variety' },
      { name: 'Jaggery', desc: 'Organic, unrefined sweetener' },
      { name: 'Mustard Oil', desc: 'Cold-pressed, pure' },
      { name: 'Spices', desc: 'Fenugreek, mustard, turmeric' },
    ],
    benefits: [
      {
        icon: 'favorite',
        title: 'Natural Sweetness',
        desc: 'Made with organic jaggery, no refined sugar',
      },
      {
        icon: 'eco',
        title: 'Rich in Vitamins',
        desc: 'Raw mangoes packed with Vitamin C',
      },
      {
        icon: 'spa',
        title: 'Digestive Aid',
        desc: 'Traditional spices aid digestion',
      },
    ],
    pairings: [
      'Dal Chawal (Lentils & Rice)',
      'Luchi (Bengali Fried Bread)',
      'Plain Yogurt & Rice',
      'Paratha',
    ],
    story:
      'This recipe has been passed down through three generations in our family. My grandmother would make this pickle every summer when mangoes were in season. She believed the key to great pickle was patience - letting the mangoes absorb the spices slowly under the warm sun.',
  },
  'spicy-mango-pickle': {
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
      'Fiery and flavorful traditional Bengali pickle made with raw mangoes, mustard oil, and aromatic spices. Perfect with rice and dal.',
    longDescription:
      'Our Spicy Mango Pickle is a bold, authentic Bengali pickle that packs a punch! Made with tart raw mangoes and a special blend of red chilies and traditional spices, this pickle is perfect for those who love heat and authentic flavors.',
    ingredients: [
      { name: 'Raw Mangoes', desc: 'Tart, firm Bengali variety' },
      { name: 'Red Chili', desc: 'Kashmiri & local varieties' },
      { name: 'Mustard Oil', desc: 'Pure, cold-pressed' },
      { name: 'Spices', desc: 'Mustard, fenugreek, nigella' },
    ],
    benefits: [
      {
        icon: 'local_fire_department',
        title: 'Boosts Metabolism',
        desc: 'Red chilies help increase metabolism',
      },
      {
        icon: 'health_and_safety',
        title: 'Anti-inflammatory',
        desc: 'Turmeric and spices reduce inflammation',
      },
      {
        icon: 'restaurant',
        title: 'Appetite Stimulant',
        desc: 'Aromatic spices enhance appetite',
      },
    ],
    pairings: [
      'Steaming Hot Dal & Rice',
      'Plain Khichuri',
      'Fried Fish',
      'Parathas with Curd',
    ],
    story:
      'The secret to this pickle lies in the quality of mustard oil and the perfect blend of spices. We use only the finest Kashmiri red chilies for color and local chilies for heat, creating a perfect balance that awakens your taste buds without overwhelming them.',
  },
}

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
            <div
              className='relative'
            >
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

              <div className='flex items-center gap-6 py-6 border-y border-outline'>
                <div className='text-center'>
                  <span className='material-symbols-outlined text-3xl text-primary mb-2 block'>
                    home
                  </span>
                  <p className='text-xs text-text-muted'>Homemade</p>
                </div>
                <div className='text-center border-x border-outline px-6'>
                  <span className='material-symbols-outlined text-3xl text-primary mb-2 block'>
                    eco
                  </span>
                  <p className='text-xs text-text-muted'>Organic</p>
                </div>
                <div className='text-center'>
                  <span className='material-symbols-outlined text-3xl text-primary mb-2 block'>
                    verified
                  </span>
                  <p className='text-xs text-text-muted'>100% Natural</p>
                </div>
              </div>

              {/* Size & Pricing Options */}
              <div className='space-y-3 mb-4'>
                <p className='text-sm font-semibold text-primary mb-2'>
                  Available Sizes:
                </p>
                <div className='space-y-2'>
                  {product.sizes.map((size, idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between bg-surface-container px-5 py-3 rounded-xl'
                    >
                      <span className='text-base font-medium text-primary'>
                        {size.weight}
                      </span>
                      <span className='text-xl font-bold text-accent'>
                        {size.price}
                      </span>
                    </div>
                  ))}
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
                  href={`https://wa.me/919330690128?text=${encodeURIComponent(`Hello! I'm interested in ordering *${product.nameEn}* (${product.name}).\n\n👉 Product Details:\nhttps://swasththik.vercel.app/products/${product.slug}\n\n📦 Available Sizes:\n• 200g - ₹80\n• 500g - ₹180\n\nPlease confirm:\n✓ Product availability\n✓ Delivery to my location in Kolkata\n✓ Expected delivery time\n\nThank you!`)}`}
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
              Only the finest natural ingredients go into every jar
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {product.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className='bg-surface-container p-6 rounded-2xl text-center'
              >
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='material-symbols-outlined text-2xl text-primary'>
                    nutrition
                  </span>
                </div>
                <h3 className='font-bold text-primary mb-2'>
                  {ingredient.name}
                </h3>
                <p className='text-sm text-text-muted'>{ingredient.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Story Grid */}
      <section className='py-20 px-6 bg-surface-cream'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Health Benefits */}
            <div
              className='bg-primary text-on-primary p-8 rounded-3xl'
            >
              <h3 className='text-2xl font-headline font-bold mb-6'>
                Health Benefits
              </h3>
              <div className='space-y-6'>
                {product.benefits.map((benefit, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    <span className='material-symbols-outlined text-3xl'>
                      {benefit.icon}
                    </span>
                    <div>
                      <h4 className='font-bold mb-1'>{benefit.title}</h4>
                      <p className='text-sm opacity-90'>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Story */}
            <div
              className='bg-surface p-8 rounded-3xl shadow-lg'
            >
              <h3 className='text-2xl font-headline font-bold text-primary mb-6'>
                The Secret Recipe
              </h3>
              <p className='text-text-muted leading-relaxed mb-6 italic'>
                "{product.story}"
              </p>
              <div className='bg-surface-container p-4 rounded-xl'>
                <h4 className='font-bold text-primary mb-3'>
                  Perfect Pairings:
                </h4>
                <ul className='space-y-2'>
                  {product.pairings.map((pairing, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-2 text-sm text-text-muted'
                    >
                      <span className='material-symbols-outlined text-accent text-sm'>
                        arrow_right
                      </span>
                      {pairing}
                    </li>
                  ))}
                </ul>
              </div>
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
              href={`https://wa.me/919330690128?text=${encodeURIComponent(`Hello! I would like to place an order for *${product.nameEn}* (${product.name}).\n\n👉 Product Details:\nhttps://swasththik.vercel.app/products/${product.slug}\n\n📦 Available Sizes:\n• 200g - ₹80\n• 500g - ₹180\n\n🎁 Special Offer: FREE delivery when purchasing both 500g products together!\n\nPlease confirm:\n✓ Product availability\n✓ Delivery to my location in Kolkata\n✓ Expected delivery time\n\nLooking forward to your response!`)}`}
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
