import { motion } from "framer-motion";

import { textAbout, toolsBg } from "../assets/img";
import { Layout, SliderPhoto } from "../components";

const About = () => {
  const aboutAnimation = {
    hidden: {
      x: -2000,
    },
    visible: (custom) => ({
      x: 0,
      transitionDuration: "1s",
      transition: { delay: custom },
    }),
  };

  const textH2Animation = {
    hidden: {
      height: "0px",
      overflow: "hidden",
    },
    visible: (custom) => ({
      height: "24px",
      overflow: "hidden",
      transitionDuration: "1s",
      transition: { delay: 2.5 },
    }),
  };

  const textPAnimation = {
    hidden: {
      height: "0px",
      overflow: "hidden",
    },
    visible: (custom) => ({
      height: "48px",
      overflow: "hidden",
      transitionDuration: "2s",
      transition: { delay: 2.5 },
    }),
  };

  const imgAnimation = {
    hidden: {
      opacity: 0
    },
    visible: (custom) => ({
      opacity: 100,
      transition: { 
        delay: 2.5,
        duration: 2
       },
    }),
  };

  return (
    <Layout variants={aboutAnimation} img={textAbout} id={"about"}>
      <motion.img variants={imgAnimation} className="absolute left-10" src={toolsBg} alt="tools" />
      <div className="flex w-full justify-end pt-28">
        <div className="flex flex-col justify-start items-center gap-y-[104px]">
          <SliderPhoto />

          <div className="flex flex-col gap-y-6 justify-start items-start text-[#010101] w-[420px] h-[200px] relative">
            <motion.h2
              variants={textH2Animation}
              initial="hidden"
              whileInView={"visible"}
              className="font-bold text-2xl leading-8 relative"
            >
              О нас
            </motion.h2>

            <p className="leading-6">
              <motion.p
                variants={textPAnimation}
                initial="hidden"
                whileInView={"visible"}
              >
                Студия нового уровня в Могилеве, которая открывает новые
                возможности не только для начинающих артистов
              </motion.p>
              <br />
              <motion.p
                variants={textPAnimation}
                initial="hidden"
                whileInView={"visible"}
              >
                Мы предоставляем качественное оборудование и услуги, которые
                помогут тебе стать востребованным артистом в Беларуси и не
                только
              </motion.p>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
