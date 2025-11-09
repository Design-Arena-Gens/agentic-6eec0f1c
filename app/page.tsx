export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">FinServe</div>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="cta-button">Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Your Financial Future Starts Here</h1>
          <p>Expert guidance in Mutual Funds, LIC, Insurance, and Investment Planning</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Schedule Consultation</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Mutual Funds</h3>
              <p>Diversified investment portfolios tailored to your risk appetite and financial goals. Access to top-performing funds with expert guidance.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>LIC Policies</h3>
              <p>Comprehensive life insurance coverage from LIC with customized plans for protection, savings, and pension schemes.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Insurance Solutions</h3>
              <p>Health, term, vehicle, and property insurance from leading providers to secure your assets and loved ones.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Fixed Deposits</h3>
              <p>Secure fixed deposit options with competitive interest rates for guaranteed returns and financial stability.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🏦</div>
              <h3>Retirement Planning</h3>
              <p>Strategic retirement solutions including NPS, PPF, and pension plans for a secure financial future.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Wealth Management</h3>
              <p>Holistic wealth management services with personalized strategies for building and preserving wealth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Expert Advisors</h3>
              <p>SEBI-certified professionals with years of experience</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Trusted</h3>
              <p>100% transparent and regulated services</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Digital First</h3>
              <p>Convenient online consultation and tracking</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Plans</h3>
              <p>Customized solutions for your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2>5000+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h2>₹500Cr+</h2>
              <p>Assets Under Management</p>
            </div>
            <div className="stat-item">
              <h2>15+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h2>98%</h2>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <h2>Ready to Secure Your Financial Future?</h2>
          <p>Let our experts help you make informed investment decisions</p>
          <a href="tel:+919999999999" className="btn-white">Call Now: +91 99999 99999</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>FinServe</h3>
              <p>Your trusted partner for comprehensive financial solutions. Building wealth, securing futures.</p>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Mutual Funds</a></li>
                <li><a href="#services">LIC Policies</a></li>
                <li><a href="#services">Insurance</a></li>
                <li><a href="#services">Retirement Planning</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li>📞 +91 99999 99999</li>
                <li>✉️ info@finserve.com</li>
                <li>📍 Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 FinServe. All rights reserved. | SEBI Registered Investment Advisor</p>
          </div>
        </div>
      </footer>
    </>
  )
}
