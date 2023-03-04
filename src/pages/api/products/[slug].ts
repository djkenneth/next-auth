import { NextApiRequest, NextApiResponse } from 'next'
// import qs from 'qs'
import { initializeApollo } from '@/apollo/client';
import { GetProductsBySlugDocument } from '__generated__/graphql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') throw new Error('Invalid request method!')
        const { slug } = req.query;
        const client = initializeApollo()
        const { data: { products } } = await client.query({
            query: GetProductsBySlugDocument,
            variables: {
                slug
            }
        })

        res.send(products.data[0])
    } catch (error) {
        console.log(error)
    }
}