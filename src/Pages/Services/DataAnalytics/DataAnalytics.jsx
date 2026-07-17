import { useRef, useEffect } from 'react';
import './DataAnalytics.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';

const SERVICES = [
  {
    icon: "📊",
    title: "SAS Based Application",
    desc: "Develop enterprise-grade analytics solutions using SAS to automate reporting, perform statistical analysis, and generate actionable insights that support informed business decisions.",
    tags: ["SAS", "Statistical Analysis", "Business Intelligence", "Reporting"],
    emoji: "📈",
  },
  {
    icon: "🗄️",
    title: "Big Data Analysis",
    desc: "Unlock the value of large and complex datasets through advanced big data analytics. We identify trends, patterns, and opportunities that help businesses optimize performance and make data-driven decisions.",
    tags: ["Big Data", "Data Mining", "Predictive Analytics", "Hadoop"],
    emoji: "🔍",
  },
  {
    icon: "🧠",
    title: "Systematic Decision",
    desc: "Leverage data-driven decision-making frameworks that combine analytics, forecasting, and business intelligence to improve operational efficiency and strategic planning.",
    tags: ["Decision Support", "Business Intelligence", "Forecasting", "Data Insights"],
    emoji: "🎯",
  },
  {
    icon: "🔐",
    title: "Security",
    desc: "Protect sensitive business data with secure analytics solutions, governance frameworks, access controls, and compliance-driven data security practices across your organization.",
    tags: ["Data Security", "Compliance", "Governance", "Risk Management"],
    emoji: "🛡️",
  },
  {
    icon: "⚙️",
    title: "Data Processing",
    desc: "Transform raw data into clean, structured, and reliable datasets through automated data processing, integration, cleansing, and ETL workflows for accurate analysis.",
    tags: ["ETL", "Data Cleansing", "Data Integration", "Automation"],
    emoji: "🔄",
  },
  {
    icon: "📑",
    title: "Reporting",
    desc: "Build interactive dashboards and automated reports that provide real-time visibility into key business metrics, enabling faster and more informed decision-making.",
    tags: ["Dashboards", "Power BI", "Data Visualization", "KPI Reports"],
    emoji: "📉",
  },
];

// const INDUSTRIES = [
//     { icon: "🏥", name: "Healthcare & MedTech" },
//     { icon: "🛒", name: "E-Commerce & Retail" },
//     { icon: "🏦", name: "Fintech & Banking" },
//     { icon: "📚", name: "EdTech & E-Learning" },
//     { icon: "🚚", name: "Logistics & Supply Chain" },
//     { icon: "🎮", name: "Gaming & Entertainment" },
//     { icon: "🏨", name: "Travel & Hospitality" },
//     { icon: "🏗️", name: "Real Estate & PropTech" },
//     { icon: "🌱", name: "AgriTech & Sustainability" },
//     { icon: "🔧", name: "Field Service & IoT" },
//     { icon: "💼", name: "Enterprise & SaaS" },
//     { icon: "🍔", name: "Food & Restaurant Tech" },
// ];

// const TECHS = [
//     { icon: "🧠", name: "Artificial Intelligence (AI)" },
//     { icon: "✨", name: "Generative AI" },
//     { icon: "📊", name: "Machine Learning (ML)" },
//     { icon: "🌐", name: "Internet of Things (IoT)" },
//     { icon: "☁️", name: "Cloud" },
//     { icon: "⛓️", name: "Blockchain" },
//     { icon: "💰", name: "Cryptocurrency" },
//     { icon: "🌌", name: "Metaverse" },
//     { icon: "🥽", name: "AR / VR" },
//     { icon: "📈", name: "Data Analytics" },
// ];

