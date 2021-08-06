import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { title } = req.body.formValues;

    const response = await supabase
      .from('posts')
      .insert([
        {
          title,
          status: 'Active'
        }
      ])
    console.log(response.data)
      res.status(201).send("Successfully created post!")
  } catch(err) {
    res.status(500).send(err)
  }
}