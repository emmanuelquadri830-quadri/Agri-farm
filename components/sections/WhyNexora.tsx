'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyNexora() {
  return (
    <section style={{
      backgroundImage: 'url(/images/sky-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      padding: '100px 0',
      margin: 0,
      position: 'relative',
    }}>
      {/* Bottom fade into white */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '160px',
        background: 'linear-gradient(to bottom, transparent 0%, #ffffff 100%)',
        pointerEvents: 'none',
        zIndex: 10,
      }} />
      <style>{`
        @media (max-width: 768px) {
          .wnx-section { padding: 60px 5% 0 !important; }
          .wnx-card1-grid { grid-template-columns: 1fr !important; }
          .wnx-card1-image {
            clip-path: none !important;
            border-radius: 0 0 12px 12px !important;
            min-height: 280px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '90%', margin: '0 auto', position: 'relative' }}>

        {/* ── Card 1: cream ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="wnx-card1-grid"
          style={{
            background: '#ede5d0',
            borderRadius: '12px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 2,
            minHeight: '420px',
          }}
        >
          {/* Left: text */}
          <div style={{ padding: '72px 60px' }}>
            <h2 style={{
              fontSize: '38px',
              fontWeight: '700',
              color: '#1a2e23',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, sans-serif',
            }}>
              Farming shouldn't cost the Earth
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#333',
              lineHeight: '1.7',
              marginTop: '16px',
              maxWidth: '420px',
              fontFamily: 'Inter, sans-serif',
            }}>
              Farming in harmony with nature is not only possible, but profitable.
              When conservation benefits those who steward the land, people and
              planet can thrive.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginTop: '32px',
                background: '#1a2e23',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                display: 'inline-block',
              }}
            >
              Tell me more
            </motion.button>
          </div>

          {/* Right: farmer image with concave left edge */}
          <div
            className="wnx-card1-image"
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: '460px',
              clipPath: 'ellipse(100% 100% at 100% 50%)',
              borderRadius: '0 12px 12px 0',
            }}
          >
            <Image
              src="/images/farmer-card.jpeg"
              alt="Farmer in Uganda"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>


      </div>
    </section>
  );
}
