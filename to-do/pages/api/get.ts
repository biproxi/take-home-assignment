// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../database/index';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    let { data } = await supabase
      .from('todo')
      .select('*')

    res.status(200).send({ data })
  }
  catch {
    res.status(400).send('Could not retrieve data')
  }
}
