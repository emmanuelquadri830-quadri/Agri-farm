'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section style={{ padding: '0 24px 80px', background: '#ffffff' }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: '#111827',
          borderRadius: '28px',
          padding: '96px 40px',
          textAlign: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating badges */}
        <div style={{
          position: 'absolute', top: '28px', left: '36px',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px', padding: '8px 16px',
          color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: 'Inter, sans-serif',
        }}>
          ✓ No credit card required
        </div>
        <div style={{
          position: 'absolute', top: '28px', right: '36px',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px', padding: '8px 16px',
          color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: 'Inter, sans-serif',
        }}>
          ⚡ Setup in 2 minutes
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700', color: 'white',
            letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif',
            marginBottom: '16px', lineHeight: '1.1',
          }}
        >
          Make your first automation in minutes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.5)',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '440px', margin: '0 auto 40px', lineHeight: '1.7',
          }}
        >
          Join 100,000+ teams already using Nexora to move faster and do more with less.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: 'white', color: '#111827',
            padding: '16px 36px', borderRadius: '999px',
            border: 'none', fontSize: '15px', fontWeight: '700',
            cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.01em',
          }}
        >
          Get Started Free
        </motion.button>
      </motion.div>
    </section>
  );
}
