import React from 'react'
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import ProductSwiper from './Product/ProductSwiper';

const FeaturedProductTabs = () => {

    const { data: products, isLoading, isSuccess } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('/api/products')
    })

    return (
        <>
            <Heading as='h2' size='md' mb={7}>FEATURED PRODUCTS</Heading>
            <Tabs>
                <TabList>
                    <Tab fontWeight={'semibold'} letterSpacing={'widest'} _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>PLAYSTATION</Tab>
                    <Tab fontWeight={'semibold'} letterSpacing={'widest'} _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>NINTENDO</Tab>
                    <Tab fontWeight={'semibold'} letterSpacing={'widest'} _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>LAPTOP</Tab>
                    <Tab fontWeight={'semibold'} letterSpacing={'widest'} _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>PC PERIPHERALS</Tab>
                    <Tab fontWeight={'semibold'} letterSpacing={'widest'} _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>PC PARTS</Tab>
                    <Tab fontWeight={'semibold'} letterSpacing={'widest'} _selected={{ borderBottomColor: 'crimsonRed.500', color: 'crimsonRed.500', fontWeight: 'semibold' }}>LIFESTYLE</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {isLoading && <Text>Loading...</Text>}
                        {isSuccess && <ProductSwiper products={products.data.data} />}
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default FeaturedProductTabs