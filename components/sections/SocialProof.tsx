'use client';

import { motion } from 'framer-motion';

const ratings = [
  { platform: 'Business Reviews', score: '5/5' },
  { platform: 'Product Hunt',     score: '4.9/5' },
];

export default function SocialProof() {
  return (
    <section style={{
      background: '#fafafa',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0',
      padding: '64px 32px',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p style={{
          color: '#6b7280',
          fontSize: '15px',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '40px',
        }}>
          100,000+ organizations trust Nexora
        </p>

        <div style={{ display: 'inline-flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {ratings.map(({ platform, score }, i) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '20px 32px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ color: '#facc15', fontSize: '18px', letterSpacing: '2px', marginBottom: '4px' }}>★★★★★</div>
                <div style={{ color: '#9ca3af', fontSize: '11px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>{platform}</div>
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.03em',
              }}>
                {score}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
