import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { Text } from "../global";

const Warranty = () => {
  return (
    <div className="border-2 mb-5 rounded">
      <div className="px-4 py-3 border-b-2">
        <Text text="Warranty" className="text-lg font-medium" />
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center mb-3">
          <BsFillCheckSquareFill size={13} className="text-green-600 mr-3" />
          <span className="text-sm">7 Days Outright Replacement</span>
        </div>
        <div className="flex items-center">
          <FaShieldAlt size={13} className="text-green-600 mr-3" />
          <span className="text-sm">EasyFix Warranty</span>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
