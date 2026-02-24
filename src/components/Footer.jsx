export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem', borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'var(--bg)'
    }}>
      <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>© 2025 Suyash Raj Tiwari</p>
      <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)' }}>ECE · LPU · Embedded Systems</p>
    </footer>
  );
}
