import { motion } from "framer-motion";

import { textFaq } from "../assets/img";
import { Layout } from "../components";
import { rules } from "../constants/rules";

const Faq = () => {
  const aboutAnimation = {
    hidden: {
      x: -2000,
    },
    visible: (custom) => ({
      x: 0,
      transitionDuration: "2s",
      transition: { delay: custom },
    }),
  };

  const blockAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 100,
      transition: {
        delay: 2.5,
        duration: 2,
      },
    }),
  };

  const imgAnimation = {
    hidden: {
      right: -700,
    },
    visible: (custom) => ({
      right: 10,
      transitionDuration: "1s",
      transition: { delay: custom },
    }),
  };

  return (
    <Layout variants={aboutAnimation} img={textFaq} id={"faq"}>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={blockAnimation}
        className="w-full flex justify-end"
      >
        <div className="flex flex-col justify-end items-end gap-y-14">
          <div>
            <h2 className="font-bold uppercase text-[80px] leading-[88px] text-right">
              Правила студии
            </h2>
            <p className="text-right leading-6">
              При посещении нашей студии просим вас соблюдать следующие
              рекомендации
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-20">
            {rules.map(({ value }, idx) => (
              <div key={idx} className="flex justify-center items-start">
                <span className="font-bold text-[80px] leading-[88px]">
                  {idx + 1}.
                </span>
                <p className="font-light leading-6 max-w-[372px]">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center w-full">
            <p className="text-center max-w-[320px] leading-6">
              Мы оставляем за собой право отказать в предоставлении услуг в
              случае нарушения данных рекомендаций.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};
export default Faq;
