import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from 'framer-motion';
import { Bot, TrendingUp, Settings, Eye, Laptop, Landmark, BarChart3, Cloud, Link2, Globe, ArrowRight } from "lucide-react";
import './Home.scss';
import IndustryCards from "../../Common/IndustryCards/IndustryCards";
import { useLanguage, useTranslation } from "../../Context/LanguageContext";
import { Link } from "react-router-dom";

const statsData = [
    { id: 1, value: 15,  suffix: "+" },
    { id: 2, value: 200, suffix: "+" },
    { id: 3, value: 50,  suffix: "+" },
    { id: 4, value: 98,  suffix: "%" },
];
 useLanguage
const platformIcons = [
    <Bot size={22} />,
    <TrendingUp size={22} />,
    <Settings size={22} />,
    <Eye size={22} />,
];

const servicesMeta = [
    { id: "01", icon: <Laptop size={22} /> },
    { id: "02", icon: <Landmark size={22} /> },
    { id: "03", icon: <BarChart3 size={22} /> },
    { id: "04", icon: <Cloud size={22} /> },
    { id: "05", icon: <Link2 size={22} /> },
    { id: "06", icon: <Globe size={22} /> },
];

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

    return (
        <>
            <div className={`homeDark${isRTL ? " rtl" : ""}`}>

                <section className="hero-banner">
                    <video className="hero-banner__video" autoPlay loop muted playsInline>
                        <source src="/images/home/home_bnr.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-banner__overlay"></div>
                    <div className="hero-banner__content">
                        <div className="hero-banner__badge">
                            <span className="hero-banner__dot"></span>
                            {t.badge_hero}
                        </div>
                        <h1 className="hero-banner__title">
                            <span className="hero-banner__title--white">
                                {t.hero_title_white}
                            </span>
                            <span className="hero-banner__title--gradient">
                                {t.hero_title_gradient}
                            </span>
                        </h1>
                        <p className="hero-banner__subtitle">{t.hero_subtitle}</p>
                        <div className="hero-banner__actions">
                            <button className="btn-primary hero-banner__btn hero-banner__btn--primary">
                                {t.btn_explore}&nbsp;
                                <span><i className="bi bi-arrow-right"></i></span>
                            </button>
                            <button className="btn-secondary hero-banner__btn hero-banner__btn--secondary">
                                {t.btn_services}&nbsp;
                                <span><i className="bi bi-arrow-right"></i></span>
                            </button>
                        </div>
                        <div className="hero-banner__scroll">
                            <span className="hero-banner__scroll-line"></span>
                            <span className="hero-banner__scroll-text">{t.scroll}</span>
                        </div>
                    </div>
                </section>

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

                <section className="ai-platform">
                    <div className="ai-platform__bg">
                        <div className="ai-platform__glow ai-platform__glow--top"></div>
                        <div className="ai-platform__glow ai-platform__glow--bottom"></div>
                        <div className="ai-platform__dots"></div>
                    </div>

                    <div className="ai-platform__container">
                        <div className="ai-platform__header">
                            <div className="hero_badge">
                                <span></span>
                                {t.badge_ai}
                            </div>
                            <h2 className="heading_title ai-platform__title">
                                {t.ai_title}
                            </h2>
                            <p className="ai-platform__subtitle">{t.ai_subtitle}</p>
                        </div>

                        <div className="features-boxy-grid reveal" ref={addReveal}>
                            {t.platform.map((item, i) => (
                                <div className="feature-box" key={i}>
                                    <div className="feature-box-icon">{platformIcons[i]}</div>
                                    <div className="feature-box-title">{item.title}</div>
                                    <p className="feature-box-desc">{item.description}</p>
                                    <span className="ai-platform__tag">{item.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="core-services">
                    <div className="core-services__bg">
                        <div className="core-services__glow core-services__glow--top"></div>
                        <div className="core-services__glow core-services__glow--bottom"></div>
                        <div className="core-services__dots"></div>
                    </div>

                    <div className="core-services__container">
                        <div className="core-services__header">
                            <div className="hero_badge">
                                <span></span>
                                {t.badge_services}
                            </div>
                            <h2 className="heading_title">
                                {t.services_title_white} <br />
                                <span>{t.services_title_accent}</span>
                            </h2>
                            <p className="core-services__subtitle">{t.services_subtitle}</p>
                        </div>

                        <div className="core-services__grid">
                            {t.services.map((item, i) => (
                                <div className="core-services__card" key={servicesMeta[i].id}>
                                    <span className="core-services__number">{servicesMeta[i].id}</span>
                                    <div className="core-services__icon">{servicesMeta[i].icon}</div>
                                    <h3 className="core-services__card-title">{item.title}</h3>
                                    <p className="core-services__card-desc">{item.description}</p>
                                    <a href="#" className="core-services__link">
                                        {t.learn_more} <ArrowRight size={15} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='Industry_section'>
                    <IndustryCards />
                </section>

                <section className='contact_section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='contact_inner'>
                                    <div className='contact_inner_content mb-4'>
                                        <motion.h3 className="heading_title text-center mb-3">
                                            {t.contact_title_white}{" "}
                                            <span>{t.contact_title_accent}</span>
                                        </motion.h3>
                                        <motion.p>{t.contact_subtitle}</motion.p>
                                    </div>
                                    <div className='contact_inner_btn'>
                                        <Link className='btn-primary' to="/contact">
                                            {t.btn_start} <i className="bi bi-arrow-right"></i>
                                        </Link>
                                        <motion.button className='btn-secondary'>
                                            {t.btn_email}
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