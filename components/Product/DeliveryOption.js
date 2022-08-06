import React from "react";
import { Text } from "../global";

const DeliveryOption = () => {
  return (
    <div className="border-2 mb-5 rounded">
      <div className="px-4 py-3 border-b-2">
        <Text text="Delivery Options" className="text-lg font-medium" />
      </div>
      <div className="px-4 py-3">
        <Text text="Free Standard Delivery" className="text-lg font-medium" />
        <ul className="list-disc ml-4">
          <li>Est. Arrival: 2-3 days</li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryOption;
