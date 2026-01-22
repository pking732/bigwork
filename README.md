# BIGWORK - Кадровое агентство

Современный корпоративный SPA-сайт для кадрового агентства BIGWORK.

## Технологический стек

- **React 19+** с TypeScript 5.9+
- **Vite 7+** как сборщик и dev-сервер
- **React Router DOM 7+** для роутинга
- **Framer Motion 12+** для анимаций
- **React Hook Form 7+** + **Yup 1.7+** для работы с формами
- **Lucide React** для иконок
- **EmailJS** для отправки форм

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Превью production сборки
npm run preview

# Проверка кода линтером
npm run lint
```

## Структура проекта

```
src/
├── components/
│   ├── Layout/      # Header, Footer, Layout
│   ├── UI/          # Button, Card, Input
│   ├── Sections/    # Hero, Services, Advantages, Reviews, AIRevolution
│   └── Forms/       # ContactForm
├── pages/           # Home, Services, About, Portfolio, Contacts
├── data/            # services.ts, portfolio.ts
├── styles/          # Глобальные стили
├── utils/           # emailService.ts
├── App.tsx          # Главный компонент с роутингом
└── main.tsx         # Точка входа
```

## Настройка EmailJS

Для работы формы обратной связи необходимо настроить EmailJS:

1. Создайте аккаунт на [EmailJS](https://www.emailjs.com/)
2. Создайте сервис и шаблон
3. Добавьте переменные окружения в `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Раскомментируйте код в `src/utils/emailService.ts`

## Цветовая схема

- **Красный глянец**: `#DC143C` - основной цвет акцентов
- **Черный**: `#000000` - текст
- **Белый**: `#FFFFFF` - фон

## Особенности

- Полностью адаптивный дизайн (mobile-first)
- Lazy loading всех страниц
- Code splitting для оптимизации
- Анимации при скролле через Framer Motion
- Валидация форм через Yup
- SEO оптимизация (robots.txt, sitemap.xml)

## Браузерная совместимость

Поддержка современных браузеров (Chrome, Firefox, Safari, Edge последних версий)
