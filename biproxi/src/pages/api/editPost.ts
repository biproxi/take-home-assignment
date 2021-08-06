import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { title } = req.body;

    const response = await supabase
      .from('posts')
      .insert([
        {
          title,
          status: 'Active'
        }
      ])
    console.log(response.data)
      res.send("Successfully edited post!")
  } catch(err) {
    res.status(500).send(err)
  }
}