import { motion } from "framer-motion";

import { textDistribution } from "../assets/img";
import { Form, Layout } from "../components";

const Distribution = () => {
  const distributionAnimation = {
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
      <Layout
        variants={distributionAnimation}
        img={textDistribution}
        id={"distribution"}
      ></Layout>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={blockAnimation}
        className="text-[#010101] pl-[84px] flex flex-col justify-start items-start absolute z-50 top-1/2 -translate-y-1/2"
      >
        <h2 className="text-[80px] font-bold uppercase leading-[88px]">
          Дистрибуция
        </h2>
        <p className="leading-6 w-[484px]">
          Размещение на всех музыкальных стриминговых сервисах, таких как Apple
          Music, Boom, Spotify, Yandex Music, YouTube Music, Deezer, Tidal,
          Soundcloud, VK, Tik-Tok, СберЗвук и другие.
        </p>

        <div className="mt-8">
          <Form />
        </div>
      </motion.div>
    </div>
  );
};
export default Distribution;
