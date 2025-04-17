export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_settings: {
        Row: {
          description: string | null
          id: string
          key: string
          updated_at: string | null
          value: string
        }
        Insert: {
          description?: string | null
          id?: string
          key: string
          updated_at?: string | null
          value: string
        }
        Update: {
          description?: string | null
          id?: string
          key?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          content: string
          cover_image: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          published: boolean | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          cover_image?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          published?: boolean | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          cover_image?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          published?: boolean | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      class_registrations: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          phone: string
          source: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          source?: string | null
        }
        Relationships: []
      }
      content: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          duration: number | null
          file_size: number | null
          id: string
          mime_type: string | null
          thumbnail_url: string | null
          title: string
          type: string
          updated_at: string | null
          url: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          file_size?: number | null
          id?: string
          mime_type?: string | null
          thumbnail_url?: string | null
          title: string
          type: string
          updated_at?: string | null
          url: string
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          file_size?: number | null
          id?: string
          mime_type?: string | null
          thumbnail_url?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      content_tags: {
        Row: {
          content_id: string
          tag_id: string
        }
        Insert: {
          content_id: string
          tag_id: string
        }
        Update: {
          content_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_tags_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "content"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      course_registrations: {
        Row: {
          category: string
          created_at: string
          email: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          email: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          stripe_customer_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          stripe_customer_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          stripe_customer_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      destinations: {
        Row: {
          activities: number
          city: string
          country: string
          created_at: string | null
          date: string
          hotels: number
          id: string
          promotional_title: string
          restaurants: number
          user_id: string | null
        }
        Insert: {
          activities: number
          city: string
          country: string
          created_at?: string | null
          date: string
          hotels: number
          id?: string
          promotional_title: string
          restaurants: number
          user_id?: string | null
        }
        Update: {
          activities?: number
          city?: string
          country?: string
          created_at?: string | null
          date?: string
          hotels?: number
          id?: string
          promotional_title?: string
          restaurants?: number
          user_id?: string | null
        }
        Relationships: []
      }
      live_event_access: {
        Row: {
          event_id: string
          id: string
          purchased_at: string | null
          stripe_payment_id: string | null
          stripe_session_id: string | null
          user_id: string
        }
        Insert: {
          event_id: string
          id?: string
          purchased_at?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          user_id: string
        }
        Update: {
          event_id?: string
          id?: string
          purchased_at?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "live_event_access_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "live_events"
            referencedColumns: ["id"]
          },
        ]
      }
      live_events: {
        Row: {
          created_at: string | null
          description: string | null
          end_time: string
          id: string
          level: string | null
          max_attendees: number | null
          price: number
          sharing_text: string | null
          start_time: string
          status: string
          stripe_price_id: string
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          youtube_stream_id: string | null
          youtube_stream_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_time: string
          id?: string
          level?: string | null
          max_attendees?: number | null
          price: number
          sharing_text?: string | null
          start_time: string
          status?: string
          stripe_price_id: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          youtube_stream_id?: string | null
          youtube_stream_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_time?: string
          id?: string
          level?: string | null
          max_attendees?: number | null
          price?: number
          sharing_text?: string | null
          start_time?: string
          status?: string
          stripe_price_id?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          youtube_stream_id?: string | null
          youtube_stream_url?: string | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          name: string | null
          status: string | null
          subscribed_at: string | null
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          name?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          name?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      plans: {
        Row: {
          badge: string | null
          created_at: string | null
          description: string
          features: string[]
          id: string
          name: string
          price: number
          stripe_price_id: string
          type: string
          updated_at: string | null
        }
        Insert: {
          badge?: string | null
          created_at?: string | null
          description: string
          features: string[]
          id?: string
          name: string
          price: number
          stripe_price_id: string
          type: string
          updated_at?: string | null
        }
        Update: {
          badge?: string | null
          created_at?: string | null
          description?: string
          features?: string[]
          id?: string
          name?: string
          price?: number
          stripe_price_id?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id: string
          role?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      rss_feeds: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          name: string
          priority: number | null
          section: string
          updated_at: string | null
          url: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name: string
          priority?: number | null
          section: string
          updated_at?: string | null
          url: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name?: string
          priority?: number | null
          section?: string
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      sales_events: {
        Row: {
          event: string
          extra_data: Json | null
          id: string
          site_id: string | null
          timestamp: string | null
          user_id: string | null
          webhook_status: string | null
        }
        Insert: {
          event: string
          extra_data?: Json | null
          id?: string
          site_id?: string | null
          timestamp?: string | null
          user_id?: string | null
          webhook_status?: string | null
        }
        Update: {
          event?: string
          extra_data?: Json | null
          id?: string
          site_id?: string | null
          timestamp?: string | null
          user_id?: string | null
          webhook_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_events_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsors: {
        Row: {
          active: boolean | null
          id: string
          logo_url: string
          name: string
          website_url: string
        }
        Insert: {
          active?: boolean | null
          id?: string
          logo_url: string
          name: string
          website_url: string
        }
        Update: {
          active?: boolean | null
          id?: string
          logo_url?: string
          name?: string
          website_url?: string
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          confirmed: boolean | null
          created_at: string | null
          email: string
          id: string
        }
        Insert: {
          confirmed?: boolean | null
          created_at?: string | null
          email: string
          id?: string
        }
        Update: {
          confirmed?: boolean | null
          created_at?: string | null
          email?: string
          id?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      translations: {
        Row: {
          created_at: string | null
          id: string
          language: string
          text_key: string
          translation: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          language: string
          text_key: string
          translation: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          language?: string
          text_key?: string
          translation?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_assessments: {
        Row: {
          birth_date: string
          created_at: string | null
          email: string
          id: string
          improvement_area: string
          name: string
          webhook_status: string | null
        }
        Insert: {
          birth_date: string
          created_at?: string | null
          email: string
          id?: string
          improvement_area: string
          name: string
          webhook_status?: string | null
        }
        Update: {
          birth_date?: string
          created_at?: string | null
          email?: string
          id?: string
          improvement_area?: string
          name?: string
          webhook_status?: string | null
        }
        Relationships: []
      }
      user_products: {
        Row: {
          acquired_at: string | null
          id: string
          is_free: boolean | null
          product_id: string
          status: string | null
          stripe_payment_id: string | null
          stripe_session_id: string | null
          user_id: string
        }
        Insert: {
          acquired_at?: string | null
          id?: string
          is_free?: boolean | null
          product_id: string
          status?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          user_id: string
        }
        Update: {
          acquired_at?: string | null
          id?: string
          is_free?: boolean | null
          product_id?: string
          status?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          created_at: string | null
          id: string
          membership: string | null
          name: string | null
          phone: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          membership?: string | null
          name?: string | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          membership?: string | null
          name?: string | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      webhook_logs: {
        Row: {
          created_at: string
          error_message: string | null
          event: string
          id: string
          response_body: string | null
          status: number | null
          webhook_id: string | null
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          event: string
          id?: string
          response_body?: string | null
          status?: number | null
          webhook_id?: string | null
        }
        Update: {
          created_at?: string
          error_message?: string | null
          event?: string
          id?: string
          response_body?: string | null
          status?: number | null
          webhook_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "webhook_logs_webhook_id_fkey"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "webhooks"
            referencedColumns: ["id"]
          },
        ]
      }
      webhooks: {
        Row: {
          created_at: string
          event: string
          id: string
          site_id: string | null
          status: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          event: string
          id?: string
          site_id?: string | null
          status?: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          event?: string
          id?: string
          site_id?: string | null
          status?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "webhooks_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_playlist_cache: {
        Row: {
          created_at: string
          data: Json
          id: string
          playlist_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
          playlist_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          playlist_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      youtube_settings: {
        Row: {
          channel_id: string
          id: string
          playlist_id: string | null
          updated_at: string | null
        }
        Insert: {
          channel_id?: string
          id?: string
          playlist_id?: string | null
          updated_at?: string | null
        }
        Update: {
          channel_id?: string
          id?: string
          playlist_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      user_role: "admin" | "user" | "cliente"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      user_role: ["admin", "user", "cliente"],
    },
  },
} as const
