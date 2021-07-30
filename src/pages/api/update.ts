import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, update } = req.body;
  try {
    const result = await supabase
      .from('todos')
      .update({ status: update, lastUpdatedAt: new Date().getTime() })
      .match({ id: id });
    const data = result.data;
    res.send({ message: 'Successfully updated status of to-do', data });
  } catch (err) {
    res.status(500).send(`There was an issue updating to-do ${id}`);
  }
};
