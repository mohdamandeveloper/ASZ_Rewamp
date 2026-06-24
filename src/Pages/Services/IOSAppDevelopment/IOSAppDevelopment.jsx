import { useRef } from 'react';
import './IOSAppDevelopment.scss';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';

export default function IOSAppDevelopment(){
    const sectionRef = useRef(null);
    return(
        <>
            <div className="ios-app-development">
                <section className="hero-section" ref={sectionRef} aria-label="ASZ Technologies hero banner">
                    <HeroSectionServices
                    backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
                    title={
                        <>
                            IOS Application
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
                </section>
           </div>
        </>
    )
}