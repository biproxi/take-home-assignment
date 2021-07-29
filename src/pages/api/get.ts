import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await supabase.from('todos').select('id, title');
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
