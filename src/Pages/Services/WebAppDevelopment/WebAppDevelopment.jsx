import { useRef } from 'react';
import './WebAppDevelopment.scss';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';
import WebAppHero from '../../../Common/WebAppDev/WebAppHero/WebAppHero';
import ServicesSlider from '../../../Common/WebAppDev/ServicesSlider/ServicesSlider';
import AboutSection from '../../../Common/WebAppDev/AboutSection/AboutSection';
import IndustriesSection from '../../../Common/WebAppDev/IndustriesSection/IndustriesSection';
import ReasonsSection from '../../../Common/WebAppDev/ReasonSection/ReasonsSection';
import ProcessSection from '../../../Common/WebAppDev/ProcessSection/ProcessSection';
import StrategiesSection from '../../../Common/WebAppDev/Strategiessection/StrategiesSection';

export default function WebAppDevelopment() {
    const sectionRef = useRef(null);
    return (
        <>
            <div className="web-app-development">
                <WebAppHero />
                <ServicesSlider />
                <AboutSection />
                <IndustriesSection />
                <ReasonsSection />
                <ProcessSection />
                <StrategiesSection />
            </div>
        </>
    )
}