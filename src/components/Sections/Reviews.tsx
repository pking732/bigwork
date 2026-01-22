import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Reviews.css';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="reviews section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="reviews__content"
        >
          <p className="reviews__text">
            Правильно подобранная команда — это основа стабильного результата. Когда у сотрудников
            совпадают компетенции, ценности и стиль работы, задачи выполняются быстрее, ошибок
            меньше, а качество выше. Сильная команда снижает текучку, экономит время на контроле и
            помогает компании расти без постоянных «пожаров».
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
