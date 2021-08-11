import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

const editPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const { title, status } = req.body.updates
    const { id } = req.query

    await supabase
      .from('posts')
      .update([
        {
          title,
          last_updated_at: new Date().getTime(),
          status
        }
      ])
      .match({ id })
       res.send(`Successfully edited post for project ${title}`)
  } catch(err) {
    res.status(500).send(err)
  }
}

export default editPost;