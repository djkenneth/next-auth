import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { RiGridFill } from 'react-icons/ri'
import { HiViewBoards } from 'react-icons/hi'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { forEach, get } from 'lodash'

// Components
import Layout from '@/components/layout'
import Card from '@/components/card'
import { replaceStringCharInArray } from '@/lib/general'
import Breadcrumbs from '@/components/Product/Breadcrumbs'
import { Container, Flex, Select, Icon, Wrap, WrapItem } from '@chakra-ui/react'

const Products = () => {
    const router = useRouter()
    const [breadcrumbs, setBreadcrumbs] = useState([])

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('/api/products')
    })

    const products = get(data, 'data.data')
    const queries: any = get(router, 'query.all')

    useEffect(() => {
        const arrayQuery = replaceStringCharInArray(queries)
        setBreadcrumbs(arrayQuery)
    }, [router])

    return (
        <Layout>
            <Container maxW="1250px" mx={'auto'} my={10}>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <Flex alignItems={'center'} justifyContent={'space-between'} my={5}>
                    <Select placeholder='Sort By' variant='filled' maxW={'15rem'}>
                        <option selected>Newest Product</option>
                        <option value="US">Position</option>
                        <option value="CA">Product Name</option>
                        <option value="FR">Price</option>
                        <option value="DE">Genre</option>
                        <option value="DE">Brand</option>
                    </Select>
                    <Flex>
                        <Icon as={RiGridFill} boxSize={6} />
                        <Icon as={HiViewBoards} boxSize={6} />
                    </Flex>
                </Flex>
                <Wrap>
                    {products?.map((product) => (
                        <WrapItem key={product.id}>
                            <Card product={product} />
                        </WrapItem>
                    ))}
                </Wrap>
            </Container>
        </Layout>
    )
}

export default Products