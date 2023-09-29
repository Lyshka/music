import { slide } from "../../assets/img";

import { useEffect } from "react";
import { motion } from "framer-motion";

const SliderPhoto = () => {
  const Photo = [
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
  ];

  useEffect(() => {
    var TrandingSlider = new Swiper(".tranding-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        depth: 5,
        modifier: 7,
        stretch: 26,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const contactsAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      transition: {
        type: "tween",
        delay: custom,
        opacity: {
          duration: 1
        },
      },
      opacity: 100
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={"visible"}
      variants={contactsAnimation}
      custom={2.5}
      id="tranding"
    >
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
            {Photo.map((el, idx) => (
              <div key={idx} className={`swiper-slide tranding-slide`}>
                <div className="tranding-slide-img">
                  <img src={el} alt="Tranding" />
                </div>
              </div>
            ))}
          </div>

          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron-right">
                  <path
                    id="Vector"
                    d="M15 6L9 12L15 18"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-next slider-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron-right">
                  <path
                    id="Vector"
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default SliderPhoto;
