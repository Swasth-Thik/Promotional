import Link from 'next/link';

export default function About() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[819px] flex items-center justify-center px-6 md:px-8 pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-80"
            alt="Breathtaking wide shot of the mist-covered Nainital mountains in the early morning with soft, ethereal golden light filtering through the pines."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaiLsNZERb98KzF_vQdh4R3zBd-4JkZ0klubkgKmfOP47nxiKnCS-if_lggMyG2OvylUKUHb2yhjPNcm8uk9F0_ycV6sha7PIJk9mkC5DPefUjmlqIGqZxU4uLckTEDKSG9RorWEF5YtePEC3kRQQCiPY9XkZ7QUvUCrjltrV08nwXoKXcNKqMMXyZ-POQWr8I2GE1WhVMG1RYMRF25QD-9yT0WzQY3cZGSPandcUXHeyxCjjSAxtgdXSnsW4AnSZFBO_4bhE1wXo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <span className="text-secondary font-label uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6 block">Our Heritage</span>
          <h1 className="text-4xl md:text-7xl font-bold text-primary leading-tight mb-6 md:mb-8">Protita Achar e Lukono Maa&apos;r Bhalobasha</h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
            A journey from the heart of the Kumaon hills to your kitchen, rooted in ancestral wisdom and the rhythmic cycles of nature.
          </p>
        </div>
      </section>

      {/* Our Roots (Nainital) */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
            <img
              className="rounded-xl w-full h-80 md:h-[600px] object-cover shadow-2xl"
              alt="Artistic landscape of a traditional Kumaoni village in Nainital, featuring stone houses with wooden carvings surrounded by spice terraces and lush greenery."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8six5LZNQyccNyRqIWMSNUDYUZ-xkv6CqYcavKeLoFBnorb4fpl_NKy6DYEoKudvtZDnswIJMz8MLGTlzQYnTF7xmnZ27JYoj02fhVRP_guqAZVGfgncSDcZO4cejSmxD_qAGfIpnvJyUOC1wwO7E4DNZAHqd765X3PWSfvTbv3oS9c4mA8NXb9NCzfoYWS8o6fa4TwNm-EgnDueiefh9s2boDJpYXC3WiMcFGbrOjBAryt3HVI30rDO2r0vR-IbXjV_1e-Y4Hgk"
            />
            <div className="absolute bottom-12 -right-12 bg-surface p-8 rounded-xl shadow-xl max-w-xs hidden md:block border border-outline-variant/15">
              <p className="font-headline italic text-primary text-xl">&quot;The soil here speaks in the language of ancient herbs.&quot;</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-bold text-primary leading-snug">Our Roots</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Swasth Thik was born amidst the fragrant pine forests and crisp mountain air of Nainital. In these high-altitude terrains, the soil is enriched by glacial minerals, lending a unique potency to the spices that grow here.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We don&apos;t just source ingredients; we honor the ecosystem. Every grain is a testament to the resilient spirit of the Kumaon hills and the traditional farming communities that have protected this land for generations.
            </p>
          </div>
        </div>
      </section>

      {/* The Traditional Process (Bento Grid Style) */}
      <section className="py-16 md:py-24 bg-surface-container-low relative">
        <div className="linen-texture absolute inset-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">The Sacred Craft</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We reject modern industrial efficiency in favor of the slow, intentional methods passed down by our elders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sun Drying */}
            <div className="md:col-span-2 bg-surface p-8 md:p-12 rounded-xl border border-outline-variant/15 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">wb_sunny</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Sun-Drying</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Instead of high-heat mechanical dryers that strip essential oils, our spices bask under the Himalayan sun. This slow dehydration preserves the vibrant color and intense aromatic profile of every spice.
                </p>
              </div>
              <div className="flex-1 w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Close-up of vibrant red chilies and turmeric roots spread out on traditional woven bamboo mats under bright mountain sunlight."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDniVWc1ZMyV0o2j6O37r4LUsvL0qd_cH9rZGmzJ2fWu9FLmNgU2JyrRUuCWpXwkS1OQZv3iWPQDpOKvFcUxP8ZCEeV2DRXrb6-p4_NX5Z1x86iHrFjsGoqiWVq7Kkgl0qCCKFVVKgcEGGPWFR5ZZv5AfVNrBrGQs5yGdyKWMWzSO7tq7Q3tJwk9n5eC9ifaXGdIt0kBQdJfUNzM8C9VLKfNrw3oBSLszRTXWzR00q0MeI812mAjZtkcv0fdPfLYVM4WQAylAoRNJ0"
                />
              </div>
            </div>

            {/* Hand Pounding */}
            <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined">hardware</span>
                </div>
                <h3 className="text-2xl font-bold">Hand-Pounding</h3>
                <p className="text-primary-fixed/80 leading-relaxed">
                  The rhythmic thud of a wooden mortar and pestle is the heartbeat of our process. Hand-pounding ensures the cellular structure of the spice remains intact, locking in health benefits.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-on-primary/20">
                <span className="text-sm uppercase tracking-widest opacity-60">Purity Guaranteed</span>
              </div>
            </div>

            {/* Organic Selection */}
            <div className="bg-secondary-container/30 p-8 rounded-xl border border-secondary/10">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">eco</span>
                <h3 className="text-xl font-bold text-on-secondary-container">Single-Origin</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                We source only from small-hold farmers who practice biodiversity and chemical-free agriculture.
              </p>
              <img
                className="w-full h-40 object-cover rounded-lg"
                alt="Close-up shot of weathered hands holding a variety of raw, whole spices including green cardamom and black peppercorns."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02L2Y4-0QuETZ72u07RqdoH6H9IQH8PWI1TV_RFW1IUb5_trT8Cp3LSdk-HEIfRJ2OkUVhMKGrI5PpHO1Nk-YwfXccCvKpjRLfpe-pJdOX92O1TkwgQXGhSBMcXmdvJjJZwv8JYKF-4AnARWpK3ChYjioPdEB6fL_0jgfG51oOotaHeKJm7BGAXLQ0aWvhGQ831NKdLp9k2duY81M0Gu3DAeQDolrmejtBQuIidUzQ9peuJyU9qbZM8YlZjLeXHIIVM7psNc6aks"
              />
            </div>

            {/* Small Batch */}
            <div className="md:col-span-2 bg-surface p-8 rounded-xl border border-outline-variant/15 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                alt="Artistic composition of small, labeled glass jars filled with colorful artisanal spice blends on a dark, rustic wooden table."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPTd07dsndvv9-eslGfjQdCsAjXsh7UfAo0ha9I7DVhmgB4w_Qd--1EE_x2hnzSP4eJYecgV7zdJcJrBDAW7JyqS3j7-jaGguqAAZkFNsvBqOpjC2-q2lc1_TpMfG565JxnMY0VZbEkkmq4B7k8hqnnYjLK1Whd3fCgH0_x_LgaIl-SFz4U-izINGGaNTqjbhJQb8Yo345lWoKmPfEDn6-Q4i3js0lrkCkhy72EgwQcY-c_tJRP8QjnwyMMoKJUiCLDYSUn5bflM0"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Small Batch Integrity</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  By processing in small, curated batches, we maintain a level of quality control that industrial factories simply cannot match. Every jar is inspected, smelled, and tasted for perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy (Asymmetric Layout) */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div className="md:w-1/2 md:sticky md:top-40">
              <span className="text-secondary font-label uppercase tracking-widest text-sm mb-4 block">The Ethos</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Wisdom is the <br />Ultimate Ingredient</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>We believe that food is medicine, and spices are the soul of that medicine. Our philosophy is rooted in Ayurveda—understanding how fire, air, and earth interact within our bodies.</p>
                <p>To us, a spice isn&apos;t just a flavor enhancer; it&apos;s a sacred offering from the earth that deserves to be treated with reverence.</p>
              </div>
            </div>

            <div className="md:w-1/2 space-y-12 md:space-y-16">
              <div className="relative pl-12 border-l-2 border-secondary/20">
                <h4 className="text-xl font-bold text-primary mb-2">Transparency Above All</h4>
                <p className="text-on-surface-variant">We trace every grain back to the specific hillside it grew on. No hidden fillers, no synthetic colors—just pure mountain magic.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-secondary/20">
                <h4 className="text-xl font-bold text-primary mb-2">Empowering Communities</h4>
                <p className="text-on-surface-variant">Our success is measured by the prosperity of our farmers. We ensure fair wages that allow Kumaoni heritage to thrive in a modern world.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-secondary/20">
                <h4 className="text-xl font-bold text-primary mb-2">Environmental Stewardship</h4>
                <p className="text-on-surface-variant">Our packaging is plastic-free and our processes are low-impact. We take only what the mountain offers, and we give back through reforestation.</p>
              </div>
              <img
                className="w-full h-64 md:h-[400px] object-cover rounded-xl shadow-lg"
                alt="Close-up of a traditional Indian spice box (Masala Daan) with wooden partitions filled with colorful, raw spices on a rustic linen cloth."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNiU1AMqJVMzaUY344VGju0hYiAqRVj2dWtiXtj-Zk2XP9Xn6t2-g0Lr9N15fFekAvLxBypif41R9M6WBG78pfyf2kFKw9XMJxOFvVIPrxsoLnpKSEnAC9fTiAG5glN_Mqu27t-ZjK82_toLJ3QkZyVkDakg0AcJgwMylfpu_klViRWqcijrZ04o4IC46hra0S67IQsDaGTMqh88qQ7ROdMZTQ_uRu3g6WZPcJ8H5Pg2uFmgKgaisZKqPjNB9mLMjOUjKWERMA3NM"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-16 md:py-24 bg-surface-container-highest/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet the Guardians</h2>
            <p className="text-on-surface-variant">The visionaries behind the revival of ancestral kitchen wisdom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/10">
              <img
                className="w-48 h-48 rounded-full object-cover border-4 border-surface-container shadow-inner"
                alt="Portrait of an elderly Indian man with a kind face and silver hair"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG43tG-Wp8aTr8Zg-sAF_7CjvRsiMjlNT2bMXNSmcUvqq7y5G1NUpOPVdc9BwKNgq8y9GJ19QtkRf0k3j76NfyOmOKBPPuuoASac8YdOCYgpE6rODGhY44_dW4pCEbPWwdAZ_yaGwPXzfaVeUeu10sXpSOcZMiumJxLuGkdUzrK9vg7Ko430rcHA6x65Wvk7AXLY9wnd04GnAbFjgKDqIhGeiZxBe8kss8UunikRGbLFAskzbrAJHMOC9CtEJ2GqURb2NrcLOyppg"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-2">Dada ji Ram</h3>
                <p className="text-secondary font-label uppercase text-xs tracking-widest mb-4">Master Sourcing Specialist</p>
                <p className="text-on-surface-variant text-sm">With 50 years of experience in mountain agriculture, Ram knows the secret of every peak and valley in Nainital.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/10">
              <img
                className="w-48 h-48 rounded-full object-cover border-4 border-surface-container shadow-inner"
                alt="Portrait of a professional Indian woman in her late 30s"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkuj1szDRdC4sdWKrseV3oTEXSsnSXpPygRd6LOwK4xoBjaIN0v4LBsxKOKFP1n9TsinRcmhW8ffte_lrV1yyoav62ajUPDSBhAAk4oIs_WdSrSBAnJd3d5LhtACd19-scltQ3jgp6AK5uJclWVY7bv2ZUNeTD1fENk6qcYgzy-Lee00Bc7I15JAW6gIEJ6shONlzVf-wk2TQo-eaji7jPrFwp2vDQdMdyLOYWM8vfVck0e4bJSir3EvTh_K4rUE58ODmELzJyVlA"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-2">Ananya Sharma</h3>
                <p className="text-secondary font-label uppercase text-xs tracking-widest mb-4">Chief Visionary</p>
                <p className="text-on-surface-variant text-sm">Ananya left a corporate career to bridge the gap between traditional wisdom and contemporary health needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 text-center bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover scale-110"
            alt="Intricate repeating pattern of star anise, cinnamon sticks, and dried bay leaves on a dark background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlG3m4JzZbxVfebg-QihZqbgTH88vp3TuAEVMKyg4fu0xvBILSX91E5jbKhsh6-tkwY7xXT17xLIRsUe1oZ77AJX_Ynh5a1ZtzDsoPHek59XEn_1SYsVzcd7mOwyJXSLeZwTNXi1Ni-QZUEI-KL64cGsviKN6oXfnbvAgymrwOb1Cc9YMN7BVPbUGMQW3vDz9xperQh6BoVD9XKoCVdKCVujnRzeYHnjudUUbUrR0EmK2okBLsrg1ZVdfzIrORHOv1I-52xMeFCBg"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Taste the Tradition</h2>
          <p className="text-xl text-primary-fixed/80 mb-10">Bring the pure, sun-kissed flavors of Nainital into your home today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-surface text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors shadow-xl">Explore Collection</Link>
            <Link href="/contact" className="border-2 border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-on-primary/10 transition-colors">Our Sourcing Policy</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
