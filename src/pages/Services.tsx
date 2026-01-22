import { motion } from 'framer-motion';
import Services from '../components/Sections/Services';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';
import './Services.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <motion.div
        className="services-page__header section-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="services-page__title">Наши услуги</h1>
          <p className="services-page__subtitle">
            Комплексные решения для подбора персонала любой сложности. От удаленной работы
            до вахтового метода.
          </p>
        </div>
      </motion.div>

      <Services showAll />

      <motion.div
        className="services-page__cta section-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="services-page__cta-content">
            <h2 className="services-page__cta-title">
              Готовы начать сотрудничество?
            </h2>
            <p className="services-page__cta-text">
              Свяжитесь с нами, и мы подберем оптимальное решение для вашей компании
            </p>
            <Link to="/contacts">
              <Button variant="primary" size="large">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
