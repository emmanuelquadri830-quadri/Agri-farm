'use client';

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{ width: '100%', padding: '0 1.5rem 1rem' }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.2)',
      }}>
        <img
          src="/images/ChatGPT Image Jun 10, 2026, 01_09_41 AM.png"
          alt="Nexora Dashboard"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
