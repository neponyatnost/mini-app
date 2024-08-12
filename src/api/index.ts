import { Database } from '@/types/supabase'
import { createClient } from '@supabase/supabase-js'

const url = 'https://ryimojlodjorzoylvwhb.supabase.co'
const key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aW1vamxvZGpvcnpveWx2d2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NTY1MjQsImV4cCI6MjAyNjQzMjUyNH0.C86VwugjWlt8b2CVQdNTsHx18tMiDT1_wKGoyKLWgPg'

if (!key) {
  console.log('SB KEY ARE REQUIRED!')
  throw new Error('SB KEY ARE REQUIRED!')
}

export const supabase = createClient<Database>(url, key)
