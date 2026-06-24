import React, { useState } from 'react';
import './ProductSuite.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './FeaturedProduct.scss';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { productImages } from '../../data/images';

const products = [
  { id: '01', tag: 'AI Powered', name: 'NeuralDesk', desc: 'AI helpdesk & ticketing platform with GPT-4 automation, smart routing, and real-time analytics dashboards.' },
  { id: '02', tag: 'Analytics', name: 'DataPulse', desc: 'Business intelligence suite with drag-and-drop reporting, predictive ML models, and white-label embed support.' },
  { id: '03', tag: 'Security', name: 'VaultGuard', desc: 'Zero-trust identity & access management with SSO, MFA, and OWASP-compliant audit trails built in.' },
  { id: '04', tag: 'Portal', name: 'VendorHub', desc: 'Multi-vendor portal with real-time inventory, order management, and role-based supplier dashboards.' },
  { id: '05', tag: 'Mobile-First', name: 'FieldOps', desc: 'Field-service management app with offline mode, geo-tracking, and job dispatch automation.' },
  { id: '06', tag: 'E-Commerce', name: 'ShopEngine', desc: 'Headless commerce engine with PWA storefront, multi-currency checkout, and third-party ERP/CRM connectors.' },
];


export default function ProductSuite() {
  const [active, setActive] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="suite" id="suite">
      <div className="section-head">
        <span className="hero_badge"><span></span> All Products</span>
        <h2 className='heading_title' style={{ color: 'white' }}>Our Complete <span>Product Suite</span></h2>
        <p className='heading_subtitle'>SaaS platforms and ready-to-deploy apps for teams that move fast.</p>
      </div>

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide style={{ background: 'linear-gradient(rgb(104, 0, 5) 0%, rgb(237, 28, 37) 100%)' }}>
          <div className='slider_item'>
            <div className='lts'>
              <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
              <p>Enterprise sales intelligence platform for real-time dealer performance across Africa.</p>
              <ul>
                <li>
                  <strong>100%</strong>
                  <span>Real-Time Visibility</span>
                </li>
                <li>
                  <strong>99%</strong>
                  <span>Inventory Accuracy</span>
                </li>
                <li>
                  <strong>90%</strong>
                  <span>Faster Reporting</span>
                </li>
                <li>
                  <strong>0%</strong>
                  <span>Untracked Inventory Loss</span>
                </li>
              </ul>
            </div>
            <div className='rts'>
              <img src='/images/asz/products/isuzu_portfolio_img.webp' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: 'linear-gradient(rgb(119, 37, 0) 0%, rgb(255, 105, 37) 100%)' }}>
          <div className='slider_item'>
            <div className='lts'>
              <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
              <p>Enterprise sales intelligence platform for real-time dealer performance across Africa.</p>
              <ul>
                <li>
                  <strong>100%</strong>
                  <span>Real-Time Visibility</span>
                </li>
                <li>
                  <strong>99%</strong>
                  <span>Inventory Accuracy</span>
                </li>
                <li>
                  <strong>90%</strong>
                  <span>Faster Reporting</span>
                </li>
                <li>
                  <strong>0%</strong>
                  <span>Untracked Inventory Loss</span>
                </li>
              </ul>
            </div>
            <div className='rts'>
              <img src='/images/asz/products/isuzu_portfolio_img.webp' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: 'linear-gradient(rgb(160, 132, 29) 0%, rgb(254, 204, 22) 100%)' }}>
          <div className='slider_item'>
            <div className='lts'>
              <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
              <p>Enterprise sales intelligence platform for real-time dealer performance across Africa.</p>
              <ul>
                <li>
                  <strong>100%</strong>
                  <span>Real-Time Visibility</span>
                </li>
                <li>
                  <strong>99%</strong>
                  <span>Inventory Accuracy</span>
                </li>
                <li>
                  <strong>90%</strong>
                  <span>Faster Reporting</span>
                </li>
                <li>
                  <strong>0%</strong>
                  <span>Untracked Inventory Loss</span>
                </li>
              </ul>
            </div>
            <div className='rts'>
              <img src='/images/asz/products/isuzu_portfolio_img.webp' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: 'linear-gradient(rgb(24, 24, 24) -14.07%, rgb(128, 171, 3) 39.7%, rgb(122, 160, 13) 100%)' }}>
          <div className='slider_item'>
            <div className='lts'>
              <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
              <p>Enterprise sales intelligence platform for real-time dealer performance across Africa.</p>
              <ul>
                <li>
                  <strong>100%</strong>
                  <span>Real-Time Visibility</span>
                </li>
                <li>
                  <strong>99%</strong>
                  <span>Inventory Accuracy</span>
                </li>
                <li>
                  <strong>90%</strong>
                  <span>Faster Reporting</span>
                </li>
                <li>
                  <strong>0%</strong>
                  <span>Untracked Inventory Loss</span>
                </li>
              </ul>
            </div>
            <div className='rts'>
              <img src='/images/asz/products/isuzu_portfolio_img.webp' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: 'linear-gradient(rgb(234, 49, 76) 0%, rgb(98, 25, 35) 100%)' }}>
          <div className='slider_item'>
            <div className='lts'>
              <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
              <p>Enterprise sales intelligence platform for real-time dealer performance across Africa.</p>
              <ul>
                <li>
                  <strong>100%</strong>
                  <span>Real-Time Visibility</span>
                </li>
                <li>
                  <strong>99%</strong>
                  <span>Inventory Accuracy</span>
                </li>
                <li>
                  <strong>90%</strong>
                  <span>Faster Reporting</span>
                </li>
                <li>
                  <strong>0%</strong>
                  <span>Untracked Inventory Loss</span>
                </li>
              </ul>
              <div className='bottom_content'>
                <p>"From the consultation call to product launch, they kept us informed at every stage, delivered 3 weeks ahead of schedule."</p>
              </div>
            </div>
            <div className='rts'>
              <img src='/images/asz/products/isuzu_portfolio_img.webp' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide style={{background: 'linear-gradient(180deg,#010a16 0%,#ed1c25 100%)'}}>
          <div className='thumbnail_item'>
            <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
            <h3>Automobile</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{background: 'linear-gradient(180deg,#772500 0%,#ff6925 100%)'}}>
          <div className='thumbnail_item'>
            <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
            <h3>Automobile</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{background: 'linear-gradient(180deg,#a0841d 0%,#fecc16 100%)'}}>
          <div className='thumbnail_item'>
            <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
            <h3>Automobile</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{background: 'linear-gradient(180deg,#181818 -14.07%,#80ab03 39.7%,#7aa00d 100%)'}}>
          <div className='thumbnail_item'>
            <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
            <h3>Automobile</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{background: 'linear-gradient(180deg,#ea314c 0%,#621923 100%)'}}>
          <div className='thumbnail_item'>
            <img src='/images/asz/products/nav_portfolio_LgIcon_01.webp' />
            <h3>Automobile</h3>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="container">
        <div className="section-head align-left">
          <span className="hero_badge"><span></span> All Products</span>
          <h2 className='heading_title' style={{color: 'white'}}>Our Complete <span>Product Suite</span></h2>
          <p className='heading_subtitle' style={{margin: '0 0 38px 0px'}}>SaaS platforms and ready-to-deploy apps for teams that move fast.</p>
        </div>

        <div className="suite__layout">
          <ul className="suite__list">
            {products.map((p, i) => (
              <li
                key={p.id}
                className={i === active ? 'is-active' : ''}
                onMouseEnter={() => setActive(i)}
              >
                <span className="suite__num">{p.id}</span>
                <div className="suite__list-copy">
                  <span className="suite__tag">{p.tag}</span>
                  <h3>{p.name}</h3>
                  {i === active && <p>{p.desc}</p>}
                </div>
                <span className="suite__arrow">
                  <i class="bi bi-arrow-right"></i>
                </span>
              </li>
            ))}
          </ul>

          <div className="suite__preview">
            <span className="suite__preview-tag">{products[active].tag}</span>
            <h3>{products[active].name}</h3>
            <p>{products[active].desc}</p>
            <button href="#" className="btn-primary">View product <i class="bi bi-arrow-right"></i></button>
            <div className="suite__preview-screen">
              <img src={productImages[products[active].name]} alt={products[active].name} loading="lazy" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
