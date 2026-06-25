import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import './AboutUs.scss';
import AccordionSection from "../../Common/AccordionSection/AccordionSection";
import FAQSection from "../../Common/FaqSection/FaqSection";
import CoreValues from "../../Common/CoreValues/CoreValues";

function hexPath(cx, cy, r) {
    return Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" L ").replace(/^/, "M ") + " Z";
}

const statsData = [
    { id: 1, target: 12, suffix: "+", label: "Years of Experience" },
    { id: 2, target: 2000, suffix: "+", label: "Products Delivered" },
    { id: 3, target: 50, suffix: "+", label: "Countries Served" },
    { id: 4, target: 500, suffix: "+", label: "Tech Enthusiasts" },
];

const cardsData = [
    {
        id: 1,
        title: "Human Centric",
        description:
            "We work hand-in-hand with you to ensure clear communication and collaboration.",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 6L38 16L22 26L6 16L22 6Z" fill="rgb(255,107,53)" />
                <path
                    d="M22 26L38 16V24L22 34L6 24V16L22 26Z"
                    fill="rgba(255,107,53,0.55)"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Exceptional Expertise",
        description:
            "Our seasoned team brings top-tier innovation and best-in-class development methodologies.",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 6L38 36H6L22 6Z" fill="rgb(255,107,53)" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "End-to-End Support",
        description:
            "From concept to launch and beyond, ASZ provides continuous maintenance support.",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="16" cy="22" r="11" fill="rgb(255,107,53)" />
                <path
                    d="M22 22C22 15.9249 26.9249 11 33 11C33 17.0751 28.0751 22 22 22Z"
                    fill="rgba(255,107,53,0.55)"
                />
                <path
                    d="M22 22C22 28.0751 26.9249 33 33 33C33 26.9249 28.0751 22 22 22Z"
                    fill="rgba(255,107,53,0.85)"
                />
            </svg>
        ),
    },
];

// ===== Count-up stat =====
const Counter = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const stepTime = Math.max(Math.floor(duration / target), 16);
                    const increment = Math.ceil(target / (duration / stepTime));

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            start = target;
                            clearInterval(timer);
                        }
                        setCount(start);
                    }, stepTime);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <h3 ref={ref} className="who-are-we__stat-number">
            {count}
            {suffix}
        </h3>
    );
};

