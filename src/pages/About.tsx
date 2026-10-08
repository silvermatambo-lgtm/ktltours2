import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="page-enter pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/beach-glass.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">About KTL Tours & Getaways</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore. Discover. Experience. We create tours and getaways tailored to you, with care, passion and a personal touch.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-heading mb-4">Travel Planned Around You</h2>
              <div className="gold-bar" />
              <p className="text-stone-500 leading-relaxed mt-4 mb-4">
                KTL Tours & Getaways was built on a simple belief: every trip should feel effortless and unforgettable. We are a tours and travel company that helps people escape the everyday and enjoy beautiful destinations without the stress of planning.
              </p>
              <p className="text-stone-500 leading-relaxed mb-4">
                We pay close attention to the details — from where you stay to how you get there — so every part of your getaway matches what you have in mind.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                Whether you are planning a beach break, a villa stay with friends and family, a romantic escape or a custom itinerary, we bring the same care to every booking, big or small.
              </p>
              <ul className="space-y-3">
                {['Tailor-made tours & getaways', 'Beautiful beach & villa stays', 'Personal planning from start to finish', 'Friendly support on WhatsApp & phone'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700 text-sm">
                    <CheckCircle size={16} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/beach-glass.jpg" alt="Beach view" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
                <img src="/images/villa-front.jpg" alt="Villa and pool" className="w-full h-52 object-cover rounded-2xl shadow-lg mt-6" loading="lazy" />
                <img src="/images/bedroom.jpg" alt="Comfortable villa bedroom" className="w-full h-52 object-cover rounded-2xl shadow-lg -mt-6" loading="lazy" />
                <img src="/images/pool-tiles.jpg" alt="Swimming pool" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Our Pillars</span>
            <h2 className="section-heading text-center">Mission, Vision & Values</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} />,
                title: 'Our Mission',
                text: 'To create memorable tours and getaways that are tailored to every traveller, delivered with attention to detail, honest advice and friendly, reliable service.',
              },
              {
                icon: <Eye size={28} />,
                title: 'Our Vision',
                text: 'To be the travel company people trust for their next escape — known for great experiences, genuine care and trips that bring people back again and again.',
              },
              {
                icon: <Heart size={28} />,
                title: 'Our Values',
                text: 'Care, honesty, reliability and great experiences are at the heart of everything we do. We plan every trip as if we were travelling ourselves.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-stone-800 text-xl mb-3">{item.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/images/pool-deck.jpg)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag text-amber-400">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Why Travel With KTL</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tailor-Made Trips', desc: 'Every itinerary is shaped around your budget, group and travel style.' },
              { title: 'Beautiful Stays', desc: 'Beach getaways and villa stays chosen for comfort and views.' },
              { title: 'Personal Service', desc: 'One friendly team from first enquiry to the day you return home.' },
              { title: 'Stress-Free Travel', desc: 'We handle the planning so you can focus on enjoying the trip.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
