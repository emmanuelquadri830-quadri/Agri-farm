'use client';

export default function Stats() {
  return (
    <section style={{ background: '#ffffff', padding: '64px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '64px' }}>

        {/* Left text */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            color: '#111',
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            fontFamily: 'Inter, sans-serif',
          }}>
            100,000+ organizations trust<br />Nexora for secure automation
          </h2>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
            <strong style={{ color: '#555' }}>Average rating of 4.8 out of 5</strong> from hundreds of reviews across G2 Business Reviews and Product Hunt.
          </p>
        </div>

        {/* Right rating cards */}
        <div style={{ display: 'flex', gap: '16px' }}>

          {/* Business Reviews card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #f0f0f0',
            borderRadius: '20px',
            padding: '28px 36px',
            textAlign: 'center',
            minWidth: '180px',
            boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#ea4335', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '800',
              }}>G</div>
              <span style={{ fontSize: '13px', color: '#555', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>Business reviews</span>
            </div>
            <div style={{ fontSize: '40px', fontWeight: '800', color: '#111', letterSpacing: '-0.03em', lineHeight: 1, fontFamily: 'Inter, sans-serif' }}>5/5</div>
            <div style={{ marginTop: '10px', display: 'flex', gap: '3px', justifyContent: 'center' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: '18px' }}>★</span>)}
            </div>
          </div>

          {/* Product Hunt card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #f0f0f0',
            borderRadius: '20px',
            padding: '28px 36px',
            textAlign: 'center',
            minWidth: '180px',
            boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#da552f', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '800',
              }}>P</div>
              <span style={{ fontSize: '13px', color: '#555', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>Product Hunt</span>
            </div>
            <div style={{ fontSize: '40px', fontWeight: '800', color: '#111', letterSpacing: '-0.03em', lineHeight: 1, fontFamily: 'Inter, sans-serif' }}>4.9/5</div>
            <div style={{ marginTop: '10px', display: 'flex', gap: '3px', justifyContent: 'center' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: '18px' }}>★</span>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
