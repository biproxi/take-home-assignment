import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  try {
    const result = await supabase.from('todos').delete().match({ id: id });
    const data = result.data;
    res.send({ message: `Successfully deleted to-do ${id}`, data });
  } catch (err) {
    res.status(500).send(`There was an issue deleting to-do ${id}`);
  }
};
