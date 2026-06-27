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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CustomSoftDevelopment.scss';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';
import TiltedCard from '../../../Common/TiltedCards/TiltedCard';
import { Link } from 'react-router-dom';

// ─── ParticleCanvas component ─────────────────────────────────────────────────
// function ParticleCanvas() {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         const PARTICLE_COUNT = 70;
//         let particles = [];
//         let rafId;

//         function resize() {
//             canvas.width = canvas.offsetWidth;
//             canvas.height = canvas.offsetHeight;
//         }

//         function initParticles() {
//             particles = Array.from(
//                 { length: PARTICLE_COUNT },
//                 () => new Particle(canvas)
//             );
//         }

//         function drawConnections() {
//             const maxDist = 90;
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     const dx = particles[i].x - particles[j].x;
//                     const dy = particles[i].y - particles[j].y;
//                     const d = Math.sqrt(dx * dx + dy * dy);
//                     if (d < maxDist) {
//                         ctx.beginPath();
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.strokeStyle = `rgba(100,160,255,${(1 - d / maxDist) * 0.12})`;
//                         ctx.lineWidth = 0.6;
//                         ctx.stroke();
//                     }
//                 }
//             }
//         }

//         function loop() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             drawConnections();
//             particles.forEach((p) => {
//                 p.update();
//                 p.draw(ctx);
//             });
//             rafId = requestAnimationFrame(loop);
//         }

//         function handleResize() {
//             resize();
//             initParticles();
//         }

//         resize();
//         initParticles();
//         loop();

//         window.addEventListener("resize", handleResize);
//         return () => {
//             window.removeEventListener("resize", handleResize);
//             cancelAnimationFrame(rafId);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "absolute",
//                 inset: 0,
//                 width: "100%",
//                 height: "100%",
//                 pointerEvents: "none",
//                 zIndex: 0,
//             }}
//         />
//     );
// }

// ─── ServiceCard component ────────────────────────────────────────────────────
// function ServiceCard({ title, bgImage, highlight, description, icon, detailIcon }) {
//     const lines = title.split("\n");

//     return (
//         <article className="card">
//             {/* Background */}
//             <div className="card__bg">
//                 <div
//                     className="card__bg-image"
//                     style={{
//                         backgroundImage: `linear-gradient(to bottom, rgba(6,13,31,0.30) 0%, rgba(6,13,31,0.80) 100%), url('${bgImage}')`,
//                     }}
//                 />
//                 <div className="card__overlay" />
//             </div>

//             {/* Default icon */}
//             <div className="card__icon">{icon}</div>

//             {/* Default title */}
//             <h3 className="card__title">
//                 {lines.map((line, i) => (
//                     <span key={i}>
//                         {line}
//                         {i < lines.length - 1 && <br />}
//                     </span>
//                 ))}
//             </h3>

//             {/* Hover details panel */}
//             <div className="card__details">
//                 <div className="card__details-icon">{detailIcon}</div>
//                 <p>
//                     Our custom{" "}
//                     <span className="highlight">{highlight}</span>
//                     {description}
//                 </p>
//             </div>
//         </article>
//     );
// }

