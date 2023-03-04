/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next/types";
import Image from "next/image";

import axios from 'axios'

// Appllo
import { initializeApollo } from "@/apollo/client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Components
import Layout from "../components/layout";
import ProductSwiper from "../components/Product/ProductSwiper";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Banner } from "../components/global";
import { useQuery } from "@tanstack/react-query";

const brandLogos = [
  "/assets/images/BrandLogos/acer.webp",
  "/assets/images/BrandLogos/amd.webp",
  "/assets/images/BrandLogos/brother.webp",
  "/assets/images/BrandLogos/canon.webp",
  "/assets/images/BrandLogos/dell.webp",
  "/assets/images/BrandLogos/dlink.webp",
  "/assets/images/BrandLogos/epson.webp",
  "/assets/images/BrandLogos/gigabyte.webp",
  "/assets/images/BrandLogos/hp.webp",
  "/assets/images/BrandLogos/huawei.webp",
  "/assets/images/BrandLogos/intel.webp",
  "/assets/images/BrandLogos/kingston.webp",
  "/assets/images/BrandLogos/logitech.webp",
  "/assets/images/BrandLogos/microsoft.webp",
  "/assets/images/BrandLogos/msi.webp",
];

const bannerImg = [
  "/assets/images/Banners/Banner1.jpg",
  "/assets/images/Banners/Banner2.jpg",
  "/assets/images/Banners/Banner3.jpg",
  "/assets/images/Banners/Banner4.jpg",
  "/assets/images/Banners/Banner5.jpg",
  "/assets/images/Banners/Banner6.jpg",
];

const Home = () => {
  const [openTab, setOpenTab] = useState(1);
  const [openTab2, setOpenTab2] = useState(1);

  const { data: products , isLoading, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/api/products')
  })

  return (
    <Layout title="PC Link | PC Builder">
      <div>
        <Banner bannerImg={bannerImg} />
        <div className="container relative mx-auto py-4">
          <Tabs>
            <TabList categoryName="Computers">
              <Tab index={1} active={openTab} setOpenTab={setOpenTab}>
                Desktop PC
              </Tab>
              <Tab index={2} active={openTab} setOpenTab={setOpenTab}>
                Notebooks
              </Tab>
              <Tab index={3} active={openTab} setOpenTab={setOpenTab}>
                Software
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel index={1} openTab={openTab}>
                { isLoading && <h1>...Loading</h1> }
                { isSuccess && <ProductSwiper products={products.data.data} /> }
              </TabPanel>
              <TabPanel index={2} openTab={openTab}>
                Notebooks asdasds
              </TabPanel>
              <TabPanel index={3} openTab={openTab}>
                {/* <ProductSwiper products={products} /> */}
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Tabs>
            <TabList categoryName="Components">
              <Tab index={1} active={openTab2} setOpenTab={setOpenTab2}>
                Processor
              </Tab>
              <Tab index={2} active={openTab2} setOpenTab={setOpenTab2}>
                Motherboard
              </Tab>
              <Tab index={3} active={openTab2} setOpenTab={setOpenTab2}>
                Graphics Card
              </Tab>
              <Tab index={4} active={openTab2} setOpenTab={setOpenTab2}>
                Memory
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel index={1} openTab={openTab2}>
                {/* <ProductSwiper products={products} /> */}
              </TabPanel>
              <TabPanel index={2} openTab={openTab2}>
                Notebooks
                <button type="button" className="focus:outline-none text-white bg-vivid-orange-400 hover:bg-vivid-orange-500 focus:ring-4 focus:ring-vivid-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-vivid-orange-700">Orange</button>
              </TabPanel>
              <TabPanel index={3} openTab={openTab2}>
                {/* <ProductSwiper products={products} /> */}
              </TabPanel>
              <TabPanel index={4} openTab={openTab2}>
                Memory
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div className="container relative mx-auto py-4">
          <Swiper
            slidesPerView={7}
            spaceBetween={50}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            style={{ height: "200px" }}
          >
            {brandLogos.map((logo, i) => {
              return (
                <SwiperSlide key={i} className="flex justify-center items-center select-none">
                  <Image priority width={100} height={100} src={logo} alt="logo" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  return {
    props: {}
  }
}

export default Home;