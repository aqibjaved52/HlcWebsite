import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, StaggerWrap, StaggerChild } from '../components/Animations';
import { ArrowRightIcon } from '../constants/icons';
import { SERVICES, SECTION_HEADERS, PAGE_TITLE } from '../constants/data';

const Services = () => {
  useEffect(() => {
    document.title = `Services – ${PAGE_TITLE}`;
  }, []);

  return (
    <section className="hlc-services hlc-page">
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
  );
};

export default Services;
