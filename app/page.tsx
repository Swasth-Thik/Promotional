import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img 
            className="w-full h-full object-cover opacity-80" 
            alt="High-end editorial food photography of sun-dried Indian spices like turmeric, chilies, and cardamom spread across a textured linen background with warm natural sunlight" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDquIYXdSrpU8LhyzbDCoW9aR2RMjKEA2Vt2AzPTW9-54476Pn05fvvlYGsD0CmN-U45lGk6f_L-YWwXWCvji4kW4Cuc0p2JYvYxcXjzMIUWxRd-NydnFIn-BXl97nhayMsneEFiaFdq2OmjNkZqgODuu33t-gv4VzQcH4c2C205ut9KJ9XUhS3kzWmWWdH8bSEdaTkKVf3iwSwzsPeXZCVYDA47xwJgDvcyCTnppMqS_WivI9NN0X8jJCSBynK2mqZUl6gXQK9aq4" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Handcrafted with Love</span>
            <h1 className="text-6xl md:text-8xl font-black text-primary leading-tight mb-6 -ml-1">Ghar jaisa swaad,<br/>har jar mein</h1>
            <p className="text-xl text-on-surface-variant mb-10 font-medium leading-relaxed">Experience the purity of traditional Indian flavors, preserved using age-old family recipes and sun-kissed ingredients.</p>
            <div className="flex flex-wrap gap-4">
              <Link className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all" href="/products">
                View Products
              </Link>
              <Link className="border border-outline-variant/30 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container transition-all backdrop-blur-sm" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block max-w-xs p-6 bg-surface-container-lowest/80 backdrop-blur-md rounded-xl shadow-2xl border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
            <span className="font-bold text-tertiary">100% Organic Ingredients</span>
          </div>
          <p className="text-sm text-on-surface-variant">No artificial colors, flavors, or chemical preservatives. Just the way grandma made it.</p>
        </div>
      </header>

      {/* Why Choose Us - Bento Style */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 p-10 bg-surface-container-low rounded-[2rem] flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-primary mb-6">workspace_premium</span>
              <h3 className="text-3xl font-bold text-primary mb-4">No Preservatives</h3>
              <p className="text-on-surface-variant max-w-xs">We believe in the power of natural preservation. Our pickles and squashes stay fresh using traditional fermentation and sun-drying techniques.</p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[15rem]" style={{ fontVariationSettings: '"FILL" 1' }}>nature_people</span>
            </div>
          </div>
          <div className="p-10 bg-surface-container rounded-[2rem] flex flex-col items-center text-center justify-center">
            <span className="material-symbols-outlined text-5xl text-secondary mb-6">back_hand</span>
            <h3 className="text-xl font-bold text-on-surface mb-2">Handmade</h3>
            <p className="text-sm text-on-surface-variant">Crafted in small batches to ensure artisanal quality.</p>
          </div>
          <div className="p-10 bg-tertiary-fixed rounded-[2rem] flex flex-col items-center text-center justify-center">
            <span className="material-symbols-outlined text-5xl text-tertiary-container mb-6">restaurant</span>
            <h3 className="text-xl font-bold text-tertiary-container mb-2">Authentic Taste</h3>
            <p className="text-sm text-tertiary-container/70">Recipes passed down through four generations.</p>
          </div>
          <div className="md:col-span-2 p-10 bg-secondary-container/30 rounded-[2rem] flex items-center gap-8 border border-secondary-container/20">
            <div className="flex-shrink-0 w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-on-secondary-container">local_florist</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-on-secondary-container mb-2">Fresh Ingredients</h3>
              <p className="text-on-secondary-container/80">Sourced directly from local farmers during peak season to capture maximum flavor and nutrition.</p>
            </div>
          </div>
          <div className="md:col-span-2 h-[200px] rounded-[2rem] overflow-hidden">
            <img className="w-full h-full object-cover" alt="Macro photography of fresh green mangoes and vibrant red chilies on a weathered wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3YaMDqWwNj92SyRz-7NDRn5HESTg68Z5XvcJuTPJMcVdXH34STwF48maEPpOrV_IGWsio_RXSwj-6sNtl3g2iP54yiKNrbTJDfcqDl8dVGbRH0LgiV75WCLWJrW8qxhlxJ0z0b2TPUuPd7YUBRCjC0lC1O3hNlPzb0UFgGFgpedOANi5yuX0MvIC7-Ql49GSjslRGhEF0YYtdjxxQXyJ-116iEcweeJixS5D3BI1Bzr3ShDO5yYJ-i5iqieszYPGGC8J5hfP_2mo" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-surface-container-lowest" id="categories">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Explore Our Pantry</h2>
              <p className="text-on-surface-variant">The finest selection of tradition in every category.</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-1 bg-primary/20 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link href="/products" className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Close-up of traditional ceramic pickle jars" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy2rsrzGMwD0vDmah7QvmHy53QNUQ4tJNpvIUR4tFY7pUBusWJmli-FLNZUJLtu396PFT3efLRrtJJWusJG5Ijs8L0bhAVHAXy1noq6fOztKvuYAjvKCUWV-ly8uLbM95-v_bweKm5GHOknJXj2uiVH7CDCesOnaHnpHIGU-6Js0wW9DGDmm68dEZkBExSA6g0kZ210ZmXkeFWErLojjIfu62BBDg8Gg-Ns8H2f85E25cNLLnHXY9_qUM4yWjmGb86VnScml3RBuk" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold font-serif">Achar</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">12 Varieties</p>
              </div>
            </Link>
            <Link href="/products" className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer mt-8 md:mt-12">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Golden liquid cow ghee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLuZTm1ErEcrggryK_nkAkjCkVENmY8N2MAc7IlY5fdc6ms9ZiaIqXAteNajNs-XnCjZMP73YIdvDaawJfrVDQv0O1S5odPNkJQgbOQRhHZBowbVbMz7VBI1IOJaQWxxhx9_0CdihLk1poD4-GJpV_tzjZn9_AoEAoxwvALSnjXY_kENTYaxY355gizhGMTT5rxENZr0BpY9XtKn15JXsNvwyDjNQm7ddxvTnz2c6s8yAIESGPy0F1J1g-uWsaDb8AVlg_YKZ2vmY" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold font-serif">Ghee</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">A2 Pure Cow</p>
              </div>
            </Link>
            <Link href="/products" className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Refreshing glass bottles of fruit squash" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOEZL9HwZBo0Q-M1ua5SC7pxXdxfpaMdKdrnHVL87kPAfNZ190Svsh5hFrtegcYbU6MCiPhnYjirhPviptHm0AA8w0AxRkpmatKBrOXxHlWRdTh-lsDCWev0Dh-JhEwa11e_Ty0NkefHog-Ia-sJKwSIuACjGadDm0lCGVBo5T_BZdMgyrMtc0JhNGzSUNYxRHiTWTxS-xA-xAEaeQr0SxdSay92Ou4bSK91i6ghAlKG5sKL0GdnpsmP44qDs0H1YFMei8Kpmtseg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold font-serif">Squash</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Natural Fruit</p>
              </div>
            </Link>
            <Link href="/products" className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer mt-8 md:mt-12">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Small bowls of handcrafted chutneys" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZL19fBzRPTphbyQOlYsiKubI9_8zd3bm8LybuVBTfil8MCeFh4_WY4Zy_ut-1QM9is3piu7myPE6NUSDtCRKMibACG6iJVQ-8Zd2XTM-o0A3Gu14ijffD0Ra3xE9-iWOq0K-vayDcRLCTVPlzHC5QRNipQI_YbBLYLfcW9HBFMCjWKDM4pgdD53VTZok8kBIPN0gZlVKutwdkd6zNtEGcXooMyCXDy9eaUIE82L045VqCSKtfFPJkUQeLZ-y7nJQxo7ayKZuQqB4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold font-serif">Sauces</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Zesty & Hot</p>
              </div>
            </Link>
            <Link href="/products" className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Assorted dried herbs and spice blends" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUhOMJ1g_TXzBhwODT-3P1WetUMSoqyWwxi50nmzzA1uQh2R7C5loZlwCC6QCS1RisHLEhMJlf18L8FjRWnY7MiRH9rMr7Q8tvfjBxKA_2jay8wGeVkCeS4g_RDhZkwsWc8TQ86N7f_3RhBlfFRGpkBUlbWtM1xVtZ2U0XKqoXuiJXMXV1cd4zc4H9-5hkmlubqbG2UhbfSvLE_ABKLZzaihdTOIdrnMdN9_b_r8ujfCu531idyZdrSgrOxcNuanh0meblsBFXOpM" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold font-serif">Others</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Masalas & More</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Signature Jars</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Handpicked bestsellers that have won the hearts (and plates) of our community.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface-container-low rounded-[1.5rem] p-4 group transition-all hover:bg-surface hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Spicy Mango Achar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQADcx33JYMUNcb8ZYVg__AtWVUblXEMuNDf-BQe5g-wfiFJX649j2G0oOhqvNoBA0yw5uejGFQ2uEx9wnZ7WfpJisqcIn2AcHk6RB0BTw_2xOEiCOrGo5mHP2FsPVZbYNU9cj6kITGe64jR58IDXg8pqX_aoU_OOQBU_P2GPS22AZdDLqbvMObayn_fiITo6h0Yp2zNtfIjdKcn9Qpwk5ymlbhlJD__zE8-pBkjg14dJyVohCwuVi1BAl3NLn4ip_SuMQPb9yCIQ" />
              <span className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Bestseller</span>
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-on-surface mb-1">Spicy Mango Achar</h3>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">The classic tang of sun-ripened mangoes infused with cold-pressed mustard oil and secret spices.</p>
              <Link href="/products/1" className="w-full bg-surface-container-highest text-primary py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                Enquire Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-[1.5rem] p-4 group transition-all hover:bg-surface hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Pure Cow Ghee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfl2sZSIWPhgA2vAazAoR6u3t7gfV0vltYoANJEbjcbitaHv2Q1CnAmMtrJuf7Kmd6r1K3AxGywYJt7L62Uh_flU3fSwyOmu7GV4MZTwybO6Tt8Rm4jLtuZe-jSgjMaFdhkcXvebCFs0k5h91GItNtn0C6rWEiONhszRBNgnTrK5kiuPvzMMRsGWi-TbRkUYXHtzdFEI54nDSDu_wdAA1VxpluTUKLiUHGgWOJ8l0HHJ6v4pFiNYftvZZUHY6tPnHio_n6O3gfUvA" />
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-on-surface mb-1">Pure Cow Ghee</h3>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Slow-cooked A2 cow milk fat with a rich granular texture and heavenly aroma.</p>
              <Link href="/products/2" className="w-full bg-surface-container-highest text-primary py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                Enquire Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-[1.5rem] p-4 group transition-all hover:bg-surface hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Khatta Meetha Nimbu" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOCj_jDWpyWGQs_BAlR9TbnZUS-d-2Qbt3uhA2trgNWrzhbyBu3B1ciYO8wZA-SXXdkwhBKv44LdUThbG1e4mG_qzLYVENg75-AMJVJkAorsyVvoACYjmQqh9uqDmkYetpotVFZ8ifNG5bIZ1t9if01_3u74BPpExNmTlF_MV-9BYCbzWrfKVYbNgZH35LQyw4a1vpFzn01qXmblabUu0I2Ouh-dE-H_FaFy39ZsvbZ0g-AqPoNib4uI9FZ5hRYY1I3az9F29lIE8" />
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-on-surface mb-1">Khatta Meetha Nimbu</h3>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Zesty lemon quarters balanced with jaggery and roasted cumin. Oil-free goodness.</p>
              <Link href="/products/3" className="w-full bg-surface-container-highest text-primary py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                Enquire Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-[1.5rem] p-4 group transition-all hover:bg-surface hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Garlic Lal Mirch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI-Kl3u1Ys2Ag2QpHWa1ZRT9EFEop3Op1H6Wm6rxcReIEW8ThZPbPlXD2DSS4HUUEWjvDbq5ZwKpBrNzpApCBDoxO4PRyjY0qfR8xdbK4NyJrk3WUJyKao5bukJw4K0Gb8w0nxobAzVpIMQg78YIqS_kRRfGc-vDzX8Z1WAZZ6owjS6w7uz87MzJnd_b9LCHQvy34rl5lL7paAWg-V-6OUt4aXLoFy6enb-w6eNQ0w1qyP1ZU06msUB2sDe0EzU8fIGNJ3iCif5ag" />
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-on-surface mb-1">Garlic Lal Mirch</h3>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">A bold, smoky blend of roasted garlic and dry Kashmiri red chilies. Perfection for parathas.</p>
              <Link href="/products/4" className="w-full bg-surface-container-highest text-primary py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                Enquire Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Authentic vintage-style photo of an Indian woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3G10bY8bl9gtnEebYfd3WqCgLNH4qDTvRlxlVC0rsaB_h10_ikdX-G_96x1vItL8IAyN0_w3GIvOc0yKSwo7Af8_6lEsO8_SP09s0JZHIyx3kbT_a67x9GWqj81D9j1rOcbhUcd2AO9AfDw5_VzHa3-aEssq40bbep02meqbWCZV8ipEivjJzlhuk3Q0PlYpYq__ynADx9rrqAlIYFpDayTIzyWGD48KCzjKWbVrXiVJBnGgE7eybo6E_cBblbZ6Q_Dsy5ZtzBEs" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-primary-container text-on-primary-container rounded-[2rem] max-w-[200px]">
              <p className="font-serif italic text-2xl">Est. 1984</p>
              <p className="text-xs uppercase tracking-widest mt-2">Authentic Heritage</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-primary leading-tight">Preserving the soul of homemade tradition.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Swasth Thik was born in a small kitchen with a simple dream: to bring back the purity of the food we grew up with. In an age of industrial processing, we choose the slow way.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface">Ethical Sourcing</h4>
                  <p className="text-sm text-on-surface-variant">We work with small-scale farmers to ensure every ingredient is chemical-free and fairly traded.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface">Sun-Cured Process</h4>
                  <p className="text-sm text-on-surface-variant">No machinery can replace the magic of slow sun-drying, which intensifies flavors naturally.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="border-t border-outline-variant/30 pt-8">
                <p className="font-serif italic text-xl text-primary">"Food is not just nutrition; it's a bridge to our ancestors. Every jar we seal is a story we share with you."</p>
                <p className="text-sm font-bold mt-4 uppercase tracking-widest text-on-surface-variant">— Mrs. Shanti Devi, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 md:py-24 bg-surface-container-low" id="reviews">
        <div className="linen-texture absolute inset-0 pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Stories from our Tables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-outline-variant/10 relative">
              <div className="flex text-tertiary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant mb-8 leading-relaxed italic">"The Spicy Mango Achar took me straight back to my childhood summers at my Nani's place. The texture and the oiliness are exactly how a real pickle should be."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArMJGLGSakvB4CCzZcnFhQDMQWbizCSytyRvmPcVSNbslZ9ZBaeinxatn_e66NWRJhtwZDkD6j30whthA5zcOjmdvR0f66e0p8wBsKxtUsfO4ItZPCoFTzKmznC26KlmY0oZSnc6vMzh86gc2ekT5wlJTkPO4HOgl3uLE6TWL5a3x2aYv9mGrpwh_hpO8eSiT1isvgel0efWuNhMCot998CJcRRgXs0XAHm5oz9xcGtGeR1dyvXELfs5QrKRV4ewLZxD_qwkZUsbg" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Anjali Sharma</h4>
                  <p className="text-xs text-on-surface-variant">Mumbai, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-outline-variant/10 relative md:translate-y-10">
              <div className="flex text-tertiary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant mb-8 leading-relaxed italic">"It's rare to find A2 Ghee with this level of granularity and fragrance. I use it every day for my kids. Swasth Thik is now a staple in our home pantry."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqJIVzIKuYdw2Bxeo9jYpdNXu0KSIN5r7u59dFAusCqv5OUCxFk9SQth1d7dgoulMrbdXX9TpjEMwLMsOxljUfzcpLfGU2_2_JYCzvYEi6iRAJKPVHHUe1uDKloSlSHhY0CWg8mbLJgbwWrTMdl2_6rN_lAyOqyXpffgAD2_nUdC2z8oS34ZJFlBdJiHixqmMChMy1XL_cc-cx77zN09Id5QjHj2AYN6LwBnXYNHrq7BIW0v35PJ-ER9yg25DbLC259_kAD1uEJHQ" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Dr. Rajesh Khanna</h4>
                  <p className="text-xs text-on-surface-variant">Bangalore, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-outline-variant/10 relative">
              <div className="flex text-tertiary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant mb-8 leading-relaxed italic">"The Rhododendron squash is a revelation! It's so refreshing and you can actually taste the flowers. Love that it's not overly sweet like commercial ones."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHoS4ouDyWPrybL6knM04JWJIC_Wrqkqx0uRYK5flyxCSL61J7dQPYp6wcjG11JkfYTc9s82e0kUS3vlaBY9i9bdZ1WtWZChq5BVFxmsZ2zBl2cB6yAz8p8Bf8TqKCZffVS_hbUxc7boWg_ShsHmMsLfv-NJswsurtEPChlNL5C6nyXEdsZ5EzEjScXpoomlrJ4Y83v1RVVfAMUjbD1t2cas0GjkiAHsfl61UR_S1Q5h_Yxxcd4HChZQMCIcPQBBBg0rWnemxxc7Q" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Priya Verma</h4>
                  <p className="text-xs text-on-surface-variant">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
