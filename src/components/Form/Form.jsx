import Input from "./Input";
import Select from "./Select";
import { select1, select2, select3, select4 } from "../../constants/selectData";
import TextArea from "./TextArea";
import File from "./File";
import { scrollDown, scrollUp } from "../../assets/img";
import { useState } from "react";

const Form = () => {
  const [classScroll, setClassScroll] = useState("");

  const handleScroll = (e) => {
    const { scrollHeight, scrollTop } = e.target;
    console.log(scrollHeight, scrollTop);
    if (scrollTop > scrollTop / 2) {
      setClassScroll("translate-y-[25%]");
    } else {
      setClassScroll("-translate-y-[0%]");
    }
  };

  return (
    <form
      onScroll={(e) => handleScroll(e)}
      id="scrollForm"
      className="bg-white z-[9999] w-[864px] h-[592px] overflow-y-scroll px-2 py-4 rounded-lg flex justify-start items-start gap-x-[13px] relative"
    >
      <div className="w-full">
        <div>
          <span className="leading-6 text-lg text-black">Общая информация</span>
          <div className="grid grid-cols-4 py-4 gap-x-4">
            <Input placeholder={"ФИО композитора"} />
            <Input placeholder={"ФИО автора текста"} />
            <Input placeholder={"Email"} />
            <Input placeholder={"Telegram или Instagrma"} />
          </div>
        </div>

        <div className="py-6 flex flex-col gap-4 border-b border-t border-[#B7B7B7]">
          <span className="leading-6 text-lg text-black">
            Информация по релизу
          </span>

          <div className="grid grid-cols-4 gap-4">
            <Input placeholder={"Ник исполнителя"} />
            <Input placeholder={"Название релиза"} />
            <Input placeholder={"Дата релиза (дд.мм.гггг)"} />
            <Input placeholder={"Жанр"} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select name={"relize"} select={select1} />
            <Select name={"leksike"} select={select2} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder={"Версия (prod by; Remix; Slow.)"}
              required={false}
            />
            <Input
              placeholder={"Приглашенный артист (feat_)"}
              required={false}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextArea placeholder={"Название треков (для EP, Album)"} />
            <TextArea placeholder={"Текст трека (для Single)"} />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 mt-6">
          <span className="leading-6 text-lg text-black">Ссылки и файлы</span>

          <div className="grid grid-cols-3 gap-4">
            <Input placeholder={"Ссылка Spotify"} required={false} />
            <Input placeholder={"Ссылка Apple Music"} required={false} />
            <Input placeholder={"Тайм-код для Тик-Тока"} />
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <File label={"Трек формата wav 16 bit 441 kHz"} />
            <File label={"Обложка jpg 3000x3000"} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select select={select3} name={"date"} />
            <Select select={select4} name={"material"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sticky top-0 justify-between items-center h-full">
        <img src={scrollUp} alt="scrollUp" />
        <div className="w-[1px] h-[calc(100%-40px)] relative top-0 bg-[#E0E0E0]">
          <div
            className={`h-4/5 transition-all duration-300 bg-[#D71D1D] ${classScroll}`}
          >
            &nbsp;
          </div>
        </div>
        <img src={scrollDown} alt="scrollDown" />
      </div>
    </form>
  );
};
export default Form;
