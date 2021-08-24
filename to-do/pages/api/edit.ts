import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../database/index';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const id = req.body.id
    const updatedStatus = req.body.status
    const time = Date.now();
    const { data, error } = await supabase
      .from('todo')
      .update({status: updatedStatus})
      .match({id: id})
    res.status(200).send({ data })
  }
  catch {
    res.status(400).send('Could not delete data')
  }
}
