import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { id } = req.query;
    const response = await supabase
      .from('posts')
      .delete()
      .match({id})
      res.send("Successfully deleted post!")
  } catch(err) {
    res.status(500).send(err)
  }
}