declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      ANON: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export {};