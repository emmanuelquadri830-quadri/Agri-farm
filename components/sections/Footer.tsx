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
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function handleJoin() {
    if (!email) return;
    setJoined(true);
    setEmail('');
    setTimeout(() => setJoined(false), 3000);
  }

  return (
    <>
      {/* ── CTA SECTION ── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(10,40,20,0.85) 0%, rgba(22,100,50,0.7) 60%, rgba(10,60,30,0.75) 100%)',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 flex flex-col md:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Drive predictable outcomes across your agri-food operations
            </h2>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-white/80 text-base leading-relaxed">
              Transform your farming operations with AGRI-FARM's AI-powered platform.
              Reach out today to accelerate growth and boost yields with data-driven insights.
            </p>
            <div>
              <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full px-6 py-3 font-semibold transition-colors duration-200">
                Schedule a demo →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0d2818' }}>

        {/* Newsletter row */}
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-white text-2xl md:text-3xl font-semibold">
            Join Our <span className="text-[#22c55e]">Newsletter</span>
          </span>
          <div className="flex gap-3 flex-wrap">
            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
              className="rounded-full bg-white/10 border border-white/20 placeholder-white/40 text-white px-5 py-3 text-sm outline-none w-64"
            />
            <button
              onClick={handleJoin}
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full px-6 py-3 font-semibold text-sm transition-colors duration-200 min-w-[100px]"
            >
              {joined ? 'Joined ✓' : 'Join Now'}
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-6xl mx-auto px-6 pt-12 flex flex-col md:flex-row gap-10 justify-between">

          {/* Brand col */}
          <div className="flex flex-col gap-3 max-w-[220px]">
            <span className="text-white font-bold text-lg tracking-wide">AGRI-FARM</span>
            <p className="text-white/50 text-sm leading-relaxed">
              Smarter farming through AI-powered automation and data-driven insights.
            </p>
            <div className="flex gap-4 mt-1">
              {[
                { Icon: GithubIcon,   label: 'GitHub' },
                { Icon: TwitterIcon,  label: 'Twitter' },
                { Icon: LinkedInIcon, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="text-white/40 hover:text-white transition-colors duration-150">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {navGroups.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                  {heading}
                </h4>
                <div className="flex flex-col gap-0">
                  {links.map(link => (
                    <a key={link} href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-150 leading-loose">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 pb-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-white/30 text-xs">© 2026 AGRI-FARM, Inc. All rights reserved.</span>
          <span className="text-white/30 text-xs">SOC II · 256-bit Encryption · 24/7 Support</span>
        </div>

      </footer>
    </>
  );
}
