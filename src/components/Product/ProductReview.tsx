import { useState } from "react";
import { Alert, Heading } from "../global";
import CustomerReview from "./CustomerReview";

const ProductReview = () => {
  return (
    <div className="mb-8">
      <Heading className="text-lg font-semibold mb-4">Customer Reviews</Heading>
      <div>
        <CustomerReview name={'Kenneth'} datePublished={'10/29/2021'} message={'receive the keyboard and working fine also RGB light was good maayos naman at walang problema sa keyboard maraming salamat easypc'} />

        <CustomerReview name={'Ken'} datePublished={'10/29/2021'} message={'Thank you!'} />

        <Alert>
          Only registered users can write reviews. Please <span className="font-medium text-blue-500">Sign In</span> or <span className="font-medium text-blue-500">Create an account</span>
        </Alert>
      </div>
    </div>
  );
};

export default ProductReview;
