"use client";

import logo from "../assets/logo.jpg";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import SocialLinks from "@/app/components/SocialLinks";
import {configCompany} from "@/app/data/configCompany";

const Footer = () => {
  const { t } = useLanguage();
  
  const footerLinks = [
    {
      title: t('footer.services'),
      links: [
        { name: "Веб-разработка", link: "https://www.lotcompany.com/web-development/" },
        { name: "Мобильные приложения", link: "https://www.lotcompany.com/mobile-apps/" },
        { name: "Кибербезопасность", link: "https://www.lotcompany.com/cybersecurity/" },
        { name: "DevOps", link: "https://www.lotcompany.com/devops/" },
        { name: "Консалтинг", link: "https://www.lotcompany.com/consulting/" },
      ],
    },
    {
      title: t('footer.support'),
      links: [
        { name: "Центр помощи", link: "https://www.lotcompany.com/help-center/" },
        { name: "Партнеры", link: "https://www.lotcompany.com/partners/" },
        { name: "Документация", link: "https://www.lotcompany.com/docs/" },
        { name: "Блог", link: "https://www.lotcompany.com/blog/" },
        { name: "Новости", link: "https://www.lotcompany.com/news/" },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { name: "О нас", link: "https://www.lotcompany.com/about/" },
        { name: "Карьера", link: "https://www.lotcompany.com/careers/" },
      ],
    },
  ];

  return (
    <section className="flexCenter paddingY flex-col">
      <div className="flexStart md:flex-row flex-col mb-8 w-full">
        <div className=" flex flex-col justify-start mr-10 gap-6">
          <div className="flex-[1] flex items-center justify-start mr-10 gap-6">
            <Image src={logo} alt="hoobank" width={48} height={32} loading="eager" />
            <h1 className="text-white text-[28px] font-bold">
              {configCompany.name}
            </h1>
          </div>
          <div className="flex-[1] flex items-center justify-start mr-10 gap-6">
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {t('footer.description')}
            </p>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h1>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {t('footer.copyright')}
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          <SocialLinks isLight />
        </div>
      </div>
    </section>
  );
};

export default Footer;