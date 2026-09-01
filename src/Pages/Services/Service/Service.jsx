import React, { useEffect, useState } from "react";
import 'swiper/css';
import { Link } from 'react-router-dom';
import './Service.scss';
import ServiceBearingCard from "./ServiceBearingCard/ServiceBearingCard";

// ===== Continuous typewriter heading (types, pauses, deletes, repeats forever) =====
// Mirrors the TypewriterHeading used on the About Us hero — same timing/behavior,
// extended here with an optional `breakAfter` flag so the two-line title keeps its <br />.
const SERVICES_TITLE_SEGMENTS = [
    { text: "Six Disciplines." },
    // { text: "Platforms that scale. AI that delivers." },
];

const TypewriterHeading = ({
    segments,
    className,
    typingSpeed = 42,
    deletingSpeed = 22,
    pauseAfterTyping = 2200,
    pauseAfterDeleting = 500,
}) => {
    const fullText = segments.map((s) => s.text).join(" ");
    const totalLength = segments.reduce((sum, s) => sum + s.text.length, 0);
    const [charCount, setCharCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (isDeleting) {
            if (charCount > 0) {
                timeout = setTimeout(() => setCharCount((c) => c - 1), deletingSpeed);
            } else {
                timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleting);
            }
        } else {
            if (charCount < totalLength) {
                timeout = setTimeout(() => setCharCount((c) => c + 1), typingSpeed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
            }
        }

        return () => clearTimeout(timeout);
    }, [charCount, isDeleting, totalLength, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting]);

    let remaining = charCount;
    const rendered = segments.map((seg, i) => {
        const shown = Math.max(0, Math.min(seg.text.length, remaining));
        remaining -= seg.text.length;
        return (
            <React.Fragment key={i}>
                <span className={seg.className}>{seg.text.slice(0, shown)}</span>
                {seg.breakAfter && <br />}
            </React.Fragment>
        );
    });

    return (
        <h1 className={className} aria-label={fullText}>
            <span aria-hidden="true">
                {rendered}
                <span className="typewriter-cursor" />
            </span>
        </h1>
    );
};

const BEARINGS = [
    {
        code: 'N',
        deg: 0,
        accentVar: '--n-innovation',
        icon: 'innovation',
        title: 'Software Development',
        body: "Build scalable, secure, and high-performance software solutions tailored to your business goals. We deliver custom web, desktop, and enterprise applications using modern technologies and agile development practices.",
        tags: ['Custom Software', 'Scalable Solutions', 'Agile Development'],
        url: '/services/custom-software-development'
    },
    {
        code: 'E',
        deg: 90,
        accentVar: '--e-collaboration',
        icon: 'testing',
        title: 'Testing & QA',
        body: "Ensure software quality with comprehensive testing services including functional, automation, performance, and security testing. We help deliver reliable applications with faster release cycles and fewer defects.",
        tags: ['Automation Testing', 'Performance QA', 'Bug-Free Delivery'],
        url: '/services/testing-qa'
    },
    {
        code: 'S',
        deg: 180,
        accentVar: '--s-excellence',
        icon: 'mobile',
        title: 'Mobile Development',
        body: "Develop intuitive and high-performance mobile applications for Android, iOS, and cross-platform environments. We create secure, scalable apps that deliver exceptional user experiences.",
        tags: ['Android & iOS', 'Cross-Platform', 'Native Performance'],
        url: '/services/mobile-app-development'
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'uxui',
        title: 'UX/UI Design',
        body: "Design intuitive, visually engaging, and user-centric digital experiences that enhance usability, strengthen your brand, and increase customer engagement across every platform.",
        tags: ['User Experience', 'Modern UI', 'Design Systems'],
        url: '/services/ux-ui-development'
    },
    {
        code: 'IT',
        deg: 225,
        accentVar: '--it-consulting',
        icon: 'consulting',
        title: 'IT Consulting',
        body: "Align technology with your business objectives through expert consulting. We provide strategic guidance, solution architecture, digital transformation planning, and technology optimization.",
        tags: ['Digital Strategy', 'Solution Architecture', 'Technology Consulting'],
        url: '/services/it-consulting'
    },
    {
        code: 'DA',
        deg: 45,
        accentVar: '--data-analytics',
        icon: 'analytics',
        title: 'Data Analytics',
        body: "Transform business data into actionable insights with advanced analytics, interactive dashboards, and business intelligence solutions that enable smarter, data-driven decisions.",
        tags: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
        url: '/services/data-analytics'
    },
    {
        code: 'CS',
        deg: 135,
        accentVar: '--cybersecurity',
        icon: 'security',
        title: 'Cybersecurity Services',
        body: "Protect your business with comprehensive cybersecurity solutions including threat detection, vulnerability assessments, cloud security, compliance, and proactive risk management.",
        tags: ['Threat Protection', 'Cloud Security', 'Compliance'],
        url: '/services/cybersecurity-services'
    }
]

export default function Service() {
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
                <section class="services-hero">
                    <div class="services-hero__media" aria-hidden="true">
                        <img
                            class="services-hero__image"
                            src="/images/about_hero.png"
                            alt=""
                        />
                        <div class="services-hero__overlay"></div>
                    </div>
                    <div class="services-hero__inner container">
                        <span class="hero_badge hero-anim hero-anim--1">Our Services</span>
                        <TypewriterHeading
                            segments={SERVICES_TITLE_SEGMENTS}
                            className="heading_title services-hero__title hero-anim hero-anim--2 mb-0"
                        />
                        <h1 className="heading_title services-hero__title mb-4 hero-anim hero-anim--3">One Delivery Partner.</h1>
                        <p class="heading_subtitle services-hero__subtitle hero-anim hero-anim--4">
                            From IT strategy and cloud migration to data engineering, enterprise platforms, and emerging tech like AI and blockchain — we cover every layer of the stack, so you get one accountable partner instead of five different vendors.
                        </p>

                        <div className="hero-actions mt-4 hero-anim hero-anim--4">
                            <Link to="services" className="btn-primary">
                                Talk To Our Experts <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="cv">
                    <div className="grid_overlay"></div>
                    <div className="container">
                        <div className="cv__backdrop"></div>
                        <div className="cv__grid"></div>
                        <div className="cv__ring cv__ring--a"></div>
                        <div className="cv__ring cv__ring--b"></div>
                        <div className="cv__noise"></div>

                        <div className="cv__inner">
                            <div className="cv-layout">
                                <div className='row'>
                                    {BEARINGS.map((b, i) => (
                                        <div className={`col-md-6 col-lg-4 ${i == 6 ? 'offset-md-4' : ''}`}>
                                            <Link to={b.url}>
                                                <div className="cv-grid-cards mb-4" style={{ cursor: 'pointer' }}>
                                                    <ServiceBearingCard
                                                        key={b.code}
                                                        bearing={b}
                                                        onActivate={() => setActiveIndex(i)}
                                                        onDeactivate={() => setActiveIndex(null)}
                                                        lin
                                                    />
                                                </div>
                                            </Link>
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