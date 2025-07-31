"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages = [
  { code: 'bg' as Language, name: 'Български', flag: '🇧🇬' },
  { code: 'uk' as Language, name: 'Українська', flag: '🇺🇦' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-transparent border border-dimWhite/20 hover:border-secondary transition-colors duration-300 focus:outline-none"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-white font-poppins text-sm hidden sm:block">
          {currentLanguage?.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white"
        >
          ▼
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-black-gradient border border-dimWhite/20 rounded-lg shadow-lg z-50 min-w-[160px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-dimBlue/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? 'text-secondary' : 'text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-poppins text-sm">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;