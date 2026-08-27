import { useRef, useEffect, useState } from 'react';
import './MobileAppDevelopment.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';

const SERVICES = [
    {
        icon: "/images/asz/services/ios_mobile_app_development.png",
        title: "iOS Mobile App Development",
        desc: "Crafting pixel-perfect, high-performance apps for iPhone and iPad using Swift and SwiftUI. We build apps that feel native, intuitive, and ready for the App Store from day one.",
        tags: ["Swift", "SwiftUI", "Xcode", "TestFlight"],
        emoji: "📱",
    },
    {
        icon: "/images/asz/services/android_app_development.png",
        title: "Android Mobile App Development",
        desc: "Building robust Android apps with Kotlin and Jetpack Compose. We cover the full Android ecosystem — phones, tablets, foldables — with smooth performance and material design polish.",
        tags: ["Kotlin", "Jetpack", "Compose", "Play Store"],
        emoji: "🤖",
    },
    {
        icon: "/images/asz/services/wearable_app_development.png",
        title: "Wearable Mobile App Development",
        desc: "Developing sleek, context-aware apps for smartwatches and fitness trackers on WatchOS and Wear OS. Minimal UI, real-time sync, and health integration built in.",
        tags: ["WearOS", "WatchKit", "Health APIs", "BLE"],
        emoji: "⌚",
    },
    {
        icon: "/images/asz/services/cross_platform_app_development.png",
        title: "Cross-Platform Mobile App Development",
        desc: "One codebase, two platforms. Using React Native and Flutter, we ship apps that look and behave native on both iOS and Android — cutting cost without cutting quality.",
        tags: ["React Native", "Flutter", "Expo", "Dart"],
        emoji: "🔀",
    },
    {
        icon: "/images/asz/services/native_mobile_app_development.png",
        title: "Native Mobile App Development",
        desc: "Maximum performance, deepest device access. We write fully native apps when you need to push hardware limits, access low-level APIs, or deliver a truly platform-first experience.",
        tags: ["C++", "Metal", "Vulkan", "NDK"],
        emoji: "⚡",
    },
];

