import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CaseStudyDetail.scss';
import { WORKS } from '../Services/CustomSoftDevelopment/CustomSoftDevelopment';

// ── Section IDs ──────────────────────────────────────────────────
const NAV_SECTIONS = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'solution' },
    // { id: 'streaming', label: 'Streaming' },
    // { id: 'budget', label: 'Budget' },
    // { id: 'output', label: 'Agent Output' },
    { id: 'results', label: 'Results' },
    // { id: 'techstack', label: 'Tech stack' },
];

// ── Helpers ──────────────────────────────────────────────────────
const CodeBlock = ({ children }) => (
    <div className="cs-code">
        <pre><code>{children}</code></pre>
    </div>
);

const TechPill = ({ label }) => (
    <span className="cs-tech-pill">{label}</span>
);

// ── Full-width section image ──────────────────────────────────────
const SectionImage = ({ src, alt, caption }) => (
    <figure className="cs-img-full">
        <img src={src} alt={alt} loading="lazy" />
        {caption && <figcaption className="cs-img-caption">{caption}</figcaption>}
    </figure>
);

// ── 2-col image row ───────────────────────────────────────────────
const ImageRow = ({ images }) => (
    <div className="cs-img-row">
        {images.map((img, i) => (
            <figure key={i} className="cs-img-row__item">
                <img src={img.src} alt={img.alt} loading="lazy" />
                {img.caption && <figcaption className="cs-img-caption">{img.caption}</figcaption>}
            </figure>
        ))}
    </div>
);

// ── Highlight stat bar ────────────────────────────────────────────
const StatBar = ({ stats }) => (
    <div className="cs-stat-bar">
        {stats.map((s, i) => (
            <div key={i} className="cs-stat-bar__item">
                <span className="cs-stat-bar__value">{s.value}</span>
                <span className="cs-stat-bar__label">{s.label}</span>
            </div>
        ))}
    </div>
);

// ── More case studies card ────────────────────────────────────────
const MoreCard = ({ work }) => (
    <Link to={`/case-study/${work.id}`} className="cs-more-card">
        <div className="cs-more-card__cover">
            <img src={work.coverImage} alt={work.title} />
            <div className="cs-more-card__overlay" />
        </div>
        <div className="cs-more-card__info">
            <div className="cs-more-card__tags">
                {work.tags.map((t, i) => (
                    <span key={t} className="cs-more-card__tag"
                        style={{ color: work.tagColors?.[i] || '#ff6b35' }}>
                        {t}
                    </span>
                ))}
            </div>
            <p className="cs-more-card__title">{work.title}</p>
        </div>
    </Link>
);

