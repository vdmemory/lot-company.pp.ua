"use client";

import FeedbackCard from "./FeedbackCard";
import { useLanguage } from "../contexts/LanguageContext";
import { people01, people02, people03 } from "../../public";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const feedback = [
    {
      id: "feedback-1",
      content: t('testimonials.feedback1'),
      name: "Алексей Петров",
      title: "CTO, TechCorp",
      img: people01,
    },
    {
      id: "feedback-2",
      content: t('testimonials.feedback2'),
      name: "Мария Сидорова",
      title: "Директор по развитию, InnovateLab",
      img: people02,
    },
    {
      id: "feedback-3",
      content: t('testimonials.feedback3'),
      name: "Дмитрий Козлов",
      title: "IT-директор, SecureBank",
      img: people03,
    },
  ];

  return (
    <section id="clients" className="paddingY flexCenter flex-col relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="heading2">
          {t('testimonials.title')}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="paragraph text-left max-w-[450px]">
            {t('testimonials.description')}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;