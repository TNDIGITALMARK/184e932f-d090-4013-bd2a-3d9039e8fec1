import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hfndfmtxhqvubnfiwzlz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA';
const scopedToken = process.env.NEXT_PUBLIC_SUPABASE_SCOPED_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkhvelFjRmE1ZTZVZjNCd3pJNjFxTHJjS2I2cjEiLCJwcm9qZWN0X2lkIjoiMTg0ZTkzMmYtZDA5MC00MDEzLWJkMmEtM2Q5MDM5ZThmZWMxIiwianRpIjoiNzIxOTIyYjAtOWY3Ny00NWExLWIyOGYtZjllNjYzOTIwYTQzIiwiaWF0IjoxNzYyOTU3MDM5LCJleHAiOjE3NjI5NTk3Mzl9.FQ8dgnh1DCrs3iKdFljC0C6qzButBXojPcg1OWtjkJc';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    global: {
      headers: {
        Authorization: `Bearer ${scopedToken}`
      }
    }
  }
);

// Tenant and Project IDs for reference
export const TENANT_ID = 'HozQcFa5e6Uf3BwzI61qLrcKb6r1';
export const PROJECT_ID = '184e932f-d090-4013-bd2a-3d9039e8fec1';
