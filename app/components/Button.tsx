import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Button = ({ styles, children, onClick, className }: { styles?: string, children?: React.ReactNode, onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void, className?: string }) => {
  const { t } = useLanguage();
  
  return (
    <button
        onClick={onClick}
      type="button"
      className={className ?? `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      {children ?? t('button.startProject')}
    </button>
  );
};

export default Button;