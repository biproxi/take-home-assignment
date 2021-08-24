import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../database/index';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const id = req.query.id
    const { data, error } = await supabase
      .from('todo')
      .delete()
      .match({id: id})
    res.status(200).send({ data })
  }
  catch {
    res.status(400).send('Could not delete data')
  }
}
