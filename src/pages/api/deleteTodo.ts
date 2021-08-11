import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

const deleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { id } = req.query;

    await supabase
      .from('posts')
      .delete()
      .match({id})

      res.send(id)
  } catch(err) {
    res.status(500).send(err)
  }
}

export default deleteTodo;