 const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-cube">📦</span>
            <span className="footer-logo-text">Tokomi</span>
          </div>
          <p className="footer-desc">
            Tokomi is a suite of open source business applications that
            covers all your company needs: CRM, eCommerce, accounting,
            inventory, point of sale, project management, and so on.
          </p>

          <div className="footer-socials">
            <a href="#" className="footer-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.2c0-.87.24-1.46 1.5-1.46H16.6V4.14C16.2 4.1 15.1 4 13.8 4c-2.7 0-4.5 1.65-4.5 4.7v2.8H6.8v3h2.5V21h4.2z" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A3.7 3.7 0 0 0 12.7 8c0 .3 0 .6.1.9-3 .1-5.7-1.6-7.5-3.9-.3.6-.5 1.2-.5 1.9 0 1.4.7 2.6 1.8 3.3-.6 0-1.3-.2-1.8-.5 0 1.9 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8a7.4 7.4 0 0 1-4.6 1.6c-.3 0-.6 0-.9-.1A10.5 10.5 0 0 0 9.9 20c6.8 0 10.5-5.6 10.5-10.6v-.5c.7-.5 1.4-1.2 1.9-2z" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="Youtube">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M21.6 7.2c-.2-1-1-1.7-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3c-1 .2-1.7 1-1.9 1.9C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.7 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3c1-.2 1.7-1 1.9-1.9.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Forum</a></li>
          </ul>

          <h4 className="footer-col-heading-spaced">Open Source</h4>
          <ul>
            <li><a href="#">Github</a></li>
            <li><a href="#">Runbot</a></li>
            <li><a href="#">Translation</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Company</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Brochures</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">F.A.Q</a></li>
            <li><a href="#">Education</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Enhancement</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Find an Accountant</a></li>
            <li><a href="#">Find Partners</a></li>
            <li><a href="#">Become a Partner</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Website made with <strong>Tokomi</strong>
        </p>
        <p>&copy; 2023 TOKOMI INC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;