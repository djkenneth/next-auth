import { GetServerSidePropsContext } from "next/types";
import { Box, Container } from "@chakra-ui/react";

import axios from 'axios'

// Appllo
import { initializeApollo } from "@/apollo/client";

// Components
import Layout from "../components/layout";
import ProductSwiper from "../components/Product/ProductSwiper";
import { Banner } from "../components/global";
import { useQuery } from "@tanstack/react-query";

// data
import { bannerImg } from "@/lib/contants/listImage";
import FeaturedProductTabs from "@/components/FeaturedProductTabs";
import BrandSwiper from "@/components/BrandSwiper";

const Home = () => {
  return (
    <Layout title="PC Link | PC Builder">
      <Box>
        <Banner bannerImg={bannerImg} />
        <Container maxW="1250px" mx={'auto'} py={10}>
          <FeaturedProductTabs />
          <BrandSwiper />
        </Container>
      </Box>
    </Layout>
  );
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  return {
    props: {}
  }
}

export default Home;