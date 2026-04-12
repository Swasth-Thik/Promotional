import Link from 'next/link';

export default function ProductDetails() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24 mt-8 md:mt-0">
        <div className="relative group">
          <div className="absolute -inset-4 bg-surface-container-low rounded-[2.5rem] linen-texture opacity-50 -z-10 transform -rotate-2"></div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5 aspect-square lg:aspect-[4/5]">
            <img 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
              alt="Close-up of a rustic ceramic jar filled with vibrant yellow and orange Spicy Mango Achar" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClm8w1O0REdSp-PJZMun8E21BxDqsoKuTiDiOyTOkGcN-8b_CiSDKwm9N7GRLaPFcqTm6vNEM1X8VkS4dN1EWLNueTM0DanGJEhwMcbVSQUyImriS9gL1YjFh01LLdFd3_yDhcrRASnVrhcgDWSO6aMGQSny_-WWcUCCL5F7DozMcqzP5BGHto5rzJ9l7EH7nAOT3hOmyO958iYJFI4Ds7yhwSaTMNUbXaoigwy_Co4jspzdqUFvuMF9eojajdlmpvKjvwaHRM9vQ"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="font-headline text-2xl italic">&quot;The essence of Summer preserved in fire.&quot;</p>
          </div>
        </div>
        
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <span className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs">Small Batch • Heritage Recipe</span>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-primary leading-tight">Spicy Mango Achar</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-light">
                A symphonic blend of hand-picked raw Rajapuri mangoes, cold-pressed mustard oil, and our ancestral spice blend, sun-matured for twenty-one days.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-8 border-y border-outline-variant/20">
            <div className="text-center">
              <span className="material-symbols-outlined text-tertiary mb-2">sunny</span>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Sun Matured</p>
            </div>
            <div className="text-center border-x border-outline-variant/20">
              <span className="material-symbols-outlined text-tertiary mb-2">energy_savings_leaf</span>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">100% Organic</p>
            </div>
            <div className="text-center">
              <span className="material-symbols-outlined text-tertiary mb-2">set_meal</span>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Preservative Free</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="w-full md:w-auto justify-center bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-label font-bold text-base md:text-lg tracking-wide hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                Enquire via Form <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid Details */}
      <section className="bg-surface-container-low relative py-16 md:py-24 asymmetric-clip">
        <div className="linen-texture absolute inset-0 pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-7 bg-surface p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-headline text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">eco</span> Ingredients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-12">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-on-surface">Rajapuri Mangoes</p>
                    <p className="text-sm text-on-surface-variant">Tart, crisp, hand-sliced</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-on-surface">Mustard Oil</p>
                    <p className="text-sm text-on-surface-variant">Cold-pressed, high-pungency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-on-surface">Kashmiri Chili</p>
                    <p className="text-sm text-on-surface-variant">Rich color, moderate heat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-on-surface">Fenugreek Seeds</p>
                    <p className="text-sm text-on-surface-variant">Aromatic, digestive aid</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-sm italic text-on-surface-variant/70 border-t border-outline-variant/10 pt-6">
                *No artificial flavors, colors, or preservatives. Just as nature intended.
            </p>
          </div>

          {/* Health Benefits */}
          <div className="md:col-span-5 bg-primary p-8 md:p-12 rounded-[2rem] text-on-primary">
            <h3 className="text-3xl font-headline mb-8">Health Benefits</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-on-primary-container">vaccines</span>
                <p className="font-light"><strong className="block font-bold">Probiotic Power</strong> Naturally fermented to support gut health and immunity.</p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-on-primary-container">bolt</span>
                <p className="font-light"><strong className="block font-bold">Digestive Catalyst</strong> Spices that stimulate metabolism and ease digestion.</p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-on-primary-container">auto_awesome</span>
                <p className="font-light"><strong className="block font-bold">Rich Antioxidants</strong> Packed with vitamins from raw mangoes and turmeric.</p>
              </li>
            </ul>
          </div>

          {/* Suggested Pairings */}
          <div className="md:col-span-5 bg-surface-container-highest p-8 md:p-10 rounded-[2rem] border border-outline-variant/20 overflow-hidden relative">
            <h3 className="text-2xl font-headline text-tertiary mb-6">Suggested Pairings</h3>
            <div className="space-y-4 relative z-10">
              <div className="bg-surface/60 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center">
                <span className="font-medium">Hot Dal Chawal</span>
                <span className="material-symbols-outlined text-primary">restaurant</span>
              </div>
              <div className="bg-surface/60 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center">
                <span className="font-medium">Paratha &amp; Curd</span>
                <span className="material-symbols-outlined text-primary">bakery_dining</span>
              </div>
              <div className="bg-surface/60 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center">
                <span className="font-medium">Artisanal Cheese Platter</span>
                <span className="material-symbols-outlined text-primary">local_pizza</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-20 transform rotate-12">
              <img 
                className="w-full h-full object-cover rounded-full" 
                alt="Abstract colorful food texture" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ST9IxEIx0zyZEZSmQgkABNQ9HkuuGtqTE8W4bIecD5TVBKAOrbK9x__Mp-CFHZgcsKVUyri0hl579yk8LxUHzBhNaZ7HgyziAgIv0DRLQ3R6U6MKyrw-T_p1EwDqpHAyyzQklHybjsbM9C33nvDuRnm67Gyr2wpzZhh_BiVVoXurA2neQphnIudEWOfEsU_9Ro_ZpXT-qt_aTmaxFt62aAvZHv4XU7cwyrPeqlxvi1MFuU-cYhnQfeXYFxwA7Irqw2o9ruFMG8Y"
              />
            </div>
          </div>

          {/* Grandma's Secret */}
          <div className="md:col-span-7 bg-tertiary p-8 md:p-12 rounded-[2rem] text-on-tertiary relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-headline mb-6">The Grandma&apos;s Secret</h3>
              <p className="text-lg leading-relaxed font-light mb-6">
                  &quot;The secret isn&apos;t in the spices,&quot; Ba used to say, &quot;it&apos;s in the sun.&quot; Unlike modern factories, we wait for the peak summer heat. Each jar is placed on the terrace, covered in a muslin cloth, where the mangoes slowly breathe in the heat. 
              </p>
              <p className="text-lg leading-relaxed font-light">
                  This patient fermentation creates the &apos;Umami&apos; that no machine can replicate. It’s the flavor of a memory.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary to-tertiary-container/50 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-32 text-center">
        <h2 className="text-4xl lg:text-5xl font-headline text-primary mb-6">Bring Heritage Home</h2>
        <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">Each batch is limited to ensure quality. Tell us your requirements, and we&apos;ll reach out with availability.</p>
        
        <form className="space-y-6 text-left bg-surface-container-lowest p-6 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest uppercase text-tertiary ml-2">Full Name</label>
              <input className="w-full bg-surface-container-high border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface transition-all" placeholder="E.g. Aarav Sharma" type="text"/>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest uppercase text-tertiary ml-2">Email Address</label>
              <input className="w-full bg-surface-container-high border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface transition-all" placeholder="aarav@example.com" type="email"/>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold tracking-widest uppercase text-tertiary ml-2">Quantity Needed</label>
            <select className="w-full bg-surface-container-high border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface transition-all">
              <option>250g Jar</option>
              <option>500g Jar</option>
              <option>1kg Heritage Tin</option>
              <option>Bulk Order (Gifting)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold tracking-widest uppercase text-tertiary ml-2">Message (Optional)</label>
            <textarea className="w-full bg-surface-container-high border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface transition-all" placeholder="Any special delivery instructions or stories you'd like to share?" rows={4}></textarea>
          </div>
          
          <button className="w-full bg-primary text-on-primary py-4 md:py-5 rounded-full font-bold text-base md:text-lg tracking-widest uppercase shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all" type="submit">
              Send Inquiry
          </button>
        </form>
      </section>
    </main>
  );
}
