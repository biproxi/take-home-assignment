// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

type Data = {
  data: any // TODO: define type
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cl29bfkoa10f901z8fclbdoze/master'
    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
        query{
          todos {
            id
            status_
            title
            updatedAt
            createdAt
          }
    }`
    const data = await graphQLClient.request(query)
    res.status(200).json(data)
  }

  export default handler