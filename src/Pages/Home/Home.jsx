import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import './Home.scss';
import IndustryCards from "../../Common/IndustryCards/IndustryCards";
import { useLanguage, useTranslation } from "../../Context/LanguageContext";
import LogoLoop from "../../Common/LogoLoop/LogoLoop";
import { Link } from "react-router-dom";
import HomeBanner from "../../Common/HomeBanner/HomeBanner";

const statsData = [
    { id: 1, value: 15, suffix: "+" },
    { id: 2, value: 500, suffix: "+" },
    { id: 3, value: 80, suffix: "+" },
    { id: 4, value: 98, suffix: "%" },
];

const bentoMeta = [
    { badge: "Featured", image: "/images/home/8machine.jpg" },
    { badge: "Real-Time Insights" },
    { badge: "Automated", image: "/images/home/parker-nate.jpg" },
    { badge: "Live Monitoring", image: "/images/home/ilya-pavlov.jpg" },
];

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

const partners2 = [
    { text: 'Client17', src: '/images/asz/client-17.png', type: 'text' },
    { text: 'Client18', src: '/images/asz/client-18.png', type: 'text' },
    { name: 'Client19', src: '/images/asz/client-19.jpg', type: 'img' },
    { text: 'Client20', src: '/images/asz/client-20.jpg', type: 'text' },
    { text: 'Client21', src: '/images/asz/client-21.png', type: 'text' },
    { text: 'Client22', src: '/images/asz/client-22.png', type: 'text' },
    { text: 'Client23', src: '/images/asz/client-23.png', type: 'text' },
    { text: 'Client24', src: '/images/asz/client-24.png', type: 'text' },
    { text: 'Client25', src: '/images/asz/client-25.png', type: 'text' },
    { text: 'Client26', src: '/images/asz/client-26.png', type: 'text' },
    { text: 'Client27', src: '/images/asz/client-27.png', type: 'text' },
    { text: 'Client28', src: '/images/asz/client-28.png', type: 'text' },
    { text: 'Client29', src: '/images/asz/client-29.png', type: 'text' },
    { text: 'Client30', src: '/images/asz/client-30.png', type: 'text' },
    { text: 'Client31', src: '/images/asz/client-31.png', type: 'text' },
];

const partnerLogos = partners.map((p) => ({
    src: p.src,
    alt: p.name || p.text,
    title: p.name || p.text,
}));

const partnerLogos2 = partners2.map((p) => ({
    src: p.src,
    alt: p.name || p.text,
    title: p.name || p.text,
}));

const Counter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const stepTime = Math.max(Math.floor(duration / value), 16);
                    const increment = Math.ceil(value / (duration / stepTime));

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= value) { start = value; clearInterval(timer); }
                        setCount(start);
                    }, stepTime);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className="key-facts__number">
            {count}{suffix}
        </span>
    );
};

