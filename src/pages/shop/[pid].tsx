import React, { useState } from "react";

import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from 'lodash'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Components
import Layout from '@/components/layout'
import ImageSlider from "@/components/Product/ImageSlider";
import DeliveryOption from "@/components/Product/DeliveryOption";
import PaymentOptions from "@/components/Product/PaymentOptions";
import ProductInfo from "@/components/Product/ProductInfo";
import Warranty from "@/components/Product/Warranty";
import ProductOverview from "@/components/Product/ProductOverview";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductReview from "@/components/Product/ProductReview";
import RelatedItems from "@/components/Product/RelatedItems";
import { Text } from "@/components/global";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Lowlight.registerLanguage('js', javascript);

const Product = () => {
  const router = useRouter();
  const { pid } = router.query

  const [tab, setTab] = useState(1);

  const { data: products, isLoading, isSuccess } = useQuery({
    queryKey: ['product', pid],
    queryFn: () => axios.get(`/api/products/${pid}`)
  })

  if (isLoading) {
    return (
      <Layout>
        <h1>...Loading</h1>
      </Layout>
    )
  }

  return (
    <Layout title={`PC Link |`}>
      <div className="container mx-auto mt-10">
        <div className="mb-5">
          <Text className="text-slate-800 text-sm font-bold">
            {`Home > ${get(products, 'data.attributes.name')}`}
          </Text>
        </div>
        <div className="grid grid-cols-12 mb-10">
          <div className="col-span-12 grid grid-cols-12">
            <div className="col-span-5">
              <ImageSlider image={get(products, 'data.attributes.image')} />
            </div>
            <div className="col-span-7 pl-5 pr-12 mb-3">
              <ProductInfo
                productName={get(products, 'data.attributes.name')}
                productPrice={get(products, 'data.attributes.price')}
                productComparePrice={get(products, 'data.attributes.compare_at_price')}
                productIsAvailable={get(products, 'data.attributes.quantity')}
              />
            </div>
          </div>
          {/* <div className="col-span-3">
            <DeliveryOption />
            <PaymentOptions />
            <Warranty />
          </div> */}
        </div>
        <div>
          {/* <div className="flex pl-10">
              <Text className="text-lg mr-6 pb-3 font-bold border-b-2 border-vivid-yellow pointer-events-none">
                DETAILS
              </Text>
              <Text className="text-lg mr-6 pb-3 pointer-events-none">MORE INFORMATION</Text>
              <Text className="text-lg pb-3 pointer-events-none">REVIEWS</Text>
              <Text className="text-lg pb-3 pointer-events-none">REVIEWS</Text>
            </div>
            <div className="border-2 rounded-lg p-5">
              <ProductOverview />
              <ProductDescription />
              <ProductReview />
            </div> */}
          <div className="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <a onClick={() => setTab(1)} className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${tab === 1 ? 'text-vivid-orange-400 border-vivid-orange-400 active dark:text-vivid-orange-500 dark:border-vivid-orange-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>DETAILS</a>
              </li>
              <li className="mr-2">
                <a onClick={() => setTab(2)} className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${tab === 2 ? 'text-vivid-orange-400 border-vivid-orange-400 active dark:text-vivid-orange-500 dark:border-vivid-orange-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>MORE INFORMATION</a>
              </li>
              <li className="mr-2">
                <a onClick={() => setTab(3)} className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${tab === 3 ? 'text-vivid-orange-400 border-vivid-orange-400 active dark:text-vivid-orange-500 dark:border-vivid-orange-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>REVIEWS</a>
              </li>
              <li className="mr-2">
                <a onClick={() => setTab(4)} className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${tab === 4 ? 'text-vivid-orange-400 border-vivid-orange-400 active dark:text-vivid-orange-500 dark:border-vivid-orange-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>RELATED POSTS</a>
              </li>
            </ul>
            <div>
              <div className={tab === 1 ? 'block' : 'hidden'}>
                <div className="pl-10">
                  <ReactMarkdown children={get(products, 'data.attributes.details')} remarkPlugins={[remarkGfm]} />
                </div>

              </div>
              <div className={tab === 2 ? 'block' : 'hidden'}>
                <div className="pl-10">
                  <ReactMarkdown children={get(products, 'data.attributes.information')} remarkPlugins={[remarkGfm]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12">
          {/* <RelatedItems /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
