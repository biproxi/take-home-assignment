// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    let response = await supabase
      .from('posts')
      .select()
    console.log(response.data)
      res.send("Successfully created post!")
  } catch(err) {
    res.status(500).send(err)
  }
}