// const CARDS = [
//     {
//         id: "banking",
//         title: "Banking Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
//         highlight: "banking software development service",
//         description:
//             " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "healthcare",
//         title: "Healthcare Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
//         highlight: "healthcare software development service",
//         description:
//             " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
//                 <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
//                 <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "banking",
//         title: "Banking Software \n Development",
//         bgImage:
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
//         highlight: "banking software development service",
//         description:
//             " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "healthcare",
//         title: "Healthcare Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
//         highlight: "healthcare software development service",
//         description:
//             " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
//                 <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
//                 <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "banking",
//         title: "Banking Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
//         highlight: "banking software development service",
//         description:
//             " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "healthcare",
//         title: "Healthcare Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
//         highlight: "healthcare software development service",
//         description:
//             " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
//                 <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
//                 <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "banking",
//         title: "Banking Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
//         highlight: "banking software development service",
//         description:
//             " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "healthcare",
//         title: "Healthcare Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
//         highlight: "healthcare software development service",
//         description:
//             " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
//                 <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
//                 <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "banking",
//         title: "Banking Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
//         highlight: "banking software development service",
//         description:
//             " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "healthcare",
//         title: "Healthcare Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
//         highlight: "healthcare software development service",
//         description:
//             " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
//                 <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
//                 <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "banking",
//         title: "Banking Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
//         highlight: "banking software development service",
//         description:
//             " creates robust, secure platforms. Our solutions ensure financial institutions can deliver high-quality services efficiently with modern, scalable architecture.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <path d="M8 28H56V32H8V28Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M32 8L56 24H8L32 8Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="12" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="23" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="35" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="46" y="32" width="6" height="18" fill="rgba(255,107,53,0.75)" />
//                 <rect x="8" y="50" width="48" height="4" rx="1" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <path d="M5 17.5H35V20H5V17.5Z" fill="rgba(255,107,53,0.9)" />
//                 <path d="M20 5L35 15H5L20 5Z" fill="rgba(255,107,53,0.9)" />
//                 <rect x="7" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="14" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="22" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="29" y="20" width="4" height="11" fill="rgba(255,107,53,0.75)" />
//                 <rect x="5" y="31" width="30" height="3" rx="0.5" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
//     {
//         id: "healthcare",
//         title: "Healthcare Software\nDevelopment",
//         bgImage:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
//         highlight: "healthcare software development service",
//         description:
//             " creates robust platforms. Our custom healthcare software development services ensure that healthcare providers can deliver high-quality services efficiently.",
//         icon: (
//             <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 64, filter: "drop-shadow(0 0 18px rgba(100,160,255,0.6))" }}>
//                 <rect x="26" y="8" width="12" height="48" rx="3" fill="rgba(255,107,53,0.9)" />
//                 <rect x="8" y="26" width="48" height="12" rx="3" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//         detailIcon: (
//             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
//                 <rect x="16" y="5" width="8" height="30" rx="2" fill="rgba(255,107,53,0.9)" />
//                 <rect x="5" y="16" width="30" height="8" rx="2" fill="rgba(255,107,53,0.9)" />
//             </svg>
//         ),
//     },
// ];

// ─── Particle class (plain JS, lives outside React) ───────────────────────────
// class Particle {
//     constructor(canvas) {
//         this.canvas = canvas;
//         this.reset(true);
//     }

//     reset(initial = false) {
//         this.x = Math.random() * this.canvas.width;
//         this.y = initial
//             ? Math.random() * this.canvas.height
//             : this.canvas.height + 10;
//         this.r = Math.random() * 1.8 + 0.4;
//         this.vx = (Math.random() - 0.5) * 0.35;
//         this.vy = -(Math.random() * 0.55 + 0.18);
//         this.alpha = Math.random() * 0.5 + 0.2;
//         this.pulse = Math.random() * Math.PI * 2;
//         this.pulseSpeed = Math.random() * 0.02 + 0.008;
//     }

//     update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         this.pulse += this.pulseSpeed;
//         if (this.y < -10) this.reset();
//     }

//     draw(ctx) {
//         const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(100,160,255,${a})`;
//         ctx.fill();
//     }
// }

// const statsData = [
//     { id: 1, target: 1000, suffix: "+", label: "Project Delivered" },
//     { id: 2, target: 500, suffix: "+", label: "Happy Clients" },
//     { id: 3, target: 99, suffix: "%", label: "Client Satisfaction Rate" },
//     { id: 4, target: 75, suffix: "%", label: "Recurring Clients" },
//     { id: 5, target: 150, suffix: "%", label: "Average Company Growth" },
// ];

// const Counter = ({ target, suffix, duration = 2000 }) => {
//     const [count, setCount] = useState(0);
//     const ref = useRef(null);
//     const hasAnimated = useRef(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting && !hasAnimated.current) {
//                     hasAnimated.current = true;
//                     let start = 0;
//                     const stepTime = Math.max(Math.floor(duration / target), 16);
//                     const increment = Math.ceil(target / (duration / stepTime));

//                     const timer = setInterval(() => {
//                         start += increment;
//                         if (start >= target) {
//                             start = target;
//                             clearInterval(timer);
//                         }
//                         setCount(start);
//                     }, stepTime);
//                 }
//             },
//             { threshold: 0.3 }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, [target, duration]);

//     return (
//         <h3 ref={ref} className="stats-counter__number">
//             {count}
//             {suffix}
//         </h3>
//     );
// };

