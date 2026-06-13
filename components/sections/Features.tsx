'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" style={{ background: '#f5f5f5', padding: '80px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            border: '1px solid #e5e7eb', background: 'white',
            borderRadius: '999px', padding: '4px 12px',
            fontSize: '12px', color: '#6b7280',
            fontFamily: 'Inter, sans-serif', marginBottom: '20px',
          }}>
            <span style={{ color: '#22c55e', fontSize: '8px' }}>●</span> Features
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: '700', color: '#111827',
            letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif',
            marginBottom: '12px', lineHeight: '1.15',
          }}>
            It all starts with your farm
          </h2>
          <p style={{
            fontSize: '15px', color: '#9ca3af',
            fontFamily: 'Inter, sans-serif',
          }}>
            Manage crops, track harvests, and automate your agricultural operations.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>

          {/* ── Card 1: Plan your crop cycles ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            style={{
              background: '#ffffff', border: '1px solid #ebebeb',
              borderRadius: '20px', padding: '32px',
              overflow: 'hidden', minHeight: '420px',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
              Plan your crop cycles
            </h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.65', marginBottom: '0' }}>
              Schedule planting, irrigation and harvest with intelligent routing.
            </p>
            <div style={{
              flex: 1, background: '#f9f9f9', border: '1px solid #f0f0f0',
              borderRadius: '14px', padding: '24px', marginTop: '24px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px' }}>

                {/* Step 1 */}
                <div style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', width: '260px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>🌱</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#111' }}>Seed planted</div>
                    <div style={{ fontSize: '10px', color: '#aaa' }}>Planting trigger</div>
                  </div>
                </div>

                <div style={{ width: '1px', height: '16px', background: '#e5e7eb' }} />

                {/* Step 2 */}
                <div style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', width: '260px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>💧</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#111' }}>Auto irrigation</div>
                    <div style={{ fontSize: '10px', color: '#aaa' }}>Soil moisture check</div>
                  </div>
                </div>

                <div style={{ width: '1px', height: '16px', background: '#e5e7eb' }} />

                {/* Step 3 */}
                <div style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', width: '260px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>🌿</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#111' }}>Growth tracked</div>
                    <div style={{ fontSize: '10px', color: '#aaa' }}>Based on season</div>
                  </div>
                </div>

                <div style={{ width: '1px', height: '16px', background: '#e5e7eb' }} />

                {/* Bottom branch */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#fef9c3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>☀️</div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: '#111' }}>Weather alert</div>
                      <div style={{ fontSize: '10px', color: '#aaa' }}>Notify farmer</div>
                    </div>
                  </div>
                  <div style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>📦</div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: '#111' }}>Harvest ready</div>
                      <div style={{ fontSize: '10px', color: '#aaa' }}>Schedule pickup</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Track fields with drag-and-drop ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              background: '#ffffff', border: '1px solid #ebebeb',
              borderRadius: '20px', padding: '32px',
              overflow: 'hidden', minHeight: '420px',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
              Track fields with drag-and-drop
            </h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
              Map your farmland, assign crops and manage zones with ease.
            </p>
            <div style={{
              flex: 1, background: '#f9f9f9', border: '1px solid #f0f0f0',
              borderRadius: '14px', padding: '24px', marginTop: '24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Floating tag card */}
              <div style={{
                position: 'absolute', top: '20px', left: '10px',
                transform: 'rotate(-6deg)',
                background: 'white', border: '1px solid #f3f4f6',
                borderRadius: '14px', padding: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                width: '112px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px' }}>🌾</div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#374151', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>Wheat field</div>
                <div style={{ fontSize: '10px', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>Zone A</div>
              </div>

              {/* Main form card */}
              <div style={{
                position: 'relative', left: '40px',
                background: 'white', border: '1px solid #e5e7eb',
                borderRadius: '14px', padding: '16px',
                width: '220px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#374151', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
                  Field log
                </div>
                <div style={{ fontSize: '10px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Crop type</div>
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', height: '28px', marginBottom: '8px' }} />
                <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', height: '28px', marginBottom: '8px' }} />
                <div style={{ fontSize: '10px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Soil pH</div>
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', height: '28px' }} />
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Secure farm access ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{
              background: '#ffffff', border: '1px solid #ebebeb',
              borderRadius: '20px', padding: '32px',
              overflow: 'hidden', minHeight: '420px',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
              Secure farm access
            </h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
              Protect your fields data with login-gated records. Control who sees what.
            </p>
            <div style={{
              flex: 1, background: '#f9f9f9', border: '1px solid #f0f0f0',
              borderRadius: '14px', padding: '24px', marginTop: '24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'relative', height: '220px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* Background form card (peeking behind) */}
                <div style={{
                  position: 'absolute', left: '20px', top: '30px',
                  background: 'white', border: '1px solid #f0f0f0',
                  borderRadius: '12px', padding: '12px', width: '140px',
                  opacity: 0.6, boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#555', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>Field application</div>
                  <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Farmer name</div>
                  <div style={{ background: '#f5f5f5', borderRadius: '6px', height: '20px', marginBottom: '6px' }} />
                  <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>Company</div>
                  <div style={{ background: '#f5f5f5', borderRadius: '6px', height: '20px' }} />
                </div>

                {/* Main login card (front) */}
                <div style={{
                  position: 'absolute', right: '10px', top: '10px',
                  background: 'white', border: '1px solid #e5e7eb',
                  borderRadius: '16px', padding: '20px', width: '200px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '14px' }}>
                    <div style={{ fontSize: '20px', marginBottom: '6px' }}>🔒</div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#111', fontFamily: 'Inter, sans-serif' }}>Sign in to access</div>
                  </div>
                  {/* Email input */}
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#bbb' }}>✉</span>
                    <div style={{ background: '#e5e7eb', borderRadius: '4px', height: '8px', flex: 1 }} />
                  </div>
                  {/* Password input */}
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', color: '#bbb' }}>🔒</span>
                    <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                      {[...Array(8)].map((_, i) => (
                        <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ccc' }} />
                      ))}
                    </div>
                  </div>
                  {/* CTA button */}
                  <div style={{ background: '#f59e0b', borderRadius: '8px', padding: '9px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '4px', height: '8px', width: '60%', margin: '0 auto' }} />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ── Card 4: Analyze harvest responses ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{
              background: '#ffffff', border: '1px solid #ebebeb',
              borderRadius: '20px', padding: '32px',
              overflow: 'hidden', minHeight: '420px',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
              Analyze harvest responses
            </h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
              Track yield data and collaborate with your team in real-time.
            </p>
            <div style={{
              flex: 1, background: '#f9f9f9', border: '1px solid #f0f0f0',
              borderRadius: '14px', padding: '24px', marginTop: '24px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ position: 'relative', paddingTop: '24px' }}>

                {/* Floating badge */}
                <div style={{
                  position: 'absolute', top: '-4px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white', border: '1px solid #e5e7eb',
                  borderRadius: '12px', padding: '8px 16px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  zIndex: 2, whiteSpace: 'nowrap',
                }}>
                  <div style={{ background: '#fff7ed', borderRadius: '6px', padding: '4px', fontSize: '14px' }}>📈</div>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#111', fontFamily: 'Inter, sans-serif' }}>+300 Responses</span>
                </div>

                {/* Table mockup */}
                <div style={{
                  background: 'white', border: '1px solid #f0f0f0',
                  borderRadius: '12px', overflow: 'hidden', marginTop: '16px',
                }}>
                  {/* Tab bar */}
                  <div style={{ display: 'flex', gap: '16px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#aaa' }}>🏠</span>
                    <span style={{ fontSize: '10px', color: '#aaa', fontFamily: 'Inter, sans-serif' }}>Harvest Form</span>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
                      {['Edit', 'Integrate', 'Share'].map(t => (
                        <span key={t} style={{ fontSize: '10px', color: '#aaa', fontFamily: 'Inter, sans-serif' }}>{t}</span>
                      ))}
                      <span style={{ fontSize: '10px', color: 'white', background: '#6366f1', borderRadius: '4px', padding: '1px 6px', fontFamily: 'Inter, sans-serif' }}>Results</span>
                    </div>
                  </div>

                  {/* Table rows */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} style={{
                      display: 'flex', gap: '12px', padding: '8px 12px',
                      alignItems: 'center',
                      background: i === 2 ? 'rgba(99,102,241,0.06)' : 'white',
                      border: i === 2 ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                      position: 'relative',
                    }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '2px', border: '1px solid #e5e7eb', flexShrink: 0 }} />
                      {[80, 120, 60, 100, 70].map((w, j) => (
                        <div key={j} style={{
                          background: i === 2 ? '#c7d2fe' : '#f0f0f0',
                          borderRadius: '4px', height: '8px', width: `${w}px`, flexShrink: 0,
                        }} />
                      ))}
                      {i === 2 && (
                        <div style={{
                          position: 'absolute', bottom: '-16px', left: '80px',
                          background: '#6366f1', color: 'white',
                          fontSize: '9px', padding: '2px 8px',
                          borderRadius: '6px', fontWeight: '600',
                          fontFamily: 'Inter, sans-serif', zIndex: 3,
                        }}>Whitney</div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
