import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
  service?: string;
}

/**
 * Отправка формы через EmailJS
 * @param formData - Данные формы
 * @returns Promise<boolean> - true если успешно, false если ошибка
 */
export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Инициализация EmailJS (нужно будет настроить в .env)
    // const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    // const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Временная заглушка - в production нужно настроить EmailJS
    // emailjs.init(publicKey);
    
    // const result = await emailjs.send(serviceId, templateId, {
    //   from_name: formData.name,
    //   from_email: formData.email,
    //   phone: formData.phone,
    //   message: formData.message || '',
    //   service: formData.service || '',
    // });

    // Временная симуляция отправки для разработки
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Email отправлен (симуляция):', formData);
    
    return true;
  } catch (error) {
    console.error('Ошибка отправки email:', error);
    return false;
  }
};

/**
 * Альтернативная функция для отправки через собственный API
 * @param formData - Данные формы
 * @returns Promise<boolean> - true если успешно, false если ошибка
 */
export const sendEmailViaAPI = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // const apiUrl = import.meta.env.VITE_API_URL || '/api/contact';
    
    // const response = await fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (!response.ok) {
    //   throw new Error('Ошибка отправки формы');
    // }

    // Временная симуляция для разработки
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Email отправлен через API (симуляция):', formData);
    
    return true;
  } catch (error) {
    console.error('Ошибка отправки через API:', error);
    return false;
  }
};
