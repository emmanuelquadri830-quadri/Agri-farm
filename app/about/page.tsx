'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';

function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: '14px', left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 80px)', maxWidth: '1200px',
      zIndex: 50, height: '58px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 28px',
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(24px) saturate(200%)',
      WebkitBackdropFilter: 'blur(24px) saturate(200%)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.55)',
      boxShadow: '0 2px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <Link href="/" style={{
        fontSize: '15px', fontWeight: '800', color: '#0f172a',
        letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif', textDecoration: 'none',
      }}>AGRI-FARM</Link>

      <div style={{
        display: 'flex', gap: '4px', alignItems: 'center',
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.04)', borderRadius: '999px', padding: '4px',
      }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'Features', href: '/#features' },
          { label: 'Pricing', href: '/#pricing' },
          { label: 'About', href: '/about', active: true },
        ].map(({ label, href, active }: { label: string; href: string; active?: boolean }) => (
          <Link key={label} href={href} style={{
            fontSize: '13.5px',
            color: active ? '#15803d' : '#4b5563',
            textDecoration: 'none', fontFamily: 'Inter, sans-serif',
            fontWeight: active ? '600' : '500',
            padding: '6px 16px', borderRadius: '999px',
            background: active ? 'white' : 'transparent',
            boxShadow: active ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            letterSpacing: '0.01em',
          }}>{label}</Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <Link href="#" style={{
          fontSize: '13.5px', color: '#4b5563', textDecoration: 'none',
          fontFamily: 'Inter, sans-serif', fontWeight: '500',
          padding: '7px 16px', borderRadius: '999px',
        }}>Sign in</Link>
        <button style={{
          background: 'linear-gradient(135deg, #22c55e, #15803d)',
          color: 'white', fontSize: '13.5px', fontWeight: '600',
          padding: '8px 20px', borderRadius: '999px', border: 'none',
          cursor: 'pointer', fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.01em', boxShadow: '0 2px 10px rgba(21,128,61,0.35)',
        }}>Get Started</button>
      </div>
    </nav>
  );
}

const stats = [
  { value: '2.4M+', label: 'Acres Monitored' },
  { value: '50,000+', label: 'Farmers Empowered' },
  { value: '180+', label: 'Countries Reached' },
  { value: '320+', label: 'Crop Varieties Tracked' },
];

const pillars = [
  {
    icon: '🌍',
    title: 'Our Mission',
    body: 'To put precision agriculture into the hands of every farmer — regardless of scale — so the land works harder and smarter for the people who depend on it.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    body: 'A world where no farm operates on guesswork. Where every planting decision is backed by real data, fair markets, and the land\'s own intelligence.',
  },
  {
    icon: '💡',
    title: 'Our Purpose',
    body: 'We exist at the intersection of technology and the earth — to close the gap between what is possible in agriculture and what farmers actually have access to.',
  },
];

const timeline = [
  { year: '2026', event: 'Expansion into Southeast Asia and South America. 50,000+ active farming teams on platform.' },
  { year: '2025', event: 'Launch of AI-powered crop insight engine. Surpass 2.4M acres monitored globally.' },
  { year: '2024', event: 'Series A funding secured. Strategic partnerships with 3 national agricultural ministries.' },
  { year: '2023', event: 'Public beta launch. First 500 farms onboarded across West and East Africa.' },
  { year: '2022', event: 'Product development and pilot testing with 20 smallholder farms. Core platform built.' },
  { year: '2019', event: 'AGRI-FARM founded with a single mission: make precision agriculture accessible to every farmer on earth.' },
];

const team = [
  { name: 'Emmanuel Quadri', role: 'Founder & CEO', initials: 'EQ', color: '#0f2d1a' },
  { name: 'Amara Diallo', role: 'Chief Technology Officer', initials: 'AD', color: '#14532d' },
  { name: 'Fatima Nwosu', role: 'Head of Product', initials: 'FN', color: '#166534' },
  { name: 'Kofi Mensah', role: 'Head of Data Science', initials: 'KM', color: '#15803d' },
  { name: 'Yinka Adeyemi', role: 'Head of Partnerships', initials: 'YA', color: '#16a34a' },
  { name: 'Sara Okafor', role: 'Head of Operations', initials: 'SO', color: '#22c55e' },
];

