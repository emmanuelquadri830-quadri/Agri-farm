'use client';

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
  return (
    <footer style={{
      background: 'white',
      borderTop: '1px solid #f3f4f6',
      padding: '64px 32px 32px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '32px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontSize: '16px', fontWeight: '700', color: '#111827',
              fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>
              Nexora
            </div>
            <p style={{
              fontSize: '13px', color: '#9ca3af',
              fontFamily: 'Inter, sans-serif', lineHeight: '1.65',
              marginBottom: '16px',
            }}>
              Automate smarter.<br />Move faster.
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ color: '#d1d5db', display: 'flex', alignItems: 'center' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navGroups.map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{
                fontSize: '11px', fontWeight: '600', color: '#9ca3af',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                fontFamily: 'Inter, sans-serif', marginBottom: '16px',
              }}>
                {heading}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                {links.map(link => (
                  <a key={link} href="#" style={{
                    fontSize: '13px', color: '#6b7280',
                    fontFamily: 'Inter, sans-serif', textDecoration: 'none',
                    lineHeight: '2',
                  }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid #f3f4f6',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span style={{ fontSize: '12px', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>
            © 2026 Nexora, Inc.
          </span>
          <span style={{ fontSize: '12px', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>
            SOC II · 256-bit Encryption · 24/5 Support
          </span>
        </div>
      </div>
    </footer>
  );
}
