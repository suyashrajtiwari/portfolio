import { useState, useEffect } from 'react';
import { ASSETS, downloadCV } from '../assets/assets';

const WORDS = ['Embedded Systems', 'IoT Developer', 'PLC Automation', 'ECE Engineer'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [wIdx, setWIdx] = useState(0);

  useEffect(() => {
    let i = 0, deleting = false;
    let timer;
    const tick = () => {
      const word = WORDS[wIdx];
      if (!deleting && i <= word.length) { setTyped(word.slice(0, i)); i++; }
      else if (deleting && i >= 0)       { setTyped(word.slice(0, i)); i--; }
      if (i > word.length)  { deleting = true; timer = setTimeout(tick, 1800); return; }
      if (deleting && i < 0) { deleting = false; i = 0; setWIdx(p => (p + 1) % WORDS.length); return; }
      timer = setTimeout(tick, deleting ? 60 : 90);
    };
    tick();
    return () => clearTimeout(timer);
  }, [wIdx]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '6rem 3rem 3rem', position: 'relative', overflow: 'hidden'
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,200,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,200,0.025) 1px,transparent 1px)',
        backgroundSize: '50px 50px', pointerEvents: 'none'
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%', width: 400, height: 400,
        background: 'radial-gradient(circle,rgba(0,255,200,0.07) 0%,transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: 1100, margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center'
      }}>
        {/* Text */}
        <div style={{ animation: 'fadeUp 0.8s ease both' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent2)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          B.Tech ECE · LPU · 2023–Present
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '0.8rem' }}>
            Suyash Raj<br />
            <span style={{ color: 'var(--accent)' }}>Tiwari</span>
          </h1>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '1rem', color: 'var(--muted)', marginBottom: '2rem', minHeight: '1.5rem' }}>
            <span style={{ color: 'var(--accent3)' }}>&gt; </span>
            {typed}
            <span style={{ animation: 'blink 1s infinite' }}>_</span>
          </div>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, maxWidth: 480, marginBottom: '2.5rem', fontSize: '0.92rem' }}>
            Passionate about building hardware-software bridges — PLC automation, embedded C on 8051, ESP32 IoT systems. Always building, always learning.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" style={{
              background: 'var(--accent)', color: 'var(--bg)', padding: '0.8rem 2rem',
              fontFamily: 'var(--mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px',
              textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.3s', display: 'inline-block'
            }}
              onMouseEnter={e => e.target.style.background = 'var(--accent2)'}
              onMouseLeave={e => e.target.style.background = 'var(--accent)'}
            >View Projects</a>
            <button onClick={downloadCV} style={{
              background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)',
              padding: '0.8rem 2rem', fontFamily: 'var(--mono)', fontSize: '0.78rem', letterSpacing: '1px',
              cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s'
            }}
              onMouseEnter={e => { e.target.style.background = 'rgba(0,255,200,0.1)'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; }}
            >↓ Download CV</button>
          </div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            {[['3+', 'Projects'], ['7+', 'Certificates'], ['2+', 'Years']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)' }}>{n}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div style={{ position: 'relative', animation: 'fadeUp 0.8s ease 0.2s both' }}>
          <div style={{ position: 'absolute', inset: -16, border: '1px solid rgba(0,255,200,0.2)', transform: 'rotate(3deg)' }} />
          <div style={{ position: 'absolute', inset: -8, border: '1px solid rgba(255,77,109,0.15)', transform: 'rotate(-2deg)' }} />
          <img src={ASSETS.profile} alt="Suyash" style={{
            width: 260, height: 320, objectFit: 'cover', objectPosition: 'top',
            display: 'block', filter: 'grayscale(15%)', border: '2px solid var(--accent)', position: 'relative'
          }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--accent)', animation: 'scan 3s linear infinite', opacity: 0.6 }} />
        </div>
      </div>
    </section>
  );
}
