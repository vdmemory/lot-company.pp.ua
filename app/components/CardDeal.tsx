"use client";
import { motion } from "framer-motion";
import { card } from "../../public";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import React from "react";

const CardDeal = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section">
      <motion.div
        className="sectionInfo"
        variants={slideIn("left", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="heading2">
          {t('carddeal.title')}
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          {t('carddeal.description')}
        </p>

          <a
              href={'#contacts'}
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}
          >
              {t('button.startProject')}
          </a>
      </motion.div>

      <motion.div
        className="sectionImg"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={card}
          width={0}
          height={0}
          alt="billing"
          className="w-[100%] h-[100%]"
        />
      </motion.div>
    </section>
  );
};

export default CardDeal;