"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'bg' | 'uk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bg');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['bg', 'uk', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['bg'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.services': 'Услуги',
    'nav.solutions': 'Решения',
    'nav.clients': 'Клиенти',
    'nav.contacts': 'Контакти',
    'nav.faq': 'ЧЗВ',

    // Hero Section
    'hero.discount': 'Безплатна консултация за вашия проект',
    'hero.title1': 'Иновативни',
    'hero.title2': 'IT-решения',
    'hero.title3': 'за вашия бизнес.',
    'hero.description': 'Нашият екип от експерти използва най-съвременни технологии за създаване на надеждни и мащабируеми решения. Специализираме се в уеб разработка, мобилни приложения и киберсигурност.',

    // Stats
    'stats.projects': 'Завършени проекти',
    'stats.clients': 'Доволни клиенти',
    'stats.experience': 'Години опит',

    // Business Section
    'business.title': 'Вие се занимавате с бизнеса, ние решаваме техническите задачи.',
    'business.description': 'С правилните IT-решения можете да подобрите ефективността на вашия бизнес, да автоматизирате процесите и да осигурите сигурност на данните. Предлагаме пълен спектър от услуги за разработка.',
    'business.feature1.title': 'Уеб разработка',
    'business.feature1.content': 'Създаваме съвременни уеб приложения с използване на най-новите технологии и най-добри практики за разработка',
    'business.feature2.title': 'Киберсигурност',
    'business.feature2.content': 'Осигуряваме максимална защита на вашите данни и системи от съвременните киберзаплахи',
    'business.feature3.title': 'Мобилни приложения',
    'business.feature3.content': 'Разработваме нативни и кроссплатформени мобилни приложения за iOS и Android',

    // Billing Section
    'billing.title': 'Лесно управлявайте вашите IT-системи и процеси',
    'billing.description': 'Нашите решения ви позволяват ефективно да управлявате всички аспекти на вашата IT-инфраструктура. От разработка до внедряване и поддръжка - осигуряваме пълен цикъл от услуги.',

    // Card Deal Section
    'carddeal.title': 'Намерете най-доброто IT-решение в няколко прости стъпки.',
    'carddeal.description': 'Анализираме вашите нужди и предлагаме оптимални технологични решения. Нашият подход гарантира максимална ефективност и рентабилност на инвестициите.',

    // Testimonials
    'testimonials.title': 'Какво казват нашите клиенти',
    'testimonials.description': 'Всичко необходимо за успешна дигитализация и развитие на вашия бизнес с помощта на съвременни IT-технологии.',
    'testimonials.feedback1': 'Екип от професионалисти на най-високо ниво. Проектът беше изпълнен навреме и надмина всичките ни очаквания.',
    'testimonials.feedback2': 'Отлично качество на кода и внимание към детайлите. Препоръчвам като надежден партньор в IT-разработката.',
    'testimonials.feedback3': 'Благодарение на тяхната експертиза в областта на сигурността, успяхме да защитим нашите системи от всички видове заплахи.',

    // Contacts
    'contacts.title': 'Свържете се с нас',
    'contacts.description': 'Готови сте да обсъдите вашия проект? Попълнете формата и нашите експерти ще се свържат с вас в рамките на 24 часа за безплатна консултация.',
    'contacts.info.title': 'Контактна информация',
    'contacts.info.description': 'Винаги сме готови да отговорим на вашите въпроси и да обсъдим възможностите за сътрудничество. Изберете удобен начин за връзка.',
    'contacts.form.firstName': 'Име',
    'contacts.form.lastName': 'Фамилия',
    'contacts.form.email': 'Имейл',
    'contacts.form.message': 'Разкажете за вашия проект',
    'contacts.form.submit': 'Изпрати съобщение',
    'contacts.info.email': 'Имейл',
    'contacts.info.phone': 'Телефон',
    'contacts.info.address': 'Адрес',
    'contacts.info.workingHours': 'Работно време',
    'contacts.info.addressText': 'гр. София, бул. Витоша, 15\nБЦ "Технопарк", офис 420\n1000, България',
    'contacts.info.workingHoursText': 'Пн-Пт: 9:00 - 18:00\nСб-Нд: по договаряне',

    // FAQ
    'faq.title': 'Често задавани въпроси',
    'faq.description': 'Отговори на най-популярните въпроси за нашите услуги за разработка на софтуер и IT-решения',
    'faq.q1': 'Какви технологии използвате за разработка?',
    'faq.a1': 'Работим със съвременен стек от технологии: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Docker, Kubernetes. Изборът на технологии зависи от спецификата на проекта и вашите изисквания.',
    'faq.q2': 'Колко време отнема разработката на уеб приложение?',
    'faq.a2': 'Сроковете за разработка зависят от сложността на проекта. Прост сайт-визитка - 1-2 седмици, корпоративен сайт - 3-6 седмици, сложно уеб приложение - 2-6 месеца. Точните срокове се определят след анализ на техническото задание.',
    'faq.q3': 'Предоставяте ли техническа поддръжка след стартиране?',
    'faq.a3': 'Да, предоставяме пълна техническа поддръжка и съпровождане на проектите. Включва мониторинг, актуализации, поправяне на грешки, консултации. Предлагаме различни пакети за поддръжка в зависимост от вашите нужди.',
    'faq.q4': 'Как се осигурява сигурността на разработваните решения?',
    'faq.a4': 'Сигурността е наш приоритет. Използваме съвременни методи за защита: HTTPS, криптиране на данни, защита от SQL-инжекции, XSS-атаки, редовни одити за сигурност, спазване на стандартите OWASP, многофакторна автентификация.',
    'faq.q5': 'Можете ли да доработите съществуващ проект?',
    'faq.a5': 'Разбира се! Специализираме се в доработка и модернизация на съществуващи проекти. Провеждаме одит на кода, оптимизираме производителността, добавяме нов функционал, актуализираме дизайна и технологиите.',
    'faq.q6': 'Каква е стойността на вашите услуги?',
    'faq.a6': 'Стойността се изчислява индивидуално в зависимост от сложността на проекта, използваните технологии и сроковете. Предлагаме както фиксирана стойност на проекта, така и почасово заплащане. Безплатна консултация и оценка на проекта.',

    // CTA
    'cta.title': 'Започнете работа с нас днес!',
    'cta.description': 'Всичко необходимо за цифрова трансформация на вашия бизнес и растеж в която и да е точка от света.',

    // Footer
    'footer.description': 'Нов подход към създаването на надеждни, сигурни и ефективни IT-решения.',
    'footer.services': 'Услуги',
    'footer.support': 'Поддръжка',
    'footer.company': 'Компания',
    'footer.copyright': 'Copyright Ⓒ 2024 LotCompany. Всички права запазени.',

    // Buttons
    'button.startProject': 'Започни проект',
    'button.getStarted': 'Започни',
    'button.project': 'проект',
  },

  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.solutions': 'Рішення',
    'nav.clients': 'Клієнти',
    'nav.contacts': 'Контакти',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.discount': 'Безкоштовна консультація з вашого проекту',
    'hero.title1': 'Інноваційні',
    'hero.title2': 'IT-рішення',
    'hero.title3': 'для вашого бізнесу.',
    'hero.description': 'Наша команда експертів використовує передові технології для створення надійних та масштабованих рішень. Ми спеціалізуємося на веб-розробці, мобільних додатках та кібербезпеці.',

    // Stats
    'stats.projects': 'Завершених проектів',
    'stats.clients': 'Задоволених клієнтів',
    'stats.experience': 'Років досвіду',

    // Business Section
    'business.title': 'Ви займаєтесь бізнесом, ми вирішуємо технічні завдання.',
    'business.description': 'З правильними IT-рішеннями ви можете покращити ефективність свого бізнесу, автоматизувати процеси та забезпечити безпеку даних. Ми пропонуємо повний спектр послуг розробки.',
    'business.feature1.title': 'Веб-розробка',
    'business.feature1.content': 'Створюємо сучасні веб-додатки з використанням передових технологій та найкращих практик розробки',
    'business.feature2.title': 'Кібербезпека',
    'business.feature2.content': 'Забезпечуємо максимальний захист ваших даних та систем від сучасних кіберзагроз',
    'business.feature3.title': 'Мобільні додатки',
    'business.feature3.content': 'Розробляємо нативні та кросплатформні мобільні додатки для iOS та Android',

    // Billing Section
    'billing.title': 'Легко керуйте вашими IT-системами та процесами',
    'billing.description': 'Наші рішення дозволяють ефективно керувати всіма аспектами вашої IT-інфраструктури. Від розробки до впровадження та підтримки - ми забезпечуємо повний цикл послуг.',

    // Card Deal Section
    'carddeal.title': 'Знайдіть найкраще IT-рішення в кілька простих кроків.',
    'carddeal.description': 'Ми аналізуємо ваші потреби та пропонуємо оптимальні технологічні рішення. Наш підхід гарантує максимальну ефективність та рентабельність інвестицій.',

    // Testimonials
    'testimonials.title': 'Що кажуть наші клієнти',
    'testimonials.description': 'Все необхідне для успішної цифровізації та розвитку вашого бізнесу за допомогою сучасних IT-технологій.',
    'testimonials.feedback1': 'Команда професіоналів найвищого рівня. Проект був виконаний вчасно та перевершив усі наші очікування.',
    'testimonials.feedback2': 'Відмінна якість коду та увага до деталей. Рекомендую як надійного партнера в IT-розробці.',
    'testimonials.feedback3': 'Завдяки їхній експертизі в галузі безпеки, ми змогли захистити наші системи від усіх видів загроз.',

    // Contacts
    'contacts.title': 'Зв\'яжіться з нами',
    'contacts.description': 'Готові обговорити ваш проект? Заповніть форму, і наші експерти зв\'яжуться з вами протягом 24 годин для безкоштовної консультації.',
    'contacts.info.title': 'Контактна інформація',
    'contacts.info.description': 'Ми завжди готові відповісти на ваші питання та обговорити можливості співпраці. Оберіть зручний спосіб зв\'язку.',
    'contacts.form.firstName': 'Ім\'я',
    'contacts.form.lastName': 'Прізвище',
    'contacts.form.email': 'Email',
    'contacts.form.message': 'Розкажіть про ваш проект',
    'contacts.form.submit': 'Надіслати повідомлення',
    'contacts.info.email': 'Email',
    'contacts.info.phone': 'Телефон',
    'contacts.info.address': 'Адреса',
    'contacts.info.workingHours': 'Робочий час',
    'contacts.info.addressText': 'м. Київ, вул. Хрещатик, 15\nБЦ "Технопарк", офіс 420\n01001, Україна',
    'contacts.info.workingHoursText': 'Пн-Пт: 9:00 - 18:00\nСб-Нд: за домовленістю',

    // FAQ
    'faq.title': 'Часто задавані питання',
    'faq.description': 'Відповіді на найпопулярніші питання про наші послуги розробки програмного забезпечення та IT-рішень',
    'faq.q1': 'Які технології ви використовуєте для розробки?',
    'faq.a1': 'Ми працюємо з сучасним стеком технологій: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Docker, Kubernetes. Вибір технологій залежить від специфіки проекту та ваших вимог.',
    'faq.q2': 'Скільки часу займає розробка веб-додатку?',
    'faq.a2': 'Терміни розробки залежать від складності проекту. Простий сайт-візитка - 1-2 тижні, корпоративний сайт - 3-6 тижнів, складний веб-додаток - 2-6 місяців. Точні терміни визначаються після аналізу технічного завдання.',
    'faq.q3': 'Чи надаєте ви технічну підтримку після запуску?',
    'faq.a3': 'Так, ми надаємо повну технічну підтримку та супровід проектів. Включає моніторинг, оновлення, виправлення помилок, консультації. Пропонуємо різні пакети підтримки залежно від ваших потреб.',
    'faq.q4': 'Як забезпечується безпека розроблюваних рішень?',
    'faq.a4': 'Безпека - наш пріоритет. Ми використовуємо сучасні методи захисту: HTTPS, шифрування даних, захист від SQL-ін\'єкцій, XSS-атак, регулярні аудити безпеки, дотримання стандартів OWASP, багатофакторна автентифікація.',
    'faq.q5': 'Чи можете ви доопрацювати існуючий проект?',
    'faq.a5': 'Звичайно! Ми спеціалізуємося на доопрацюванні та модернізації існуючих проектів. Проводимо аудит коду, оптимізуємо продуктивність, додаємо новий функціонал, оновлюємо дизайн та технології.',
    'faq.q6': 'Яка вартість ваших послуг?',
    'faq.a6': 'Вартість розраховується індивідуально залежно від складності проекту, використовуваних технологій та термінів. Пропонуємо як фіксовану вартість проекту, так і погодинну оплату. Безкоштовна консультація та оцінка проекту.',

    // CTA
    'cta.title': 'Почніть працювати з нами вже сьогодні!',
    'cta.description': 'Все необхідне для цифрової трансформації вашого бізнесу та зростання в будь-якій точці світу.',

    // Footer
    'footer.description': 'Новий підхід до створення надійних, безпечних та ефективних IT-рішень.',
    'footer.services': 'Послуги',
    'footer.support': 'Підтримка',
    'footer.company': 'Компанія',
    'footer.copyright': 'Copyright Ⓒ 2024 LotCompany. Всі права захищені.',

    // Buttons
    'button.startProject': 'Почати проект',
    'button.getStarted': 'Почати',
    'button.project': 'проект',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.clients': 'Clients',
    'nav.contacts': 'Contacts',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.discount': 'Free consultation for your project',
    'hero.title1': 'Innovative',
    'hero.title2': 'IT Solutions',
    'hero.title3': 'for your business.',
    'hero.description': 'Our team of experts uses cutting-edge technologies to create reliable and scalable solutions. We specialize in web development, mobile applications, and cybersecurity.',

    // Stats
    'stats.projects': 'Completed Projects',
    'stats.clients': 'Satisfied Clients',
    'stats.experience': 'Years of Experience',

    // Business Section
    'business.title': 'You focus on business, we solve technical challenges.',
    'business.description': 'With the right IT solutions, you can improve your business efficiency, automate processes, and ensure data security. We offer a full range of development services.',
    'business.feature1.title': 'Web Development',
    'business.feature1.content': 'We create modern web applications using cutting-edge technologies and best development practices',
    'business.feature2.title': 'Cybersecurity',
    'business.feature2.content': 'We ensure maximum protection of your data and systems from modern cyber threats',
    'business.feature3.title': 'Mobile Applications',
    'business.feature3.content': 'We develop native and cross-platform mobile applications for iOS and Android',

    // Billing Section
    'billing.title': 'Easily manage your IT systems and processes',
    'billing.description': 'Our solutions allow you to effectively manage all aspects of your IT infrastructure. From development to implementation and support - we provide a full cycle of services.',

    // Card Deal Section
    'carddeal.title': 'Find the best IT solution in a few simple steps.',
    'carddeal.description': 'We analyze your needs and offer optimal technological solutions. Our approach guarantees maximum efficiency and return on investment.',

    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.description': 'Everything you need for successful digitalization and business growth using modern IT technologies.',
    'testimonials.feedback1': 'A team of professionals of the highest level. The project was completed on time and exceeded all our expectations.',
    'testimonials.feedback2': 'Excellent code quality and attention to detail. I recommend as a reliable partner in IT development.',
    'testimonials.feedback3': 'Thanks to their expertise in security, we were able to protect our systems from all types of threats.',

    // Contacts
    'contacts.title': 'Contact Us',
    'contacts.description': 'Ready to discuss your project? Fill out the form and our experts will contact you within 24 hours for a free consultation.',
    'contacts.info.title': 'Contact Information',
    'contacts.info.description': 'We are always ready to answer your questions and discuss cooperation opportunities. Choose a convenient way to contact us.',
    'contacts.form.firstName': 'First Name',
    'contacts.form.lastName': 'Last Name',
    'contacts.form.email': 'Email',
    'contacts.form.message': 'Tell us about your project',
    'contacts.form.submit': 'Send Message',
    'contacts.info.email': 'Email',
    'contacts.info.phone': 'Phone',
    'contacts.info.address': 'Address',
    'contacts.info.workingHours': 'Working Hours',
    'contacts.info.addressText': 'London, Oxford Street, 15\nTech Park Business Center, Office 420\nW1C 1DE, United Kingdom',
    'contacts.info.workingHoursText': 'Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: By appointment',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Answers to the most popular questions about our software development services and IT solutions',
    'faq.q1': 'What technologies do you use for development?',
    'faq.a1': 'We work with a modern technology stack: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Docker, Kubernetes. The choice of technologies depends on the project specifics and your requirements.',
    'faq.q2': 'How long does web application development take?',
    'faq.a2': 'Development timelines depend on project complexity. Simple landing page - 1-2 weeks, corporate website - 3-6 weeks, complex web application - 2-6 months. Exact timelines are determined after technical requirements analysis.',
    'faq.q3': 'Do you provide technical support after launch?',
    'faq.a3': 'Yes, we provide full technical support and project maintenance. Includes monitoring, updates, bug fixes, consultations. We offer various support packages depending on your needs.',
    'faq.q4': 'How is the security of developed solutions ensured?',
    'faq.a4': 'Security is our priority. We use modern protection methods: HTTPS, data encryption, protection against SQL injections, XSS attacks, regular security audits, OWASP standards compliance, multi-factor authentication.',
    'faq.q5': 'Can you improve an existing project?',
    'faq.a5': 'Absolutely! We specialize in improving and modernizing existing projects. We conduct code audits, optimize performance, add new functionality, update design and technologies.',
    'faq.q6': 'What is the cost of your services?',
    'faq.a6': 'Cost is calculated individually depending on project complexity, technologies used, and timelines. We offer both fixed project cost and hourly payment. Free consultation and project evaluation.',

    // CTA
    'cta.title': 'Start working with us today!',
    'cta.description': 'Everything you need for digital transformation of your business and growth anywhere in the world.',

    // Footer
    'footer.description': 'A new approach to creating reliable, secure, and efficient IT solutions.',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.company': 'Company',
    'footer.copyright': 'Copyright Ⓒ 2024 LotCompany. All rights reserved.',

    // Buttons
    'button.startProject': 'Start Project',
    'button.getStarted': 'Get',
    'button.project': 'Started',
  }
};