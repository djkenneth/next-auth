import { NextApiRequest, NextApiResponse } from 'next'
import { initializeApollo } from '@/apollo/client'
import { GetCategoriesDocument } from '__generated__/graphql'
import { get } from 'lodash'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') throw new Error('Invalid request method!')

        const client = initializeApollo()
        const { data: { categories } } = await client.query({
            query: GetCategoriesDocument
        })

        let listCategories = [];

        for (let x = 0; x < categories.data.length; x++) {
            const sub_categories = [];
            listCategories.push({
                name: categories.data[x].attributes.name,
                slug: categories.data[x].attributes.slug,
                sub_categories: sub_categories
            })
            for (let y = 0; y < categories.data[x].attributes.sub_categories.data.length; y++) {
                const sub_child_categories = []
                sub_categories.push({
                    name: categories.data[x].attributes.sub_categories.data[y].attributes.name,
                    slug: categories.data[x].attributes.sub_categories.data[y].attributes.slug,
                    sub_child_categories: sub_child_categories
                })
                for (let z = 0; z < categories.data[x].attributes.sub_categories.data[y].attributes.sub_child_categories.data.length; z++) {
                    sub_child_categories.push({
                        name: categories.data[x].attributes.sub_categories.data[y].attributes.sub_child_categories.data[z].attributes.name,
                        slug: categories.data[x].attributes.sub_categories.data[y].attributes.sub_child_categories.data[z].attributes.slug
                    })
                }
            }
        }
        res.send(listCategories)
        // res.send(categories);
    } catch (error) {
        console.log(error)
    }
}