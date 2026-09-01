import { useRef, useState, useEffect } from "react";
import {
    Mail,
    Phone,
    ArrowRight,
} from "lucide-react";
import "./ContactUs.scss";
import { Link } from "react-router-dom";

const SERVICES_HERO_TITLE_SEGMENTS = [
    { text: "Tell Us", span: true },
    // { text: " Analytics\u00A0" },
    // { break: true },
    // { text: "Built for Every Platform" },
];

const TypewriterHeading = ({
    segments,
    className,
    loop = true,
    typingSpeed = 42,
    deletingSpeed = 22,
    pauseAfterTyping = 2200,
    pauseAfterDeleting = 500,
}) => {
    const fullText = segments.map((s) => s.text).join("");
    const totalLength = fullText.length;
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
            } else if (loop) {
                timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
            }
        }

        return () => clearTimeout(timeout);
    }, [charCount, isDeleting, totalLength, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting, loop]);

    let remaining = charCount;
    const rendered = segments.map((seg, i) => {
        if (seg.break) {
            return <br key={i} />;
        }
        const shown = Math.max(0, Math.min(seg.text.length, remaining));
        remaining -= seg.text.length;
        return seg.span ? (
            <span key={i}>{seg.text.slice(0, shown)}</span>
        ) : (
            seg.text.slice(0, shown)
        );
    });

    const isTypingDone = !loop && charCount >= totalLength;

    return (
        <h1 className={className} aria-label={fullText}>
            {rendered}
            <span className={`typewriter-cursor${isTypingDone ? " typewriter-cursor--done" : ""}`} />
        </h1>
    );
};

const TAG_DEFAULT_COLOR = "#ff6b35";

function hexPath(cx, cy, r) {
    return Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" L ").replace(/^/, "M ") + " Z";
}

const initialForm = {
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    company: "",
    service: "",
    message: "",
};


function ContactUs() {
    const sectionRef = useRef(null);
    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted:", form);
    };
    return (
        <>  <div className="contact_us">
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
                        <h6 className="hero_badge hero-anim hero-anim--1"><span></span>Get In Touch</h6>
                        <TypewriterHeading
                            segments={SERVICES_HERO_TITLE_SEGMENTS}
                            className="heading_title services-hero__title hero-anim hero-anim--2 mb-0"
                        />
                        <h1 className="heading_title mb-4 hero-anim hero-anim--3">What You're Building.</h1>
                    </div>
                    <p className="hero-subtitle hero-anim hero-anim--4">
                        committing to a 48-hour proposal turnaround.
                    </p>
                </div>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="contact-info">
                                <span className="contact-info__eyebrow">Get in touch</span>
                                <h2 className="heading_title contact-info__title">Talk to our team</h2>
                                <p className="contact-info__subtitle">
                                    We offer no obligation consultation and feasibility analysis. Embark on a journey of digital transformation with us
                                </p>

                                <ul className="contact-info__list">
                                    <li className="contact-card">
                                        <div className="contact-card__body">
                                            <a href="mailto:info@asztechnologies.com">
                                                <Mail size={20} strokeWidth={2} /> &nbsp; info@asztechnologies.com
                                            </a>
                                        </div>
                                    </li>

                                    <li className="contact-card">
                                        <div className="contact-card__body">
                                            <a href="tel:+919880190000"><Phone size={20} strokeWidth={2} />&nbsp; +91 98801 90000</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-form-card">
                                <h3 className="contact-form-card__title">Send us a message</h3>
                                <p className="contact-form-card__subtitle">
                                    We&rsquo;ll get back to you within one business day.
                                </p>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="contact-form__row">
                                        <div className="contact-form__field">
                                            <label htmlFor="firstName">
                                                First Name <span className="required">*</span>
                                            </label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                placeholder="Rahul"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="contact-form__field">
                                            <label htmlFor="lastName">
                                                Last Name <span className="required">*</span>
                                            </label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                placeholder="Sharma"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form__row">
                                        <div className="contact-form__field">
                                            <label htmlFor="workEmail">
                                                Email <span className="required">*</span>
                                            </label>
                                            <input
                                                id="workEmail"
                                                name="workEmail"
                                                type="email"
                                                placeholder="rahul@company.com"
                                                value={form.workEmail}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="contact-form__field">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="message">
                                            Tell us about your project <span className="required">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Describe your goals, current challenges, timeline, and budget range. The more detail, the better we can prepare for our first call."
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary contact-form__submit">
                                        Send Message
                                        <ArrowRight size={18} strokeWidth={2.5} />
                                    </button>

                                    <p className="contact-form__disclaimer">
                                        By submitting, you agree to our{" "}
                                        <Link to="/privacy-policy">Privacy Policy</Link>. We never share
                                        your data with third parties.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default ContactUs