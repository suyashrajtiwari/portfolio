import AnimatedSection from './AnimatedSection';

const PROJECTS = [
  {
    num: '01', date: 'July 2025', color: 'var(--accent)',
    title: 'PLC-Based Tank Mixing Simulation',
    sub: 'LogixPro · Ladder Logic',
    points: [
      'Designed automated tank mixing using LogixPro PLC Simulator for controlled liquid mixing.',
      'Developed ladder logic with timers, latches & interlocks: filling → mixing → draining.',
      'Implemented safety interlocks to prevent overflow and coordinate valves/actuators.',
    ],
    tech: ['LogixPro', 'Ladder Logic', 'PLC Automation'],
  },
  {
    num: '02', date: 'May 2025', color: 'var(--accent2)',
    title: 'Voice-Controlled Home Automation',
    sub: '8051 · HC-05 Bluetooth · Assembly',
    points: [
      'Built home automation on AT89S52 microcontroller controlling appliances via voice.',
      'Integrated HC-05 Bluetooth module with smartphone app for wireless command transmission.',
      'Programmed device switching in Assembly — lights, fans — achieving low-cost automation.',
    ],
    tech: ['8051/AT89S52', 'HC-05 BT', 'Keil uVision', 'Assembly', 'Progisp'],
  },
  {
    num: '03', date: 'March 2025', color: 'var(--accent3)',
    title: 'Water Adulteration Detection System',
    sub: 'ESP32 · Machine Learning · IoT',
    points: [
      'Built low-cost water quality monitor using ESP32 with turbidity & TDS sensors.',
      'Integrated ML algorithms to classify water: safe, moderately polluted, or contaminated.',
      'Real-time alerts via Wi-Fi and Blynk IoT for remote smartphone monitoring.',
    ],
    tech: ['ESP32', 'Arduino IDE', 'Blynk IoT', 'Machine Learning', 'C'],
  },
  {
  num: '04',
  date: 'Nov 2025',
  color: 'var(--accent4)',
  title: 'Classroom Power Management System',
  sub: 'ESP32 · IoT · Automation',

  points: [
    'Designed and implemented an intelligent classroom power management system using ESP32 microcontroller.',
    'Integrated DHT22 sensor to monitor ambient temperature and automatically regulate fan speed.',
    'Utilized PIR sensor for occupancy detection to control lighting and fan operation for energy conservation.',
    'Developed an automated control logic to minimize power wastage by switching off appliances when the room is unoccupied.',
  ],

  tech: ['ESP32', 'DHT22', 'PIR Sensor', 'Arduino IDE', 'MicroPython', 'IoT'],
}
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 3rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          {/* <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>// 02 — work</div> */}
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '3rem' }}>
            Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PROJECTS.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 120}>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)', padding: '2rem',
                display: 'grid', gridTemplateColumns: '70px 1fr', gap: '1.5rem', alignItems: 'start',
                transition: 'all 0.3s', position: 'relative', overflow: 'hidden'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,200,0.4)'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: p.color, opacity: 0.8 }} />
                <div style={{ fontFamily: 'var(--mono)', fontSize: '3rem', fontWeight: 700, color: 'rgba(0,255,200,0.08)', lineHeight: 1 }}>{p.num}</div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: p.color, letterSpacing: '1px', marginBottom: '0.3rem' }}>{p.date}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>{p.title}</h3>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '1rem' }}>{p.sub}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                    {p.points.map((pt, j) => (
                      <li key={j} style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, paddingLeft: '1.2rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: p.color, fontFamily: 'var(--mono)' }}>→</span>{pt}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        background: 'rgba(255,77,109,0.08)', border: '1px solid rgba(255,77,109,0.25)',
                        color: 'var(--accent2)', padding: '0.2rem 0.6rem', fontSize: '0.68rem', fontFamily: 'var(--mono)'
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
