import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title } = req.body;
    const result = await supabase.from('todos').insert([
      {
        title: title,
        createdAt: new Date().getTime(),
        lastUpdatedAt: new Date().getTime(),
        status: 'Active'
      }
    ]);
    const data = result.data;
    res.send({ message: 'Successfully created to-do', data });
  } catch (err) {
    res.status(500).send(`There was an creating your to-do`);
  }
};
