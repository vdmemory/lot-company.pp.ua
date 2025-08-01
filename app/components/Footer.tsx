"use client";

import logo from "../assets/logo.jpg";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import SocialLinks from "@/app/components/SocialLinks";
import {configCompany} from "@/app/data/configCompany";
import {useState} from "react";

const Footer = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState("Home");

  const navLinks = [
    {
      id: "home",
      title: t('nav.home'),
    },
    {
      id: "services",
      title: t('nav.services'),
    },
    {
      id: "solutions",
      title: t('nav.solutions'),
    },
    {
      id: "faq",
      title: t('nav.faq'),
    },
  ];

  return (
    <section className="flexCenter paddingY flex-col">
      <div className="flexCenter md:flex-row flex-col mb-8 w-full">
        <div className=" flex flex-col justify-start mr-10 gap-6">
          <div className="flex-[1] flex items-center justify-start mr-10 gap-6">
            <Image src={logo} alt="hoobank" width={48} height={32} loading="eager" />
            <h1 className="text-white text-[28px] font-bold">
              {configCompany.name}
            </h1>
          </div>
          <div className="flex-[1] flex items-center justify-start mr-10 gap-6">
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {
                language === "en" ? configCompany.infoEng : language === 'uk' ? configCompany.infoUa : configCompany.info
              }
            </p>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
              <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
                      active === nav.title ? "text-secondary" : "text-white"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
          ))}
          </ul>
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