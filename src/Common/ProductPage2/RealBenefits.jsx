import { benefitImages } from '../../data/images';
import './RealBenefits.scss';

const benefits = [
  { stat: '3x', label: 'Ship Faster Without Sacrificing Quality', desc: 'Our products come pre-tested, pre-documented, and pre-integrated with the tooling your teams already use — cutting typical deployment timelines from months to days, without cutting corners on reliability or compliance.', proof: '6x faster deployment vs custom builds from scratch' },
  { stat: '100%', label: 'Own the Product, Not Just the License', desc: 'Every product we deliver is fully source-available to your team — no black-box AI, no hidden vendor lock-in, and full source access for customers who need it. Fork it, extend it, or hand it to your own team. It\'s yours.', proof: '100% source access for all customers' },
  { stat: '10k+', label: 'Scale Without Re-Architecting', desc: 'Every product is built on multi-tenant, cloud-native architecture from the start, so scaling you can go from 10 to 10,000 users without a rewrite, a migration, or a call to us in the middle of the night.', proof: 'Proven at 90,000+ concurrent users' },
];

export default function RealBenefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-head align-left">
          <span className="hero_badge"><span></span> Why It Matters</span>
          <h2 className='heading_title' style={{color: 'white'}}>Real Benefits, <span className="accent">Not Just <br />Features</span></h2>
          <p className='heading_subtitle' style={{margin: '0 0 38px 0'}}>The outcomes our products consistently deliver for the teams that use them.</p>
        </div>

        <div className="benefits__rows">
          {benefits.map((b, i) => (
            <div className="benefits__row" key={b.label}>
              <div className="benefits__stat-col">
                <span className="benefits__num">0{i + 1}</span>
                <span className="benefits__big-stat">{b.stat}</span>
              </div>
              <div className="benefits__copy-col">
                <h3>{b.label}</h3>
                <p>{b.desc}</p>
                <div className="benefits__proof">{b.proof}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
