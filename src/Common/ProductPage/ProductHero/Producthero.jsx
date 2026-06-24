import React, { useEffect, useRef } from "react";
import "./ProductHero.scss";

const ProductHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    const init = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.1,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,107,53,${p.o})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section className="prod-hero">
      <div className="prod-hero__bg" />
      <div className="prod-hero__overlay" />
      <canvas ref={canvasRef} className="prod-hero__canvas" />

      <div className="prod-hero__inner">
        <div className="hero_badge">
          <span />
          ASZ TECHNOLOGIES PRODUCTS
        </div>
        <h1 className="heading_title" style={{color: 'white'}}>
          Software Products <br />
          <span>Built for the Real World</span>
        </h1>
        <p className="heading_subtitle">
          Ready-to-deploy SaaS platforms and white-label apps engineered for
          speed, scale, and the industries that demand both.
        </p>
        {/* <div className="prod-hero__scroll">
          <span className="prod-hero__scroll-line" />
          <span className="prod-hero__scroll-text">SCROLL</span>
        </div> */}
      </div>
    </section>
  );
};

export default ProductHero;