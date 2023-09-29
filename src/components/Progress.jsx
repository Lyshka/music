import { useContext } from "react";
import { motion } from "framer-motion";

import { AnimationContext } from "../context/AnimationContext";
import { pagination } from "../constants/pagination";

const Progress = () => {
  const { activeLength, active } = useContext(AnimationContext);

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

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={blockAnimation}
      className="fixed z-50 right-10 top-1/2 translate-x-1/2"
    >
      <div className="flex flex-col gap-y-2">
        {Array.from({ length: activeLength }).map((_, idx) => (
          <a
            href={pagination(idx + 1)}
            key={idx}
            className={`rounded-full w-2 transition-all duration-500  ${
              active === idx ? "bg-[#FF696B] h-6" : "bg-white h-2"
            }`}
          >
            &nbsp;
          </a>
        ))}
      </div>
    </motion.div>
  );
};
export default Progress;
