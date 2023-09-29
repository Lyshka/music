import { useContext, useEffect, useState } from "react";

import { AnimationContext } from "../context/AnimationContext";
import { mainPhoto } from "../assets/img";

const Photo = () => {
  const [animateDiv, setAnimateDiv] = useState("");
  const [animate, setAnimate] = useState("");
  const { active } = useContext(AnimationContext);

  useEffect(() => {
    if (active === 0) {
      setAnimateDiv("animate-div-left-for-zero");
      setAnimate("animate-img-left-for-zero");
      return;
    }

    if (active % 2 === 0) {
      setAnimateDiv("animate-div-center-right-to-left");
      setAnimate("animate-img-center");
    } else {
      setAnimateDiv("animate-div-center-left-to-right");
      setAnimate("animate-img-center");
    }

    setTimeout(() => {
      if (active % 2 === 0) {
        setAnimateDiv("animate-div-left");
        setAnimate("animate-img-left");
      } else {
        setAnimateDiv("animate-div-right");
        setAnimate("animate-img-right");
      }
    }, 2000);
  }, [active]);

  return (
    <div
      className={`flex transition-all duration-200 w-full fixed z-30 justify-center items-center h-screen ${animateDiv}`}
    >
      <img
        className={`w-[647px] h-[656px] transition-all duration-200 absolute ${animate} z-20`}
        src={mainPhoto}
        alt="mainPhoto"
      />
    </div>
  );
};
export default Photo;
