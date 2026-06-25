import React, { useEffect, useRef, useState } from "react";
import 'swiper/css';
import { Link, Links } from 'react-router-dom';
import './Service.scss';
import BearingCard from "../../../Common/CoreValues/BearingCard";


function hexPath(cx, cy, r) {
    return Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" L ").replace(/^/, "M ") + " Z";
}

const BEARINGS = [
    {
        code: 'N',
        deg: 0,
        accentVar: '--n-innovation',
        icon: 'innovation',
        title: 'Software Development',
        body: "We challenge conventional thinking at every turn. From AI-powered features to groundbreaking UX, we chase ideas no one else has tried — and ship them as products that lead the market.",
        tags: ['R&D first', 'Future-ready', 'Bold ideas']
    },
    {
        code: 'E',
        deg: 90,
        accentVar: '--e-collaboration',
        icon: 'collaboration',
        title: 'Web Development',
        body: 'Great products are never built alone. We embed with your team, share knowledge in the open, and trust that the best outcomes come from diverse minds solving problems together.',
        tags: ['Transparent', 'Team-first', 'Co-create']
    },
    {
        code: 'S',
        deg: 180,
        accentVar: '--s-excellence',
        icon: 'excellence',
        title: 'Mobile Development',
        body: "We hold ourselves to the highest standard in everything: architecture, design, delivery, communication. Good enough is never good enough — we sweat the details so you don't have to.",
        tags: ['Zero compromise', 'High craft', 'On-time']
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'UX/UI Design',
        body: "We build for the long run — in code, culture, and impact. From efficient architecture to equitable hiring, we make choices today that tomorrow's world will be glad we made.",
        tags: ['Green tech', 'Long-term', 'Responsible']
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'IT Consulting',
        body: "We build for the long run — in code, culture, and impact. From efficient architecture to equitable hiring, we make choices today that tomorrow's world will be glad we made.",
        tags: ['Green tech', 'Long-term', 'Responsible']
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'Data Analytics',
        body: "We build for the long run — in code, culture, and impact. From efficient architecture to equitable hiring, we make choices today that tomorrow's world will be glad we made.",
        tags: ['Green tech', 'Long-term', 'Responsible']
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'Cybersecurity Services',
        body: "We build for the long run — in code, culture, and impact. From efficient architecture to equitable hiring, we make choices today that tomorrow's world will be glad we made.",
        tags: ['Green tech', 'Long-term', 'Responsible']
    }
]


export default function Service() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const active = activeIndex !== null ? BEARINGS[activeIndex] : null;
    const glowColor = active ? `var(${active.accentVar})` : 'var(--brass-dim)';
    const glowOpacity = active ? 0.3 : 0.14;

    useEffect(() => {
        const panels = document.querySelectorAll('.panel');

        const handleClick = (panel) => {
            if (panel.classList.contains('active')) return;
            panels.forEach((p) => p.classList.remove('active'));
            panel.classList.add('active');
        };

        const listeners = [];
        panels.forEach((panel) => {
            const fn = () => handleClick(panel);
            panel.addEventListener('click', fn);
            listeners.push([panel, fn]);
        });

        return () => {
            listeners.forEach(([panel, fn]) => panel.removeEventListener('click', fn));
        };
    }, []);


    return (
        <>
            <div className="service_page">
                <section className="hero-section" ref={sectionRef} aria-label="ASZ Technologies hero banner">
                    <svg
                        className="bg-canvas"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <g>
                            {[
                                [8, 72, 9], [25, 10, 7], [85, 15, 8],
                                [95, 60, 6], [60, 90, 7.5], [45, 50, 5],
                            ].map(([cx, cy, r], i) => (
                                <path key={i} className="hex-shape" d={hexPath(cx, cy, r)} />
                            ))}
                        </g>
                    </svg>
                    <div className="hero-content">
                        <div className="hero-eyebrow">
                            <h6 className="hero_badge"><span></span>Our Services</h6>
                            <h1 className="heading_title mb-4">Technology Solutions <br /><span className="c_primary">That Drive Your Business Forward</span></h1>
                        </div>
                        <p className="hero-subtitle">
                            From idea to impact, we deliver end-to-end IT Services that empower businesses to innovate, optimize and grow in a digital-first world.
                        </p>
                    </div>
                </section>
                <section className="cv">
                    <div className="container">
                        <div className="cv__backdrop"></div>
                        <div className="cv__grid"></div>
                        <div className="cv__ring cv__ring--a"></div>
                        <div className="cv__ring cv__ring--b"></div>
                        <div className="cv__noise"></div>

                        <div className="cv__inner">
                            <header className="cv-head">
                                <p className="cv-head__eyebrow hero_badge"><span></span>OUR SERVICES</p>
                                <h2 className="heading_title cv-head__title" style={{ color: 'white' }}>
                                    Everything you need to <span>build and scale</span>
                                </h2>
                                <p className="cv-head__sub">
                                    Seven disciplines, one team. From first line of code to production rollout, ASZ Technologies covers the full stack — software, web, mobile, design, strategy, data, and security.
                                </p>
                            </header>

                            <div className="cv-layout">
                                <div className='row'>
                                    {BEARINGS.map((b, i) => (
                                        <div className={`col-md-4 ${i == 6  ? 'offset-md-4' : ''}`}>
                                            <div className="cv-grid-cards mb-4">
                                                <BearingCard
                                                    key={b.code}
                                                    bearing={b}
                                                    onActivate={() => setActiveIndex(i)}
                                                    onDeactivate={() => setActiveIndex(null)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}