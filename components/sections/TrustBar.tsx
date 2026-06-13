'use client';

export default function TrustBar() {
  return (
    <section style={{
      background: '#ffffff',
      padding: '40px 0',
      overflow: 'hidden',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <p style={{
        textAlign: 'center',
        fontSize: '11px',
        fontWeight: '500',
        color: '#9ca3af',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '32px',
        fontFamily: 'Inter, sans-serif',
      }}>
        100,000+ organizations trust Nexora
      </p>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to right, #ffffff, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to left, #ffffff, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}/>

        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '72px', padding: '0 36px' }}>
              {[
                { name: 'Airbnb',       style: { fontFamily: 'Georgia, serif',         fontWeight: 700, fontSize: '22px', letterSpacing: '-0.02em' }},
                { name: 'Wayfair',      style: { fontFamily: 'Arial, sans-serif',       fontWeight: 800, fontSize: '20px', letterSpacing: '-0.01em' }},
                { name: 'Harvard',      style: { fontFamily: 'Times New Roman, serif',  fontWeight: 700, fontSize: '18px', letterSpacing: '0.02em'  }},
                { name: 'Bombas',       style: { fontFamily: 'Verdana, sans-serif',     fontWeight: 700, fontSize: '17px', letterSpacing: '0.01em'  }},
                { name: 'The Athletic', style: { fontFamily: 'Georgia, serif',          fontWeight: 900, fontSize: '16px', letterSpacing: '-0.02em' }},
                { name: 'GAP',          style: { fontFamily: 'Arial Black, sans-serif', fontWeight: 900, fontSize: '22px', letterSpacing: '0.08em'  }},
                { name: 'Berkeley',     style: { fontFamily: 'Palatino, serif',         fontWeight: 600, fontSize: '20px', letterSpacing: '-0.01em' }},
                { name: 'Notion',       style: { fontFamily: 'Inter, sans-serif',       fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }},
                { name: 'Vercel',       style: { fontFamily: 'Inter, sans-serif',       fontWeight: 800, fontSize: '20px', letterSpacing: '-0.03em' }},
                { name: 'Linear',       style: { fontFamily: 'Inter, sans-serif',       fontWeight: 600, fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' as const }},
              ].map(brand => (
                <span key={brand.name} style={{
                  ...brand.style,
                  color: '#d1d5db',
                  whiteSpace: 'nowrap' as const,
                  userSelect: 'none' as const,
                }}>
                  {brand.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
