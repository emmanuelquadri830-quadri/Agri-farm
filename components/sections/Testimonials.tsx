'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    initials: 'JM',
    quote: 'Nexora cut our reporting time by 80%. The AI insights are genuinely game-changing.',
    bold: 'game-changing',
    name: 'James Mitchell',
    role: 'Head of Operations @ Vercel',
  },
  {
    initials: 'SR',
    quote: 'We replaced three separate tools with Nexora. Setup took under 20 minutes.',
    bold: 'under 20 minutes',
    name: 'Sarah Reed',
    role: 'CTO @ Linear',
  },
  {
    initials: 'LD',
    quote: 'Enterprise security with startup-level speed. Every compliance box checked in a week.',
    bold: 'compliance box checked',
    name: 'Lisa Donovan',
    role: 'VP Engineering @ Stripe',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{ background: '#fafafa', padding: '96px 32px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: '700', color: '#111827',
          letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif', lineHeight: '1.1',
        }}>
          How people use Nexora
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {testimonials.map(({ initials, quote, bold, name, role }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: 'white',
              border: '1px solid #f3f4f6',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ color: '#facc15', fontSize: '16px', letterSpacing: '2px', marginBottom: '16px' }}>★★★★★</div>
            <p style={{
              color: '#374151', fontSize: '16px', lineHeight: '1.75',
              fontFamily: 'Inter, sans-serif', fontWeight: '500',
              flex: 1, marginBottom: '24px',
            }}>
              {quote.split(bold).map((part, j, arr) => (
                <span key={j}>
                  {part}
                  {j < arr.length - 1 && <strong style={{ color: '#111827' }}>{bold}</strong>}
                </span>
              ))}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: '#dcfce7', color: '#15803d',
                fontWeight: '700', fontSize: '13px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Inter, sans-serif', flexShrink: 0,
              }}>{initials}</div>
              <div>
                <div style={{ color: '#111827', fontSize: '13px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>{name}</div>
                <div style={{ color: '#9ca3af', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>{role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
