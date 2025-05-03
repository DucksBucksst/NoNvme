import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zuwkmugnhfgvbfosvlsr.supabase.co'; // замени на свой
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1d2ttdWduaGZndmJmb3N2bHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMTM2ODYsImV4cCI6MjA2MTc4OTY4Nn0.33MHlAIjnGD1QuZurYMKUelaLy8FGOTJxCvt-QUT-Go'; // замени на свой

export const supabase = createClient(supabaseUrl, supabaseKey);
