import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { sendEmail, ContactFormData } from '../../utils/emailService';
import { services } from '../../data/services';
import './ContactForm.css';

const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const schema = yup.object({
  name: yup
    .string()
    .required('Имя обязательно для заполнения')
    .min(2, 'Имя должно содержать минимум 2 символа'),
  phone: yup
    .string()
    .required('Телефон обязателен для заполнения')
    .matches(phoneRegex, 'Введите корректный номер телефона'),
  email: yup
    .string()
    .required('Email обязателен для заполнения')
    .email('Введите корректный email адрес'),
  message: yup.string(),
  service: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('submitting');

    const formData: ContactFormData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      service: data.service,
    };

    const success = await sendEmail(formData);

    if (success) {
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form__row">
        <Input
          label="Имя"
          {...register('name')}
          error={errors.name?.message}
          required
          placeholder="Введите ваше имя"
        />
        <Input
          label="Телефон"
          {...register('phone')}
          error={errors.phone?.message}
          required
          placeholder="+79162157844"
          type="tel"
        />
      </div>

      <Input
        label="Email"
        {...register('email')}
        error={errors.email?.message}
        required
        placeholder="example@mail.com"
        type="email"
      />

      <div className="contact-form__select-wrapper">
        <label htmlFor="service" className="contact-form__label">
          Услуга (опционально)
        </label>
        <select
          id="service"
          {...register('service')}
          className="contact-form__select"
        >
          <option value="">Выберите услугу</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <Input
        label="Сообщение"
        {...register('message')}
        error={errors.message?.message}
        isTextarea
        placeholder="Расскажите о вашем запросе..."
        rows={5}
      />

      {status === 'success' && (
        <div className="contact-form__message contact-form__message--success">
          Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {status === 'error' && (
        <div className="contact-form__message contact-form__message--error">
          Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="large"
        isLoading={status === 'submitting'}
        disabled={status === 'submitting'}
        className="contact-form__submit"
      >
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
