import { createClient } from '@supabase/supabase-js'

// 1. Adım'da kopyaladığın URL'yi buraya yapıştır
const supabaseUrl = 'https://bzrglrqxjhciaofmgozy.supabase.co'

// 1. Adım'da kopyaladığın 'anon public' anahtarını buradaki tırnakların arasına yapıştır
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6cmdscnF4amhjaWFvZm1nb3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTUxNzgsImV4cCI6MjA3NDI5MTE3OH0.mahbqSSzBvgdwij91Qy9qaEOTNgTkKGVLZAHWF2jmOg'

export const supabase = createClient(supabaseUrl, supabaseKey)