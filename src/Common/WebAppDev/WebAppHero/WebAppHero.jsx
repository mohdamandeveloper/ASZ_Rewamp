import React, { useEffect, useRef } from "react";
import "./WebAppHero.scss";

const WebAppHero = () => {
  const canvasRef = useRef(null);

  // Lightweight floating particle layer behind hero content
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;
    let width, height;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.6,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.5 + 0.15,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="webapp-hero">
      <div className="webapp-hero__bg"></div>
      <div className="webapp-hero__overlay"></div>
      <canvas ref={canvasRef} className="webapp-hero__particles"></canvas>

      <div className="webapp-hero__content">
        <div className="hero_badge">
          <span className="webapp-hero__dot"></span>
          WEB APPLICATION DEVELOPMENT
        </div>

        <h1 className="heading_title webapp-hero__title" style={{color: 'white'}}>
          <span>Engineer Web Apps </span> that<br />
           With Your Ambition
        </h1>

        <p className="webapp-hero__subtitle">
          From custom portals to SaaS platforms, we design and build secure,
          high-performance web applications that turn complex business logic
          into intuitive, scalable software.
        </p>

        <div className="webapp-hero__actions">
          <button className="btn-primary">
            Start Your Project <span>&rarr;</span>
          </button>
          <button className="btn-secondary">
            Explore Services
          </button>
        </div>

        <div className="webapp-hero__scroll">
          <span className="webapp-hero__scroll-line"></span>
          <span className="webapp-hero__scroll-text">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default WebAppHero;
