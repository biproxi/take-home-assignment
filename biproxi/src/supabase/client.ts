import { createClient } from '@supabase/supabase-js';


// declare var process : {
//   env: {
//     SUPABASE_URL: string,
//     ANON: string
//   }
// }

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.ANON
);