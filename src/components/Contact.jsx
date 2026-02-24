import { downloadCV } from '../assets/assets';
import AnimatedSection from './AnimatedSection';

const LINKS = [
  { icon: '✉', label: 'Email',    val: 'suyashrajtiwari@gmail.com',                  href: 'mailto:suyashrajtiwari@gmail.com' },
  { icon: '☎', label: 'Phone',    val: '+91 7458004346',                             href: 'tel:+917458004346' },
  { icon: 'in', label: 'LinkedIn', val: 'suyash-raj-tiwari-730ba0296', href: 'https://www.linkedin.com/in/suyash-raj-tiwari-730ba0296' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>// 05 — connect</div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem' }}>
            Let's <span style={{ color: 'var(--accent)' }}>Connect</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <AnimatedSection>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.92rem' }}>
              Open to internships, collaboration on embedded systems / IoT projects, and engineering opportunities. Let's build something great!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {LINKS.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text)',
                  textDecoration: 'none', padding: '1rem', background: 'var(--card)',
                  border: '1px solid var(--border)', transition: 'all 0.3s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
                >
                  <div style={{ width: 42, height: 42, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '1rem', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>{c.label}</div>
                    <div style={{ fontSize: '0.85rem', marginTop: '0.1rem' }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Download My CV</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                Full overview of education, skills, projects & certifications in one PDF.
              </p>
              <button onClick={downloadCV} style={{
                background: 'var(--accent)', color: 'var(--bg)', padding: '0.9rem 2rem',
                fontFamily: 'var(--mono)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px',
                border: 'none', cursor: 'pointer', width: '100%', textTransform: 'uppercase', transition: 'all 0.3s'
              }}
                onMouseEnter={e => e.target.style.background = 'var(--accent2)'}
                onMouseLeave={e => e.target.style.background = 'var(--accent)'}
              >↓ Download CV (PDF)</button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
