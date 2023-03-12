import React from 'react'

import { RiGridFill } from 'react-icons/ri'
import { HiViewBoards } from 'react-icons/hi'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { get } from 'lodash'

// Components
import Layout from '@/components/layout'
import Card from '@/components/card'

const Products = () => {

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('/api/products')
    })

    const products = get(data, 'data.data')

    return (
        <Layout>
            <div className="container mx-auto">
                <nav className="flex my-5" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="grid grid-cols-4">
                    <div className="bg-red-300">asdasd</div>
                    <div className="col-span-3">
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