import React from "react";

const Select = ({ options, className, optionClassName }) => {
  return (
    <select className={className}>
      {options.map((item, index) => {
        return (
          <option key={index} className={optionClassName} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
