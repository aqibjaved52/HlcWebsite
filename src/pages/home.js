import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FadeIn, Counter, SectionHeader, StaggerWrap, StaggerChild } from '../components/Animations';
import DataFlowCanvas from '../components/DataFlowCanvas';
import { ScrollDownIcon, ArrowRightIcon, MailIcon, PhoneIcon, MapPinIcon } from '../constants/icons';
import {
  EASE,
  HERO,
  STATS,
  HOW_WE_HELP,
  SERVICES,
  SECTION_HEADERS,
  WHY_CHOOSE_US,
  SECURITY,
  CTA,
  CONTACT_FORM,
  CONTACT_INFO,
  PAGE_TITLE,
} from '../constants/data';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section id="home" className="hlc-hero">
        <div className="hlc-hero__canvas-wrap">
          <DataFlowCanvas />
        </div>
        <div className="hlc-hero__vignette" />
        <div className="hlc-hero__glow-line" />

        <div className="hlc-hero__content">
          <motion.div
            className="hlc-hero__badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="hlc-hero__badge-dot" />
            {HERO.badge}
          </motion.div>

          <h1 className="hlc-hero__title">
            {HERO.titleLine1.split(' ').map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                className="hlc-hero__title-word"
                initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.07, ease: EASE }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {HERO.titleLine2.split(' ').map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                className="hlc-hero__title-word"
                initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.7 + i * 0.07, ease: EASE }}
              >
                {word}
              </motion.span>
            ))}{' '}
            <motion.span
              className="hlc-hero__title-word hlc-gradient-text"
              initial={{ opacity: 0, scale: 0.7, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            >
              {HERO.titleHighlight}
            </motion.span>
          </h1>

          <motion.p
            className="hlc-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            className="hlc-hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
          >
            <motion.button
              className="hlc-btn hlc-btn--primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
            >
              {HERO.primaryCta}
            </motion.button>
            <motion.button
              className="hlc-btn hlc-btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
            >
              {HERO.secondaryCta}
            </motion.button>
          </motion.div>

          <motion.div
            className="hlc-hero__pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                className="hlc-hero__pill"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.55 + i * 0.08 }}
              >
                <span className="hlc-hero__pill-value">{stat.value}{stat.suffix}</span>
                {stat.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="hlc-hero__scroll-indicator">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ScrollDownIcon />
          </motion.div>
        </div>
      </section>

      <section className="hlc-stats">
        <div className="hlc-container">
          <div className="hlc-stats__grid">
            {STATS.map((stat, i) => (
              <FadeIn
                key={i}
                delay={i * 0.12}
                direction={i % 2 === 0 ? 'left-bottom' : 'right-bottom'}
                scale={0.9}
                className="hlc-stats__item"
              >
                <div className="hlc-stats__value">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="hlc-stats__label">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="hlc-process">
        <div className="hlc-container">
          <FadeIn direction="up">
            <h2 className="hlc-process__heading">{HOW_WE_HELP.title}</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <p className="hlc-process__subtitle">{HOW_WE_HELP.desc}</p>
          </FadeIn>

          <div className="hlc-process__timeline">
            <div className="hlc-process__line" />
            {HOW_WE_HELP.steps.map((step, i) => (
              <FadeIn key={i} delay={0.25 + i * 0.18} direction="up" className="hlc-process__step">
                <motion.div
                  className="hlc-process__node"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <span className="hlc-process__node-num">{step.number}</span>
                  <div className="hlc-process__node-ring" />
                </motion.div>
                <h3 className="hlc-process__step-title">{step.title}</h3>
                <p className="hlc-process__step-desc">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="hlc-services">
        <div className="hlc-container">
          <SectionHeader {...SECTION_HEADERS.services} />
          <StaggerWrap className="hlc-services__grid" delay={0.1}>
            {SERVICES.map((service, i) => (
              <StaggerChild key={i} index={i}>
                <motion.div
                  className="hlc-service-card"
                  whileHover={{
                    y: -10,
                    rotateX: 2,
                    rotateY: i % 2 === 0 ? 3 : -3,
                    boxShadow: '0 25px 50px rgba(124, 58, 237, 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="hlc-service-card__icon"><service.icon size={40} /></div>
                  <h3 className="hlc-service-card__title">{service.title}</h3>
                  <p className="hlc-service-card__desc">{service.desc}</p>
                  <div className="hlc-service-card__arrow"><ArrowRightIcon /></div>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      <section className="hlc-why">
        <div className="hlc-container">
          <div className="hlc-why__layout">
            <div className="hlc-why__left">
              <span className="hlc-why__tag">{WHY_CHOOSE_US.tag}</span>
              <h2 className="hlc-why__title">{WHY_CHOOSE_US.title}</h2>
              <p className="hlc-why__desc">{WHY_CHOOSE_US.desc}</p>
              <motion.button
                className="hlc-btn hlc-btn--primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/services')}
              >
                Explore Services
              </motion.button>
            </div>
            <div className="hlc-why__right">
              {WHY_CHOOSE_US.reasons.map((reason, i) => (
                <FadeIn key={i} direction="right" delay={i * 0.08}>
                  <motion.div
                    className="hlc-why__card"
                    whileHover={{
                      y: -4,
                      boxShadow: '0 16px 40px rgba(124, 58, 237, 0.12)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <div className="hlc-why__card-accent" />
                    <div className="hlc-why__card-icon">
                      <reason.icon size={36} />
                    </div>
                    <div className="hlc-why__card-body">
                      <h3 className="hlc-why__card-title">{reason.title}</h3>
                      <p className="hlc-why__card-desc">{reason.desc}</p>
                    </div>
                    <span className="hlc-why__card-num">{String(i + 1).padStart(2, '0')}</span>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hlc-security">
        <div className="hlc-container">
          <div className="hlc-security__inner">
            <div className="hlc-security__text">
              <FadeIn direction="left">
                <h2 className="hlc-security__title">{SECURITY.title}</h2>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <p className="hlc-security__desc">{SECURITY.desc}</p>
              </FadeIn>
            </div>

            <div className="hlc-security__visual">
              <FadeIn direction="right" delay={0.2}>
                <div className="hlc-security__shield">
                  <svg viewBox="0 0 120 140" className="hlc-security__shield-svg">
                    <defs>
                      <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="shield-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M60 8 L110 30 L110 75 C110 105 60 132 60 132 C60 132 10 105 10 75 L10 30 Z"
                      fill="url(#shield-grad)"
                      stroke="url(#shield-stroke)"
                      strokeWidth="2"
                    />
                    <path
                      className="hlc-security__check"
                      d="M42 70 L55 83 L80 55"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="hlc-security__pulse hlc-security__pulse--1" />
                  <div className="hlc-security__pulse hlc-security__pulse--2" />
                  <div className="hlc-security__pulse hlc-security__pulse--3" />
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="hlc-security__features">
            {SECURITY.features.map((feat, i) => (
              <FadeIn key={i} direction="up" delay={0.3 + i * 0.12}>
                <motion.div
                  className="hlc-security__feat"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <div className="hlc-security__feat-indicator">
                    <span className="hlc-security__feat-dot" />
                  </div>
                  <div>
                    <h4 className="hlc-security__feat-title">{feat.title}</h4>
                    <p className="hlc-security__feat-desc">{feat.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="hlc-cta">
        <div className="hlc-container">
          <FadeIn direction="up" scale={0.95}>
            <div className="hlc-cta__box">
              <div className="hlc-cta__bg-circles">
                <div className="hlc-cta__circle hlc-cta__circle--1" />
                <div className="hlc-cta__circle hlc-cta__circle--2" />
              </div>
              <FadeIn direction="left-bottom" delay={0.2}>
                <h2 className="hlc-cta__title">{CTA.title}</h2>
              </FadeIn>
              <FadeIn direction="right-bottom" delay={0.35}>
                <p className="hlc-cta__desc">{CTA.desc}</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.5} scale={0.9}>
                <div className="hlc-cta__actions">
                  <motion.button
                    className="hlc-btn hlc-btn--white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {CTA.primaryCta}
                  </motion.button>
                  <motion.button
                    className="hlc-btn hlc-btn--outline-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {CTA.secondaryCta}
                  </motion.button>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="hire-us" className="hlc-contact">
        <div className="hlc-container">
          <div className="hlc-contact__layout">
            <div className="hlc-contact__info">
              <h2 className="hlc-contact__title">
                {CONTACT_FORM.title}{' '}
                <span className="hlc-contact__highlight">{CONTACT_FORM.titleHighlight}</span>
              </h2>
              <p className="hlc-contact__desc">{CONTACT_FORM.desc}</p>
              <div className="hlc-contact__details">
                <div className="hlc-contact__detail-item">
                  <MailIcon />
                  <span>{CONTACT_INFO.email}</span>
                </div>
                <div className="hlc-contact__detail-item">
                  <PhoneIcon />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="hlc-contact__detail-item">
                  <MapPinIcon />
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            <form className="hlc-contact__form" onSubmit={handleSubmit}>
              <div className="hlc-contact__field">
                <input
                  type="text"
                  placeholder={CONTACT_FORM.fields.name}
                  value={formData.name}
                  onChange={(e) => handleInput('name', e.target.value)}
                  required
                />
              </div>
              <div className="hlc-contact__row">
                <div className="hlc-contact__field">
                  <input
                    type="email"
                    placeholder={CONTACT_FORM.fields.email}
                    value={formData.email}
                    onChange={(e) => handleInput('email', e.target.value)}
                    required
                  />
                </div>
                <div className="hlc-contact__field">
                  <input
                    type="tel"
                    placeholder={CONTACT_FORM.fields.phone}
                    value={formData.phone}
                    onChange={(e) => handleInput('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="hlc-contact__field">
                <textarea
                  placeholder={CONTACT_FORM.fields.message}
                  rows="5"
                  value={formData.message}
                  onChange={(e) => handleInput('message', e.target.value)}
                  required
                />
              </div>
              <label className="hlc-contact__terms">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span>{CONTACT_FORM.terms}</span>
              </label>
              <motion.button
                type="submit"
                className="hlc-btn hlc-btn--primary hlc-contact__submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)' }}
                whileTap={{ scale: 0.97 }}
                disabled={!termsAccepted}
              >
                {CONTACT_FORM.submit}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
