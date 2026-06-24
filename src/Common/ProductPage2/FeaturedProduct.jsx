import { featuredProductImg } from '../../data/images';

const points = [
  'AI-Powered Automation',
  'Real-Time Analytics',
  'Cloud-Native Architecture',
  'Enterprise Security',
  'Seamless Integrations',
  'Multi-Platform Access'
];

export default function FeaturedProduct() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <div className='featured__top_heading'>
          <div className="hero_badge"><span></span> Featured Product</div>
          <h2 className='heading_title' style={{ color: 'white' }}>
            Transform Your Business with <span>Intelligent Digital <br />Products</span> Built for Growth.
          </h2>
          <p className='heading_subtitle'>Empowering Organizations with Scalable, Secure, and Future-Ready Technology Solutions</p>
        </div>

        <div className="featured__split">
          <div className="featured__text">
            <p>
              At ASZ Technologies, we create innovative digital products that help businesses streamline operations, improve customer experiences, and accelerate growth. Our solutions combine cutting-edge technologies, intuitive user experiences, and enterprise-grade security to solve complex business challenges across industries.
            </p>
            <div className='list_row'>
              <ul>
                {points.map((pt) => (
                  <li key={pt}><span className="check">✓</span>{pt}</li>
                ))}
              </ul>
              <div className='featured__cards_grid'>
                <div className='card_inner'>
                  <h4>99.9%</h4>
                  <h2>Platform Uptime</h2>
                  {/* <p>Delivering uninterrupted services and reliable performance across all environments.</p> */}
                </div>
                <div className='card_inner'>
                  <h4>50K+</h4>
                  <h2>Daily Transactions</h2>
                  {/* <p>Delivering uninterrupted services and reliable performance across all environments.</p> */}
                </div>
                <div className='card_inner'>
                  <h4>70%</h4>
                  <h2>Productivity Improvement</h2>
                  {/* <p>Delivering uninterrupted services and reliable performance across all environments.</p> */}
                </div>
                <div className='card_inner'>
                  <h4>27/7</h4>
                  <h2>Technical Support</h2>
                  {/* <p>Delivering uninterrupted services and reliable performance across all environments.</p> */}
                </div>
              </div>
            </div>

            <a href="#" className="btn btn-primary">Get Early Access <i class="bi bi-arrow-right"></i></a>
          </div>

          <div
            className="featured__metric"
            style={{ backgroundImage: `url(${featuredProductImg})` }}
          >
            <div className="featured__metric-overlay" />
            <span className="featured__metric-value">58%</span>
            <span className="featured__metric-label">Auto-resolved</span>
            {/* <div className="featured__live">● Live in 48hrs</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
