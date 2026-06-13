'use client';

import { useState } from 'react';

const navGroups = [
  { heading: 'Product',   links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { heading: 'Company',   links: ['About', 'Blog', 'Careers', 'Press'] },
  { heading: 'Resources', links: ['Docs', 'API', 'Status', 'Community'] },
  { heading: 'Legal',     links: ['Privacy', 'Terms', 'Cookies', 'Security'] },
];

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function handleJoin() {
    if (!email.trim()) return;
    setJoined(true);
    setEmail('');
    setTimeout(() => setJoined(false), 3000);
  }

  return (
    <>
      {/* ════════════════════════════
          CTA SECTION
      ════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'rgba(10,30,18,0.82)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: '1200px', margin: '0 auto',
          padding: '96px 80px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '80px',
        }}>
          {/* Left heading */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: '13px', fontWeight: '600', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#4ade80',
              fontFamily: 'Inter, sans-serif', marginBottom: '20px',
            }}>
              AI-Powered Agriculture
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '520px',
            }}>
              Drive predictable outcomes across your agri-food operations
            </h2>
          </div>

          {/* Right */}
          <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{
              fontSize: '16px', color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.75', fontFamily: 'Inter, sans-serif',
            }}>
              Transform your farming operations with AGRI-FARM's AI-powered platform.
              Reach out today to accelerate growth and boost yields with data-driven insights.
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button style={{
                background: '#22c55e', color: 'white',
                fontSize: '14px', fontWeight: '600',
                padding: '14px 32px', borderRadius: '999px',
                border: 'none', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
              }}>
                Schedule a demo →
              </button>
              <a href="#" style={{
                fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Inter, sans-serif', textDecoration: 'none',
                fontWeight: '500',
              }}>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          FOOTER
      ════════════════════════════ */}
      <footer style={{ backgroundColor: '#071510', width: '100%' }}>

        {/* Newsletter band */}
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{
            maxWidth: '1200px', margin: '0 auto',
            padding: '56px 80px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: '32px',
            flexWrap: 'wrap',
          }}>
            <div>
              <p style={{
                fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#4ade80',
                fontFamily: 'Inter, sans-serif', marginBottom: '8px',
              }}>
                Stay updated
              </p>
              <span style={{
                fontSize: '28px', fontWeight: '700', color: '#ffffff',
                fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}>
                Join Our{' '}
                <span style={{ color: '#22c55e' }}>Newsletter</span>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleJoin()}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '999px',
                  padding: '13px 24px',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                  width: '280px',
                }}
              />
              <button
                onClick={handleJoin}
                style={{
                  background: '#22c55e', color: 'white',
                  fontSize: '14px', fontWeight: '600',
                  padding: '13px 28px', borderRadius: '999px',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  minWidth: '110px',
                  letterSpacing: '-0.01em',
                }}
              >
                {joined ? 'Joined ✓' : 'Join Now'}
              </button>
            </div>
          </div>
        </div>

        {/* Main links area */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '64px 80px 48px',
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '80px',
          alignItems: 'start',
        }}>

          {/* Brand col */}
          <div>
            <div style={{
              fontSize: '20px', fontWeight: '900', color: '#ffffff',
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em',
              marginBottom: '16px',
            }}>
              AGRI-FARM
            </div>
            <p style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.38)',
              fontFamily: 'Inter, sans-serif', lineHeight: '1.8',
              marginBottom: '28px',
            }}>
              Smarter farming through AI-powered automation and data-driven insights.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {[
                { Icon: GithubIcon,   label: 'GitHub' },
                { Icon: TwitterIcon,  label: 'Twitter' },
                { Icon: LinkedInIcon, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} style={{
                  color: 'rgba(255,255,255,0.28)',
                  display: 'flex', alignItems: 'center',
                  transition: 'color 0.2s',
                }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
          }}>
            {navGroups.map(({ heading, links }) => (
              <div key={heading}>
                <h4 style={{
                  fontSize: '11px', fontWeight: '700',
                  color: 'rgba(255,255,255,0.28)',
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px',
                }}>
                  {heading}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {links.map(link => (
                    <a key={link} href="#" style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.5)',
                      fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none',
                      lineHeight: '2.2',
                      transition: 'color 0.15s',
                    }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '20px 80px 40px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.22)',
            fontFamily: 'Inter, sans-serif',
          }}>
            © 2026 AGRI-FARM, Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {['SOC II Certified', '256-bit Encryption', '24/7 Support'].map(item => (
              <span key={item} style={{
                fontSize: '12px', color: 'rgba(255,255,255,0.22)',
                fontFamily: 'Inter, sans-serif',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>

      </footer>
    </>
  );
}
