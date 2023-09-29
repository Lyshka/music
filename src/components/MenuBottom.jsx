const MenuBottom = () => {
  return (
    <div className="z-[9999] w-full px-[84px] bottom-8 fixed flex justify-between items-end animate-menuBottom translate-y-[1000px]">
      <div className="bg-[#010101] p-2 flex justify-center items-center">
        <span className="text-white font-bebasNeue text-2xl leading-6 text-center">
          Могилев
        </span>
      </div>
      <div className="bg-[#010101] max-w-[201px] p-2 flex justify-center items-center">
        <span
          className={`text-white text-2xl font-bebasNeuePro uppercase leading-6 text-center`}
        >
          Поможем сделать ваш звук узнаваемым
        </span>
      </div>
      <div className="bg-[#010101] p-2 flex justify-center items-center">
        <span
          className={`text-white font-bebasNeue font-normal text-2xl leading-6 text-center`}
        >
          © 2023
        </span>
      </div>
    </div>
  );
};
export default MenuBottom;
