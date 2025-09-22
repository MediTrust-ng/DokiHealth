'use client'
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_PUBLISHABLE_KEY!,
  { auth: { persistSession: true, detectSessionInUrl: true } }
)
