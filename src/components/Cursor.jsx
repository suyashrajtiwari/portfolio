import { useState, useEffect } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    const click = () => { setClicked(true); setTimeout(() => setClicked(false), 300); };
    window.addEventListener('mousemove', move);
    window.addEventListener('click', click);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('click', click); };
  }, []);

  return (
    <div style={{
      position: 'fixed', left: pos.x - 6, top: pos.y - 6,
      width: 12, height: 12, background: 'var(--accent)', borderRadius: '50%',
      pointerEvents: 'none', zIndex: 9999,
      transform: clicked ? 'scale(3)' : 'scale(1)',
      opacity: clicked ? 0.5 : 0.8,
      transition: 'transform 0.1s',
      mixBlendMode: 'difference'
    }} />
  );
}
