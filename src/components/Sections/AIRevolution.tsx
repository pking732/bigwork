import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Zap } from 'lucide-react';
import './AIRevolution.css';

const features = [
  {
    icon: Sparkles,
    title: 'Современные технологии',
    description: 'Используем AI и машинное обучение для точного подбора кандидатов',
  },
  {
    icon: Target,
    title: 'Точный подбор',
    description: 'Алгоритмы анализируют тысячи резюме и находят идеальных кандидатов',
  },
  {
    icon: Zap,
    title: 'Быстрый результат',
    description: 'Сокращаем время подбора персонала в 3 раза благодаря технологиям',
  },
];

const AIRevolution = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="ai-revolution section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="ai-revolution__header"
        >
          <h2 className="ai-revolution__title">
            Революция в подборе персонала
          </h2>
          <p className="ai-revolution__subtitle">
            Современные технологии и искусственный интеллект для эффективного подбора
            кандидатов
          </p>
        </motion.div>

        <motion.div
          className="ai-revolution__content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="ai-revolution__features">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="ai-feature">
                  <div className="ai-feature__icon">
                    <Icon size={40} />
                  </div>
                  <h3 className="ai-feature__title">{feature.title}</h3>
                  <p className="ai-feature__description">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIRevolution;
