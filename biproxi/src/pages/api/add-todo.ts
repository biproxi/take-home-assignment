import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import {Data, DataError} from "../../index";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | DataError>
) {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cl29bfkoa10f901z8fclbdoze/master'
    const graphQLClient = new GraphQLClient(endpoint)
    const createTodoMutation = gql`
        mutation {
            createTodo(
                data: {
                    title: "${req.query.title}"
                    status_: Active
                 }
            ) {
                id
               
            }
    }`
    const publishTodoMutation = gql`
        mutation ($id: ID!) {
            publishTodo(
                where: { id: $id }, 
                to: PUBLISHED) 
          {
            id
            status_
                title
                updatedAt
                createdAt
  }}`
    try {
      const create = await graphQLClient.request(createTodoMutation)
        const data = await graphQLClient.request(publishTodoMutation, {
            id: create.createTodo.id
        })
      res.status(200).json(data)
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }

  export default handler