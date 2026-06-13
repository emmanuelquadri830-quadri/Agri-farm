'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '380px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background — deep green gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #052e16 0%, #14532d 40%, #166534 70%, #15803d 100%)',
        zIndex: 0,
      }} />
      {/* Texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(34,197,94,0.12) 0%, transparent 60%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1100px', margin: '0 auto',
        padding: '80px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.15',
            letterSpacing: '-0.03em',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '0',
          }}>
            Drive predictable outcomes<br />across your agri-food operations
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.7',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '24px',
          }}>
            Transform your farming operations with AGRI-FARM's AI-powered platform.
            Reach out today to accelerate growth and boost yields with data-driven insights.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#22c55e',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '600',
              padding: '13px 28px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Schedule a demo →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
