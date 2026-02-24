import AnimatedSection from './AnimatedSection';

const ITEMS = [
  { period: 'Aug 2023 – Present', degree: 'Bachelor of Technology', field: 'Electronics & Communication Engineering', school: 'Lovely Professional University', loc: 'Phagwara, Punjab', color: 'var(--accent)' },
  { period: 'Mar 2020 – May 2022', degree: 'Intermediate (Class XII)', field: 'Science Stream', school: 'Gurukul Academy', loc: 'Deoria, Uttar Pradesh', color: 'var(--accent2)' },
  { period: 'Mar 2019 – May 2020', degree: 'Matriculation (Class X)', field: 'Secondary Education', school: 'Divya Jyoti Public School', loc: 'Deoria, Uttar Pradesh', color: 'var(--accent3)' },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 3rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          {/* <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>// 04 — background</div> */}
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem' }}>
            Education <span style={{ color: 'var(--accent)' }}>Timeline</span>
          </h2>
        </AnimatedSection>

        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          <div style={{ position: 'absolute', left: '0.45rem', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
          {ITEMS.map((item, i) => (
            <AnimatedSection key={item.degree} delay={i * 150}>
              <div style={{ position: 'relative', marginBottom: '2.5rem', paddingLeft: '2rem' }}>
                <div style={{
                  position: 'absolute', left: '-2.1rem', top: '0.5rem', width: 14, height: 14,
                  background: item.color, borderRadius: '50%',
                  boxShadow: `0 0 16px ${item.color}`, animation: 'pulse 2s infinite'
                }} />
                <div style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${item.color}`, padding: '1.5rem', transition: 'all 0.3s'
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,200,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: item.color, letterSpacing: '1px', marginBottom: '0.4rem' }}>{item.period}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>{item.degree}</div>
                  <div style={{ color: 'var(--accent2)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>{item.field}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{item.school}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--muted)', marginTop: '0.3rem' }}>📍 {item.loc}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
