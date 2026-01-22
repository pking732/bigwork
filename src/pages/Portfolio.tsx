import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Card from '../components/UI/Card';
import { portfolio, PortfolioItem } from '../data/portfolio';
import './Portfolio.css';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="portfolio">
      <motion.div
        className="portfolio__header section-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="portfolio__title">Наше портфолио</h1>
          <p className="portfolio__subtitle">
            Примеры успешных проектов по подбору персонала для различных компаний
          </p>
        </div>
      </motion.div>

      <section className="portfolio__content section" ref={ref}>
        <div className="container">
          <motion.div
            className="portfolio__grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {portfolio.map((item: PortfolioItem) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="portfolio-card">
                  <div className="portfolio-card__category">{item.category}</div>
                  <h3 className="portfolio-card__title">{item.title}</h3>
                  <p className="portfolio-card__description">{item.description}</p>
                  <div className="portfolio-card__result">{item.result}</div>
                  {item.metrics && (
                    <div className="portfolio-card__metrics">
                      {item.metrics.map((metric, index) => (
                        <div key={index} className="portfolio-card__metric">
                          <span className="portfolio-card__metric-value">
                            {metric.value}
                          </span>
                          <span className="portfolio-card__metric-label">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
