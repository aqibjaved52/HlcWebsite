import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, StaggerWrap, StaggerChild } from '../components/Animations';
import { ArrowRightIcon } from '../constants/icons';
import { BLOGS, SECTION_HEADERS, PAGE_TITLE } from '../constants/data';

const Blogs = () => {
  useEffect(() => {
    document.title = `Blogs – ${PAGE_TITLE}`;
  }, []);

  return (
    <section className="hlc-blogs hlc-page">
      <div className="hlc-container">
        <SectionHeader {...SECTION_HEADERS.blogs} />
        <StaggerWrap className="hlc-blogs__grid" delay={0.12}>
          {BLOGS.map((post, i) => (
            <StaggerChild key={i} index={i}>
              <motion.article
                className="hlc-blog-card"
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 2,
                  boxShadow: '0 25px 50px rgba(124, 58, 237, 0.18)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="hlc-blog-card__image" style={{ background: post.gradient }}>
                  <span className="hlc-blog-card__category">{post.category}</span>
                </div>
                <div className="hlc-blog-card__body">
                  <span className="hlc-blog-card__date">{post.date}</span>
                  <h3 className="hlc-blog-card__title">{post.title}</h3>
                  <p className="hlc-blog-card__excerpt">{post.excerpt}</p>
                  <span className="hlc-blog-card__link">Read More <ArrowRightIcon /></span>
                </div>
              </motion.article>
            </StaggerChild>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
};

export default Blogs;