// const PROCESS_STEPS = [
//     {
//         title: "Discovery & Strategy",
//         desc: "We start by understanding your goals, audience, and competitive landscape. This phase produces a detailed product brief, tech stack recommendation, and MVP scope.",
//         deliverables: ["Product Brief", "Tech Stack", "MVP Scope"],
//     },
//     {
//         title: "UX Research & Wireframing",
//         desc: "Our designers map user journeys, define information architecture, and build low-fidelity wireframes — validated with real users before a pixel of UI is drawn.",
//         deliverables: ["User Flows", "Wireframes", "IA Map"],
//     },
//     {
//         title: "UI Design & Prototyping",
//         desc: "High-fidelity, clickable prototypes in Figma. Every micro-interaction is designed before development starts, so engineers build with clarity and confidence.",
//         deliverables: ["Design System", "Prototype", "Figma File"],
//     },
//     {
//         title: "Agile Development",
//         desc: "Two-week sprints, daily standups, and continuous integration. You see working software every two weeks — not a reveal at the end of the project.",
//         deliverables: ["Sprint Demos", "CI/CD Pipeline", "Code Reviews"],
//     },
//     {
//         title: "QA & Testing",
//         desc: "Multi-device testing across real hardware, automated test suites, performance benchmarking, and security audits. We test what users actually do — and the edge cases they don't.",
//         deliverables: ["Test Reports", "Performance Audit", "Security Scan"],
//     },
//     {
//         title: "Launch & Post-Launch Support",
//         desc: "App store submission, phased rollout, crash monitoring, and 30-day post-launch support included in every engagement. We stay on until the app is stable and growing.",
//         deliverables: ["App Store Listing", "Monitoring", "30-day Support"],
//     },
// ];

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

// const FEATURES = [
//     { icon: "🏥", title: "Healthcare & MedTech", desc: "Empowering patient care with secure, intelligent, and data-driven healthcare solutions." },
//     { icon: "🛒", title: "E-Commerce & Retail", desc: "Driving seamless shopping experiences through scalable and customer-centric digital platforms." },
//     { icon: "🏦", title: "Fintech & Banking", desc: "Delivering secure, compliant, and innovative financial solutions for the digital economy." },
//     { icon: "📚", title: "EdTech & E-Learning", desc: "Transforming education with interactive, accessible, and personalized learning experiences." },
//     { icon: "🚚", title: "Logistics & Supply Chain", desc: "Optimizing operations with real-time tracking, automation, and supply chain intelligence." },
//     { icon: "🎮", title: "Gaming & Entertainment", desc: "Creating immersive, engaging, and high-performance digital entertainment experiences." },
//     { icon: "🏨", title: "Travel & Hospitality", desc: "Enhancing guest experiences with smart booking, personalization, and travel management solutions." },
//     { icon: "🌱", title: "AgriTech & Sustainability", desc: "Leveraging technology to improve agricultural productivity and promote sustainable growth." },
//     { icon: "🔧", title: "Field Service & IoT", desc: "Connecting devices, assets, and teams with intelligent IoT-powered field service solutions." },
// ];

// const WHY_FEATURES = [
//     { icon: "🎯", title: "Product Thinking, Not Just Code", desc: "We question requirements, challenge assumptions, and focus on outcomes — not output." },
//     { icon: "🔄", title: "Continuous Delivery", desc: "Working software every two weeks. You're never waiting months to see progress." },
//     { icon: "📐", title: "Design-Driven Development", desc: "Every app we build starts with deep UX research and a tested prototype." },
//     { icon: "🛡️", title: "Security-First Engineering", desc: "OWASP top-10 mitigations, encrypted storage, and penetration testing on every release." },
//     { icon: "📊", title: "Built-In Analytics & Monitoring", desc: "Crash reporting, user analytics, and performance dashboards ready from day one." },
//     { icon: "🤝", title: "Transparent, Collaborative Process", desc: "Slack access to your team, weekly reporting, and no surprises on scope or cost." },
// ];

