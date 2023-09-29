import useOutSideAlerter from "../../hooks/useOutSideAlerter";

const Input = ({ placeholder, name, required = true }) => {
  const { isShow, ref, setIsShow } = useOutSideAlerter(true);

  const handleClick = () => {
    setIsShow(false);
    ref.current.focus()
  };

  return (
    <div className="w-full relative">
      <input
        ref={ref}
        onClick={handleClick}
        className="w-full group focus:outline-none bg-[#F6F6F6] outline-1 outline rounded-lg px-4 py-2 outline-[#B7B7B7]"
        name={name}
      />
      {isShow && (
        <p
          onClick={handleClick}
          className="absolute top-1/2 px-4 -translate-y-1/2 leading-6 text-[#B7B7B7] group-focus:bg-red-500"
        >
          {required ? (
            <p>
              <span>{placeholder}</span>{" "}
              <span className="text-[#D71D1D]">*</span>
            </p>
          ) : (
            <span>{placeholder}</span>
          )}
        </p>
      )}
    </div>
  );
};
export default Input;
