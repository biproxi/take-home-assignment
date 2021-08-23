import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cokgnqziflibselrzqwi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTc0NzUyNSwiZXhwIjoxOTQ1MzIzNTI1fQ.A4711lWb6lMEk6H6V894Hvgf1RVsgnHqkhlSsRsVxX4"
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;