// const stepsData = [
//     {
//         id: 1,
//         icon: <Search size={20} />,
//         title: "Demand Analysis",
//         description:
//             "A business analyst and tech lead review your brief, market context, and end-user requirements.",
//         output: "Written problem statement and proposal options.",
//     },
//     {
//         id: 2,
//         icon: <FileSignature size={20} />,
//         title: "Terms of Contract Discussion",
//         description:
//             "We finalize project scope, engagement model, pricing, and compliance terms (NDA, IP assignment, audit rights).",
//         output: "Signed MSA and SOW.",
//     },
//     {
//         id: 3,
//         icon: <ClipboardList size={20} />,
//         title: "Conception & Preparation",
//         description:
//             "A dedicated PM, tech lead, and software architect map the project, allocate resources, define the tech stack, and draft a risk management strategy.",
//         output: "Project charter, architecture diagram, sprint plan.",
//     },
//     {
//         id: 4,
//         icon: <Rocket size={20} />,
//         title: "Project Kick-Off",
//         description:
//             "Joint kickoff with your team to align on goals, RACI, communication cadence, and the first sprint.",
//         output: "Shared roadmap and Definition of Done.",
//     },
//     {
//         id: 5,
//         icon: <Code2 size={20} />,
//         title: "Software Development",
//         description:
//             "Agile sprints with AI-assisted code generation, protected repos, code reviews by tech leads, feature prioritization through your product backlog, and demoable increments every two weeks.",
//         output: "Working software you can use.",
//     },
//     {
//         id: 6,
//         icon: <ShieldCheck size={20} />,
//         title: "Quality Assurance & Testing",
//         description:
//             "Manual and automated testing through CI/CD pipelines — functional, regression, security, performance, accessibility. User acceptance testing with stakeholders before release.",
//         output: "Test reports, defect leakage metrics.",
//     },
//     {
//         id: 7,
//         icon: <UploadCloud size={20} />,
//         title: "Software Deployment",
//         description:
//             "Production rollout to your cloud or on-prem environment with documented rollback plans.",
//         output: "Live system, runbook, monitoring dashboards.",
//     },
//     {
//         id: 8,
//         icon: <LifeBuoy size={20} />,
//         title: "Launch & Maintenance",
//         description:
//             "SLA-backed support, compliance updates, performance tuning, and feature delivery.",
//         output: "A system that keeps shipping value after the build phase.",
//     },
// ];

// const AnimatedStep = ({ step, index }) => {
//     const ref = useRef(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.25 }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div
//             ref={ref}
//             className={`process-timeline__step ${visible ? "is-visible" : ""}`}
//             style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
//         >
//             <div className="process-timeline__icon">{step.icon}</div>

//             <div className="process-timeline__step-content">
//                 <h3 className="process-timeline__step-title">{step.title}</h3>
//                 <p className="process-timeline__step-desc">
//                     {step.description}{" "}
//                     <span className="process-timeline__output">Output:</span>{" "}
//                     {step.output}
//                 </p>
//             </div>
//         </div>
//     );
// };

// const aiTechnologiesCards = [
//     {
//         id: 1,
//         title: "Generative AI for Businesses",
//         description:
//             "Our custom software developers provide expert  generative AI development  services, enabling businesses to create sophisticated AI models that can generate novel content.",
//         image:
//             "/images/asz/services/technology1.webp",
//         tags: ["Content Creation", "Product Design & Development", "Personalization at Scale"],
//         link: "#",
//     },
//     {
//         id: 2,
//         title: "Blockchain & Decentralization",
//         description:
//             "Our custom blockchain software development solution  company empowers organizations to build decentralized applications. We offer decentralized custom software development services for various use cases.",
//         image:
//             "/images/asz/services/technology2.webp",
//         tags: ["Enhanced Security", "Streamlined Processes", "Decentralized Governance"],
//         link: "#",
//     },
//     {
//         id: 3,
//         title: "Artificial Intelligence & ML",
//         description:
//             "Our custom software development agency helps businesses integrate intelligent systems that can learn from data and improve over time. As part of our AI App Development Services, we build virtual assistants and AI chatbot solutions tailored to business needs.",
//         image:
//             "/images/asz/services/technology3.webp",
//         tags: ["Predictive Analytics", "Automated Decision Making", "Natural language processing"],
//         link: "#",
//     },
//     {
//         id: 4,
//         title: "(IoT) Internet of Things",
//         description:
//             "Businesses can gather data and create smart solutions by working with our custom software development agency that specializes in IoT software development  and can revolutionize industries by leveraging the expertise our custom software developers possess.",
//         image:
//             "/images/asz/services/technology4.webp",
//         tags: ["Real-Time Data Collection", "Remote Monitoring & Control", "Smart Automation"],
//         link: "#",
//     },
//     {
//         id: 5,
//         title: "Big Data Analytics",
//         description:
//             "Our top custom CRM software development service provides big data analytics services, which help organizations extract insights from large datasets to inform business decisions and drive growth.",
//         image:
//             "/images/asz/services/technology5.webp",
//         tags: ["Data Warehousing & Management", "Advanced Analytics Tools", "Data Visualization & Storytelling"],
//         link: "#",
//     },
//     {
//         id: 6,
//         title: "AR & VR",
//         description:
//             "Our custom database software development service helps businesses interpret complex data to gain a competitive edge in their respective markets, with customized software solutions that can integrate cutting-edge technologies like AR & VR  and be leveraged from anywhere in the world.",
//         image:
//             "/images/asz/services/technology6.webp",
//         tags: ["Data Cleaning & Preprocessing", "Statistical Modeling & Analysis", "Data Visualization"],
//         link: "#",
//     },

