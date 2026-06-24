import HeroSection from "../../Common/ProductPage2/HeroSection";
import ProductSuite from "../../Common/ProductPage2/ProductSuite";
import FeaturedProduct from "../../Common/ProductPage2/FeaturedProduct";
import WhyDifferent from "../../Common/ProductPage2/WhyDifferent";
import BrowseCategory from "../../Common/ProductPage2/BrowseCategory";
import ProductRange from "../../Common/ProductPage2/ProductRange";
import RealBenefits from "../../Common/ProductPage2/RealBenefits";
import OnboardingSteps from "../../Common/ProductPage2/OnboardingSteps";
import TechStack from "../../Common/ProductPage2/TechStack";

export default function Products2(){
    return(
        <>
            <div className="products">
                <HeroSection />
                <ProductSuite />
                <FeaturedProduct />
                {/* <WhyDifferent /> */}
                {/* <BrowseCategory /> */}
                {/* <ProductRange /> */}
                <RealBenefits />
                <OnboardingSteps />
                {/* <TechStack /> */}
            </div>
        </>
    )
}