import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://arahaqzhdfawfrfpazqo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyYWhhcXpoZGZhd2ZyZnBhenFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MzMxNTksImV4cCI6MjA2MTUwOTE1OX0.EH378rGAKN99ASfwtcVo6gv_yeQOAFg2VwBCQmSEpEw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
