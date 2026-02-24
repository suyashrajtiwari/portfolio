import { downloadCV } from '../assets/assets';

const links = ['home', 'skills', 'projects', 'certs', 'education', 'contact'];

export default function Navbar({ active, setActive }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 3rem',
      background: 'rgba(5,5,8,0.85)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '1rem', letterSpacing: '3px' }}>
        SRT_
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l} href={`#${l}`} onClick={() => setActive(l)} style={{
            color: active === l ? 'var(--accent)' : 'var(--muted)',
            textDecoration: 'none', fontFamily: 'var(--mono)',
            fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase',
            transition: 'color 0.3s',
            borderBottom: active === l ? '1px solid var(--accent)' : 'none',
            paddingBottom: '2px'
          }}>
            {l}
          </a>
        ))}

        <button onClick={downloadCV} style={{
          background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)',
          padding: '0.4rem 1.2rem', fontFamily: 'var(--mono)', fontSize: '0.68rem',
          cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', transition: 'all 0.3s'
        }}
          onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
        >
          CV ↓
        </button>
      </div>
    </nav>
  );
}
