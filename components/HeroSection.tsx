'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardPreview from "@/components/DashboardPreview";

const WORDS = ['Operations', 'Workflows', 'Automation', 'Productivity'];
const FOREST_GREEN = '#15803d';

function useTypewriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (deleting) {
        if (text.length === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % WORDS.length);
        } else {
          setText(w => w.slice(0, -1));
        }
      } else {
        setText(word.slice(0, text.length + 1));
      }
    }, deleting ? 55 : 88);

    return () => clearTimeout(t);
  }, [text, deleting, wordIdx]);

  return text;
}

export default function HeroSection() {
  const typed = useTypewriter();

  return (
    <section style={{ minHeight: '110vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Background video */}
      <video
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.40)', zIndex: 1 }} />

      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: '16px',
        left: '24px',
        right: '24px',
        zIndex: 50,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(220, 252, 231, 0.45)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '14px',
        border: '1px solid rgba(134,239,172,0.3)',
        boxShadow: '0 1px 40px rgba(34,197,94,0.06)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '16px',
            fontWeight: '900',
            color: '#0f172a',
            letterSpacing: '0.02em',
            fontFamily: 'Inter, sans-serif',
          }}>AGRI-FARM</span>
        </div>

        {/* Center links */}
        <div style={{
          display: 'flex', gap: '36px', alignItems: 'center',
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        }}>
          {['Home', 'Features', 'Pricing', 'Reviews'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '14px',
              color: '#374151',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}>{link}</a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="#" style={{
            fontSize: '13px',
            color: '#374151',
            textDecoration: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500',
          }}>Sign in</a>
          <button style={{
            background: '#16a34a',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            padding: '8px 20px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.01em',
          }}>Get Started</button>
        </div>
      </nav>

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'relative', zIndex: 10, flexShrink: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', paddingTop: '140px', paddingBottom: '80px', gap: '0px',
        }}
      >
        {/* Eyebrow row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '12px', marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {['★', '★', '★'].map((s, i) => (
              <span key={i} style={{ color: '#f59e0b', fontSize: '14px' }}>{s}</span>
            ))}
          </div>
          <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.6)',
            fontWeight: '500', fontFamily: 'Inter, sans-serif',
          }}>4.8 Reviews</span>
        </div>

        {/* Main headline — 2 lines with hierarchy */}
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.04em',
          lineHeight: '1.08',
          textAlign: 'center',
          margin: '0 auto 20px',
        }}>
          {/* Line 1 — supporting, smaller */}
          <span style={{
            display: 'block',
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            fontWeight: '600',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '6px',
            whiteSpace: 'nowrap',
          }}>
            Automate{' '}
            <span style={{ color: FOREST_GREEN }}>Smart</span>
            {' '}Workflows
          </span>

          {/* Line 2 — hero, large */}
          <span style={{
            display: 'block',
            fontSize: 'clamp(3rem, 5.5vw, 5rem)',
            fontWeight: '800',
            color: 'white',
            whiteSpace: 'nowrap',
          }}>
            That Power Your{' '}
            <span style={{ color: FOREST_GREEN }}>{typed}</span>
            <span style={{
              display: 'inline-block',
              width: '3px',
              height: '0.8em',
              background: FOREST_GREEN,
              marginLeft: '4px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: '16px', color: 'rgba(255,255,255,0.55)',
          fontFamily: 'Inter, sans-serif', fontWeight: '400',
          maxWidth: '480px', lineHeight: '1.75',
          margin: '0 auto 36px', textAlign: 'center',
        }}>
          Automate your daily tasks with smart AI agents designed to improve efficiency, reduce effort, and deliver faster results.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={{
            background: 'white', color: '#0f0f0f',
            fontSize: '14px', fontWeight: '600', padding: '13px 28px',
            borderRadius: '999px', border: 'none', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          }}>Book a demo</button>
          <button style={{
            background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)',
            fontSize: '14px', fontWeight: '500', padding: '13px 28px',
            borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer', fontFamily: 'Inter, sans-serif',
          }}>See how it works →</button>
        </div>
      </motion.div>

      {/* Dashboard */}
      <div style={{
        position: 'relative', zIndex: 10, flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'flex-start',
        marginTop: '48px',
        transform: 'perspective(1200px) rotateX(6deg)',
        transformOrigin: 'top center',
        filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.25))',
      }}>
        <DashboardPreview />
      </div>

      {/* Bottom fog — blends into white page */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '25%',
        background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
        zIndex: 14,
        pointerEvents: 'none',
      }}/>

      {/* Curved cut at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '-2px',
        left: '-5%',
        right: '-5%',
        height: '160px',
        background: '#ffffff',
        borderRadius: '60% 60% 0 0 / 80px 80px 0 0',
        zIndex: 15,
      }}/>
    </section>
  );
}