const partners = ['Google', 'Bayer', 'Syngenta', 'IFC', 'Olam International', 'Rabobank', 'FAO', 'USAID'];

const investors = [
  'Seedstars Africa', 'Novastar Ventures', 'African Development Bank',
  'Founders Factory Africa', 'Google for Startups',
];

export default function AboutPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '560px', display: 'flex', alignItems: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center 60%',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(4,14,8,0.65) 0%, rgba(4,14,8,0.75) 60%, #071510 100%)',
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '1200px', margin: '0 auto',
          padding: '160px 60px 100px', width: '100%',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em',
              textTransform: 'uppercase', color: '#4ade80', marginBottom: '20px',
            }}>About AGRI-FARM</p>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: '800', color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: '1.08',
              maxWidth: '720px', marginBottom: '24px',
            }}>
              We built this for the farmer.<br />
              <span style={{ fontWeight: '300', color: 'rgba(255,255,255,0.5)' }}>
                Not for the boardroom.
              </span>
            </h1>
            <p style={{
              fontSize: '17px', color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.75', maxWidth: '560px', marginBottom: '36px',
            }}>
              AGRI-FARM is an AI-powered platform that gives farming operations the
              visibility, automation, and intelligence they need to grow sustainably —
              at any scale.
            </p>
            <Link href="#" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #22c55e, #15803d)',
              color: 'white', fontSize: '14px', fontWeight: '600',
              padding: '15px 32px', borderRadius: '12px', textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(34,197,94,0.35)',
              letterSpacing: '-0.01em',
            }}>Contact us</Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#071510', padding: '72px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}>
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: '0 40px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                  fontWeight: '800', color: '#ffffff',
                  letterSpacing: '-0.04em', lineHeight: '1',
                  marginBottom: '10px',
                }}>{value}</div>
                <div style={{
                  fontSize: '13px', fontWeight: '500',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-FIRST TRANSFORMATION ── */}
      <section style={{ background: '#ffffff', padding: '100px 60px' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#16a34a', marginBottom: '16px',
            }}>Who we are</p>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
              fontWeight: '800', color: '#111827',
              letterSpacing: '-0.035em', lineHeight: '1.12',
              marginBottom: '20px',
            }}>
              AI-first digital transformation for agriculture
            </h2>
            <p style={{
              fontSize: '16px', color: '#6b7280',
              lineHeight: '1.8', marginBottom: '20px',
            }}>
              The agricultural sector faces a systemic challenge: too many decisions made
              with too little data. Unpredictable weather, fragmented supply chains, and
              shrinking margins leave farmers exposed.
            </p>
            <p style={{
              fontSize: '16px', color: '#6b7280', lineHeight: '1.8',
            }}>
              AGRI-FARM was built to change that. By layering AI on top of field data,
              market signals, and agronomic knowledge, we give every farmer — from a
              1-acre smallholder to a 50,000-acre operation — a platform that thinks ahead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: '#f9fafb', borderRadius: '20px',
              padding: '48px 40px', border: '1px solid #f0f0f0',
            }}
          >
            {[
              { n: '01', title: 'Fragmented data', body: 'Soil readings, weather feeds, and yield records exist in silos. We unify them.' },
              { n: '02', title: 'Reactive decisions', body: 'Most farms respond to problems after they happen. We help you see them coming.' },
              { n: '03', title: 'Market opacity', body: 'Farmers sell blind. AGRI-FARM surfaces pricing signals so you negotiate from strength.' },
            ].map(({ n, title, body }) => (
              <div key={n} style={{
                display: 'flex', gap: '20px',
                marginBottom: '32px',
              }}>
                <span style={{
                  fontSize: '12px', fontWeight: '700', color: '#22c55e',
                  letterSpacing: '0.08em', flexShrink: 0, paddingTop: '2px',
                }}>{n}</span>
                <div>
                  <h4 style={{
                    fontSize: '15px', fontWeight: '700', color: '#111827',
                    marginBottom: '6px', letterSpacing: '-0.01em',
                  }}>{title}</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION / PURPOSE ── */}
      <section style={{ background: '#f9faf8', padding: '80px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '800', color: '#111827',
              letterSpacing: '-0.035em', lineHeight: '1.15',
            }}>What drives us</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {pillars.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'white', borderRadius: '20px',
                  padding: '40px 36px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '20px' }}>{icon}</div>
                <h3 style={{
                  fontSize: '18px', fontWeight: '700', color: '#111827',
                  letterSpacing: '-0.02em', marginBottom: '12px',
                }}>{title}</h3>
                <p style={{
                  fontSize: '15px', color: '#6b7280',
                  lineHeight: '1.75',
                }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ background: '#ffffff', padding: '80px 60px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: 'center', fontSize: '12px', fontWeight: '700',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#9ca3af', marginBottom: '40px',
            }}
          >
            Trusted by leading organisations
          </motion.p>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '16px', justifyContent: 'center', alignItems: 'center',
          }}>
            {partners.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  background: '#f9fafb', border: '1px solid #e5e7eb',
                  borderRadius: '12px', padding: '14px 28px',
                  fontSize: '14px', fontWeight: '600', color: '#374151',
                  letterSpacing: '-0.01em',
                }}
              >{name}</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: '#f9faf8', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '64px' }}
          >
            <p style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#16a34a', marginBottom: '12px',
            }}>Our history</p>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: '800', color: '#111827',
              letterSpacing: '-0.035em', lineHeight: '1.12',
              maxWidth: '520px',
            }}>
              From a single idea to a global platform
            </h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '80px', top: 0, bottom: 0,
              width: '1px', background: '#e5e7eb',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    display: 'flex', gap: '0', alignItems: 'flex-start',
                    paddingBottom: '40px',
                  }}
                >
                  {/* Year */}
                  <div style={{
                    width: '80px', flexShrink: 0,
                    fontSize: '14px', fontWeight: '700', color: '#16a34a',
                    paddingTop: '2px', letterSpacing: '-0.01em',
                  }}>{year}</div>

                  {/* Dot */}
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: i === 0 ? '#22c55e' : '#d1d5db',
                    border: i === 0 ? '2px solid #22c55e' : '2px solid #d1d5db',
                    flexShrink: 0, marginTop: '4px',
                    marginLeft: '-5px', marginRight: '28px',
                    boxShadow: i === 0 ? '0 0 0 4px rgba(34,197,94,0.15)' : 'none',
                  }} />

                  {/* Event */}
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.65',
                    fontWeight: i === timeline.length - 1 ? '600' : '400',
                    color: i === timeline.length - 1 ? '#111827' : '#374151',
                  } as React.CSSProperties}>{event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section style={{ background: '#ffffff', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '60px' }}
          >
            <p style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#16a34a', marginBottom: '12px',
            }}>The team</p>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: '800', color: '#111827',
              letterSpacing: '-0.035em', lineHeight: '1.12',
            }}>People behind the platform</h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {team.map(({ name, role, initials, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: '#f9fafb', border: '1px solid #f0f0f0',
                  borderRadius: '20px', padding: '32px 28px',
                  display: 'flex', flexDirection: 'column', gap: '16px',
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: color, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: '700', color: 'white',
                  letterSpacing: '0.04em',
                }}>{initials}</div>

                <div>
                  <div style={{
                    fontSize: '16px', fontWeight: '700', color: '#111827',
                    letterSpacing: '-0.02em', marginBottom: '4px',
                  }}>{name}</div>
                  <div style={{
                    fontSize: '13px', color: '#6b7280', fontWeight: '500',
                  }}>{role}</div>
                </div>

                {/* LinkedIn icon */}
                <a href="#" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', color: '#9ca3af', textDecoration: 'none',
                  fontWeight: '500',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTORS ── */}
      <section style={{ background: '#f9faf8', padding: '80px 60px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <p style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#9ca3af', marginBottom: '12px',
            }}>Backed by</p>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
              fontWeight: '800', color: '#111827',
              letterSpacing: '-0.03em',
            }}>Investors who believe in the mission</h2>
          </motion.div>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            justifyContent: 'center',
          }}>
            {investors.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: 'white', border: '1px solid #e5e7eb',
                  borderRadius: '14px', padding: '18px 32px',
                  fontSize: '15px', fontWeight: '700', color: '#111827',
                  letterSpacing: '-0.01em',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >{name}</motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          nav { width: calc(100% - 32px) !important; }
        }
      `}</style>
    </main>
  );
}
