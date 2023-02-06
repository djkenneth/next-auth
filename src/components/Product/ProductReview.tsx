import React, { useState } from "react";
import { Button, Heading, Text, Select } from "@/components/global";
import ReactStars from "react-rating-stars-component";

const ProductReview = () => {
  const [isQuestion, setIsQuestion] = useState(false);
  return (
    <div className="mb-8">
      <Heading className="text-lg font-semibold mb-4">Customer Reviews</Heading>
      <div className="grid grid-cols-4">
        <div className="">
          <ReactStars size={20} value={5} edit={false} />
          <Text className="text-sm font-medium">Based on 40 reviews</Text>
        </div>
        <div className="col-span-2">
          <div className="flex items-center">
            <ReactStars size={20} value={5} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-vivid-yellow h-4" style={{ width: "100%" }}></div>
            </div>
            <Text className="text-sm mr-2">100%</Text>
            <Text className="text-sm">(40)</Text>
          </div>
          <div className="flex items-center">
            <ReactStars size={20} value={4} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-vivid-yellow h-4" style={{ width: "80%" }}></div>
            </div>
            <Text className="text-sm mr-2">80%</Text>
            <Text className="text-sm">(40)</Text>
          </div>
          <div className="flex items-center">
            <ReactStars size={20} value={3} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-vivid-yellow h-4" style={{ width: "60%" }}></div>
            </div>
            <Text className="text-sm mr-2">60%</Text>
            <Text className="text-sm">(40)</Text>
          </div>
          <div className="flex items-center">
            <ReactStars size={20} value={2} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-vivid-yellow h-4" style={{ width: "40%" }}></div>
            </div>
            <Text className="text-sm mr-2">40%</Text>
            <Text className="text-sm">(40)</Text>
          </div>
          <div className="flex items-center">
            <ReactStars size={20} value={1} edit={false} />
            <div className="relative border-2 h-5 w-32 mx-2">
              <div className="bg-vivid-yellow h-4" style={{ width: "20%" }}></div>
            </div>
            <Text className="text-sm mr-2">20%</Text>
            <Text className="text-sm">(40)</Text>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div>
            <Button
              text="Ask a question"
              onClick={() => setIsQuestion((current) => !current)}
              custonStyle="font-normal border border-black rounded-none p-1"
            />
          </div>
          <div>
            <Select
              options={[
                { value: "most_recent", name: "Most Recent" },
                { value: "highest_rating", name: "Highest Rating" },
                { value: "lowest_rating", name: "Lowest Rating" },
              ]}
              className="bg-transparent text-sm border border-black py-1 px-2 rounded-r-2xl rounded-l-2xl focus:outline-none"
              optionClassName="text-xs"
            />
          </div>
        </div>
      </div>
      {isQuestion && (
        <div className="">
          <form className="my-8 space-y-6">
            <div>
              <label htmlFor="user-name" className="text-sm">
                Name
              </label>
              <input
                id="user-name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-full relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="text-sm">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-full relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="user-message" className="text-sm">
                Question
              </label>
              <textarea
                id="user-message"
                name="message"
                required
                rows={4}
                cols={50}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Write your question here"
              />
            </div>
          </form>
        </div>
      )}
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
        <div className="border-t">
          <div className="flex items-center py-3">
            <div className="w-14 h-14 mr-2 rounded-full bg-gray-300 flex justify-center items-center">
              K
            </div>
            <div>
              <div className="flex items-center">
                <ReactStars size={20} value={2} edit={false} classNames="mr-2" />
                <Text className="text-sm">10/29/2021</Text>
              </div>
              <Text className="font-bold text-gray-900">Kenneth</Text>
            </div>
          </div>
          <Text>
            receive the keyboard and working fine also RGB light was good maayos naman at walang
            problema sa keyboard maraming salamat easypc
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
