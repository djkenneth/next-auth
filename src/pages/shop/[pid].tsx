import React, { useState } from "react";

import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from 'lodash'

// Components
import Layout from '@/components/layout'
import { Text } from "@/components/global";
import ImageSlider from "@/components/Product/ImageSlider";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductReview from "@/components/Product/ProductReview";
import RelatedItems from "@/components/Product/RelatedItems";
import ProductSlideDetails from "@/components/Product/ProductSlideDetails";
import ProductSlideInformation from "@/components/Product/ProductSlideInformation"
import Breadcrumbs from "@/components/Product/Breadcrumbs";
import ProductLoading from "@/components/Product/ProductLoading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
        <ProductLoading />
      </Layout>
    )
  }

  return (
    <Layout title={`PC Link |`}>
      <div className="container mx-auto mt-10">
        <div className="mb-5">
          <Breadcrumbs breadcrumbs={[`${get(products, 'data.attributes.name')}`]} />
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
        </div>
        <div>
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
            </ul>
            <div>
              <div className={tab === 1 ? 'block' : 'hidden'}>
                <div className="pl-10 py-10">
                  <ProductSlideDetails html={get(products, 'data.attributes.details')} />
                </div>
              </div>
              <div className={tab === 2 ? 'block' : 'hidden'}>
                <div className="pl-10 py-10">
                  <ProductSlideInformation html={get(products, 'data.attributes.information')} />
                </div>
              </div>
              <div className={tab === 3 ? 'block' : 'hidden'}>
                <div className="pl-10 py-10">
                  <ProductReview />
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
