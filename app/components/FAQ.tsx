"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "../styles/animations";
import { useLanguage } from "../contexts/LanguageContext";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}


const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-dimWhite/20 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full py-6 px-0 text-left flex justify-between items-center hover:text-secondary transition-colors duration-300 focus:outline-none"
    >
      <h3 className="font-poppins font-medium text-[18px] leading-[28px] text-white pr-4">
        {item.question}
      </h3>
      <div className="flex-shrink-0">
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <div className="relative">
            <div className="w-4 h-0.5 bg-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-0.5 h-4 bg-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      </div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-6 pr-10">
            <p className="font-poppins font-normal text-[16px] leading-[26px] text-dimWhite">
              {item.answer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: "faq-1",
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      id: "faq-2",
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      id: "faq-3",
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      id: "faq-4",
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      id: "faq-5",
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      id: "faq-6",
      question: t('faq.q6'),
      answer: t('faq.a6')
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="paddingY">
      <motion.div
        className="w-full"
        variants={slideIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="heading2 mb-4">
            {t('faq.title')}
          </h2>
          <p className="paragraph max-w-[600px] mx-auto">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;