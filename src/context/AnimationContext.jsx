import { createContext, useEffect, useRef, useState } from "react";

export const AnimationContext = createContext();

const AnimationContextProvider = ({ children }) => {
  const scrollRefs = useRef();

  const [active, setActive] = useState(0);
  const [activeLength, setActiveLength] = useState(5);

  const scrollHandler = () => {
    const scrollRefsElements = [...scrollRefs.current.children];

    const elementsInViewport = scrollRefsElements
      .filter((el, i) => {
        const rect = el.getBoundingClientRect();

        const elemTop = rect.top;

        return window.pageYOffset + rect.height >= el.offsetTop + elemTop;
      })
      .map((_, i) => i);

    setActive(elementsInViewport[elementsInViewport.length - 1]);

    setActiveLength(scrollRefsElements.length);
  };

  useEffect(() => {
    window.addEventListener("scrollend", scrollHandler);

    return () => window.removeEventListener("scrollend", scrollHandler);
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        scrollRefs,
        active,
        activeLength,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContextProvider;
