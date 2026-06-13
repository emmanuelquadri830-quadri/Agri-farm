'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    desc: 'Perfect for individuals getting started.',
    features: ['Up to 5 users', '1,000 tasks / month', 'Basic analytics', 'Email support'],
    featured: false,
    badge: null,
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    desc: 'For growing teams who need real power.',
    features: ['Unlimited users', '50,000 tasks / month', 'Advanced analytics', 'Priority support', 'AI-powered insights'],
    featured: true,
    badge: 'Most Popular',
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Unlimited scale, dedicated support.',
    features: ['Unlimited everything', 'Dedicated CSM', 'SSO & SAML', 'Custom integrations', 'SLA guarantee'],
    featured: false,
    badge: null,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#ffffff', padding: '96px 32px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: '700', color: '#111827',
          letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif',
          marginBottom: '12px', lineHeight: '1.1',
        }}>
          Simple pricing, powerful features
        </h2>
        <p style={{ fontSize: '16px', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>
          No hidden fees. Cancel anytime.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
        alignItems: 'stretch',
      }}>
        {plans.map(({ name, price, period, desc, features, featured, badge, cta }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: 'white',
              border: `2px solid ${featured ? '#22c55e' : '#f3f4f6'}`,
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {badge && (
              <div style={{
                display: 'inline-block', background: '#22c55e', color: 'white',
                fontSize: '11px', fontWeight: '600', padding: '4px 14px',
                borderRadius: '999px', marginBottom: '16px',
                fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em',
                alignSelf: 'flex-start',
              }}>
                {badge}
              </div>
            )}

            <div style={{
              fontSize: '11px', fontWeight: '600', color: '#9ca3af',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              fontFamily: 'Inter, sans-serif', marginBottom: '12px',
            }}>
              {name}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '8px' }}>
              <span style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
                fontWeight: '700',
                color: featured ? '#16a34a' : '#111827',
                letterSpacing: '-0.04em',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1',
              }}>
                {price}
              </span>
              {period && (
                <span style={{ fontSize: '15px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginLeft: '2px' }}>
                  {period}
                </span>
              )}
            </div>

            <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginBottom: '24px', lineHeight: '1.6' }}>
              {desc}
            </p>

            <div style={{ borderTop: '1px solid #f3f4f6', marginBottom: '24px', paddingTop: '24px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flex: 1 }}>
              {features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={15} color="#22c55e" />
                  <span style={{ fontSize: '13px', color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>{f}</span>
                </div>
              ))}
            </div>

            <button style={{
              width: '100%', padding: '13px',
              borderRadius: '999px', fontSize: '14px', fontWeight: '600',
              fontFamily: 'Inter, sans-serif', cursor: 'pointer',
              letterSpacing: '-0.01em',
              background: featured ? '#22c55e' : 'transparent',
              color: featured ? 'white' : '#374151',
              border: featured ? 'none' : '2px solid #e5e7eb',
            }}>
              {cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