const TiltedBentoCard = ({ children, className = "", glowColor = "255, 107, 53", rotateAmplitude = 7, scaleOnHover = 1.015 }) => {
    const cardRef = useRef(null);
    const springCfg = { damping: 28, stiffness: 180, mass: 1 };
    const rotateX = useSpring(useMotionValue(0), springCfg);
    const rotateY = useSpring(useMotionValue(0), springCfg);
    const scale = useSpring(1, { damping: 24, stiffness: 200, mass: 0.8 });

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
        rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);

        const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
        const relativeY = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--glow-x", `${relativeX}%`);
        el.style.setProperty("--glow-y", `${relativeY}%`);
    };

    const handleMouseEnter = () => {
        scale.set(scaleOnHover);
        cardRef.current?.style.setProperty("--glow-intensity", "1");
    };

    const handleMouseLeave = () => {
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        cardRef.current?.style.setProperty("--glow-intensity", "0");
    };

    return (
        <motion.div
            ref={cardRef}
            className={`bento-card ${className}`}
            style={{
                "--glow-color": glowColor,
                rotateX,
                rotateY,
                scale,
                transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="bento-card__border-glow" aria-hidden="true"></span>
            <span className="bento-card__spotlight" aria-hidden="true"></span>
            <div className="bento-card__inner">{children}</div>
        </motion.div>
    );
};

export default function Home() {
    const { isRTL } = useLanguage();
    const t = useTranslation();
    const revealRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        revealRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const addReveal = (el) => {
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
    };

    const aiPlatformRef = useRef(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mq.matches);
        const handler = (e) => setPrefersReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const { scrollYProgress: aiScrollProgress } = useScroll({
        target: aiPlatformRef,
        offset: ["start 90%", "center 55%"],
    });
    const aiSmoothProgress = useSpring(aiScrollProgress, {
        stiffness: 120,
        damping: 26,
        mass: 0.4,
    });
    const aiGridScale = useTransform(aiSmoothProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.86, 1]);
    const aiGridRadius = useTransform(aiSmoothProgress, [0, 1], [56, 24]);
    const aiGridY = useTransform(aiSmoothProgress, [0, 1], prefersReducedMotion ? [0, 0] : [60, 0]);
    const aiGlowOpacity = useTransform(aiSmoothProgress, [0, 1], [0, 1]);



    return (
        <>
            <div className={`homeDark${isRTL ? " rtl" : ""}`}>
                <HomeBanner />
                <section className="key-facts">
                    <div className="key-facts__container">
                        {statsData.map((stat, index) => (
                            <React.Fragment key={stat.id}>
                                <div className="key-facts__item">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                    <p className="key-facts__label">
                                        {t.stats[index].label}
                                    </p>
                                </div>
                                {index < statsData.length - 1 && (
                                    <div className="key-facts__divider"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>
                <section className="ai-platform" ref={aiPlatformRef}>
                    <div className="grid_overlay"></div>
                    <div className="ai-platform__bg">
                        <div className="ai-platform__glow ai-platform__glow--top"></div>
                        <div className="ai-platform__glow ai-platform__glow--bottom"></div>
                        <div className="ai-platform__dots"></div>
                    </div>

                    <div className="ai-platform__container">
                        <motion.div
                            className="ai-platform__header"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="hero_badge">
                                <span></span>
                                {t.badge_ai}
                            </div>
                            <h2 className="heading_title ai-platform__title">
                                <span>{t.ai_title_highlight}</span> {t.ai_title_rest}
                            </h2>
                            <p className="ai-platform__subtitle">
                                {t.ai_subtitle}
                            </p>
                        </motion.div>

                        <div className="bento-grid-wrap">
                            <motion.div
                                className="bento-grid-glow"
                                style={{ opacity: aiGlowOpacity }}
                            ></motion.div>

                            <motion.div
                                className="bento-grid reveal"
                                ref={addReveal}
                                style={{
                                    scale: aiGridScale,
                                    borderRadius: aiGridRadius,
                                    y: aiGridY,
                                }}
                            >
                                <TiltedBentoCard className="bento-card--big" glowColor="255, 107, 53">
                                    <div className="bento-card__media">
                                        <img src={bentoMeta[0].image} alt={t.platform[0].title} loading="lazy" />
                                        <div className="bento-card__scrim"></div>
                                    </div>
                                    <div className="bento-card__content bento-card__content--overlay">
                                        <span className="bento-badge mb-4">
                                            <span className="bento-badge__dot"></span>
                                            {bentoMeta[0].badge}
                                        </span>
                                        <div>
                                            <div className="bento-card__text">
                                                <h3 className="bento-card__title">{t.platform[0].title}</h3>
                                                <p className="bento-card__desc">{t.platform[0].description}</p>
                                                <div className="bento-card__tags">
                                                    <span className="bento-tag">{t.platform[0].tag}</span>
                                                </div>
                                            </div>
                                            <Link to="/service" className="bento-card__link">
                                                {t.btn_explore}
                                                <span className="bento-card__link-icon"><ArrowRight size={16} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </TiltedBentoCard>
                                <TiltedBentoCard className="bento-card--mid" glowColor="56, 189, 248">
                                    <div className="bento-card__content">
                                        <span className="bento-card__eyebrow">{bentoMeta[1].badge}</span>
                                        <h3 className="bento-card__title">{t.platform[1].title}</h3>
                                        <p className="bento-card__desc">{t.platform[1].description}</p>
                                        <div className="bento-card__tags">
                                            <span className="bento-tag">{t.platform[1].tag}</span>
                                        </div>
                                    </div>
                                </TiltedBentoCard>
                                <TiltedBentoCard className="bento-card--right" glowColor="168, 85, 247">
                                    <div className="bento-card__media">
                                        <img src={bentoMeta[2].image} alt={t.platform[2].title} loading="lazy" />
                                        <div className="bento-card__scrim"></div>
                                    </div>
                                    <div className="bento-card__content bento-card__content--overlay">
                                        <span className="bento-badge bento-badge--corner">
                                            <span className="bento-badge__dot"></span>
                                            {bentoMeta[2].badge}
                                        </span>
                                        <div>
                                            <h3 className="bento-card__title">{t.platform[2].title}</h3>
                                            <p className="bento-card__desc">{t.platform[2].description}</p>
                                            <div className="bento-card__tags">
                                                <span className="bento-tag">{t.platform[2].tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                </TiltedBentoCard>
                                <TiltedBentoCard className="bento-card--bottom" glowColor="45, 212, 191">
                                    <div className="bento-card__media bento-card__media--side">
                                        <img src={bentoMeta[3].image} alt={t.platform[3].title} loading="lazy" />
                                        <div className="bento-card__scrim"></div>
                                    </div>
                                    <div className="bento-card__content">
                                        <span className="bento-badge">
                                            <span className="bento-badge__dot"></span>
                                            {bentoMeta[3].badge}
                                        </span>
                                        <div className="bento-card__text">
                                            <h3 className="bento-card__title">{t.platform[3].title}</h3>
                                            <p className="bento-card__desc">{t.platform[3].description}</p>
                                            <div className="bento-card__row">
                                                <span className="bento-tag">{t.platform[3].tag}</span>
                                                <Link to="/service" className="bento-card__link">
                                                    {t.btn_explore}
                                                    <span className="bento-card__link-icon"><ArrowRight size={16} /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </TiltedBentoCard>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section className="partners-section">
                    <div className="partners_container">
                        <div style={{ position: 'relative' }}>
                            <h3 className="heading_title text-center mb-2" style={{ color: 'white', fontSize: '40px' }}>
                                <span>{t.partners_title_highlight}</span> {t.partners_title_rest}
                            </h3>
                            <p className="heading_subtitle mb-5">{t.partners_subtitle}</p>
                            <div className="partners-loop">
                                <LogoLoop
                                    logos={partnerLogos}
                                    direction="right"
                                    speed={70}
                                    logoHeight={56}
                                    gap={32}
                                    fadeOut
                                    fadeOutColor="#111111"
                                    hoverSpeed={20}
                                    ariaLabel="Partner logos"
                                    className="partners-loop__row"
                                    renderItem={(item) => (
                                        <div className="partner-logo-card">
                                            <img src={item.src} alt={item.alt} loading="lazy" />
                                        </div>
                                    )}
                                />
                                <LogoLoop
                                    logos={partnerLogos2}
                                    direction="left"
                                    speed={70}
                                    logoHeight={56}
                                    gap={32}
                                    fadeOut
                                    fadeOutColor="#111111"
                                    hoverSpeed={20}
                                    ariaLabel="Partner logos"
                                    className="partners-loop__row"
                                    renderItem={(item) => (
                                        <div className="partner-logo-card">
                                            <img src={item.src} alt={item.alt} loading="lazy" />
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="partner_icon mt-5">
                                <Link to={'/works'}>
                                    {t.partners_view_clients} &nbsp;&nbsp; <i className={`bi bi-arrow-right${isRTL ? " rotate-rtl" : ""}`}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Industry_section'>
                    <IndustryCards />
                </section>
                <section className='contact_section'>
                    <div className="contact_color_overlay"></div>
                    <div className="grid_overlay"></div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='contact_inner'>
                                    <div className='contact_inner_content mb-4'>
                                        <motion.h3 className="heading_title text-center mb-3" style={{ fontSize: '50px' }}>
                                            <span>{t.contact_title_white} </span> {t.contact_title_accent}
                                            {/* <br /><span>Something real.</span> */}
                                        </motion.h3>
                                        <motion.p>
                                            {t.contact_subtitle}
                                        </motion.p>
                                    </div>
                                    <div className='contact_inner_btn'>
                                        <Link className='btn-primary' to="/contact">
                                            {t.btn_start} &nbsp;<i className={`bi bi-arrow-right${isRTL ? " rotate-rtl" : ""}`}></i>
                                        </Link>
                                        <motion.button className='btn-secondary'>
                                            {t.btn_offering} &nbsp;<i className={`bi bi-arrow-right${isRTL ? " rotate-rtl" : ""}`}></i>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}