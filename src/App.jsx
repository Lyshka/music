import { About, Contacts, Distribution, Faq, Price } from "./pages";
import { Header, MenuBottom, Photo, Progress } from "./components";
import { useContext } from "react";
import { AnimationContext } from "./context/AnimationContext";

const App = () => {
  const { scrollRefs, active } = useContext(AnimationContext);

  return (
    <>
      <Photo />
      <Header />
      <div ref={scrollRefs}>
        <About />
        <Price />
        <Contacts />
        <Distribution />
        <Faq />
      </div>
      <MenuBottom />
      <Progress />
    </>
  );
};
export default App;
