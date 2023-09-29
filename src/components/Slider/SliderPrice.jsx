import { useState } from "react";
import { price } from "../../constants/price";
import { rec, noRec } from "../../assets/img";

const SliderPrice = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? price.length - 7 : curr - 1));
    console.log(1);
  };

  const next = () => {
    setCurr((curr) => (curr === price.length - 7 ? 0 : curr + 1));
    console.log(1);
  };

  return (
    <div className="overflow-hidden w-[800px] h-[600px] flex gap-x-6 z-50 relative">
      <div
        className="flex flex-col w-full gap-y-3 transition-transform ease-out duration-500"
        style={{ transform: `translateY(-${curr * 86}px)`, zIndex: 99999 }}
      >
        {price.map(({ name, price }, idx) => (
          <div
            key={idx}
            className="w-full py-3 justify-center items-center px-8 flex gap-x-8 border border-[#B7B7B7] group hover:bg-black"
          >
            <p className="text-[22px] group-hover:hidden whitespace-nowrap font-bold leading-6 uppercase">
              {name}
            </p>
            <p className="text-[22px] hidden group-hover:block text-white whitespace-nowrap font-bold leading-6 uppercase">
              Записывайтесь в удобное для вас время
            </p>
            <div className="w-full border02 group-hover:bg-none h-[1px] border-dashed border border-[#B7B7B7]">
              &nbsp;
            </div>
            <p className="text-[22px] group-hover:hidden whitespace-nowrap font-bold leading-6 uppercase py-3 px-6">
              {price}
            </p>
            <button
              className={`group/button hidden group-hover:flex justify-center items-center py-3 px-6 gap-[10px] rounded-lg bg-white hover:bg-[#FFDDDD]`}
            >
              <div className="h-4 w-4">
                <img className="group-hover/button:block hidden" src={rec} alt="Rec" />

                <img
                  className="block group-hover/button:hidden"
                  src={noRec}
                  alt="noRec"
                />
              </div>

              <span className="font-bold uppercase leading-6 text-[#010101]">
                Запись
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col relative z-50 items-center justify-center gap-2  h-full">
        <button
          onClick={prev}
          className="flex justify-center items-center px-2 py-[11px] rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M13 7L7 1L1 7"
              stroke="#010101"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="flex justify-center items-center px-2 py-[11px] rounded-full bg-white rotate-180"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M13 7L7 1L1 7"
              stroke="#010101"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SliderPrice;
