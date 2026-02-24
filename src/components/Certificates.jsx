

import { useState } from 'react';
import { ASSETS } from '../assets/assets';
import AnimatedSection from './AnimatedSection';

const IMAGE_CERTS = [
  { src: 'plc',      name: 'AutomateX: Mastering PLCs',    meta: 'Industrial Automation · Aug 2025' },
  { src: 'hackathon',name: 'SEEE LPU Hackathon',           meta: 'Participation · Apr 2025' },
  { src: 'cognitia', name: "CS107: C++ Programming (Saylor Academy)",   meta: 'Certificate of Completion' },
];

const TEXT_CERTS = [
  { name: 'Cognitia 25 — 1st Position', date: 'Meshmerize Challenge · Mar 2025' },
  { name: 'Electronics from Soup to Nuts',           date: 'Apr 2024' },
  { name: 'Microcontroller Embedded C for Beginners',date: 'Nov 2023' },
  { name: 'Python Scalar Certificate',               date: 'Dec 2023' },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certs" style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>// 03 — credentials</div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem' }}>
            Certificates & <span style={{ color: 'var(--accent)' }}>Achievements</span>
          </h2>
        </AnimatedSection>

        {/* Image cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {IMAGE_CERTS.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 100}>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)', overflow: 'hidden',
                cursor: 'pointer', transition: 'all 0.3s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,255,200,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                onClick={() => setLightbox(ASSETS[c.src])}
              >
                <img src={ASSETS[c.src]} alt={c.name} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', filter: 'grayscale(25%)', transition: 'filter 0.3s' }}
                  onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'}
                  onMouseLeave={e => e.target.style.filter = 'grayscale(25%)'}
                />
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.3rem' }}>{c.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '1px' }}>{c.meta}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Text list */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1rem' }}>
          {TEXT_CERTS.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 80}>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent2)',
                padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'border-color 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,200,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ width: 36, height: 36, border: '1px solid var(--accent2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent2)', flexShrink: 0 }}>◆</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{c.date}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.94)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'pointer'
        }}>
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none',
            color: 'var(--accent)', fontSize: '2rem', cursor: 'pointer', lineHeight: 1
          }}>✕</button>
          <img src={lightbox} alt="cert" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', border: '1px solid var(--border)' }} />
        </div>
      )}
    </section>
  );
}
