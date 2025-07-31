"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import Button from "./Button";
import { useLanguage } from "../contexts/LanguageContext";
import { send, shield, star } from "../../public";
import {features} from "@/app/constants";

interface featureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: featureCardProps) => (
  <div
    className={`flex p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue">
      <Image
        src={icon}
        alt="icon"
        width={0}
        height={0}
        className="w-[50%] h-[50%] object-contain"
        priority={true}
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h1 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h1>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      id: "feature-1",
      icon: star,
      title: t('business.feature1.title'),
      content: t('business.feature1.content'),
    },
    {
      id: "feature-2",
      icon: shield,
      title: t('business.feature2.title'),
      content: t('business.feature2.content'),
    },
    {
      id: "feature-3",
      icon: send,
      title: t('business.feature3.title'),
      content: t('business.feature3.content'),
    },
  ];

  return (
    <section id="services" className="section">
      <motion.div
        className="sectionInfo"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="heading2">
          {t('business.title')}
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          {t('business.description')}
        </p>

        <Button styles={`mt-10`} />
      </motion.div>

      <div className="sectionImg flex-col">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={fadeIn("left", "spring", index * 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FeatureCard key={feature.id} {...feature} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Business;