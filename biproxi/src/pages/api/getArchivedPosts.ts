import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const response = await supabase
      .from('posts')
      .select()
    res.send(response.data)
  } catch(err) {
    res.status(500).send(err)
  }
}