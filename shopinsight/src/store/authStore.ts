// ============================================
// ShopInsight - Authentication Store (Zustand)
// ============================================
// Manages authentication state globally using Zustand
// This store tracks user session and auth status
// ============================================

import { create } from 'zustand';
import type { User } from '@supabase/supabase-js';

/**
 * Authentication state interface
 */
interface AuthState {
  // Current authenticated user
  user: User | null;
  
  // Whether user is currently loading/authenticating
  isLoading: boolean;
  
  // Whether user is authenticated
  isAuthenticated: boolean;
  
  // Action to set the current user
  setUser: (user: User | null) => void;
  
  // Action to set loading state
  setLoading: (loading: boolean) => void;
  
  // Action to clear authentication state (logout)
  clearAuth: () => void;
}

/**
 * Creates the authentication store
 * 
 * @example
 * const { user, isAuthenticated } = useAuthStore();
 */
export const useAuthStore = create<AuthState>((set) => ({
  // Initial state
  user: null,
  isLoading: true,
  isAuthenticated: false,
  
  // Set the current user and update authentication status
  setUser: (user) => set({ 
    user, 
    isAuthenticated: !!user,
    isLoading: false 
  }),
  
  // Set loading state
  setLoading: (isLoading) => set({ isLoading }),
  
  // Clear all auth state (used on logout)
  clearAuth: () => set({ 
    user: null, 
    isAuthenticated: false, 
    isLoading: false 
  }),
}));
