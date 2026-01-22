import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { services, Service } from '../../data/services';
import './Services.css';

interface ServicesProps {
  limit?: number;
  showAll?: boolean;
}

const Services = ({ limit, showAll = false }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayServices = limit ? services.slice(0, limit) : services;

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
    <section className="services section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="services__header"
        >
          <h2 className="services__title">Наши услуги</h2>
          <p className="services__subtitle">
            Комплексные решения для подбора персонала любой сложности
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {displayServices.map((service: Service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="service-card">
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <div className="service-card__price">{service.price}</div>
                  <ul className="service-card__features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="service-card__feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && limit && (
          <motion.div
            className="services__footer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/services">
              <Button variant="primary" size="large">
                Все услуги
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