// ];

const SERVICES = [
    {
        icon: "🍎",
        title: "Software Consulting Services",
        desc: "Our custom software consulting services help businesses identify their specific needs and challenges. We analyze existing workflows and recommend tailored custom software development solutions that enhance operational efficiency and drive innovation. ",
        tags: ["Swift", "SwiftUI", "Xcode", "TestFlight"],
        emoji: "📱",
    },
    {
        icon: "🤖",
        title: "Custom Software Development Services",
        desc: "Our custom software development agency creates applications specifically designed to address the unique requirements of a business. By choosing to hire software developers  for custom solutions, businesses can eliminate unnecessary features found in off-the-shelf software.",
        tags: ["Kotlin", "Jetpack", "Compose", "Play Store"],
        emoji: "🤖",
    },
    {
        icon: "⌚",
        title: "Enterprise Software Development",
        desc: " solutions are designed to support large organizations with complex processes. These systems integrate various functions such as accounting, human resources, and inventory management into a cohesive platform.",
        tags: ["WearOS", "WatchKit", "Health APIs", "BLE"],
        emoji: "⌚",
    },
    {
        icon: "🔀",
        title: "Software Product Development",
        desc: "We validate ideas through MVP development and user research to ensure every product aligns with real market needs. Our team delivers secure, scalable software products for businesses worldwide, offering ",
        tags: ["React Native", "Flutter", "Expo", "Dart"],
        emoji: "🔀",
    },
    {
        icon: "⚡",
        title: "Software Integration",
        desc: "Our custom software development company offers integration services that are crucial for businesses looking to enhance their existing tech stack. This service is particularly important for organizations that rely on multiple platforms to manage their operations.",
        tags: ["C++", "Metal", "Vulkan", "NDK"],
        emoji: "⚡",
    },
    {
        icon: "⚡",
        title: "API Development Services",
        desc: "Our custom API development allows businesses to extend the functionality of their existing systems without starting from scratch. This service can significantly accelerate development timelines and reduce costs by reusing existing codebases. ",
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

const TAG_DEFAULT_COLOR = "#ff6b35";


export default function CustomSoftwareDevelopment() {
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
                                {/* <h6 className="hero_badge"><span></span>Intelligent. Scalable. AI-Powered.</h6> */}
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
                <section className='our_services' style={{ background: "#0a0a0f" }}>
                    <div className="services-section">
                        <div className="services-left">
                            <div className="hero_badge">Our Services</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                <span>Custom Software Development</span> Services Built for Every Platform
                            </h2>
                            <p className="heading_subtitle">
                                Explore our tailored custom software development services, designed to meet unique business
                            </p>
                            <div className="services-left-cta">
                                <Link to={'/contact'} className="btn-primary">Discuss Your Project →</Link>
                                <div className="services-trust-row mt-5">
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">4.9★</div>
                                        <div className="services-trust-label">Clutch Rating</div>
                                    </div>
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">98%</div>
                                        <div className="services-trust-label">Client Retention</div>
                                    </div>
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">2wk</div>
                                        <div className="services-trust-label">Avg Kickoff</div>
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
                {/* <section className='custom_ai_industries'>
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
                {/* <section className=" custom_ai_technologies">
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
                </section> */}
            </div>
        </>
    )
}