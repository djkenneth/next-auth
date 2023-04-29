import React from 'react'
import { Text } from "../global";
import ReactStars from "react-rating-stars-component";

const CustomerReview = ({ message, name, datePublished }) => {
    return (
        <div className="border-t mb-10">
            <div className="flex items-center py-3">
                <div className="w-14 h-14 mr-2 rounded-full bg-gray-300 flex justify-center items-center">
                    {name[0]}
                </div>
                <div>
                    <div className="flex items-center">
                        <ReactStars size={20} value={2} edit={false} classNames="mr-2" />
                        <Text className="text-sm">{datePublished}</Text>
                    </div>
                    <Text className="font-bold text-gray-900">{name}</Text>
                </div>
            </div>
            <Text>
                {message}
            </Text>
        </div>
    )
}

export default CustomerReview