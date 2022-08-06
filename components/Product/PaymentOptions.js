import React from "react";
import Image from "next/image";
import { Text } from "../global";

const PaymentOptions = () => {
  return (
    <div className="border-2 rounded">
      <div className="px-4 py-3 border-b-2">
        <Text text="Payment Options" className="text-lg font-medium" />
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center">
          <div className="w-1/2">
            <Image src="/assets/images/Payment/cod.webp" alt="cod" width="90" height="35" />
          </div>
          <div className="w-1/2">
            <Image src="/assets/images/Payment/7eleven.webp" alt="7eleven" width="45" height="45" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/2">
            <Image
              src="/assets/images/Payment/billease.webp"
              alt="billease"
              width="80"
              height="50"
            />
          </div>
          <div className="w-1/2">
            <Image src="/assets/images/Payment/gcash.webp" alt="gcash" width="80" height="50" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/2">
            <Image src="/assets/images/Payment/grabpay.webp" alt="grabpay" width="80" height="50" />
          </div>
          <div className="w-1/2">
            <Image src="/assets/images/Payment/maya.webp" alt="maya" width="80" height="50" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/2">
            <Image src="/assets/images/Payment/visa.webp" alt="visa" width="80" height="50" />
          </div>
          <div className="w-1/2">
            <Image src="/assets/images/Payment/master.webp" alt="master" width="80" height="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
