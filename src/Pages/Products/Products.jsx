// import './Header.scss';

import FeaturedProduct from "../../Common/ProductPage/Featuredproduct/Featuredproduct";
import HowItWorks from "../../Common/ProductPage/Howitworks/Howitworks";
import ProductBenefits from "../../Common/ProductPage/Productbenefits/Productbenefits";
import ProductCardsSlider from "../../Common/ProductPage/Productcardsslider/Productcardsslider";
import ProductCategories from "../../Common/ProductPage/Productcategories/Productcategories";
import ProductCTA from "../../Common/ProductPage/Productcta/Productcta";
import ProductFeatures from "../../Common/ProductPage/Productfeatures/Productfeatures";
import ProductHero from "../../Common/ProductPage/ProductHero/Producthero";
import ProductShowcaseGrid from "../../Common/ProductPage/Productshowcasegrid/Productshowcasegrid";
import TechStack from "../../Common/ProductPage/Techstack/Techstack";
import Testimonials from "../../Common/ProductPage/Testimonials/Testimonials";

export default function Products(){
    return(
        <>
            <div className="products">
                {/* <ProductHero /> */}
                <FeaturedProduct />
                <ProductShowcaseGrid />
                {/* <ProductFeatures /> */}
                {/* <ProductCategories /> */}
                {/* <ProductCardsSlider /> */}
                {/* <ProductBenefits /> */}
                <HowItWorks />
                {/* <TechStack /> */}
                {/* <Testimonials />
                <ProductCTA /> */}
            </div>
        </>
    )
}