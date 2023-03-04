import { NextApiRequest, NextApiResponse } from 'next'
import qs from 'qs'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') throw new Error('Invalid request method!')
        const { slug } = req.query;
        const query = qs.stringify(
            {
                filters: {
                    slug: {
                        $eq: slug
                    }
                },
                populate: ['image']
            },
            {
                encodeValuesOnly: true
            }
        )

        const { data: products } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/products?${query}`)
        res.send(products.data[0]);
    } catch (error) {
        console.log(error)
    }
}