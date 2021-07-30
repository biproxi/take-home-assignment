import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await supabase
      .from('todos')
      .select('id, title, createdAt, lastUpdatedAt, status');
    res.send({ message: 'To-dos successfully retrieved', data });
  } catch (err) {
    res.status(500).send(`There was an issue retrieving to-dos`);
  }
};
