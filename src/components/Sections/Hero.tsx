import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero__title">
              BIGWORK
              <span className="hero__subtitle">Кадровое агентство</span>
            </h1>
            <p className="hero__description">
              Профессиональный подбор персонала по всей России. Связь с более чем 1000
              работодателей. Сотрудничество с крупными компаниями и транснациональными
              корпорациями. От удаленной работы до вахты.
            </p>
            <div className="hero__actions">
              <Link to="/contacts">
                <Button size="large" variant="primary">
                  Связаться с нами
                </Button>
              </Link>
              <Link to="/services">
                <Button size="large" variant="secondary">
                  Наши услуги
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
