import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, StaggerWrap, StaggerChild } from '../components/Animations';
import { CheckIcon } from '../constants/icons';
import { PRICING, SECTION_HEADERS, PAGE_TITLE } from '../constants/data';

const Pricing = () => {
  useEffect(() => {
    document.title = `Pricing – ${PAGE_TITLE}`;
  }, []);

  return (
    <section className="hlc-pricing hlc-page">
      <div className="hlc-container">
        <SectionHeader {...SECTION_HEADERS.pricing} />
        <StaggerWrap className="hlc-pricing__grid" delay={0.15}>
          {PRICING.map((plan, i) => (
            <StaggerChild key={i} index={i}>
              <motion.div
                className={`hlc-pricing-card${plan.popular ? ' popular' : ''}`}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  boxShadow: plan.popular
                    ? '0 30px 60px rgba(124, 58, 237, 0.3)'
                    : '0 25px 50px rgba(124, 58, 237, 0.15)',
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                {plan.popular && <div className="hlc-pricing-card__badge">Most Popular</div>}
                <h3 className="hlc-pricing-card__name">{plan.name}</h3>
                {plan.subtitle && (
                  <span className="hlc-pricing-card__subtitle">{plan.subtitle}</span>
                )}
                <div className="hlc-pricing-card__price">
                  <span className="hlc-pricing-card__amount">{plan.price}</span>
                  <span className="hlc-pricing-card__period">{plan.period}</span>
                </div>
                {plan.supportNote && (
                  <p className="hlc-pricing-card__support-note">{plan.supportNote}</p>
                )}
                <ul className="hlc-pricing-card__features">
                  {plan.features.map((f, fi) => (
                    <li key={fi}>
                      <span className="hlc-check"><CheckIcon /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`hlc-btn ${plan.popular ? 'hlc-btn--primary' : 'hlc-btn--outline'}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {plan.btnText || 'Get Started'}
                </motion.button>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
};

export default Pricing;
