import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

const editPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { title, status } = req.body.updates
    const { id } = req.query

    const response = await supabase
      .from('posts')
      .update([
        {
          title,
          last_updated_at: new Date().getTime(),
          status
        }
      ])
      .match({ id })
    console.log(response.data)
      res.send("Successfully edited post!")
  } catch(err) {
    res.status(500).send(err)
  }
}

export default editPost;