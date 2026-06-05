// ============================================
// ShopInsight - Database Type Definitions
// ============================================
// TypeScript types for Supabase database schema
// These types provide type safety when querying the database
// ============================================

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

/**
 * User profile extending Supabase auth.users
 */
export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

/**
 * Team for collaboration
 */
export interface Team {
  id: string;
  name: string;
  created_by: string;
  created_at: string;
}

/**
 * Team member with role
 */
export interface TeamMember {
  team_id: string;
  user_id: string;
  role: 'admin' | 'member' | 'viewer';
  joined_at: string;
}

/**
 * Connected e-commerce store
 */
export interface Store {
  id: string;
  team_id: string;
  platform: 'shopify' | 'woocommerce' | 'amazon' | 'magento' | 'other';
  store_name: string;
  oauth_token?: string;
  api_key?: string;
  webhook_secret?: string;
  last_synced_at?: string;
  is_active: boolean;
  created_at: string;
}

/**
 * Product from connected store
 */
export interface Product {
  id: string;
  store_id: string;
  external_id: string;
  name: string;
  sku?: string;
  price: number;
  inventory_quantity: number;
  inventory_threshold?: number;
  created_at: string;
  updated_at: string;
}

/**
 * Order from connected store
 */
export interface Order {
  id: string;
  store_id: string;
  external_id: string;
  customer_email?: string;
  total_amount: number;
  currency: string;
  status: string;
  ordered_at: string;
  synced_at: string;
}

/**
 * Individual item in an order
 */
export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_purchase: number;
}

/**
 * Marketing campaign tracking
 */
export interface MarketingCampaign {
  id: string;
  store_id: string;
  campaign_name: string;
  platform: 'google' | 'facebook' | 'email' | 'tiktok' | 'other';
  spend: number;
  start_date?: string;
  end_date?: string;
  created_at: string;
}

/**
 * Inventory alert for low stock
 */
export interface InventoryAlert {
  id: string;
  product_id: string;
  threshold: number;
  current_quantity: number;
  is_triggered: boolean;
  created_at: string;
}

/**
 * Data sync log
 */
export interface SyncLog {
  id: string;
  store_id: string;
  sync_type: 'full' | 'incremental';
  status: 'success' | 'failed';
  records_synced?: number;
  started_at: string;
  completed_at?: string;
  error_message?: string;
}

/**
 * Main database type mapping all tables
 */
export interface Database {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: Omit<User, 'created_at'>;
        Update: Partial<Omit<User, 'id' | 'created_at'>>;
      };
      teams: {
        Row: Team;
        Insert: Omit<Team, 'created_at'>;
        Update: Partial<Omit<Team, 'id' | 'created_at'>>;
      };
      team_members: {
        Row: TeamMember;
        Insert: TeamMember;
        Update: Partial<Omit<TeamMember, 'joined_at'>>;
      };
      stores: {
        Row: Store;
        Insert: Omit<Store, 'id' | 'created_at'>;
        Update: Partial<Omit<Store, 'id' | 'created_at'>>;
      };
      products: {
        Row: Product;
        Insert: Omit<Product, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>;
      };
      orders: {
        Row: Order;
        Insert: Omit<Order, 'id' | 'synced_at'>;
        Update: Partial<Omit<Order, 'id' | 'synced_at'>>;
      };
      order_items: {
        Row: OrderItem;
        Insert: OrderItem;
        Update: Partial<Omit<OrderItem, 'id'>>;
      };
      marketing_campaigns: {
        Row: MarketingCampaign;
        Insert: Omit<MarketingCampaign, 'id' | 'created_at'>;
        Update: Partial<Omit<MarketingCampaign, 'id' | 'created_at'>>;
      };
      inventory_alerts: {
        Row: InventoryAlert;
        Insert: Omit<InventoryAlert, 'id' | 'created_at'>;
        Update: Partial<Omit<InventoryAlert, 'id' | 'created_at'>>;
      };
      sync_logs: {
        Row: SyncLog;
        Insert: Omit<SyncLog, 'id' | 'started_at'>;
        Update: Partial<Omit<SyncLog, 'id' | 'started_at'>>;
      };
    };
    Views: {};
    Functions: {};
  };
}
