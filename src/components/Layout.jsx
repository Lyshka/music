import { motion } from "framer-motion";

const Layout = ({ children, img, id, variants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount: 1, margin: "500px" }}
      id={id}
      className="flex snap-start overflow-hidden z-20 relative justify-start items-center w-full h-screen pr-[84px]"
    >
      <motion.div custom={1} variants={variants} className="absolute w-full h-full">
        <img src={img} alt="textInfo"/>
      </motion.div>
      {children}
    </motion.div>
  );
};
export default Layout;
