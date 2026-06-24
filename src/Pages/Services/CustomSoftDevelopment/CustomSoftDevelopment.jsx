import { useRef, useEffect, useState } from 'react';
import {
    Search,
    FileSignature,
    ClipboardList,
    Rocket,
    Code2,
    ShieldCheck,
    UploadCloud,
    LifeBuoy,
} from "lucide-react";
import './CustomSoftDevelopment.scss';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';
import TiltedCard from '../../../Common/TiltedCards/TiltedCard';

// ─── ParticleCanvas component ─────────────────────────────────────────────────
function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const PARTICLE_COUNT = 70;
        let particles = [];
        let rafId;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        function initParticles() {
            particles = Array.from(
                { length: PARTICLE_COUNT },
                () => new Particle(canvas)
            );
        }

        function drawConnections() {
            const maxDist = 90;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(100,160,255,${(1 - d / maxDist) * 0.12})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
        }

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawConnections();
            particles.forEach((p) => {
                p.update();
                p.draw(ctx);
            });
            rafId = requestAnimationFrame(loop);
        }

        function handleResize() {
            resize();
            initParticles();
        }

        resize();
        initParticles();
        loop();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
}

// ─── ServiceCard component ────────────────────────────────────────────────────
function ServiceCard({ title, bgImage, highlight, description, icon, detailIcon }) {
    const lines = title.split("\n");

    return (
        <article className="card">
            {/* Background */}
            <div className="card__bg">
                <div
                    className="card__bg-image"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(6,13,31,0.30) 0%, rgba(6,13,31,0.80) 100%), url('${bgImage}')`,
                    }}
                />
                <div className="card__overlay" />
            </div>

            {/* Default icon */}
            <div className="card__icon">{icon}</div>

            {/* Default title */}
            <h3 className="card__title">
                {lines.map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < lines.length - 1 && <br />}
                    </span>
                ))}
            </h3>

            {/* Hover details panel */}
            <div className="card__details">
                <div className="card__details-icon">{detailIcon}</div>
                <p>
                    Our custom{" "}
                    <span className="highlight">{highlight}</span>
                    {description}
                </p>
            </div>
        </article>
    );
}

const CARDS = [
    {
        id: "banking",
        title: "Banking Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
        highlight: "banking software development service",
        description:
            " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
                <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
                <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
                <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
                <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
        highlight: "healthcare software development service",
        description:
            " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
                <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
                <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "banking",
        title: "Banking Software \n Development",
        bgImage:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
        highlight: "banking software development service",
        description:
            " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
                <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
                <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
                <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
                <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
        highlight: "healthcare software development service",
        description:
            " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
                <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
                <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "banking",
        title: "Banking Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
        highlight: "banking software development service",
        description:
            " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
                <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
                <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
                <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
                <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
        highlight: "healthcare software development service",
        description:
            " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
                <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
                <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "banking",
        title: "Banking Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
        highlight: "banking software development service",
        description:
            " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
                <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
                <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
                <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
                <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
        highlight: "healthcare software development service",
        description:
            " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
                <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
                <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "banking",
        title: "Banking Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
        highlight: "banking software development service",
        description:
            " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
                <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
                <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
                <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
                <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
        highlight: "healthcare software development service",
        description:
            " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
                <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
                <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "banking",
        title: "Banking Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
        highlight: "banking software development service",
        description:
            " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
                <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
                <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
                <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
                <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
                <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
                <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
    {
        id: "healthcare",
        title: "Healthcare Software\nDevelopment",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
        highlight: "healthcare software development service",
        description:
            " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
                <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
                <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
        detailIcon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
                <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
            </svg>
        ),
    },
];

// ─── Particle class (plain JS, lives outside React) ───────────────────────────
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset(true);
    }

    reset(initial = false) {
        this.x = Math.random() * this.canvas.width;
        this.y = initial
            ? Math.random() * this.canvas.height
            : this.canvas.height + 10;
        this.r = Math.random() * 1.8 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = -(Math.random() * 0.55 + 0.18);
        this.alpha = Math.random() * 0.5 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        if (this.y < -10) this.reset();
    }

    draw(ctx) {
        const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,160,255,${a})`;
        ctx.fill();
    }
}

const statsData = [
    { id: 1, target: 1000, suffix: "+", label: "Project Delivered" },
    { id: 2, target: 500, suffix: "+", label: "Happy Clients" },
    { id: 3, target: 99, suffix: "%", label: "Client Satisfaction Rate" },
    { id: 4, target: 75, suffix: "%", label: "Recurring Clients" },
    { id: 5, target: 150, suffix: "%", label: "Average Company Growth" },
];

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
        <h3 ref={ref} className="stats-counter__number">
            {count}
            {suffix}
        </h3>
    );
};

