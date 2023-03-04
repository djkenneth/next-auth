import { NextApiRequest, NextApiResponse } from 'next'
import { initializeApollo } from '@/apollo/client'
import { GetAllProductsDocument } from '__generated__/graphql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') throw new Error('Invalid request method!')
        const client = initializeApollo()
        const { data } = await client.query({
            query: GetAllProductsDocument
        })
        res.send(data.products);
    } catch (error) {
        console.log(error)
    }
}