import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL
const anon = process.env.ANON;

export const supabase = createClient(supabaseUrl, anon)
