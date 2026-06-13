'use client';

import { useState } from 'react';
import { GitFork, Share2, Globe } from 'lucide-react';

const navGroups = [
  { heading: 'Product',   links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { heading: 'Company',   links: ['About', 'Blog', 'Careers', 'Press'] },
  { heading: 'Resources', links: ['Docs', 'API', 'Status', 'Community'] },
  { heading: 'Legal',     links: ['Privacy', 'Terms', 'Cookies', 'Security'] },
];

const socials = [
  { Icon: GitFork, label: 'GitHub' },
  { Icon: Share2,  label: 'Twitter' },
  { Icon: Globe,   label: 'Website' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background: '#052e16', paddingBottom: '0' }}>

      {/* Newsletter row */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '56px 48px 48px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px', flexWrap: 'wrap',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <span style={{
          fontSize: '28px', fontWeight: '800', color: '#ffffff',
          fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
        }}>
          Join Our{' '}
          <span style={{ color: '#22c55e' }}>Newsletter</span>
        </span>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '999px',
              padding: '12px 24px',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              outline: 'none',
              width: '260px',
            }}
          />
          <button style={{
            background: '#22c55e',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            padding: '12px 28px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
          }}>
            Join Now
          </button>
        </div>
      </div>

      {/* Main footer links */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '48px 48px 40px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
        gap: '32px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {/* Brand col */}
        <div>
          <div style={{
            fontSize: '22px', fontWeight: '900', color: '#ffffff',
            fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em',
            marginBottom: '12px',
          }}>
            AGRI-FARM
          </div>
          <p style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.45)',
            fontFamily: 'Inter, sans-serif', lineHeight: '1.7',
            marginBottom: '20px', maxWidth: '200px',
          }}>
            Smarter farming through AI-powered automation and data-driven insights.
          </p>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {socials.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} style={{
                color: 'rgba(255,255,255,0.4)',
                display: 'flex', alignItems: 'center',
                transition: 'color 0.2s',
              }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav cols */}
        {navGroups.map(({ heading, links }) => (
          <div key={heading}>
            <h4 style={{
              fontSize: '11px', fontWeight: '600',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              fontFamily: 'Inter, sans-serif', marginBottom: '16px',
            }}>
              {heading}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {links.map(link => (
                <a key={link} href="#" style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  lineHeight: '2.2',
                }}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <span style={{
          fontSize: '12px', color: 'rgba(255,255,255,0.3)',
          fontFamily: 'Inter, sans-serif',
        }}>
          © 2026 AGRI-FARM, Inc. All rights reserved.
        </span>
        <span style={{
          fontSize: '12px', color: 'rgba(255,255,255,0.3)',
          fontFamily: 'Inter, sans-serif',
        }}>
          SOC II · 256-bit Encryption · 24/5 Support
        </span>
      </div>

    </footer>
  );
}
