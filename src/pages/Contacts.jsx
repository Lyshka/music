import { Map, YMaps } from "@pbe/react-yandex-maps";
import { motion } from "framer-motion";

import { textContacts } from "../assets/img";
import { Layout } from "../components";
import { social } from "../constants/social";

const Contacts = () => {
  const contactsAnimation = {
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
    <Layout variants={contactsAnimation} img={textContacts} id={"contacts"}>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={blockAnimation}
        className="flex justify-end w-full"
      >
        <div className="flex flex-col justify-end items-end">
          <div>
            <h2 className="font-bold text-[80px] leading-[88px] text-right uppercase">
              Контакты
            </h2>

            <p className="leading-6 text-right">
              Здесь вы узнаете как можно с нами связаться и где мы находимся
            </p>
          </div>

          <div className="w-full mt-[72px] flex justify-between items-start">
            <div>
              <p className="font-bold leading-6 uppercase">Социальные сети</p>

              <div className="flex gap-x-4 mt-2 justify-center items-center">
                {social.map(({ iconOff, iconOn, url }, idx) => (
                  <a
                    href={url}
                    key={idx}
                    className="group cursor-pointer z-[999]"
                  >
                    <img
                      className="block group-hover:hidden"
                      src={iconOff}
                      alt="icon"
                    />
                    <img
                      className="group-hover:block hidden"
                      src={iconOn}
                      alt="icon"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold leading-6 text-right uppercase">
                Контакты и адрес
              </p>
              <div className="mt-2">
                <p className="text-right leading-6">+37529 630 89 99</p>
                <p className="text-right leading-6">
                  г. Могилев, ул. Пионерская
                </p>
              </div>
            </div>
          </div>

          <div className="w-[716px] h-[464px] mt-4">
            <YMaps
              query={{
                apikey: "3f9e23f5-c411-4d66-a698-9c6faa3595eb",
              }}
            >
              <Map
                className="w-full h-full"
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              />
            </YMaps>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};
export default Contacts;
