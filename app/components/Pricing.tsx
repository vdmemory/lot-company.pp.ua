"use client";

import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { useLanguage } from "../contexts/LanguageContext";

const Pricing = () => {
    const { t, tLists } = useLanguage();

    const plans = [
        {
            title: t('pricing.basic.title'),
            price: t('pricing.basic.price'),
            features: tLists('pricing.basic.features'),
        },
        {
            title: t('pricing.professional.title'),
            price: t('pricing.professional.price'),
            features: tLists('pricing.professional.features'),
        },
        {
            title: t('pricing.enterprise.title'),
            price: t('pricing.enterprise.price'),
            features: tLists('pricing.enterprise.features'),
        },
    ];

    return (
        <section id="pricing" className="section">
            <motion.div
                className="flex flex-col items-center w-full"
                variants={slideIn("left", "tween", 0.01, 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <h2 className="heading2 mb-4 text-center">
                    {t("pricing.title")}
                </h2>
                <p className="paragraph max-w-[700px] text-center mb-12">
                    {t("pricing.description")}
                    Choose the plan that fits your needs. All plans include a free consultation and support.
                </p>

                <div className="flex justify-center gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between w-full max-w-[300px] bg-white/5 border border-white/10 rounded-[12px] p-6 text-white hover:border-secondary hover:shadow-xl transition-all"
                        >
                            <div className="flex flex-col justify-center">
                                <h3 className="text-[22px] font-semibold mb-2">{plan.title}</h3>
                                <p className="text-[28px] font-bold text-secondary mb-4">{plan.price}</p>
                                <ul className="space-y-2 text-[16px] mb-6">

                                    {plan.features.map((feature, i) => (
                                        <li key={i}>- {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Pricing;
