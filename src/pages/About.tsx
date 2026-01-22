import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { statistics } from '../data/portfolio';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, label: 'Работодателей', value: statistics.employers },
    { icon: Target, label: 'Размещенных кандидатов', value: statistics.candidates },
    { icon: Award, label: 'Регионов России', value: statistics.regions },
    { icon: TrendingUp, label: 'Лет опыта', value: `${statistics.experience} лет` },
  ];

  return (
    <div className="about">
      <motion.div
        className="about__header section-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="about__title">О компании BIGWORK</h1>
          <p className="about__subtitle">
            Кадровое агентство с более чем 10-летним опытом работы на рынке подбора персонала
          </p>
        </div>
      </motion.div>

      <section className="about__mission section">
        <div className="container">
          <motion.div
            className="about__mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about__section-title">Наша миссия</h2>
            <p className="about__text">
              BIGWORK — это кадровое агентство, которое помогает компаниям находить лучших
              сотрудников, а людям — работу мечты. Мы работаем с более чем 1000 работодателей
              по всей России, от небольших стартапов до крупных транснациональных корпораций.
            </p>
            <p className="about__text">
              Наша команда специализируется на подборе персонала для различных форматов работы:
              от удаленной работы до вахтового метода. Мы понимаем, что каждый клиент уникален,
              и предлагаем индивидуальные решения для каждой компании.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about__stats section" ref={ref}>
        <div className="container">
          <motion.div
            className="about__stats-grid"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="about__stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="about__stat-icon">
                    <Icon size={40} />
                  </div>
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="about__values section">
        <div className="container">
          <motion.div
            className="about__values-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about__section-title">Наши ценности</h2>
            <div className="about__values-grid">
              <div className="about__value-item">
                <h3 className="about__value-title">Профессионализм</h3>
                <p className="about__value-text">
                  Мы используем современные технологии и проверенные методики для подбора
                  персонала
                </p>
              </div>
              <div className="about__value-item">
                <h3 className="about__value-title">Надежность</h3>
                <p className="about__value-text">
                  Более 10 лет на рынке и тысячи успешных подборов говорят сами за себя
                </p>
              </div>
              <div className="about__value-item">
                <h3 className="about__value-title">Индивидуальный подход</h3>
                <p className="about__value-text">
                  Каждый клиент уникален, и мы находим решения, подходящие именно вам
                </p>
              </div>
              <div className="about__value-item">
                <h3 className="about__value-title">Результативность</h3>
                <p className="about__value-text">
                  Мы не просто подбираем кандидатов, мы находим идеальное соответствие
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
