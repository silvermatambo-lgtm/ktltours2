import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const FAQS = [
  {
    q: 'What kinds of trips does KTL Tours & Getaways offer?',
    a: 'We offer guided tours and excursions, beach getaways, luxury villa stays, group and family holidays, romantic and honeymoon escapes, and fully custom itineraries. If you have something specific in mind, just tell us and we will plan it with you.',
  },
  {
    q: 'How do I book a trip?',
    a: 'Getting started is easy. Call or WhatsApp us on 062 012 8294, or fill in the enquiry form on our Contact page. Tell us where you would like to go, your dates and how many people are travelling, and we will come back to you with options and a quote.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes. Quotes are free and come with no obligation. Share your destination ideas, travel dates, group size and budget, and we will put together a clear quote for your trip.',
  },
  {
    q: 'Can you plan a trip around my budget?',
    a: 'Absolutely. Every itinerary is built around your budget, travel style and group. Let us know what you are comfortable spending and we will suggest the best options within that range.',
  },
  {
    q: 'Do you arrange group and family holidays?',
    a: 'Yes. We organise holidays for families, friends and larger groups, including group-friendly accommodation and activities for all ages. You will have one point of contact for the whole group.',
  },
  {
    q: 'What does a villa stay include?',
    a: 'Villa stays vary by property. Many offer features like private pools, gardens, outdoor lounges and spacious bedrooms. When you enquire, we will share the details, photos and what is included for the villa that suits your trip.',
  },
  {
    q: 'Can you help with honeymoons and special occasions?',
    a: 'We would love to. We help plan honeymoons, anniversaries, birthdays and other celebrations, with peaceful stays and personal touches to make the occasion memorable.',
  },
  {
    q: 'Can I change or customise my itinerary?',
    a: 'Yes. Your itinerary is yours. Tell us what you would like to add, remove or change, and we will adjust the plan. Changes after booking are subject to availability and supplier terms, and we will always explain these clearly.',
  },
  {
    q: 'How do I pay and what are the booking terms?',
    a: 'Payment and cancellation terms depend on the trip and the suppliers involved. We will explain the full terms in your quote before you confirm anything, so there are no surprises.',
  },
  {
    q: 'How can I contact you?',
    a: 'Call or WhatsApp us on 062 012 8294, use the chat button on this site, or send us a message through the Contact page. We are happy to answer questions before you book.',
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-amber-300 shadow-md' : 'border-stone-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
      >
        <span className={`font-semibold text-sm md:text-base leading-snug ${open ? 'text-amber-600' : 'text-stone-800'}`}>{q}</span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-amber-500 text-white' : 'bg-stone-100 text-stone-500'}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
          {a}
        </div>
      )}
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

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/beach-gate.jpg)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Have Questions?</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Frequently Asked Questions</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">
            Everything you need to know about planning your trip with KTL Tours & Getaways.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={i}>
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-3">Still have questions?</h2>
          <p className="text-stone-500 mb-8">We're happy to help. Reach out to us directly and we'll answer all your questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27620128294" className="btn-gold">
              Call Us Now
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors text-sm">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
