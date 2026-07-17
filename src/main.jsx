import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import HomeDark from './Pages/HomeDark/HomeDark.jsx';
import CustomSoftwareDevelopment from './Pages/Services/CustomSoftDevelopment/CustomSoftDevelopment.jsx';
import MobileAppDevelopment from './Pages/Services/MobileAppDevelopment/MobileAppDevelopment.jsx';
import AndroidAppDevelopment from './Pages/Services/AndroidAppDevelopment/AndroidAppDevelopment.jsx';
import IOSAppDevelopment from './Pages/Services/IOSAppDevelopment/IOSAppDevelopment.jsx';
import Services from './Pages/Services/Services.jsx';
import Products from './Pages/Products/Products.jsx';
import Products2 from './Pages/Products2/Products2.jsx';
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails.jsx';
import CaseStudyDetail from './Pages/CaseStudyDetail/CaseStudyDetail.jsx';
import Service from './Pages/Services/Service/Service.jsx';
import TestingQA from './Pages/Services/TestingQA/TestingQA.jsx';
import UxUiDesign from './Pages/Services/UxUiDesign/UxUiDesign.jsx';
import ItConsulting from './Pages/Services/ItConsulting/ItConsulting.jsx';
import DataAnalytics from './Pages/Services/DataAnalytics/DataAnalytics.jsx';
import CyberSecrurityServices from './Pages/Services/CyberSecrurityServices/CyberSecrurityServices.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='home-dark' element={<HomeDark />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='service' element={<Service />} />
      <Route path='services' element={<Services />}>
        <Route path='custom-software-development' element={<CustomSoftwareDevelopment />} />
        <Route path='testing-qa' element={<TestingQA />} />
        <Route path='mobile-app-development' element={<MobileAppDevelopment />} />
        <Route path='ux-ui-development' element={<UxUiDesign />} />
        <Route path='it-consulting' element={<ItConsulting />} />
        <Route path='data-analytics' element={<DataAnalytics />} />
        <Route path='cybersecurity-services' element={<CyberSecrurityServices />} />
        <Route path='android-app-development' element={<AndroidAppDevelopment />} />
        <Route path='ios-app-development' element={<IOSAppDevelopment />} />
      </Route>
      <Route path='products' element={<Products />} />
      <Route path='products/:id' element={<ProductsDetails />} /> 
      <Route path='products2' element={<Products2 />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path="case-study/:id" element={<CaseStudyDetail />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
