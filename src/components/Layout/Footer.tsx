import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/about', label: 'О нас' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">BIGWORK</h3>
            <p className="footer__description">
              Кадровое агентство с более чем 1000 работодателей по всей России.
              Сотрудничество с крупными компаниями и транснациональными корпорациями.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Навигация</h4>
            <nav className="footer__nav">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="footer__nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Контакты</h4>
            <div className="footer__contacts">
              <a href="tel:+79162157844" className="footer__contact-item">
                <Phone size={18} />
                <span>+79162157844</span>
              </a>
              <a href="mailto:bigworksearch@mail.ru" className="footer__contact-item">
                <Mail size={18} />
                <span>bigworksearch@mail.ru</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={18} />
                <span>Иркутская область</span>
              </div>
              <div className="footer__contact-item">
                <FileText size={18} />
                <span>ИНН 382007536795</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} BIGWORK. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
