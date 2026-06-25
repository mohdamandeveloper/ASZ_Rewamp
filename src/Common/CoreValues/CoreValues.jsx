import { useState } from 'react'
import BearingCard from './BearingCard';
import './CoreValues.scss'

const BEARINGS = [
  {
    code: 'N',
    deg: 0,
    accentVar: '--n-innovation',
    icon: 'innovation',
    title: 'Innovation',
    body: "We challenge conventional thinking at every turn. From AI-powered features to groundbreaking UX, we chase ideas no one else has tried — and ship them as products that lead the market.",
    tags: ['R&D first', 'Future-ready', 'Bold ideas']
  },
  {
    code: 'E',
    deg: 90,
    accentVar: '--e-collaboration',
    icon: 'collaboration',
    title: 'Collaboration',
    body: 'Great products are never built alone. We embed with your team, share knowledge in the open, and trust that the best outcomes come from diverse minds solving problems together.',
    tags: ['Transparent', 'Team-first', 'Co-create']
  },
  {
    code: 'S',
    deg: 180,
    accentVar: '--s-excellence',
    icon: 'excellence',
    title: 'Excellence',
    body: "We hold ourselves to the highest standard in everything: architecture, design, delivery, communication. Good enough is never good enough — we sweat the details so you don't have to.",
    tags: ['Zero compromise', 'High craft', 'On-time']
  },
  {
    code: 'W',
    deg: 270,
    accentVar: '--w-sustainability',
    icon: 'sustainability',
    title: 'Sustainability',
    body: "We build for the long run — in code, culture, and impact. From efficient architecture to equitable hiring, we make choices today that tomorrow's world will be glad we made.",
    tags: ['Green tech', 'Long-term', 'Responsible']
  }
]


export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? BEARINGS[activeIndex] : null;
  const glowColor = active ? `var(${active.accentVar})` : 'var(--brass-dim)';
  const glowOpacity = active ? 0.3 : 0.14;

  return (
    <section className="cv core_values">
      <div className="cv__backdrop"></div>
      <div className="cv__grid"></div>
      <div className="cv__ring cv__ring--a"></div>
      <div className="cv__ring cv__ring--b"></div>
      <div className="cv__noise"></div>

      <div className="cv__inner">
        <header className="cv-head">
          <p className="cv-head__eyebrow hero_badge"><span></span>Four bearings, one course</p>
          <h2 className="heading_title cv-head__title" style={{color: 'white'}}>
            Our <span>Core Values</span>
          </h2>
          <p className="cv-head__sub">
            Like a compass with four fixed points, these principles hold steady and set every course we
            chart — for our product, our partners, and our team.
          </p>
        </header>

        <div className="cv-layout">
          <div className='row'>
            <div className='col-md-4'>
              <div className="cv-grid-cards mb-4">
                {BEARINGS.map((b, i) => i == 0  ? (
                  <BearingCard
                    key={b.code}
                    bearing={b}
                    onActivate={() => setActiveIndex(i)}
                    onDeactivate={() => setActiveIndex(null)}
                  />
                ): '')}
                {BEARINGS.map((b, i) => i == 1  ? (
                  <BearingCard
                    key={b.code}
                    bearing={b}
                    onActivate={() => setActiveIndex(i)}
                    onDeactivate={() => setActiveIndex(null)}
                  />
                ): '')}
              </div>
            </div>
            <div className='col-md-4'>
              <aside className="cv-aside">
                <div className="compass">
                  <div
                    className="compass__glow"
                    style={{ '--glow-color': glowColor, '--glow-opacity': glowOpacity }}
                  ></div>
                  <img src='/images/asz/our_core_values.png' />
                </div>
              </aside>
            </div>
            <div className='col-md-4'>
              <div className="cv-grid-cards">
              {BEARINGS.map((b, i) => i == 2  ? (
                  <BearingCard
                    key={b.code}
                    bearing={b}
                    onActivate={() => setActiveIndex(i)}
                    onDeactivate={() => setActiveIndex(null)}
                  />
                ): '')}
                {BEARINGS.map((b, i) => i == 3  ? (
                  <BearingCard
                    key={b.code}
                    bearing={b}
                    onActivate={() => setActiveIndex(i)}
                    onDeactivate={() => setActiveIndex(null)}
                  />
                ): '')}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
