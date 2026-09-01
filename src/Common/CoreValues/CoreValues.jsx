import { useState } from 'react'
import BearingCard from './BearingCard';
import './CoreValues.scss'

const BEARINGS = [
  {
    code: 'N',
    deg: 0,
    accentVar: '--n--innovation',
    icon: 'innovation',
    title: 'Innovation',
    pos: { top: '16%', left: '50%' },
    body: "We challenge conventional thinking at every turn. From AI-powered features to groundbreaking UX, we chase ideas no one else has tried — and ship them as products that lead the market.",
    tags: ['R&D first', 'Future-ready', 'Bold ideas']
  },
  {
    code: 'E',
    deg: 90,
    accentVar: '--e--collaboration',
    icon: 'collaboration',
    title: 'Collaboration',
    pos: { top: '52%', left: '14%' },
    body: ' We work hand-in-hand with our clients, not around them. Every engagement starts with listening — understanding what actually moves the needle for your business — before a single line of code gets written.',
    tags: ['Transparent', 'Team-first', 'Co-create']
  },
  {
    code: 'S',
    deg: 180,
    accentVar: '--s--excellence',
    icon: 'excellence',
    title: 'Excellence',
    pos: { top: '52%', left: '87%' },
    body: "We hold ourselves to the highest standard in everything: architecture, design, delivery, communication. Good enough is never good enough — we sweat the details so you don't have to.",
    tags: ['Zero compromise', 'High craft', 'On-time']
  },
  {
    code: 'W',
    deg: 270,
    accentVar: '--w--sustainability',
    icon: 'sustainability',
    title: 'Sustainability',
    pos: { top: '86%', left: '50%' },
    body: "We build technology that reduces waste, not just cost. Our own products, like 1Glance's paperless document processing, are engineered to cut material use and carbon footprint alongside operational overhead.",
    tags: ['Green tech', 'Long-term', 'Responsible']
  }
]


export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="cv core_values">
      <div className="cv__backdrop"></div>
      <div className="cv__grid"></div>
      <div className="cv__ring cv__ring--a"></div>
      <div className="cv__ring cv__ring--b"></div>
      <div className="cv__noise"></div>

      <div className="cv__inner container">
        <header className="cv-head">
          <p className="cv-head__eyebrow hero_badge"><span></span>Our Core Values</p>
          <h2 className="heading_title cv-head__title" style={{color: 'white'}}>
            <span>Values That </span> Align Us
          </h2>
          <p className="cv-head__sub">
            Four principles that stay constant no matter what we're building or who we're building it for — for our clients, our products, and our own team.
          </p>
        </header>

        <div className="cv-layout">
          <div className='row'>
            <div className='col-md-4'>
              <div className="cv-grid-cards">
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
                  {BEARINGS.map((b, i) => (
                    <div
                      key={b.code}
                      className={`compass__spot${activeIndex === i ? ' compass__spot--active' : ''}`}
                      style={{
                        top: b.pos.top,
                        left: b.pos.left,
                        '--spot-color': `var(${b.accentVar})`,
                      }}
                    ></div>
                  ))}
                  <img src='/images/asz/our_core_values3.png' />
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