import React, { useState } from "react";

import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { get } from 'lodash'

// Components
import Layout from '@/components/layout'
import ImageSlider from "@/components/Product/ImageSlider";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductReview from "@/components/Product/ProductReview";
import ProductSlideDetails from "@/components/Product/ProductSlideDetails";
import ProductSlideInformation from "@/components/Product/ProductSlideInformation"
import Breadcrumbs from "@/components/Product/Breadcrumbs";
import { Box, Container, Grid, GridItem, Tabs, Tab, TabList, TabPanel, TabPanels, Text } from "@chakra-ui/react";

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
        <Container maxW="1250px" mx={'auto'} my={10}>
          <Text>Loading...</Text>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout title={`PC Link |`}>
      <Container maxW="1250px" mx={'auto'} my={10}>
        <Box mb={5}>
          <Breadcrumbs breadcrumbs={[`${get(products, 'data.attributes.name')}`]} />
        </Box>
        <Grid templateColumns='repeat(12, 1fr)' mb={10} gap={10}>
          <GridItem colSpan={5}>
            <ImageSlider image={get(products, 'data.attributes.image')} />
          </GridItem>
          <GridItem colSpan={7}>
            <ProductInfo
              productName={get(products, 'data.attributes.name')}
              productPrice={get(products, 'data.attributes.price')}
              productComparePrice={get(products, 'data.attributes.compare_at_price')}
              productIsAvailable={get(products, 'data.attributes.quantity')}
            />
          </GridItem>
        </Grid>
        <Box fontSize={'sm'} fontWeight={'medium'} color={'sharkGray.500'}>
          <Tabs>
            <TabList>
              <Tab _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>DETAILS</Tab>
              <Tab _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>MORE INFORMATION</Tab>
              <Tab _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>REVIEWS</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ProductSlideDetails html={get(products, 'data.attributes.details')} />
              </TabPanel>
              <TabPanel>
                <ProductSlideInformation html={get(products, 'data.attributes.information')} />
              </TabPanel>
              <TabPanel>
                <ProductReview />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  );
};

export default Product;
