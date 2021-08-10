import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    console.log('does it reach here')
    const response = await supabase
      .from('posts')
      .select()
      .match({status: 'Archived'})
      console.log(response.data)
    res.send(response.data)
  } catch(err) {
    res.status(500).send(err)
  }
}