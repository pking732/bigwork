import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Building2, Briefcase, Globe } from 'lucide-react';
import './Advantages.css';

const advantages = [
  {
    icon: Users,
    title: '1000+ работодателей',
    description: 'Партнерство с более чем 1000 компаний по всей России',
  },
  {
    icon: Building2,
    title: 'Крупные корпорации',
    description: 'Сотрудничество с транснациональными компаниями',
  },
  {
    icon: Briefcase,
    title: 'Удаленная работа',
    description: 'Подбор специалистов для удаленной работы',
  },
  {
    icon: Globe,
    title: 'Вахтовый метод',
    description: 'Организация вахтовой работы по всей России',
  },
];

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="advantages section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="advantages__header"
        >
          <h2 className="advantages__title">Наши преимущества</h2>
          <p className="advantages__subtitle">
            Почему выбирают BIGWORK для подбора персонала
          </p>
        </motion.div>

        <motion.div
          className="advantages__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="advantage-card">
                  <div className="advantage-card__icon">
                    <Icon size={48} />
                  </div>
                  <h3 className="advantage-card__title">{advantage.title}</h3>
                  <p className="advantage-card__description">{advantage.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
