const TextArea = ({ placeholder }) => {
  return (
    <textarea
      className="px-4 py-2 h-[136px] min-w-[196px] flex-1 rounded-lg outline outline-1 outline-[#B7B7B7] bg-[#F6F6F6] placeholder:text-[#B7B7B7] leading-6 focus:outline-none"
      placeholder={placeholder}
    ></textarea>
  );
};
export default TextArea;
