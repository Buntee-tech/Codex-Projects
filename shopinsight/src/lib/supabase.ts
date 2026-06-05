// ============================================
// ShopInsight - Supabase Client Configuration
// ============================================
// This file initializes the Supabase client for both 
// client-side and server-side usage in Next.js
// ============================================

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

// Get environment variables with validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate that required environment variables are present
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check .env.local file.'
  );
}

/**
 * Creates a Supabase client instance for browser usage
 * This client uses the anonymous key which is safe for client-side use
 * Row Level Security (RLS) policies protect your data
 */
export const createBrowserClient = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};

/**
 * Creates a Supabase client instance for server-side usage
 * In Next.js App Router, this should be used in Server Components
 * and API routes
 */
export const createServerClient = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};

// Export a singleton instance for simple usage
// Note: For advanced auth scenarios, use the factory functions above
export const supabase = createBrowserClient();