export default function DataAnalytics() {
    const sectionRef = useRef(null);
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
            <div className="ux-ui-development">
                {/* <section className="hero-section" ref={sectionRef} aria-label="ASZ Technologies hero banner">
                    <HeroSectionServices
                        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
                        title={
                            <>
                                Mobile Application
                            </>
                        }
                        subtitle="Modernize outdated systems with custom Software development services designed to streamline operations, improve scalability, and accelerate business growth."
                        ctaText="Build a Custom Web App"
                        ctaHref="#contact"
                        features={[
                            "SEO & User Friendly UI Designs",
                            "Certified Web Designers & Developers",
                            "Bug-free & Standardized Code",
                            "Unmatched User Experience",
                        ]}
                    />
                </section> */}
                <section className="hero">
                    <div className="hero-bg-glow" />
                    <div className="hero-bg-glow2" />
                    <div className="hero-grid-overlay" />

                    <div className="hero-content">
                        <div className="hero-text">
                            {/* <div className="hero_badge"><span />UX/UI Design</div> */}
                            <h1 className="heading_title" style={{ color: 'white' }}>
                                Accurate<span> Data Analytics Services</span>
                            </h1>
                            <p className="heading_subtitle">
                                ASZ technologies has years of experience implementing Business Intelligence tools and aligning them with strategic enterprise goals. ASZ technologies dedicated analytics teams have empowered clients across the globe with the insight needed for critical decision making.
                            </p>
                            <ul class="bnrlst mb-4">
                                <li>Strategic Technology Planning</li>
                                <li>Digital Transformation</li>
                                <li>Cloud & Infrastructure Optimization</li>
                            </ul>
                            <div className="hero-ctas">
                                <button className="btn-primary">Get in Touch →</button>
                                {/* <button className="btn-secondary">View Portfolio</button> */}
                            </div>
                        </div>

                        <div className="hero-visual">
                            {/* <div className="orbit-ring r1" />
                            <div className="orbit-ring r2" /> */}
                            {/* <div className="phone-mockup-wrap">
                                <div className="phone-outer">
                                    <div className="phone-screen">
                                        <img src='/images/asz/Gemini_Generated_Image_mfh661mfh661mfh6.png' />
                                        <div className="phone-notch" />
                                        <div className="phone-ui-bar w80" />
                                        <div className="phone-ui-bar w60" />
                                        <div className="phone-ui-card">
                                            <div className="phone-ui-dot-row">
                                                <div className="phone-ui-dot" />
                                                <div className="phone-ui-dot blue" />
                                                <div className="phone-ui-dot green" />
                                            </div>
                                            <div className="phone-ui-bar w90" />
                                            <div style={{ height: 8 }} />
                                            <div className="phone-ui-bar w60" />
                                        </div>
                                        <div style={{ height: 12 }} />
                                        <div className="phone-ui-bar w80" />
                                        <div style={{ height: 8 }} />
                                        <div className="phone-ui-card">
                                            <div className="phone-ui-bar w90" />
                                            <div style={{ height: 8 }} />
                                            <div className="phone-ui-bar w60" />
                                        </div>
                                        <div style={{ height: 12 }} />
                                        <div className="phone-ui-bar w80" />
                                    </div>
                                </div>
                                <div className="phone-float-badge top-right">🍎 iOS Ready</div>
                                <div className="phone-float-badge bottom-left">🤖 Android Ready</div>
                            </div> */}
                            <img src='/images/data-analytics.jpg' />
                        </div>
                    </div>
                </section>

                {/* ── 2. SERVICES (STICKY) ── */}
                <section className='our_services' style={{ background: "#0a0a0f" }}>
                    <div className="services-section">
                        <div className="services-left">
                            {/* <div className="hero_badge">Our Services</div> */}
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                <span>Data Analytics</span> That Drives Smarter Business Decisions
                            </h2>
                            <p className="heading_subtitle">
                                Transform your data into actionable insights with our end-to-end data analytics solutions. We help businesses collect, process, visualize, and analyze data to uncover trends, optimize performance, and support informed decision-making.
                            </p>
                            <div className="services-left-cta">
                                <button className="btn-primary">Discuss Your Project →</button>
                                <div className="services-trust-row mt-5">
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">250+</div>
                                        <div className="services-trust-label">Analytics Projects</div>
                                    </div>
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">99%</div>
                                        <div className="services-trust-label">Data Accuracy</div>
                                    </div>
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">12+</div>
                                        <div className="services-trust-label">Years of Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-right">
                            {SERVICES.map((s, i) => (
                                <div className="service-card reveal" ref={addReveal} key={i}>
                                    <div>
                                        <div className="service-card-icon">{s.icon}</div>
                                        <div className="service-card-title">{s.title}</div>
                                        <p className="service-card-desc">{s.desc}</p>
                                        <div className="service-card-tags">
                                            {s.tags.map((t) => <span className="service-tag" key={t}>{t}</span>)}
                                        </div>
                                    </div>
                                    <div className="service-card-img">{s.emoji}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 3. ABOUT MOBILE DEV ── */}
                {/* <section className="about-section">
                    <div className="about-inner">
                        <div className="about-grid">
                            <div className="about-visual reveal" ref={addReveal}>
                                <div className="about-main-card">
                                    <div style={{ fontSize: 64, marginBottom: 24 }}>📱</div>
                                    <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 22, fontWeight: 700, color: "#f0f0f8", marginBottom: 12 }}>
                                        What Does Mobile App Development Actually Mean?
                                    </h3>
                                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#7878a0" }}>
                                        It's the end-to-end process of conceiving, designing, building, testing, and shipping
                                        software applications that run on mobile operating systems — and beyond. Today that includes
                                        wearables, tablets, and connected devices.
                                    </p>
                                    <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                        {["iOS", "Android", "Cross-Platform", "Wearables"].map(t => (
                                            <span key={t} style={{ background: "rgba(230,100,30,0.08)", border: "1px solid rgba(230,100,30,0.2)", color: "#e6641e", padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500 }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="about-accent-box">
                                    <div className="about-accent-num">500+</div>
                                    <div className="about-accent-label">Team Members</div>
                                </div>
                            </div>

                            <div className="reveal" ref={addReveal}>
                                <div className="hero_badge">About Mobile Development</div>
                                <h2 className="heading_title" style={{ color: 'white' }}>
                                    Mobile Apps Are the <span>Front Door</span> to Your Business
                                </h2>
                                <p className="heading_subtitle">
                                    Over 90% of mobile time is spent inside apps. A well-built mobile application doesn't just represent
                                    your brand — it IS the primary way most of your customers experience it.
                                </p>
                                <p className="heading_subtitle">
                                    At ASZ, we build mobile products that drive measurable business outcomes: user retention, conversion,
                                    and lifetime value — not just app downloads. We think like product owners, not just engineers.
                                </p>

                                <div className="about-process-steps">
                                    {[
                                        ["Ideation to Launch", "Full-lifecycle partnership from idea to App Store approval."],
                                        ["Ongoing Optimization", "Post-launch A/B testing, performance tuning, and feature iteration."],
                                        ["Platform Compliance", "App Store & Play Store guidelines handled — rejections avoided."],
                                        ["Real Device Testing", "Tests on 200+ physical devices before any public release."],
                                    ].map(([title, desc], i) => (
                                        <div className="about-step" key={i}>
                                            <div className="about-step-num">0{i + 1}</div>
                                            <div className="about-step-text">
                                                <strong>{title}</strong>
                                                <span>{desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="about-pills">
                                    {["Swift", "Kotlin", "Flutter", "React Native", "TypeScript", "Firebase", "AWS Amplify", "GraphQL"].map(p => (
                                        <span className="about-pill" key={p}>{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ── 7. FEATURES (BOXY) ── */}
                {/* <section className="features-section">
                    <div className="features-inner">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Industries</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Mobile Apps <span>We Develop for<br /> Various Industries</span>
                            </h2>
                            <p className="heading_subtitle">
                                Every feature we build is chosen with purpose — to increase engagement, drive conversion, or reduce churn. No vanity functionality.
                            </p>
                        </div>
                        <div className="features-boxy-grid reveal" ref={addReveal}>
                            {FEATURES.map((f, i) => (
                                <div className="feature-box" key={i}>
                                    <div className="feature-box-icon">{f.icon}</div>
                                    <div className="feature-box-title">{f.title}</div>
                                    <p className="feature-box-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* ── 4. INDUSTRIES ── */}
                {/* <section style={{ padding: "100px 40px", background: "#0a0a0f" }}>
                    <div className="industries-section" style={{ padding: 0 }}>
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Industries</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Mobile Apps <span>We Develop for <br />Various Industries</span>
                            </h2>
                            <p className="heading_subtitle">
                                Deep domain expertise across verticals — we know your industry's regulations, user expectations, and competitive landscape before we write a line of code.
                            </p>
                        </div>
                        <div className="industries-grid">
                            {INDUSTRIES.map((ind, i) => (
                                <div className="industry-card reveal" ref={addReveal} key={i}
                                    style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                                    <span className="industry-icon">{ind.icon}</span>
                                    <div className="industry-name">{ind.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* ── 5. TECHNOLOGIES ── */}
                {/* <section className="tech-section">
                    <div className="tech-inner">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Advanced Technologies</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Advanced Technologies<span>We Use to Build Future-Ready Apps</span>
                            </h2>
                            <p className="heading_subtitle">
                                We don't bolt on buzzwords. Every technology in our stack is chosen because it solves a real problem for your users or your business.
                            </p>
                        </div>
                        <div className="tech-grid">
                            {TECHS.map((tech, i) => (
                                <div className="tech-card reveal" ref={addReveal} key={i}
                                    style={{ transitionDelay: `${(i % 5) * 0.07}s` }}>
                                    <span className="tech-icon">{tech.icon}</span>
                                    <div className="tech-name">{tech.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* ── 6. PROCESS ── */}
                {/* <section style={{ background: "#0a0a0f" }}>
                    <div className="process-section">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Our Process</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                <span>Our Proven</span> Mobile App Development <span>Process</span>
                            </h2>
                            <p className="heading_subtitle">
                                No black boxes. No months of silence. Our process gives you visibility, predictability, and working software at every stage.
                            </p>
                        </div>
                        <div className="process-timeline">
                            {PROCESS_STEPS.map((step, i) => (
                                <div className="process-step reveal" ref={addReveal} key={i}>
                                    <div className="process-step-left">
                                        <div className="process-step-num">{String(i + 1).padStart(2, "0")}</div>
                                        <div className="process-step-line" />
                                    </div>
                                    <div className="process-step-content">
                                        <div className="process-step-title">{step.title}</div>
                                        <p className="process-step-desc">{step.desc}</p>
                                        <div className="process-step-deliverables">
                                            {step.deliverables.map(d => <span className="deliverable-tag" key={d}>{d}</span>)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

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

                {/* ── 8. WHY ASZ ── */}
                {/* <section style={{ background: "#0a0a0f" }}>
                    <div className="why_section">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Why ASZ</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Why Businesses Choose ASZ <br /><span>for Mobile App Development</span>
                            </h2>
                            <p className="heading_subtitle">
                                We've built apps used by millions. Here's what makes our approach different from every other agency you've talked to.
                            </p>
                        </div>

                        <div className="why-grid">
                            <div className="reveal" ref={addReveal}>
                                <h3 className="heading_title" style={{ color: 'white', fontSize: '24px', fontWeight: '600', lineHeight: '1.5' }}>
                                    We Build Apps That Grow Businesses — Not Just Ship Software
                                </h3>
                                <p className="heading_subtitle">
                                    Most agencies hand you a finished app and disappear. We stay invested in your product's success —
                                    because our reputation depends on apps that perform in the market, not just in the demo.
                                </p>
                                <div className="why-cta-block">
                                    <div className="why-cta-text">
                                        <strong>Ready to build your app?</strong>
                                        <span>Free 30-minute strategy call<br /> — no strings attached.</span>
                                    </div>
                                    <button className="btn-primary">Book a Call →</button>
                                </div>
                            </div>

                            <div className="why-right reveal" ref={addReveal}>
                                {[
                                    ["200+", "Apps Launched Globally"],
                                    ["98%", "Client Retention Rate"],
                                    ["12+", "Years of Mobile Excellence"],
                                    ["50+", "Industries Served"],
                                ].map(([num, label], i) => (
                                    <div className="why-stat-card" key={i}>
                                        <div className="why-stat-num">{num}</div>
                                        <div className="why-stat-label">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="why-features-list">
                            {WHY_FEATURES.map((f, i) => (
                                <div className="why-feature" key={i}>
                                    <div className="why-feature-icon">{f.icon}</div>
                                    <div>
                                        <div className="why-feature-title">{f.title}</div>
                                        <p className="why-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    )
}