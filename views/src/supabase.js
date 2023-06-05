import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zlwhimyudjnvvxenfmbp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsd2hpbXl1ZGpudnZ4ZW5mbWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyOTg5MjEsImV4cCI6MjAwMDg3NDkyMX0.AdRgarGYgurGshMbli767RNpUem6b2Lwa2sp2BnKthI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;