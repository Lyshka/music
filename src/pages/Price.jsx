import { motion } from "framer-motion";

import { textPrice, toolBg2 } from "../assets/img";
import { Layout, SliderPrice } from "../components";

const Price = () => {
  const priceAnimation = {
    hidden: {
      x: 2000,
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
    <div className="relative">
      <motion.img
        custom={2.5}
        initial="hidden"
        whileInView={"visible"}
        variants={imgAnimation}
        src={toolBg2}
        alt="toolBg"
        className="absolute right-10 bottom-14 overflow-hidden"
      />
      <Layout variants={priceAnimation} img={textPrice} id={"price"}></Layout>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={blockAnimation}
        id="up"
        className="text-[#010101] pl-[84px] flex flex-col justify-start items-start absolute z-50 top-1/2 -translate-y-1/2"
      >
        <h2 className="text-[80px] font-bold uppercase leading-[88px]">
          Услуги
        </h2>
        <p className="leading-6">
          Услуги которые мы предоставляем нашим клиентам
        </p>

        <div className="mt-8">
          <SliderPrice />
        </div>
      </motion.div>
    </div>
  );
};
export default Price;
