import { useState, useEffect } from 'react';
import './styles/styles.css';
import Cursor       from './components/Cursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Certificates from './components/Certificates';
import Education    from './components/Education';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Cursor />
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
