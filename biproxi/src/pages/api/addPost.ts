import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

const addPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { title } = req.body;
    console.log("does it raeach")
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
    console.log(response.data)
      res.status(201).send("Successfully created post!")
  } catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default addPost;