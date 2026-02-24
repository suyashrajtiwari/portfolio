import AnimatedSection from './AnimatedSection';

const CATS = [
  { title: 'Languages',       color: 'var(--accent)',  tags: ['C++','C','Embedded C','Assembly','Ladder Logic','Python'] },
  { title: 'Tools & Platforms',color: 'var(--accent2)', tags: ['ESP32','Arduino Uno','8051/AT89S52','Proteus','LogixPro','Twido Suite','MATLAB','VS Code'] },
  { title: 'Frameworks & IDEs',color: 'var(--accent3)', tags: ['Arduino IDE','ESP-IDF','Keil uVision','Progisp','Blynk IoT'] },
  { title: 'Soft Skills',      color: 'var(--accent)',  tags: ['Leadership','Communication','Team Work','Problem Solving','Adaptability'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem' }}></div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem' }}>
            Skills & <span style={{ color: 'var(--accent)' }}>Tools</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
          {CATS.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 100}>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)', padding: '1.8rem',
                position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s', height: '100%'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,200,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${cat.color},transparent)` }} />
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: cat.color, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>{cat.title}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.tags.map(t => (
                    <span key={t} style={{
                      background: 'rgba(0,255,200,0.05)', border: '1px solid rgba(0,255,200,0.15)',
                      color: 'var(--text)', padding: '0.3rem 0.7rem', fontSize: '0.75rem', fontFamily: 'var(--mono)'
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
