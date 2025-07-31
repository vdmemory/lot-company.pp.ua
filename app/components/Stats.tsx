"use client";

import { useLanguage } from "../contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      id: "stats-1",
      title: t('stats.projects'),
      value: "150+",
    },
    {
      id: "stats-2", 
      title: t('stats.clients'),
      value: "80+",
    },
    {
      id: "stats-3",
      title: t('stats.experience'),
      value: "8+",
    },
  ];

  return (
    <section className={`flexCenter flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h1 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h1>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;