import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import {Data, DataError} from "../../index";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | DataError>
) {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cl29bfkoa10f901z8fclbdoze/master'
    const graphQLClient = new GraphQLClient(endpoint)
    const deleteTodo = gql`
        mutation {
            deleteTodo(
                where: {
                    id: "${req.query.id}"
                }
                ){
                    id
                }
    }`
    try {
        const data = await graphQLClient.request(deleteTodo)
      res.status(200).json(data)
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }

  export default handler