export const WORKS = [
    {
        id: "yapz-ai-agent",
        tags: ["Web App", "AI", "SaaS"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff"],
        title: "Launching YAPZ.App AI Agent on Product Hunt",
        coverBg: "#0d1f1a",
        coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
        // ── Detail page data ──
        breadcrumb: "SECRET SCAN AI: AN AGENT THAT HUNTS EXPOSED API KEYS IN LIVE WEB APPS",
        badge: "New",
        heroTitle: "Yapz.app AI Agent: Launching an AI-Powered Product Hunt Campaign That Converts",
        summary: "Yapz.app is an AI agent that signs up to a web app, clicks through its UI, and reports any API keys, tokens, or secrets it finds exposed in a logged-in view. Built it so it were for a general purpose browsing agent could go at finding real security leaks without access to source code.",
        challenge: {
            heading: "Challenge",
            body: `Every few weeks a new post lands in our feeds: a solo founder wakes up to a drained Stripe account, a bruised database, or a cloud bill at five figures. The cause is almost always the same. An API key shipped to the browser, found by someone who knows where to look.
 
We asked a simpler question: Could an AI agent catch this before the attacker does? An agent operating the way an attacker would. From inside the app, not scanning the outside. Checking the HTML source, network requests, and bundled JavaScript. Using the real front end and all the security measures are taken?
 
Here is the experiment: Build a self-driving security probe, point it at a live web app, and see what falls out.`,
        },
        approach: {
            heading: "Approach",
            subheading: "A small team of specialized agents",
            body: `The orchestrator is a thin routing layer. The content selector fills up the agent becomes a soup of conflicting instructions, and the model forgets what it was doing three tool calls ago. We split the work into roles and let an orchestrator coordinate them.
 
The orchestration spans the larger URL, decides whether authentication is needed, and hands off to sub-agents to handle specific sub-tasks. Auth agent handles login or sign up. Short verification pulls at AJAX state and scans the confirmation title. Onboarding fills workspace onboarding. Crawler walks the app and flags pages by type. Scan picks the high-priority pages and runs element discovery. resultId objects, occurrences, readable page text.
 
Under the hood we use the Vercel AI SDK with Claude as the model, and a Playwright-based JS called "agent-browser" for the actual browser automation. Around 60 browser tools are registered here, each sub-agent does a meaningful screenshot of its completed list.`,
        },
        streamingSection: {
            heading: "Streaming every step, because scans take minutes",
            body: `We stream every decision the agent makes straight to the UI. When the orchestrator hands off to the auth agent, the user sees it. When the crawler opens a new page, they see it. Payload the URL. Wrap the scanner workerNode on the settings page, the user sees the tool call and the tokens it spent. The progress view reads like a developer writing their code in real time.
 
This turned out to do more than fill time. Watching the agent think made the output easier to trust. When a finding appeared at the end, the user had already seen the path that led to it.`,
        },
        budget: {
            heading: "Budget awareness and confidence instead of hard caps",
            body: `These agents are non-deterministic by nature. Success is never guaranteed. A run might find six data secrets in five minutes, or it might spend twenty steps stuck on a logic form and never get in. And token budgets matter, they make or break whether an agent feels like a real tool.
 
The model is to set a hard step limit and walk away if the agent hits it. That produced bad results. Agents would get cut off mid-task, lose partial findings they had not written up yet, and return nothing.
 
The agent decides how to limit it. It can wrap up if it's told nothing left to check. It can push through one more step when it's confident about a lead. When it's running efficiently, the work is done from finding to budget high, medium, or low. The scan as a whole reports 'succeeded', 'partial', or 'failed'. A partial scan with clear findings is worth far more than a timed-out scan with nothing.
 
When the confidence level drops below a threshold we call the agent itself states, it matched what we actually wanted: a guided reasoner, not a price-list one.`,
        },
        agentOutput: {
            heading: "Agent Output",
            preTitle: "The scan is complete. The full security scan report for",
            scanTitle: "Security Scan Report",
            scanStatus: "✓ Succeeded",
            scanPages: "Pages Scanned: 11 pages + 1 JS bundle",
            scanFindings: "Findings: 5 total (0 Critical, 2 Medium, 3 Low)",
            findings: "0 Findings",
            finding1Label: "Finding 1 — MEDIUM: Firebase Project API Key Hardcoded in Client-Side JS Bundle",
            finding1Location: "http://[redacted]/_next/static/chunks/pages/_app-[hash].js",
            finding1Type: "Type: Firebase Browser API Key + Full Project Configuration",
            finding1Exposed: "Exposed Value:",
            finding1Code: `{
  "apiKey": "...",
  "authDo...",
  "projecti...",
  "storageBuc...",
  "messagingI..."
}`,
            finding1Details: `Details: The entire Firebase configuration is declared as a JS variable (var XG) and passed directly to nt.initializeApp(), powering Yawber's Firebase database, Realtime Database, Auth, and Storage. While Firebase browser API keys are architecturally designed to be client-facing, this is especially dangerous for a secrets-management platform: if Firebase Security Rules are misconfigured, an attacker with this config can directly query`,
        },
        results: {
            heading: "Results",
            body: `We tested Secret Scan AI against several dozen recently launched web apps. It returned useful findings on roughly 70% of them. Hardcoded Firebase configs in client bundles. Full-address Office 365 configs dismissed to console statements. Stripe publishable keys on the wrong page. Things that look benign until they're not.
 
The most useful experiment: the streaming UI said it was running. It told every step automatically instead of different pages with running accuracy and found the same findings in about the same places. The gaps it missed were genuinely hard to find, and it was honest about it. That's the pattern we were aiming for with any long-running agent work: success isn't guaranteed and the user needs to trust the partial to the system.`,
        },
        techStack: {
            heading: "Tech stack",
            items: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS", "Anthropic", "Playwright"],
        },
        moreCaseStudies: ["playbook-venue-booking", "shopengine-commerce"],
    },
    {
        id: "playbook-venue-booking",
        tags: ["Services & Hospitality", "Mobile App", "Marketplace"],
        tagColors: ["#ff6b35", "#4fc3c8", "#3DDC97"],
        title: "Launching YAPZ.App AI Agent on Product Hunt",
        coverBg: "#fff9c4",
        coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
        breadcrumb: "PLAYBOOK: KUWAIT'S FIRST KIDS' VENUE BOOKING PLATFORM",
        badge: null,
        heroTitle: "Designing and Developing Kuwait's First Venue Booking Platform for Kids' Celebrations",
        summary: "Playbook is a marketplace app connecting parents in Kuwait with vetted venues for children's birthday parties and events. We designed and built the full product from the ground up — discovery, booking, payments, and vendor dashboards — launching Kuwait's first dedicated kids' celebration platform.",
        challenge: {
            heading: "Challenge",
            body: `The kids' events market in Kuwait was entirely offline. Parents discovered venues through word of mouth or Instagram. Venues had no structured way to list availability, take bookings, or manage customer communications. The process was fragmented, slow, and opaque on both sides.
 
The client needed a marketplace that worked for two distinct users — busy parents who needed confidence and convenience, and venue operators who needed a simple tool to manage their listings and calendars without technical overhead.`,
        },
        approach: {
            heading: "Approach",
            subheading: "Discovery-first design, then marketplace architecture",
            body: `We started with user research on both sides. Parent interviews surfaced the same frustrations: unclear pricing, no real photos, no way to know if a venue was available without calling. Venue operators wanted something simpler than a full PMS — just listings, availability, and booking confirmations.
 
The design work centred on the discovery experience. We built a map-based venue explorer with photo-heavy cards, real pricing, and a package builder that let parents configure party size, add-ons, and timeslots in one flow before booking. On the vendor side, we built a lightweight dashboard for calendar management, booking review, and payout tracking.`,
        },
        streamingSection: {
            heading: "Marketplace logic and trust",
            body: `The two hardest problems were availability sync and payment holding. We built a real-time availability calendar that locked slots on session start to prevent double-bookings. Payments were held in escrow and released to venues 48 hours after the event date — giving parents a clear dispute window without requiring manual intervention.
 
We also built a review and verification layer for venues before they went live — checking licensing, photo quality, and capacity claims — to give the marketplace a baseline trust level that a directory listing couldn't offer.`,
        },
        budget: {
            heading: "Launch and traction",
            body: `We went live with 24 verified venues across Kuwait City. Within 60 days the platform had processed its first 200 bookings, with an average booking value of KWD 180. The map-based discovery flow had the highest engagement of any feature — parents spent more time exploring venues than any other step in the booking funnel.
 
Venue operators who had previously relied entirely on Instagram DMs for bookings reported a significant reduction in the back-and-forth communication they had to manage manually.`,
        },
        agentOutput: {
            heading: "Platform Output",
            preTitle: "Playbook marketplace metrics at 60-day mark",
            scanTitle: "Platform Launch Report",
            scanStatus: "✓ Live",
            scanPages: "Venues: 24 verified across Kuwait City",
            scanFindings: "Bookings: 200+ in first 60 days",
            findings: "KWD 180 average booking value",
            finding1Label: "Key Feature — Map-Based Venue Discovery",
            finding1Location: "Parents explore by area, party size, and package type",
            finding1Type: "Type: Interactive marketplace with real-time availability",
            finding1Exposed: "Top performing feature:",
            finding1Code: `{
  "discovery": "Map-based explorer",
  "packages": "Configurable party builder",
  "payments": "Escrow + auto-release",
  "vendor_tools": "Calendar + payout dashboard"
}`,
            finding1Details: "The venue discovery flow drove the highest time-on-page of any product feature. Parents spent an average of 8 minutes exploring venues before confirming a booking — significantly higher than the 2-minute benchmark we set at the start of the project.",
        },
        results: {
            heading: "Results",
            body: `Playbook launched as the first structured venue booking platform for children's events in Kuwait. The combination of map-based discovery, transparent pricing, and real-time availability removed the three biggest friction points parents reported in research.
 
Vendor onboarding reached 24 venues in the first month without paid acquisition — word spread through event planner networks. The escrow payment model reduced post-booking disputes to near zero in the first two months of operation.`,
        },
        techStack: {
            heading: "Tech stack",
            items: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Stripe", "AWS S3"],
        },
        moreCaseStudies: ["yapz-ai-agent", "spendhound-renewal"],
    },
    {
        id: "spendhound-renewal",
        tags: ["Web App", "AI", "SaaS", "Enterprise"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff", "#3DDC97"],
        title: "Launching YAPZ.App AI Agent on Product Hunt",
        coverBg: "#f5f5f5",
        coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        breadcrumb: "SPENDHOUND: RENEWAL MANAGEMENT PLATFORM FOR SAAS SPEND",
        badge: null,
        heroTitle: "Designing and Developing Spendhound's Core Renewal Management Experience and Integrations",
        summary: "Spendhound is a SaaS spend management platform that helps finance and IT teams track software renewals, identify redundant licenses, and consolidate underutilised tools. We designed and built the core renewal dashboard, admin experience, and integrations layer from ground zero.",
        challenge: {
            heading: "Challenge",
            body: `Enterprise software sprawl is expensive and largely invisible. Finance teams at mid-size companies were managing SaaS renewals in spreadsheets, missing renewal dates, and paying for seats that hadn't been touched in months. The data existed inside their SSO, HR, and finance tools — but no one had connected it.
 
Spendhound needed a product that surfaced upcoming renewals automatically, flagged underutilised licenses with enough context for a decision, and gave finance leads a clear view of SaaS spend without requiring an engineer to pull a report.`,
        },
        approach: {
            heading: "Approach",
            subheading: "Data first, interface second",
            body: `We started with the integration layer. Pulling structured renewal data from Okta, BambooHR, and QuickBooks gave us the raw signal. The hard work was normalising it — tool names vary across systems, contract dates live in PDF attachments, and seat counts drift as employees join and leave.
 
We built a processing pipeline that extracted renewal dates from emails and document attachments using lightweight ML classification, matched them to known vendor records, and surfaced them in the dashboard with confidence scores so finance teams knew when to verify manually versus when to trust the automation.`,
        },
        streamingSection: {
            heading: "Dashboard design and decision support",
            body: `The admin dashboard was designed around three core workflows: renewals coming up, licenses with low utilisation, and duplicate tools serving the same function. Each section gave the user enough context to act — not just a data table, but a recommendation with the supporting evidence visible.
 
The renewal timeline used a calendar-style view with urgency banding — anything renewing in the next 30 days surfaced at the top with a direct action. Underutilised licenses showed last-login dates per seat, so the decision to downsize or cancel was backed by actual usage data rather than assumptions.`,
        },
        budget: {
            heading: "Integration reliability and edge cases",
            body: `The hardest integration problems weren't technical — they were definitional. What counts as an underutilised seat? A user who logged in once in 90 days is different from a user who logs in daily but only uses one of ten licensed features. We built a configurable threshold system and exposed the logic to admins rather than hardcoding assumptions.
 
SSO data was the most reliable source but the least complete. Email parsing for renewal dates worked for ~80% of vendor invoices but broke on non-standard formats. We built a manual override and annotation layer so finance teams could correct the data without waiting for a developer to update a parser.`,
        },
        agentOutput: {
            heading: "Platform Output",
            preTitle: "Spendhound admin dashboard — live data summary",
            scanTitle: "Admin Dashboard Report",
            scanStatus: "✓ Active",
            scanPages: "Tools tracked: 140+ SaaS applications",
            scanFindings: "Renewal alerts: 23 upcoming in next 30 days",
            findings: "Potential savings identified: $340K annual",
            finding1Label: "Finding — Underutilised Licences: Notion (14 unused, 61% of total)",
            finding1Location: "Renewals → Underutilised Applications → Notion",
            finding1Type: "Type: SaaS licence optimisation recommendation",
            finding1Exposed: "Supporting data:",
            finding1Code: `{
  "tool": "Notion",
  "total_seats": 23,
  "unused_seats": 14,
  "last_login_unused": "> 90 days",
  "annual_cost": "$4,600",
  "renewal_date": "2024-08-01"
}`,
            finding1Details: "Notion has 14 seats with no login activity in the past 90 days, representing 61% of the total licence cost. Recommended action: downgrade to 9 seats at renewal, saving $2,800 annually. Similar patterns identified across Airtable, Apollo.io, and Figma.",
        },
        results: {
            heading: "Results",
            body: `Spendhound's first enterprise customers identified an average of $180K in recoverable SaaS spend within 30 days of onboarding. The renewal timeline eliminated missed renewals entirely for teams using the integration — no renewal surfaced in Spendhound was missed in the first year of live operation.
 
The underutilised licence detection was the feature that drove the most immediate ROI conversations during sales. Seeing $340K of potential savings on the dashboard in the first session made the value case without needing a pitch deck.`,
        },
        techStack: {
            heading: "Tech stack",
            items: ["React", "Node.js", "PostgreSQL", "Okta API", "QuickBooks API", "AWS Lambda"],
        },
        moreCaseStudies: ["yapz-ai-agent", "playbook-venue-booking"],
    },
    {
        id: "spendhound-renewal",
        tags: ["Web App", "AI", "SaaS", "Enterprise"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff", "#3DDC97"],
        title: "Launching YAPZ.App AI Agent on Product Hunt",
        coverBg: "#f5f5f5",
        coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        breadcrumb: "SPENDHOUND: RENEWAL MANAGEMENT PLATFORM FOR SAAS SPEND",
        badge: null,
        heroTitle: "Designing and Developing Spendhound's Core Renewal Management Experience and Integrations",
        summary: "Spendhound is a SaaS spend management platform that helps finance and IT teams track software renewals, identify redundant licenses, and consolidate underutilised tools. We designed and built the core renewal dashboard, admin experience, and integrations layer from ground zero.",
        challenge: {
            heading: "Challenge",
            body: `Enterprise software sprawl is expensive and largely invisible. Finance teams at mid-size companies were managing SaaS renewals in spreadsheets, missing renewal dates, and paying for seats that hadn't been touched in months. The data existed inside their SSO, HR, and finance tools — but no one had connected it.
 
Spendhound needed a product that surfaced upcoming renewals automatically, flagged underutilised licenses with enough context for a decision, and gave finance leads a clear view of SaaS spend without requiring an engineer to pull a report.`,
        },
        approach: {
            heading: "Approach",
            subheading: "Data first, interface second",
            body: `We started with the integration layer. Pulling structured renewal data from Okta, BambooHR, and QuickBooks gave us the raw signal. The hard work was normalising it — tool names vary across systems, contract dates live in PDF attachments, and seat counts drift as employees join and leave.
 
We built a processing pipeline that extracted renewal dates from emails and document attachments using lightweight ML classification, matched them to known vendor records, and surfaced them in the dashboard with confidence scores so finance teams knew when to verify manually versus when to trust the automation.`,
        },
        streamingSection: {
            heading: "Dashboard design and decision support",
            body: `The admin dashboard was designed around three core workflows: renewals coming up, licenses with low utilisation, and duplicate tools serving the same function. Each section gave the user enough context to act — not just a data table, but a recommendation with the supporting evidence visible.
 
The renewal timeline used a calendar-style view with urgency banding — anything renewing in the next 30 days surfaced at the top with a direct action. Underutilised licenses showed last-login dates per seat, so the decision to downsize or cancel was backed by actual usage data rather than assumptions.`,
        },
        budget: {
            heading: "Integration reliability and edge cases",
            body: `The hardest integration problems weren't technical — they were definitional. What counts as an underutilised seat? A user who logged in once in 90 days is different from a user who logs in daily but only uses one of ten licensed features. We built a configurable threshold system and exposed the logic to admins rather than hardcoding assumptions.
 
SSO data was the most reliable source but the least complete. Email parsing for renewal dates worked for ~80% of vendor invoices but broke on non-standard formats. We built a manual override and annotation layer so finance teams could correct the data without waiting for a developer to update a parser.`,
        },
        agentOutput: {
            heading: "Platform Output",
            preTitle: "Spendhound admin dashboard — live data summary",
            scanTitle: "Admin Dashboard Report",
            scanStatus: "✓ Active",
            scanPages: "Tools tracked: 140+ SaaS applications",
            scanFindings: "Renewal alerts: 23 upcoming in next 30 days",
            findings: "Potential savings identified: $340K annual",
            finding1Label: "Finding — Underutilised Licences: Notion (14 unused, 61% of total)",
            finding1Location: "Renewals → Underutilised Applications → Notion",
            finding1Type: "Type: SaaS licence optimisation recommendation",
            finding1Exposed: "Supporting data:",
            finding1Code: `{
  "tool": "Notion",
  "total_seats": 23,
  "unused_seats": 14,
  "last_login_unused": "> 90 days",
  "annual_cost": "$4,600",
  "renewal_date": "2024-08-01"
}`,
            finding1Details: "Notion has 14 seats with no login activity in the past 90 days, representing 61% of the total licence cost. Recommended action: downgrade to 9 seats at renewal, saving $2,800 annually. Similar patterns identified across Airtable, Apollo.io, and Figma.",
        },
        results: {
            heading: "Results",
            body: `Spendhound's first enterprise customers identified an average of $180K in recoverable SaaS spend within 30 days of onboarding. The renewal timeline eliminated missed renewals entirely for teams using the integration — no renewal surfaced in Spendhound was missed in the first year of live operation.
 
The underutilised licence detection was the feature that drove the most immediate ROI conversations during sales. Seeing $340K of potential savings on the dashboard in the first session made the value case without needing a pitch deck.`,
        },
        techStack: {
            heading: "Tech stack",
            items: ["React", "Node.js", "PostgreSQL", "Okta API", "QuickBooks API", "AWS Lambda"],
        },
        moreCaseStudies: ["yapz-ai-agent", "playbook-venue-booking"],
    },
];

// ===== Typing heading for the services hero (types once on mount) =====

const SERVICES_HERO_TITLE_SEGMENTS = [
    { text: "Mobile App", span: true },
    { text: " Development\u00A0" },
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

export default function MobileAppDevelopment() {
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
            <div className="mobile-app-development">
                <section class="services-hero">
                    <div class="services-hero__media" aria-hidden="true">
                        <img class="services-hero__image" src="/images/services_sub_banner.png" alt="" />
                        <div class="services-hero__overlay"></div>
                    </div>
                    <div class="services-hero__inner container">
                        <span class="hero_badge hero-anim hero-anim--1">Our Services</span>
                        <TypewriterHeading
                            segments={SERVICES_HERO_TITLE_SEGMENTS}
                            className="heading_title services-hero__title hero-anim hero-anim--2 mb-0"
                        />
                        <h1 class="heading_title services-hero__title hero-anim hero-anim--3">
                            {/* <span>Mobile App Development</span> &nbsp; */}
                            Build Better Mobile Apps
                        </h1>
                        <p class="heading_subtitle services-hero__subtitle hero-anim hero-anim--4">
                            From concept to App Store, we design, develop, and deploy enterprise-grade mobile applications across iOS, Android, and cross-platform — powered by AI and built for scale. We combine intuitive UX, robust architecture, seamless integrations, and advanced technologies to create secure, high-performance apps that drive real business growth.
                        </p>
                        <div class="services-hero__actions hero-anim hero-anim--4 mt-4">
                            <a href="#" class="btn-primary services-hero__cta">Talk To Our Experts</a>
                        </div>
                    </div>
                </section>
                <section className='our_services' style={{ background: "rgb(15 15 18)", position: 'relative' }}>
                    <div className='grid_overlay'></div>
                    <div className='services-section'>
                        <div className='row'>
                            {SERVICES.map((s, i) => (
                                <div className='col-md-4 mb-5'>
                                    <div className="service-card reveal" ref={addReveal} key={i}>
                                        <div>
                                            <div className="service-card-icon">
                                                <img src={s.icon} />
                                            </div>
                                            <div className="service-card-title">{s.title}</div>
                                            <p className="service-card-desc">{s.desc}</p>
                                            <div className="service-card-tags">
                                                {s.tags.map((t) => <span className="service-tag" key={t}>{t}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="our-work">
                    <div className="our-work__container">
                        <div className="our-work__header">
                            <div>
                                <div className='hero_badge'><span></span>Real Challenges.</div>
                                <h2 className="heading_title mb-4" style={{ color: 'white' }}>
                                    Our <span>Case Studies</span>
                                </h2>
                                <p className='heading_subtitle mt-2 mb-0'>Discover real-world success stories showcasing our expertise, strategic approach, and the impactful results we've achieved for clients across various industries.</p>
                            </div>
                            <div className="our-work__nav">
                                <button className="our-work__nav-btn our-work__nav-btn--prev" id="ourWorkPrev">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                </button>
                                <button className="our-work__nav-btn our-work__nav-btn--next" id="ourWorkNext">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={24}
                            navigation={{
                                prevEl: '#ourWorkPrev',
                                nextEl: '#ourWorkNext',
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                600: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="our-work__swiper"
                        >
                            {WORKS.map((w) => (
                                <SwiperSlide key={w.id}>
                                    <Link to={`/case-study/${w.id}`} className="our-work__card">
                                        <div className="our-work__cover" style={{ background: w.coverBg }}>
                                            <img src={w.coverImage} alt={w.title} className="our-work__cover-img" />
                                        </div>
                                        <div className="our-work__info">
                                            <div className="our-work__tags">
                                                {w.tags.map((tag, i) => (
                                                    <span
                                                        key={tag}
                                                        className="our-work__tag"
                                                        style={{ color: w.tagColors?.[i] || TAG_DEFAULT_COLOR, borderColor: w.tagColors?.[i] || TAG_DEFAULT_COLOR }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="our-work__title">{w.title}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        </>
    )
}