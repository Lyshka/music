import { download } from "../../assets/img";

const File = ({ label }) => {
  return (
    <div className="min-w-[196px] px-10 py-2 flex justify-between items-center flex-1">
      <label className="leading-6">
        {label} <span className="text-[#D71D1D]">*</span>:
      </label>
      <div className="relative">
        <input type="file" className="absolute w-full opacity-0 cursor-pointer"/>
        <img src={download} alt="download" />
      </div>
    </div>
  );
};
export default File;
