'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    tag: 'Free forever',
    price: '$0',
    period: '/month',
    desc: 'For individuals and small teams just getting started with smarter farming.',
    features: [
      'Up to 5 users',
      '1,000 tasks per month',
      'Basic field analytics',
      'Email support',
    ],
    featured: false,
    cta: 'Get started free',
    ctaNote: 'No credit card required',
  },
  {
    name: 'Pro',
    tag: 'Most popular',
    price: '$49',
    period: '/month',
    desc: 'Everything a growing agri-operation needs to scale with confidence.',
    features: [
      'Unlimited users',
      '50,000 tasks per month',
      'Advanced analytics & reports',
      'Priority support',
      'AI-powered crop insights',
    ],
    featured: true,
    cta: 'Start 14-day free trial',
    ctaNote: 'Cancel anytime',
  },
  {
    name: 'Enterprise',
    tag: 'Custom',
    price: 'Let\'s talk',
    period: '',
    desc: 'Built for large-scale operations with complex workflows and compliance needs.',
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'SSO & SAML',
      'Custom integrations',
      'SLA guarantee',
    ],
    featured: false,
    cta: 'Contact our team',
    ctaNote: 'Response within 24 hours',
  },
];

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#dcfce7" />
    <path d="M4.5 7.5l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#fafaf9', padding: '96px 60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '72px' }}
        >
          <p style={{
            fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#16a34a',
            fontFamily: 'Inter, sans-serif', marginBottom: '14px',
          }}>
            Pricing
          </p>
          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            fontWeight: '700', color: '#111827',
            letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif',
            lineHeight: '1.15', maxWidth: '520px',
            marginBottom: '16px',
          }}>
            Transparent pricing that grows with you
          </h2>
          <p style={{
            fontSize: '16px', color: '#6b7280',
            fontFamily: 'Inter, sans-serif', lineHeight: '1.7',
            maxWidth: '440px',
          }}>
            No setup fees, no surprise charges. Pick the plan that fits your operation — change anytime.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {plans.map(({ name, tag, price, period, desc, features, featured, cta, ctaNote }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: featured ? '#0f2d1a' : 'white',
                border: featured ? 'none' : '1px solid #e5e7eb',
                borderRadius: '20px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: featured
                  ? '0 24px 60px rgba(15,45,26,0.18)'
                  : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {/* Subtle top accent for featured */}
              {featured && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #22c55e, #86efac)',
                }} />
              )}

              {/* Tag */}
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                marginBottom: '28px',
              }}>
                <span style={{
                  fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: featured ? '#86efac' : '#9ca3af',
                  fontFamily: 'Inter, sans-serif',
                  background: featured ? 'rgba(134,239,172,0.12)' : '#f3f4f6',
                  padding: '4px 12px', borderRadius: '999px',
                }}>
                  {tag}
                </span>
              </div>

              {/* Plan name */}
              <div style={{
                fontSize: '13px', fontWeight: '600',
                color: featured ? 'rgba(255,255,255,0.5)' : '#9ca3af',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: '10px',
              }}>
                {name}
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '12px' }}>
                <span style={{
                  fontSize: price === "Let's talk" ? '2rem' : 'clamp(2.4rem, 4vw, 3rem)',
                  fontWeight: '700',
                  color: featured ? '#ffffff' : '#111827',
                  letterSpacing: '-0.04em',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1',
                }}>
                  {price}
                </span>
                {period && (
                  <span style={{
                    fontSize: '14px', color: featured ? 'rgba(255,255,255,0.4)' : '#9ca3af',
                    fontFamily: 'Inter, sans-serif', paddingBottom: '4px',
                  }}>
                    {period}
                  </span>
                )}
              </div>

              {/* Desc */}
              <p style={{
                fontSize: '14px', lineHeight: '1.65',
                color: featured ? 'rgba(255,255,255,0.55)' : '#6b7280',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '28px',
              }}>
                {desc}
              </p>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: featured ? 'rgba(255,255,255,0.08)' : '#f3f4f6',
                marginBottom: '24px',
              }} />

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, marginBottom: '32px' }}>
                {features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ flexShrink: 0, marginTop: '1px' }}>{CHECK}</span>
                    <span style={{
                      fontSize: '14px',
                      color: featured ? 'rgba(255,255,255,0.7)' : '#4b5563',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: '1.5',
                    }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div>
                <button style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                  background: featured
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                    : 'transparent',
                  color: featured ? 'white' : '#374151',
                  border: featured ? 'none' : '1.5px solid #d1d5db',
                  boxShadow: featured ? '0 4px 14px rgba(34,197,94,0.3)' : 'none',
                  marginBottom: '10px',
                }}>
                  {cta}
                </button>
                <p style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  color: featured ? 'rgba(255,255,255,0.35)' : '#9ca3af',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  {ctaNote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
            fontSize: '13px',
            color: '#9ca3af',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          All plans include SOC II compliance, 256-bit encryption, and 24/7 uptime monitoring.
        </motion.p>

      </div>
    </section>
  );
}
