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
            <div className="container mx-auto">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="grid grid-cols-4">
                    {/* <div className="bg-red-300">

                    </div> */}
                    <div className="col-span-4">
                        <div className="flex items-center justify-between mb-7">
                            <div className="flex justify-start items-center">
                                <label htmlFor="countries" className="block text-sm font-medium text-gray-900 dark:text-white w-20">Sort By</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Newest Product</option>
                                    <option value="US">Position</option>
                                    <option value="CA">Product Name</option>
                                    <option value="FR">Price</option>
                                    <option value="DE">Genre</option>
                                    <option value="DE">Brand</option>
                                </select>
                            </div>
                            <div className='flex'>
                                <RiGridFill size={20} className="mr-1" />
                                <HiViewBoards size={20} className='rotate-90' />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-6'>
                            {products?.map((product) => (
                                <Card key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products