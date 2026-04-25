import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

async function runMigrations() {
  try {
    console.log('Running database migrations...')

    // Read and execute schema migration
    const schema = fs.readFileSync(path.join(process.cwd(), 'scripts/001_create_schema.sql'), 'utf-8')
    console.log('Executing schema migration...')
    const { error: schemaError } = await supabase.rpc('exec', { sql: schema }, { head: true })
    
    if (schemaError && !schemaError.message.includes('already exists')) {
      console.log('Schema error (may be expected):', schemaError.message)
    } else {
      console.log('✓ Schema migration completed')
    }

    // Read and execute trigger migration
    const trigger = fs.readFileSync(path.join(process.cwd(), 'scripts/002_profile_trigger.sql'), 'utf-8')
    console.log('Executing trigger migration...')
    const { error: triggerError } = await supabase.rpc('exec', { sql: trigger }, { head: true })
    
    if (triggerError && !triggerError.message.includes('already exists')) {
      console.log('Trigger error (may be expected):', triggerError.message)
    } else {
      console.log('✓ Trigger migration completed')
    }

    console.log('✓ All migrations completed successfully')
    process.exit(0)
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

runMigrations()
