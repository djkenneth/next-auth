import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { initializeApollo } from '@/apollo/client'
import { gql } from '@apollo/client'

const testQuery = gql`
query getAllProducts($pageSize: Int, $page: Int) {
    products(pagination: { pageSize: $pageSize, page: $page }) {
      data {
        id,
        attributes {
          name,
          price,
          compare_at_price,
          rating,
          details,
          information,
          quantity,
          slug,
          image {
            data {
              id,
              attributes {
                name,
                width,
                height,
                url
              }
            }
          },
          color {
            data {
              id,
              attributes {
                value
              }
            }
          },
          brand {
            data {
              id,
              attributes {
                value
              }
            }
          },
          category {
            data {
              id,
              attributes {
                value
              }
            }
          },
          sub_category {
            data {
              id,
              attributes {
                value
              }
            }
          },
          sub_child_category {
            data {
              id,
              attributes {
                value
              }
            }
          }
        }
      },
      meta {
        pagination {
          total,
          page,
          pageSize,
          pageCount
        }
      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') throw new Error('Invalid request method!')
        const client = initializeApollo()
        // const { data: products } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api/products?populate=*`)
        const { data } = await client.query({
            query: testQuery
        })
        res.send(data.products);
    } catch (error) {
        console.log(error)
    }
}