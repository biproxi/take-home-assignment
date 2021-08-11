import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

const addTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { title } = req.body;

    const response = await supabase
      .from('posts')
      .insert([
        {
          title,
          created_at: new Date().getTime(),
          last_updated_at: new Date().getTime(),
          status: 'Active'
        }
      ])
      res.status(201).send(response.data[0])
  } catch(err) {
    res.status(500).send(err)
  }
}

export default addTodo;