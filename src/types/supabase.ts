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
      answers: {
        Row: {
          answers: string[] | null
          created_at: string
          id: string
          username: string | null
        }
        Insert: {
          answers?: string[] | null
          created_at?: string
          id?: string
          username?: string | null
        }
        Update: {
          answers?: string[] | null
          created_at?: string
          id?: string
          username?: string | null
        }
        Relationships: []
      }
      lastActions: {
        Row: {
          actions: Json[] | null
          chatId: number | null
          created_at: string
          id: number
          username: string | null
        }
        Insert: {
          actions?: Json[] | null
          chatId?: number | null
          created_at?: string
          id?: number
          username?: string | null
        }
        Update: {
          actions?: Json[] | null
          chatId?: number | null
          created_at?: string
          id?: number
          username?: string | null
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string | null
          id: number
          messageToReceiver: string | null
          receiverUsername: string | null
          senderGender: string | null
          senderUsername: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          messageToReceiver?: string | null
          receiverUsername?: string | null
          senderGender?: string | null
          senderUsername?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          messageToReceiver?: string | null
          receiverUsername?: string | null
          senderGender?: string | null
          senderUsername?: string | null
        }
        Relationships: []
      }
      reports: {
        Row: {
          created_at: string
          id: number
          reports: Json[] | null
          username: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          reports?: Json[] | null
          username?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          reports?: Json[] | null
          username?: string | null
        }
        Relationships: []
      }
      responsesToRequest: {
        Row: {
          created_at: string | null
          id: number
          receiverCity: string | null
          receiverGender: string | null
          receiverUsername: string | null
          senderCity: string | null
          senderGender: string | null
          senderUsername: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          receiverCity?: string | null
          receiverGender?: string | null
          receiverUsername?: string | null
          senderCity?: string | null
          senderGender?: string | null
          senderUsername?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          receiverCity?: string | null
          receiverGender?: string | null
          receiverUsername?: string | null
          senderCity?: string | null
          senderGender?: string | null
          senderUsername?: string | null
        }
        Relationships: []
      }
      unregistered: {
        Row: {
          chatId: number | null
          createdAt: string | null
          firstName: string | null
          id: string
          language: string | null
          lastName: string | null
          state: string | null
          username: string | null
        }
        Insert: {
          chatId?: number | null
          createdAt?: string | null
          firstName?: string | null
          id?: string
          language?: string | null
          lastName?: string | null
          state?: string | null
          username?: string | null
        }
        Update: {
          chatId?: number | null
          createdAt?: string | null
          firstName?: string | null
          id?: string
          language?: string | null
          lastName?: string | null
          state?: string | null
          username?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          activeSearchExpiresAt: string | null
          age: number | null
          bio: string | null
          birthdate: string | null
          chatId: number | null
          city: string | null
          country: string | null
          createdAt: string | null
          favoriteDrinks: string | null
          firstName: string | null
          gender: string | null
          id: string
          interests: string | null
          isActiveSearch: boolean | null
          isBanned: boolean | null
          isPremium: boolean | null
          isTested: boolean | null
          languageCode: string | null
          lastActivity: string | null
          lastName: string | null
          lastTimeActiveSearch: string | null
          lastUpdated: string | null
          latitude: number | null
          longitude: number | null
          photoUrl: string | null
          premiumExpiresAt: string | null
          requestCount: number | null
          state: string | null
          status: string | null
          street: string | null
          tokens: number | null
          username: string | null
          waitForRadius: string | null
        }
        Insert: {
          activeSearchExpiresAt?: string | null
          age?: number | null
          bio?: string | null
          birthdate?: string | null
          chatId?: number | null
          city?: string | null
          country?: string | null
          createdAt?: string | null
          favoriteDrinks?: string | null
          firstName?: string | null
          gender?: string | null
          id?: string
          interests?: string | null
          isActiveSearch?: boolean | null
          isBanned?: boolean | null
          isPremium?: boolean | null
          isTested?: boolean | null
          languageCode?: string | null
          lastActivity?: string | null
          lastName?: string | null
          lastTimeActiveSearch?: string | null
          lastUpdated?: string | null
          latitude?: number | null
          longitude?: number | null
          photoUrl?: string | null
          premiumExpiresAt?: string | null
          requestCount?: number | null
          state?: string | null
          status?: string | null
          street?: string | null
          tokens?: number | null
          username?: string | null
          waitForRadius?: string | null
        }
        Update: {
          activeSearchExpiresAt?: string | null
          age?: number | null
          bio?: string | null
          birthdate?: string | null
          chatId?: number | null
          city?: string | null
          country?: string | null
          createdAt?: string | null
          favoriteDrinks?: string | null
          firstName?: string | null
          gender?: string | null
          id?: string
          interests?: string | null
          isActiveSearch?: boolean | null
          isBanned?: boolean | null
          isPremium?: boolean | null
          isTested?: boolean | null
          languageCode?: string | null
          lastActivity?: string | null
          lastName?: string | null
          lastTimeActiveSearch?: string | null
          lastUpdated?: string | null
          latitude?: number | null
          longitude?: number | null
          photoUrl?: string | null
          premiumExpiresAt?: string | null
          requestCount?: number | null
          state?: string | null
          status?: string | null
          street?: string | null
          tokens?: number | null
          username?: string | null
          waitForRadius?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
