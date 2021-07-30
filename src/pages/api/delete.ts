import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await supabase
      .from('todos')
      .delete()
      .match({ id: req.query.id });
    const data = result.data;
    res.send({ data });
  } catch (err) {
    console.log(err);
  }
};
