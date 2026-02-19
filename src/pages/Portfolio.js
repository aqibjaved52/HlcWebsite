import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, StaggerWrap, StaggerChild } from '../components/Animations';
import { ArrowRightIcon } from '../constants/icons';
import { PORTFOLIO, SECTION_HEADERS, PAGE_TITLE } from '../constants/data';

const Portfolio = () => {
  useEffect(() => {
    document.title = `Portfolio – ${PAGE_TITLE}`;
  }, []);

  return (
    <section className="hlc-portfolio hlc-page">
      <div className="hlc-container">
        <SectionHeader {...SECTION_HEADERS.portfolio} />
        <StaggerWrap className="hlc-portfolio__grid" delay={0.1}>
          {PORTFOLIO.map((item, i) => (
            <StaggerChild key={i} index={i}>
              <motion.div
                className="hlc-portfolio-card"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateY: i % 2 === 0 ? 2 : -2,
                  boxShadow: '0 30px 60px rgba(124, 58, 237, 0.18)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="hlc-portfolio-card__image" style={{ background: item.gradient }}>
                  <div className="hlc-portfolio-card__overlay">
                    <span className="hlc-portfolio-card__category">{item.category}</span>
                  </div>
                </div>
                <div className="hlc-portfolio-card__info">
                  <h3>{item.title}</h3>
                  <span className="hlc-portfolio-card__link">View Project <ArrowRightIcon /></span>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
};

export default Portfolio;