// ===== Floating particle background =====
const ParticleLayer = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        let animationId;
        let width, height;

        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        const createParticles = () => {
            particles = Array.from({ length: 50 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 1.8 + 0.6,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.5 + 0.15,
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 107, 53, ${p.opacity})`;
                ctx.fill();
            });
            animationId = requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();

        const handleResize = () => {
            resize();
            createParticles();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="who-are-we__particles" />;
};

const partners = [
    { text: 'Client1', src: '/images/asz/client-1.png', type: 'text' },
    { text: 'Client2', src: '/images/asz/client-2.png', type: 'text' },
    { name: 'Client3', src: '/images/asz/client-3.png', type: 'img' },
    { text: 'Client4', src: '/images/asz/client-4.png', type: 'text' },
    { text: 'Client5', src: '/images/asz/client-5.png', type: 'text' },
    { text: 'Client6', src: '/images/asz/client-6.png', type: 'text' },
    { text: 'Client7', src: '/images/asz/client-7.png', type: 'text' },
    { text: 'Client8', src: '/images/asz/client-8.png', type: 'text' },
    { text: 'Client9', src: '/images/asz/client-9.png', type: 'text' },
    { text: 'Client10', src: '/images/asz/client-10.png', type: 'text' },
    { text: 'Client11', src: '/images/asz/client-11.png', type: 'text' },
    { text: 'Client12', src: '/images/asz/client-12.png', type: 'text' },
    { text: 'Client13', src: '/images/asz/client-13.png', type: 'text' },
    { text: 'Client14', src: '/images/asz/client-14.png', type: 'text' },
    { text: 'Client15', src: '/images/asz/client-15.png', type: 'text' },
    { text: 'Client16', src: '/images/asz/client-16.png', type: 'text' },
];

export default function AboutUs() {
    const sectionRef = useRef(null);

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
            <div className="about_us">
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
                            <h6 className="hero_badge"><span></span>About ASZ Technologies</h6>
                            <h1 className="heading_title mb-4">Engineering Beyond Code <br /><span className="c_primary">Building Digital Systems</span> Services</h1>
                        </div>
                        <p className="hero-subtitle">
                            We Design, Engineer and scale Mission-Critical Enterprise solutions powered by AI,
                            Blockchain and Cloud technologies — helping businesses achieve resilient, lasting growth.
                        </p>

                        <div className="hero-actions mt-4">
                            <Link to="services" className="btn-primary">
                                Explore Services <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>
                <style>{`
                        @keyframes pulseDot {
                        0%,100% { opacity:0.2; transform:scale(1); }
                        50%      { opacity:0.75; transform:scale(1.5); }
                        }
                        @keyframes floatUp {
                        0%,100% { transform:translateY(0) rotate(0deg); }
                        33%      { transform:translateY(-10px) rotate(0.8deg); }
                        66%      { transform:translateY(-4px) rotate(-0.4deg); }
                        }
                        @keyframes floatDown {
                        0%,100% { transform:translateY(0); }
                        50%      { transform:translateY(12px); }
                        }
                        @keyframes driftRight {
                        0%   { transform:translateX(0) translateY(0); }
                        50%  { transform:translateX(8px) translateY(-6px); }
                        100% { transform:translateX(0) translateY(0); }
                        }
                        @keyframes ringExpand {
                        0%   { transform:scale(0.7); opacity:0; }
                        60%  { opacity:0.5; }
                        100% { transform:scale(1.6); opacity:0; }
                        }
                        @keyframes accentFloat {
                        0%,100% { transform:translateX(-50%) translateY(0); }
                        50%      { transform:translateX(-50%) translateY(-6px); }
                        }
                    `}</style>
                <section className="who-are-we">
                    {/* Background image + overlay */}
                    <div className="who-are-we__bg-image"></div>
                    <div className="who-are-we__overlay"></div>

                    {/* Animated particles */}
                    <ParticleLayer />

                    <div className="who-are-we__container">
                        {/* Top row: heading + image + stats */}
                        <div className="who-are-we__top">
                            <div className="who-are-we__intro">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="who-are-we__image-wrap">
                                            <img
                                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900"
                                                alt="ASZ team collaborating"
                                                className="who-are-we__image"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h2 className="heading_title who-are-we__title" style={{color: 'white'}}><span>Who</span> We Are</h2>
                                        <p className="who-are-we__desc">
                                            ASZ Technologies specializes in Digital Transformation Services that includes Sourcing and Advisory, Market Intelligence, Industry 4.0, Data Science and Enterprise Data Management. We work in a collaborative way with our customers by implementing business requirements from strategy to launch as quickly and effectively as possible.
                                        </p>
                                        <p className="who-are-we__desc">Our diverse teams of experts combine innovative thinking and breakthrough technologies & enable our clients adapt and transform, and together we achieve enduring results.</p>
                                        <div className="who-are-we__stats">
                                            {statsData.map((stat) => (
                                                <div className="who-are-we__stat" key={stat.id}>
                                                    <Counter target={stat.target} suffix={stat.suffix} />
                                                    <p className="who-are-we__stat-label">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Bottom row: feature cards */}
                        <div className="who-are-we__cards">
                            {cardsData.map((card) => (
                                <div className="who-are-we__card" key={card.id}>
                                    <div className="who-are-we__card-icon">{card.icon}</div>
                                    <h3 className="who-are-we__card-title">{card.title}</h3>
                                    <p className="who-are-we__card-desc">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CoreValues />
                <AccordionSection />
                {/* <FAQSection /> */}
                <section className="partners-section">
                    <div className="container">
                        <div>
                            <h3 className="heading_title text-center mb-2" style={{color: 'white'}}>
                                <span>We Support</span> Customers Around The Globe
                            </h3>
                            <p className="heading_subtitle mb-5">Delivering innovative technology solutions to businesses worldwide, building lasting partnerships across industries and regions.</p>
                            <div className="partners-row">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={4.5}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                    }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {partners.map((p, i) => (
                                        <SwiperSlide>
                                            <div
                                                key={i}
                                                className="partner-item">
                                                <img src={p.src} alt={p.name} loading="lazy" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}