import { motion } from 'framer-motion';
import ContactForm from '../components/Forms/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <motion.div
        className="contacts__header section-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="contacts__title">Контакты</h1>
          <p className="contacts__subtitle">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь вам найти
            идеальных сотрудников.
          </p>
        </div>
      </motion.div>

      <section className="contacts__content section">
        <div className="container">
          <div className="contacts__grid">
            <motion.div
              className="contacts__info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contacts__info-title">Свяжитесь с нами</h2>
              <p className="contacts__info-text">
                Наша команда готова ответить на все ваши вопросы и помочь с подбором персонала.
              </p>

              <div className="contacts__info-list">
                <div className="contacts__info-item">
                  <Phone size={24} className="contacts__info-icon" />
                  <div>
                    <div className="contacts__info-label">Телефон</div>
                    <a href="tel:+79162157844" className="contacts__info-value">
                      +79162157844
                    </a>
                  </div>
                </div>

                <div className="contacts__info-item">
                  <Mail size={24} className="contacts__info-icon" />
                  <div>
                    <div className="contacts__info-label">Email</div>
                    <a href="mailto:bigworksearch@mail.ru" className="contacts__info-value">
                      bigworksearch@mail.ru
                    </a>
                  </div>
                </div>

                <div className="contacts__info-item">
                  <MapPin size={24} className="contacts__info-icon" />
                  <div>
                    <div className="contacts__info-label">Адрес</div>
                    <div className="contacts__info-value">
                      Иркутская область
                    </div>
                  </div>
                </div>

                <div className="contacts__info-item">
                  <Clock size={24} className="contacts__info-icon" />
                  <div>
                    <div className="contacts__info-label">Режим работы</div>
                    <div className="contacts__info-value">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб-Вс: Выходной
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contacts__form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contacts__form-title">Отправить сообщение</h2>
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            className="contacts__consultation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="contacts__consultation-title">Бесплатная консультация</h2>
            <p className="contacts__consultation-text">
              Оставьте заявку и с вами свяжется наш специалист в вашем городе
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
