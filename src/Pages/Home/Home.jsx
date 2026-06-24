import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from 'framer-motion';
import { Bot, TrendingUp, Settings, Eye, Laptop, Landmark, BarChart3, Cloud, Link2, Globe, ArrowRight } from "lucide-react";
import './Home.scss';
import IndustryCards from "../../Common/IndustryCards/IndustryCards";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { useLanguage } from "../../Context/LanguageContext";


/* ─── ARABIC TRANSLATIONS ───────────────────────────────────── */
const AR = {
    badge_hero: "تطوير برمجيات بالذكاء الاصطناعي أولاً",
    hero_title_white: "ابنِ بشكل أذكى مع",
    hero_title_gradient: "تقنية مدعومة بالذكاء الاصطناعي",
    hero_subtitle: "تقدم ASZ Technologies حلول برمجية ذكية — من تطبيقات الذكاء الاصطناعي المخصصة والأتمتة إلى فرق التسليم الخارجية المتخصصة — مما يساعد الشركات على التوسع بشكل أسرع.",
    btn_explore: "استكشف حلول الذكاء الاصطناعي",
    btn_services: "عرض الخدمات",
    scroll: "تمرير",

    badge_ai: "منصة الذكاء الاصطناعي",
    ai_title: "ذكاء مدمج في كل حل",
    ai_subtitle: "ندمج الذكاء الاصطناعي في جوهر برمجياتك — ليس كفكرة لاحقة، بل كقدرة أساسية تحقق نتائج حقيقية.",

    badge_services: "الخدمات الأساسية",
    services_title_white: "كل ما تحتاجه",
    services_title_accent: "للبناء والتوسع",
    services_subtitle: "تسليم تقني شامل من الاستراتيجية حتى المنتج المُشحون والعمليات الجارية.",

    contact_title_white: "هل أنت مستعد للبناء",
    contact_title_accent: "بالذكاء الاصطناعي؟",
    contact_subtitle: "دعنا نحدد نطاق مشروعك. سيكون اقتراح الفريق جاهزاً في غضون 48 ساعة — دون أي التزام.",
    btn_start: "ابدأ مشروعاً",
    btn_email: "info@asztechnologies.com",

    stats: [
        { label: "سنوات من التسليم" },
        { label: "مشروع تم شحنه" },
        { label: "مهندس في الفريق" },
        { label: "التسليم في الوقت المحدد" },
    ],

    platform: [
        { title: "تكامل الذكاء الاصطناعي التوليدي", description: "دمج GPT-4 وClaude وGemini في منتجاتك. واجهات المحادثة وتوليد المستندات والبحث الذكي وأتمتة المحتوى على نطاق الإنتاج.", tag: "تكامل LLM" },
        { title: "التحليلات التنبؤية", description: "حوّل البيانات الخام إلى رؤى مستقبلية. نماذج تعلم الآلة للتنبؤ بالطلب والكشف عن الاحتيال ولوحات معلومات ذكاء الأعمال في الوقت الفعلي.", tag: "تعلم الآلة" },
        { title: "أتمتة العمليات الذكية", description: "RPA مع اتخاذ قرارات بالذكاء الاصطناعي. أتمتة معالجة المستندات والموافقات وإدخال البيانات وسير العمل المعقد — بتقليل الجهد اليدوي بنسبة تصل إلى 80%.", tag: "RPA + ذكاء اصطناعي" },
        { title: "رؤية الحاسوب", description: "ذكاء الصور والفيديو لفحص الجودة والتحقق من الهوية ومسح المستندات وأنظمة المراقبة البصرية في الوقت الفعلي.", tag: "رؤية ذكاء اصطناعي" },
    ],

    services: [
        { title: "تطوير البرمجيات المخصصة", description: "تطوير شامل لتطبيقات الويب والموبايل والمؤسسات المصمّمة وفق منطق عملك ومتطلباتك الدقيقة." },
        { title: "الاستشارات التقنية والهندسة المعمارية", description: "استشارات تقنية استراتيجية وهجرة سحابية وهندسة أنظمة وخرائط طريق التحول الرقمي للمؤسسات المتنامية." },
        { title: "هندسة البيانات والتحليلات", description: "خطوط بيانات ومستودعات ولوحات BI ومنصات تحليلات في الوقت الفعلي تكشف رؤى من بياناتك الخام فوراً." },
        { title: "السحابة وDevOps", description: "نشر على AWS وAzure وGCP. مسارات CI/CD، والبنية التحتية كرمز، وتنسيق Kubernetes، ومراقبة على مدار الساعة." },
        { title: "تكامل الأنظمة", description: "ربط ERP وCRM ومنصاتك الخارجية بواجهات برمجية قوية ومكونات وسيطة وطبقات مزامنة بيانات في الوقت الفعلي." },
        { title: "فرق التطوير الخارجية", description: "وحدات خارجية مخصصة — مهندسون وضمان الجودة ومحللو الأعمال ومديرو مشاريع — مدمجون في سير عملك. التوسع في أسبوعين لا شهرين." },
    ],
};

