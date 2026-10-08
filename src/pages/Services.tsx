import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

const SERVICES = [
  {
    title: 'Guided Tours & Excursions',
    img: '/images/beach-glass.jpg',
    desc: 'See your destination the best way possible. We plan guided tours and day excursions that balance sightseeing, local culture and downtime, so you get the most out of every day of your trip.',
    features: ['Guided sightseeing & day trips', 'Flexible pace and group sizes', 'Transport and logistics arranged', 'Local tips and recommendations'],
  },
  {
    title: 'Beach Getaways',
    img: '/images/beach-gate.jpg',
    desc: 'Trade the daily routine for golden sand, calm water and open skies. Our beach getaways are built for relaxing, whether you want a quiet weekend away or a full seaside holiday.',
    features: ['Stays close to the beach', 'Weekend & long-stay options', 'Relaxed, flexible itineraries', 'Perfect for couples, friends & families'],
  },
  {
    title: 'Luxury Villa Stays',
    img: '/images/villa-front.jpg',
    desc: 'Spread out in a stylish villa with a private pool, garden and room for everyone. Villa stays are ideal for family holidays, celebrations and getaways with friends.',
    features: ['Pools, gardens & outdoor lounges', 'Spacious, comfortable bedrooms', 'Great for groups & celebrations', 'Beach and sea-view options'],
  },
  {
    title: 'Group & Family Holidays',
    img: '/images/pool-deck.jpg',
    desc: 'Travelling with a crowd? We organise group and family holidays so everyone is looked after, from accommodation and activities to the little details that make a trip run smoothly.',
    features: ['Family reunions & friend trips', 'Group-friendly accommodation', 'Activities for all ages', 'One point of contact for the whole group'],
  },
  {
    title: 'Romantic & Honeymoon Escapes',
    img: '/images/bedroom.jpg',
    desc: 'Celebrate love with a getaway made for two. From honeymoons to anniversaries, we help you find calm, beautiful places to slow down and enjoy time together.',
    features: ['Honeymoons & anniversaries', 'Private, peaceful stays', 'Sunset-ready settings', 'Personal touches on request'],
  },
  {
    title: 'Custom Itineraries',
    img: '/images/pool-tiles.jpg',
    desc: 'Have a trip in mind that does not fit a package? Tell us your dates, budget and wish list and we will design a custom itinerary from scratch, with you at the centre of every decision.',
    features: ['Built around your dates & budget', 'Mix tours, stays & downtime', 'Corporate and special-occasion trips', 'Support before and during your trip'],
  },
];

const MATERIALS = [
  { name: 'Beach Days', img: '/images/beach-glass.jpg', desc: 'Soft sand, sea breezes and wide open shorelines made for slowing down.' },
  { name: 'Villa Living', img: '/images/villa-front.jpg', desc: 'Spacious villas and gardens that feel like a home away from home.' },
  { name: 'Poolside Time', img: '/images/pool-deck.jpg', desc: 'Sparkling pools and sun decks for long, lazy afternoons.' },
  { name: 'Cosy Interiors', img: '/images/lamp-decor.jpg', desc: 'Warm, stylish interiors that make every evening feel special.' },
];

export default function Services() {
  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/villa-front.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Services</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4">
            From beach getaways to villa stays and custom itineraries — we plan tours and travel experiences for every kind of traveller.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="gallery-item rounded-3xl overflow-hidden shadow-xl h-[360px]">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="section-tag">Service 0{i + 1}</span>
                  <h2 className="section-heading mb-4">{svc.title}</h2>
                  <div className="gold-bar" />
                  <p className="text-stone-500 leading-relaxed mt-4 mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-stone-700 text-sm">
                        <CheckCircle size={16} className="text-amber-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-gold">
                    Plan This Trip <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Experiences</span>
            <h2 className="section-heading text-center">What Your Getaway Can Look Like</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((mat, i) => (
              <Reveal key={mat.name} delay={`delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="gallery-item h-40">
                    <img src={mat.img} alt={mat.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-800 mb-2">{mat.name}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{mat.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready To Start Planning?</h2>
          <p className="text-amber-100 mb-8">Contact us and tell us about your dream getaway. No-obligation quotes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27620128294" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors">
              Call 062 012 8294
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
