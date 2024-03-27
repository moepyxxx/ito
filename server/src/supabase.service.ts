import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  supabase: SupabaseClient;
  async onModuleInit() {
    const supabaseUrl = 'http://localhost:54321';
    const supabaseKey = process.env.SUPABASE_KEY || '';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }
}
