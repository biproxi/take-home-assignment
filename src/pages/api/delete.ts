import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.query.id);
    const result = await supabase
      .from('todos')
      .delete()
      .match({ id: req.query.id });
    const todo = result.data[0];
    res.send({ todo });
  } catch (err) {
    console.log(err);
  }
};