// ── Main ─────────────────────────────────────────────────────────
const CaseStudyDetail = () => {
    const { id } = useParams();
    const work = WORKS.find((w) => w.id === id);
    const [activeSection, setActiveSection] = useState('challenge');
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                });
            },
            { rootMargin: '-15% 0px -65% 0px', threshold: 0 }
        );
        NAV_SECTIONS.forEach(({ id: sid }) => {
            const el = document.getElementById(sid);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [id]);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!work) {
        return (
            <div className="cs-notfound">
                <h2>Case study not found.</h2>
                <Link to="/services/custom-software-development" className="cs-back">← Back</Link>
            </div>
        );
    }

    const scrollTo = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const moreCaseStudies = (work.moreCaseStudies || [])
        .map((mid) => WORKS.find((w) => w.id === mid))
        .filter(Boolean);

    return (
        <div className="cs-page">
            <div className="cs-body">
                <aside className="cs-sidebar">
                    <nav className="cs-nav">
                        {NAV_SECTIONS.map(({ id: sid, label }) => (
                            <button
                                key={sid}
                                className={`cs-nav__item ${activeSection === sid ? 'is-active' : ''}`}
                                onClick={() => scrollTo(sid)}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </aside>

                <main className="cs-content" ref={contentRef}>
                    <div className="cs-hero">
                        <div className="cs-hero__inner">
                            <h1 className="cs-hero__title">{work.heroTitle}</h1>
                            <p className="cs-hero__summary">{work.summary}</p>
                        </div>
                        <div className="cs-hero__cover">
                            <img src={work.coverImage} alt={work.heroTitle} />
                            <div className="cs-hero__cover-overlay" />
                        </div>
                    </div>
                    {/* ── Challenge ── */}
                    <section id="challenge" className="cs-section">
                        <h2 className="cs-section__heading">{work.challenge.heading}</h2>
                        {work.challenge.body.split('\n\n').map((para, i) => (
                            <p key={i} className="cs-section__body">{para}</p>
                        ))}
                        {work.images?.challenge && (
                            <SectionImage
                                src={work.images.challenge.src}
                                alt={work.images.challenge.alt}
                                caption={work.images.challenge.caption}
                            />
                        )}
                    </section>

                    <section id="approach" className="cs-section">
                        <h2 className="cs-section__heading">{work.approach.heading}</h2>
                        <h3 className="cs-section__subheading">{work.approach.subheading}</h3>
                        {work.approach.body.split('\n\n').map((para, i) => (
                            <p key={i} className="cs-section__body">{para}</p>
                        ))}

                        {work.images?.approach && (
                            <SectionImage
                                src={work.images.approach.src}
                                alt={work.images.approach.alt}
                                caption={work.images.approach.caption}
                            />
                        )}
                        {work.approachStats && <StatBar stats={work.approachStats} />}
                    </section>

                    {/* <section id="streaming" className="cs-section">
                        <h2 className="cs-section__heading">{work.streamingSection.heading}</h2>
                        {work.streamingSection.body.split('\n\n').map((para, i) => (
                            <p key={i} className="cs-section__body">{para}</p>
                        ))}

                        {work.images?.streamingRow && (
                            <ImageRow images={work.images.streamingRow} />
                        )}
                    </section>
                    <section id="budget" className="cs-section">
                        <h2 className="cs-section__heading">{work.budget.heading}</h2>
                        {work.budget.body.split('\n\n').map((para, i) => (
                            <p key={i} className="cs-section__body">{para}</p>
                        ))}
                    </section>
                    <section id="output" className="cs-section">
                        <h2 className="cs-section__heading">{work.agentOutput.heading}</h2>
                        <p className="cs-section__body">{work.agentOutput.preTitle}</p>
                        <div className="cs-output-card">
                            <div className="cs-output-card__header">
                                <span className="cs-output-card__icon">⬡</span>
                                <span className="cs-output-card__title">{work.agentOutput.scanTitle}</span>
                            </div>
                            <div className="cs-output-card__meta">
                                <p><strong>Scan Status:</strong> <span className="cs-output-card__success">{work.agentOutput.scanStatus}</span> &nbsp; {work.agentOutput.scanPages}</p>
                                <p><strong>Findings:</strong> {work.agentOutput.scanFindings}</p>
                            </div>
                            <div className="cs-output-card__findings-label">{work.agentOutput.findings}</div>
                            <div className="cs-output-card__finding">
                                <p className="cs-output-card__f-label">{work.agentOutput.finding1Label}</p>
                                <p className="cs-output-card__f-location">
                                    <strong>Location:</strong><br />
                                    <span className="cs-output-card__f-url">{work.agentOutput.finding1Location}</span>
                                </p>
                                <p className="cs-output-card__f-type">{work.agentOutput.finding1Type}</p>
                                <p className="cs-output-card__f-exposed">{work.agentOutput.finding1Exposed}</p>
                                <CodeBlock>{work.agentOutput.finding1Code}</CodeBlock>
                                <p className="cs-section__body" style={{ marginTop: 16 }}>{work.agentOutput.finding1Details}</p>
                            </div>
                        </div>
                        {work.images?.output && (
                            <SectionImage
                                src={work.images.output.src}
                                alt={work.images.output.alt}
                                caption={work.images.output.caption}
                            />
                        )}
                    </section> */}

                    {/* ── Results ── */}
                    <section id="results" className="cs-section">
                        <h2 className="cs-section__heading">{work.results.heading}</h2>
                        {work.results.body.split('\n\n').map((para, i) => (
                            <p key={i} className="cs-section__body">{para}</p>
                        ))}

                        {/* Results image pair */}
                        {work.images?.resultsRow && (
                            <ImageRow images={work.images.resultsRow} />
                        )}

                        {/* Single results image */}
                        {work.images?.results && (
                            <SectionImage
                                src={work.images.results.src}
                                alt={work.images.results.alt}
                                caption={work.images.results.caption}
                            />
                        )}
                    </section>

                    {/* ── Tech stack ── */}
                    {/* <section id="techstack" className="cs-section">
                        <h2 className="cs-section__heading">{work.techStack.heading}</h2>
                        <div className="cs-tech-row">
                            {work.techStack.items.map((t) => (
                                <TechPill key={t} label={t} />
                            ))}
                        </div>
                    </section> */}

                </main>
            </div>

            {/* {moreCaseStudies.length > 0 && (
                <div className="cs-more">
                    <div className="cs-more__inner">
                        <h3 className="cs-more__heading">MORE CASE STUDIES</h3>
                        <div className="cs-more__grid">
                            {moreCaseStudies.map((w) => <MoreCard key={w.id} work={w} />)}
                        </div>
                    </div>
                </div>
            )}

            <div className="cs-footer-nav">
                <Link to="/services/custom-software-development" className="cs-back-link">
                    ← Back to Custom Software Development
                </Link>
            </div> */}
        </div>
    );
};

export default CaseStudyDetail;