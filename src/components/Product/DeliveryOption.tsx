import React from "react";
import { Text } from "../global";

const DeliveryOption = () => {
  return (
    <div className="border-2 mb-5 rounded">
      <div className="px-4 py-3 border-b-2">
        <Text className="text-lg font-medium">Delivery Options</Text>
      </div>
      <div className="px-4 py-3">
        <Text className="text-lg font-medium">Free Standard Delivery</Text>
        <ul className="list-disc ml-4">
          <li>Est. Arrival: 2-3 days</li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryOption;
