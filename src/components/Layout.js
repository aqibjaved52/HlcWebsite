import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import hlcLogo from '../assets/HLC-solutions-logo.png';
import { MailIcon, PhoneIcon, MapPinIcon } from '../constants/icons';
import {
  NAV_LINKS,
  SERVICES,
  SOCIAL_LINKS,
  CONTACT_INFO,
  FOOTER,
} from '../constants/data';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNav ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileNav]);

  useEffect(() => {
    setMobileNav(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToHire = useCallback(() => {
    setMobileNav(false);
    if (location.pathname !== '/') {
      navigate('/#hire-us');
      setTimeout(() => {
        document.getElementById('hire-us')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('hire-us')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (location.hash === '#hire-us') {
      setTimeout(() => {
        document.getElementById('hire-us')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [location]);

  return (
    <div className="hlc">
      <header className={`hlc-header${scrolled ? ' scrolled' : ''}`}>
        <div className="hlc-header__inner">
          <Link to="/" className="hlc-logo">
            <div className="hlc-logo__icon">
              <img src={hlcLogo} alt="HLC Solutions" />
            </div>
          </Link>
          <nav className={`hlc-nav${mobileNav ? ' open' : ''}`}>
            {NAV_LINKS.map((link) =>
              link.id === 'services' ? (
                <div key={link.id} className="hlc-nav__dropdown" ref={dropdownRef}>
                  <button
                    className={`hlc-nav__link${location.pathname === link.path ? ' active' : ''}`}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <svg className={`hlc-nav__chevron${servicesOpen ? ' open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 4l3 3 3-3" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="hlc-nav__dropdown-menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {SERVICES.map((service, i) => (
                          <Link
                            key={i}
                            to={link.path}
                            className="hlc-nav__dropdown-item"
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`hlc-nav__link${location.pathname === link.path ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <motion.button
            className="hlc-btn-hire"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHire}
          >
            Hire Us
          </motion.button>
          <button
            className={`hlc-hamburger${mobileNav ? ' open' : ''}`}
            onClick={() => setMobileNav((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileNav && (
          <motion.div
            className="hlc-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileNav(false)}
          />
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="hlc-footer">
        <div className="hlc-container">
          <div className="hlc-footer__grid">
            <div className="hlc-footer__brand">
              <Link to="/" className="hlc-logo">
                <div className="hlc-logo__icon">
                  <img src={hlcLogo} alt="HLC Solutions" />
                </div>
              </Link>
              <p className="hlc-footer__about">{FOOTER.about}</p>
              <div className="hlc-footer__social">
                {SOCIAL_LINKS.map((social, i) => (
                  <a key={i} href={social.href} className="hlc-footer__social-link" aria-label={social.label}>
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="hlc-footer__links">
              <h4>Quick Links</h4>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hlc-footer__links">
              <h4>Services</h4>
              <ul>
                {SERVICES.slice(0, 5).map((s, i) => (
                  <li key={i}>
                    <Link to="/services">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hlc-footer__contact">
              <h4>Contact Us</h4>
              <ul>
                <li><MailIcon /> {CONTACT_INFO.email}</li>
                <li><PhoneIcon /> {CONTACT_INFO.phone}</li>
                <li><MapPinIcon /> {CONTACT_INFO.address}</li>
              </ul>
            </div>
          </div>

          <div className="hlc-footer__bottom">
            <p>{FOOTER.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
