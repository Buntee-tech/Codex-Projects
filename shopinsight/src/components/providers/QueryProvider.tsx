// ============================================
// ShopInsight - React Query Provider
// ============================================
// Wraps the application with TanStack Query (React Query) provider
// Enables powerful data fetching, caching, and synchronization
// ============================================

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

/**
 * Creates a new QueryClient instance with default configuration
 * Optimized for our e-commerce analytics use case
 */
const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Stale time: how long data is considered fresh
        // For analytics data, we consider it fresh for 5 minutes
        staleTime: 5 * 60 * 1000, // 5 minutes
        
        // Cache time: how long inactive data stays in cache
        gcTime: 10 * 60 * 1000, // 10 minutes
        
        // Retry failed requests 3 times
        retry: 3,
        
        // Don't refetch on window focus by default
        refetchOnWindowFocus: false,
        
        // Show error messages in console
        throwOnError: false,
      },
    },
  });
};

/**
 * Providers component that wraps the entire application
 * Must be placed at the root of the app (in layout.tsx)
 * 
 * @param children - Child components to wrap
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // Create QueryClient once per component instance
  // Using useState prevents recreation on re-renders
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
