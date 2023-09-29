import { useState } from "react";

import {
  logo,
  prevTrack,
  mute,
  muteOff,
  nextTrack,
  pause,
  play,
  rec,
  noRec,
} from "../assets/img";
import { menu } from "../constants/menu";

const Header = () => {
  const [playSound, setPlaySound] = useState(false);
  const [muteSound, setMuteSound] = useState(false);
  const [sound, setSound] = useState(0);

  return (
    <header className="flex animate-header sticky translate-y-[-1000px] top-0 z-50 text-white justify-between items-center px-[84px] py-6 w-full bg-[#010101]">
      <div className="flex items-center w-[864px] gap-60 flex-shrink-0">
        <a href="/">
          <img src={logo} alt="logo" className="h-14 w-14" />
        </a>

        <div className="flex-1 items-center gap-8 flex">
          <div className="flex items-center gap-4">
            <img
              className="w-4 h-4 cursor-pointer"
              src={prevTrack}
              alt="prevTrack"
            />
            <button
              className="p-4 flex justify-center items-center rounded-[500px] border-2 border-white"
              onClick={() => setPlaySound((prv) => !prv)}
            >
              {playSound ? (
                <img src={pause} alt="pause" />
              ) : (
                <img src={play} alt="play" />
              )}
            </button>
            <img
              className="w-4 h-4 cursor-pointer"
              src={nextTrack}
              alt="nextTrack"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center">
                <h6 className="text-white text-sm leading-4 font-bebasNeue">
                  ICEY - МОЯ СТУДИЯ
                </h6>
              </div>

              <div className="font-bebasNeue">
                <span>1:10</span> / <span>3:23</span>
              </div>
            </div>

            <div className="w-[360px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="360"
                height="2"
                viewBox="0 0 362 2"
                fill="none"
              >
                <path
                  d="M1 1H360"
                  stroke="#6D6D6D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={`M1 1H${sound}`}
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div
            onClick={() => setMuteSound((prv) => !prv)}
            className="cursor-pointer"
          >
            {muteSound ? (
              <img src={muteOff} alt="muteOff" />
            ) : (
              <img src={mute} alt="mute" />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-14">
        <ul className="flex items-center gap-10">
          {menu.map(({ name, url }, idx) => (
            <li key={idx}>
              <a
                href={url}
                className="text-white hover:border-b leading-8 uppercase"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`flex group justify-center items-center py-3 px-6 gap-[10px] rounded-lg bg-white hover:bg-[#FFDDDD]`}
        >
          <div>
            <img className="group-hover:block hidden" src={rec} alt="Rec" />
            <img className="block group-hover:hidden" src={noRec} alt="noRec" />
          </div>

          <span className="font-bold uppercase leading-6 text-[#010101]">
            Запись
          </span>
        </button>
      </div>
    </header>
  );
};
export default Header;
