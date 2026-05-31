// Product Data
export const products = [
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
]

// Why Choose Us Data
export const whyChoose = [
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

// Process Steps Data
export const process = [
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

// Customer Reviews Data
export const reviews = [
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

// FAQ Data
export const faqs = [
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

// Contact Information
export const contact = {
  phone: '919330690128',
  phoneDisplay: '+91 93306 90128',
  whatsappLink: 'https://wa.me/919330690128',
  email: 'info@swasththik.com',
  address: {
    street: '123 Bengali Lane',
    city: 'Kolkata',
    state: 'West Bengal',
    zip: '700001',
    country: 'India',
  },
  geo: {
    latitude: 22.5726,
    longitude: 88.3639,
  },
}

// Site Metadata
export const siteMetadata = {
  name: 'SWASTH-THIK',
  tagline: 'Authentic Recipes, Homemade Goodness',
  description:
    'Handcrafted traditional Bengali pickles made with love. Sweet & Spicy Mango Pickle using authentic family recipes, pure mustard oil, and finest ingredients.',
  shortDescription:
    'Traditional Bengali pickles handcrafted with love using authentic family recipes and the finest ingredients.',
  url: 'https://swasththik.vercel.app',
  logo: '/logo.png',
  socialMedia: {
    facebook: '#',
    instagram: '#',
    twitter: '@swasththik',
  },
}

// Footer Navigation Links
export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/#products' },
    { label: 'Our Story', href: '/#story' },
    { label: 'Reviews', href: '/#reviews' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Shipping Info', href: '/shipping-info' },
  ],
}

// Helper: Convert products array to object keyed by slug
export const productsMap = products.reduce(
  (acc, product) => {
    acc[product.slug] = product
    return acc
  },
  {} as Record<string, (typeof products)[0]>
)
