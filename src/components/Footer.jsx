import './Footer.css';
import { Link } from 'react-router-dom';
import { EMAIL_INFO, EMAIL_CONTACT, FACEBOOK_URL } from '../contactInfo';
import logo from '../assets/all-hours-navy-white-logo.png';

export default function Footer() {
  return (
    <>

      <section className="band night footer-cta">
        <div className="shell split footer-cta-grid">

          <div className="footer-cta-title">
            <h2 className="display">
              Close to you, whatever the hour.
            </h2>

          </div>

          <div className="body-col footer-cta-body">
            <p>
              Whether you want stock on your shelf, a store of your own, or a place on ours, start with a message. Someone from our team replies within two working days.
            </p>

            <div className="btn-row">
              <Link className="btn on-night" to="/stock">
                Stock your shop
              </Link>

              <Link className="btn on-night ghost" to="/franchise">
                Own a franchise
              </Link>

              <Link className="btn on-night ghost" to="/contact">
                Talk to us
              </Link>
            </div>
          </div>

        </div>
      </section>

      <footer className="site">

        <div className="shell">

          <div className="fcols">

            <div className="footer-col footer-brand-col">
              <Link className="footer-brand" to="/" aria-label="All Hours home">
                <img src={logo} alt="All Hours" />
              </Link>
              <h5>All Hours</h5>

              <p>Registered office to supply</p>
              <p>Company registration to supply</p>
            </div>

            <div className="footer-col">
              <h5>Business</h5>

              <Link to="/stock">Stock supply</Link>
              <Link to="/franchise">Franchise</Link>
              <Link to="/partners">Partners</Link>
              <Link to="/services">What we do</Link>
            </div>

            <div className="footer-col">
              <h5>Company</h5>

              <Link to="/about">About</Link>
              <Link to="/formats">Store formats</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">Careers</Link>
            </div>

            <div className="footer-col">
              <h5>Reach us</h5>

              <a href={`mailto:${EMAIL_INFO}`}>{EMAIL_INFO}</a>
              <a href={`mailto:${EMAIL_CONTACT}`}>{EMAIL_CONTACT}</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>

          </div>

          <div className="fsign">

            <div className="footer-tag-wrap">
              <span className="tag">
                Extraordinary. All Day.
              </span>

            </div>

            <span className="small">
              © 2026 All Hours
              <Link to="/contact">Privacy</Link>
              <Link to="/contact">Terms</Link>
              <Link to="/contact">Cookies</Link>
            </span>

          </div>

        </div>

      </footer>

    </>
  );
}