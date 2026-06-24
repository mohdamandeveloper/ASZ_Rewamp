import React from 'react';
import './OnboardingSteps.scss';

const steps = [
  { n: '01', title: 'Discovery Call', desc: 'We map your use case, set integration requirements, and scope the onboarding plan.' },
  { n: '02', title: 'Choose Your Product', desc: 'Select from our catalogue or request a white-label variant scoped to your brand.' },
  { n: '03', title: 'Configure & Customize', desc: 'We set up your environment, connect your apps, and apply your branding guidelines.' },
  { n: '04', title: 'Deploy to Production', desc: 'One-click cloud deploy puts your tenant live without manual setup or downtime.' },
  { n: '05', title: 'Ongoing Support', desc: 'Live dedicated support keeps you ahead of feature drops and edge cases, always.' },
];

export default function OnboardingSteps() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head">
          <div className="hero_badge"><span></span> How It Works</div>
          <h2 className='heading_title' style={{color: 'white'}}>From Sign-Up to <span>Live in 5 Steps</span></h2>
          <p className='heading_subtitle' >A repeatable process we've run over 400 times — no surprises.</p>
        </div>

        <div className="process__timeline">
          <div className="process__line" />
          {steps.map((s) => (
            <div className="process__step" key={s.n}>
              <div className="process__marker">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
