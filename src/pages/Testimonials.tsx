import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

// REBRAND NOTE: these are SAMPLE reviews. Replace with real client reviews once KTL has them.
const REVIEWS = [
  {
    name: 'Sample Review',
    location: 'Johannesburg',
    rating: 5,
    text: 'Planning our family getaway was effortless. Everything was arranged for us, the villa was beautiful and the whole group had a wonderful time. We cannot wait to book again!',
    project: 'Family Villa Stay',
    avatar: 'SR',
  },
  {
    name: 'Sample Review',
    location: 'Pretoria',
    rating: 5,
    text: 'Friendly, responsive and so easy to deal with on WhatsApp. They listened to what we wanted and built a trip that fit our budget perfectly.',
    project: 'Beach Getaway',
    avatar: 'SR',
  },
  {
    name: 'Sample Review',
    location: 'Sandton',
    rating: 5,
    text: 'We booked a romantic escape for our anniversary and it was perfect. Peaceful, beautiful and thoughtfully planned from start to finish.',
    project: 'Romantic Escape',
    avatar: 'SR',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < n ? 'fill-amber-400 text-amber-400' : 'text-stone-200'} />
      ))}
    </div>
  );
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const featured = REVIEWS[current];

  function prev() { setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length); }
  function next() { setCurrent((c) => (c + 1) % REVIEWS.length); }

  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/villa-front.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">What Travellers Say</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Traveller Testimonials</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">
            Kind words from travellers who planned their getaways with KTL Tours & Getaways.
          </p>
        </div>
      </section>

      {/* Featured testimonial slider */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-stone-50 rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-amber-200 text-[80px] leading-none font-serif select-none">"</div>

            <div className="relative text-center">
              <Stars n={featured.rating} />
              <p className="text-stone-600 text-base md:text-lg leading-relaxed mt-6 mb-8 italic">
                "{featured.text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white font-bold text-lg flex items-center justify-center">
                  {featured.avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-stone-800">{featured.name}</p>
                  <p className="text-stone-500 text-xs">{featured.location} · {featured.project}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-stone-200 hover:border-amber-400 text-stone-400 hover:text-amber-500 flex items-center justify-center transition-colors">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-200 ${i === current ? 'w-6 h-2 bg-amber-500' : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border border-stone-200 hover:border-amber-400 text-stone-400 hover:text-amber-500 flex items-center justify-center transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid reviews */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <span className="section-tag">All Reviews</span>
            <h2 className="section-heading text-center">What Our Travellers Are Saying</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <Stars n={r.rating} />
                  <p className="text-stone-600 text-sm leading-relaxed mt-4 flex-1 italic">"{r.text}"</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-stone-50">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {r.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{r.name}</p>
                      <p className="text-stone-400 text-xs">{r.location} · {r.project}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '100%', label: 'Tailor-Made Trips' },
              { num: '6', label: 'Travel Services' },
              { num: '1-on-1', label: 'Personal Planning' },
              { num: 'WhatsApp', label: 'Quick Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-white mb-1">{stat.num}</p>
                <p className="text-amber-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-3">Join Our Happy Travellers</h2>
          <p className="text-stone-500 mb-8">Tell us where you want to go and we will plan the rest.</p>
          <Link to="/contact" className="btn-gold">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
