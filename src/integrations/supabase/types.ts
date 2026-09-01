export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          condition: string
          description: string
          icon: string
          id: string
          name: string
        }
        Insert: {
          condition: string
          description: string
          icon: string
          id?: string
          name: string
        }
        Update: {
          condition?: string
          description?: string
          icon?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      admin_allowlist: {
        Row: {
          added_by: string | null
          created_at: string
          email: string
        }
        Insert: {
          added_by?: string | null
          created_at?: string
          email: string
        }
        Update: {
          added_by?: string | null
          created_at?: string
          email?: string
        }
        Relationships: []
      }
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
      blog_categories: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          order_index: number | null
          site_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id: string
          name: string
          order_index?: number | null
          site_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          order_index?: number | null
          site_id?: string | null
        }
        Relationships: []
      }
      blog_comment_likes: {
        Row: {
          comment_id: string
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "blog_post_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_leads: {
        Row: {
          campaign: string | null
          content: string | null
          created_at: string | null
          email: string
          id: string
          metadata: Json | null
          name: string
          phone: string | null
          source: string | null
        }
        Insert: {
          campaign?: string | null
          content?: string | null
          created_at?: string | null
          email: string
          id?: string
          metadata?: Json | null
          name: string
          phone?: string | null
          source?: string | null
        }
        Update: {
          campaign?: string | null
          content?: string | null
          created_at?: string | null
          email?: string
          id?: string
          metadata?: Json | null
          name?: string
          phone?: string | null
          source?: string | null
        }
        Relationships: []
      }
      blog_newsletter_schedule: {
        Row: {
          category_id: string | null
          created_at: string
          error: string | null
          id: string
          post_id: string
          recipients_count: number | null
          sent_at: string | null
          sent_order: number | null
          status: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          error?: string | null
          id?: string
          post_id: string
          recipients_count?: number | null
          sent_at?: string | null
          sent_order?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          error?: string | null
          id?: string
          post_id?: string
          recipients_count?: number | null
          sent_at?: string | null
          sent_order?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_newsletter_schedule_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_newsletter_schedule_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: true
            referencedRelation: "tedx_quote_inventory"
            referencedColumns: ["blog_post_id"]
          },
          {
            foreignKeyName: "blog_newsletter_schedule_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: true
            referencedRelation: "youtube_blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_post_comments: {
        Row: {
          blog_post_id: string
          content: string
          created_at: string | null
          id: string
          like_count: number | null
          parent_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          blog_post_id: string
          content: string
          created_at?: string | null
          id?: string
          like_count?: number | null
          parent_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          blog_post_id?: string
          content?: string
          created_at?: string | null
          id?: string
          like_count?: number | null
          parent_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_comments_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "tedx_quote_inventory"
            referencedColumns: ["blog_post_id"]
          },
          {
            foreignKeyName: "blog_post_comments_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "youtube_blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "blog_post_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      cash_payment_coupons: {
        Row: {
          access_source: string | null
          activated_at: string | null
          activated_by: string | null
          amount_mxn: number
          client_notes: string | null
          coupon_code: string
          created_at: string
          email: string
          id: string
          name: string
          paid_amount_mxn: number | null
          product_id: string
          revoke_token: string | null
          status: Database["public"]["Enums"]["cash_payment_status"]
          user_id: string | null
        }
        Insert: {
          access_source?: string | null
          activated_at?: string | null
          activated_by?: string | null
          amount_mxn?: number
          client_notes?: string | null
          coupon_code: string
          created_at?: string
          email: string
          id?: string
          name: string
          paid_amount_mxn?: number | null
          product_id: string
          revoke_token?: string | null
          status?: Database["public"]["Enums"]["cash_payment_status"]
          user_id?: string | null
        }
        Update: {
          access_source?: string | null
          activated_at?: string | null
          activated_by?: string | null
          amount_mxn?: number
          client_notes?: string | null
          coupon_code?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          paid_amount_mxn?: number | null
          product_id?: string
          revoke_token?: string | null
          status?: Database["public"]["Enums"]["cash_payment_status"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cash_payment_coupons_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
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
      cf_newsletter_send_log: {
        Row: {
          error: string | null
          id: string
          post_slug: string | null
          sent_at: string
          speaker_slug: string | null
          status: string
          subscriber_id: string | null
        }
        Insert: {
          error?: string | null
          id?: string
          post_slug?: string | null
          sent_at?: string
          speaker_slug?: string | null
          status?: string
          subscriber_id?: string | null
        }
        Update: {
          error?: string | null
          id?: string
          post_slug?: string | null
          sent_at?: string
          speaker_slug?: string | null
          status?: string
          subscriber_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cf_newsletter_send_log_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "cf_newsletter_subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      cf_newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          last_sent_at: string | null
          last_speaker_slug: string | null
          name: string
          send_count: number
          status: string
          unsubscribe_token: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          last_sent_at?: string | null
          last_speaker_slug?: string | null
          name: string
          send_count?: number
          status?: string
          unsubscribe_token?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          last_sent_at?: string | null
          last_speaker_slug?: string | null
          name?: string
          send_count?: number
          status?: string
          unsubscribe_token?: string
          updated_at?: string
        }
        Relationships: []
      }
      cf_quote_requests: {
        Row: {
          budget: string | null
          company: string | null
          created_at: string
          email: string
          event_intentions: string | null
          event_type: string | null
          id: string
          name: string
          notified_at: string | null
          notify_error: string | null
          phone: string | null
          pitch: string | null
          social_media: string | null
          speaker_focus: string | null
          specific_objectives: string | null
          status: string
          updated_at: string
        }
        Insert: {
          budget?: string | null
          company?: string | null
          created_at?: string
          email: string
          event_intentions?: string | null
          event_type?: string | null
          id?: string
          name: string
          notified_at?: string | null
          notify_error?: string | null
          phone?: string | null
          pitch?: string | null
          social_media?: string | null
          speaker_focus?: string | null
          specific_objectives?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          budget?: string | null
          company?: string | null
          created_at?: string
          email?: string
          event_intentions?: string | null
          event_type?: string | null
          id?: string
          name?: string
          notified_at?: string | null
          notify_error?: string | null
          phone?: string | null
          pitch?: string | null
          social_media?: string | null
          speaker_focus?: string | null
          specific_objectives?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      class_registrations: {
        Row: {
          confirmation_token: string | null
          confirmed: boolean | null
          created_at: string
          email: string
          id: string
          name: string
          phone: string
          session_date: string | null
          session_name: string | null
          source: string | null
        }
        Insert: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
          session_date?: string | null
          session_name?: string | null
          source?: string | null
        }
        Update: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          session_date?: string | null
          session_name?: string | null
          source?: string | null
        }
        Relationships: []
      }
      commissions: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          level: number
          source_user_id: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          level: number
          source_user_id?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          level?: number
          source_user_id?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      community_invitations: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string
          expires_at: string
          id: string
          invitation_token: string
          invited_by: string | null
          metadata: Json | null
          product_ids: string[] | null
          status: string
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email: string
          expires_at: string
          id?: string
          invitation_token: string
          invited_by?: string | null
          metadata?: Json | null
          product_ids?: string[] | null
          status?: string
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invitation_token?: string
          invited_by?: string | null
          metadata?: Json | null
          product_ids?: string[] | null
          status?: string
        }
        Relationships: []
      }
      community_levels: {
        Row: {
          benefits: string[] | null
          color: string
          content_video_count: number | null
          created_at: string
          icon: string
          id: string
          level_number: number
          name: string
          required_comments_created: number | null
          required_likes_given: number | null
          required_likes_received: number | null
          xp_required: number
        }
        Insert: {
          benefits?: string[] | null
          color?: string
          content_video_count?: number | null
          created_at?: string
          icon?: string
          id?: string
          level_number: number
          name: string
          required_comments_created?: number | null
          required_likes_given?: number | null
          required_likes_received?: number | null
          xp_required: number
        }
        Update: {
          benefits?: string[] | null
          color?: string
          content_video_count?: number | null
          created_at?: string
          icon?: string
          id?: string
          level_number?: number
          name?: string
          required_comments_created?: number | null
          required_likes_given?: number | null
          required_likes_received?: number | null
          xp_required?: number
        }
        Relationships: []
      }
      consultation_unlocks: {
        Row: {
          completed_lessons: number
          course_slug: string
          created_at: string
          id: string
          required_module_ids: string[]
          schedule_url: string | null
          total_required_lessons: number
          unlock_email_sent_at: string | null
          unlocked: boolean
          unlocked_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_lessons?: number
          course_slug: string
          created_at?: string
          id?: string
          required_module_ids: string[]
          schedule_url?: string | null
          total_required_lessons?: number
          unlock_email_sent_at?: string | null
          unlocked?: boolean
          unlocked_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_lessons?: number
          course_slug?: string
          created_at?: string
          id?: string
          required_module_ids?: string[]
          schedule_url?: string | null
          total_required_lessons?: number
          unlock_email_sent_at?: string | null
          unlocked?: boolean
          unlocked_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      consultorio_casos: {
        Row: {
          contact_id: string | null
          created_at: string
          display_name: string
          display_order: number
          featured: boolean
          id: string
          is_anonymous: boolean
          mensaje: string
          project_id: string
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          contact_id?: string | null
          created_at?: string
          display_name?: string
          display_order?: number
          featured?: boolean
          id?: string
          is_anonymous?: boolean
          mensaje: string
          project_id?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          contact_id?: string | null
          created_at?: string
          display_name?: string
          display_order?: number
          featured?: boolean
          id?: string
          is_anonymous?: boolean
          mensaje?: string
          project_id?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          subject?: string
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
      corporate_leads: {
        Row: {
          answers: Json
          company: string
          company_size: string | null
          created_at: string
          dashboard_token: string
          dnc_activated_at: string | null
          dnc_active: boolean
          email: string
          employees_count: number | null
          id: string
          industry: string | null
          name: string
          phone: string | null
          scores: Json
          slug: string | null
          updated_at: string
        }
        Insert: {
          answers?: Json
          company: string
          company_size?: string | null
          created_at?: string
          dashboard_token?: string
          dnc_activated_at?: string | null
          dnc_active?: boolean
          email: string
          employees_count?: number | null
          id?: string
          industry?: string | null
          name: string
          phone?: string | null
          scores?: Json
          slug?: string | null
          updated_at?: string
        }
        Update: {
          answers?: Json
          company?: string
          company_size?: string | null
          created_at?: string
          dashboard_token?: string
          dnc_activated_at?: string | null
          dnc_active?: boolean
          email?: string
          employees_count?: number | null
          id?: string
          industry?: string | null
          name?: string
          phone?: string | null
          scores?: Json
          slug?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      course_lesson_progress: {
        Row: {
          completed_at: string | null
          course_slug: string
          created_at: string
          id: string
          last_position_seconds: number | null
          lesson_id: string
          updated_at: string
          user_id: string
          watch_percentage: number | null
        }
        Insert: {
          completed_at?: string | null
          course_slug?: string
          created_at?: string
          id?: string
          last_position_seconds?: number | null
          lesson_id: string
          updated_at?: string
          user_id: string
          watch_percentage?: number | null
        }
        Update: {
          completed_at?: string | null
          course_slug?: string
          created_at?: string
          id?: string
          last_position_seconds?: number | null
          lesson_id?: string
          updated_at?: string
          user_id?: string
          watch_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "course_lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "course_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      course_lessons: {
        Row: {
          ai_exercises: string | null
          ai_generated_at: string | null
          ai_recommendations: string | null
          ai_reflection: string | null
          course_slug: string
          created_at: string
          description: string | null
          duration_seconds: number | null
          id: string
          is_active: boolean
          lesson_number: number
          module_id: string | null
          module_number: number
          thumbnail_url: string | null
          title: string
          updated_at: string
          vimeo_folder_id: string | null
          vimeo_video_id: string
        }
        Insert: {
          ai_exercises?: string | null
          ai_generated_at?: string | null
          ai_recommendations?: string | null
          ai_reflection?: string | null
          course_slug?: string
          created_at?: string
          description?: string | null
          duration_seconds?: number | null
          id?: string
          is_active?: boolean
          lesson_number: number
          module_id?: string | null
          module_number?: number
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          vimeo_folder_id?: string | null
          vimeo_video_id: string
        }
        Update: {
          ai_exercises?: string | null
          ai_generated_at?: string | null
          ai_recommendations?: string | null
          ai_reflection?: string | null
          course_slug?: string
          created_at?: string
          description?: string | null
          duration_seconds?: number | null
          id?: string
          is_active?: boolean
          lesson_number?: number
          module_id?: string | null
          module_number?: number
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          vimeo_folder_id?: string | null
          vimeo_video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "course_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      course_modules: {
        Row: {
          course_slug: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          module_number: number
          name: string
          updated_at: string
          vimeo_folder_id: string
        }
        Insert: {
          course_slug?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          module_number: number
          name: string
          updated_at?: string
          vimeo_folder_id: string
        }
        Update: {
          course_slug?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          module_number?: number
          name?: string
          updated_at?: string
          vimeo_folder_id?: string
        }
        Relationships: []
      }
      course_nudge_log: {
        Row: {
          course_slug: string | null
          email: string
          error_message: string | null
          id: string
          message_id: string | null
          nudge_type: string
          reference_key: string
          sent_at: string
          status: string
          user_id: string | null
        }
        Insert: {
          course_slug?: string | null
          email: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          nudge_type: string
          reference_key?: string
          sent_at?: string
          status?: string
          user_id?: string | null
        }
        Update: {
          course_slug?: string | null
          email?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          nudge_type?: string
          reference_key?: string
          sent_at?: string
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      course_nudge_settings: {
        Row: {
          course_path: string
          course_slug: string
          created_at: string
          display_name: string
          inactivity_days: number
          is_active: boolean
          lessons_per_week: number
          onboarding_sequence_id: string | null
          product_id: string | null
          updated_at: string
        }
        Insert: {
          course_path?: string
          course_slug: string
          created_at?: string
          display_name: string
          inactivity_days?: number
          is_active?: boolean
          lessons_per_week?: number
          onboarding_sequence_id?: string | null
          product_id?: string | null
          updated_at?: string
        }
        Update: {
          course_path?: string
          course_slug?: string
          created_at?: string
          display_name?: string
          inactivity_days?: number
          is_active?: boolean
          lessons_per_week?: number
          onboarding_sequence_id?: string | null
          product_id?: string | null
          updated_at?: string
        }
        Relationships: []
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
      course_resources: {
        Row: {
          course_id: string | null
          created_at: string | null
          description: string | null
          file_path: string
          file_size_mb: number | null
          file_type: string
          id: string
          name: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          file_path: string
          file_size_mb?: number | null
          file_type: string
          id?: string
          name: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          file_path?: string
          file_size_mb?: number | null
          file_type?: string
          id?: string
          name?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "course_resources_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_activities: {
        Row: {
          contact_id: string
          content: string
          created_at: string
          created_by: string | null
          id: string
          metadata: Json | null
          type: Database["public"]["Enums"]["crm_activity_type"]
        }
        Insert: {
          contact_id: string
          content: string
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          type: Database["public"]["Enums"]["crm_activity_type"]
        }
        Update: {
          contact_id?: string
          content?: string
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          type?: Database["public"]["Enums"]["crm_activity_type"]
        }
        Relationships: [
          {
            foreignKeyName: "crm_activities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "crm_contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_campaigns: {
        Row: {
          bounce_count: number | null
          click_count: number | null
          completed_at: string | null
          created_at: string
          created_by: string | null
          error_count: number | null
          id: string
          name: string
          open_count: number | null
          project_id: string | null
          scheduled_at: string | null
          sent_count: number | null
          started_at: string | null
          status: string
          subject: string
          target_filters: Json | null
          template_id: string | null
          total_recipients: number | null
          updated_at: string
        }
        Insert: {
          bounce_count?: number | null
          click_count?: number | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          error_count?: number | null
          id?: string
          name: string
          open_count?: number | null
          project_id?: string | null
          scheduled_at?: string | null
          sent_count?: number | null
          started_at?: string | null
          status?: string
          subject: string
          target_filters?: Json | null
          template_id?: string | null
          total_recipients?: number | null
          updated_at?: string
        }
        Update: {
          bounce_count?: number | null
          click_count?: number | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          error_count?: number | null
          id?: string
          name?: string
          open_count?: number | null
          project_id?: string | null
          scheduled_at?: string | null
          sent_count?: number | null
          started_at?: string | null
          status?: string
          subject?: string
          target_filters?: Json | null
          template_id?: string | null
          total_recipients?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "crm_campaigns_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "crm_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crm_campaigns_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "crm_email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_contacts: {
        Row: {
          created_at: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          metadata: Json | null
          next_touch_at: string | null
          project_id: string
          status: Database["public"]["Enums"]["crm_contact_status"]
          suppressed: boolean
          suppressed_at: string | null
          suppressed_reason: string | null
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          next_touch_at?: string | null
          project_id: string
          status?: Database["public"]["Enums"]["crm_contact_status"]
          suppressed?: boolean
          suppressed_at?: string | null
          suppressed_reason?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          next_touch_at?: string | null
          project_id?: string
          status?: Database["public"]["Enums"]["crm_contact_status"]
          suppressed?: boolean
          suppressed_at?: string | null
          suppressed_reason?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "crm_contacts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "crm_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_email_templates: {
        Row: {
          created_at: string
          html_body: string
          id: string
          name: string
          project_id: string
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          html_body: string
          id?: string
          name: string
          project_id: string
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          html_body?: string
          id?: string
          name?: string
          project_id?: string
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "crm_email_templates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "crm_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_emails: {
        Row: {
          clicked_at: string | null
          contact_id: string
          created_at: string
          error_message: string | null
          id: string
          opened_at: string | null
          provider_message_id: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["crm_email_status"]
          subject: string
          template_id: string | null
        }
        Insert: {
          clicked_at?: string | null
          contact_id: string
          created_at?: string
          error_message?: string | null
          id?: string
          opened_at?: string | null
          provider_message_id?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["crm_email_status"]
          subject: string
          template_id?: string | null
        }
        Update: {
          clicked_at?: string | null
          contact_id?: string
          created_at?: string
          error_message?: string | null
          id?: string
          opened_at?: string | null
          provider_message_id?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["crm_email_status"]
          subject?: string
          template_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crm_emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "crm_contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crm_emails_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "crm_email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_projects: {
        Row: {
          created_at: string
          domain: string | null
          from_email: string
          from_name: string
          id: string
          name: string
          reply_to: string | null
          resend_api_key_ref: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          domain?: string | null
          from_email: string
          from_name: string
          id?: string
          name: string
          reply_to?: string | null
          resend_api_key_ref?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          domain?: string | null
          from_email?: string
          from_name?: string
          id?: string
          name?: string
          reply_to?: string | null
          resend_api_key_ref?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      crm_rate_limits: {
        Row: {
          count: number
          key: string
          updated_at: string
          window_start: string
        }
        Insert: {
          count?: number
          key: string
          updated_at?: string
          window_start?: string
        }
        Update: {
          count?: number
          key?: string
          updated_at?: string
          window_start?: string
        }
        Relationships: []
      }
      crm_segments: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          name: string
          project_id: string
          rules: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          name: string
          project_id: string
          rules: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          name?: string
          project_id?: string
          rules?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "crm_segments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "crm_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      crm_unsubscribe_tokens: {
        Row: {
          contact_id: string
          created_at: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          contact_id: string
          created_at?: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          contact_id?: string
          created_at?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crm_unsubscribe_tokens_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "crm_contacts"
            referencedColumns: ["id"]
          },
        ]
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
      dnc_responses: {
        Row: {
          answers: Json
          barreras: Json
          company_id: string
          created_at: string
          cultura_score: number | null
          department: string
          ejecucion_score: number | null
          id: string
          scores: Json
          seniority: string
          total_score: number | null
        }
        Insert: {
          answers?: Json
          barreras?: Json
          company_id: string
          created_at?: string
          cultura_score?: number | null
          department: string
          ejecucion_score?: number | null
          id?: string
          scores?: Json
          seniority?: string
          total_score?: number | null
        }
        Update: {
          answers?: Json
          barreras?: Json
          company_id?: string
          created_at?: string
          cultura_score?: number | null
          department?: string
          ejecucion_score?: number | null
          id?: string
          scores?: Json
          seniority?: string
          total_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dnc_responses_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "corporate_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      ebook_leads: {
        Row: {
          created_at: string
          email: string
          id: string
          life_area: string | null
          name: string
          source: string
          subscribed_newsletter: boolean
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          life_area?: string | null
          name: string
          source?: string
          subscribed_newsletter?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          life_area?: string | null
          name?: string
          source?: string
          subscribed_newsletter?: boolean
        }
        Relationships: []
      }
      email_events: {
        Row: {
          campaign_id: string | null
          contact_id: string | null
          created_at: string
          email: string
          enrollment_id: string | null
          event_type: string
          id: string
          message_id: string | null
          occurred_at: string
          project_id: string
          raw: Json | null
          sequence_id: string | null
          step_id: string | null
          url: string | null
        }
        Insert: {
          campaign_id?: string | null
          contact_id?: string | null
          created_at?: string
          email: string
          enrollment_id?: string | null
          event_type: string
          id?: string
          message_id?: string | null
          occurred_at?: string
          project_id?: string
          raw?: Json | null
          sequence_id?: string | null
          step_id?: string | null
          url?: string | null
        }
        Update: {
          campaign_id?: string | null
          contact_id?: string | null
          created_at?: string
          email?: string
          enrollment_id?: string | null
          event_type?: string
          id?: string
          message_id?: string | null
          occurred_at?: string
          project_id?: string
          raw?: Json | null
          sequence_id?: string | null
          step_id?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "crm_contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_events_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "funnel_enrollments"
            referencedColumns: ["id"]
          },
        ]
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          provider: string
          provider_response: Json | null
          recipient: string
          status: string
          subject: string | null
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          provider?: string
          provider_response?: Json | null
          recipient: string
          status: string
          subject?: string | null
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          provider?: string
          provider_response?: Json | null
          recipient?: string
          status?: string
          subject?: string | null
          template_name?: string
        }
        Relationships: []
      }
      email_sequence_steps: {
        Row: {
          channel: string
          created_at: string | null
          delay_hours: number | null
          html_body: string
          id: string
          is_active: boolean | null
          offset_minutes_from_anchor: number | null
          sequence_id: string | null
          step_order: number
          subject: string
          text_body: string | null
          whatsapp_body: string | null
        }
        Insert: {
          channel?: string
          created_at?: string | null
          delay_hours?: number | null
          html_body: string
          id?: string
          is_active?: boolean | null
          offset_minutes_from_anchor?: number | null
          sequence_id?: string | null
          step_order: number
          subject: string
          text_body?: string | null
          whatsapp_body?: string | null
        }
        Update: {
          channel?: string
          created_at?: string | null
          delay_hours?: number | null
          html_body?: string
          id?: string
          is_active?: boolean | null
          offset_minutes_from_anchor?: number | null
          sequence_id?: string | null
          step_order?: number
          subject?: string
          text_body?: string | null
          whatsapp_body?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_sequence_steps_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      email_sequences: {
        Row: {
          anchor_at: string | null
          audience: string | null
          created_at: string | null
          created_by: string | null
          default_channel: string
          description: string | null
          from_email: string | null
          goal: string | null
          id: string
          is_active: boolean | null
          lead_score_max: number | null
          lead_score_min: number | null
          name: string
          service_type: string | null
          tone: string | null
          updated_at: string | null
        }
        Insert: {
          anchor_at?: string | null
          audience?: string | null
          created_at?: string | null
          created_by?: string | null
          default_channel?: string
          description?: string | null
          from_email?: string | null
          goal?: string | null
          id?: string
          is_active?: boolean | null
          lead_score_max?: number | null
          lead_score_min?: number | null
          name: string
          service_type?: string | null
          tone?: string | null
          updated_at?: string | null
        }
        Update: {
          anchor_at?: string | null
          audience?: string | null
          created_at?: string | null
          created_by?: string | null
          default_channel?: string
          description?: string | null
          from_email?: string | null
          goal?: string | null
          id?: string
          is_active?: boolean | null
          lead_score_max?: number | null
          lead_score_min?: number | null
          name?: string
          service_type?: string | null
          tone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      email_suppressions: {
        Row: {
          created_at: string
          details: Json | null
          email: string
          id: string
          message_id: string | null
          project_id: string | null
          reason: string
          source: string
        }
        Insert: {
          created_at?: string
          details?: Json | null
          email: string
          id?: string
          message_id?: string | null
          project_id?: string | null
          reason?: string
          source?: string
        }
        Update: {
          created_at?: string
          details?: Json | null
          email?: string
          id?: string
          message_id?: string | null
          project_id?: string | null
          reason?: string
          source?: string
        }
        Relationships: []
      }
      forum_categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      forum_comment_likes: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "forum_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          is_official: boolean
          like_count: number | null
          parent_id: string | null
          post_id: string
          resource_links: Json
          updated_at: string
          user_id: string
          video_id: string | null
          video_type: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_official?: boolean
          like_count?: number | null
          parent_id?: string | null
          post_id: string
          resource_links?: Json
          updated_at?: string
          user_id: string
          video_id?: string | null
          video_type?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_official?: boolean
          like_count?: number | null
          parent_id?: string | null
          post_id?: string
          resource_links?: Json
          updated_at?: string
          user_id?: string
          video_id?: string | null
          video_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "forum_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "vw_forum_post_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_post_likes: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "vw_forum_post_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_posts: {
        Row: {
          answered_at: string | null
          answered_by: string | null
          category_id: string | null
          comment_count: number | null
          content: string
          created_at: string
          id: string
          is_locked: boolean | null
          is_pinned: boolean | null
          level_number: number | null
          like_count: number | null
          status: string
          title: string
          updated_at: string
          user_id: string
          video_duration: number | null
          video_id: string | null
          video_thumbnail: string | null
          video_type: string | null
          view_count: number | null
        }
        Insert: {
          answered_at?: string | null
          answered_by?: string | null
          category_id?: string | null
          comment_count?: number | null
          content: string
          created_at?: string
          id?: string
          is_locked?: boolean | null
          is_pinned?: boolean | null
          level_number?: number | null
          like_count?: number | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
          video_duration?: number | null
          video_id?: string | null
          video_thumbnail?: string | null
          video_type?: string | null
          view_count?: number | null
        }
        Update: {
          answered_at?: string | null
          answered_by?: string | null
          category_id?: string | null
          comment_count?: number | null
          content?: string
          created_at?: string
          id?: string
          is_locked?: boolean | null
          is_pinned?: boolean | null
          level_number?: number | null
          like_count?: number | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
          video_duration?: number | null
          video_id?: string | null
          video_thumbnail?: string | null
          video_type?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "forum_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      funnel_enrollments: {
        Row: {
          contact_id: string
          created_at: string
          current_step: number
          enrolled_at: string
          id: string
          last_email_at: string | null
          last_error: string | null
          lead_email: string | null
          lead_name: string | null
          lead_phone: string | null
          lead_source: string | null
          next_email_at: string | null
          paused_at: string | null
          sequence_id: string
          status: string
          updated_at: string
        }
        Insert: {
          contact_id: string
          created_at?: string
          current_step?: number
          enrolled_at?: string
          id?: string
          last_email_at?: string | null
          last_error?: string | null
          lead_email?: string | null
          lead_name?: string | null
          lead_phone?: string | null
          lead_source?: string | null
          next_email_at?: string | null
          paused_at?: string | null
          sequence_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          contact_id?: string
          created_at?: string
          current_step?: number
          enrolled_at?: string
          id?: string
          last_email_at?: string | null
          last_error?: string | null
          lead_email?: string | null
          lead_name?: string | null
          lead_phone?: string | null
          lead_source?: string | null
          next_email_at?: string | null
          paused_at?: string | null
          sequence_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funnel_enrollments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "crm_contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funnel_enrollments_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      funnel_send_log: {
        Row: {
          channel: string
          enrollment_id: string
          error: string | null
          id: string
          preview: string | null
          recipient: string | null
          sent_at: string
          sent_by: string | null
          status: string
          step_id: string | null
          step_order: number
          subject: string | null
        }
        Insert: {
          channel: string
          enrollment_id: string
          error?: string | null
          id?: string
          preview?: string | null
          recipient?: string | null
          sent_at?: string
          sent_by?: string | null
          status?: string
          step_id?: string | null
          step_order: number
          subject?: string | null
        }
        Update: {
          channel?: string
          enrollment_id?: string
          error?: string | null
          id?: string
          preview?: string | null
          recipient?: string | null
          sent_at?: string
          sent_by?: string | null
          status?: string
          step_id?: string | null
          step_order?: number
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funnel_send_log_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "funnel_enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funnel_send_log_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "email_sequence_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      hub_events: {
        Row: {
          attempts: number
          created_at: string
          dedupe_key: string | null
          delivered_at: string | null
          delivery_status: string
          event_type: string
          id: string
          last_error: string | null
          occurred_at: string
          payload: Json
          project_id: string
          schema_version: number
          source_domain: string
        }
        Insert: {
          attempts?: number
          created_at?: string
          dedupe_key?: string | null
          delivered_at?: string | null
          delivery_status?: string
          event_type: string
          id?: string
          last_error?: string | null
          occurred_at?: string
          payload?: Json
          project_id?: string
          schema_version?: number
          source_domain?: string
        }
        Update: {
          attempts?: number
          created_at?: string
          dedupe_key?: string | null
          delivered_at?: string | null
          delivery_status?: string
          event_type?: string
          id?: string
          last_error?: string | null
          occurred_at?: string
          payload?: Json
          project_id?: string
          schema_version?: number
          source_domain?: string
        }
        Relationships: []
      }
      hub_sync_failures: {
        Row: {
          attempts: number
          created_at: string
          error: string | null
          id: string
          payload: Json
          resolved_at: string | null
          status: number | null
          sync_type: string
        }
        Insert: {
          attempts?: number
          created_at?: string
          error?: string | null
          id?: string
          payload: Json
          resolved_at?: string | null
          status?: number | null
          sync_type: string
        }
        Update: {
          attempts?: number
          created_at?: string
          error?: string | null
          id?: string
          payload?: Json
          resolved_at?: string | null
          status?: number | null
          sync_type?: string
        }
        Relationships: []
      }
      landing_events: {
        Row: {
          country: string | null
          created_at: string
          device: string | null
          event_type: string
          id: string
          page: string
          referrer: string | null
          session_id: string
          site: string | null
          user_agent: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          device?: string | null
          event_type: string
          id?: string
          page: string
          referrer?: string | null
          session_id: string
          site?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          device?: string | null
          event_type?: string
          id?: string
          page?: string
          referrer?: string | null
          session_id?: string
          site?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      lead_activities: {
        Row: {
          activity_type: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          lead_id: string | null
          metadata: Json | null
        }
        Insert: {
          activity_type: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
        }
        Update: {
          activity_type?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "speaker_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_chat_sessions: {
        Row: {
          created_at: string | null
          ended_at: string | null
          id: string
          intent_detected: string | null
          lead_id: string | null
          messages: Json | null
          qualification_notes: string | null
          sentiment: string | null
          session_type: string | null
          summary: string | null
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          id?: string
          intent_detected?: string | null
          lead_id?: string | null
          messages?: Json | null
          qualification_notes?: string | null
          sentiment?: string | null
          session_type?: string | null
          summary?: string | null
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          id?: string
          intent_detected?: string | null
          lead_id?: string | null
          messages?: Json | null
          qualification_notes?: string | null
          sentiment?: string | null
          session_type?: string | null
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_chat_sessions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "speaker_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_email_history: {
        Row: {
          bounced_at: string | null
          clicked_at: string | null
          complained_at: string | null
          created_at: string | null
          email: string | null
          error_message: string | null
          id: string
          lead_id: string | null
          message_id: string | null
          opened_at: string | null
          sent_at: string | null
          sequence_id: string | null
          status: string | null
          step_id: string | null
        }
        Insert: {
          bounced_at?: string | null
          clicked_at?: string | null
          complained_at?: string | null
          created_at?: string | null
          email?: string | null
          error_message?: string | null
          id?: string
          lead_id?: string | null
          message_id?: string | null
          opened_at?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          status?: string | null
          step_id?: string | null
        }
        Update: {
          bounced_at?: string | null
          clicked_at?: string | null
          complained_at?: string | null
          created_at?: string | null
          email?: string | null
          error_message?: string | null
          id?: string
          lead_id?: string | null
          message_id?: string | null
          opened_at?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          status?: string | null
          step_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_email_history_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "speaker_leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_email_history_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_sequences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_email_history_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "email_sequence_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_management: {
        Row: {
          created_at: string
          id: string
          last_contact_at: string | null
          lead_id: string
          lead_source: string
          notes: string | null
          owner: string | null
          status: Database["public"]["Enums"]["lead_status"]
          tags: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_contact_at?: string | null
          lead_id: string
          lead_source: string
          notes?: string | null
          owner?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          tags?: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          last_contact_at?: string | null
          lead_id?: string
          lead_source?: string
          notes?: string | null
          owner?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          tags?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      lead_source_funnel_mapping: {
        Row: {
          created_at: string
          enabled: boolean
          id: string
          retroactive_count: number | null
          retroactive_done_at: string | null
          sequence_id: string | null
          source_label: string
          source_table: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          id?: string
          retroactive_count?: number | null
          retroactive_done_at?: string | null
          sequence_id?: string | null
          source_label: string
          source_table: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          id?: string
          retroactive_count?: number | null
          retroactive_done_at?: string | null
          sequence_id?: string | null
          source_label?: string
          source_table?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_source_funnel_mapping_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_stages: {
        Row: {
          color: string | null
          created_at: string | null
          display_order: number
          has_leaderboard: boolean | null
          has_points: boolean | null
          icon: string | null
          id: string
          is_required: boolean | null
          name: string
          name_es: string
          purpose: string | null
          stage_number: number
          vimeo_folder_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          display_order: number
          has_leaderboard?: boolean | null
          has_points?: boolean | null
          icon?: string | null
          id?: string
          is_required?: boolean | null
          name: string
          name_es: string
          purpose?: string | null
          stage_number: number
          vimeo_folder_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          display_order?: number
          has_leaderboard?: boolean | null
          has_points?: boolean | null
          icon?: string | null
          id?: string
          is_required?: boolean | null
          name?: string
          name_es?: string
          purpose?: string | null
          stage_number?: number
          vimeo_folder_id?: string | null
        }
        Relationships: []
      }
      level_content: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_exclusive: boolean | null
          level_number: number
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          video_count: number | null
          youtube_playlist_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_exclusive?: boolean | null
          level_number: number
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          video_count?: number | null
          youtube_playlist_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_exclusive?: boolean | null
          level_number?: number
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          video_count?: number | null
          youtube_playlist_id?: string
        }
        Relationships: []
      }
      level_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          instructions: string | null
          is_active: boolean | null
          is_required: boolean | null
          level_number: number
          quiz_questions: Json | null
          task_order: number
          task_type: string
          title: string
          xp_reward: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          instructions?: string | null
          is_active?: boolean | null
          is_required?: boolean | null
          level_number: number
          quiz_questions?: Json | null
          task_order: number
          task_type: string
          title: string
          xp_reward?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          instructions?: string | null
          is_active?: boolean | null
          is_required?: boolean | null
          level_number?: number
          quiz_questions?: Json | null
          task_order?: number
          task_type?: string
          title?: string
          xp_reward?: number | null
        }
        Relationships: []
      }
      level_video_comment_likes: {
        Row: {
          comment_id: string
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "level_video_comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "level_video_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      level_video_comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_reflection: boolean | null
          like_count: number | null
          parent_id: string | null
          updated_at: string | null
          user_id: string
          video_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_reflection?: boolean | null
          like_count?: number | null
          parent_id?: string | null
          updated_at?: string | null
          user_id: string
          video_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_reflection?: boolean | null
          like_count?: number | null
          parent_id?: string | null
          updated_at?: string | null
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "level_video_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "level_video_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "level_video_comments_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "level_videos"
            referencedColumns: ["id"]
          },
        ]
      }
      level_video_progress: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          reflection_submitted: boolean | null
          updated_at: string | null
          user_id: string
          video_id: string
          watch_percentage: number | null
          xp_earned: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          reflection_submitted?: boolean | null
          updated_at?: string | null
          user_id: string
          video_id: string
          watch_percentage?: number | null
          xp_earned?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          reflection_submitted?: boolean | null
          updated_at?: string | null
          user_id?: string
          video_id?: string
          watch_percentage?: number | null
          xp_earned?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "level_video_progress_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "level_videos"
            referencedColumns: ["id"]
          },
        ]
      }
      level_videos: {
        Row: {
          cover_image_url: string | null
          created_at: string | null
          description: string | null
          duration_seconds: number | null
          id: string
          is_active: boolean | null
          level_number: number
          reflection_prompts: string[] | null
          title: string
          updated_at: string | null
          video_order: number
          vimeo_video_id: string
        }
        Insert: {
          cover_image_url?: string | null
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          id?: string
          is_active?: boolean | null
          level_number: number
          reflection_prompts?: string[] | null
          title: string
          updated_at?: string | null
          video_order?: number
          vimeo_video_id: string
        }
        Update: {
          cover_image_url?: string | null
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          id?: string
          is_active?: boolean | null
          level_number?: number
          reflection_prompts?: string[] | null
          title?: string
          updated_at?: string | null
          video_order?: number
          vimeo_video_id?: string
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
          {
            foreignKeyName: "live_event_access_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "live_events_public"
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
      mantra_subscriptions: {
        Row: {
          completed_at: string | null
          created_at: string | null
          current_day: number | null
          email: string
          id: string
          last_email_sent_at: string | null
          name: string | null
          started_at: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          current_day?: number | null
          email: string
          id?: string
          last_email_sent_at?: string | null
          name?: string | null
          started_at?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          current_day?: number | null
          email?: string
          id?: string
          last_email_sent_at?: string | null
          name?: string | null
          started_at?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      mantra_videos: {
        Row: {
          ai_exercises: string | null
          ai_generated_at: string | null
          ai_recommendations: string | null
          ai_reflection: string | null
          created_at: string | null
          day_number: number
          description: string | null
          id: string
          post_id: string | null
          thumbnail_url: string | null
          title: string
          youtube_video_id: string
        }
        Insert: {
          ai_exercises?: string | null
          ai_generated_at?: string | null
          ai_recommendations?: string | null
          ai_reflection?: string | null
          created_at?: string | null
          day_number: number
          description?: string | null
          id?: string
          post_id?: string | null
          thumbnail_url?: string | null
          title: string
          youtube_video_id: string
        }
        Update: {
          ai_exercises?: string | null
          ai_generated_at?: string | null
          ai_recommendations?: string | null
          ai_reflection?: string | null
          created_at?: string | null
          day_number?: number
          description?: string | null
          id?: string
          post_id?: string | null
          thumbnail_url?: string | null
          title?: string
          youtube_video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mantra_videos_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mantra_videos_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "vw_forum_post_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      mkt_import_batches: {
        Row: {
          batch_name: string
          created_at: string
          duplicates: number
          enrolled: number
          id: string
          imported_by: string | null
          new_contacts: number
          project_id: string | null
          sequence_id: string | null
          total_parsed: number
          updated_at: string
        }
        Insert: {
          batch_name: string
          created_at?: string
          duplicates?: number
          enrolled?: number
          id?: string
          imported_by?: string | null
          new_contacts?: number
          project_id?: string | null
          sequence_id?: string | null
          total_parsed?: number
          updated_at?: string
        }
        Update: {
          batch_name?: string
          created_at?: string
          duplicates?: number
          enrolled?: number
          id?: string
          imported_by?: string | null
          new_contacts?: number
          project_id?: string | null
          sequence_id?: string | null
          total_parsed?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mkt_import_batches_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_posts: {
        Row: {
          content: string
          cover_prompt: string | null
          cover_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          key_points: string[]
          published_at: string
          reading_time_minutes: number
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          title: string
          topic: string | null
          updated_at: string
          view_count: number
        }
        Insert: {
          content?: string
          cover_prompt?: string | null
          cover_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          key_points?: string[]
          published_at?: string
          reading_time_minutes?: number
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          title: string
          topic?: string | null
          updated_at?: string
          view_count?: number
        }
        Update: {
          content?: string
          cover_prompt?: string | null
          cover_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          key_points?: string[]
          published_at?: string
          reading_time_minutes?: number
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          title?: string
          topic?: string | null
          updated_at?: string
          view_count?: number
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          name: string | null
          project_id: string | null
          source: string | null
          status: string | null
          subscribed_at: string | null
          unsubscribe_token: string
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          name?: string | null
          project_id?: string | null
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribe_token?: string
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          name?: string | null
          project_id?: string | null
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribe_token?: string
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      omv_passes: {
        Row: {
          consumed_at: string | null
          created_at: string
          destination: string
          expires_at: string
          id: string
          lead_id: string
          source_domain: string
          token_hash: string
        }
        Insert: {
          consumed_at?: string | null
          created_at?: string
          destination: string
          expires_at?: string
          id?: string
          lead_id: string
          source_domain?: string
          token_hash: string
        }
        Update: {
          consumed_at?: string | null
          created_at?: string
          destination?: string
          expires_at?: string
          id?: string
          lead_id?: string
          source_domain?: string
          token_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "omv_passes_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "speaker_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      omv_quote_campaigns: {
        Row: {
          auto_approve_enabled: boolean
          auto_refill_enabled: boolean
          autopilot_authorized_at: string | null
          autopilot_authorized_by: string | null
          created_at: string
          created_by: string | null
          cta_url: string
          daily_publish_time: string
          daily_quote_target: number
          facebook_page_daily_limit: number
          facebook_page_enabled: boolean
          id: string
          instagram_feed_daily_limit: number
          instagram_feed_enabled: boolean
          instagram_story_daily_limit: number
          instagram_story_enabled: boolean
          instagram_token_last_checked_at: string | null
          instagram_token_last_error: string | null
          instagram_token_refreshed_at: string | null
          last_error: string | null
          last_refill_at: string | null
          last_worker_at: string | null
          minimum_approved_stock: number
          name: string
          publish_times: string[]
          starts_on: string | null
          status: string
          timezone: string
          updated_at: string
          website_daily_limit: number
          website_enabled: boolean
        }
        Insert: {
          auto_approve_enabled?: boolean
          auto_refill_enabled?: boolean
          autopilot_authorized_at?: string | null
          autopilot_authorized_by?: string | null
          created_at?: string
          created_by?: string | null
          cta_url?: string
          daily_publish_time?: string
          daily_quote_target?: number
          facebook_page_daily_limit?: number
          facebook_page_enabled?: boolean
          id?: string
          instagram_feed_daily_limit?: number
          instagram_feed_enabled?: boolean
          instagram_story_daily_limit?: number
          instagram_story_enabled?: boolean
          instagram_token_last_checked_at?: string | null
          instagram_token_last_error?: string | null
          instagram_token_refreshed_at?: string | null
          last_error?: string | null
          last_refill_at?: string | null
          last_worker_at?: string | null
          minimum_approved_stock?: number
          name: string
          publish_times?: string[]
          starts_on?: string | null
          status?: string
          timezone?: string
          updated_at?: string
          website_daily_limit?: number
          website_enabled?: boolean
        }
        Update: {
          auto_approve_enabled?: boolean
          auto_refill_enabled?: boolean
          autopilot_authorized_at?: string | null
          autopilot_authorized_by?: string | null
          created_at?: string
          created_by?: string | null
          cta_url?: string
          daily_publish_time?: string
          daily_quote_target?: number
          facebook_page_daily_limit?: number
          facebook_page_enabled?: boolean
          id?: string
          instagram_feed_daily_limit?: number
          instagram_feed_enabled?: boolean
          instagram_story_daily_limit?: number
          instagram_story_enabled?: boolean
          instagram_token_last_checked_at?: string | null
          instagram_token_last_error?: string | null
          instagram_token_refreshed_at?: string | null
          last_error?: string | null
          last_refill_at?: string | null
          last_worker_at?: string | null
          minimum_approved_stock?: number
          name?: string
          publish_times?: string[]
          starts_on?: string | null
          status?: string
          timezone?: string
          updated_at?: string
          website_daily_limit?: number
          website_enabled?: boolean
        }
        Relationships: []
      }
      omv_quote_publication_jobs: {
        Row: {
          asset_url: string | null
          attempts: number
          campaign_id: string
          caption: string | null
          channel: string
          created_at: string
          id: string
          idempotency_key: string
          last_error: string | null
          locked_at: string | null
          max_attempts: number
          position: number
          provider_container_id: string | null
          provider_media_id: string | null
          published_at: string | null
          quote_id: string
          scheduled_for: string | null
          slot: number | null
          status: string
          updated_at: string
        }
        Insert: {
          asset_url?: string | null
          attempts?: number
          campaign_id: string
          caption?: string | null
          channel: string
          created_at?: string
          id?: string
          idempotency_key: string
          last_error?: string | null
          locked_at?: string | null
          max_attempts?: number
          position: number
          provider_container_id?: string | null
          provider_media_id?: string | null
          published_at?: string | null
          quote_id: string
          scheduled_for?: string | null
          slot?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          asset_url?: string | null
          attempts?: number
          campaign_id?: string
          caption?: string | null
          channel?: string
          created_at?: string
          id?: string
          idempotency_key?: string
          last_error?: string | null
          locked_at?: string | null
          max_attempts?: number
          position?: number
          provider_container_id?: string | null
          provider_media_id?: string | null
          published_at?: string | null
          quote_id?: string
          scheduled_for?: string | null
          slot?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "omv_quote_publication_jobs_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "omv_quote_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "omv_quote_publication_jobs_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "omv_quotes"
            referencedColumns: ["id"]
          },
        ]
      }
      omv_quote_source_queue: {
        Row: {
          attempts: number
          blog_post_id: string
          created_at: string
          extracted_quote_count: number
          id: string
          last_attempt_at: string | null
          last_error: string | null
          priority: number
          source_published_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          attempts?: number
          blog_post_id: string
          created_at?: string
          extracted_quote_count?: number
          id?: string
          last_attempt_at?: string | null
          last_error?: string | null
          priority?: number
          source_published_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          attempts?: number
          blog_post_id?: string
          created_at?: string
          extracted_quote_count?: number
          id?: string
          last_attempt_at?: string | null
          last_error?: string | null
          priority?: number
          source_published_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "omv_quote_source_queue_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: true
            referencedRelation: "tedx_quote_inventory"
            referencedColumns: ["blog_post_id"]
          },
          {
            foreignKeyName: "omv_quote_source_queue_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: true
            referencedRelation: "youtube_blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      omv_quotes: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          blog_post_id: string
          category: string
          context: string
          created_at: string
          download_count: number
          end_seconds: number | null
          featured: boolean
          id: string
          instagram_media_id: string | null
          instagram_published_at: string | null
          instagram_status: string
          published_at: string | null
          quote_text: string
          quote_type: string
          review_notes: string | null
          reviewed_at: string | null
          scheduled_for: string | null
          seo_description: string | null
          seo_title: string | null
          share_count: number
          slug: string
          start_seconds: number | null
          status: string
          tags: string[]
          template_key: string
          transcript_excerpt: string | null
          transcript_id: string | null
          updated_at: string
          view_count: number
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          blog_post_id: string
          category?: string
          context?: string
          created_at?: string
          download_count?: number
          end_seconds?: number | null
          featured?: boolean
          id?: string
          instagram_media_id?: string | null
          instagram_published_at?: string | null
          instagram_status?: string
          published_at?: string | null
          quote_text: string
          quote_type?: string
          review_notes?: string | null
          reviewed_at?: string | null
          scheduled_for?: string | null
          seo_description?: string | null
          seo_title?: string | null
          share_count?: number
          slug: string
          start_seconds?: number | null
          status?: string
          tags?: string[]
          template_key?: string
          transcript_excerpt?: string | null
          transcript_id?: string | null
          updated_at?: string
          view_count?: number
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          blog_post_id?: string
          category?: string
          context?: string
          created_at?: string
          download_count?: number
          end_seconds?: number | null
          featured?: boolean
          id?: string
          instagram_media_id?: string | null
          instagram_published_at?: string | null
          instagram_status?: string
          published_at?: string | null
          quote_text?: string
          quote_type?: string
          review_notes?: string | null
          reviewed_at?: string | null
          scheduled_for?: string | null
          seo_description?: string | null
          seo_title?: string | null
          share_count?: number
          slug?: string
          start_seconds?: number | null
          status?: string
          tags?: string[]
          template_key?: string
          transcript_excerpt?: string | null
          transcript_id?: string | null
          updated_at?: string
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "omv_quotes_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "tedx_quote_inventory"
            referencedColumns: ["blog_post_id"]
          },
          {
            foreignKeyName: "omv_quotes_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "youtube_blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "omv_quotes_transcript_id_fkey"
            columns: ["transcript_id"]
            isOneToOne: false
            referencedRelation: "tedx_quote_inventory"
            referencedColumns: ["transcript_id"]
          },
          {
            foreignKeyName: "omv_quotes_transcript_id_fkey"
            columns: ["transcript_id"]
            isOneToOne: false
            referencedRelation: "video_transcripts"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_progress: {
        Row: {
          created_at: string | null
          id: string
          is_onboarding_complete: boolean | null
          updated_at: string | null
          user_id: string
          video_1_progress: number | null
          video_2_progress: number | null
          welcome_video_1_watched: boolean | null
          welcome_video_2_watched: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_onboarding_complete?: boolean | null
          updated_at?: string | null
          user_id: string
          video_1_progress?: number | null
          video_2_progress?: number | null
          welcome_video_1_watched?: boolean | null
          welcome_video_2_watched?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_onboarding_complete?: boolean | null
          updated_at?: string | null
          user_id?: string
          video_1_progress?: number | null
          video_2_progress?: number | null
          welcome_video_1_watched?: boolean | null
          welcome_video_2_watched?: boolean | null
        }
        Relationships: []
      }
      ov_newsletter_digest_log: {
        Row: {
          created_at: string
          error: string | null
          failed_count: number
          id: string
          post_ids: string[]
          posts_count: number
          recipients_count: number
          sent_at: string
          status: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          error?: string | null
          failed_count?: number
          id?: string
          post_ids?: string[]
          posts_count?: number
          recipients_count?: number
          sent_at?: string
          status?: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          error?: string | null
          failed_count?: number
          id?: string
          post_ids?: string[]
          posts_count?: number
          recipients_count?: number
          sent_at?: string
          status?: string
          subject?: string | null
        }
        Relationships: []
      }
      ov_trend_posts: {
        Row: {
          analysis: string
          category: string
          context: string
          created_at: string
          digest_sent_at: string | null
          edition_date: string
          id: string
          image_url: string | null
          lens_tags: string[]
          newsletter_sent_at: string | null
          published_at: string | null
          slug: string
          sources: Json
          status: string
          summary: string | null
          title: string
          video_url: string | null
        }
        Insert: {
          analysis?: string
          category: string
          context?: string
          created_at?: string
          digest_sent_at?: string | null
          edition_date?: string
          id?: string
          image_url?: string | null
          lens_tags?: string[]
          newsletter_sent_at?: string | null
          published_at?: string | null
          slug: string
          sources?: Json
          status?: string
          summary?: string | null
          title: string
          video_url?: string | null
        }
        Update: {
          analysis?: string
          category?: string
          context?: string
          created_at?: string
          digest_sent_at?: string | null
          edition_date?: string
          id?: string
          image_url?: string | null
          lens_tags?: string[]
          newsletter_sent_at?: string | null
          published_at?: string | null
          slug?: string
          sources?: Json
          status?: string
          summary?: string | null
          title?: string
          video_url?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          activated_by: string | null
          amount: number
          created_at: string
          currency: string
          email: string | null
          external_ref: string | null
          id: string
          is_backfill: boolean
          metadata: Json
          method: string
          paid_at: string | null
          product_id: string | null
          product_name: string | null
          source: string | null
          status: string | null
          stripe_id: string | null
          user_id: string | null
        }
        Insert: {
          activated_by?: string | null
          amount: number
          created_at?: string
          currency?: string
          email?: string | null
          external_ref?: string | null
          id?: string
          is_backfill?: boolean
          metadata?: Json
          method?: string
          paid_at?: string | null
          product_id?: string | null
          product_name?: string | null
          source?: string | null
          status?: string | null
          stripe_id?: string | null
          user_id?: string | null
        }
        Update: {
          activated_by?: string | null
          amount?: number
          created_at?: string
          currency?: string
          email?: string | null
          external_ref?: string | null
          id?: string
          is_backfill?: boolean
          metadata?: Json
          method?: string
          paid_at?: string | null
          product_id?: string | null
          product_name?: string | null
          source?: string | null
          status?: string | null
          stripe_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      pending_user_products: {
        Row: {
          created_at: string | null
          email: string
          expires_at: string
          id: string
          status: string | null
          stripe_customer_id: string
          stripe_payment_id: string | null
          stripe_product_id: string
          stripe_session_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          expires_at: string
          id?: string
          status?: string | null
          stripe_customer_id: string
          stripe_payment_id?: string | null
          stripe_product_id: string
          stripe_session_id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          expires_at?: string
          id?: string
          status?: string | null
          stripe_customer_id?: string
          stripe_payment_id?: string | null
          stripe_product_id?: string
          stripe_session_id?: string
        }
        Relationships: []
      }
      peru_vive_leads: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          tag: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          tag?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          tag?: string
        }
        Relationships: []
      }
      plans: {
        Row: {
          author: string | null
          badge: string | null
          category: string | null
          cover_image_url: string | null
          created_at: string | null
          description: string
          features: string[]
          file_name: string | null
          file_size_mb: number | null
          file_url: string | null
          id: string
          name: string
          pages: number | null
          preview_url: string | null
          price: number
          stripe_price_id: string
          stripe_product_id: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          badge?: string | null
          category?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          description: string
          features: string[]
          file_name?: string | null
          file_size_mb?: number | null
          file_url?: string | null
          id?: string
          name: string
          pages?: number | null
          preview_url?: string | null
          price: number
          stripe_price_id: string
          stripe_product_id?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          badge?: string | null
          category?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          description?: string
          features?: string[]
          file_name?: string | null
          file_size_mb?: number | null
          file_url?: string | null
          id?: string
          name?: string
          pages?: number | null
          preview_url?: string | null
          price?: number
          stripe_price_id?: string
          stripe_product_id?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profile_completion_progress: {
        Row: {
          completion_percentage: number | null
          created_at: string | null
          has_avatar: boolean | null
          has_bio: boolean | null
          has_intention: boolean | null
          has_name: boolean | null
          has_phone: boolean | null
          has_posted_introduction: boolean | null
          id: string
          is_complete: boolean | null
          profile_xp_earned: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completion_percentage?: number | null
          created_at?: string | null
          has_avatar?: boolean | null
          has_bio?: boolean | null
          has_intention?: boolean | null
          has_name?: boolean | null
          has_phone?: boolean | null
          has_posted_introduction?: boolean | null
          id?: string
          is_complete?: boolean | null
          profile_xp_earned?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completion_percentage?: number | null
          created_at?: string | null
          has_avatar?: boolean | null
          has_bio?: boolean | null
          has_intention?: boolean | null
          has_name?: boolean | null
          has_phone?: boolean | null
          has_posted_introduction?: boolean | null
          id?: string
          is_complete?: boolean | null
          profile_xp_earned?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          referrer_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id: string
          is_active?: boolean | null
          referrer_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          referrer_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string | null
          id: string
          level: number
          referrer_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          level: number
          referrer_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          level?: number
          referrer_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      reto_exotico_leads: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          tag: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          tag?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          tag?: string
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
      saved_conferences: {
        Row: {
          audience_profile: string | null
          central_theme: string | null
          content: string
          created_at: string | null
          duration: string | null
          event_type: string
          id: string
          objective: string | null
          title: string
          user_id: string
        }
        Insert: {
          audience_profile?: string | null
          central_theme?: string | null
          content: string
          created_at?: string | null
          duration?: string | null
          event_type: string
          id?: string
          objective?: string | null
          title: string
          user_id: string
        }
        Update: {
          audience_profile?: string | null
          central_theme?: string | null
          content?: string
          created_at?: string | null
          duration?: string | null
          event_type?: string
          id?: string
          objective?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      speaker_leads: {
        Row: {
          assigned_to: string | null
          audience_size: string | null
          budget_range: string | null
          chat_history: Json | null
          company: string | null
          created_at: string | null
          email: string
          event_date: string | null
          first_name: string | null
          gclid: string | null
          id: string
          job_title: string | null
          landing_page: string | null
          last_interaction_at: string | null
          last_name: string | null
          lead_score: number | null
          lead_status: string | null
          needs_attention: boolean
          next_followup_at: string | null
          notes: string | null
          organization_type: string | null
          phone: string | null
          referrer: string | null
          service_interest: string | null
          source: string | null
          updated_at: string | null
          urgency: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          assigned_to?: string | null
          audience_size?: string | null
          budget_range?: string | null
          chat_history?: Json | null
          company?: string | null
          created_at?: string | null
          email: string
          event_date?: string | null
          first_name?: string | null
          gclid?: string | null
          id?: string
          job_title?: string | null
          landing_page?: string | null
          last_interaction_at?: string | null
          last_name?: string | null
          lead_score?: number | null
          lead_status?: string | null
          needs_attention?: boolean
          next_followup_at?: string | null
          notes?: string | null
          organization_type?: string | null
          phone?: string | null
          referrer?: string | null
          service_interest?: string | null
          source?: string | null
          updated_at?: string | null
          urgency?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          assigned_to?: string | null
          audience_size?: string | null
          budget_range?: string | null
          chat_history?: Json | null
          company?: string | null
          created_at?: string | null
          email?: string
          event_date?: string | null
          first_name?: string | null
          gclid?: string | null
          id?: string
          job_title?: string | null
          landing_page?: string | null
          last_interaction_at?: string | null
          last_name?: string | null
          lead_score?: number | null
          lead_status?: string | null
          needs_attention?: boolean
          next_followup_at?: string | null
          notes?: string | null
          organization_type?: string | null
          phone?: string | null
          referrer?: string | null
          service_interest?: string | null
          source?: string | null
          updated_at?: string | null
          urgency?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      speaker_management_applications: {
        Row: {
          country: string | null
          created_at: string
          email: string
          experience_level: string | null
          experience_years: string | null
          full_name: string
          id: string
          management_types: string[] | null
          message: string | null
          status: string
          topics: string | null
          updated_at: string
          video_url: string | null
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          email: string
          experience_level?: string | null
          experience_years?: string | null
          full_name: string
          id?: string
          management_types?: string[] | null
          message?: string | null
          status?: string
          topics?: string | null
          updated_at?: string
          video_url?: string | null
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string
          experience_level?: string | null
          experience_years?: string | null
          full_name?: string
          id?: string
          management_types?: string[] | null
          message?: string | null
          status?: string
          topics?: string | null
          updated_at?: string
          video_url?: string | null
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      speaker_pro_subscriptions: {
        Row: {
          created_at: string | null
          email: string
          enrolled_at: string | null
          id: string
          last_email_sent: string | null
          last_lesson_reminded: number | null
          name: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          enrolled_at?: string | null
          id?: string
          last_email_sent?: string | null
          last_lesson_reminded?: number | null
          name?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          enrolled_at?: string | null
          id?: string
          last_email_sent?: string | null
          last_lesson_reminded?: number | null
          name?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
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
      stage_content: {
        Row: {
          assessment_questions: Json | null
          content_order: number
          content_type: string
          created_at: string | null
          description: string | null
          estimated_minutes: number | null
          id: string
          is_active: boolean | null
          is_required: boolean | null
          reading_content: string | null
          reflection_prompts: string[] | null
          stage_number: number
          thumbnail_url: string | null
          title: string
          vimeo_video_id: string | null
        }
        Insert: {
          assessment_questions?: Json | null
          content_order: number
          content_type: string
          created_at?: string | null
          description?: string | null
          estimated_minutes?: number | null
          id?: string
          is_active?: boolean | null
          is_required?: boolean | null
          reading_content?: string | null
          reflection_prompts?: string[] | null
          stage_number: number
          thumbnail_url?: string | null
          title: string
          vimeo_video_id?: string | null
        }
        Update: {
          assessment_questions?: Json | null
          content_order?: number
          content_type?: string
          created_at?: string | null
          description?: string | null
          estimated_minutes?: number | null
          id?: string
          is_active?: boolean | null
          is_required?: boolean | null
          reading_content?: string | null
          reflection_prompts?: string[] | null
          stage_number?: number
          thumbnail_url?: string | null
          title?: string
          vimeo_video_id?: string | null
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
      test_personaje_leads: {
        Row: {
          answers: Json
          created_at: string
          email: string
          id: string
          name: string | null
          newsletter_opt_in: boolean
          personaje: string | null
          personaje_slug: string | null
          project_id: string | null
          scores: Json
          source: string
          synced_to_newsletter: boolean
        }
        Insert: {
          answers?: Json
          created_at?: string
          email: string
          id?: string
          name?: string | null
          newsletter_opt_in?: boolean
          personaje?: string | null
          personaje_slug?: string | null
          project_id?: string | null
          scores?: Json
          source?: string
          synced_to_newsletter?: boolean
        }
        Update: {
          answers?: Json
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          newsletter_opt_in?: boolean
          personaje?: string | null
          personaje_slug?: string | null
          project_id?: string | null
          scores?: Json
          source?: string
          synced_to_newsletter?: boolean
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
      trend_digest_deliveries: {
        Row: {
          delivered_at: string
          message_id: string | null
          post_id: string
          recipient: string
        }
        Insert: {
          delivered_at?: string
          message_id?: string | null
          post_id: string
          recipient: string
        }
        Update: {
          delivered_at?: string
          message_id?: string | null
          post_id?: string
          recipient?: string
        }
        Relationships: [
          {
            foreignKeyName: "trend_digest_deliveries_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "ov_trend_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achieved_at: string | null
          achievement_id: string
          id: string
          user_id: string
        }
        Insert: {
          achieved_at?: string | null
          achievement_id: string
          id?: string
          user_id: string
        }
        Update: {
          achieved_at?: string | null
          achievement_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_assessments: {
        Row: {
          ai_analysis: string | null
          birth_date: string
          created_at: string | null
          email: string
          id: string
          improvement_area: string | null
          life_area: string | null
          name: string
          phrase: string | null
          reaction: string | null
          social_media: string | null
          user_id: string | null
          webhook_status: string | null
          word: string | null
        }
        Insert: {
          ai_analysis?: string | null
          birth_date: string
          created_at?: string | null
          email: string
          id?: string
          improvement_area?: string | null
          life_area?: string | null
          name: string
          phrase?: string | null
          reaction?: string | null
          social_media?: string | null
          user_id?: string | null
          webhook_status?: string | null
          word?: string | null
        }
        Update: {
          ai_analysis?: string | null
          birth_date?: string
          created_at?: string | null
          email?: string
          id?: string
          improvement_area?: string | null
          life_area?: string | null
          name?: string
          phrase?: string | null
          reaction?: string | null
          social_media?: string | null
          user_id?: string | null
          webhook_status?: string | null
          word?: string | null
        }
        Relationships: []
      }
      user_community_progress: {
        Row: {
          comments_created: number
          created_at: string
          current_level: number
          last_activity_at: string | null
          levels_unlocked: boolean | null
          levels_unlocked_at: string | null
          likes_given: number
          likes_received: number
          posts_created: number
          profile_completed: boolean | null
          profile_completed_at: string | null
          stage_0_completed: boolean | null
          stage_0_completed_at: string | null
          stage_1_completed: boolean | null
          stage_1_completed_at: string | null
          total_xp: number
          updated_at: string
          user_id: string
          videos_watched: number
        }
        Insert: {
          comments_created?: number
          created_at?: string
          current_level?: number
          last_activity_at?: string | null
          levels_unlocked?: boolean | null
          levels_unlocked_at?: string | null
          likes_given?: number
          likes_received?: number
          posts_created?: number
          profile_completed?: boolean | null
          profile_completed_at?: string | null
          stage_0_completed?: boolean | null
          stage_0_completed_at?: string | null
          stage_1_completed?: boolean | null
          stage_1_completed_at?: string | null
          total_xp?: number
          updated_at?: string
          user_id: string
          videos_watched?: number
        }
        Update: {
          comments_created?: number
          created_at?: string
          current_level?: number
          last_activity_at?: string | null
          levels_unlocked?: boolean | null
          levels_unlocked_at?: string | null
          likes_given?: number
          likes_received?: number
          posts_created?: number
          profile_completed?: boolean | null
          profile_completed_at?: string | null
          stage_0_completed?: boolean | null
          stage_0_completed_at?: string | null
          stage_1_completed?: boolean | null
          stage_1_completed_at?: string | null
          total_xp?: number
          updated_at?: string
          user_id?: string
          videos_watched?: number
        }
        Relationships: []
      }
      user_level_tasks: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          is_completed: boolean | null
          response_data: Json | null
          task_id: string | null
          user_id: string
          xp_earned: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean | null
          response_data?: Json | null
          task_id?: string | null
          user_id: string
          xp_earned?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean | null
          response_data?: Json | null
          task_id?: string | null
          user_id?: string
          xp_earned?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_level_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "level_tasks"
            referencedColumns: ["id"]
          },
        ]
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
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          id: string
          intention: string | null
          membership: string | null
          name: string | null
          phone: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          id?: string
          intention?: string | null
          membership?: string | null
          name?: string | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          id?: string
          intention?: string | null
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
      user_stage_progress: {
        Row: {
          completed_at: string | null
          content_id: string | null
          created_at: string | null
          id: string
          is_completed: boolean | null
          response_data: Json | null
          stage_number: number
          user_id: string
          watch_percentage: number | null
        }
        Insert: {
          completed_at?: string | null
          content_id?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean | null
          response_data?: Json | null
          stage_number: number
          user_id: string
          watch_percentage?: number | null
        }
        Update: {
          completed_at?: string | null
          content_id?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean | null
          response_data?: Json | null
          stage_number?: number
          user_id?: string
          watch_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_stage_progress_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "stage_content"
            referencedColumns: ["id"]
          },
        ]
      }
      video_transcripts: {
        Row: {
          blog_post_id: string
          candidate_count: number
          created_at: string
          error_message: string | null
          extracted_at: string | null
          extraction_model: string | null
          extraction_status: string
          full_text: string
          id: string
          language: string
          segments: Json
          source: string
          source_url: string | null
          source_video_id: string | null
          speaker_scope: string
          status: string
          transcript_notes: string | null
          updated_at: string
        }
        Insert: {
          blog_post_id: string
          candidate_count?: number
          created_at?: string
          error_message?: string | null
          extracted_at?: string | null
          extraction_model?: string | null
          extraction_status?: string
          full_text?: string
          id?: string
          language?: string
          segments?: Json
          source?: string
          source_url?: string | null
          source_video_id?: string | null
          speaker_scope?: string
          status?: string
          transcript_notes?: string | null
          updated_at?: string
        }
        Update: {
          blog_post_id?: string
          candidate_count?: number
          created_at?: string
          error_message?: string | null
          extracted_at?: string | null
          extraction_model?: string | null
          extraction_status?: string
          full_text?: string
          id?: string
          language?: string
          segments?: Json
          source?: string
          source_url?: string | null
          source_video_id?: string | null
          speaker_scope?: string
          status?: string
          transcript_notes?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_transcripts_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "tedx_quote_inventory"
            referencedColumns: ["blog_post_id"]
          },
          {
            foreignKeyName: "video_transcripts_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "youtube_blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      video_watch_history: {
        Row: {
          created_at: string | null
          id: string
          last_watched_at: string | null
          post_id: string
          total_xp_earned: number | null
          user_id: string
          watch_count: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_watched_at?: string | null
          post_id: string
          total_xp_earned?: number | null
          user_id: string
          watch_count?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_watched_at?: string | null
          post_id?: string
          total_xp_earned?: number | null
          user_id?: string
          watch_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "video_watch_history_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_watch_history_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "vw_forum_post_catalog"
            referencedColumns: ["id"]
          },
        ]
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
      xp_rules: {
        Row: {
          action: string
          daily_limit: number | null
          description: string
          xp_points: number
        }
        Insert: {
          action: string
          daily_limit?: number | null
          description: string
          xp_points: number
        }
        Update: {
          action?: string
          daily_limit?: number | null
          description?: string
          xp_points?: number
        }
        Relationships: []
      }
      xp_transactions: {
        Row: {
          action_type: string
          created_at: string
          id: string
          reference_id: string | null
          user_id: string
          xp_amount: number
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          reference_id?: string | null
          user_id: string
          xp_amount: number
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          reference_id?: string | null
          user_id?: string
          xp_amount?: number
        }
        Relationships: []
      }
      youtube_blog_posts: {
        Row: {
          ai_exercises: Json | null
          ai_generated_at: string | null
          ai_key_points: Json | null
          ai_recommendations: Json | null
          ai_reflections: string | null
          ai_summary: string | null
          category_id: string
          comment_count: number | null
          created_at: string | null
          description: string | null
          duration_seconds: number | null
          id: string
          playlist_id: string
          published_at: string | null
          reading_time_minutes: number | null
          seo_description: string | null
          seo_keywords: string[] | null
          seo_schema: Json | null
          seo_title: string | null
          site_id: string | null
          slug: string
          status: string | null
          thumbnail: string | null
          title: string
          updated_at: string | null
          video_id: string
          view_count: number | null
        }
        Insert: {
          ai_exercises?: Json | null
          ai_generated_at?: string | null
          ai_key_points?: Json | null
          ai_recommendations?: Json | null
          ai_reflections?: string | null
          ai_summary?: string | null
          category_id: string
          comment_count?: number | null
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          id?: string
          playlist_id: string
          published_at?: string | null
          reading_time_minutes?: number | null
          seo_description?: string | null
          seo_keywords?: string[] | null
          seo_schema?: Json | null
          seo_title?: string | null
          site_id?: string | null
          slug: string
          status?: string | null
          thumbnail?: string | null
          title: string
          updated_at?: string | null
          video_id: string
          view_count?: number | null
        }
        Update: {
          ai_exercises?: Json | null
          ai_generated_at?: string | null
          ai_key_points?: Json | null
          ai_recommendations?: Json | null
          ai_reflections?: string | null
          ai_summary?: string | null
          category_id?: string
          comment_count?: number | null
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          id?: string
          playlist_id?: string
          published_at?: string | null
          reading_time_minutes?: number | null
          seo_description?: string | null
          seo_keywords?: string[] | null
          seo_schema?: Json | null
          seo_title?: string | null
          site_id?: string | null
          slug?: string
          status?: string | null
          thumbnail?: string | null
          title?: string
          updated_at?: string | null
          video_id?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "youtube_blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_blog_settings: {
        Row: {
          auto_publish: boolean | null
          category_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          last_sync_at: string | null
          playlist_id: string
          playlist_name: string
          updated_at: string | null
        }
        Insert: {
          auto_publish?: boolean | null
          category_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_sync_at?: string | null
          playlist_id: string
          playlist_name: string
          updated_at?: string | null
        }
        Update: {
          auto_publish?: boolean | null
          category_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_sync_at?: string | null
          playlist_id?: string
          playlist_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "youtube_blog_settings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
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
      live_events_public: {
        Row: {
          created_at: string | null
          description: string | null
          end_time: string | null
          id: string | null
          level: string | null
          max_attendees: number | null
          price: number | null
          sharing_text: string | null
          start_time: string | null
          status: string | null
          stripe_price_id: string | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_time?: string | null
          id?: string | null
          level?: string | null
          max_attendees?: number | null
          price?: number | null
          sharing_text?: string | null
          start_time?: string | null
          status?: string | null
          stripe_price_id?: string | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_time?: string | null
          id?: string | null
          level?: string | null
          max_attendees?: number | null
          price?: number | null
          sharing_text?: string | null
          start_time?: string | null
          status?: string | null
          stripe_price_id?: string | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tedx_quote_inventory: {
        Row: {
          approved_quotes: number | null
          blog_post_id: string | null
          blog_status: string | null
          candidate_quotes: number | null
          duration_seconds: number | null
          extracted_at: string | null
          extraction_model: string | null
          extraction_status: string | null
          pending_quotes: number | null
          published_at: string | null
          published_quotes: number | null
          rejected_quotes: number | null
          slug: string | null
          source_url: string | null
          source_video_id: string | null
          speaker_scope: string | null
          title: string | null
          transcript_id: string | null
          transcript_notes: string | null
          transcript_segments: number | null
          transcript_source: string | null
          transcript_status: string | null
          video_id: string | null
        }
        Relationships: []
      }
      vw_all_leads: {
        Row: {
          captured_at: string | null
          email: string | null
          id: string | null
          name: string | null
          phone: string | null
          source: string | null
          source_label: string | null
        }
        Relationships: []
      }
      vw_forum_post_catalog: {
        Row: {
          category_id: string | null
          comment_count: number | null
          created_at: string | null
          id: string | null
          is_locked: boolean | null
          is_pinned: boolean | null
          like_count: number | null
          status: string | null
          title: string | null
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          category_id?: string | null
          comment_count?: number | null
          created_at?: string | null
          id?: string | null
          is_locked?: boolean | null
          is_pinned?: boolean | null
          like_count?: number | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          category_id?: string | null
          comment_count?: number | null
          created_at?: string | null
          id?: string | null
          is_locked?: boolean | null
          is_pinned?: boolean | null
          like_count?: number | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "forum_categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      activate_dnc: {
        Args: { p_token: string }
        Returns: {
          company_id: string
          dnc_active: boolean
        }[]
      }
      activate_omv_quote_campaign: {
        Args: { p_campaign_id: string; p_confirm?: boolean }
        Returns: boolean
      }
      append_omv_quote_campaign_jobs: {
        Args: { p_campaign_id: string }
        Returns: number
      }
      award_user_xp: {
        Args: {
          p_action_type: string
          p_reference_id?: string
          p_user_id: string
        }
        Returns: {
          level_up: boolean
          new_level: number
          new_total_xp: number
          xp_awarded: number
        }[]
      }
      check_level_completion: {
        Args: { p_level_number: number; p_user_id: string }
        Returns: boolean
      }
      check_stage_completion: {
        Args: { p_stage_number: number; p_user_id: string }
        Returns: boolean
      }
      claim_cash_coupon: {
        Args: { p_code: string; p_name: string }
        Returns: {
          amount_mxn: number
          coupon_code: string
          course_name: string
          message: string
          ok: boolean
          status: string
        }[]
      }
      claim_due_enrollments: {
        Args: { p_limit?: number; p_lock_minutes?: number }
        Returns: {
          contact_id: string
          created_at: string
          current_step: number
          enrolled_at: string
          id: string
          last_email_at: string | null
          last_error: string | null
          lead_email: string | null
          lead_name: string | null
          lead_phone: string | null
          lead_source: string | null
          next_email_at: string | null
          paused_at: string | null
          sequence_id: string
          status: string
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "funnel_enrollments"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      classify_speaker_lead_tier: {
        Args: {
          p_audience_size: string
          p_budget_range: string
          p_company: string
          p_event_date: string
          p_lead_score: number
          p_organization_type: string
          p_phone: string
          p_urgency: string
        }
        Returns: string
      }
      consume_omv_pass: {
        Args: { p_destination: string; p_token_hash: string }
        Returns: {
          email: string
          first_name: string
          last_name: string
        }[]
      }
      create_admin_user: {
        Args: { admin_email: string; admin_name?: string }
        Returns: Json
      }
      create_corporate_lead: {
        Args: {
          p_answers?: Json
          p_company: string
          p_company_size?: string
          p_email: string
          p_employees_count?: number
          p_industry?: string
          p_name: string
          p_phone?: string
          p_scores?: Json
        }
        Returns: {
          dashboard_token: string
          id: string
        }[]
      }
      crm_tag_counts: {
        Args: { p_project_id: string }
        Returns: {
          cnt: number
          tag: string
        }[]
      }
      get_admin_pulse: { Args: { p_days?: number }; Returns: Json }
      get_admin_pulse_feed: {
        Args: { p_limit?: number }
        Returns: {
          detail: string
          kind: string
          label: string
          occurred_at: string
        }[]
      }
      get_course_students: {
        Args: { p_product_id: string }
        Returns: {
          email: string
          name: string
          user_id: string
        }[]
      }
      get_current_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["app_role"]
      }
      get_dnc_company_by_ref: {
        Args: { p_ref: string }
        Returns: {
          company: string
          company_id: string
          dnc_active: boolean
          slug: string
        }[]
      }
      get_dnc_company_public: {
        Args: { p_company_id: string }
        Returns: {
          company: string
          dnc_active: boolean
        }[]
      }
      get_dnc_progress: {
        Args: { p_token: string }
        Returns: {
          department: string
          seniority: string
          total: number
        }[]
      }
      get_dnc_report: {
        Args: { p_token: string }
        Returns: {
          company: string
          company_id: string
          director_scores: Json
          dnc_active: boolean
          employees_count: number
          responses: Json
          slug: string
        }[]
      }
      get_lead_capture_timeseries: {
        Args: { p_days?: number }
        Returns: {
          count: number
          day: string
          source: string
        }[]
      }
      get_lead_source_stats: {
        Args: never
        Returns: {
          last_24h: number
          last_30d: number
          last_7d: number
          source: string
          source_label: string
          total: number
        }[]
      }
      get_live_event_attendees: {
        Args: { p_event_id: string }
        Returns: {
          email: string
          name: string
          user_id: string
        }[]
      }
      get_live_event_stream: {
        Args: { _event_id: string }
        Returns: {
          youtube_stream_id: string
          youtube_stream_url: string
        }[]
      }
      get_omv_instagram_token: { Args: never; Returns: string }
      get_owned_plan_file: {
        Args: { _plan_id: string }
        Returns: {
          file_name: string
          file_url: string
        }[]
      }
      get_trends_cron_status: {
        Args: never
        Returns: {
          active: boolean
          jobname: string
          last_message: string
          last_start: string
          last_status: string
          schedule: string
        }[]
      }
      get_trends_system_status: { Args: never; Returns: Json }
      has_hbl_access: { Args: { p_email: string }; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      hbl_on_access_granted: {
        Args: { p_email: string; p_name: string }
        Returns: undefined
      }
      increment_omv_quote_metric: {
        Args: { metric: string; quote_id: string }
        Returns: undefined
      }
      lookup_public_coupon: {
        Args: { p_code: string }
        Returns: {
          amount_mxn: number
          claimed: boolean
          course_name: string
          found: boolean
          product_id: string
          status: string
        }[]
      }
      prepare_omv_quote_campaign: {
        Args: {
          p_campaign_id: string
          p_daily_publish_time: string
          p_publish_times?: string[]
          p_starts_on: string
          p_timezone?: string
        }
        Returns: number
      }
      public_unsubscribe: {
        Args: { p_action?: string; p_token: string }
        Returns: {
          email: string
          found: boolean
          kind: string
          status: string
        }[]
      }
      recompute_speaker_pro_consultation_unlock: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      set_omv_instagram_token: { Args: { p_token: string }; Returns: undefined }
      submit_dnc_response: {
        Args: {
          p_answers: Json
          p_barreras?: Json
          p_company_id: string
          p_cultura_score?: number
          p_department: string
          p_ejecucion_score?: number
          p_scores: Json
          p_seniority: string
          p_total_score?: number
        }
        Returns: boolean
      }
      submit_hbl_lead: {
        Args: { p_email: string; p_name: string }
        Returns: string
      }
      submit_press_feed_lead: {
        Args: {
          p_company: string
          p_email: string
          p_message?: string
          p_name: string
          p_type: string
        }
        Returns: string
      }
      submit_speaker_lead: {
        Args: { p_payload: Json }
        Returns: {
          deduped: boolean
          lead_id: string
        }[]
      }
      track_video_watch: {
        Args: {
          p_post_id: string
          p_user_id: string
          p_watch_percentage: number
        }
        Returns: {
          is_first_watch: boolean
          total_watches: number
          xp_awarded: number
        }[]
      }
      unaccent_safe: { Args: { txt: string }; Returns: string }
      user_owns_course: {
        Args: { _course_slug: string; _user_id: string }
        Returns: boolean
      }
      validate_customer_access: {
        Args: { customer_user_id: string }
        Returns: boolean
      }
      validate_invitation_token: {
        Args: { token_value: string }
        Returns: {
          email: string
          expires_at: string
          id: string
          product_ids: string[]
          status: string
        }[]
      }
      validate_unsubscribe_token: {
        Args: { token_value: string }
        Returns: {
          contact_id: string
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "user" | "crm_admin" | "crm_editor" | "crm_support"
      cash_payment_status: "pending" | "activated" | "expired" | "cancelled"
      crm_activity_type:
        | "note"
        | "email_in"
        | "email_out"
        | "system"
        | "status_change"
      crm_contact_status:
        | "new"
        | "warm"
        | "customer"
        | "invalid"
        | "unsubscribed"
      crm_email_status: "queued" | "sent" | "failed" | "bounced"
      lead_status:
        | "nuevo"
        | "contactado"
        | "agendado"
        | "cerrado"
        | "descartado"
      user_role: "admin" | "user" | "cliente"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user", "crm_admin", "crm_editor", "crm_support"],
      cash_payment_status: ["pending", "activated", "expired", "cancelled"],
      crm_activity_type: [
        "note",
        "email_in",
        "email_out",
        "system",
        "status_change",
      ],
      crm_contact_status: [
        "new",
        "warm",
        "customer",
        "invalid",
        "unsubscribed",
      ],
      crm_email_status: ["queued", "sent", "failed", "bounced"],
      lead_status: ["nuevo", "contactado", "agendado", "cerrado", "descartado"],
      user_role: ["admin", "user", "cliente"],
    },
  },
} as const
