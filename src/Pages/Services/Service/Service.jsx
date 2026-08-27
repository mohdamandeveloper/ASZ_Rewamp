import React, { useEffect } from "react";
import 'swiper/css';
import { Link } from 'react-router-dom';
import './Service.scss';
import BearingCard from "../../../Common/CoreValues/BearingCard";

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
        icon: 'collaboration',
        title: 'Testing & QA',
        body: "Ensure software quality with comprehensive testing services including functional, automation, performance, and security testing. We help deliver reliable applications with faster release cycles and fewer defects.",
        tags: ['Automation Testing', 'Performance QA', 'Bug-Free Delivery'],
        url: '/services/testing-qa'
    },
    {
        code: 'S',
        deg: 180,
        accentVar: '--s-excellence',
        icon: 'excellence',
        title: 'Mobile Development',
        body: "Develop intuitive and high-performance mobile applications for Android, iOS, and cross-platform environments. We create secure, scalable apps that deliver exceptional user experiences.",
        tags: ['Android & iOS', 'Cross-Platform', 'Native Performance'],
        url: '/services/mobile-app-development'
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'UX/UI Design',
        body: "Design intuitive, visually engaging, and user-centric digital experiences that enhance usability, strengthen your brand, and increase customer engagement across every platform.",
        tags: ['User Experience', 'Modern UI', 'Design Systems'],
        url: '/services/ux-ui-development'
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'IT Consulting',
        body: "Align technology with your business objectives through expert consulting. We provide strategic guidance, solution architecture, digital transformation planning, and technology optimization.",
        tags: ['Digital Strategy', 'Solution Architecture', 'Technology Consulting'],
        url: '/services/it-consulting'
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
        title: 'Data Analytics',
        body: "Transform business data into actionable insights with advanced analytics, interactive dashboards, and business intelligence solutions that enable smarter, data-driven decisions.",
        tags: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
        url: '/services/data-analytics'
    },
    {
        code: 'W',
        deg: 270,
        accentVar: '--w-sustainability',
        icon: 'sustainability',
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
                        <span class="hero_badge">Our Services</span>
                        <h1 class="heading_title services-hero__title">
                            Building digital <span >products</span>&nbsp;
                            that perform, platforms <span class="services-hero__title--muted">that scale</span>,
                            and AI <span class="services-hero__title--muted">that delivers real value</span>
                        </h1>

                        <p class="heading_subtitle services-hero__subtitle">
                            Your business doesn't need another isolated technology initiative. It needs
                            an engineering partner that connects strategy, systems, and execution — across
                            product design, platform engineering, and applied AI — to turn priorities
                            into measurable outcomes.
                        </p>

                        <div class="services-hero__actions">
                            <a href="#" class="btn-primary services-hero__cta">Talk To Our Experts</a>
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
                                                    <BearingCard
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