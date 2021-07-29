import supabase from '../../database/supabaseInit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { newTodo } = req.body;
    const result = await supabase.from('todos').insert([{ title: newTodo }]);
    const todo = result.data[0];
    res.send({ todo });
  } catch (err) {
    console.log(err);
  }
};