const stepsData = [
    {
        id: 1,
        icon: <Search size={20} />,
        title: "Demand Analysis",
        description:
            "A business analyst and tech lead review your brief, market context, and end-user requirements.",
        output: "Written problem statement and proposal options.",
    },
    {
        id: 2,
        icon: <FileSignature size={20} />,
        title: "Terms of Contract Discussion",
        description:
            "We finalize project scope, engagement model, pricing, and compliance terms (NDA, IP assignment, audit rights).",
        output: "Signed MSA and SOW.",
    },
    {
        id: 3,
        icon: <ClipboardList size={20} />,
        title: "Conception & Preparation",
        description:
            "A dedicated PM, tech lead, and software architect map the project, allocate resources, define the tech stack, and draft a risk management strategy.",
        output: "Project charter, architecture diagram, sprint plan.",
    },
    {
        id: 4,
        icon: <Rocket size={20} />,
        title: "Project Kick-Off",
        description:
            "Joint kickoff with your team to align on goals, RACI, communication cadence, and the first sprint.",
        output: "Shared roadmap and Definition of Done.",
    },
    {
        id: 5,
        icon: <Code2 size={20} />,
        title: "Software Development",
        description:
            "Agile sprints with AI-assisted code generation, protected repos, code reviews by tech leads, feature prioritization through your product backlog, and demoable increments every two weeks.",
        output: "Working software you can use.",
    },
    {
        id: 6,
        icon: <ShieldCheck size={20} />,
        title: "Quality Assurance & Testing",
        description:
            "Manual and automated testing through CI/CD pipelines — functional, regression, security, performance, accessibility. User acceptance testing with stakeholders before release.",
        output: "Test reports, defect leakage metrics.",
    },
    {
        id: 7,
        icon: <UploadCloud size={20} />,
        title: "Software Deployment",
        description:
            "Production rollout to your cloud or on-prem environment with documented rollback plans.",
        output: "Live system, runbook, monitoring dashboards.",
    },
    {
        id: 8,
        icon: <LifeBuoy size={20} />,
        title: "Launch & Maintenance",
        description:
            "SLA-backed support, compliance updates, performance tuning, and feature delivery.",
        output: "A system that keeps shipping value after the build phase.",
    },
];