const statsData = [
    { id: 1, value: 15, suffix: "+", label: "Years of delivery" },
    { id: 2, value: 200, suffix: "+", label: "Projects shipped" },
    { id: 3, value: 50, suffix: "+", label: "Engineers on team" },
    { id: 4, value: 98, suffix: "%", label: "On-time delivery" },
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
                        if (start >= value) {
                            start = value;
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
    }, [value, duration]);

    return (
        <span ref={ref} className="key-facts__number">
            {count}
            {suffix}
        </span>
    );
};

const platformData = [
    {
        id: 1,
        icon: <Bot size={22} />,
        title: "Generative AI Integration",
        description:
            "Embed GPT-4, Claude, and Gemini into your products. Chat interfaces, document generation, intelligent search, and content automation at production scale.",
        tag: "LLM INTEGRATION",
    },
    {
        id: 2,
        icon: <TrendingUp size={22} />,
        title: "Predictive Analytics",
        description:
            "Turn raw data into foresight. ML models for demand forecasting, churn prediction, fraud detection, and real-time business intelligence dashboards.",
        tag: "MACHINE LEARNING",
    },
    {
        id: 3,
        icon: <Settings size={22} />,
        title: "Intelligent Process Automation",
        description:
            "RPA plus AI decision-making. Automate document processing, approvals, data entry, and complex workflows — reducing manual effort by up to 80%.",
        tag: "RPA + AI",
    },
    {
        id: 4,
        icon: <Eye size={22} />,
        title: "Computer Vision",
        description:
            "Image and video intelligence for quality inspection, identity verification, document scanning, and real-time visual monitoring systems.",
        tag: "VISION AI",
    },
];

const servicesData = [
    {
        id: "01",
        icon: <Laptop size={22} />,
        title: "Custom Software Development",
        description:
            "End-to-end development of web, mobile, and enterprise applications tailored to your exact business logic and requirements.",
    },
    {
        id: "02",
        icon: <Landmark size={22} />,
        title: "IT Consulting & Architecture",
        description:
            "Strategic technology advisory, cloud migration, system architecture, and digital transformation roadmaps for growing enterprises.",
    },
    {
        id: "03",
        icon: <BarChart3 size={22} />,
        title: "Data Engineering & Analytics",
        description:
            "Data pipelines, warehousing, BI dashboards, and real-time analytics platforms that surface insights from your raw data instantly.",
    },
    {
        id: "04",
        icon: <Cloud size={22} />,
        title: "Cloud & DevOps",
        description:
            "AWS, Azure, and GCP deployments. CI/CD pipelines, infrastructure-as-code, Kubernetes orchestration, and 24/7 monitoring.",
    },
    {
        id: "05",
        icon: <Link2 size={22} />,
        title: "System Integration",
        description:
            "Connect your ERP, CRM, and third-party platforms with robust APIs, middleware, and real-time data synchronisation layers.",
    },
    {
        id: "06",
        icon: <Globe size={22} />,
        title: "Offshore Development Teams",
        description:
            "Dedicated offshore pods — engineers, QA, BA, and PM — embedded in your workflow. Scale in 2 weeks, not 2 months.",
    },
];

