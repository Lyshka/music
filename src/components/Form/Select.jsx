import { useState } from "react";
import { useEffect } from "react";

const Select = ({ select, name }) => {
  const { title, values } = select;

  return (
    <div className="py-2 px-14 flex justify-between items-center flex-1 min-w-[196px] border border-[#B7B7B7] rounded-lg">
      <p className="leading-6">
        {title} <span className="text-[#D71D1D]">*</span>
      </p>

      <div className="flex justify-center items-center gap-x-2">
        <input
          className="absolute cursor-pointer"
          id={name}
          name={name}
          type="radio"
          value={values[0]}
          defaultChecked
        />
        <label htmlFor={name} className="leading-6">
          {values[0]}
        </label>
      </div>

      {values.slice(1, values.length).map((el, idx) => (
        <div key={idx} className="flex justify-center items-center gap-x-2">
          <input
            className="absolute cursor-pointer"
            id={`${name}${idx}`}
            name={name}
            type="radio"
            value={el}
          />

          <label htmlFor={`${name}${idx}`} className="leading-6">
            {el}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Select;
