import Link from 'next/link';

export default function ProductCatalog() {
  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="mb-8 md:mb-20 text-center md:text-left">
        <h1 className="font-headline text-4xl md:text-7xl text-on-surface tracking-tight mb-4 mt-4 md:mt-0">Our Heirloom Collection</h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A curated selection of ancestral recipes, sun-dried spices, and hand-churned delicacies. Each product is a testament to the purity of traditional Indian kitchens.
        </p>
      </header>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 md:space-y-12">
          <section>
            <h3 className="font-headline text-xl text-primary mb-6">Traditional Categories</h3>
            <ul className="space-y-4 font-label">
              <li>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 bg-surface-container-high transition-all" type="checkbox"/>
                  <span className="text-on-surface group-hover:text-primary transition-colors">Achar (Pickles)</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 bg-surface-container-high transition-all" type="checkbox"/>
                  <span className="text-on-surface group-hover:text-primary transition-colors">Hand-Churned Ghee</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 bg-surface-container-high transition-all" type="checkbox"/>
                  <span className="text-on-surface group-hover:text-primary transition-colors">Natural Squash</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 bg-surface-container-high transition-all" type="checkbox"/>
                  <span className="text-on-surface group-hover:text-primary transition-colors">Gourmet Sauces</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 bg-surface-container-high transition-all" type="checkbox"/>
                  <span className="text-on-surface group-hover:text-primary transition-colors">Artisan Spices</span>
                </label>
              </li>
            </ul>
          </section>
          
          <section className="p-6 rounded-xl bg-surface-container-low relative overflow-hidden">
            <div className="linen-texture absolute inset-0 pointer-events-none z-0"></div>
            <div className="relative z-10">
              <h4 className="font-headline text-lg text-tertiary mb-3">The Quality Seal</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Every jar is vacuum-sealed and inspected for purity, following 100-year-old preservation techniques.</p>
            </div>
          </section>
        </aside>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12">
            <div className="group flex flex-col">
              <Link href="/products/1" className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-highest relative mb-6 block w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Heritage Mango Achar" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFPya8Wk6bS-xDbf-V1wwP6coY3G1z2-ugcr9USMUfnICPym_skPX3b9lWk_d_nUdyQfgC_a9qfTvfttUMvUjEOqTYYcDCFNJ_5QUagL8Y26J2KL4yR2qUdppGxIyxJW1AGHIDGbqZ2ZzQYFhf_DG5efkVzFZ7AK-PrJJS3NZKaRFzGiIJ_A8P57gjfQGTYusKaEGvxMGXLFiUgoqyAFb2CHsTmt5AsZoyu0vfiZ_pdrNqKjUkbghjAwQD4ckDPL1ObD2ixjRcrnU"
                />
                <span className="absolute top-4 left-4 bg-tertiary text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">Bestseller</span>
              </Link>
              <h3 className="font-headline text-2xl text-on-surface mb-2 mt-auto">Heritage Mango Achar</h3>
              <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Sun-matured over 40 days using raw Himalayan mangoes and cold-pressed mustard oil.</p>
              <Link href="/products/1" className="w-full text-center block py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Enquire Now</Link>
            </div>
            
            <div className="group mt-0 md:mt-16 flex flex-col">
              <Link href="/products/2" className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-highest relative mb-6 block w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Bilona Churned Ghee" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYlh8kQrMDnvbqM3twcq87ycTjkRLiFBz5ZpjoojiZTJssryzkHg7oeU5X0nZwQGuknnCUSTk0FYEN_XLSUWWK9bFEBC6qVp3oVDwVW6Dqe5ZD9caBbOeVICDWL9KUIMESKnZi8vJfsIWnx-BlLcrxRSaWq0UM0trHJKxUo9nDghrp_FXrBKX0JIoItbXe7GaNKfUEb9dB38lRRVfQ9VFvqbUnwUlqFmaB_dNq4QPtciQnHADh43C2iU2zztZeVS9rHUMmR8fW1Oo"
                />
                <span className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">A2 Organic</span>
              </Link>
              <h3 className="font-headline text-2xl text-on-surface mb-2 mt-auto">Bilona Churned Ghee</h3>
              <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Pure A2 cow milk ghee, hand-churned in small batches using the ancient Vedic Bilona method.</p>
              <Link href="/products/2" className="w-full text-center block py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Enquire Now</Link>
            </div>
            
            <div className="group flex flex-col">
              <Link href="/products/3" className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-highest relative mb-6 block w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Wild Buransh Squash" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_rIGy_IKtm4UdrYR8lM0r5xcBHaeh7Eqwh8DFerpHxo04jjh5rvshzjZmh2HDvazKF4WVxbeSn1WAxxhnu6Qg40K6G_pWhS0rMfv2CzT8hSHh2uktxfMct2Z17L58v_WalhjWFX8OZIYT4-8zj-snhC2ADLSzrnghhEdphodc5nR1_3QKN2yaEDgoyLVqjWfwESUOLYDqZb-Ryj-uJyzxXRDqzy3-_VxljAaMPQDQYFb4GPgEsvF1I3yjRcNPy7p5K3_RUDFpFZY"
                />
              </Link>
              <h3 className="font-headline text-2xl text-on-surface mb-2 mt-auto">Wild Buransh Squash</h3>
              <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Hand-picked Himalayan Rhododendron petals infused with natural rock sugar for a refreshing tonic.</p>
              <Link href="/products/3" className="w-full text-center block py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Enquire Now</Link>
            </div>
            
            <div className="group mt-0 md:mt-16 flex flex-col">
              <Link href="/products/4" className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-highest relative mb-6 block w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Lakadong Golden Turmeric" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSXnLEqtrlFx84JJqaQsBRHuM2dEQwHI5qBXDRYR95U6ngzC-6mZMwWqSmbhiaddwEbweorc_6oMDAtjUMydjjaQECc34z3aKu0gfL6OwOZTtgu8cNfnTy8iesLVYxsyuY_G1Z6unb7O-qR8U2J_540GtYL8p7uWa1qj6VTksb_5_Kvd0p98mTh8g0lHmOJRagX2mIUM90fn2Du15YNL8rWSce46uZv-nfyBlHQZ5vBQJXVl-Pn-Gqm2M67Ae33UgFyM-P7FaRFA8"
                />
                <span className="absolute top-4 left-4 bg-tertiary text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">High Curcumin</span>
              </Link>
              <h3 className="font-headline text-2xl text-on-surface mb-2 mt-auto">Lakadong Golden Turmeric</h3>
              <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Authentic Meghalayan turmeric with 9% curcumin content, ground at low temperatures.</p>
              <Link href="/products/4" className="w-full text-center block py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Enquire Now</Link>
            </div>
            
            <div className="group flex flex-col">
              <Link href="/products/5" className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-highest relative mb-6 block w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Stone-Ground Naga Chilli" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd33mrKRYW5PW2JfcKZmhOfs0AJGVLmxAezQ6KzvrlWFDPAJ7WCWHSlWZxjNAlXCrcJgpR3war6ubAv6DCdocyr0RbKyMJcHwUjnk0UF3w3EbZjwNfVCQJ0oORO0Ty0fEtYU4PmFLj1EF0-R_xh4MlO4069fGtpz3QLfTUkE_82byUSpxqrpWvb8jdAGxuv0jAlH-qraFY_oI-H8ab_MqlguW9KkZWCG6fgWPNTHn7TETptoQ_ulr4g9ro1gjiG4De8aJp46LCRpU"
                />
              </Link>
              <h3 className="font-headline text-2xl text-on-surface mb-2 mt-auto">Stone-Ground Naga Chilli</h3>
              <p className="text-on-surface-variant font-body mb-6 line-clamp-2">A slow-fermented, smokey sauce made from ghost peppers and traditional hill spices.</p>
              <Link href="/products/5" className="w-full text-center block py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Enquire Now</Link>
            </div>
            
            <div className="group mt-0 md:mt-16 flex flex-col">
              <Link href="/products/6" className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-highest relative mb-6 block w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Mountain Garlic Conserve" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCgdidWMxPc6MDGYbZ8BE1uUmOnissNoWekx075PpG9cef-PZhGvA8HcliSXhoB3odTaZdUxXY38scLpOm8CHSrqPHpb-jiUbthCcEhFbCbBvKYnWu759KPkUpWqYsKLDn49gwBspiDnc3TluhifPeqj_AnfHpVgNJ70b2a7mKFgLsBobwE87IyPtd4xi_dbJbztHvv36wX7CLfLBJbdZFl58nJLZo5zLejSKJGbQpkz908ohFpH4ZY-1nR5klVpXA8zIO_xT-vz4"
                />
              </Link>
              <h3 className="font-headline text-2xl text-on-surface mb-2 mt-auto">Mountain Garlic Conserve</h3>
              <p className="text-on-surface-variant font-body mb-6 line-clamp-2">Peel-on mountain garlic cloves matured in a blend of 12 aromatic hill spices.</p>
              <Link href="/products/6" className="w-full text-center block py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Enquire Now</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
