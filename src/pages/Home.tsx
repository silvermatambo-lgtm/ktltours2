import { Link } from 'react-router-dom';
import { Compass, Sun, Heart, Plane, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { useInView } from '../hooks/useInView';

const IMAGES = {
  beach: '/images/beach-glass.jpg',
  gate: '/images/beach-gate.jpg',
  villa: '/images/villa-front.jpg',
  deck: '/images/pool-deck.jpg',
  tiles: '/images/pool-tiles.jpg',
  bedroom: '/images/bedroom.jpg',
  lamp: '/images/lamp-decor.jpg',
};

function SectionReveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-enter">
      <HeroSlider />

      {/* Why choose us bar */}
      <div className="bg-stone-900 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Compass size={20} />, label: 'Tailor-Made Trips' },
              { icon: <Sun size={20} />, label: 'Beach Getaways' },
              { icon: <Heart size={20} />, label: 'Personal Service' },
              { icon: <Plane size={20} />, label: 'Stress-Free Travel' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-white">
                <span className="text-amber-400">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal className="text-center mb-14">
            <span className="section-tag">Travel Experiences</span>
            <h2 className="section-heading text-center">Experiences Made For You</h2>
            <div className="gold-bar mx-auto" />
            <p className="text-stone-500 max-w-2xl mx-auto mt-2">
              Whether you want sun on the sand, a villa with a view or a trip planned from scratch, we shape every getaway around you.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: 'Beaches', img: IMAGES.beach, desc: 'Golden sand & calm blue water' },
              { name: 'Villa Stays', img: IMAGES.villa, desc: 'Private, spacious & stylish' },
              { name: 'Poolside', img: IMAGES.deck, desc: 'Sun-loungers, sparkle & shade' },
              { name: 'Comfort', img: IMAGES.bedroom, desc: 'Restful rooms to come home to' },
            ].map((mat, i) => (
              <SectionReveal key={mat.name} delay={`delay-${(i + 1) * 100}`}>
                <Link to="/services" className="block group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="gallery-item h-52 relative">
                    <img src={mat.img} alt={mat.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-lg">{mat.name}</h3>
                      <p className="text-stone-200 text-xs mt-0.5">{mat.desc}</p>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SectionReveal className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.tiles} alt="Beachfront villa with pool" className="w-full h-[420px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4 border border-stone-100">
                <p className="text-amber-500 font-bold text-2xl">100%</p>
                <p className="text-stone-600 text-xs font-medium">Tailor-Made Trips</p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-heading mb-4">Explore. Discover.<br />Experience.</h2>
              <div className="gold-bar" />
              <p className="text-stone-500 leading-relaxed mb-5">
                KTL Tours & Getaways is a tours and travel company dedicated to creating memorable getaways. From sun-soaked beaches to beautiful villa stays, we plan every detail so you can simply enjoy the journey.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Whether you are travelling solo, as a couple, with family or as a group, our team brings care, local know-how and a personal touch to every trip.
              </p>
              <ul className="space-y-3 mb-8">
                {['Tours, Getaways & Villa Stays', 'Personalised Trip Planning', 'Group, Family & Couples Travel', 'Friendly WhatsApp Support'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700 text-sm">
                    <CheckCircle size={17} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-gold">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-heading text-center">Our Tours & Getaways</h2>
            <div className="gold-bar mx-auto" />
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Guided Tours & Excursions', img: IMAGES.beach, desc: 'Discover your destination with well-planned tours and day excursions.' },
              { title: 'Beach Getaways', img: IMAGES.gate, desc: 'Relaxing coastal escapes with golden sand and sparkling water.' },
              { title: 'Luxury Villa Stays', img: IMAGES.villa, desc: 'Spacious villas with private pools — ideal for families and friends.' },
              { title: 'Group & Family Holidays', img: IMAGES.deck, desc: 'Stress-free group travel planned around everyone in your party.' },
              { title: 'Romantic Escapes', img: IMAGES.bedroom, desc: 'Honeymoons, anniversaries and intimate breaks done beautifully.' },
              { title: 'Custom Itineraries', img: IMAGES.lamp, desc: 'Tell us your dream trip and we will design it from start to finish.' },
            ].map((svc, i) => (
              <SectionReveal key={svc.title} delay={`delay-${(i % 3 + 1) * 100}`}>
                <Link to="/services" className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="gallery-item h-44 overflow-hidden">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-800 mb-2 text-base">{svc.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{svc.desc}</p>
                    <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${IMAGES.deck})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <SectionReveal>
            <span className="section-tag text-amber-400">Start Planning Today</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
              Ready For Your Next Getaway?
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Contact us today and tell us where you want to go. Our team will help you plan a trip you will never forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27620128294" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5">
                <Phone size={16} /> Call 062 012 8294
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-semibold rounded-xl text-sm transition-all duration-300">
                Plan My Trip <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '100%', label: 'Tailor-Made Trips' },
              { num: '6', label: 'Travel Services' },
              { num: '1-on-1', label: 'Trip Planning' },
              { num: 'WhatsApp', label: 'Quick Support' },
            ].map((stat) => (
              <SectionReveal key={stat.label}>
                <p className="text-4xl font-bold text-amber-600 mb-1">{stat.num}</p>
                <p className="text-stone-600 text-sm font-medium">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