const AnimatedStep = ({ step, index }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`process-timeline__step ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
        >
            <div className="process-timeline__icon">{step.icon}</div>

            <div className="process-timeline__step-content">
                <h3 className="process-timeline__step-title">{step.title}</h3>
                <p className="process-timeline__step-desc">
                    {step.description}{" "}
                    <span className="process-timeline__output">Output:</span>{" "}
                    {step.output}
                </p>
            </div>
        </div>
    );
};

const aiTechnologiesCards = [
    {
        id: 1,
        title: "Generative AI for Businesses",
        description:
            "Our custom software developers provide expert  generative AI development  services, enabling businesses to create sophisticated AI models that can generate novel content.",
        image:
            "/images/asz/services/technology1.webp",
        tags: ["Content Creation", "Product Design & Development", "Personalization at Scale"],
        link: "#",
    },
    {
        id: 2,
        title: "Blockchain & Decentralization",
        description:
            "Our custom blockchain software development solution  company empowers organizations to build decentralized applications. We offer decentralized custom software development services for various use cases.",
        image:
            "/images/asz/services/technology2.webp",
        tags: ["Enhanced Security", "Streamlined Processes", "Decentralized Governance"],
        link: "#",
    },
    {
        id: 3,
        title: "Artificial Intelligence & ML",
        description:
            "Our custom software development agency helps businesses integrate intelligent systems that can learn from data and improve over time. As part of our AI App Development Services, we build virtual assistants and AI chatbot solutions tailored to business needs.",
        image:
            "/images/asz/services/technology3.webp",
        tags: ["Predictive Analytics", "Automated Decision Making", "Natural language processing"],
        link: "#",
    },
    {
        id: 4,
        title: "(IoT) Internet of Things",
        description:
            "Businesses can gather data and create smart solutions by working with our custom software development agency that specializes in IoT software development  and can revolutionize industries by leveraging the expertise our custom software developers possess.",
        image:
            "/images/asz/services/technology4.webp",
        tags: ["Real-Time Data Collection", "Remote Monitoring & Control", "Smart Automation"],
        link: "#",
    },
    {
        id: 5,
        title: "Big Data Analytics",
        description:
            "Our top custom CRM software development service provides big data analytics services, which help organizations extract insights from large datasets to inform business decisions and drive growth.",
        image:
            "/images/asz/services/technology5.webp",
        tags: ["Data Warehousing & Management", "Advanced Analytics Tools", "Data Visualization & Storytelling"],
        link: "#",
    },
    {
        id: 6,
        title: "AR & VR",
        description:
            "Our custom database software development service helps businesses interpret complex data to gain a competitive edge in their respective markets, with customized software solutions that can integrate cutting-edge technologies like AR & VR  and be leveraged from anywhere in the world.",
        image:
            "/images/asz/services/technology6.webp",
        tags: ["Data Cleaning & Preprocessing", "Statistical Modeling & Analysis", "Data Visualization"],
        link: "#",
    },

];

export default function CustomSoftwareDevelopment() {
    const sectionRef = useRef(null);
    return (
        <>
            <div className="custom-soft-development">
                {/* <section className="hero-section" ref={sectionRef} aria-label="ASZ Technologies hero banner">
                    <HeroSectionServices
                        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
                        title={
                            <>
                                Custom Software
                                <br />
                                Development Services
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
                <section className="custom_soft_banner">
                    <div className="custom_soft_cont">
                        <div className="custom_soft_inner">
                            <div className="cust_banner_lt">
                                <h6 className="hero_badge"><span></span>Intelligent. Scalable. AI-Powered.</h6>
                                <h1 className="heading_title mb-4">Custom <span className="c_primary">Software Development</span> Services</h1>
                                <p>Turn your digital vision into a high-impact business asset with ASZ's custom software development solutions. We had crafted enterprise-grade, bespoke solutions for Fortune 500 companies designed with advanced security, strict compliance standards, and intuitive user experiences to maximize long-term ROI.</p>
                                <ul className="bnrlst mb-4">
                                    <li>Built for Every Business Scale</li>
                                    <li>12+ Years of Experience</li>
                                    <li>On-Time, Zero Quality Compromise</li>
                                </ul>
                                <button className="btn-primary mt-3">Get in Touch! <i className="bi bi-arrow-right"></i></button>
                            </div>
                            <div className="cust_banner_rt">
                                <figure>
                                    <img src="/images/customsoftware_rt.webp" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='custom_ai_industries'>
                    <ParticleCanvas />
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='section_title text-center mb-5'>
                                    <h2 className='heading_title'>AI-Powered Custom Software Development <br /><span>Services for Industry-Specific Solutions</span></h2>
                                    <p>Delivering scalable, intelligent, and tailor-made software solutions that streamline operations, automate workflows, and accelerate digital transformation across diverse industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            {CARDS.map((card) => (
                                <div className='col-md-3 mb-4'>
                                    <ServiceCard key={card.id} {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="stats-counter">
                    <div className="stats-counter__container">
                        {statsData.map((stat) => (
                            <div className="stats-counter__card" key={stat.id}>
                                <Counter target={stat.target} suffix={stat.suffix} />
                                <p className="stats-counter__label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="process-timeline">
                    <div className="process-timeline__bg">
                        <div className="process-timeline__glow process-timeline__glow--top"></div>
                        <div className="process-timeline__glow process-timeline__glow--bottom"></div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="process-timeline__container">
                                    <div className="process-timeline__header">
                                        <h2 className="heading_title mb-4">
                                            How We Run <span>a Custom Software</span> <br />Development Engagement
                                        </h2>
                                        <p className="process-timeline__subtitle">
                                            Eight steps, refined across 800+ projects. Every step has a named
                                            owner and a measurable deliverable. AI-assisted engineering sits
                                            across the whole lifecycle, from automated code review to
                                            AI-generated test scaffolding, but engineering judgment stays
                                            human.
                                        </p>
                                    </div>

                                    <div className="process-timeline__list">
                                        <span className="process-timeline__line"></span>
                                        {stepsData.map((step, index) => (
                                            <AnimatedStep step={step} index={index} key={step.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" custom_ai_technologies">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_title">
                                    <h2 className="heading_title text-center">Advanced AI Technologies Used by Our Custom<br /><span>Software Development Solutions</span></h2>
                                    <p>Being a trusted custom software development provider, we focus on delivering advanced AI-driven. solutions that support digital transformation across industries worldwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            {aiTechnologiesCards.map((card) => (
                                <div className='col-md-6 mb-4'>
                                    <TiltedCard key={card.id} card={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}