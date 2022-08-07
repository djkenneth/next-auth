import React from "react";
import { Button, Heading, Text } from "../global";
import ReactStars from "react-rating-stars-component";
import Select from "../global/Select";

const ProductReview = () => {
  return (
    <div className="mb-8">
      <Heading text="Customer Reviews" className="text-lg font-semibold mb-4" />
      <div className="grid grid-cols-4">
        <div className="">
          <ReactStars size={25} value={5} edit={false} />
          <Text text="Based on 40 reviews" className="text-sm font-medium" />
        </div>
        <div className="col-span-2">
          <div className="flex items-center">
            <ReactStars size={25} value={5} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-yellow-400 h-4" style={{ width: "100%" }}></div>
            </div>
            <Text text="100%" className="text-sm mr-2" />
            <Text text="(40)" className="text-sm" />
          </div>
          <div className="flex items-center">
            <ReactStars size={25} value={4} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-yellow-400 h-4" style={{ width: "80%" }}></div>
            </div>
            <Text text="80%" className="text-sm mr-2" />
            <Text text="(40)" className="text-sm" />
          </div>
          <div className="flex items-center">
            <ReactStars size={25} value={3} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-yellow-400 h-4" style={{ width: "60%" }}></div>
            </div>
            <Text text="60%" className="text-sm mr-2" />
            <Text text="(40)" className="text-sm" />
          </div>
          <div className="flex items-center">
            <ReactStars size={25} value={2} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-yellow-400 h-4" style={{ width: "40%" }}></div>
            </div>
            <Text text="40%" className="text-sm mr-2" />
            <Text text="(40)" className="text-sm" />
          </div>
          <div className="flex items-center">
            <ReactStars size={25} value={1} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-yellow-400 h-4" style={{ width: "20%" }}></div>
            </div>
            <Text text="20%" className="text-sm mr-2" />
            <Text text="(40)" className="text-sm" />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div>
            <Button
              text="Ask a question"
              custonStyle="font-normal border border-black rounded-none p-1"
            />
          </div>
          <div>
            <Select
              options={[
                { value: "most_recent", name: "Most Recent" },
                { value: "highest_rating", name: "Highest Rating" },
              ]}
              className="bg-transparent text-sm border border-black py-1 rounded-r-2xl rounded-l-2xl focus:outline-none"
              optionClassName="text-xs"
            />
          </div>
        </div>
        <div>
          <div className="flex">
            <Button
              text="Reviews (40)"
              custonStyle="mr-3 pb-2 font-normal rounded-none border-b-4 border-gray-800"
            />
            <Button
              text="Questions (3)"
              custonStyle="font-normal pb-2 rounded-none border-b-4 border-white"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <div className="w-14 h-14 mr-2 rounded-full bg-gray-300 flex justify-center items-center">
                K
              </div>
              <div>
                <div className="flex items-center">
                  <ReactStars size={25} value={2} edit={false} classNames="mr-2" />
                  <Text text="10/29/2021" className="text-sm" />
                </div>
                <Text text="Kenneth" className="font-bold text-gray-900" />
              </div>
            </div>
            <Text text="receive the keyboard and working fine also RGB light was good maayos naman at walang problema sa keyboard maraming salamat easypc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
