// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  data: any // TODO: define type
}

const testTodos = {
    todos: [
        {
            id: "1",
            status: "Active",
            title: "Todo One",
            createdAt: 1,
            lastUpdatedAt: 1
        },
        {
            id: "2",
            status: "Inactive",
            title: "Todo Two",
            createdAt: 2,
            lastUpdatedAt: 2
        },
        {
            id: "3",
            status: "Archive",
            title: "Todo Three",
            createdAt: 3,
            lastUpdatedAt: 3
        }
    ]
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({data: testTodos})
}
