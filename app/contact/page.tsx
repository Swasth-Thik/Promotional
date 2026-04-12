export default function ContactUs() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero Section: Warm Invitation */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <span className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Connect with Tradition</span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">Pull up a chair at our table.</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              Whether you have a question about our ancestral spice blends or simply want to share a culinary memory, we are here to listen. Every enquiry is treated with the same care as our slow-roasted grains.
            </p>
          </div>
          <div className="relative h-72 md:h-[500px] rounded-[2rem] overflow-hidden organic-shadow">
            <img
              alt="Traditional Indian kitchen"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGGE0lKUuuJAp3P4rsENSmkMjmtSlM1G9E-Fvakw3gC-EDsM4V7QRtU0Dz04M9rbEZ1VNQ-efem3t0Cp0NLrGAznG6mRW_f6rsdgsXnmC-QFbpZaZZeuMx__ag3hoCD4ZfJflsW2Tb2TUMeEG9tPCDuYmuQzQnQL-IfqtYc7TCImE3iYD0OoXWBXhcPpD4r7upX8gKp92rU1TdEkuXBmPVpELiPF8wPEAVp8f3fIRPzFZo9hz7EhrECCTu8Fc9vXaewBDwFoQUmJ4"
            />
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

            {/* Contact Information Card */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="font-headline text-3xl text-primary mb-6">Our Sanctuary</h2>
                <p className="text-on-surface-variant mb-12">Visit us or reach out directly. We&apos;re nestled in the heart of the Kumaon hills, where the air is as pure as our ingredients.</p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Swasth Thik</h4>
                    <p className="text-on-surface-variant">Anandapur Road, Shop no 167<br />Uttarakhand, India - 263002</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-primary font-medium text-xl">+91 93306 90128</p>
                    <p className="text-sm text-on-surface-variant mt-1">Mon - Sun, 9:00 AM to 9:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-primary font-medium text-xl">hello@swasththik.com</p>
                    <p className="text-sm text-on-surface-variant mt-1">We typically reply within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-surface p-6 md:p-14 rounded-[2rem] organic-shadow">
                <form className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-stone-500 ml-1">Full Name</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface transition-all placeholder:text-stone-400" placeholder="Arijit Patra" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-stone-500 ml-1">Email Address</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface transition-all placeholder:text-stone-400" placeholder="arijit@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-stone-500 ml-1">Subject</label>
                    <select className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface transition-all appearance-none">
                      <option>Product Inquiry</option>
                      <option>Wholesale Ordering</option>
                      <option>Feedback &amp; Stories</option>
                      <option>Shipping Question</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-stone-500 ml-1">Your Message</label>
                    <textarea className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface transition-all placeholder:text-stone-400" placeholder="How can we help you today?" rows={5}></textarea>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-primary-container transition-all active:scale-[0.98] shadow-lg shadow-primary/20" type="submit">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl text-primary mb-4">How to Order</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">We believe in personal connections. Our ordering process reflects the artisanal nature of our products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-surface p-8 md:p-10 rounded-[2rem] text-center border-t-4 border-primary/10">
            <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline text-2xl mx-auto mb-8">1</div>
            <h3 className="font-headline text-xl mb-4">Choose Your Blends</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Browse our seasonal collection of handcrafted spices, grains, and traditional health mixes.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-surface p-8 md:p-10 rounded-[2rem] text-center border-t-4 border-primary/10">
            <div className="w-16 h-16 bg-secondary text-on-primary rounded-full flex items-center justify-center font-headline text-2xl mx-auto mb-8">2</div>
            <h3 className="font-headline text-xl mb-4">Send an Enquiry</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Contact us via the form or WhatsApp with your selection. We ensure the batch is fresh for you.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-surface p-8 md:p-10 rounded-[2rem] text-center border-t-4 border-primary/10">
            <div className="w-16 h-16 bg-tertiary text-on-primary rounded-full flex items-center justify-center font-headline text-2xl mx-auto mb-8">3</div>
            <h3 className="font-headline text-xl mb-4">Custom Delivery</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">We confirm availability and shipping details. Your Modern Heirloom is then sent with care.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[300px] md:h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13412.402865727538!2d88.38917416700328!3d22.523025861129376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271359124251b%3A0xd69e77b5a6181779!2sRuby%20General%20Hospital!5e0!3m2!1sen!2sin!4v1776015870020!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
