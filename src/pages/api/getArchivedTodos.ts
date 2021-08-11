import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../supabase/client';

const getArchivedTodos =  async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const response = await supabase
      .from('posts')
      .select()
      .match({status: 'Archived'})
    res.send(response.data)
  } catch(err) {
    res.status(500).send(err)
  }
}

export default getArchivedTodos;