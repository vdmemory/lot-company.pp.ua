"use client";

import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { useLanguage } from "../contexts/LanguageContext";

const Pricing = () => {
    const { t } = useLanguage();

    // const plans = [
    //     {
    //         title: t("pricing.basic.title"),
    //         price: t("pricing.basic.price"),
    //         features: t("pricing.basic.features").split("\n"),
    //     },
    //     {
    //         title: t("pricing.pro.title"),
    //         price: t("pricing.pro.price"),
    //         features: t("pricing.pro.features").split("\n"),
    //     },
    //     {
    //         title: t("pricing.enterprise.title"),
    //         price: t("pricing.enterprise.price"),
    //         features: t("pricing.enterprise.features").split("\n"),
    //     },
    // ];

    const plans = [
        {
            title: 'Basic Plan',
            price: '$99/month',
            features: [
                'Landing page or corporate website',
                'Responsive design',
                'SEO optimization',
                'Basic analytics',
                'SSL certificate',
                '3 months support',
                'Administration training',
            ],
        },
        {
            title: 'Professional Plan',
            price: '$199/month',
            features: [
                'Web application with CMS',
                'External API integration',
                'User management system',
                'Advanced analytics',
                'Automatic backup',
                'Security audit',
                '6 months support',
            ],
        },
        {
            title: 'Enterprise Plan',
            price: '$499/month',
            features: [
                'Custom web application development',
                'Scalable architecture',
                'Integration with third-party services',
                'Performance optimization',
                '24/7 support',
                'Security monitoring',
                '1 year support',
            ],
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
                    {/*{t("pricing.title")}*/}
                    Pricing Plans
                </h2>
                <p className="paragraph max-w-[700px] text-center mb-12 text-center">
                    {/*{t("pricing.description")}*/}
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

                            {/*<button className="w-full py-3 px-4 bg-blue-gradient rounded-[8px] text-primary font-medium text-[16px] hover:shadow-lg hover:shadow-secondary/25 transition">*/}
                            {/*    /!*{t("pricing.button")}*!/*/}
                            {/*    Get Started*/}
                            {/*</button>*/}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Pricing;
