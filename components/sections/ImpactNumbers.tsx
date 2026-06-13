'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuZap, LuUsers, LuGlobe, LuShieldCheck, LuClock, LuStar, LuPuzzle } from 'react-icons/lu';

const stats = [
  { Icon: LuZap,         value: '2.4M+',  label: 'Tasks Automated' },
  { Icon: LuUsers,       value: '50,000+', label: 'Active Teams' },
  { Icon: LuGlobe,       value: '180+',   label: 'Countries Served' },
  { Icon: LuShieldCheck, value: '99.9%',  label: 'Uptime Guarantee' },
  { Icon: LuClock,       value: '12M+',   label: 'Hours Saved' },
  { Icon: LuStar,        value: '4.9/5',  label: 'Average Rating' },
  { Icon: LuPuzzle,      value: '320+',   label: 'Integrations' },
];

const sdgs = [
  { num: 1,  label: 'NO POVERTY',       color: '#E5243B' },
  { num: 2,  label: 'ZERO HUNGER',      color: '#DDA63A' },
  { num: 3,  label: 'GOOD HEALTH',      color: '#4C9F38' },
  { num: 5,  label: 'GENDER EQUALITY',  color: '#FF3A21' },
  { num: 13, label: 'CLIMATE ACTION',   color: '#3F7E44' },
  { num: 14, label: 'LIFE BELOW WATER', color: '#0A97D9' },
];

export default function ImpactNumbers() {
  return (
    <section style={{
      background: 'linear-gradient(to bottom, #ffffff 0%, #eef1f7 18%, #f4f6fb 60%, #e8ecf5 100%)',
      padding: '0 60px 72px 60px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}>

          {/* ── Left: heading + stats + SDG ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '40px',
                fontWeight: '800',
                color: '#0f172a',
                letterSpacing: '-0.03em',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.1',
                marginBottom: '12px',
              }}
            >
              Trusted by teams worldwide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: '16px',
                color: '#64748b',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6',
                marginBottom: '40px',
                maxWidth: '480px',
              }}
            >
              From a handful of early adopters to a global platform powering automation
              for teams of every size.
            </motion.p>

            {/* Stats grid — vertical stack per item: icon → number → label */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              rowGap: '40px',
              columnGap: '24px',
              marginBottom: '48px',
            }}>
              {stats.map(({ Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  style={i === stats.length - 1 ? { gridColumn: '1 / -1' } : undefined}
                >
                  {/* Icon — small, above number */}
                  <div style={{ marginBottom: '6px', opacity: 0.8 }}>
                    <Icon size={20} color="#16a34a" />
                  </div>
                  {/* Number — focal point */}
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1',
                    marginBottom: '5px',
                  }}>
                    {value}
                  </div>
                  {/* Label */}
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#64748b',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SDG Targets */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#374151',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '12px',
              }}>
                SDG Targets
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {sdgs.map(({ num, label, color }) => (
                  <div
                    key={num}
                    style={{
                      background: color,
                      width: '60px',
                      height: '60px',
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px 4px',
                      flexShrink: 0,
                    }}
                  >
                    <span style={{
                      fontSize: '20px',
                      fontWeight: '900',
                      color: 'white',
                      lineHeight: '1',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      {num}
                    </span>
                    <span style={{
                      fontSize: '7px',
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: '1.2',
                      marginTop: '3px',
                      fontFamily: 'Inter, sans-serif',
                      textTransform: 'uppercase',
                    }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: globe ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{
                width: '540px',
                height: '540px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 30px 80px rgba(40,60,90,0.20), 0 12px 30px rgba(40,60,90,0.12)',
              }}>
                <Image
                  src="/images/thriveagric_world_map.svg"
                  alt="Global reach"
                  width={580}
                  height={580}
                  style={{
                    display: 'block',
                    width: '580px',
                    height: '580px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
              </div>
              {/* 3D sphere highlight */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, transparent 45%)',
                pointerEvents: 'none',
              }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
