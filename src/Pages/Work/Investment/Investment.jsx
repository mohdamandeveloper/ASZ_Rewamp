import React, { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, prefersReducedMotion } from "framer-motion";
import { Bot, TrendingUp, Settings, Eye, Laptop, Landmark, BarChart3, Cloud, Link2, Globe, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import "./Investment.scss";

// function hexPath(cx, cy, r) {
//     return Array.from({ length: 6 }, (_, i) => {
//         const a = (Math.PI / 3) * i - Math.PI / 6;
//         return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
//     }).join(" L ").replace(/^/, "M ") + " Z";
// }

const LOGOS = [
    "World Health Org.",
    "MURAL",
    "valara",
    "WWF",
    "Root",
    "Prizm",
    "UNICEF",
    "Goji Labs",
];

const WORKS = [
    {
        id: "yapz-ai-agent",
        tags: ["Valara", "AI", "SaaS"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff"],
        title: "An All-in-One Rental Management SaaS Platform for Fleet Businesses.",
        coverBg: "#0d1f1a",
        coverImage: "https://gojilabs.com/wp-content/uploads/2026/01/Valara_750%D1%85500_x3.png",
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
        tags: ["Root Insurance", "Mobile App", "Marketplace"],
        tagColors: ["#ff6b35", "#4fc3c8", "#3DDC97"],
        title: "Making Insurance Engagement Fun Through Gamification.",
        coverBg: "#fff9c4",
        coverImage: "https://gojilabs.com/wp-content/uploads/2023/03/Root_500%D1%85500_x3.webp",
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
        tags: ["Castability", "AI", "SaaS"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff"],
        title: "Revolutionizing the Actor Training Experience Through an Intuitive Mobile App",
        coverBg: "#f5f5f5",
        coverImage: "https://gojilabs.com/wp-content/uploads/2026/01/Castability-750x500_v2.webp",
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
        tags: ["Katzkin Automotive Leather", "AI", "SaaS", "Enterprise"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff", "#3DDC97"],
        title: "Reinventing an Automotive Interior Retailers eCommerce Experience",
        coverBg: "#f5f5f5",
        coverImage: "https://gojilabs.com/wp-content/uploads/2025/12/Katzkin_500%D1%85500_x3.webp",
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
        tags: ["Intterra Group", "AI", "SaaS", "Enterprise"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff", "#3DDC97"],
        title: "Powering Emergency Response in a Real-Time Mobile Portal.",
        coverBg: "#f5f5f5",
        coverImage: "https://gojilabs.com/wp-content/uploads/2025/12/Interra_500%D1%85500_x3.webp",
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
        id: "playbook-venue-booking",
        tags: ["Root Insurance", "Mobile App", "Marketplace"],
        tagColors: ["#ff6b35", "#4fc3c8", "#3DDC97"],
        title: "Making Insurance Engagement Fun Through Gamification.",
        coverBg: "#fff9c4",
        coverImage: "https://gojilabs.com/wp-content/uploads/2023/03/Root_500%D1%85500_x3.webp",
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
        id: "yapz-ai-agent",
        tags: ["Valara", "AI", "SaaS"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff"],
        title: "An All-in-One Rental Management SaaS Platform for Fleet Businesses.",
        coverBg: "#0d1f1a",
        coverImage: "https://gojilabs.com/wp-content/uploads/2026/01/Valara_750%D1%85500_x3.png",
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
        tags: ["Root Insurance", "Mobile App", "Marketplace"],
        tagColors: ["#ff6b35", "#4fc3c8", "#3DDC97"],
        title: "Making Insurance Engagement Fun Through Gamification.",
        coverBg: "#fff9c4",
        coverImage: "https://gojilabs.com/wp-content/uploads/2023/03/Root_500%D1%85500_x3.webp",
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
        tags: ["Castability", "AI", "SaaS"],
        tagColors: ["#ff6b35", "#4fc3c8", "#a36bff"],
        title: "Revolutionizing the Actor Training Experience Through an Intuitive Mobile App",
        coverBg: "#f5f5f5",
        coverImage: "https://gojilabs.com/wp-content/uploads/2026/01/Castability-750x500_v2.webp",
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

// const TABS = ["Industries", "Services"];

// const INDUSTRIES = [
//     "All Industries",
//     "Artificial Intelligence",
//     "Community & Social Media",
//     "eCommerce & Retail",
//     "Education",
//     "Energy & Sustainability",
//     "Enterprise",
//     "Finance & Blockchain",
//     "Gaming",
//     "Government & Public Sector",
//     "Healthcare & Fitness",
//     "Human Resources & Recruiting",
//     "Insurance",
//     "Legal & Regulation Tech",
//     "Logistics & Transportation",
//     "Media & Entertainment",
//     "Nonprofit",
//     "Private Equity",
//     "Real Estate",
//     "SaaS & Productivity",
//     "Travel & Hospitality",
// ];

const CASE_STUDIES = [
    {
        id: "k-id",
        logo: "k-ID",
        category: "Legal & Regulation Tech",
        industry: "Legal & Regulation Tech",
        title: "The World's First Cross-Platform Solution for Safely Onboarding Children.",
        stats: [
            { value: "$51M", label: "Raised in Series A in 9 Months", dir: "up" },
            { value: "1,400%", label: "Increase in Team Growth", dir: "up" },
        ],
        mock: "dash",
        accent: "#6c4ef5",
    },
    {
        id: "valara",
        logo: "valara",
        category: "Logistics & Transportation",
        industry: "Logistics & Transportation",
        title: "An All-in-One Rental Management SaaS Platform for Fleet Businesses.",
        stats: [
            { value: "$5M", label: "New Revenue in First 9 Months", dir: "up" },
            { value: "32%", label: "Increase in Host Revenue", dir: "up" },
        ],
        mock: "dash2",
        accent: "#7c3aed",
    },
    {
        id: "perimeter",
        logo: "Perimeter",
        category: "Government & Public Sector",
        industry: "Government & Public Sector",
        title: "Powering Emergency Response in a Real-Time Mobile Portal.",
        stats: [
            { value: "70%", label: "Reduced Technical Debt", dir: "down" },
            { value: "350", label: "Agencies Supported Nationwide", dir: "up" },
        ],
        mock: "map",
        accent: "#d94141",
    },
    {
        id: "katzkin",
        logo: "katzkin",
        category: "eCommerce & Retail",
        industry: "eCommerce & Retail",
        title: "Reinventing an Automotive Interior Retailer's eCommerce Experience",
        stats: [
            { value: "29%", label: "Increase in Online Configuration Usage", dir: "up" },
            { value: "20%", label: "Increase in Lead Conversions", dir: "up" },
        ],
        mock: "ecom",
        accent: "#b91c1c",
    },
    {
        id: "castability",
        logo: "castability",
        category: "Media & Entertainment",
        industry: "Media & Entertainment",
        title: "Revolutionizing the Actor Training Experience Through an Intuitive Mobile App",
        stats: [
            { value: "29%", label: "Increase in Daily Active Users", dir: "up" },
            { value: "34%", label: "Lift in Casting Engagement Rate", dir: "up" },
        ],
        mock: "cast",
        accent: "#12b5a6",
    },
    // {
    //     id: "wingzee",
    //     logo: "wingzee",
    //     category: "Community & Social Media",
    //     industry: "Community & Social Media",
    //     title: "Turning Everyday Giving Into Sustained Social Impact",
    //     desc: "A donor-first mobile platform that makes charitable giving feel simpler, more trustworthy, and easier to sustain through micro-donations and transparent nonprofit discovery.",
    //     mock: "donate",
    //     accent: "#2a9df4",
    //     faded: true,
    // },
];

// const TESTIMONIALS = [
//     {
//         logo: "KCRW",
//         quote:
//             "Goji Labs was exactly what we needed. Their team brought clarity, creativity, and momentum to a project that's central to how we engage our audience. They've completely re-energized our digital experience.",
//         name: "Nathalie Hill",
//         role: "Chief Audience Officer",
//     },
//     {
//         logo: "EdChat",
//         quote:
//             "They designed and implemented a new on-demand platform that's far more accessible. Their team was professional, skilled, and responsive, giving us weekly breakdowns of completed work along the way.",
//         name: "Debbie Cravey",
//         role: "Development Manager",
//     },
//     {
//         logo: "BYOU",
//         quote:
//             "My experience with Goji Labs has been nothing but positive. The team is talented, passionate, and truly enjoyable to work with.",
//         name: "Aaron Fleisher",
//         role: "Founder",
//     },
//     {
//         logo: "k-ID",
//         quote:
//             "David, Adam, and the team were excellent. They combined a tireless work ethic with a thoughtful, collaborative process and partners all around the org loved working with them.",
//         name: "Kieran Donovan",
//         role: "CEO",
//     },
// ];

// const ArrowUpRight = (props) => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
//         <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const ArrowUp = (props) => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
//         <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const ArrowDown = (props) => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
//         <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

const PlusIcon = (props) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
);

// function CardMock({ type, accent, title }) {
//     switch (type) {
//         case "dash2":
//             return (
//                 <div className="mock-dash" style={{ background: `linear-gradient(150deg, ${accent}dd, #10101a 78%)` }}>
//                     {/* <div className="mock-dash__topbar">
//             <strong>{title}</strong>
//             <span>●●●</span>
//           </div> */}
//                     <div className="mock-dash__body">
//                         <img src="https://gojilabs.com/wp-content/uploads/2026/02/ttmc-card.webp" />
//                         {/* <h3 className="mock-dash__title">Welcome back</h3>
//             <p className="mock-dash__subtitle">One place to manage your account, products & users.</p>
//             <div className="mock-dash__grid">
//               {["Overview", "Products", "Reports", "Settings"].map((t) => (
//                 <div className="mock-dash__tile" key={t}>
//                   <strong>{t}</strong>
//                   <span>Updated recently</span>
//                 </div>
//               ))}
//             </div> */}
//                     </div>
//                 </div>
//             );
//         case "dash":
//             return (
//                 <div className="mock-dash" style={{ background: `linear-gradient(150deg, ${accent}dd, #10101a 78%)` }}>
//                     {/* <div className="mock-dash__topbar">
//             <strong>{title}</strong>
//             <span>●●●</span>
//           </div> */}
//                     <div className="mock-dash__body">
//                         <img src="https://gojilabs.com/wp-content/uploads/2026/05/wingtap-723x517-1.webp" />
//                         {/* <h3 className="mock-dash__title">Welcome back</h3>
//             <p className="mock-dash__subtitle">One place to manage your account, products & users.</p>
//             <div className="mock-dash__grid">
//               {["Overview", "Products", "Reports", "Settings"].map((t) => (
//                 <div className="mock-dash__tile" key={t}>
//                   <strong>{t}</strong>
//                   <span>Updated recently</span>
//                 </div>
//               ))}
//             </div> */}
//                     </div>
//                 </div>
//             );
//         case "map":
//             return (
//                 <div className="mock-dash" style={{ background: `linear-gradient(150deg, ${accent}dd, #10101a 78%)` }}>
//                     {/* <div className="mock-dash__topbar">
//             <strong>{title}</strong>
//             <span>●●●</span>
//           </div> */}
//                     <div className="mock-dash__body">
//                         <img src="https://gojilabs.com/wp-content/uploads/2026/02/trofi-card.webp" />
//                         {/* <h3 className="mock-dash__title">Welcome back</h3>
//             <p className="mock-dash__subtitle">One place to manage your account, products & users.</p>
//             <div className="mock-dash__grid">
//               {["Overview", "Products", "Reports", "Settings"].map((t) => (
//                 <div className="mock-dash__tile" key={t}>
//                   <strong>{t}</strong>
//                   <span>Updated recently</span>
//                 </div>
//               ))}
//             </div> */}
//                     </div>
//                 </div>
//             );
//         case "ecom":
//             return (
//                 <div className="mock-dash" style={{ background: `linear-gradient(150deg, ${accent}dd, #10101a 78%)` }}>
//                     {/* <div className="mock-dash__topbar">
//             <strong>{title}</strong>
//             <span>●●●</span>
//           </div> */}
//                     <div className="mock-dash__body">
//                         <img src="https://gojilabs.com/wp-content/uploads/2026/01/superfeel-card.webp" />
//                         {/* <h3 className="mock-dash__title">Welcome back</h3>
//             <p className="mock-dash__subtitle">One place to manage your account, products & users.</p>
//             <div className="mock-dash__grid">
//               {["Overview", "Products", "Reports", "Settings"].map((t) => (
//                 <div className="mock-dash__tile" key={t}>
//                   <strong>{t}</strong>
//                   <span>Updated recently</span>
//                 </div>
//               ))}
//             </div> */}
//                     </div>
//                 </div>
//             );
//         case "cast":
//             return (
//                 <div className="mock-dash" style={{ background: `linear-gradient(150deg, ${accent}dd, #10101a 78%)` }}>
//                     {/* <div className="mock-dash__topbar">
//             <strong>{title}</strong>
//             <span>●●●</span>
//           </div> */}
//                     <div className="mock-dash__body">
//                         <img src="https://gojilabs.com/wp-content/uploads/2026/01/schoolhouse-moolah-card.webp" />
//                         {/* <h3 className="mock-dash__title">Welcome back</h3>
//             <p className="mock-dash__subtitle">One place to manage your account, products & users.</p>
//             <div className="mock-dash__grid">
//               {["Overview", "Products", "Reports", "Settings"].map((t) => (
//                 <div className="mock-dash__tile" key={t}>
//                   <strong>{t}</strong>
//                   <span>Updated recently</span>
//                 </div>
//               ))}
//             </div> */}
//                     </div>
//                 </div>
//             );
//         case "donate":
//             return (
//                 <div className="mock-dash" style={{ background: `linear-gradient(150deg, ${accent}dd, #10101a 78%)` }}>
//                     {/* <div className="mock-dash__topbar">
//             <strong>{title}</strong>
//             <span>●●●</span>
//           </div> */}
//                     <div className="mock-dash__body">
//                         <img src="https://gojilabs.com/wp-content/uploads/2026/01/valara-card.webp" />
//                         {/* <h3 className="mock-dash__title">Welcome back</h3>
//             <p className="mock-dash__subtitle">One place to manage your account, products & users.</p>
//             <div className="mock-dash__grid">
//               {["Overview", "Products", "Reports", "Settings"].map((t) => (
//                 <div className="mock-dash__tile" key={t}>
//                   <strong>{t}</strong>
//                   <span>Updated recently</span>
//                 </div>
//               ))}
//             </div> */}
//                     </div>
//                 </div>
//             );
//         default:
//             return <div className="mock-dash" style={{ background: accent }} />;
//     }
// }

function LogoMarquee() {
    const loop = [...LOGOS, ...LOGOS];
    return (
        <div className="work__marquee">
            <motion.div
                className="work__marquee-track"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
                {loop.map((logo, i) => (
                    <div className="work__logo-pill" key={`${logo}-${i}`}>
                        {logo}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// function ChatBubble() {
//     const [open, setOpen] = useState(true);
//     if (!open) return null;
//     return (
//         <motion.div
//             className="work__chat-bubble"
//             initial={{ opacity: 0, y: 30, scale: 0.9 }}
//             animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
//             transition={{
//                 opacity: { duration: 0.5, delay: 1.1 },
//                 scale: { type: "spring", stiffness: 260, damping: 18, delay: 1.1 },
//                 y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
//             }}
//         >
//             <button className="work__chat-bubble-close" onClick={() => setOpen(false)} aria-label="Dismiss">
//                 ×
//             </button>
//             <div className="work__chat-bubble-avatar">G</div>
//             <p>Hey there, got any questions for us? We're happy to help!</p>
//         </motion.div>
//     );
// }

// function Spotlight() {
//     return (
//         <section className="work__spotlight">
//             <div className="work__spotlight-tags">
//                 <div className="work__spotlight-tag">
//                     <h3>Nonprofit</h3>
//                 </div>
//                 <div className="work__spotlight-tag work__spotlight-tag--stat">
//                     <p>26% Increase in Mobile Users</p>
//                 </div>
//             </div>

//             <div className="work__spotlight-media">
//                 <motion.div
//                     className="work__spotlight-panel"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <div className="mock-habitat">
//                         <div className="mock-habitat__card">
//                             <h4>Habitat</h4>
//                             <p>
//                                 In Canada, 84 per cent of habitats with high concentrations of at-risk species are inadequately or not
//                                 at all protected. Alongside local and national partners, WWF-Canada is working to conserve
//                                 ecologically important regions, create a network of protected areas and restore habitat across the
//                                 country.
//                             </p>
//                             <button>Learn More</button>
//                         </div>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     className="work__spotlight-panel"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6, delay: 0.12 }}
//                 >
//                     <div className="mock-wwf">
//                         <div className="mock-wwf__nav">
//                             <span>WWF · About · Wildlife · Climate · Take Action</span>
//                             <span>Donate</span>
//                         </div>
//                         <div className="mock-wwf__hero">
//                             <h3>About Us</h3>
//                         </div>
//                         <div className="mock-wwf__strip">
//                             <div className="mock-wwf__strip-item">
//                                 <strong>Give in Recognition</strong>
//                                 Honour someone by donating to WWF-Canada in their name.
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     className="work__spotlight-panel"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6, delay: 0.24 }}
//                 >
//                     <div className="mock-phone">
//                         <div className="mock-phone__frame">
//                             <div className="mock-phone__status">
//                                 <span>23:03</span>
//                                 <span>▲ ▼ ■</span>
//                             </div>
//                             <div className="mock-phone__title">About Us</div>
//                             <div className="mock-phone__img" />
//                             <div className="mock-phone__body">
//                                 <h5>Who We Are</h5>
//                                 <p>
//                                     For more than half a century, WWF-Canada has worked to protect and restore nature across the
//                                     country.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// function FilterBar({ activeTab, setActiveTab, activeFilter, setActiveFilter }) {
//     return (
//         <div className="work__filters">
//             <div className="work__filter-tabs">
//                 {TABS.map((tab) => (
//                     <motion.button
//                         key={tab}
//                         className={`work__filter-tab ${activeTab === tab ? "is-active" : ""}`}
//                         onClick={() => setActiveTab(tab)}
//                         whileTap={{ scale: 0.96 }}
//                     >
//                         {tab}
//                         {activeTab === tab && (
//                             <motion.span
//                                 className="work__filter-tab__underline"
//                                 layoutId="tab-underline"
//                                 transition={{ type: "spring", stiffness: 420, damping: 34 }}
//                             />
//                         )}
//                     </motion.button>
//                 ))}
//             </div>

//             <div className="work__filter-pills">
//                 {INDUSTRIES.map((name) => {
//                     const active = activeFilter === name;
//                     return (
//                         <motion.button
//                             key={name}
//                             className={`work__filter-pill ${active ? "is-active" : ""}`}
//                             onClick={() => setActiveFilter(name)}
//                             whileHover={{ scale: 1.035 }}
//                             whileTap={{ scale: 0.96 }}
//                         >
//                             {active && (
//                                 <motion.span
//                                     layoutId="pill-bg"
//                                     className="work__filter-pill__bg"
//                                     transition={{ type: "spring", stiffness: 420, damping: 34 }}
//                                 />
//                             )}
//                             {name}
//                         </motion.button>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// function CaseStudyCard({ study, index }) {
//     const isRight = index % 2 === 1; // reserved for future alternating layouts
//     return (
//         <motion.article
//             className={`work__card ${study.faded ? "is-faded" : ""}`}
//             initial={{ opacity: 0, y: 48 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             whileHover={study.faded ? undefined : { y: -6 }}
//             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//         >
//             <div className="work__card-content">
//                 <motion.div
//                     className="work__card-top"
//                     initial={{ opacity: 0, x: -12 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, amount: 0.6 }}
//                     transition={{ duration: 0.4, delay: 0.1 }}
//                 >
//                     <span className="work__card-logo" style={{ color: study.accent }}>
//                         {study.logo}
//                     </span>
//                     <span className="work__card-category">{study.category}</span>
//                 </motion.div>

//                 <h3 className="work__card-title">{study.title}</h3>

//                 {study.desc && <p className="work__card-desc">{study.desc}</p>}

//                 {study.stats && (
//                     <div className="work__card-stats">
//                         {study.stats.map((s, i) => (
//                             <motion.div
//                                 className="work__card-stat"
//                                 key={s.label}
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true, amount: 0.6 }}
//                                 transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
//                             >
//                                 <h4 className={s.dir === "up" ? "is-up" : "is-down"}>
//                                     <motion.span
//                                         initial={{ scale: 0.6, opacity: 0 }}
//                                         whileInView={{ scale: 1, opacity: 1 }}
//                                         viewport={{ once: true, amount: 0.6 }}
//                                         transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.25 + i * 0.08 }}
//                                         style={{ display: "inline-flex" }}
//                                     >
//                                         {s.dir === "up" ? <ArrowUp /> : <ArrowDown />}
//                                     </motion.span>
//                                     {s.value}
//                                 </h4>
//                                 <p>{s.label}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 )}

//                 <motion.button
//                     className={`work__card-cta ${study.faded ? "is-disabled" : ""}`}
//                     whileHover={study.faded ? undefined : { x: 2 }}
//                     whileTap={study.faded ? undefined : { scale: 0.98 }}
//                 >
//                     Read Case Study
//                     <ArrowUpRight />
//                 </motion.button>
//             </div>

//             <motion.div
//                 className="work__card-media"
//                 whileHover={study.faded ? undefined : "hover"}
//                 initial="rest"
//             >
//                 <motion.div
//                     variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
//                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                     style={{ width: "100%", height: "100%" }}
//                 >
//                     <CardMock type={study.mock} accent={study.accent} title={study.logo} />
//                 </motion.div>
//             </motion.div>
//         </motion.article>
//     );
// }

function Testimonials() {
    return (
        <section className="work__testimonials">
            <motion.h2
                className="work__testimonials-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                What Our Partners Are Saying:
            </motion.h2>

            <div className="work__testimonial-track">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div
                        className="work__testimonial-card"
                        key={t.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover="hover"
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                        <div className="work__testimonial-card-logo">{t.logo}</div>
                        <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                        <div className="work__testimonial-card-person">
                            <motion.div
                                className="work__testimonial-card-avatar"
                                variants={{ rest: { scale: 1 }, hover: { scale: 1.1, rotate: 6 } }}
                                initial="rest"
                                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                            />
                            <div>
                                <div className="work__testimonial-card-name">{t.name}</div>
                                <div className="work__testimonial-card-role">{t.role}</div>
                            </div>
                        </div>
                        <div className="work__testimonial-card-footer">
                            Learn More
                            <motion.span
                                variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
                                initial="rest"
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                style={{ display: "inline-flex" }}
                            >
                                <ArrowUpRight />
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function Investment() {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState("Industries");
    const [activeFilter, setActiveFilter] = useState("All Industries");
    const [showAll, setShowAll] = useState(false);

    const ourWorkRef = useRef(null);
    const { scrollYProgress: workScrollProgress } = useScroll({
        target: ourWorkRef,
        offset: ["start 100%", "start 40%"],
    });
    const workSmoothProgress = useSpring(workScrollProgress, {
        stiffness: 140,
        damping: 30,
        mass: 0.4,
        restDelta: 0.001,
    });
    const workCarouselY = useTransform(workSmoothProgress, [0, 1], prefersReducedMotion ? [0, 0] : [70, 0]);
    const workCarouselScale = useTransform(workSmoothProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.94, 1]);

    const filtered = useMemo(() => {
        if (activeFilter === "All Industries") return CASE_STUDIES;
        return CASE_STUDIES.filter((c) => c.industry === activeFilter);
    }, [activeFilter]);

    const visible = showAll ? filtered : filtered.slice(0, 6);

    return (
        <div className="investment">

            {/* <div className="work__bg-grid" aria-hidden="true" /> */}
            <div className="work__glow" aria-hidden="true" />

            {/* <header className="work__hero">
                <div className="work__hero-inner">
                    <motion.h1
                        className="work__hero-heading"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Proof, Not Promises
                        <motion.span
                            className="dot"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            .
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className="work__hero-sub"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                        We don't just talk about outcomes, we build them. These case studies show how we've partnered with teams
                        to solve complex problems, align strategy, and ship real products. The result is work that scales,
                        performs, and gets it right from day one.
                    </motion.p>
                </div>

                <LogoMarquee />
            </header> */}
            {/* <section class="hero_work work-hero">
                <div class="work-hero__stripes" aria-hidden="true">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div class="work-hero__inner">
                    <div class="work-hero__content">
                        <h1 class="heading_title">
                            <span>Custom software solutions built</span> for scale, performance, and reliability
                        </h1>

                        <p class="work-hero__desc">
                            We engineer tailored software and technology platforms that streamline
                            operations and give your users fast, secure, and dependable digital
                            experiences — from idea to production.
                        </p>

                        <div class="work-hero__actions">
                            <Link to="/contact" class="btn-cta btn-primary">
                                <span>Get In Touch</span>
                                <svg class="btn-cta__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    <div class="work-hero__visual" aria-hidden="true">
                            <img src="/images/case_studies.jpg" />
                    </div>
                </div>
            </section> */}
            <section class="services-hero">
                {/* <div class="services-hero__bg" aria-hidden="true"></div> */}

                <div class="services-hero__media" aria-hidden="true">
                    <img
                        class="services-hero__image"
                        src="/images/our_work_hero.jpg"
                        alt=""
                    />
                    <div class="services-hero__overlay"></div>
                </div>

                <div class="services-hero__inner container">

                    <span class="hero_badge">Investment</span>

                    <h1 class="heading_title services-hero__title">
                        <span>Engineering the Future</span> <br />of Intelligent Investing
                    </h1>

                    <p class="heading_subtitle services-hero__subtitle">
                        We develop secure, data-driven platforms that connect investment operations, analytics, and automation—helping businesses optimize decisions, improve efficiency, and adapt to evolving financial markets.
                    </p>

                    <div class="services-hero__actions">
                        <a href="#" class="btn-primary services-hero__cta">Talk To Our Experts</a>
                    </div>
                </div>
            </section>
            {/* <section class="hero_work cs">
                <div class="cs__inner">
                    <div class="cs__content">
                        <h1 class="heading_title">
                            <span>Real challenges.</span> <br />Thoughtful solutions.
                        </h1>

                        <p class="heading_subtitle">
                            Explore how we've helped businesses across industries overcome
                            challenges, modernize their operations, and achieve meaningful
                            results with our technology solutions.
                        </p>

                        <div class="cs__grid">

                            <div class="cs__card">
                                <h3 class="cs__card-title">Business Impact</h3>
                                <p class="cs__card-text">
                                    Delivering measurable results that drive growth, efficiency,
                                    and customer satisfaction.
                                </p>
                                <span class="cs__stat">25+ Successful Projects</span>
                            </div>

                            <div class="cs__card">
                                <h3 class="cs__card-title">Diverse Solutions</h3>
                                <p class="cs__card-text">
                                    Custom software, web, mobile, cloud, and AI solutions tailored
                                    to unique business needs.
                                </p>
                                <span class="cs__stat">10+ Industries Served</span>
                            </div>
                        </div>

                        <a href="#" class="btn btn-primary">
                            <span>Connect with us</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>

                    </div>

                    <div class="cs__visual" aria-hidden="true">
                        <div class="cs__photo">
                            <img src="/images/case_studies.jpg" />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="our-work" ref={ourWorkRef}>
                <div className="our-work__container container">
                    <div className="our-work__layout">
                        {/* <div
                            className="our-work__intro"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div>
                                <div className='hero_badge'><span></span>Real Challenges.</div>
                                <h2 className="heading_title">
                                    Our <span>Work</span>
                                </h2>
                                <p className='our-work__desc heading_subtitle'>We don't just talk about outcomes, we build them. These case studies show how we've partnered with teams to solve complex problems, align strategy, and ship real products. The result is work that scales, performs, and gets it right from day one.</p>
                            </div>
                           
                        </div> */}
                        <div className="row">
                            {WORKS.map((w, i) => (
                                <div className="col-md-4 mb-5">
                                    <div
                                        className="our-work__card-wrap"
                                    >
                                        <Link to={`/case-study/${w.id}`} className="our-work__card">
                                            <div className="our-work__cover" style={{ background: w.coverBg }}>
                                                <img src={w.coverImage} alt={w.title} className="our-work__cover-img" />
                                                <span className="our-work__cover-arrow">
                                                    <ArrowRight size={22} />
                                                </span>
                                            </div>
                                            <div className="our-work__info">
                                                <span className="our-work__eyebrow">{w.tags?.[0]}</span>
                                                <p className="our-work__card-title">{w.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="our-work__carousel">
                            <Swiper
                                modules={[Navigation]}
                                loop={true}
                                slidesPerView={1.5}
                                spaceBetween={28}
                                navigation={{
                                    prevEl: '#ourWorkPrev',
                                    nextEl: '#ourWorkNext',
                                }}
                                breakpoints={{
                                    0: { slidesPerView: 1.08, spaceBetween: 16 },
                                    600: { slidesPerView: 1.3, spaceBetween: 20 },
                                    1024: { slidesPerView: 2, spaceBetween: 28 },
                                }}
                                className="our-work__swiper"
                            >
                                {WORKS.map((w, i) => (
                                    <SwiperSlide key={w.id}>
                                        <div
                                            className="our-work__card-wrap"
                                        >
                                            <Link to={`/case-study/${w.id}`} className="our-work__card">
                                                <div className="our-work__cover" style={{ background: w.coverBg }}>
                                                    <img src={w.coverImage} alt={w.title} className="our-work__cover-img" />
                                                    <span className="our-work__cover-arrow">
                                                        <ArrowRight size={22} />
                                                    </span>
                                                </div>
                                                <div className="our-work__info">
                                                    <span className="our-work__eyebrow">{w.tags?.[0]}</span>
                                                    <p className="our-work__card-title">{w.title}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <section className="work__list">
                <AnimatePresence mode="popLayout">
                    {visible.map((study, i) => (
                        <CaseStudyCard study={study} index={i} key={study.id} />
                    ))}
                </AnimatePresence>
            </section> */}

            {!showAll && filtered.length > visible.length && (
                <motion.div
                    className="work__showmore-wrap"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.button
                        className="work__showmore"
                        onClick={() => setShowAll(true)}
                        whileHover="hover"
                        whileTap={{ scale: 0.97 }}
                        initial="rest"
                    >
                        Show More
                        <motion.span
                            variants={{ rest: { rotate: 0 }, hover: { rotate: 90 } }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: "inline-flex" }}
                        >
                            <PlusIcon />
                        </motion.span>
                    </motion.button>
                </motion.div>
            )}

            {/* <Testimonials /> */}

            {/* <ChatBubble /> */}
        </div>
    );
}