export default function Home() {
    const { isRTL } = useLanguage();
    const t = isRTL ? AR : null; // null = use hardcoded English JSX below

    return (
        <>
            <div className={`homeDark${isRTL ? " rtl" : ""}`}>

                {/* ── HERO ── */}
                <section className="hero-banner">
                    <video className="hero-banner__video" autoPlay loop muted playsInline>
                        <source src="/images/home/home_bnr.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-banner__overlay"></div>
                    <div className="hero-banner__content">
                        <div className="hero-banner__badge">
                            <span className="hero-banner__dot"></span>
                            {isRTL ? t.badge_hero : "AI-FIRST SOFTWARE DEVELOPMENT"}
                        </div>
                        <h1 className="hero-banner__title">
                            <span className="hero-banner__title--white">
                                {isRTL ? t.hero_title_white : "Build Smarter with"}
                            </span>
                            <span className="hero-banner__title--gradient">
                                {isRTL ? t.hero_title_gradient : "AI-Powered Technology"}
                            </span>
                        </h1>
                        <p className="hero-banner__subtitle">
                            {isRTL
                                ? t.hero_subtitle
                                : "ASZ Technologies delivers intelligent software solutions — from custom AI applications and automation to dedicated offshore delivery teams — helping businesses scale faster."}
                        </p>
                        <div className="hero-banner__actions">
                            <button className="btn-primary hero-banner__btn hero-banner__btn--primary">
                                {isRTL ? t.btn_explore : "Explore AI Solutions"}&nbsp;
                                <span><i className="bi bi-arrow-right"></i></span>
                            </button>
                            <button className="btn-secondary hero-banner__btn hero-banner__btn--secondary">
                                {isRTL ? t.btn_services : "View Services"}&nbsp;
                                <span><i className="bi bi-arrow-right"></i></span>
                            </button>
                        </div>
                        <div className="hero-banner__scroll">
                            <span className="hero-banner__scroll-line"></span>
                            <span className="hero-banner__scroll-text">
                                {isRTL ? t.scroll : "SCROLL"}
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── KEY FACTS ── */}
                <section className="key-facts">
                    <div className="key-facts__container">
                        {statsData.map((stat, index) => (
                            <React.Fragment key={stat.id}>
                                <div className="key-facts__item">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                    <p className="key-facts__label">
                                        {isRTL ? AR.stats[index].label : stat.label}
                                    </p>
                                </div>
                                {index < statsData.length - 1 && (
                                    <div className="key-facts__divider"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* ── AI PLATFORM ── */}
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
                                {isRTL ? t.badge_ai : "AI PLATFORM"}
                            </div>
                            <h2 className="heading_title ai-platform__title">
                                {isRTL
                                    ? t.ai_title
                                    : <><span>Intelligence built</span> into <br /> every solution</>}
                            </h2>
                            <p className="ai-platform__subtitle">
                                {isRTL
                                    ? t.ai_subtitle
                                    : "We embed AI at the core of your software — not as an afterthought, but as a foundational capability driving real outcomes."}
                            </p>
                        </div>

                        <div className="ai-platform__grid">
                            {platformData.map((item, i) => (
                                <div className="ai-platform__card" key={item.id}>
                                    <div className="ai-platform__icon">{item.icon}</div>
                                    <h3 className="ai-platform__card-title">
                                        {isRTL ? AR.platform[i].title : item.title}
                                    </h3>
                                    <p className="ai-platform__card-desc">
                                        {isRTL ? AR.platform[i].description : item.description}
                                    </p>
                                    <span className="ai-platform__tag">
                                        {isRTL ? AR.platform[i].tag : item.tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CORE SERVICES ── */}
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
                                {isRTL ? t.badge_services : "CORE SERVICES"}
                            </div>
                            <h2 className="heading_title">
                                {isRTL
                                    ? <>{t.services_title_white} <br /> <span>{t.services_title_accent}</span></>
                                    : <>Everything you need <br /> to <span>build and scale</span></>}
                            </h2>
                            <p className="core-services__subtitle">
                                {isRTL
                                    ? t.services_subtitle
                                    : "End-to-end technology delivery from strategy through to shipped product and ongoing operations."}
                            </p>
                        </div>

                        <div className="core-services__grid">
                            {servicesData.map((item, i) => (
                                <div className="core-services__card" key={item.id}>
                                    <span className="core-services__number">{item.id}</span>
                                    <div className="core-services__icon">{item.icon}</div>
                                    <h3 className="core-services__card-title">
                                        {isRTL ? AR.services[i].title : item.title}
                                    </h3>
                                    <p className="core-services__card-desc">
                                        {isRTL ? AR.services[i].description : item.description}
                                    </p>
                                    <a href="#" className="core-services__link">
                                        {isRTL ? "اعرف المزيد" : "Learn more"} <ArrowRight size={15} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── INDUSTRY ── */}
                <section className='Industry_section'>
                    <IndustryCards />
                </section>

                {/* ── CONTACT ── */}
                <section className='contact_section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='contact_inner'>
                                    <div className='contact_inner_content mb-4'>
                                        <motion.h3 className="heading_title text-center mb-3">
                                            {isRTL
                                                ? <>{t.contact_title_white} <span>{t.contact_title_accent}</span></>
                                                : <>Ready to build <span>with AI?</span></>}
                                        </motion.h3>
                                        <motion.p>
                                            {isRTL
                                                ? t.contact_subtitle
                                                : "Let's scope your project. We'll have a team proposal ready within 48 hours — no commitment required."}
                                        </motion.p>
                                    </div>
                                    <div className='contact_inner_btn'>
                                        <motion.button className='btn-primary'>
                                            {isRTL ? t.btn_start : "Start a Project"} <i className="bi bi-arrow-right"></i>
                                        </motion.button>
                                        <motion.button className='btn-secondary'>
                                            {isRTL ? t.btn_email : "info@asztechnologies.com"}
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