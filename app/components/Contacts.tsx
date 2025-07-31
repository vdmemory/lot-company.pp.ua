"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { useLanguage } from "../contexts/LanguageContext";

const Contacts = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contacts" className="section">
      <motion.div
        className="flex-1 flex flex-col"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="heading2 mb-4">
          {t('contacts.title')}
        </h2>
        <p className="paragraph max-w-[470px] mb-8">
          {t('contacts.description')}
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-[500px]">
          <div className="flex flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                name="firstName"
                placeholder={t('contacts.form.firstName')}
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-4 bg-transparent border border-dimWhite rounded-[10px] text-white placeholder-dimWhite font-poppins text-[16px] focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="lastName"
                placeholder={t('contacts.form.lastName')}
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-4 bg-transparent border border-dimWhite rounded-[10px] text-white placeholder-dimWhite font-poppins text-[16px] focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder={t('contacts.form.email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-dimWhite rounded-[10px] text-white placeholder-dimWhite font-poppins text-[16px] focus:border-secondary focus:outline-none transition-colors"
            />
          </div>

          <div className="mb-8">
            <textarea
              name="message"
              placeholder={t('contacts.form.message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-4 bg-transparent border border-dimWhite rounded-[10px] text-white placeholder-dimWhite font-poppins text-[16px] focus:border-secondary focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="py-4 px-8 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
          >
            {t('contacts.form.submit')}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col md:ml-10 ml-0 md:mt-0 mt-10"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="heading2 mb-4">
          {t('contacts.info.title')}
        </h2>
        <p className="paragraph max-w-[470px] mb-8">
          {t('contacts.info.description')}
        </p>

        <div className="space-y-6">
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">
              {t('contacts.info.email')}
            </h3>
            <a 
              href="mailto:info@lotcompany.ru"
              className="font-poppins text-[18px] text-secondary hover:text-white transition-colors cursor-pointer"
            >
              info@lotcompany.ru
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">
              {t('contacts.info.phone')}
            </h3>
            <a 
              href="tel:+74951234567"
              className="font-poppins text-[18px] text-secondary hover:text-white transition-colors cursor-pointer"
            >
              +7 (495) 123-45-67
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">
              {t('contacts.info.address')}
            </h3>
            <p className="font-poppins text-[18px] text-dimWhite leading-[28px]">
              {t('contacts.info.addressText').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t('contacts.info.addressText').split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">
              {t('contacts.info.workingHours')}
            </h3>
            <p className="font-poppins text-[18px] text-dimWhite leading-[28px]">
              {t('contacts.info.workingHoursText').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t('contacts.info.workingHoursText').split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;